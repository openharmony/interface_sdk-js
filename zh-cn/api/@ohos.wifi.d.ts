/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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
 * 该模块主要提供Wi-Fi基础功能（如Wi-Fi扫描、连接管理、连接信息查询、信号强度获取等）、P2P（peer-to-peer）功能（如设备发现、群组创建与管理、P2P连接等）和Wi-Fi消息通知服务，适用于应用通过Wi-Fi接入网络
 * 或与其他设备进行点对点数据传输和互联互通的场景。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该接口不再维护，推荐使用[@ohos.wifiManager (WLAN)]{@link @ohos.wifiManager:wifiManager}等相关接口。
 *
 * @syscap SystemCapability.Communication.WiFi.STA
 * @since 6 dynamiconly
 */
declare namespace wifi {
  /**
   * 启动Wi-Fi。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.enableWifi
   */
  function enableWifi(): boolean;

  /**
   * 禁用Wi-Fi。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableWifi
   */
  function disableWifi(): boolean;

  /**
   * 查询Wi-Fi是否已使能。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:已使能， false:未使能。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isWifiActive
   */
  function isWifiActive(): boolean;

  /**
   * 启动Wi-Fi扫描。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { boolean } true:扫描操作执行成功， false:扫描操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.scan
   */
  function scan(): boolean;

  /**
   * 获取扫描结果，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
   * @returns { Promise<Array<WifiScanInfo>> } Promise对象。返回扫描到的热点列表。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getScanInfoList
   */
  function getScanInfos(): Promise<Array<WifiScanInfo>>;

  /**
   * 获取扫描结果，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
   * @param { AsyncCallback<Array<WifiScanInfo>> } callback - 回调函数。当成功时，err为0，data为扫描到的热点；否则err为非0值，data为空。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getScanInfoList
   */
  function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

  /**
   * 添加网络配置。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @returns { Promise<number> } Promise对象。返回添加的网络配置ID，如果值为-1表示添加失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addDeviceConfig
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<number>;

  /**
   * 添加网络配置。使用callback异步回调。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @param { AsyncCallback<number> } callback - 回调函数。当操作成功时，error为0，data为添加的网络配置ID，如果data值为-1，表示添加失败。当error为非0，表示处理出现错
   *     误。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addDeviceConfig
   */
  function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void;

  /**
   * 添加不可信网络配置，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @returns { Promise<boolean> } Promise对象。表示操作结果，true: 成功， false: 失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addCandidateConfig
   */
  function addUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;

  /**
   * 添加不可信网络配置，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当操作成功时，异步错误对象error为0，data表示操作结果，true: 成功， false: 失败。如果异步错误对象error
   *     为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addCandidateConfig
   */
  function addUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

  /**
   * 移除不可信网络配置，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @returns { Promise<boolean> } Promise对象。表示操作结果，true: 成功， false: 失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeCandidateConfig
   */
  function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;

  /**
   * 移除不可信网络配置，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当操作成功时，异步错误对象error为0，data表示操作结果，true: 成功， false: 失败。如果error为非0，表示
   *     处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeCandidateConfig
   */
  function removeUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

  /**
   * 应用使用该接口连接到热点。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } networkId - 待连接的网络配置ID。
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.connectToNetwork
   */
  function connectToNetwork(networkId: number): boolean;

  /**
   * 连接到指定网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   *     ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.connectToDevice
   */
  function connectToDevice(config: WifiDeviceConfig): boolean;

  /**
   * 断开连接的网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disconnect
   */
  function disconnect(): boolean;

  /**
   * 查询Wi-Fi信号强度。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } rssi - 热点的信号强度(dBm)。
   * @param { number } band - Wi-Fi接入点的频段。
   * @returns { number } 信号强度，取值范围为[0, 4]。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getSignalLevel
   */
  function getSignalLevel(rssi: number, band: number): number;

  /**
   * 获取Wi-Fi连接信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } Promise对象。表示Wi-Fi连接信息。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getLinkedInfo
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;

  /**
   * 获取Wi-Fi连接信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } callback - 回调函数。当获取成功时，err为0，data表示Wi-Fi连接信息。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getLinkedInfo
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
   * 查询Wi-Fi是否已连接。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:已连接， false:未连接。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isConnected
   */
  function isConnected(): boolean;

  /**
   * 查询设备支持的特性。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { number } 支持的特性值。特性值枚举：<br/>- 0x0001: 基础结构模式特性。<br/>- 0x0002: 5 GHz带宽特性。<br/>- 0x0004: GAS/ANQP特性。<br/>-
   *     0x0008: Wifi-Direct特性。<br/>- 0x0010: Soft AP特性。<br/>- 0x0040: Wi-Fi Aware组网特性。<br/>- 0x8000: AP STA共存特性。<br/>-
   *     0x8000000: WPA3-Personal SAE特性。<br/>- 0x10000000: WPA3-Enterprise Suite-B。<br/>- 0x20000000: 增强开放特性。
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getSupportedFeatures
   */
  function getSupportedFeatures(): number;

  /**
   * 判断设备是否支持指定featureId对应的Wi-Fi特性。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } featureId - 特性ID值。
   * @returns { boolean } true:支持， false:不支持。
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isFeatureSupported
   */
  function isFeatureSupported(featureId: number): boolean;

  /**
   * 获取设备的MAC地址。
   *
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns { string[] } MAC地址。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getDeviceMacAddress
   */
  function getDeviceMacAddress(): string[];

  /**
   * 获取IP信息。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { IpInfo } IP信息。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getIpInfo
   */
  function getIpInfo(): IpInfo;

  /**
   * 获取国家码信息。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { string } 国家码。
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCountryCode
   */
  function getCountryCode(): string;

  /**
   * 重新关联网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.reassociate
   */
  function reassociate(): boolean;

  /**
   * 重新连接网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.reconnect
   */
  function reconnect(): boolean;

  /**
   * 获取网络配置。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.GET_WIFI_CONFIG
   * @returns { Array<WifiDeviceConfig> } 网络配置信息的数组。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getDeviceConfigs
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * 更新网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config - Wi-Fi配置信息。
   * @returns { number } 返回更新的网络配置ID，如果值为-1表示更新失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.updateDeviceConfig
   */
  function updateNetwork(config: WifiDeviceConfig): number;

  /**
   * 关闭网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } netId - 网络配置ID。
   * @returns { boolean } 关闭网络配置是否成功。true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableDeviceConfig
   */
  function disableNetwork(netId: number): boolean;

  /**
   * 移除所有网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeAllDeviceConfigs
   */
  function removeAllNetwork(): boolean;

  /**
   * 移除指定的网络配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } id - 网络配置ID。
   * @returns { boolean } 移除指定的网络配置操作是否成功。true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeDeviceConfig
   */
  function removeDevice(id: number): boolean;

  /**
   * 开启热点。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } 开启热点是否成功。true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.enableHotspot
   */
  function enableHotspot(): boolean;

  /**
   * 关闭热点。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableHotspot
   */
  function disableHotspot(): boolean;

  /**
   * 热点是否支持双频。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } true:支持， false:不支持。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isHotspotDualBandSupported
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * 热点是否已激活。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 热点是否已激活 true:已激活， false:未激活。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isHotspotActive
   */
  function isHotspotActive(): boolean;

  /**
   * 设置热点配置信息。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - 热点配置信息。
   * @returns { boolean } true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.setHotspotConfig
   */
  function setHotspotConfig(config: HotspotConfig): boolean;

  /**
   * 获取热点配置信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns { HotspotConfig } 热点的配置信息。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getHotspotConfig
   */
  function getHotspotConfig(): HotspotConfig;

  /**
   * 获取连接的设备。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { Array<StationInfo> } 连接的设备数组。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getHotspotStations
   */
  function getStations(): Array<StationInfo>;

  /**
   * 获取P2P连接信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } Promise对象。表示P2P连接信息。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pLinkedInfo
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;

  /**
   * 获取P2P连接信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pLinkedInfo> } callback - 回调函数。当操作成功时，err为0，data表示P2P连接信息。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pLinkedInfo
   */
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * 获取P2P当前组信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { Promise<WifiP2pGroupInfo> } Promise对象。表示当前组信息。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCurrentGroup
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * 获取P2P当前组信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { AsyncCallback<WifiP2pGroupInfo> } callback - 回调函数。当操作成功时，err为0，data表示当前组信息。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCurrentGroup
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * 获取P2P对端设备列表信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { Promise<WifiP2pDevice[]> } Promise对象。表示对端设备列表信息。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pPeerDevices
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;

  /**
   * 获取P2P对端设备列表信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { AsyncCallback<WifiP2pDevice[]> } callback - 回调函数。当操作成功时，err为0，data表示对端设备列表信息。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pPeerDevices
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * 创建群组。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - 群组配置信息。
   * @returns { boolean } true:创建群组操作执行成功， false:创建群组操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.createP2pGroup
   */
  function createGroup(config: WifiP2PConfig): boolean;

  /**
   * 移除群组。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:操作执行成功， false:操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeP2pGroup
   */
  function removeGroup(): boolean;

  /**
   * 执行P2P连接。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { WifiP2PConfig } config - 连接配置信息。
   * @returns { boolean } true:操作执行成功， false:操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.p2pConnect
   */
  function p2pConnect(config: WifiP2PConfig): boolean;

  /**
   * 取消P2P连接。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:操作执行成功， false:操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.p2pCancelConnect
   */
  function p2pCancelConnect(): boolean;

  /**
   * 开始发现设备。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { boolean } true:操作执行成功， false:操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.startDiscoverP2pDevices
   */
  function startDiscoverDevices(): boolean;

  /**
   * 停止发现设备。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 停止发现设备是否成功。true:操作执行成功，false:操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.stopDiscoverP2pDevices
   */
  function stopDiscoverDevices(): boolean;

  /**
   * 删除永久组。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } netId - 组的ID。
   * @returns { boolean } 删除永久组操作是否执行成功。true:操作执行成功，false:操作执行失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.deletePersistentP2pGroup
   */
  function deletePersistentGroup(netId: number): boolean;

  /**
   * 设置设备名称。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName - 设备名称。
   * @returns { boolean } 设置设备名称操作是否成功。true:操作成功， false:操作失败。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.setP2pDeviceName
   */
  function setDeviceName(devName: string): boolean;

  /**
   * 注册Wi-Fi状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 固定填"wifiStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 未激活。<br/>- 1: 已激活。<br/>- 2: 激活中。<br/>- 3: 去激活中。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiStateChange
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * 取消注册Wi-Fi状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 固定填"wifiStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiStateChange
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * 注册Wi-Fi连接状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 固定填"wifiConnectionChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 已断开。<br/>- 1: 已连接。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiConnectionChange
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

  /**
   * 取消注册Wi-Fi连接状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 固定填"wifiConnectionChange"字符串。
   * @param { Callback<number> } callback - 连接状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiConnectionChange
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * 注册扫描状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 固定填"wifiScanStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 扫描失败。<br/>- 1: 扫描成功。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiScanStateChange
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * 取消注册扫描状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 固定填"wifiScanStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiScanStateChange
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * 注册RSSI状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 固定填"wifiRssiChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数，返回以dBm为单位的RSSI值。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiRssiChange
   */
  function on(type: 'wifiRssiChange', callback: Callback<number>): void;

  /**
   * 取消注册RSSI状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 固定填"wifiRssiChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiRssiChange
   */
  function off(type: 'wifiRssiChange', callback?: Callback<number>): void;

  /**
   * 注册Wi-Fi流更改事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 固定填"streamChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数，返回0：无，1：下行，2：上行，3：双向。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:streamChange
   */
  function on(type: 'streamChange', callback: Callback<number>): void;

  /**
   * 取消注册Wi-Fi流更改事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 固定填"streamChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数，返回0：无，1：下行，2：上行，3：双向。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:streamChange
   */
  function off(type: 'streamChange', callback?: Callback<number>): void;

  /**
   * 注册热点状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 固定填"hotspotStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 未激活。<br/>- 1: 已激活。<br/>- 2: 激活中。<br/>- 3: 去激活中。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStateChange
   */
  function on(type: 'hotspotStateChange', callback: Callback<number>): void;

  /**
   * 取消注册热点状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 固定填"hotspotStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStateChange
   */
  function off(type: 'hotspotStateChange', callback?: Callback<number>): void;

  /**
   * 注册Wi-Fi热点sta加入事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 固定填"hotspotStaJoin"字符串。
   * @param { Callback<StationInfo> } callback - 回调函数，返回StationInfo对象。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStaJoin
   */
  function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void;

  /**
   * 取消注册Wi-Fi热点sta加入事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 固定填"hotspotStaJoin"字符串。
   * @param { Callback<StationInfo> } callback - 回调函数，返回StationInfo对象。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStaJoin
   */
  function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void;

  /**
   * 注册Wi-Fi热点sta离开事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 固定填"hotspotStaLeave"字符串。
   * @param { Callback<StationInfo> } callback - 回调函数，返回StationInfo对象。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStaLeave
   */
  function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void;

  /**
   * 取消注册Wi-Fi热点sta离开事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 固定填"hotspotStaLeave"字符串。
   * @param { Callback<StationInfo> } callback - 回调函数，返回StationInfo对象。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStaLeave
   */
  function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void;

  /**
   * 注册P2P开关状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 固定填"p2pStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 1: 空闲。<br/>- 2: 打开中。<br/>- 3: 已打开。<br/>- 4: 关闭中。<br/
   *     >- 5: 已关闭。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pStateChange
   */
  function on(type: 'p2pStateChange', callback: Callback<number>): void;

  /**
   * 取消注册P2P开关状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 固定填"p2pStateChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pStateChange
   */
  function off(type: 'p2pStateChange', callback?: Callback<number>): void;

  /**
   * 注册P2P连接状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 固定填"p2pConnectionChange"字符串。
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pConnectionChange
   */
  function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 取消注册P2P连接状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 固定填"p2pConnectionChange"字符串。
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pConnectionChange
   */
  function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 注册P2P设备状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { 'p2pDeviceChange' } type - 固定填"p2pDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pDeviceChange
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * 取消注册P2P设备状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'p2pDeviceChange' } type - 固定填"p2pDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pDeviceChange
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * 注册P2P对端设备状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { 'p2pPeerDeviceChange' } type - 固定填"p2pPeerDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pPeerDeviceChange
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * 取消注册P2P对端设备状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'p2pPeerDeviceChange' } type - 固定填"p2pPeerDeviceChange"字符串。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pPeerDeviceChange
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * 注册P2P永久组状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 固定填"p2pPersistentGroupChange"字符串。
   * @param { Callback<void> } callback - 状态改变回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pPersistentGroupChange
   */
  function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void;

  /**
   * 取消注册P2P永久组状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 固定填"p2pPersistentGroupChange"字符串。
   * @param { Callback<void> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pPersistentGroupChange
   */
  function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void;

  /**
   * 注册发现设备状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 固定填"p2pDiscoveryChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。返回状态值枚举：<br/>- 0: 初始状态。<br/>- 1: 发现成功。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pDiscoveryChange
   */
  function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void;

  /**
   * 取消注册发现设备状态改变事件。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 固定填"p2pDiscoveryChange"字符串。
   * @param { Callback<number> } callback - 状态改变回调函数。如果callback不填，将取消注册该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pDiscoveryChange
   */
  function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void;

  /**
   * Wi-Fi配置信息。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig
   */
  interface WifiDeviceConfig {
    /**
     * 热点的SSID，最大长度为32字节，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.ssid
     */
    ssid: string;

    /**
     * 热点的BSSID，例如：00:11:22:33:44:55。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.bssid
     */
    bssid: string;

    /**
     * 热点的密钥，最大长度为64字节。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.preSharedKey
     */
    preSharedKey: string;

    /**
     * 是否是隐藏网络。true:是隐藏网络，false:不是隐藏网络。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.isHiddenSsid
     */
    isHiddenSsid: boolean;

    /**
     * 加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.securityType
     */
    securityType: WifiSecurityType;

    /**
     * 创建用户的ID。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.creatorUid
     */
    creatorUid: number;

    /**
     * 禁用原因。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.disableReason
     */
    disableReason: number;

    /**
     * 分配的网络ID。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.netId
     */
    netId: number;

    /**
     * 随机MAC类型。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacType
     */
    randomMacType: number;

    /**
     * 随机MAC地址。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacAddr
     */
    randomMacAddr: string;

    /**
     * IP地址类型。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.ipType
     */
    ipType: IpType;

    /**
     * 静态IPv4配置信息。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.staticIp
     */
    staticIp: IpConfig;
  }

  /**
   * IPv4配置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpConfig
   */
  interface IpConfig {
    /**
     * IPv4地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.ipAddress
     */
    ipAddress: number;

    /**
     * 网关。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.gateway
     */
    gateway: number;

    /**
     * DNS服务器。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.dnsServers
     */
    dnsServers: number[];

    /**
     * 域信息。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.domains
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi热点信息。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo
   */
  interface WifiScanInfo {
    /**
     * 热点的SSID，最大长度为32字节，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.ssid
     */
    ssid: string;

    /**
     * 热点的BSSID，例如：00:11:22:33:44:55。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.bssid
     */
    bssid: string;

    /**
     * 热点能力。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.capabilities
     */
    capabilities: string;

    /**
     * Wi-Fi加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.securityType
     */
    securityType: WifiSecurityType;

    /**
     * 热点的信号强度(dBm)。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.rssi
     */
    rssi: number;

    /**
     * Wi-Fi接入点的频段。1表示2.4GHz；2表示5GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.band
     */
    band: number;

    /**
     * Wi-Fi接入点的频率，单位：MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.frequency
     */
    frequency: number;

    /**
     * Wi-Fi接入点的带宽。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.channelWidth
     */
    channelWidth: number;

    /**
     * 时间戳。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.timestamp
     */
    timestamp: number;
  }

  /**
   * 表示加密类型的枚举。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType
   */
  enum WifiSecurityType {
    /**
     * 无效加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_INVALID
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * 开放加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_OPEN
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * Wired Equivalent Privacy (WEP)加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_WEP
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK)加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_PSK
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE)加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_SAE
     */
    WIFI_SEC_TYPE_SAE = 4,
  }

  /**
   * 提供Wi-Fi连接的相关信息。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo
   */
  interface WifiLinkedInfo {
    /**
     * 热点的SSID，最大长度为32字节，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.ssid
     */
    ssid: string;

    /**
     * 热点的BSSID，例如：00:11:22:33:44:55。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.bssid
     */
    bssid: string;

    /**
     * 网络配置ID。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.networkId
     */
    networkId: number;

    /**
     * 热点的信号强度(dBm)。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.rssi
     */
    rssi: number;

    /**
     * Wi-Fi接入点的频段。1表示2.4GHz；2表示5GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.band
     */
    band: number;

    /**
     * Wi-Fi接入点的速度，单位Mbps。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.linkSpeed
     */
    linkSpeed: number;

    /**
     * Wi-Fi接入点的频率，单位：MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.frequency
     */
    frequency: number;

    /**
     * Wi-Fi接入点是否是隐藏网络。true:是隐藏网络，false:不是隐藏网络。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.isHidden
     */
    isHidden: boolean;

    /**
     * Wi-Fi接入点是否限制数据量。true: 限制，false:不限制。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.isRestricted
     */
    isRestricted: boolean;

    /**
     * 连接负载，值越大表示负载越高。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.chload
     */
    chload: number;

    /**
     * 信噪比，单位：dB。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.snr
     */
    snr: number;

    /**
     * 设备的MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.macAddress
     */
    macAddress: string;

    /**
     * Wi-Fi连接的IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.ipAddress
     */
    ipAddress: number;

    /**
     * 请求状态。 
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.suppState
     */
    suppState: SuppState;

    /**
     * Wi-Fi连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.connState
     */
    connState: ConnState;
  }

  /**
   * IP信息。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpInfo
   */
  interface IpInfo {
    /**
     * IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.ipAddress
     */
    ipAddress: number;

    /**
     * 网关。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.gateway
     */
    gateway: number;

    /**
     * 掩码。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.netmask
     */
    netmask: number;

    /**
     * 主DNS服务器IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.primaryDns
     */
    primaryDns: number;

    /**
     * 备DNS服务器IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.secondDns
     */
    secondDns: number;

    /**
     * DHCP服务端IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.serverIp
     */
    serverIp: number;

    /**
     * IP地址租用时长，单位：秒(s)。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.leaseDuration
     */
    leaseDuration: number;
  }

  /**
   * 热点配置信息。
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.HotspotConfig
   */
  interface HotspotConfig {
    /**
     * 热点的SSID，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.ssid
     */
    ssid: string;

    /**
     * 加密类型。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.securityType
     */
    securityType: WifiSecurityType;

    /**
     * 热点的带宽。1: 2.4G, 2: 5G, 3: 双模频段
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.band
     */
    band: number;

    /**
     * 热点的密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.preSharedKey
     */
    preSharedKey: string;

    /**
     * 最大设备连接数。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.maxConn
     */
    maxConn: number;
  }

  /**
   * 接入的设备信息。
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.StationInfo
   */
  interface StationInfo {
    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.name
     */
    name: string;

    /**
     * MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.macAddress
     */
    macAddress: string;

    /**
     * IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.ipAddress
     */
    ipAddress: string;
  }

  /**
   * 表示IP类型的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpType
   */
  enum IpType {
    /**
     * 静态IP。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.STATIC
     */
    STATIC,

    /**
     * 通过DHCP获取。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.DHCP
     */
    DHCP,

    /**
     * 未指定。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.UNKNOWN
     */
    UNKNOWN,
  }

  /**
   * 表示请求状态的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.SuppState
   */
  export enum SuppState {
    /**
     * 已断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.DISCONNECTED
     */
    DISCONNECTED,

    /**
     * 接口禁用。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INTERFACE_DISABLED
     */
    INTERFACE_DISABLED,

    /**
     * 未激活。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INACTIVE
     */
    INACTIVE,

    /**
     * 扫描中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.SCANNING
     */
    SCANNING,

    /**
     * 认证中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.AUTHENTICATING
     */
    AUTHENTICATING,

    /**
     * 关联中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.ASSOCIATING
     */
    ASSOCIATING,

    /**
     * 已关联。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.ASSOCIATED
     */
    ASSOCIATED,

    /**
     * 四次握手。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.FOUR_WAY_HANDSHAKE
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * 组握手。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.GROUP_HANDSHAKE
     */
    GROUP_HANDSHAKE,

    /**
     * 所有认证已完成。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.COMPLETED
     */
    COMPLETED,

    /**
     * 连接建立失败。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.UNINITIALIZED
     */
    UNINITIALIZED,

    /**
     * 无效值。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INVALID
     */
    INVALID
  }

  /**
   * 表示Wi-Fi连接状态的枚举。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.ConnState
   */
  export enum ConnState {
    /**
     * 设备正在搜索可用的AP。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.SCANNING
     */
    SCANNING,

    /**
     * 正在建立Wi-Fi连接。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.CONNECTING
     */
    CONNECTING,

    /**
     * Wi-Fi连接正在认证中。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.AUTHENTICATING
     */
    AUTHENTICATING,

    /**
     * 正在获取Wi-Fi连接的IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.OBTAINING_IPADDR
     */
    OBTAINING_IPADDR,

    /**
     * Wi-Fi连接已建立。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.CONNECTED
     */
    CONNECTED,

    /**
     * Wi-Fi连接正在断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.DISCONNECTING
     */
    DISCONNECTING,

    /**
     * Wi-Fi连接已断开。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.DISCONNECTED
     */
    DISCONNECTED,

    /**
     * Wi-Fi连接建立失败。
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.UNKNOWN
     */
    UNKNOWN
  }

  /**
   * 表示P2P设备信息。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice
   */
  interface WifiP2pDevice {
    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceName
     */
    deviceName: string;

    /**
     * 设备MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceAddress
     */
    deviceAddress: string;

    /**
     * 主设备类型。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.primaryDeviceType
     */
    primaryDeviceType: string;

    /**
     * 设备状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceStatus
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * 群组能力，以位掩码形式表示群组支持的特性。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.groupCapabilitys
     */
    groupCapabilitys: number;
  }

  /**
   * 表示P2P配置信息。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig
   */
  interface WifiP2PConfig {
    /**
     * 设备地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.deviceAddress
     */
    deviceAddress: string;

    /**
     * 网络ID。创建群组时-1表示创建临时组，-2表示创建永久组。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.netId
     */
    netId: number;

    /**
     * 群组密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.passphrase
     */
    passphrase: string;

    /**
     * 群组名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.groupName
     */
    groupName: string;

    /**
     * 群组带宽。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.goBand
     */
    goBand: GroupOwnerBand;
  }

  /**
   * 表示P2P群组相关信息。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo
   */
  interface WifiP2pGroupInfo {
    /**
     * 是否是群主。true:是群主，false:不是群主。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.isP2pGo
     */
    isP2pGo: boolean;

    /**
     * 群组的设备信息。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.ownerInfo
     */
    ownerInfo: WifiP2pDevice;

    /**
     * 群组密钥。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.passphrase
     */
    passphrase: string;

    /**
     * 接口名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.interface
     */
    interface: string;

    /**
     * 群组名称。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.groupName
     */
    groupName: string;

    /**
     * 网络ID。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.networkId
     */
    networkId: number;

    /**
     * 群组的频率，单位：MHz。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.frequency
     */
    frequency: number;

    /**
     * 接入的设备列表信息。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.clientDevices
     */
    clientDevices: WifiP2pDevice[];

    /**
     * 群组IP地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.goIpAddress
     */
    goIpAddress: string;
  }

  /**
   * 表示P2P连接状态的枚举。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.P2pConnectState
   */
  enum P2pConnectState {
    /**
     * 断开状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pConnectState.DISCONNECTED
     */
    DISCONNECTED = 0,

    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pConnectState.CONNECTED
     */
    CONNECTED = 1,
  }

  /**
   * 提供P2P连接的相关信息。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo
   */
  interface WifiP2pLinkedInfo {
    /**
     * P2P连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.connectState
     */
    connectState: P2pConnectState;

    /**
     * 是否是群主。true:是群主，false:不是群主。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.isGroupOwner
     */
    isGroupOwner: boolean;

    /**
     * 群组MAC地址。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.groupOwnerAddr
     */
    groupOwnerAddr: string;
  }

  /**
   * 表示设备状态的枚举。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus
   */
  enum P2pDeviceStatus {
    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.CONNECTED
     */
    CONNECTED = 0,

    /**
     * 邀请状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.INVITED
     */
    INVITED = 1,

    /**
     * 失败状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.FAILED
     */
    FAILED = 2,

    /**
     * 可用状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.AVAILABLE
     */
    AVAILABLE = 3,

    /**
     * 不可用状态。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.UNAVAILABLE
     */
    UNAVAILABLE = 4,
  }

  /**
   * 表示群组带宽的枚举。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand
   */
  enum GroupOwnerBand {
    /**
     * 自动模式。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_AUTO
     */
    GO_BAND_AUTO = 0,

    /**
     * 2GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_2GHZ
     */
    GO_BAND_2GHZ = 1,

    /**
     * 5GHz。
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_5GHZ
     */
    GO_BAND_5GHZ = 2,
  }
}

export default wifi;