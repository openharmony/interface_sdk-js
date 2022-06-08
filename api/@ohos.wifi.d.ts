/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';

/**
 * Provides methods to operate or manage Wi-Fi.
 *
 * @since 6
 * @import import wifi from '@ohos.wifi';
 */
declare namespace wifi {
    /**
     * Queries the Wi-Fi status
     *
     * @return Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function isWifiActive(): boolean;

    /**
     * Scans Wi-Fi hotspots.
     *
     * <p>This API works in asynchronous mode.</p>
     *
     * @return Returns {@code true} if the scanning is successful, returns {@code false} otherwise.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION
     */
    function scan(): boolean;

    /**
     * Obtains the hotspot information that scanned.
     *
     * @return Returns information about scanned Wi-Fi hotspots if any.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)
     */
    function getScanInfos(): Promise<Array<WifiScanInfo>>;
    function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

    /**
     * Adds a specified untrusted hotspot configuration.
     *
     * <p>This method adds one configuration at a time. After this configuration is added,
     *     your device will determine whether to connect to the hotspot.
     *
     * @return Returns {@code true} if the untrusted hotspot configuration is added, returns {@code false} otherwise.
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.SET_WIFI_INFO
     */
     function addUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;
     function addUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;
 
     /**
      * Removes a specified untrusted hotspot configuration.
      *
      * <p>This method removes one configuration at a time.
      *
      * @return Returns {@code true} if the untrusted hotspot configuration is removed, returns {@code false} otherwise.
      * @since 7
      * @syscap SystemCapability.Communication.WiFi.STA
      * @permission ohos.permission.SET_WIFI_INFO
      */
     function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;
     function removeUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

    /**
     * Calculates the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
     *
     * @param rssi Indicates the Wi-Fi RSSI.
     * @band Indicates the Wi-Fi frequency band.
     * @return Returns Wi-Fi signal level ranging from 0 to 4.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function getSignalLevel(rssi: number, band: number): number;

    /**
     * Obtains information about a Wi-Fi connection.
     *
     * @return Returns the Wi-Fi connection information.
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function getLinkedInfo(): Promise<WifiLinkedInfo>;
    function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

    /**
     * Checks whether a Wi-Fi connection has been set up.
     *
     * @return Returns {@code true} if a Wi-Fi connection has been set up, returns {@code false} otherwise.
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function isConnected(): boolean;

    /**
     * Checks whether this device supports a specified feature.
     *
     * @param featureId Indicates the ID of the feature.
     * @return Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise.
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.Core
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function isFeatureSupported(featureId: number): boolean;

    /**
     * Obtains the IP information of a Wi-Fi connection.
     *
     * <p>The IP information includes the host IP address, gateway address, and DNS information.
     *
     * @return Returns the IP information of the Wi-Fi connection.
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function getIpInfo(): IpInfo;

    /**
     * Obtains the country code of this device.
     *
     * @return Returns the country code of this device.
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.Core
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function getCountryCode(): string;

    /**
     * Obtains information about a P2P connection.
     *
     * @return Returns the P2P connection information.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;
    function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

    /**
     * Obtains information about the current group.
     *
     * @return Returns the current group information.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
     */
    function getCurrentGroup(): Promise<WifiP2pGroupInfo>;
    function getCurrentGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

    /**
     * Obtains the information about the found devices.
     *
     * @return Returns the found devices list.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
     */
    function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;
    function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

    /**
     * Creates a P2P group.
     *
     * @param config Indicates the configuration for creating a group.
     * @return Returns {@code true} if the operation is successful, returns {@code false} otherwise.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function createGroup(config: WifiP2PConfig): boolean;

    /**
     * Removes a P2P group.
     *
     * @return Returns {@code true} if the operation is successful, returns {@code false} otherwise.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function removeGroup(): boolean;

    /**
     * Initiates a P2P connection to a device with the specified configuration.
     *
     * @param config Indicates the configuration for connecting to a specific group.
     * @return Returns {@code true} if the operation is successful, returns {@code false} otherwise.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
     */
    function p2pConnect(config: WifiP2PConfig): boolean;

    /**
     * Canceling a P2P connection.
     *
     * @return Returns {@code true} if the operation is successful, returns {@code false} otherwise.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function p2pCancelConnect(): boolean;

    /**
     * Discovers Wi-Fi P2P devices.
     *
     * @return Returns {@code true} if the operation is successful, returns {@code false} otherwise.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
     */
    function startDiscoverDevices(): boolean;

    /**
     * Stops discovering Wi-Fi P2P devices.
     *
     * @return Returns {@code true} if the operation is successful, returns {@code false} otherwise.
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function stopDiscoverDevices(): boolean;

    /**
     * Subscribe Wi-Fi status change events.
     *
     * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "wifiStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi status change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "wifiStateChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi connection change events.
     *
     * @return Returns 0: disconnected, 1: connected
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "wifiConnectionChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi connection change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "wifiConnectionChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi scan status change events.
     *
     * @return Returns 0: scan fail, 1: scan success
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "wifiScanStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi scan status change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "wifiScanStateChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi rssi change events.
     *
     * @return Returns RSSI value in dBm
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "wifiRssiChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi rssi change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "wifiRssiChange", callback?: Callback<number>): void;

    /**
     * Subscribe Wi-Fi hotspot state change events.
     *
     * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "hotspotStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe Wi-Fi hotspot state change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "hotspotStateChange", callback?: Callback<number>): void;

    /**
     * Subscribe P2P status change events.
     *
     * @return Returns 1: idle, 2: starting, 3:started, 4: closing, 5: closed
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "p2pStateChange", callback: Callback<number>): void;

    /**
     * Unsubscribe P2P status change events.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "p2pStateChange", callback?: Callback<number>): void;

    /**
     * Subscribe P2P connection change events.
     *
     * @return Returns WifiP2pLinkedInfo
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "p2pConnectionChange", callback: Callback<WifiP2pLinkedInfo>): void;

    /**
     * Unsubscribe P2P connection change events.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "p2pConnectionChange", callback?: Callback<WifiP2pLinkedInfo>): void;

    /**
     * Subscribe P2P local device change events.
     *
     * @return Returns WifiP2pDevice
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
     */
    function on(type: "p2pDeviceChange", callback: Callback<WifiP2pDevice>): void;

    /**
     * Unsubscribe P2P local device change events.
     *
     * @return Returns WifiP2pDevice
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.LOCATION
     */
    function off(type: "p2pDeviceChange", callback?: Callback<WifiP2pDevice>): void;

    /**
     * Subscribe P2P peer device change events.
     *
     * @return Returns WifiP2pDevice[]
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION
     */
    function on(type: "p2pPeerDeviceChange", callback: Callback<WifiP2pDevice[]>): void;

    /**
     * Unsubscribe P2P peer device change events.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.LOCATION
     */
    function off(type: "p2pPeerDeviceChange", callback?: Callback<WifiP2pDevice[]>): void;

    /**
     * Subscribe P2P persistent group change events.
     *
     * @return Returns void
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "p2pPersistentGroupChange", callback: Callback<void>): void;

    /**
     * Unsubscribe P2P persistent group change events.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "p2pPersistentGroupChange", callback?: Callback<void>): void;

    /**
     * Subscribe P2P discovery events.
     *
     * @return Returns 0: initial state, 1: discovery succeeded
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function on(type: "p2pDiscoveryChange", callback: Callback<number>): void;

    /**
     * Unsubscribe P2P discovery events.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @permission ohos.permission.GET_WIFI_INFO
     */
    function off(type: "p2pDiscoveryChange", callback?: Callback<number>): void;

    /**
     * Wi-Fi device configuration information.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     */
    interface WifiDeviceConfig {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Wi-Fi key: maximum length is 64 */
        preSharedKey: string;

        /** Hide SSID or not, false(default): not hide */
        isHiddenSsid: boolean;

        /** Security type: reference definition of WifiSecurityType */
        securityType: WifiSecurityType;
    }

    /**
     * Describes the scanned Wi-Fi information.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     */
    interface WifiScanInfo {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Hotspot capability */
        capabilities: string;

        /** Security type: reference definition of WifiSecurityType */
        securityType: WifiSecurityType;

        /** Received signal strength indicator (RSSI) */
        rssi: number;

        /** Frequency band, 1: 2.4G, 2: 5G */
        band: number;

        /** Frequency */
        frequency: number;

        /** Channel width */
        channelWidth: number;

        /** Time stamp */
        timestamp: number;
    }

    /**
     * Describes the wifi security type.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.Core
     */
    enum WifiSecurityType {
        /** Invalid security type */
        WIFI_SEC_TYPE_INVALID = 0,

        /** Open */
        WIFI_SEC_TYPE_OPEN = 1,

        /** Wired Equivalent Privacy (WEP) */
        WIFI_SEC_TYPE_WEP = 2,

        /** Pre-shared key (PSK) */
        WIFI_SEC_TYPE_PSK = 3,

        /** Simultaneous Authentication of Equals (SAE) */
        WIFI_SEC_TYPE_SAE = 4,
    }

    /**
     * Wi-Fi connection information.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     */
    interface WifiLinkedInfo {
        /** The SSID of the Wi-Fi hotspot */
        ssid: string;

        /** The BSSID of the Wi-Fi hotspot */
        bssid: string;

        /** The RSSI(dBm) of a Wi-Fi access point. */
        rssi: number;

        /** The frequency band of a Wi-Fi access point. */
        band: number;

        /** The speed of a Wi-Fi access point. */
        linkSpeed: number;

        /** The frequency of a Wi-Fi access point. */
        frequency: number;

        /** Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden. */
        isHidden: boolean;

        /** Whether this Wi-Fi connection restricts the data volume. */
        isRestricted: boolean;

        /** The Wi-Fi MAC address of a device. */
        macAddress: string;

        /** The IP address of this Wi-Fi connection. */
        ipAddress: number;

        /** The state of this Wi-Fi connection. */
        connState: ConnState;
    }

    /**
     * Wi-Fi IP information.
     *
     * @since 7
     * @syscap SystemCapability.Communication.WiFi.STA
     */
    interface IpInfo {
        /** The IP address of the Wi-Fi connection */
        ipAddress: number;

        /** The gateway of the Wi-Fi connection */
        gateway: number;

        /** The network mask of the Wi-Fi connection */
        netmask: number;

        /** The primary DNS server IP address of the Wi-Fi connection */
        primaryDns: number;

        /** The secondary DNS server IP address of the Wi-Fi connection */
        secondDns: number;

        /** The DHCP server IP address of the Wi-Fi connection */
        serverIp: number;

        /** The IP address lease duration of the Wi-Fi connection */
        leaseDuration: number;
    }

    /**
     * The state of Wi-Fi connection enumeration.
     *
     * @since 6
     * @syscap SystemCapability.Communication.WiFi.STA
     */
    export enum ConnState {
        /** The device is searching for an available AP. */
        SCANNING,

        /** The Wi-Fi connection is being set up. */
        CONNECTING,

        /** The Wi-Fi connection is being authenticated. */
        AUTHENTICATING,

        /** The IP address of the Wi-Fi connection is being obtained. */
        OBTAINING_IPADDR,

        /** The Wi-Fi connection has been set up. */
        CONNECTED,

        /** The Wi-Fi connection is being torn down. */
        DISCONNECTING,

        /** The Wi-Fi connection has been torn down. */
        DISCONNECTED,

        /** Failed to set up the Wi-Fi connection. */
        UNKNOWN
    }

    /**
     * P2P device information.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    interface WifiP2pDevice {
        /** Device name */
        deviceName: string;

        /** Device mac address */
        deviceAddress: string;

        /** Primary device type */
        primaryDeviceType: string;

        /** Device status */
        deviceStatus: P2pDeviceStatus;

        /** Device group capabilitys */
        groupCapabilitys: number;
    }

    /**
     * P2P config.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    interface WifiP2PConfig {
        /** Device mac address */
        deviceAddress: string;

        /**
         * Group network ID. When creating a group, -1 indicates creates a temporary group,
         * -2: indicates creates a persistent group
         */
        netId: number;

        /* The passphrase of this {@code WifiP2pConfig} instance */
        passphrase: string;

        /** Group name */
        groupName: string;

        /** Group owner band */
        goBand: GroupOwnerBand;
    }

    /**
     * P2P group information.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    interface WifiP2pGroupInfo {
        /** Indicates whether it is group owner */
        isP2pGo: boolean;

        /** Group owner information */
        ownerInfo: WifiP2pDevice;

        /** The group passphrase */
        passphrase: string;

        /** Interface name */
        interface: string;

        /** Group name */
        groupName: string;

        /** Network ID */
        networkId: number;

        /** Frequency */
        frequency: number;

        /** Client list */
        clientDevices: WifiP2pDevice[];

        /** Group owner IP address */
        goIpAddress: string;
    }

    /**
     * P2P connection status.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    enum P2pConnectState {
        DISCONNECTED = 0,
        CONNECTED = 1,
    }

    /**
     * P2P linked information.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    interface WifiP2pLinkedInfo {
        /** Connection status */
        connectState: P2pConnectState;

        /** Indicates whether it is group owner */
        isGroupOwner: boolean;

        /** Group owner address */
        groupOwnerAddr: string;
    }

    /**
     * P2P device status.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    enum P2pDeviceStatus {
        CONNECTED = 0,
        INVITED = 1,
        FAILED = 2,
        AVAILABLE = 3,
        UNAVAILABLE = 4,
    }

    /**
     * P2P group owner band.
     *
     * @since 8
     * @syscap SystemCapability.Communication.WiFi.P2P
     */
    enum GroupOwnerBand {
        GO_BAND_AUTO = 0,
        GO_BAND_2GHZ = 1,
        GO_BAND_5GHZ = 2,
    }
}

export default wifi;
