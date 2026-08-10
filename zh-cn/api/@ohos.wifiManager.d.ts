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
 * @file
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * 提供操作或管理WLAN的方法。
 * @namespace wifiManager
 * @since 9
 */
/**
 * 提供操作或管理WLAN的方法。
 * @namespace wifiManager
 * @atomicservice
 * @since 11
 */
/**
 * 提供操作或管理WLAN的方法。
 * @namespace wifiManager
 * @syscap SystemCapability.Communication.WiFi.STA
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace wifiManager {
  /**
   * 启动WLAN。
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   *  ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
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
   * 关闭WLAN。
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
   * 使能WLAN半关闭（STA关闭、其他P2p、Hml可用）。
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
   * 查询WLAN开关是否已使能。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN已使能时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
    /**
   * 查询WLAN开关是否已使能。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN已使能时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 11
   */
  /**
   * 查询WLAN开关是否已使能。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN已使能时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * 查询WLAN开关是否已使能。
   * @returns { boolean } WLAN已使能时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function isWifiActive(): boolean;

  /**
   * 启动WLAN扫描。
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
   * 启动WLAN扫描。
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
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Promise<Array<WifiScanInfo>> } 返回扫描到的WLAN热点信息（如果有）。
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
   * 获取WLAN开关详细状态。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { WifiDetailState } 返回WLAN状态信息。
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
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
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
   * 获取扫描结果，使用同步方式返回扫描到的WLAN热点信息（如果有）。
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or
   * (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns { Array<WifiScanInfo> } 返回扫描到的WLAN热点信息（如果有）。
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
   * 获取扫描结果。如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiScanInfo> } 返回扫描到的WLAN热点信息（如果有）。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */

  /**
   * 获取扫描结果。如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiScanInfo> } 返回扫描到的WLAN热点信息（如果有）。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getScanInfoList(): Array<WifiScanInfo>;

  /**
   * 用户可以在WLAN关闭时触发扫描。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { boolean } isScanAlwaysAllowed - true表示允许触发扫描，false表示WLAN关闭时不允许触发扫描。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
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
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { boolean } 扫描运行状态为true时返回{@code true}，否则返回{@code false}。
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
   * 添加WLAN连接配置到设备。添加配置时将更新配置。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - 表示连接到WLAN网络的设备配置。
   * @returns { Promise<int> } 添加配置时返回{@code networkId}，否则返回{@code -1}。
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
   * 添加WLAN连接配置到设备。添加配置时将更新配置。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - 表示连接到WLAN网络的设备配置。
   * @param { AsyncCallback<int> } callback - 表示addDeviceConfig的回调函数。
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
   * 添加指定的候选热点配置，并返回networkId。
   * 此方法一次添加一个配置。添加此配置后，设备将决定是否连接到该热点。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - 候选配置。
   * @returns { Promise<number> } 添加配置时返回{@code networkId}，否则返回{@code -1}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

 /**
   * 添加指定的候选热点配置，并返回networkId。
   * 此方法一次添加一个配置。添加此配置后，设备将决定是否连接到该热点。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - 候选配置。
   * @returns { Promise<int> } 添加配置时返回{@code networkId}，否则返回{@code -1}。
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @atomicservice
  * @since 12 dynamic
  * @since 23 static
  */
  function addCandidateConfig(config: WifiDeviceConfig): Promise<int>;
  
  /**
   * 添加指定的候选热点配置，并返回networkId。
   * 此方法一次添加一个配置。添加此配置后，设备将决定是否连接到该热点。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - 候选配置。
   * @param { AsyncCallback<number> } callback - 表示addCandidateConfig的回调函数。
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @since 9
  */

  /**
   * 添加指定的候选热点配置，并返回networkId。
   * 此方法一次添加一个配置。添加此配置后，设备将决定是否连接到该热点。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - 候选配置。
   * @param { AsyncCallback<int> } callback - 表示addCandidateConfig的回调函数。
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
  *     2. Incorrect parameter types. 3.Parameter verification failed.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @atomicservice
  * @since 12 dynamic
  * @since 23 static
  */
  function addCandidateConfig(config: WifiDeviceConfig, callback: AsyncCallback<int>): void;

  /**
   * 移除指定的候选热点配置，只允许移除自己添加的配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - 将要移除的网络ID。
   * @returns { Promise<void> } 返回结果。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * 移除指定的候选热点配置，只允许移除自己添加的配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 将要移除的网络ID。
   * @returns { Promise<void> } 返回结果。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int): Promise<void>;

  /**
   * 移除指定的候选热点配置，只允许移除自己添加的配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - 将要移除的网络ID。
   * @param { AsyncCallback<void> } callback - 表示removeCandidateConfig的回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * 移除指定的候选热点配置，只允许移除自己添加的配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 将要移除的网络ID。
   * @param { AsyncCallback<void> } callback - 表示removeCandidateConfig的回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function removeCandidateConfig(networkId: int, callback: AsyncCallback<void>): void;

  /**
   * 获取自己添加的所有已存在的候选WLAN配置列表。
   * 只能获取自己在应用上创建的WLAN配置。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Array<WifiDeviceConfig> } 返回您在应用上创建的所有已存在的WLAN配置列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 获取自己添加的所有已存在的候选WLAN配置列表。
   * 只能获取自己在应用上创建的WLAN配置。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiDeviceConfig> } 返回您在应用上创建的所有已存在的WLAN配置列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */

  /**
   * 获取自己添加的所有已存在的候选WLAN配置列表。
   * 只能获取自己在应用上创建的WLAN配置。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiDeviceConfig> } 返回您在应用上创建的所有已存在的WLAN配置列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getCandidateConfigs(): Array<WifiDeviceConfig>;

  /**
   * 通过networkId连接到指定的候选热点，只允许连接自己添加的配置。此方法一次连接一个配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - 将要连接的网络ID。networkId的值不能小于0。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * 通过networkId连接到指定的候选热点，只允许连接自己添加的配置。此方法一次连接一个配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 将要连接的网络ID。networkId的值不能小于0。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function connectToCandidateConfig(networkId: int): void;

  /**
   * 使用连接设置连接到指定的候选热点。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { ConnectSettings } settings - 表示连接设置。
   * @returns { Promise<void> } - 返回用于返回操作结果的Promise对象。
   *     如果操作失败，返回错误信息。
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
   * 通过networkId连接到指定的候选热点，并等待用户响应结果。
   * 只允许连接自己添加的配置。此方法一次连接一个配置。
   * 应用必须在前台运行。
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { int } networkId - 将要连接的网络ID。networkId的值不能小于0。
   * @returns { Promise<void> } - 返回用于返回操作结果的Promise对象。
   * 如果操作失败，返回错误信息。
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
   * 通过networkId连接到WLAN热点。
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION or ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } networkId - 已连接网络的ID。networkId的值不能小于0。
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
   * 连接到指定网络（如果当前已经连接到热点，请先使用disconnect()接口断开连接）。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   * ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config - 表示连接到WLAN热点的设备配置。
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
   * 断开STA与WLAN热点之间的连接。
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
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
   * 根据WLAN RSSI和频段计算WLAN信号强度。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { int } rssi - 表示WLAN RSSI。
   * @param { int } band - 表示WLAN频段。
   * @returns { int } 返回WLAN信号强度，范围从0到4。
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
   * 获取WLAN连接信息。如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } 返回WLAN连接信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * 获取WLAN连接信息。如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } 返回WLAN连接信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;
  
  /**
   * 当WLAN处于MLO（多链路操作）状态时，获取多个WLAN连接信息。
   * 如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。 
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Array<WifiLinkedInfo> } 返回WLAN多链路信息。
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
   * 获取WLAN连接信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 获取WLAN连接信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
   * 获取WLAN连接信息。此接口同步返回结果。
   * 如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { WifiLinkedInfo } 返回WLAN连接信息。
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
   * 检查WLAN连接是否已建立。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN连接已建立时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * 检查WLAN连接是否已建立。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN连接已建立时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function isConnected(): boolean;

  /**
   * 查询设备支持的特性。
   * 检查此设备是否支持指定特性。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { long } 返回此设备支持的特性。
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
   * 检查设备是否支持指定特性。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { long } featureId 表示特性的ID。
   * @returns { boolean } 此设备支持指定特性时返回{@code true}，否则返回{@code false}。
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
   * 获取WLAN设备的MAC地址。必须先使能WLAN。
   * MAC地址是唯一的，无法更改。
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns { string[] } 返回WLAN设备的MAC地址。
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
   * 获取WLAN连接的IPv4信息。
   * IP信息包括主机IP地址、网关地址和DNS信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { IpInfo } 返回WLAN连接的IP信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  function getIpInfo(): IpInfo;

  /**
   * 获取WLAN连接的IPv6信息。
   * IPv6信息包括主机IP地址、网关地址和DNS信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Ipv6Info } 返回WLAN连接的IPv6信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function getIpv6Info(): Ipv6Info;

  /**
   * 获取设备的国家码。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { string } 返回此设备的国家码。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(): string;

  /**
   * 重新关联当前网络。
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
   * 重新连接当前网络。
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
   * 获取所有已存在的WLAN配置列表。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<WifiDeviceConfig> } 返回您在应用上创建的所有已存在的WLAN配置列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 15 dynamic
   * @since 23 static
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * 根据网络ID获取单条WLAN配置。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { int } networkId - 待获取的WLAN配置的网络ID。
   * @returns { WifiDeviceConfig } 返回与网络ID对应的WLAN配置。
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
   * 更新指定的WLAN配置。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config 表示要更新的WLAN配置。
   * @returns { int } 更新成功时返回更新后的WLAN配置中的网络ID；
   *     如果列表中不包含指定的WLAN配置，则返回{@code -1}。
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
   * 通过networkId去使能指定的DeviceConfig。
   * 去使能后的DeviceConfig将不再被关联。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId 标识要去使能的网络。networkId的值不能小于0。
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
    * 通过networkId在一段时间内去使能指定的DeviceConfig。
    * 去使能后的DeviceConfig将不再被关联。
    * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
    * @param { int } netId 标识要去使能的网络。networkId的值不能小于0。
    * @param { int } blockDuration 表示网络去使能的持续时间（单位为秒），
    *     如果值为-1，表示永久去使能。
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
   * 移除所有已保存的WLAN配置。
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
   * 通过networkId移除WLAN DeviceConfig。
   * WLAN DeviceConfig移除后，其配置将从WLAN配置列表中删除。
   * 如果该WLAN DeviceConfig正在连接中，则连接将被中断。
   * 应用只能删除自己创建的WLAN DeviceConfig。
   * @permission ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or
   * ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)
   * @param { int } id - 表示WLAN DeviceConfig的ID。networkId的值不能小于0。
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
   * 检查当前设备是否支持指定频段。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiBandType } bandType - 表示频段类型。
   * @returns { boolean }支持指定频段时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  function isBandTypeSupported(bandType: WifiBandType): boolean;

  /**
   * 获取设备支持的5G信道列表。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<int> } 返回5G信道列表。
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
   * 获取最近的断开连接原因。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { DisconnectedReason } 返回最近的断开连接原因。
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
   * 启动Portal认证。
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
   * 查询热点是否为按流量计费热点。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 热点为按流量计费热点时返回{@code true}，否则返回{@code false}。
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
   * 启动hiLink握手。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { boolean } isHiLinkEnable - 表示是否使能HiLink。
   * @param { string } bssid - 表示WLAN bssid。
   * @param { WifiDeviceConfig } config - 表示WLAN设备配置。
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
   * 启动WLAN热点功能。
   * 此方法为异步方法。WLAN热点使能后，WLAN可能会被关闭。
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
   * 关闭WLAN热点功能。
   * 此方法为异步方法。如果WLAN热点关闭后WLAN已使能，则WLAN可能会重新使能。
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
   * 检查作为WLAN热点的设备是否同时支持2.4 GHz和5 GHz WLAN。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } 方法调用成功时返回{@code true}，否则返回{@code false}。
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
   * 检查在某些情况下是否可以操作WLAN热点。当飞行模式开启
   * 且不支持softap与sta共存，也不支持信号桥接时，
   * 热点开关无法操作。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } 可以操作WLAN热点时返回{@code true}，否则返回{@code false}。
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
   * 检查设备上的WLAN热点是否已激活。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN热点已使能时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * 检查设备上的WLAN热点是否已激活。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN热点已使能时返回{@code true}，否则返回{@code false}。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function isHotspotActive(): boolean;

  /**
   * 设置设备的热点配置。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - 表示WLAN热点配置。
   *     SSID和{@code securityType}必须有效且正确。
   *     如果{@code securityType}不是{@code open}，{@code preSharedKey}必须有效且正确。
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
   * 获取WLAN热点配置。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { HotspotConfig } 返回已存在或已使能的WLAN热点配置。
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
   * 获取连接到WLAN热点的站点列表。
   * 此方法只能在作为WLAN热点的设备上使用。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } 连接到WLAN热点的客户端列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * 获取连接到WLAN热点的站点列表。
   * 此方法只能在作为WLAN热点的设备上使用。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } 连接到WLAN热点的客户端列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getStations(): Array<StationInfo>;

   /**
   * 将站点添加到黑名单，该站点无法访问热点。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - 将要添加到黑名单的站点。
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
   * 从黑名单中删除站点，该站点可以访问热点。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { StationInfo } stationInfo - 将要从黑名单中删除的站点。
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
   * 获取黑名单中的所有站点。如果未获取ohos.permission.GET_WIFI_PEERS_MAC权限，返回随机bssid。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } 黑名单中的站点。
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
   * 获取P2P连接信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } 返回P2P连接信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;
  
  /**
   * 获取P2P连接信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pLinkedInfo> } callback - 表示回调函数。
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
   * 获取当前P2P群组信息。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<WifiP2pGroupInfo> } 返回P2P群组信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 获取当前P2P群组信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pGroupInfo> } 返回P2P群组信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * 获取当前P2P群组信息。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 获取当前P2P群组信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * 获取已发现设备的信息。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<WifiP2pDevice[]> } 返回P2P设备信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 获取已发现设备的信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pDevice[]> } 返回P2P设备信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;
  
  /**
   * 获取已发现设备的信息。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 获取已发现设备的信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * 获取本设备的信息。 
   * 如果未获取ohos.permission.GET_WIFI_LOCAL_MAC权限，返回的WifiP2pDevice中的DeviceAddress将设置为"00:00:00:00:00:00"。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { Promise<WifiP2pDevice> } 返回本设备的信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 获取本设备的信息。 
   * 如果未获取ohos.permission.GET_WIFI_LOCAL_MAC权限，返回的WifiP2pDevice中的DeviceAddress将设置为"00:00:00:00:00:00"。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pDevice> } 返回本设备的信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 11 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(): Promise<WifiP2pDevice>;
  
  /**
   * 获取本设备的信息。 
   * 如果未获取ohos.permission.GET_WIFI_LOCAL_MAC权限，返回的WifiP2pDevice中的DeviceAddress将设置为"00:00:00:00:00:00"。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { AsyncCallback<WifiP2pDevice> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 获取本设备的信息。 
   * 如果未获取ohos.permission.GET_WIFI_LOCAL_MAC权限，返回的WifiP2pDevice中的DeviceAddress将设置为"00:00:00:00:00:00"。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pDevice> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 11 dynamic
   * @since 23 static
   */
  function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void;

  /**
   * 创建P2P群组。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - 表示群组的配置。
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
   * 移除P2P群组。
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
   * 使用指定配置发起与设备的P2P连接。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { WifiP2PConfig } config - 表示连接到指定群组的配置。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 使用指定配置发起与设备的P2P连接。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - 表示连接到指定群组的配置。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1.Incorrect parameter types.
   *     2.Parameter verification failed.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function p2pConnect(config: WifiP2PConfig): void;

  /**
   * 停止正在建立的P2P连接。
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
   * 开始发现WLAN P2P设备。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 开始发现WLAN P2P设备。
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   * @since 23 static
   */
  function startDiscoverDevices(): void;

  /**
   * 停止发现WLAN P2P设备。
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
   * 删除指定网络ID的持久P2P群组。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { int } netId - 表示要删除的群组的网络ID。
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
   * 获取群组信息。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<Array<WifiP2pGroupInfo>> } 返回群组信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * 获取群组信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<WifiP2pGroupInfo>> } 返回群组信息。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>;
  
  /**
   * 获取群组信息。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<Array<WifiP2pGroupInfo>> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * 获取群组信息。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<WifiP2pGroupInfo>> } callback - 表示回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @throws {BusinessError} 2801001 - Wi-Fi STA disabled.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void;

  /**
   * 设置WLAN P2P设备的名称。
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName - 表示要设置的名称。
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
   * 订阅WLAN状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 注册的回调函数，0:未激活，1:已激活，2:激活中，3:去激活中。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 注册WLAN状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回0：未激活，1：已激活，2：正在激活，3：正在去激活。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * 注册WLAN状态改变事件。
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
   * 取消注册WLAN状态改变事件。
   *
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 取消注册WLAN状态改变事件。
   *
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * 取消注册WLAN状态改变事件。
   *
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiStateChange(callback?: Callback<int>): void;

  /**
   * 注册WLAN连接状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回0：已断开，1：已连接。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 注册WLAN连接状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回0：已断开，1：已连接。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

    /**
   * 注册WLAN连接状态改变事件。
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
   * 取消注册WLAN连接状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 取消注册WLAN连接状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * 取消注册WLAN连接状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @crossplatform
   * @since 23 static
   */
  function offWifiConnectionChange(callback?: Callback<int>): void;

  /**
   * 注册扫描状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回0：扫描失败，1：扫描成功。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 注册扫描状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回0：扫描失败，1：扫描成功。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * 注册扫描状态改变事件。
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
   * 取消注册扫描状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 取消注册扫描状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * 取消注册扫描状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册WLAN接收信号强度(RSSI)变化事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。
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
   * 注册WLAN接收信号强度(RSSI)变化事件。
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
   * 取消注册WLAN接收信号强度(RSSI)变化事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 取消注册WLAN接收信号强度(RSSI)变化事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册WLAN流量改变事件。
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回1：下行流量，2：上行流量，3：双向流量。
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
   * 注册WLAN流量改变事件。
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<int> } callback - 状态改变回调函数。返回1：下行流量，2：上行流量，3：双向流量。
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
   * 取消注册WLAN流量改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 取消注册WLAN流量改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册设备配置改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回0：配置已添加，1：配置已更改，2：配置已删除。
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
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。,
   *     0: config is added, 1: config is changed, 2: config is removed.
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
   * 注册设备配置改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'deviceConfigChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。,
   *     0: config is added, 1: config is changed, 2: config is removed.
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
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。,
   *     0: config is added, 1: config is changed, 2: config is removed.
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
   * 注册热点状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。,
   *     0: inactive, 1: active, 2: activating, 3: de-activating
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
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<int> } callback - 状态改变回调函数。,
   *     0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 23 static
   */
  function onHotspotStateChange(callback: Callback<int>): void;

  /**
   * 取消注册热点状态改变事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册热点STA加入事件。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 事件名称。
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
   * 取消注册热点STA加入事件。
   * 如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 事件名称。
   * @param { Callback<StationInfo> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册热点STA离开事件。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 事件名称。
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
  function onHotspotStaLeave(callback: Callback<StationInfo>): void;

  /**
   * 取消注册热点STA离开事件。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 事件名称。
   * @param { Callback<StationInfo> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册P2P开关状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。返回1：空闲，2：打开中，3：已打开，4：关闭中，5：已关闭。
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
   * 取消注册P2P开关状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册P2P连接状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 事件名称。
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数。
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
   * 取消注册P2P连接状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 事件名称。
   * @param { Callback<WifiP2pLinkedInfo> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册P2P本端设备状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 注册P2P本端设备状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * 注册P2P本端设备状态改变事件。
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
   * 取消注册P2P本端设备状态改变事件。
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 取消注册P2P本端设备状态改变事件。
   * @param { 'p2pDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * 取消注册P2P本端设备状态改变事件。
   * @param { Callback<WifiP2pDevice> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pDeviceChange(callback?: Callback<WifiP2pDevice>): void;

  /**
   * 注册P2P对端设备状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pPeerDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 注册P2P对端设备状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPeerDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * 注册P2P对端设备状态改变事件。
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
   * 取消注册P2P对端设备状态改变事件。
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'p2pPeerDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice[]> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  /**
   * 取消注册P2P对端设备状态改变事件。
   * @param { 'p2pPeerDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice[]> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 10 dynamic
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * 取消注册P2P对端设备状态改变事件。
   * @param { Callback<WifiP2pDevice[]> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 23 static
   */
  function offP2pPeerDeviceChange(callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * 注册P2P永久组状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 事件名称。
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
   * 取消注册P2P永久组状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 事件名称。
   * @param { Callback<void> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * 注册发现设备状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。
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
   * 取消注册发现设备状态改变事件。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 事件名称。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果未指定callback参数，将取消注册该事件关联的所有回调函数。
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
   * WLAN设备地址（mac/bssid）类型。
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 10
   */

  /**
   * WLAN设备地址（mac/bssid）类型。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceAddressType {
    /**
     * 随机设备地址
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 10
     */

    /**
     * 随机设备地址
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RANDOM_DEVICE_ADDRESS,

    /**
     * 真实设备地址
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 10
     */

    /**
     * 真实设备地址
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REAL_DEVICE_ADDRESS,
  }

  /**
   * WLAN EAP认证方式。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum EapMethod {
    /**
     * 不指定。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_NONE,
    /**
     * PEAP类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PEAP,
    /**
     * TLS类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TLS,
    /**
     * TTLS类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_TTLS,
    /**
     * PWD类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_PWD,
    /**
     * SIM类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_SIM,
    /**
     * AKA类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA,
    /**
     * AKA Prime类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_AKA_PRIME,
    /**
     * UNAUTH TLS类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    EAP_UNAUTH_TLS
  }

  /**
   * WLAN Phase 2认证方式。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum Phase2Method {
    /**
     * 不指定。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_NONE,
    /**
     * PAP类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_PAP,
    /**
     * MSCHAP类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAP,
    /**
     * MSCHAPV2类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_MSCHAPV2,
    /**
     * GTC类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_GTC,
    /**
     * SIM类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_SIM,
    /**
     * AKA类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA,
    /**
     * AKA Prime类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    PHASE2_AKA_PRIME
  }

  /**
   * WLAN断开原因。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum DisconnectedReason {
    /**
     * 默认原因
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_DEFAULT = 0,

    /**
     * 密码错误
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_WRONG_PWD = 1,

    /**
     * 路由器的连接数已达到最大数量限制
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DISC_REASON_CONNECTION_FULL = 2
  }

  /**
   * WLAN详细状态。
   * @enum { int } WifiDetailState
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiDetailState {
    /**
     * 状态未知
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    UNKNOWN = -1,

    /**
     * WLAN已关闭
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * WLAN已打开
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATED = 1,

    /**
     * WLAN正在打开
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    ACTIVATING = 2,

    /**
     * WLAN正在关闭
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATING = 3,

    /**
     * WLAN STA正在进入半激活状态
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVATING = 4,

    /**
     * WLAN STA处于半激活状态
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    SEMI_ACTIVE = 5,
  }

  /**
   * WLAN代理方式。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum ProxyMethod {
    /**
     * 不使用代理。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_NONE = 0,

    /**
     * 使用自动配置的代理。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_AUTO = 1,

    /**
     * 使用手动配置的代理。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    METHOD_MANUAL = 2
  }

  /**
   * WLAN类别。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiCategory {
    /**
     * 默认。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 1,

    /**
     * Wifi6。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6 = 2,

    /**
     * Wifi6+。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI6_PLUS = 3,

    /**
     * Wifi7。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7 = 4,

    /**
     * Wifi7+。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 15 dynamic
     * @since 23 static
     */
    WIFI7_PLUS = 5
  }

  /**
   * WLAN连接类型。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 18 dynamic
   * @since 23 static
   */
  enum WifiLinkType {
    /**
     * 默认连接类型。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_LINK = 0,

    /**
     * WLAN7单链连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_SINGLE_LINK = 1,

    /**
     * WLAN7 MLSR连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_MLSR = 2,

    /**
     * WLAN7 EMLSR连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_EMLSR = 3,

    /**
     * WLAN7 STR连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    WIFI7_STR = 4
  }

  /**
   * WLAN代理配置。
   * @typedef WifiProxyConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiProxyConfig {
    /** 
     * WLAN代理方式 
     * @type { ?ProxyMethod }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyMethod?: ProxyMethod;

    /** 
     * 自动配置代理的PAC网址。
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    pacWebAddress?: string;

    /** 
     * 手动配置代理的服务器主机名。 
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverHostName?: string;

    /** 
     * 手动配置代理的服务器端口。 
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    serverPort?: int;

    /** 
     * 手动配置代理的排除对象。对象之间用','分隔。
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    exclusionObjects?: string;
  }

  /**
   * WLAN EAP配置。
   * @typedef WifiEapConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface WifiEapConfig {
    /** 
     * EAP认证方式 
     * @type { EapMethod }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapMethod: EapMethod;

    /** 
     * Phase 2认证方式
     * @type { Phase2Method }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    phase2Method: Phase2Method;

    /** 
     * 身份信息
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    identity: string;

    /** 
     * 匿名身份信息
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    anonymousIdentity: string;

    /** 
     * 密码
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    password: string;

    /** 
     * CA证书别名
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caCertAlias: string;

    /** 
     * CA证书路径
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    caPath: string;

    /** 
     * 客户端证书别名
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    clientCertAlias: string;

    /** 
     * 用户证书内容
     * @type { Uint8Array }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certEntry: Uint8Array;

    /** 
     * 用户证书密码
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    certPassword: string;

    /** 
     * 备用主题匹配
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    altSubjectMatch: string;

    /** 
     * 域名后缀匹配
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    domainSuffixMatch: string;

    /** 
     * Passpoint凭据的Realm
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    realm: string;

    /** 
     * Passpoint凭据提供者的公共陆地移动网络（PLMN）
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    plmn: string;

    /** 
     * SIM卡的子ID
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapSubId: int;
  }

  /**
   * WLAN设备配置信息。
   * @typedef WifiDeviceConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * WLAN设备配置信息。
   * @typedef WifiDeviceConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiDeviceConfig {
    /** 
     * WLAN SSID：最大长度为32。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN SSID：最大长度为32。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * WLAN BSSID（MAC）：长度为6。
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN BSSID（MAC）：长度为6。
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssid?: string;

    /**
     * WLAN BSSID类型。
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    /**
     * WLAN BSSID类型。
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssidType?: DeviceAddressType;

    /**
     * WLAN密钥：最大长度为64。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN密钥：最大长度为64。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * 是否隐藏SSID，false（默认）：不隐藏
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHiddenSsid?: boolean;

    /**
     * 加密类型：参考WifiSecurityType的定义
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */

	/**
     * 加密类型：参考WifiSecurityType的定义
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * WLAN配置创建者的UID。
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    creatorUid?: int;

    /**
     * 去使能原因
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    disableReason?: int;

    /**
     * 分配的networkId
     * @type { ?number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    /**
     * 分配的networkId
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 22 dynamic
     * @since 23 static
     */
    netId?: int;

    /**
     * 随机MAC类型
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacType?: int;

    /**
     * 随机MAC地址，长度为6。
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    randomMacAddr?: string;

    /**
     * IP类型
     * @type { ?IpType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipType?: IpType;

    /**
     * 静态IP族：0 - IPv4，1 - Ipv6。
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    family?: int;

    /**
     * 静态IP配置
     * @type { ?IpConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    staticIp?: IpConfig;

    /**
     * 静态IPv6配置
     * @type { ?Ipv6Config }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    staticIpv6?: Ipv6Config;

    /**
     * EAP配置信息。
     * @type { ?WifiEapConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    eapConfig?: WifiEapConfig;

    /**
     * 代理配置。
     * @type { ?WifiProxyConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    proxyConfig?: WifiProxyConfig;

    /**
     * WAPI配置信息。
     * @type { ?WifiWapiConfig }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiConfig?: WifiWapiConfig;

    /**
     * 设备配置状态：0 - 使能，1 - 去使能，2 - 永久去使能，3 - 未知。
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    configStatus?: int;

    /**
     * 是否允许自动连接配置：false - 不允许，true - 允许。
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 17 dynamic
     * @since 23 static
     */
    isAutoConnectAllowed?: boolean;

    /**
     * 安全WLAN探测配置：false - 否，true - 是。
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isSecureWifi?: boolean;

    /**
     * 首次网络探测检测到无网络时是否显示对话框。
     * 如果为false，默认网络绑定到蜂窝网络，不显示对话框。
     * 如果为true，将显示无网络对话框，提示用户选择默认网络绑定。
     * 默认值：true。
     * 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    showNoInternetDialog?: boolean;
  }

  /**
   * WLAN WAPI配置。
   * @typedef WifiWapiConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiWapiConfig {
    /**
     * WAPI预共享密钥类型。
     * @type { WapiPskType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiPskType: WapiPskType;

    /**
     * WAPI AS证书。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiAsCert: string;

    /**
     * WAPI用户证书。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    wapiUserCert: string;
  }

  /**
   * WLAN IP配置信息。
   * @typedef IpConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpConfig {
    /**
     * IP地址。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * 网关。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * 前缀长度。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    prefixLength: int;

    /**
     * DNS服务器。
     * @type { int[] }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dnsServers: int[];

    /**
     * 域名。
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * WLAN Ipv6配置信息。
   * @typedef Ipv6Config
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface Ipv6Config {
    /**
     * IPv6地址。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    ipAddress: string;
  
    /**
     * 网关。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    gateway: string;
  
    /**
     * 前缀长度。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    prefixLength: int;
  
    /**
     * DNS服务器。
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    dnsServers: Array<string>;
  
    /**
     * 域名。
     * @type { Array<string> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    domains: Array<string>;
  }

  /**
   * WLAN信息元素。
   * @typedef WifiInfoElem
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiInfoElem {
    /**
     * 元素ID
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    eid: int;

    /**
     * 元素内容
     * @type { Uint8Array }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    content: Uint8Array;
  }

  /**
   * 描述WLAN信道带宽。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  enum WifiChannelWidth {
    /**
     * 20MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_20MHZ = 0,

    /**
     * 40MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_40MHZ = 1,

    /**
     * 80MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ = 2,

    /**
     * 160MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_160MHZ = 3,

    /**
     * 80MHz以上。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_80MHZ_PLUS = 4,

    /**
     * 无效。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    WIDTH_INVALID
  }

  /**
   * 描述WLAN扫描信息。
   * @typedef WifiScanInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  /**
   * 描述WLAN扫描信息。
   * @typedef WifiScanInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface WifiScanInfo {
    /**
     * WLAN SSID：最大长度为32 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN SSID：最大长度为32 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * WLAN BSSID（MAC）：长度为6
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN BSSID（MAC）：长度为6
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * WLAN BSSID类型
     * @type { DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    /**
     * WLAN BSSID类型
     * @type { DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssidType: DeviceAddressType;

    /**
     * 热点能力
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    capabilities: string;

    /**
     * 加密类型：参考WifiSecurityType的定义
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * 加密类型：参考WifiSecurityType的定义
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * 接收信号强度指示（RSSI）
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * 接收信号强度指示（RSSI）
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * 频段，1：2.4G，2：5G
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * 频率
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * 频率
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * 带宽
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    channelWidth: int;

    /**
     * 中心频率0。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency0: int;

    /**
     * 中心频率1。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    centerFrequency1: int;

    /**
     * 信息元素。
     * @type { Array<WifiInfoElem> }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    infoElems: Array<WifiInfoElem>;

    /**
     * 时间戳
     * @type { long }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 支持的WLAN类别
     * @type { WifiCategory }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * WLAN热点是否是HiLink网络。
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * WLAN热点是否是HiLinkPro网络。
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;
  }

  /**
   * 描述WLAN加密类型。
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9
   */
  /**
   * 描述WLAN加密类型。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum WifiSecurityType {
    /**
     * 无效的加密类型
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * 开放
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    /**
     * 开放
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /** 
     * 有线等效加密（WEP）
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * 预共享密钥（PSK）
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * 对等同步认证（SAE）
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP认证。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * SUITE_B_192 192位级别。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * 机会性无线加密。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * 指定WAPI证书。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * 指定WAPI预共享密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * WLAN能力
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum WifiCapability {  
    /**
     * WLAN自动使能能力
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WIFI_AUTO_ENABLE = 0
  }

  /**
   * 描述WAPI预共享密钥类型。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum WapiPskType {
    /**
     * WAPI预共享密钥的ASCII字符类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_ASCII = 0,

    /**
     * WAPI预共享密钥的HEX字符类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 12 dynamic
     * @since 23 static
     */
    WAPI_PSK_HEX = 1
  }

  /**
   * WLAN频段类型。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiBandType {
    /**
     * 默认。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_NONE,

    /**
     * 2.4G频段。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_2G,

    /**
     * 5G频段。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_5G,

    /**
     * 6G频段。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_6G,

    /**
     * 60G频段。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_BAND_60G
  }

  /**
   * WLAN标准。
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  enum WifiStandard {
    /**
     * 未定义
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI_STANDARD_UNDEFINED,

     /**
      * WLAN 802.11a
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11A,

     /**
      * WLAN 802.11b
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11B,

     /**
      * WLAN 802.11g
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11G,

     /**
      * WLAN 802.11n
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11N,

     /**
      * WLAN 802.11ac
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11AC,

     /**
      * WLAN 802.11ax
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11AX,

     /**
      * WLAN 802.11ad
      * @syscap SystemCapability.Communication.WiFi.STA
      * @since 10 dynamic
      * @since 23 static
      */
     WIFI_STANDARD_11AD
  }

  /**
   * WLAN连接信息。
   * @typedef WifiLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */

  /**
   * WLAN连接信息。
   * @typedef WifiLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
    
  interface WifiLinkedInfo {
    /**
     * WLAN热点的SSID
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN热点的SSID
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * WLAN热点的BSSID
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN热点的BSSID
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * WLAN连接的唯一标识ID。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * WLAN接入点的RSSI（dBm）。
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN接入点的RSSI（dBm）。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * WLAN接入点的频段。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * WLAN接入点的速度。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    linkSpeed: int;

    /**
     * WLAN接入点的下行速度。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    rxLinkSpeed: int;

    /**
     * WLAN接入点的最大上行速度。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedTxLinkSpeed: int;

    /**
     * WLAN接入点的最大下行速度。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    maxSupportedRxLinkSpeed: int;

    /**
     * WLAN接入点的频率。
     * @type { number }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    /**
     * WLAN接入点的频率。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * 此WLAN连接的接入点（AP）的SSID是否隐藏。
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * 此WLAN连接是否限制数据量。
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    isRestricted: boolean;

    /**
     * 此WLAN连接的负载值。值越大表示负载越高。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    chload: int;

    /**
     * 此WLAN连接的信噪比（SNR）。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    snr: int;

    /**
     * macAddress类型：0 - 真实MAC，1 - 随机MAC。
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macType: int;

    /**
     * 设备的WLAN MAC地址。 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * 此WLAN连接的IP地址。 
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * 此WLAN连接的supplicant状态。 
     * @type { SuppState }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    suppState: SuppState;

    /**
     * 此WLAN连接的状态。 
     * @type { ConnState }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    connState: ConnState;

    /**
     * 已连接热点的带宽。 
     * @type { WifiChannelWidth }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    channelWidth: WifiChannelWidth;

    /**
     * 当前连接的WLAN标准。 
     * @type { WifiStandard }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    wifiStandard: WifiStandard;

    /**
     * 支持的WLAN类别
     * @type { WifiCategory }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    supportedWifiCategory: WifiCategory;

    /**
     * WLAN热点是否是HiLink网络。
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    isHiLinkNetwork: boolean;

    /**
     * WLAN热点是否是HiLinkPro网络。
     * @type { ?boolean }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isHiLinkProNetwork?: boolean;

    /**
     * WLAN连接类型
     * @type { ?WifiLinkType }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 18 dynamic
     * @since 23 static
     */
    wifiLinkType?: WifiLinkType;

    /**
     * WLAN的Tx和Rx是否都正常工作
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    wifiTxRxValid?: boolean;
  }

  /**
   * WLAN IP信息。
   * @typedef IpInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9 dynamic
   * @since 23 static
   */
  interface IpInfo {
    /**
     * WLAN连接的IP地址
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: int;

    /**
     * WLAN连接的网关
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    gateway: int;

    /**
     * WLAN连接的网络掩码
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    netmask: int;

    /**
     * WLAN连接的主DNS服务器IP地址
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDns: int;

    /**
     * WLAN连接的备DNS服务器IP地址
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    secondDns: int;

    /**
     * WLAN连接的DHCP服务器IP地址
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    serverIp: int;

    /**
     * WLAN连接的IP地址租用时长
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    leaseDuration: int;
  }

  /**
   * WLAN IPv6信息。
   * @typedef Ipv6Info
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10 dynamic
   * @since 23 static
   */
  interface Ipv6Info {
    /**
     * WLAN连接的链路IPv6地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    linkIpv6Address: string;

    /**
     * WLAN连接的全局IPv6地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    globalIpv6Address: string;

    /**
     * WLAN连接的随机全局IPv6地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    randomGlobalIpv6Address: string;

    /**
     * WLAN连接的唯一IPv6地址
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    uniqueIpv6Address?: string;

    /**
     * WLAN连接的随机唯一IPv6地址
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 12 dynamic
     * @since 23 static
     */
    randomUniqueIpv6Address?: string;

    /**
     * WLAN连接的网关
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    gateway: string;

    /**
     * WLAN连接的网络掩码
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    netmask: string;

    /**
     * WLAN连接的主DNS服务器IPV6地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    primaryDNS: string;

    /**
     * WLAN连接的备DNS服务器IPV6地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10 dynamic
     * @since 23 static
     */
    secondDNS: string;
  }

  /**
   * 描述WLAN连接的设置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface ConnectSettings {  
    /**
     * WLAN连接的唯一标识ID。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    networkId: int;
  
    /**
     * 随用户操作返回，默认值为false。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    withUserAction?: boolean;
  
    /**
     * 用户操作超时阈值（单位为秒）。
     * 最大值不能超过30，默认为10。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userActionTimeout?: int;
  
    /**
     * 是否将网络添加到系统中进行连接。
     * 默认为false，如果设置为true，在连接之前会将网络添加到系统中，
     * 且无法再次获取。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    addNetworkToSystem?: boolean;
  }

  /**
   * WLAN热点配置信息。
   * @typedef HotspotConfig
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface HotspotConfig {
    /**
     * WLAN热点的SSID
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * WLAN热点的加密方式
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    securityType: WifiSecurityType;

    /**
     * WLAN热点的频段
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    band: int;

    /**
     * WLAN热点的信道。
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    channel?: int;

    /**
     * WLAN热点的密码
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    preSharedKey: string;

    /**
     * WLAN热点允许的最大连接数
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    maxConn: int;

    /**
     * DHCP服务器的IP地址，为字符串形式，例如192.168.43.1
     * @type { ?string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ipAddress?: string;
  }

  /**
   * WLAN站点信息。
   * @typedef StationInfo
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface StationInfo {
    /**
     * WLAN客户端的网络名称
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * WLAN客户端的MAC地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * WLAN客户端的MAC地址类型
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    macAddressType?: DeviceAddressType;

    /**
     * WLAN客户端的IP地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ipAddress: string;
  }

  /**
   * WLAN IP类型枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum IpType {
    /**
     * 使用静态配置的IP设置
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    STATIC,

    /**
     * 使用动态配置的IP设置
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DHCP,

    /**
     * 未分配IP详情
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * supplicant状态枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SuppState {
    /**
     * supplicant未与AP关联或已断开连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * 网络接口已去使能。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERFACE_DISABLED,

    /**
     * supplicant已去使能。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INACTIVE,

    /**
     * supplicant正在扫描WLAN连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SCANNING,

    /**
     * supplicant正在与指定AP进行认证。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * supplicant正在与指定AP进行关联。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATING,

    /**
     * supplicant已与指定AP关联。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ASSOCIATED,

    /**
     * 四次握手正在进行中。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * 群组握手正在进行中。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    GROUP_HANDSHAKE,

    /**
     * 所有认证已完成。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    COMPLETED,

    /**
     * 与supplicant建立连接失败。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNINITIALIZED,

    /**
     * supplicant处于未知或无效状态。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID
  }

  /**
   * WLAN连接状态枚举。
   *
   * @enum { int }
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
     * 正在建立WLAN连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTING,

    /**
     * WLAN连接正在认证中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    AUTHENTICATING,

    /**
     * 正在获取WLAN连接的IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    OBTAINING_IPADDR,

    /**
     * WLAN连接已建立。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED,

    /**
     * WLAN连接正在断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTING,

    /**
     * WLAN连接已断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED,

    /**
     * WLAN连接建立失败。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN
  }

  /**
   * P2P设备信息。
   *
   * @typedef WifiP2pDevice
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pDevice {
    /**
     * 设备名称
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 设备MAC地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * 设备MAC地址类型
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * 主设备类型
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    primaryDeviceType: string;

    /**
     * 设备状态
     * @type { P2pDeviceStatus }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * 设备群组能力
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupCapabilities: int;
  }

  /**
   * P2P配置信息。
   *
   * @typedef WifiP2PConfig
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2PConfig {
    /** 
     * 设备MAC地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    deviceAddress: string;

    /**
     * 设备MAC地址类型
     * @type { ?DeviceAddressType }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 10 dynamic
     * @since 23 static
     */
    deviceAddressType?: DeviceAddressType;

    /**
     * 群组网络ID。创建群组时，-1表示创建临时组，
     * -2表示创建永久组
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    netId: int;

    /**
     * 此{@code WifiP2pConfig}实例的密钥 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * 群组名称 
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * 群主带宽
     * @type { GroupOwnerBand }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goBand: GroupOwnerBand;

    /**
     * 群主频率
     * @type { ?int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 dynamic&static
     */
    goFreq?: int;
  }

  /**
   * P2P群组信息。
   *
   * @typedef WifiP2pGroupInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pGroupInfo {
    /**
     * 是否是群主
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isP2pGo: boolean;

    /**
     * 群主信息
     * @type { WifiP2pDevice }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    ownerInfo: WifiP2pDevice;

    /**
     * 群组密钥
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    passphrase: string;

    /**
     * 接口名称
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     */
    interface: string;

    /**
     * 接口名称
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 23 static
     */
    interfaceName: string;

    /**
     * 群组名称
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupName: string;

    /**
     * 网络ID
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: int;

    /**
     * 频率
     * @type { int }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * 客户端列表
     * @type { WifiP2pDevice[] }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    clientDevices: WifiP2pDevice[];

    /**
     * 群主IP地址
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    goIpAddress: string;
  }

  /**
   * P2P连接状态。
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pConnectState {
    /**
     * P2P已断开连接。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    DISCONNECTED = 0,

    /**
     * P2P已连接。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 1
  }

  /**
   * P2P连接信息。
   *
   * @typedef WifiP2pLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  interface WifiP2pLinkedInfo {
    /**
     * P2P连接状态。
     * @type { P2pConnectState }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    connectState: P2pConnectState;

    /**
     * {@code true}表示是群主，{@code false}表示不是群主。
     * @type { boolean }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    isGroupOwner: boolean;

    /**
     * 群主地址。
     * @type { string }
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    groupOwnerAddr: string;
  }

  /**
   * P2P设备状态。
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum P2pDeviceStatus {
    /** 
     * 表示P2P设备已连接。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECTED = 0,

    /** 
     * 表示P2P设备已被邀请。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    INVITED = 1,

    /**
     * 表示P2P设备失败。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED = 2,

    /**
     * 表示P2P设备可用。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    AVAILABLE = 3,

    /** 
     * 表示P2P设备不可用。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 4
  }

  /**
   * P2P群组带宽。
   *
   * @enum { int }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
  enum GroupOwnerBand {
  /**
   * 自动模式。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
    GO_BAND_AUTO = 0,

  /**
   * 2.4GHz频段。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
    GO_BAND_2GHZ = 1,

  /**
   * 5GHz频段。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9 dynamic
   * @since 23 static
   */
    GO_BAND_5GHZ = 2
  }


   /**
    * 发起WLAN网络探测。
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
    * 随机MAC地址是否被禁用。
    * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
    * @returns { boolean } 随机MAC地址已禁用时返回{@code true}；否则返回{@code false}。
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
   * 设置WLAN能力。
   *
   * @permission ohos.permission.SET_WIFI_CONFIG
   * @param { WifiCapability } capability - 标识WLAN能力枚举。
   * @param { boolean } enable - 是否使能WLAN能力，{@code true}表示使能，{@code false}表示不使能。
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
   * 获取WLAN支持的能力。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiCapability } capability - 标识WLAN能力枚举。
   * @returns { boolean } 如果指定的能力已使能，返回{@code true}；否则返回{@code false}。
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
   * 查询WLAN是否可用。
   *
   * @returns { boolean } WLAN是否可用。{@code true}表示WLAN可用，{@code false}表示WLAN不可用。
   * @throws { BusinessError } 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isWlanSupported(): boolean;
}

export default wifiManager;
