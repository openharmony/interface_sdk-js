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
 * @file 以太网连接管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * 本模块提供以太网连接管理能力，包括有线网络能力、获取有线网络的IP地址等信息。
 *
 * @syscap SystemCapability.Communication.NetManager.Ethernet
 * @since 9 dynamic
 * @since 26.1.0 static
 */
declare namespace ethernet {
  /**
   * 网络代理配置信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  type HttpProxy = connection.HttpProxy;

  /**
   * 获取指定网络接口信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - 指定网络接口。
   * @param { AsyncCallback<InterfaceConfiguration> } callback - 回调函数。返回指定网络接口信息。
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
   * @since 26.1.0 static
   */
  function getIfaceConfig(iface: string, callback: AsyncCallback<InterfaceConfiguration>): void;

  /**
   * 获取指定网络接口信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - 指定网络接口。
   * @returns { Promise<InterfaceConfiguration> } 以Promise形式返回接口信息。
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
   * @since 26.1.0 static
   */
  function getIfaceConfig(iface: string): Promise<InterfaceConfiguration>;

  /**
   * 设置网络接口配置信息，使用callback异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iface - 网络接口名。
   * @param { InterfaceConfiguration } ic - 要设置的网络接口配置信息。
   * @param { AsyncCallback<void> } callback - 回调函数。成功无返回，失败返回对应错误码。
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
   * @since 26.1.0 static
   */
  function setIfaceConfig(iface: string, ic: InterfaceConfiguration, callback: AsyncCallback<void>): void;

  /**
   * 设置网络接口配置信息，使用Promise异步回调。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iface - 接口名。
   * @param { InterfaceConfiguration } ic - 要设置的网络接口配置信息。
   * @returns { Promise<void> } 以Promise形式返回执行结果。成功无返回，失败返回对应错误码。
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
   * @since 26.1.0 static
   */
  function setIfaceConfig(iface: string, ic: InterfaceConfiguration): Promise<void>;

  /**
   * 判断接口是否已激活，使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - 接口名。为空时代表查询是否存在激活接口。
   * @param { AsyncCallback<int> } callback - 回调函数。已激活：1，未激活：0，其他为获取失败错误码。
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
   * @since 26.1.0 static
   */
  function isIfaceActive(iface: string, callback: AsyncCallback<int>): void;

  /**
   * 判断接口是否已激活，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { string } iface - 接口名。为空时代表查询是否存在激活接口。
   * @returns { Promise<int> } 以Promise形式返回获取结果。已激活：1，未激活：0，其他为获取失败错误码。
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
   * @since 26.1.0 static
   */
  function isIfaceActive(iface: string): Promise<int>;

  /**
   * 获取活动的网络接口，使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。返回值为对应接口名。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function getAllActiveIfaces(callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取活动的网络接口，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<string>> } 以Promise形式返回获取结果。返回值为对应接口名。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function getAllActiveIfaces(): Promise<Array<string>>;

  /**
   * 注册网卡热插拔事件，使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'interfaceStateChange' } type - 订阅的事件类型，'interfaceStateChange'。
   * @param { Callback<{ iface: string, active: boolean }> } callback - Callback used to return the
   *     result. [since 10 - 10]
   * @param { Callback<InterfaceStateInfo> } callback - 回调函数。返回以太网卡状态信息。 [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'interfaceStateChange', callback: Callback<InterfaceStateInfo>): void;

  /**
   * 注册以太网接口激活状态变化回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<InterfaceStateInfo> } callback - 回调函数，包含iface表示以太网接口，active表示接口是否激活。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function onInterfaceStateChange(callback: Callback<InterfaceStateInfo>): void;

  /**
   * 注销网卡热插拔事件，使用callback异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'interfaceStateChange' } type - 订阅的事件类型，'interfaceStateChange'。
   * @param { Callback<{ iface: string, active: boolean }> } callback - Callback used to return the
   *     result. [since 10 - 10]
   * @param { Callback<InterfaceStateInfo> } callback - 回调函数。返回以太网卡状态信息。 [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'interfaceStateChange', callback?: Callback<InterfaceStateInfo>): void;

  /**
   * 注销以太网接口激活状态变化回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<InterfaceStateInfo> } [callback] - 回调函数，包含iface表示以太网接口，active表示接口是否激活。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 26.1.0 static
   */
  function offInterfaceStateChange(callback?: Callback<InterfaceStateInfo>): void;

  /**
   * 获取所有以太网网卡名称及对应网卡的MAC地址信息，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.GET_ETHERNET_LOCAL_MAC
   * @returns { Promise<Array<MacAddressInfo>> } 以Promise形式返回接口信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @since 14 dynamic
   * @since 26.1.0 static
   */
  function getMacAddress(): Promise<Array<MacAddressInfo>>;

  /**
   * 获取本机以太网卡的设备信息（如供应商名称、产品名称、最大连接速率等）使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<Array<EthernetDeviceInfos>> } Promise对象，返回本次执行结果。成功返回以太网设备信息列表，失败返回对应错误码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2201005 - Device information does not exist.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getEthernetDeviceInfos(): Promise<Array<EthernetDeviceInfos>>;

  /**
   * 启用以太网接口。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } 启用以太网接口成功返回的Promise。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function enableEthernetInterface(): Promise<void>;

  /**
   * 禁用以太网接口。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @returns { Promise<void> } 禁用以太网接口成功返回的Promise。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Failed to connect to the service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function disableEthernetInterface(): Promise<void>;

  /**
   * 检查全局以太网开关是否启用。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } 如果全局以太网启用返回true。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - Internal error.
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hidethis for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isEthernetEnabled(): boolean;

  /**
   * 以太网连接配置网络信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  export interface InterfaceConfiguration {
    /**
     * 以太网连接配置模式。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    mode: IPSetMode;
    /**
     * 以太网连接静态配置ip信息，地址值范围：0-255.0-255.0-255.0-255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    ipAddr: string;

    /**
     * 以太网连接静态配置路由信息，地址值范围：0-255.0-255.0-255.0-255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    route: string;

    /**
     * 以太网连接配置网关信息，地址值范围：0-255.0-255.0-255.0-255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    gateway: string;

    /**
     * 以太网连接配置子网掩码，地址值范围：0-255.0-255.0-255.0-255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    netMask: string;

    /**
     * 以太网连接配置dns服务地址，地址值范围：0-255.0-255.0-255.0-255（DHCP模式无需配置）多地址间用“,”隔开。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    dnsServers: string;

    /**
     * 以太网连接代理配置信息，默认情况下不配置任何代理信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    httpProxy?: HttpProxy;
  }

  /**
   * 监听以太网卡状态变化。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  export interface InterfaceStateInfo {
    /**
     * 以太网卡名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    iface: string;
    /**
     * 以太网卡是否处于激活状态。true表示激活，false表示未激活。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    active: boolean;
  }

  /**
   * 以太网连接模式。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  export enum IPSetMode {
    /**
     * 以太网连接静态配置网络信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    STATIC = 0,

    /**
     * 以太网连接动态配置网络信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    DHCP = 1,

    /**
     * LAN连接静态配置网络信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    LAN_STATIC = 2,

    /**
     * LAN连接动态配置网络信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    LAN_DHCP = 3
  }

  /**
   * 以太网网卡名称及MAC地址信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @since 14 dynamic
   * @since 26.1.0 static
   */
  export interface MacAddressInfo {
    /**
     * 以太网网卡名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 14 dynamic
     * @since 26.1.0 static
     */
    iface: string;

    /**
     * 以太网网卡MAC地址信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @since 14 dynamic
     * @since 26.1.0 static
     */
    macAddress: string;
  }

  /**
   * 以太网设备信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  export interface EthernetDeviceInfos {
    /**
     * 网络接口名。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    ifaceName: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    deviceName: string;

    /**
     * 设备连接模式。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    connectionMode: DeviceConnectionType;

    /**
     * 供应商名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    supplierName: string;

    /**
     * 供应商标识号。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    supplierId: string;

    /**
     * 产品名称。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    productName: string;

    /**
     * 最大连接速率。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    maximumRate: string;
  }

  /**
   * 以太网设备连接模式。
   *
   * @syscap SystemCapability.Communication.NetManager.Ethernet
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  export enum DeviceConnectionType {
    /**
     * 以太网设备为内置连接模式。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    BUILT_IN = 0,

    /**
     * 以太网设备为外接连接模式。例如，以太网设备通过USB连接。
     *
     * @syscap SystemCapability.Communication.NetManager.Ethernet
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    EXTERNAL = 1
  }
}

export default ethernet;