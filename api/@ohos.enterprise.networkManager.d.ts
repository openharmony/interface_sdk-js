/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type connection from './@ohos.net.connection';

/**
 * The **networkManager** module provides APIs for network management of enterprise devices, including obtaining the
 * device IP address and MAC address.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 10
 */
declare namespace networkManager {
  /**
   * Enumerates the methods used to add the network packets.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum AddMethod {
    /**
     * Append the packet.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    APPEND = 0,

    /**
     * Insert the packet.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    INSERT = 1
  }

  /**
   * Enumerates the direction chains to which the rule applies.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Direction {
    /**
     * Input chain.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    INPUT = 0,

    /**
     * Output chain.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    OUTPUT = 1,

    /**
     * Forward chain.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    FORWARD = 2
  }

  /**
   * Enumerates the actions that can be taken for data packets.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Action {
    /**
     * Receive data packets.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ALLOW = 0,

    /**
     * Discard data packets.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DENY = 1,

    /**
     * Reject data packets.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    REJECT = 2
  }

  /**
   * Enumerates network protocols.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Protocol {
    /**
     * All network protocols.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ALL = 0,

    /**
     * TCP.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    TCP = 1,

    /**
     * UDP.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UDP = 2,

    /**
     * ICMP.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ICMP = 3
  }

  /**
   * Enumerates the log types.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum LogType {
    /**
     * Data packet logging function in the kernel Netfilter framework.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    NFLOG = 0
  }

  /**
   * Defines the network packet filtering rule to add.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface AddFilterRule {
    /**
     * Sequence number of the rule.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ruleNo?: number;

    /**
     * Source IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * Destination IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * Port of the source IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * Port of the destination IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * Method used to add the data packets.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    method: AddMethod;

    /**
     * Direction chains to which the rule applies.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * Action to take, that is, receive or discard the data packets.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action: Action;

    /**
     * Network protocol.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * Defines the network packet filtering rule to remove.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface RemoveFilterRule {
    /**
     * Source IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * Destination IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * Port of the source IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * Port of the destination IP address.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * Direction chains to which the rule applies.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * Action to take, that is, receive or discard the data packets.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action?: Action;

    /**
     * Network protocol.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * Represents a firewall rule.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface FirewallRule {
    /**
     * Source IP address. An IP address segment, for example, **192.168.0.0/22** or **192.168.1.100-192.168.1.200** is
     * supported.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    srcAddr?: string;

    /**
     * Destination IP address. An IP address segment, for example, **192.168.0.0/22** or **192.168.1.100-192.168.1.200**
     * is supported.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    destAddr?: string;

    /**
     * Source port.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    srcPort?: string;

    /**
     * Destination port.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    destPort?: string;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    appUid?: string;

    /**
     * Direction chains to which the rule applies.
     *
     * This parameter is mandatory when a firewall filtering rule is added.
     *
     * This parameter is optional when a firewall is removed. If this parameter is left empty, all
     * [Direction]{@link networkManager.Direction} chains are cleared, and **srcAddr**, **destAddr**, **srcPort**,
     * **destPort**, and **appUid** must be also left empty.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    direction?: Direction;

    /**
     * Action to take, that is, receive or discard the data packets.
     *
     * This parameter is mandatory when a firewall filtering rule is added.
     *
     * This parameter is optional when a firewall is removed. If this parameter is left empty, all
     * [Action]{@link networkManager.Action} chains are cleared, and **srcAddr**, **destAddr**, **srcPort**,
     * **destPort**, and **appUid** must be also left empty.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    action?: Action;

    /**
     * Network protocol. If the value is **ALL** or **ICMP**, the settings of **srcPort** and **destPort** are invalid.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    protocol?: Protocol;

    /**
     * IP protocol version. The value can be **1** (IPv4) or **2** (IPv6).
     * The value should be an integer. Default value: 1.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    family?: number;

    /**
     * Log type. Currently, only **NFLOG** is supported. This parameter applies only to PCs/2-in-1 devices.
     * When adding a firewall filter rule, this parameter is optional. If configured, it only takes effect when data
     * packets are dropped or rejected.<!--RP1--><!--RP1End-->
     * When removing firewall filter rules, this parameter is optional if a chain is cleared. The clearing of the entire
     * chain is not affected. When removing a single rule, the value of this parameter must be the same as that of the
     * rule. Otherwise, the filter rule may have been removed, but logs are still recorded. When removing the same
     * filter rule, you must remove the rule in the sequence in which the rule is added.
     * When obtaining firewall filter rules, the **logType** field can be obtained only when logs take effect.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    logType?: LogType;
  }

  /**
   * Represents a domain name filtering rule.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface DomainFilterRule {
    /**
     * Domain name. This parameter is mandatory when a domain name filtering rule is added. Segment matching is
     * supported. For example, if **domainName** is set to **example.com**, **example.com**, **www.example.com**, and
     * **www.test.example.com** will be matched, while **linkexample.com** will not be matched.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    domainName?: string;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    appUid?: string;

    /**
     * Action to take, that is, receive or discard the data packets.
     *
     * This parameter is mandatory when a domain name filtering rule is added.
     *
     * This parameter is optional when a domain name filtering rule is removed. If this parameter is left empty, all
     * [Action]{@link networkManager.Action} chains are cleared, and **domainName** and **appUid** must be also left
     * empty.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    action?: Action;

    /**
     * Direction chains to which the rule applies.
     *
     * This parameter is optional when a domain name filtering rule is added. If this parameter is set to output chain
     * or input chain, the output chain takes effect. If this parameter is set to a forward chain, **appUid** must be
     * empty. Otherwise, error code 401 will be returned.
     *
     * This parameter is optional when a domain name filtering rule is removed. If the value is empty, all
     * [Direction]{@link networkManager.Direction} chains are cleared, and **domainName** and **appUid** must be empty.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    direction?: Direction;

    /**
     * IP protocol version. The value can be **1** (IPv4) or **2** (IPv6).
     * The value must be an integer within [1,2].
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    family?: number;

    /**
     * Log type. Currently, only **NFLOG** is supported. This parameter applies only to PCs/2-in-1 devices.
     * When adding a firewall filter rule, this parameter is optional. If configured, it only takes effect when data
     * packets are dropped or rejected.<!--RP1--><!--RP1End-->
     * When removing firewall filter rules, this parameter is optional if a chain is cleared. The clearing of the entire
     * chain is not affected. When removing a single rule, the value of this parameter must be the same as that of the
     * rule. Otherwise, the filter rule may have been removed, but logs are still recorded. When removing the same
     * filter rule, you must remove the rule in the sequence in which the rule is added.
     * When obtaining firewall filter rules, the **logType** field can be obtained only when logs take effect.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    logType?: LogType;
  }

  /**
   * Enumerates Ethernet connection configuration modes.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum IpSetMode {
    /**
     * Static configuration of network information for Ethernet connection. When this mode is set, the IP address,
     * subnet mask, default gateway, and DNS server need to be configured synchronously.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    STATIC = 0,

    /**
     * Dynamic configuration of network information for Ethernet connection. When this mode is set, the DHCP server in
     * the network automatically assigns the IP address and other related information.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DHCP = 1
  }

  /**
   * Enumerates Ethernet network interface configurations. Only IPv4 is supported.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface InterfaceConfig {
    /**
     * Ethernet connection configuration mode.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    ipSetMode: IpSetMode;

    /**
     * Static IP address. The value ranges from **0.0.0.0** to **255.255.255.255**. (This parameter is not required in
     * DHCP mode.)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    ipAddress?: string;

    /**
     * Gateway. The value ranges from **0.0.0.0** to **255.255.255.255**. (This parameter is not required in DHCP mode.)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    gateway?: string;

    /**
     * Subnet mask. The value ranges from **0.0.0.0** to **255.255.255.255**. (This parameter is not required in DHCP
     * mode.)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    netMask?: string;

    /**
     * DNS service address. The value ranges from **0.0.0.0** to **255.255.255.255**. (This parameter is not required in
     * DHCP mode.) Multiple addresses are separated by commas (,).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    dnsServers?: string;
  }

  /**
   * Obtains all activated wired network interfaces. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null** and **data** is an array of network ports obtained. If the operation fails,
   *     **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains all activated wired network interfaces. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<Array<string>> } Promise used to return the names of all activated wired network interfaces.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * Obtains all activated wired network interfaces.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<string> } Names of all activated wired network interfaces.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAllNetworkInterfacesSync(admin: Want): Array<string>;

  /**
   * Obtains the device IP address based on the network interface. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the IP address obtained. If the operation fails, **err** is an error
   *     object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the device IP address based on the network interface. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @returns { Promise<string> } Promise used to return the device IP address obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Obtains the device IP address based on the network interface.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @returns { string } IP address of the network interface specified by the device.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getIpAddressSync(admin: Want, networkInterface: string): string;

  /**
   * Obtains the MAC address of a device based on the network interface. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the MAC address obtained. If the operation fails, **err** is an error
   *     object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the MAC address of a device based on the network interface. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @returns { Promise<string> } Promise used to return the device MAC address obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Obtains the MAC address of a device based on the network interface.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @returns { string } MAC address of the network interface specified by the device.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getMacSync(admin: Want, networkInterface: string): string;

  /**
   * Queries whether a specified network interface is disabled. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @param { AsyncCallback<boolean> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**, and **data** indicates whether the network port is disabled. The value **true** means the
   *     network port is disabled; and **false** means the opposite. If the operation fails, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string, callback: AsyncCallback<boolean>): void;

  /**
   * Queries whether a specified network interface is disabled. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the network port is
   *     disabled, and the value **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string): Promise<boolean>;

  /**
   * Queries whether a specified network interface is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @returns { boolean } Returns **true** if the network port is disabled; returns **false** otherwise.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function isNetworkInterfaceDisabledSync(admin: Want, networkInterface: string): boolean;

  /**
   * Disables a network interface. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @param { boolean } isDisabled - Network port status to set. The value **true** means to disable the network port,
   *     and **false** means to enable the network port.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disables a network interface. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @param { boolean } isDisabled - Network port status to set. The value **true** means to disable the network port,
   *     and **false** means to enable the network port.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown if the network port fails to be
   *     disabled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean): Promise<void>;

  /**
   * Disables the device from using the specified network interface.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } networkInterface - Network port.
   * @param { boolean } isDisabled - Network port status to set. The value **true** means to disable the network port,
   *     and **false** means to enable the network port.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setNetworkInterfaceDisabledSync(admin: Want, networkInterface: string, isDisabled: boolean): void;

  /**
   * Sets the global network proxy. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { connection.HttpProxy } httpProxy - Global HTTP proxy to set.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * Sets the global network proxy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { connection.HttpProxy } httpProxy - Global HTTP proxy to set.
   * @returns { Promise<void> } Promise that returns no value. An error object will be thrown if the operation fails.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy): Promise<void>;

  /**
   * Sets the global network proxy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { connection.HttpProxy } httpProxy - Global HTTP proxy to set.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setGlobalProxySync(admin: Want, httpProxy: connection.HttpProxy): void;

  /**
   * Sets the network proxy for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { connection.HttpProxy } httpProxy - HTTP proxy configuration of the network.
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the user ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function setGlobalProxyForAccount(admin: Want, httpProxy: connection.HttpProxy, accountId: number): void;

  /**
   * Obtains the global network proxy. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<connection.HttpProxy> } callback - Callback invoked to return the result. If the operation
   *     is successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getGlobalProxy(admin: Want, callback: AsyncCallback<connection.HttpProxy>): void;

  /**
   * Obtains the global network proxy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<connection.HttpProxy> } Promise used to return the global HTTP proxy information obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getGlobalProxy(admin: Want): Promise<connection.HttpProxy>;

  /**
   * Obtains the global network proxy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { connection.HttpProxy } Global HTTP proxy configuration information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getGlobalProxySync(admin: Want): connection.HttpProxy;

  /**
   * Obtains the network proxy for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 15 - 19]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 20]
   * @param { number } accountId - User ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the user ID.
   * @returns { connection.HttpProxy } HTTP proxy configuration of the network.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 20]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function getGlobalProxyForAccount(admin: Want | null, accountId: number): connection.HttpProxy;

  /**
   * Adds a network packet filtering rule for the device. Only IPv4 is supported. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AddFilterRule } filterRule - Network packet filtering rule to add.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule, callback: AsyncCallback<void>): void;

  /**
   * Adds a network packet filtering rule for the device. Only IPv4 is supported. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AddFilterRule } filterRule - Network packet filtering rule to add.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule): Promise<void>;

  /**
   * Removes the network packet filtering rule. Only IPv4 is supported. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { RemoveFilterRule } filterRule - Network packet filtering rule to remove.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeIptablesFilterRule(admin: Want, filterRule: RemoveFilterRule, callback: AsyncCallback<void>): void;

  /**
   * Removes the network packet filtering rule. Only IPv4 is supported. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { RemoveFilterRule } filterRule - Network packet filtering rule to remove.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeIptablesFilterRule(admin: Want, filterRule: RemoveFilterRule): Promise<void>;

  /**
   * Obtains the network packet filtering rule. Only IPv4 is supported. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function listIptablesFilterRules(admin: Want, callback: AsyncCallback<string>): void;

  /**
   * Obtains the network packet filtering rule. Only IPv4 is supported. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<string> } Promise used to return the network packet filtering rules obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function listIptablesFilterRules(admin: Want): Promise<string>;

  /**
   * Adds firewall rules for the device.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * After a rule with [Action]{@link networkManager.Action} set to **ALLOW** is added, a rule with **Action** set to
   * **DENY** is added by default to discard or intercept all network data packets that do not meet the **ALLOW** rule.
   *
   * After the device is restarted, the firewall rules are cleared.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { FirewallRule } firewallRule - Firewall rule to add.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addFirewallRule(admin: Want, firewallRule: FirewallRule): void;

  /**
   * Removes a firewall rule.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * If there is no rule with [Action]{@link networkManager.Action} being **ALLOW** after the rule is removed, the
   * **DENY** rules that are added by default with [addFirewallRule]{@link networkManager.addFirewallRule} will be
   * removed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { FirewallRule } firewallRule - Firewall rule to remove. If the value is empty, all firewall rules will be
   *     removed.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeFirewallRule(admin: Want, firewallRule?: FirewallRule): void;

  /**
   * Queries firewall rules of a device.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<FirewallRule> } A list of firewall rules configured for the device is returned. If the operation
   *     fails, an exception will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getFirewallRules(admin: Want): Array<FirewallRule>;

  /**
   * Adds domain name filtering rules for the device.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * After a rule with [Action]{@link networkManager.Action} set to **ALLOW** is added, a rule with **Action** set to
   * **DENY** is added by default to discard or intercept all packets for domain name resolution that do not meet the
   * **ALLOW** rule.
   *
   * After the device is restarted, the domain name filtering rules are cleared.
   *
   * > **NOTE**
   * >
   * > To prevent interception rules from becoming ineffective due to DNS caching, it is recommended that you configure
   * > domain name filtering rules immediately after the system starts up. If interception fails because of DNS caching,
   * > restart the system to clear the cache and restore the interception function.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { DomainFilterRule } domainFilterRule - Domain name filtering rule to add.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDomainFilterRule(admin: Want, domainFilterRule: DomainFilterRule): void;

  /**
   * Removes the domain name filtering rules.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * If there is no rule with [Action]{@link networkManager.Action} being **ALLOW** after the rule is removed, the
   * **DENY** rules that are added by default with [addDomainFilterRule]{@link networkManager.addDomainFilterRule} will
   * be removed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { DomainFilterRule } domainFilterRule - Domain name filtering rule to remove. If the value is empty, all
   *     domain name filtering rules will be removed.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDomainFilterRule(admin: Want, domainFilterRule?: DomainFilterRule): void;

  /**
   * Obtains domain name filtering rules.
   *
   * In API version 21 and earlier versions, only IPv4 is supported. IPv4 and IPv6 are supported since API version 22.
   *
   * [LogType]{@link networkManager.LogType} is supported since API version 23.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<DomainFilterRule> } A list of domain name filtering rules configured for the device is returned.
   *     If the operation fails, an exception will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDomainFilterRules(admin: Want): Array<DomainFilterRule>;

  /**
   * Adds an access point name (APN).
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Record<string, string> } apnInfo - APN information to be added.<br>- **apnName**: APN identifier, which is
   *     mandatory.<br>- **mcc**: 3-digit mobile country code (MCC), which is mandatory.<br>- **mnc**: 2-digit or 3-
   *     digit mobile network code (MNC), which is mandatory.<br>- **apn**: access point name, which is mandatory.<br>-
   *     **type**: APN service type, which is optional.<br>- **user**: user name for APN authentication, which is
   *     optional.<br>- **password**: password for APN authentication, which is optional.<br>- **proxy**: address of the
   *     proxy server for a common data connection, which is optional.<br>- **mmsproxy**: dedicated proxy address of the
   *     MMS service, which is optional.<br>- **authType**: authentication protocol type of the APN, which is optional.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addApn(admin: Want, apnInfo: Record<string, string>): void;

  /**
   * Deletes the APN.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } apnId - APN ID to be deleted. You can obtain device information using
   *     [networkManager.queryApn]{@link networkManager.queryApn(admin: Want, apnInfo: Record<string, string>)}.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function deleteApn(admin: Want, apnId: string): void;

  /**
   * Updates the APN.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Record<string, string> } apnInfo - APN information to be updated.<br>- **apnName**: APN identifier, which
   *     is optional.<br>- **mcc**: 3-digit mobile country code (MCC), which is optional.<br>- **mnc**: 2-digit or 3-
   *     digit mobile network code (MNC), which is optional.<br>- **APN**: access point name, which is optional.<br>-
   *     **type**: APN service type, which is optional.<br>- **user**: user name for APN authentication, which is
   *     optional.<br>- **password**: password for APN authentication, which is optional.<br>- **proxy**: address of the
   *     proxy server for a common data connection, which is optional.<br>- **mmsproxy**: dedicated proxy address of the
   *     MMS service, which is optional.<br>- **authType**: authentication protocol type of the APN, which is optional.
   * @param { string } apnId - APN ID to be updated. You can obtain device information using
   *     [networkManager.queryApn]{@link networkManager.queryApn(admin: Want, apnInfo: Record<string, string>)}.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function updateApn(admin: Want, apnInfo: Record<string, string>, apnId: string): void;

  /**
   * Sets the preferred APN.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } apnId - Preferred APN ID to be set. You can obtain device information using
   *     [networkManager.queryApn]{@link networkManager.queryApn(admin: Want, apnInfo: Record<string, string>)}.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setPreferredApn(admin: Want, apnId: string): void;

  /**
   * Queries the APN ID.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Record<string, string> } apnInfo - APN information.<br>- **apnName**: APN identifier, which is optional.<
   *     br>- **mcc**: 3-digit mobile country code (MCC), which is optional.<br>- **mnc**: 2-digit or 3-digit mobile
   *     network code (MNC), which is optional.<br>- **apn**: access point name, which is optional.<br>- **type**: APN
   *     service type, which is optional.<br>- **user**: user name for APN authentication, which is optional.<br>-
   *     **proxy**: address of the proxy server for a common data connection, which is optional.<br>- **mmsproxy**:
   *     dedicated proxy address of the MMS service, which is optional.<br>- **authType**: authentication protocol type
   *     of the APN, which is optional.
   * @returns { Array<string> } APN ID obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function queryApn(admin: Want, apnInfo: Record<string, string>): Array<string>;

  /**
   * Queries the APN parameter information.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } apnId - Specified APN ID. You can obtain device information using
   *     [networkManager.queryApn]{@link networkManager.queryApn(admin: Want, apnInfo: Record<string, string>)}.
   * @returns { Record<string, string> } APN parameter information of the specified APN ID.
   *     <br>- **apnName**: APN identifier.
   *     <br>- **mcc**: 3-digit mobile country code (MCC).
   *     <br>- **mnc**: 2-digit or 3-digit mobile network code (MNC).
   *     <br>- **apn**: access point name.
   *     <br>- **type**: APN service type.
   *     <br>- **user**: user name for APN authentication.
   *     <br>- **proxy**: address of the proxy server for a common data connection.
   *     <br>- **mmsproxy**: dedicated proxy address of the MMS service.
   *     <br>- **authType**: authentication protocol type of the APN.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function queryApn(admin: Want, apnId: string): Record<string, string>;

  /**
   * Turns on mobile data.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } isForce - Whether to forcibly enable mobile data. <br>The value **true** means to forcibly
   *     enable mobile data. Once enabled, it cannot be turned off manually; it can only be disabled via the
   *     [turnOffMobileData]{@link networkManager.turnOffMobileData} API. The value **false** means not to forcibly
   *     enable mobile data. It can be turned off manually.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOnMobileData(admin: Want, isForce: boolean): void;

  /**
   * Turns off mobile data.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOffMobileData(admin: Want): void;

  /**
   * Sets the IP address of a specific Ethernet interface.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility.
   * @param { string } networkInterface - Network interface name to set.
   * @param { InterfaceConfig } config - Network interface configuration to set.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201010 - Ethernet configuration failed. Ethernet device not connected.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setEthernetConfig(admin: Want, networkInterface: string, config: InterfaceConfig): void;
}

export default networkManager;