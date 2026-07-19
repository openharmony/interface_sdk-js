/*
 * Copyright (C) 2022-2024 Huawei Device Co., Ltd.
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
 * @file Ethernet Connection Management
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * The **ethernet** module provides Ethernet management functions such as configuring a network proxy and obtaining the
 * network IP address.
 *
 * @syscap SystemCapability.Communication.NetManager.Ethernet
 * @since 9 dynamic
 */
declare namespace ethernet {
  /**
   * Defines the network proxy configuration.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @since 10 dynamic
   */
  type HttpProxy = connection.HttpProxy;

  /**
   * Obtains the information about a specified network interface. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - Network interface.
   * @param { AsyncCallback<InterfaceConfiguration> } callback - Callback used to return the result. Returns information
   *     about the specified network interface.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function getIfaceConfig(iface: string, callback: AsyncCallback<InterfaceConfiguration>): void;

  /**
   * Obtains the information about a specified network interface. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - Network interface.
   * @returns { Promise<InterfaceConfiguration> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function getIfaceConfig(iface: string): Promise<InterfaceConfiguration>;

  /**
   * Sets the network interface configuration information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iface - Interface name.
   * @param { InterfaceConfiguration } ic - Network interface configuration to set.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, the
   *     return result is empty. If the operation fails, an error code is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2201004 - Invalid Ethernet profile.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @throws { BusinessError } 2201006 - Ethernet device not connected.
   * @throws { BusinessError } 2201007 - Ethernet failed to write user configuration information.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function setIfaceConfig(iface: string, ic: InterfaceConfiguration, callback: AsyncCallback<void>): void;

  /**
   * Sets the network interface configuration information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iface - Interface name.
   * @param { InterfaceConfiguration } ic - Network interface configuration to set.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, the return result is
   *     empty. If the operation fails, an error code is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2201004 - Invalid Ethernet profile.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @throws { BusinessError } 2201006 - Ethernet device not connected.
   * @throws { BusinessError } 2201007 - Ethernet failed to write user configuration information.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function setIfaceConfig(iface: string, ic: InterfaceConfiguration): Promise<void>;

  /**
   * Checks whether the interface is activated. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - Interface name. If this parameter is left empty, the API checks for any active network
   *     interface.
   * @param { AsyncCallback<int> } callback - Callback used to return the result. The value **1** means that the network
   *     interface is active, **0** means that the network interface is inactive, and any other value means that an
   *     error has occurred.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function isIfaceActive(iface: string, callback: AsyncCallback<int>): void;

  /**
   * Checks whether the interface is activated. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - Interface name. If this parameter is left empty, the API checks for any active network
   *     interface.
   * @returns { Promise<int> } Promise used to return the result. The value **1** means that the network interface is
   *     active, **0** means that the network interface is inactive, and any other value means that an error has
   *     occurred.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function isIfaceActive(iface: string): Promise<int>;

  /**
   * Obtains the active network interface. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function getAllActiveIfaces(callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the active network interface. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<string>> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function getAllActiveIfaces(): Promise<Array<string>>;

  /**
   * Registers the observer for NIC hot swap events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'interfaceStateChange' } type - Event type. The value is **interfaceStateChange**.
   * @param { Callback<{ iface: string, active: boolean }> } callback - Callback used to return the
   *     result. [since 10 - 10]
   * @param { Callback<InterfaceStateInfo> } callback - Callback used to return the result. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'interfaceStateChange', callback: Callback<InterfaceStateInfo>): void;

  /**
   * Unregisters the observer for NIC hot swap events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'interfaceStateChange' } type - Event type. The value is **interfaceStateChange**.
   * @param { Callback<{ iface: string, active: boolean }> } callback - Callback used to return the
   *     result. [since 10 - 10]
   * @param { Callback<InterfaceStateInfo> } callback - Callback used to return the result. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'interfaceStateChange', callback?: Callback<InterfaceStateInfo>): void;

  /**
   * Obtains the names and MAC addresses of all Ethernet NICs. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_ETHERNET_LOCAL_MAC
   *
   * @permission ohos.permission.GET_ETHERNET_LOCAL_MAC
   * @returns { Promise<Array<MacAddressInfo>> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @since 14 dynamic
   */
  function getMacAddress(): Promise<Array<MacAddressInfo>>;

  /**
   * Obtains the device information (such as the vendor name, product name, and maximum connection rate) of the local
   * Ethernet NIC. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<EthernetDeviceInfos>> } Promise used to return the result. If the operation is successful,
   *     the Ethernet device information list is returned. If the operation fails, an error code is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function getEthernetDeviceInfos(): Promise<Array<EthernetDeviceInfos>>;

  /**
   * Enable the ethernet interface.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } The promise returned when the ethernet interface is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function enableEthernetInterface(): Promise<void>;

  /**
   * Disable the ethernet interface.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } The promise returned when the ethernet interface is disabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function disableEthernetInterface(): Promise<void>;

  /**
   * Check whether the global ethernet switch is enabled.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } True if ethernet is globally enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function isEthernetEnabled(): boolean;

  /**
   * Defines the network configuration for the Ethernet connection.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  export interface InterfaceConfiguration {
    /**
     * Configuration mode of the Ethernet connection.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    mode: IPSetMode;
    /**
     * Static IP address of the Ethernet connection. The value must be an IPv4 address, which is a 32-bit number
     * displayed in dotted decimal notation and each 8-bit field ranges from 0 to 255. This parameter does not need to
     * be configured in Dynamic Host Configuration Protocol (DHCP) mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    ipAddr: string;

    /**
     * Route of the Ethernet connection. The value must be an IPv4 address, which is a 32-bit number displayed in dotted
     * decimal notation and each 8-bit field ranges from 0 to 255. This parameter does not need to be configured in DHCP
     * mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    route: string;

    /**
     * Gateway of the Ethernet connection. The value must be an IPv4 address, which is a 32-bit number displayed in
     * dotted decimal notation and each 8-bit field ranges from 0 to 255. This parameter does not need to be configured
     * in DHCP mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    gateway: string;

    /**
     * Subnet mask of the Ethernet connection. The value must be an IPv4 address, which is a 32-bit number displayed in
     * dotted decimal notation and each 8-bit field ranges from 0 to 255. This parameter does not need to be configured
     * in DHCP mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    netMask: string;

    /**
     * DNS server addresses of the Ethernet connection. The value must be an IPv4 address, which is a 32-bit number
     * displayed in dotted decimal notation and each 8-bit field ranges from 0 to 255. This parameter does not need to
     * be configured in DHCP mode. Multiple addresses are separated by commas (,).
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    dnsServers: string;

    /**
     * HTTP proxy of the Ethernet connection. By default, no proxy is configured.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    httpProxy?: HttpProxy;
  }

  /**
   * Listens for status changes of an Ethernet NIC.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface InterfaceStateInfo {
    /**
     * Name of the Ethernet NIC.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    iface: string;
    /**
     * Whether the Ethernet NIC is activated. The value **true** indicates that the Ethernet NIC is activated, and the
     * value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    active: boolean;
  }

  /**
   * Defines the configuration mode of the Ethernet connection.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  export enum IPSetMode {
    /**
     * Static network configuration for an Ethernet connection.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    STATIC = 0,

    /**
     * Dynamic network configuration for an Ethernet connection.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    DHCP = 1,

    /**
     * Static network configuration for a LAN connection.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    LAN_STATIC = 2,

    /**
     * Dynamic network configuration for a LAN connection.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    LAN_DHCP = 3
  }

  /**
   * Defines the name and MAC address of an Ethernet NIC.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @since 14 dynamic
   */
  export interface MacAddressInfo {
    /**
     * Name of the Ethernet NIC.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 14 dynamic
     */
    iface: string;

    /**
     * MAC address of the Ethernet NIC.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 14 dynamic
     */
    macAddress: string;
  }

  /**
   * Defines Ethernet device information.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  export interface EthernetDeviceInfos {
    /**
     * Interface name.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    ifaceName: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    deviceName: string;

    /**
     * Device connection mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    connectionMode: DeviceConnectionType;

    /**
     * Vendor name.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    supplierName: string;

    /**
     * Supplier ID.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    supplierId: string;

    /**
     * Product name.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    productName: string;

    /**
     * Maximum connection rate.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    maximumRate: string;
  }

  /**
   * Enumerates Ethernet device connection modes.
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  export enum DeviceConnectionType {
    /**
     * Internal connection mode.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    BUILT_IN = 0,

    /**
     * External connection mode. For example, the Ethernet device is connected through a USB.
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    EXTERNAL = 1
  }
}

export default ethernet;
