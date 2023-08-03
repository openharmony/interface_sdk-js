/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type connection from './@ohos.net.connection';

/**
 * This module offers set network policies on the devices.
 *
 * @namespace networkManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 10
 */
declare namespace networkManager {
  /**
   * Iptables rule add method.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum AddMethod {
    /**
     * Append method
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    APPEND = 0,

    /**
     * Insert method
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    INSERT = 1
  }

  /**
   * Iptables rule direction.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum Direction {
    /**
     * Input direction
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    INPUT = 0,

    /**
     * Output direction
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    OUTPUT = 1
  }

  /**
   * Iptables rule action.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum Action {
    /**
     * Action allow
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ALLOW = 0,

    /**
     * Action deny
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    DENY = 1
  }

  /**
   * Iptables rule protocol
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum Protocol {
    /**
     * Protocol all
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ALL = 0,

    /**
     * Protocol tcp
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    TCP = 1,

    /**
     * Protocol udp
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    UDP = 2,

    /**
     * Protocol icmp
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ICMP = 3
  }

  /**
   * Iptables add filter rule
   *
   * @typedef AddFilterRule
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface AddFilterRule {
    /**
     * Iptables rule num
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ruleNo?: number;

    /**
     * Iptables ip source address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * Iptables ip destination address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * Iptables source port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * Iptables destination port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * Application uid
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * Add method
     *
     * @type { AddMethod }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    method: AddMethod;

    /**
     * Direction
     *
     * @type { Direction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * Action
     *
     * @type { Action }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action: Action;

    /**
     * Protocol
     *
     * @type { ?Protocol }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * Iptables remove filter rule
   *
   * @typedef RemoveFilterRule
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface RemoveFilterRule {
    /**
     * Iptables ip source address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * Iptables ip destination address
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * Iptables source port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * Iptables destination port
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * Application uid
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * Direction
     *
     * @type { Direction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * Action
     *
     * @type { ?Action }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action?: Action;

    /**
     * Protocol
     *
     * @type { ?Protocol }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getAllNetworkInterfaces.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<Array<string>> } the promise returned by getAllNetworkInterfaces.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @param { AsyncCallback<string> } callback - the callback of getIpAddress.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @returns { Promise<string> } the promise returned by getIpAddress.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getIpAddress(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @param { AsyncCallback<string> } callback - the callback of getMac.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @returns { Promise<string> } the promise returned by getMac.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getMac(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets state of whether the network interface is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @param { AsyncCallback<boolean> } callback - the callback of isNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string, callback: AsyncCallback<boolean>): void;

  /**
   * Gets state of whether the network interface is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @returns { Promise<boolean> } the promise returned by isNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string): Promise<boolean>;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to set status.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @param { AsyncCallback<void> } callback - the callback of setNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to set status.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @returns { Promise<void> } the promise returned setNetworkInterfaceDisabled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean): Promise<void>;

  /**
   * Set a network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { connection.HttpProxy } httpProxy - network global proxy configuration information.
   * @param { AsyncCallback<void> } callback - the callback of setGlobalProxy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * Set a network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { connection.HttpProxy } httpProxy - network global proxy configuration information.
   * @returns { Promise<void> } the promise returned by the setGlobalProxy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy): Promise<void>;

  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<connection.HttpProxy> } callback - the callback carries the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getGlobalProxy(admin: Want, callback: AsyncCallback<connection.HttpProxy>): void;

  /**
   * Obtains the network independent global {@link connection.HttpProxy} proxy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<connection.HttpProxy> } the promise carries the network global proxy configuration information.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getGlobalProxy(admin: Want): Promise<connection.HttpProxy>;

  /**
   * Add iptables filter rule by {@link AddFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AddFilterRule } filterRule - iptables filter rule configuration information.
   * @param { AsyncCallback<void> } callback - the callback of addIptablesFilterRule.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule, callback: AsyncCallback<void>): void;

  /**
   * Add iptables filter rule by {@link AddFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AddFilterRule } filterRule - iptables filter rule configuration information.
   * @returns { Promise<void> } the promise returned by the addIptablesFilterRule.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule): Promise<void>;

  /**
   * Remove iptables filter rule by {@link RemoveFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { RemoveFilterRule } filterRule - iptables filter rule configuration information.
   * @param { AsyncCallback<void> } callback - the callback of removeIptablesFilterRule.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeIptablesFilterRule(admin: Want, filterRule: RemoveFilterRule, callback: AsyncCallback<void>): void;

  /**
   * Remove iptables filter rule by {@link RemoveFilterRule}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { RemoveFilterRule } filterRule - iptables filter rule configuration information.
   * @returns { Promise<void> } the promise returned by the removeIptablesFilterRule.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeIptablesFilterRule(admin: Want, filterRule: RemoveFilterRule): Promise<void>;

  /**
   * Query iptables rule and list the result.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<string> } callback - the callback carries the iptables rules in the table filter.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function listIptablesFilterRules(admin: Want, callback: AsyncCallback<string>): void;

  /**
   * Query iptables rule and list the result.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<string> } the promise carries the iptables rules in the table filter.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function listIptablesFilterRules(admin: Want): Promise<string>;
}

export default networkManager;
