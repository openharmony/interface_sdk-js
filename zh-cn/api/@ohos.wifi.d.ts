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
 * @file
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * 提供WLAN基础功能、P2P（peer-to-peer）功能和WLAN消息通知的相应服务，让应用可以通过WLAN和其他设备互联互通。
 * @namespace wifi
 * @syscap SystemCapability.Communication.WiFi.STA
 * @since 6 dynamiconly
 */
declare namespace wifi {
  /**
   * 使能WLAN。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.enableWifi
   */
  function enableWifi(): boolean;

  /**
   * 去使能WLAN。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disableWifi
   */
  function disableWifi(): boolean;

  /**
   * 查询WLAN是否已使能。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } WLAN已使能时返回{@code true}，否则返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isWifiActive
   */
  function isWifiActive(): boolean;

  /**
   * 启动WLAN扫描。
   *
   * <p>该接口工作在异步模式。</p>
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { boolean } 扫描操作执行成功时返回{@code true}，扫描操作执行失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.scan
   */
  function scan(): boolean;

  /**
   * 获取扫描结果，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
   * @returns { Promise<Array<WifiScanInfo>> } 返回扫描到的热点列表。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getScanInfoList
   */
  function getScanInfos(): Promise<Array<WifiScanInfo>>;

  /**
   * 获取扫描结果，使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
   * @param { AsyncCallback<Array<WifiScanInfo>> } 回调函数。当成功时，err为0，data为扫描到的热点；否则err为非0值，data为空。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getScanInfoList
   */
  function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

  /**
   * 添加网络配置，使用Promise异步回调。
   *
   * <p>添加配置后，配置将被更新。</p>
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config WLAN配置信息。
   * @returns { Promise<number> } 返回添加的网络配置ID，如果值为{@code -1}表示添加失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addDeviceConfig
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<number>;

  /**
   * 添加网络配置，使用callback异步回调。
   *
   * <p>添加配置后，配置将被更新。</p>
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config WLAN配置信息。
   * @param { AsyncCallback<number> }
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
   * <p>该方法一次添加一个配置。添加该配置后，设备将决定是否连接到热点。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - WLAN配置信息。
   * @returns { Promise<boolean> }  表示操作结果，{@code true}:成功，{@code false}:失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addCandidateConfig
   */
  function addUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;

  /**
   * 添加不可信网络配置，使用callback异步回调。
   *
   * <p>该方法一次添加一个配置。添加该配置后，设备将决定是否连接到热点。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - WLAN配置信息。
   * @param { AsyncCallback<boolean> }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.addCandidateConfig
   */
  function addUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

  /**
   * 移除不可信网络配置，使用Promise异步回调。
   *
   * <p>该方法一次移除一个配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - WLAN配置信息。
   * @returns { Promise<boolean> } 表示操作结果，{@code true}:成功，{@code false}:失败。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeCandidateConfig
   */
  function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;

  /**
   * 移除不可信网络配置，使用callback异步回调。
   *
   * <p>该方法一次移除一个配置。
   *
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { WifiDeviceConfig } config - WLAN配置信息。
   * @param { AsyncCallback<boolean> }
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
   * @param { number } networkId 待连接的网络配置ID。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
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
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   * ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { WifiDeviceConfig } config WLAN配置信息。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
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
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.disconnect
   */
  function disconnect(): boolean;

  /**
   * 查询WLAN信号强度。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } rssi 热点的信号强度(dBm)。
   * @param { number } band WLAN接入点的频段。
   * @returns { number } 信号强度，取值范围为[0, 4]。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getSignalLevel
   */
  function getSignalLevel(rssi: number, band: number): number;

  /**
   * 获取WLAN连接信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiLinkedInfo> } 表示WLAN连接信息。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getLinkedInfo
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;

  /**
   * 获取WLAN连接信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiLinkedInfo> } 回调函数。当获取成功时，err为0，data表示WLAN连接信息。如果error为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getLinkedInfo
   */
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
   * 查询WLAN是否已连接。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:已连接，false:未连接。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isConnected
   */
  function isConnected(): boolean;

  /**
   * 查询设备支持的特性。
   *
   * <p>检查设备是否支持指定特性。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { number }支持的特性值。
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getSupportedFeatures
   */
  function getSupportedFeatures(): number;

  /**
   * 判断设备是否支持相关WLAN特性。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } featureId 特性ID值。
   * @returns { boolean } true:支持，false:不支持。
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isFeatureSupported
   */
  function isFeatureSupported(featureId: number): boolean;

  /**
   * 获取设备的MAC地址。WLAN必须已使能。
   *
   * <p>MAC地址是唯一的，无法更改。
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
   * <p>IP信息包括主机IP地址、网关地址和DNS信息。
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
   * @returns { boolean } true:操作成功，false:操作失败。
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
   * @returns { boolean } true:操作成功，false:操作失败。
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
   * <p>只能获取本应用创建的网络配置。
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
   * @param { WifiDeviceConfig } config WLAN配置信息。
   * @returns { number } 返回更新的网络配置ID，如果值为{@code -1}表示更新失败。
   *     如果指定的WLAN配置不在列表中，返回{@code -1}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.updateDeviceConfig
   */
  function updateNetwork(config: WifiDeviceConfig): number;

  /**
   * 去使能网络配置。
   *
   * <p>去使能的网络将不再被关联。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } netId 网络配置ID。
   * @returns { boolean } 指定网络已去使能返回{@code true}，否则返回{@code false}。
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
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
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
   * <p>删除WLAN网络后，其配置将从网络配置列表中删除。
   * 如果正在连接该WLAN网络，连接将被中断。
   * 应用只能删除自己创建的WLAN网络。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } id WLAN网络的ID，
   *     可通过{@link #addDeviceConfig}或{@link #getLinkedInfo}方法获取。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeDeviceConfig
   */
  function removeDevice(id: number): boolean;

  /**
   * 使能热点。
   *
   * <p>该方法是异步的。使能热点后，WLAN可能会被去使能。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.enableHotspot
   */
  function enableHotspot(): boolean;

  /**
   * 去使能热点。
   *
   * <p>该方法是异步的。去使能热点后，如果WLAN已使能，WLAN可能会被重新使能。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
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
   * @returns { boolean } true:支持，{@code false}:不支持。
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.isHotspotDualBandSupported
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * 热点是否已使能。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } true:已使能，false:未使能。
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
   * <p>仅支持配置OPEN和WPA2 PSK热点。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } 热点配置信息。
   *     SSID和{@code securityType}必须可用且正确。
   *     如果{@code securityType}不是{@code open}，{@code preSharedKey}必须可用且正确。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
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
   * <p>该方法只能在作为热点的设备上使用。
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
   * 获取P2P连接信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<WifiP2pLinkedInfo> } P2P连接信息。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pLinkedInfo
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;

  /**
   * 获取P2P连接信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<WifiP2pLinkedInfo> } 回调函数。获取P2P连接信息时，err为0，data为P2P连接信息；否则为错误对象。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pLinkedInfo
   */
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * 获取当前群组信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { Promise<WifiP2pGroupInfo> } 当前群组信息。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCurrentGroup
   */
  function getCurrentGroup(): Promise<WifiP2pGroupInfo>;

  /**
   * 获取当前群组信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { AsyncCallback<WifiP2pGroupInfo> } 回调函数。获取当前群组信息时，err为0，data为当前群组信息；否则为错误对象。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getCurrentGroup
   */
  function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * 获取发现的设备信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { Promise<WifiP2pDevice[]> } 发现的设备列表。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pPeerDevices
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;

  /**
   * 获取发现的设备信息。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { AsyncCallback<WifiP2pDevice[]> } 回调函数。获取发现的设备列表时，err为0，data为发现的设备列表；否则为错误对象。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.getP2pPeerDevices
   */
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * 创建P2P群组。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config 创建群组的配置。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.createP2pGroup
   */
  function createGroup(config: WifiP2PConfig): boolean;

  /**
   * 移除P2P群组。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.removeP2pGroup
   */
  function removeGroup(): boolean;

  /**
   * 使用指定配置发起与设备的P2P连接。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { WifiP2PConfig } config 连接到指定群组的配置。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.p2pConnect
   */
  function p2pConnect(config: WifiP2PConfig): boolean;

  /**
   * 取消P2P连接。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.p2pCancelConnect
   */
  function p2pCancelConnect(): boolean;

  /**
   * 发现WLAN P2P设备。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.startDiscoverP2pDevices
   */
  function startDiscoverDevices(): boolean;

  /**
   * 停止发现WLAN P2P设备。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.stopDiscoverP2pDevices
   */
  function stopDiscoverDevices(): boolean;

  /**
   * 删除指定网络ID的持久P2P群组。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } 要删除的群组的网络ID。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.deletePersistentP2pGroup
   */
  function deletePersistentGroup(netId: number): boolean;

  /**
   * 设置WLAN P2P设备名称。
   *
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName 要设置的名称。
   * @returns { boolean } 操作成功时返回{@code true}，操作失败时返回{@code false}。
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.setP2pDeviceName
   */
  function setDeviceName(devName: string): boolean;

  /**
   * 订阅WLAN状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:未激活，1:已激活，2:激活中，3:去激活中
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiStateChange
   */
  function on(type: 'wifiStateChange', callback: Callback<number>): void;

  /**
   * 取消订阅WLAN状态改变事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:未激活，1:已激活，2:激活中，3:去激活中
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiStateChange
   */
  function off(type: 'wifiStateChange', callback?: Callback<number>): void;

  /**
   * 订阅WLAN连接状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:已断开，1:已连接
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiConnectionChange
   */
  function on(type: 'wifiConnectionChange', callback: Callback<number>): void;

  /**
   * 取消订阅WLAN连接状态改变事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiConnectionChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:已断开，1:已连接
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiConnectionChange
   */
  function off(type: 'wifiConnectionChange', callback?: Callback<number>): void;

  /**
   * 订阅WLAN扫描状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:扫描失败，1:扫描成功
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiScanStateChange
   */
  function on(type: 'wifiScanStateChange', callback: Callback<number>): void;

  /**
   * 取消订阅WLAN扫描状态改变事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiScanStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:扫描失败，1:扫描成功
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiScanStateChange
   */
  function off(type: 'wifiScanStateChange', callback?: Callback<number>): void;

  /**
   * 订阅WLAN RSSI改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:wifiRssiChange
   */
  function on(type: 'wifiRssiChange', callback: Callback<number>): void;

  /**
   * 取消订阅WLAN RSSI改变事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'wifiRssiChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:wifiRssiChange
   */
  function off(type: 'wifiRssiChange', callback?: Callback<number>): void;

  /**
   * 订阅WLAN数据流改变事件。
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。1:向下，2:向上，3:双向
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:streamChange
   */
  function on(type: 'streamChange', callback: Callback<number>): void;

  /**
   * 取消订阅WLAN数据流改变事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { 'streamChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。1:向下，2:向上，3:双向
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:streamChange
   */
  function off(type: 'streamChange', callback?: Callback<number>): void;

  /**
   * 订阅WLAN热点状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:未激活，1:已激活，2:激活中，3:去激活中
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStateChange
   */
  function on(type: 'hotspotStateChange', callback: Callback<number>): void;

  /**
   * 取消订阅WLAN热点状态改变事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'hotspotStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。0:未激活，1:已激活，2:激活中，3:去激活中
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStateChange
   */
  function off(type: 'hotspotStateChange', callback?: Callback<number>): void;

  /**
   * 订阅WLAN热点STA加入事件。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 事件名称。
   * @param { Callback<StationInfo> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStaJoin
   */
  function on(type: 'hotspotStaJoin', callback: Callback<StationInfo>): void;

  /**
   * 取消订阅WLAN热点STA加入事件。
   *
   * <p>如果没有指定callback参数，将取消注册该事件关联的所有回调函数。</p>
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaJoin' } type - 事件名称。
   * @param { Callback<StationInfo> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStaJoin
   */
  function off(type: 'hotspotStaJoin', callback?: Callback<StationInfo>): void;

  /**
   * 订阅WLAN热点STA离开事件。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 事件名称。
   * @param { Callback<StationInfo> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:hotspotStaLeave
   */
  function on(type: 'hotspotStaLeave', callback: Callback<StationInfo>): void;

  /**
   * 取消订阅WLAN热点STA离开事件。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { 'hotspotStaLeave' } type - 事件名称。
   * @param { Callback<StationInfo> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:hotspotStaLeave
   */
  function off(type: 'hotspotStaLeave', callback?: Callback<StationInfo>): void;

  /**
   * 订阅P2P状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。1:空闲，2:打开中，3:已打开，4:关闭中，5:已关闭
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pStateChange
   */
  function on(type: 'p2pStateChange', callback: Callback<number>): void;

  /**
   * 取消订阅P2P状态改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pStateChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数。1:空闲，2:打开中，3:已打开，4:关闭中，5:已关闭
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pStateChange
   */
  function off(type: 'p2pStateChange', callback?: Callback<number>): void;

  /**
   * 订阅P2P连接改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 事件名称。
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pConnectionChange
   */
  function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 取消订阅P2P连接改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pConnectionChange' } type - 事件名称。
   * @param { Callback<WifiP2pLinkedInfo> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pConnectionChange
   */
  function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * 订阅P2P本地设备改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { 'p2pDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pDeviceChange
   */
  function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void;

  /**
   * 取消订阅P2P本地设备改变事件。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'p2pDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pDeviceChange
   */
  function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void;

  /**
   * 订阅P2P对端设备改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
   * @param { 'p2pPeerDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pPeerDeviceChange
   */
  function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void;

  /**
   * 取消订阅P2P对端设备改变事件。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'p2pPeerDeviceChange' } type - 事件名称。
   * @param { Callback<WifiP2pDevice[]> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pPeerDeviceChange
   */
  function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * 订阅P2P持久群组改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 事件名称。
   * @param { Callback<void> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pPersistentGroupChange
   */
  function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void;

  /**
   * 取消订阅P2P持久群组改变事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pPersistentGroupChange' } type - 事件名称。
   * @param { Callback<void> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pPersistentGroupChange
   */
  function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void;

  /**
   * 订阅P2P发现事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.on#event:p2pDiscoveryChange
   */
  function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void;

  /**
   * 取消订阅P2P发现事件。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { 'p2pDiscoveryChange' } type - 事件名称。
   * @param { Callback<number> } callback - 状态改变回调函数
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.off#event:p2pDiscoveryChange
   */
  function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void;

  /**
   * WLAN设备配置信息。
   *
   * @interface WifiDeviceConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig
   */
  interface WifiDeviceConfig {
    /** WLAN SSID：最大长度为32
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.ssid
     */
    ssid: string;

    /** WLAN BSSID(MAC)：长度为6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.bssid
     */
    bssid: string;

    /** WLAN密钥：最大长度为64
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.preSharedKey
     */
    preSharedKey: string;

    /** 是否隐藏SSID，false(默认):不隐藏
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.isHiddenSsid
     */
    isHiddenSsid: boolean;

    /** 加密类型：参考WifiSecurityType的定义
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.securityType
     */
    securityType: WifiSecurityType;

    /** WLAN配置创建者的UID
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.creatorUid
     */
    creatorUid: number;

    /** 禁用原因
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.disableReason
     */
    disableReason: number;

    /** 分配的网络ID
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.netId
     */
    netId: number;

    /** 随机MAC类型
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacType
     */
    randomMacType: number;

    /** 随机MAC地址，长度为6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacAddr
     */
    randomMacAddr: string;

    /** IP类型
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.ipType
     */
    ipType: IpType;

    /** 静态IP配置
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiDeviceConfig.staticIp
     */
    staticIp: IpConfig;
  }

  /**
   * WLAN IP配置信息。
   *
   * @interface IpConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpConfig
   */
  interface IpConfig {
    /**
     * IP地址。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.ipAddress
     */
    ipAddress: number;

    /**
     * 网关。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.gateway
     */
    gateway: number;

    /**
     * DNS服务器。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.dnsServers
     */
    dnsServers: number[];

    /**
     * 域名。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpConfig.domains
     */
    domains: Array<string>;
  }

  /**
   * 描述扫描到的WLAN信息。
   *
   * @interface WifiScanInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo
   */
  interface WifiScanInfo {
    /** WLAN SSID：最大长度为32
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.ssid
     */
    ssid: string;

    /** WLAN BSSID(MAC)：长度为6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.bssid
     */
    bssid: string;

    /** 热点能力
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.capabilities
     */
    capabilities: string;

    /** 加密类型：参考WifiSecurityType的定义
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.securityType
     */
    securityType: WifiSecurityType;

    /** 接收信号强度指示(RSSI)
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.rssi
     */
    rssi: number;

    /** 频段，1:2.4G，2:5G
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.band
     */
    band: number;

    /** 频率
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.frequency
     */
    frequency: number;

    /** 带宽
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.channelWidth
     */
    channelWidth: number;

    /**
     * 时间戳
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiScanInfo.timestamp
     */
    timestamp: number;
  }

  /**
   * 描述WLAN加密类型。
   *
   * @enum { number } WifiSecurityType
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType
   */
  enum WifiSecurityType {
    /** 无效的加密类型
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_INVALID
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /** 开放
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_OPEN
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * 有线等效保密(WEP)
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_WEP
     * */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * 预共享密钥(PSK)
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_PSK
     *  */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * 等同认证(SAE)
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiSecurityType.WIFI_SEC_TYPE_SAE
     * */
    WIFI_SEC_TYPE_SAE = 4,
  }

  /**
   * WLAN连接信息。
   *
   * @interface WifiLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo
   */
  interface WifiLinkedInfo {
    /**
     * WLAN热点的SSID
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.ssid
     * */
    ssid: string;

    /**
     *  WLAN热点的BSSID
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.bssid
     * */
    bssid: string;

    /**
     * WLAN连接的ID(唯一标识)。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.networkId
     */
    networkId: number;

    /**
     * WLAN AP的RSSI(dBm)。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.rssi
     * */
    rssi: number;

    /**
     * WLAN AP的频段。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.band
     *  */
    band: number;

    /**
     * WLAN AP的速度。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.linkSpeed
     *  */
    linkSpeed: number;

    /**
     * WLAN AP的频率。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.frequency
     *  */
    frequency: number;

    /**
     * 此WLAN连接的AP的SSID是否隐藏。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.isHidden
     *  */
    isHidden: boolean;

    /**
     * 此WLAN连接是否限制数据量。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.isRestricted
     */
    isRestricted: boolean;

    /**
     *
     * 此WLAN连接的负载值。值越大表示负载越高。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.chload
     */
    chload: number;

    /**
     * 此WLAN连接的信噪比(SNR)。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.snr
     */
    snr: number;

    /**
     *
     * 设备的WLAN MAC地址。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.macAddress
     *  */
    macAddress: string;

    /**
     * 此WLAN连接的IP地址。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.ipAddress
     *  */
    ipAddress: number;

    /**
     *
     * 此WLAN连接的 supplicant 状态。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.suppState
     */
    suppState: SuppState;

    /**
     * 此WLAN连接的状态。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiLinkedInfo.connState
     * */
    connState: ConnState;
  }

  /**
   * WLAN IP信息。
   *
   * @interface IpInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpInfo
   */
  interface IpInfo {
     /**
     * WLAN连接的IP地址
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.ipAddress
     *  */
    ipAddress: number;

    /**
     * WLAN连接的网关
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.gateway
     *  */
    gateway: number;

    /**
     * WLAN连接的网络掩码
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.netmask
     *  */
    netmask: number;

    /**
     *
     * WLAN连接的主DNS服务器IP地址
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.primaryDns
     *  */
    primaryDns: number;

    /**
     * WLAN连接的辅助DNS服务器IP地址
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.secondDns
     *  */
    secondDns: number;

    /**
     * WLAN连接的DHCP服务器IP地址
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.serverIp
     *  */
    serverIp: number;

    /**
     * WLAN连接的IP地址租约时长
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpInfo.leaseDuration
     * */
    leaseDuration: number;
  }

  /**
   * WLAN热点配置信息。
   *
   * @interface HotspotConfig
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.HotspotConfig
   */
  interface HotspotConfig {
    /**
     * WLAN热点的SSID
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.ssid
     * */
    ssid: string;

    /**
     * WLAN热点的加密类型
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.securityType
     * */
    securityType: WifiSecurityType;

    /**
     * WLAN热点的频段
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.band
     *  */
    band: number;

    /**
     * WLAN热点的密码
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.preSharedKey
     *  */
    preSharedKey: string;

    /**
     * WLAN热点允许的最大连接数
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.HotspotConfig.maxConn
     *  */
    maxConn: number;
  }

  /**
   * WLAN站点信息。
   *
   * @interface StationInfo
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.StationInfo
   */
  interface StationInfo {
    /**
     * WLAN客户端的网络名称
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.name
     *  */
    name: string;

    /**
     * WLAN客户端的MAC地址
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.macAddress
     * */
    macAddress: string;

    /**
     * WLAN客户端的IP地址
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.StationInfo.ipAddress
     * */
    ipAddress: string;
  }

  /**
   * WLAN IP类型枚举。
   *
   * @enum { number } IpType
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.IpType
   */
  enum IpType {
    /**
     * 使用静态配置的IP设置
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.STATIC
     *  */
    STATIC,

    /**
     * 使用动态配置的IP设置
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.DHCP
     * */
    DHCP,

    /**
     *  未分配IP详情
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.IpType.UNKNOWN
     *  */
    UNKNOWN,
  }

  /**
   * supplicant状态枚举。
   *
   * @enum { number } SuppState
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.SuppState
   */
  export enum SuppState {
    /** supplicant未与AP关联或已与AP断开连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.DISCONNECTED
     */
    DISCONNECTED,

    /**
     * 网络接口已禁用。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INTERFACE_DISABLED
     * */
    INTERFACE_DISABLED,

    /**
     * supplicant已禁用。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INACTIVE
     * */
    INACTIVE,

    /**
     * supplicant正在扫描WLAN连接。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.SCANNING
     * */
    SCANNING,

    /**
     * supplicant正在与指定AP进行认证。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.AUTHENTICATING
     *  */
    AUTHENTICATING,

    /**
     * supplicant正在与指定AP关联。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.ASSOCIATING
     * */
    ASSOCIATING,

    /**
     * supplicant已与指定AP关联。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.ASSOCIATED
     * */
    ASSOCIATED,

    /**
     * 四次握手正在进行中。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.FOUR_WAY_HANDSHAKE
     *  */
    FOUR_WAY_HANDSHAKE,

    /** 群组握手正在进行中。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.GROUP_HANDSHAKE
     */
    GROUP_HANDSHAKE,

    /**
     * 所有认证已完成。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.COMPLETED
     *  */
    COMPLETED,

    /**
     * 与 supplicant 建立连接失败。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.UNINITIALIZED
     *  */
    UNINITIALIZED,

    /**
     * supplicant处于未知或无效状态。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.SuppState.INVALID
     *  */
    INVALID
  }

  /**
   * WLAN连接状态枚举。
   *
   * @enum { number } ConnState
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.ConnState
   */
  export enum ConnState {
    /**
     * 设备正在搜索可用的AP。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.SCANNING
     * */
    SCANNING,

    /**
     * WLAN连接正在建立。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.CONNECTING
     * */
    CONNECTING,

    /**
     * WLAN连接正在认证。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.AUTHENTICATING
     * */
    AUTHENTICATING,

    /**
     * 正在获取WLAN连接的IP地址。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.OBTAINING_IPADDR
     * */
    OBTAINING_IPADDR,

    /**
     * WLAN连接已建立。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.CONNECTED
     *  */
    CONNECTED,

    /**
     * WLAN连接正在断开。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.DISCONNECTING
     *  */
    DISCONNECTING,

    /**
     * WLAN连接已断开。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.DISCONNECTED
     * */
    DISCONNECTED,

    /**
     * WLAN连接建立失败。
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.ConnState.UNKNOWN
     * */
    UNKNOWN
  }

  /**
   * P2P设备信息。
   *
   * @interface WifiP2pDevice
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice
   */
  interface WifiP2pDevice {
    /**
     * 设备名称
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceName
     *  */
    deviceName: string;

    /**
     * 设备MAC地址
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceAddress
     * */
    deviceAddress: string;

    /**
     *  主要设备类型
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.primaryDeviceType
     * */
    primaryDeviceType: string;

    /**
     * 设备状态
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.deviceStatus
     * */
    deviceStatus: P2pDeviceStatus;

    /**
     * 设备群组能力
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pDevice.groupCapabilitys
     *  */
    groupCapabilitys: number;
  }

  /**
   * P2P配置。
   * @interface WifiP2PConfig
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig
   */
  interface WifiP2PConfig {
    /**
     * 设备MAC地址
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.deviceAddress
     */
    deviceAddress: string;

    /**
     * 群组网络ID。创建群组时，-1表示创建临时群组，-2表示创建持久群组
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.netId
     */
    netId: number;

    /**
     * 此{@code WifiP2pConfig}实例的密码短语
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.passphrase
     *  */
    passphrase: string;

    /**
     * 群组名称
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.groupName
     *  */
    groupName: string;

    /**
     * 群组所有者频段
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2PConfig.goBand
     *  */
    goBand: GroupOwnerBand;
  }

  /**
   * P2P群组信息。
   * @interface WifiP2pGroupInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo
   */
  interface WifiP2pGroupInfo {
    /**
     * 是否为群组所有者
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.isP2pGo
     *  */
    isP2pGo: boolean;

    /**
     * 群组所有者信息
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.ownerInfo
     *  */
    ownerInfo: WifiP2pDevice;

    /**
     * 群组密码短语
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.passphrase
     *  */
    passphrase: string;

    /**
     * 接口名称
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.interface
     *  */
    interface: string;

    /**
     * 群组名称
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.groupName
     *  */
    groupName: string;

    /** 网络ID
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.networkId
     */
    networkId: number;

    /** 频率
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.frequency
     */
    frequency: number;

    /**
     * 客户端列表
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.clientDevices
     * */
    clientDevices: WifiP2pDevice[];

    /**
     * 群组所有者IP地址
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pGroupInfo.goIpAddress
     * */
    goIpAddress: string;
  }

  /**
   * P2P连接状态。
   *
   * @enum { number } P2pConnectState
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.P2pConnectState
   */
  enum P2pConnectState {
    /**
     * P2P已断开连接。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pConnectState.DISCONNECTED
     */
    DISCONNECTED = 0,

    /**
     * P2P已连接。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pConnectState.CONNECTED
     */
    CONNECTED = 1,
  }

  /**
   * P2P连接信息。
   * @typedef WifiP2pLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo
   */
  interface WifiP2pLinkedInfo {
    /**
     * 连接状态
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.connectState
     * */
    connectState: P2pConnectState;

    /**
     * 是否为群组所有者
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.isGroupOwner
     * */
    isGroupOwner: boolean;

    /**
     * 群组所有者地址
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.WifiP2pLinkedInfo.groupOwnerAddr
     *  */
    groupOwnerAddr: string;
  }

  /**
   * P2P设备状态。
   *
   * @enum { number } P2pDeviceStatus
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus
   */
  enum P2pDeviceStatus {
    /**
     * 表示P2P设备已连接。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.CONNECTED
     */
    CONNECTED = 0,

    /**
     * 表示P2P设备已邀请。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.INVITED
     */
    INVITED = 1,

    /**
     * 表示P2P设备失败。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.FAILED
     */
    FAILED = 2,

    /**
     * 表示P2P设备可用。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.AVAILABLE
     */
    AVAILABLE = 3,

    /**
     * 表示P2P设备不可用。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.P2pDeviceStatus.UNAVAILABLE
     */
    UNAVAILABLE = 4,
  }

  /**
   * P2P群组所有者频段。
   *
   * @enum { number } GroupOwnerBand
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand
   */
  enum GroupOwnerBand {
    /**
     * 默认频段。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_AUTO
     */
    GO_BAND_AUTO = 0,

    /**
     * 2.4G频段。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_2GHZ
     */
    GO_BAND_2GHZ = 1,

    /**
     * 5G频段。
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManager/wifiManager.GroupOwnerBand.GO_BAND_5GHZ
     */
    GO_BAND_5GHZ = 2,
  }
}

export default wifi;
