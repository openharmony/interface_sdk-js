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
 * @file 系统接口
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type connection from './@ohos.net.connection';

/**
 * 本模块提供设备网络管理能力，包括查询设备IP地址、MAC地址信息、管理网络接口状态、配置网络全局代理、管理防火墙规则和域名过滤规则、控制移动数据网络、管理APN配置、配置以太网网络等。适用于企业IT管理员对设备网络进行集中管理和安全管
 * 控，帮助企业实现网络访问策略统一管理、防止网络攻击和数据泄露、降低网络管理成本。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 10 - 11]
 * @publicapi [since 12]
 * @stagemodelonly
 * @since 10
 */
declare namespace networkManager {
  /**
   * 添加网络包方法。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum AddMethod {
    /**
     * 追加。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    APPEND = 0,

    /**
     * 插入。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    INSERT = 1
  }

  /**
   * 规则链。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Direction {
    /**
     * 输入链。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    INPUT = 0,

    /**
     * 输出链。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    OUTPUT = 1,

    /**
     * 转发链。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    FORWARD = 2
  }

  /**
   * 数据包的行为。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Action {
    /**
     * 接收数据包。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ALLOW = 0,

    /**
     * 丢弃数据包。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DENY = 1,

    /**
     * 拒绝数据包。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    REJECT = 2
  }

  /**
   * 网络协议。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Protocol {
    /**
     * 全部网络协议。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ALL = 0,

    /**
     * 网络协议TCP。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    TCP = 1,

    /**
     * 网络协议UDP。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UDP = 2,

    /**
     * 网络协议ICMP。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ICMP = 3
  }

  /**
   * 日志类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum LogType {
    /**
     * 内核Netfilter框架中的数据包日志功能。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    NFLOG = 0
  }

  /**
   * 添加网络包过滤规则。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface AddFilterRule {
    /**
     * 规则序号。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ruleNo?: number;

    /**
     * ip源地址。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * ip目标地址。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * ip源端口。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * ip目标端口。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * 应用uid。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * 添加策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    method: AddMethod;

    /**
     * 规则链。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * 接收或者丢弃数据包。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action: Action;

    /**
     * 网络协议。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * 移除网络包过滤规则。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface RemoveFilterRule {
    /**
     * ip源地址。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcAddr?: string;

    /**
     * ip目标地址。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destAddr?: string;

    /**
     * ip源端口。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    srcPort?: string;

    /**
     * ip目标端口。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    destPort?: string;

    /**
     * 应用uid。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    uid?: string;

    /**
     * 规则链。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    direction: Direction;

    /**
     * 接收或者丢弃数据包。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    action?: Action;

    /**
     * 网络协议。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    protocol?: Protocol;
  }

  /**
   * 防火墙过滤规则。
   *
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   *
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface FirewallRule {
    /**
     * ip源地址。支持IP段，例如：192.168.0.0/22或者192.168.1.100-192.168.1.200
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    srcAddr?: string;

    /**
     * ip目标地址。支持IP段，例如：192.168.0.0/22或者192.168.1.100-192.168.1.200
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    destAddr?: string;

    /**
     * 源端口。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    srcPort?: string;

    /**
     * 目标端口。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    destPort?: string;

    /**
     * 应用uid。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    appUid?: string;

    /**
     * 规则链。
     *
     * 添加防火墙过滤规则时必填；
     *
     * 移除防火墙时非必填，当值为空时，表示清空所有的[Direction]{@link networkManager.Direction}链，且srcAddr，destAddr，srcPort，destPort，appUid也必须传
     * 入空值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    direction?: Direction;

    /**
     * 接收或者丢弃数据包。
     *
     * 添加防火墙过滤规则时必填；
     *
     * 移除防火墙时非必填，当值为空时，表示清空所有的匹配[Action]{@link networkManager.Action}规则的链，且srcAddr，destAddr，srcPort，destPort，appUid也必须传入
     * 空值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    action?: Action;

    /**
     * 网络协议。当值为ALL或者ICMP时，设置srcPort与destPort无效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    protocol?: Protocol;

    /**
     * IP协议版本。支持取值为1或2，取值为1表示IPv4，取值为2表示IPv6。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    family?: number;

    /**
     * 日志类型，当前仅支持配置NFLOG类型，该参数仅支持PC/2in1设备。
     * 
     * 添加防火墙过滤规则时，此参数非必填。若填写，仅在丢弃或拒绝数据包时生效。<!--RP1--><!--RP1End-->
     * 
     * 移除防火墙过滤规则时，当清空某条链时非必填，不影响整条链的清空；当移除单条规则时，是否填写必须与该规则一致，否则可能导致过滤规则已经移除，但是日志还在记录的问题；相同过滤规则移除时必须按添加时的顺序移除。
     * 
     * 获取防火墙过滤规则时，仅日志生效的场景可以获取到logType字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    logType?: LogType;
  }

  /**
   * 域名过滤规则。
   *
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   *
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface DomainFilterRule {
    /**
     * 域名。添加域名过滤规则时必填。支持域名分段匹配，例如，domainName传入`example.com`，那么`example.com`、`www.example.com`、`www.test.example.com`会被匹
     * 配，`linkexample.com`不会被匹配。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    domainName?: string;

    /**
     * 应用uid。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    appUid?: string;

    /**
     * 接收或者丢弃数据包。
     *
     * 添加域名过滤规则时必填；
     *
     * 移除域名过滤规则时非必填，当值为空时，表示清空所有的匹配[Action]{@link networkManager.Action}规则的链，且domainName，appUid也必须传入空值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    action?: Action;

    /**
     * 规则链。
     * 
     * 添加域名过滤规则时非必填；当值为空，以及设为输出链或输入链时，实际效果为输出链。设为转发链时，appUid需设置为空，否则会报401错误码。
     * 
     * 移除域名过滤规则时非必填，当值为空时，表示清空所有的[Direction]{@link networkManager.Direction}链，且domainName，appUid也必须传入空值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 15
     */
    direction?: Direction;

    /**
     * IP协议版本。支持取值为1或2，取值为1表示IPv4，取值为2表示IPv6。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    family?: number;

    /**
     * 日志类型，当前仅支持配置NFLOG类型，该参数仅支持PC/2in1设备。
     * 
     * 添加域名过滤规则时，此参数非必填。若填写，仅在丢弃或拒绝数据包时生效。<!--RP2--><!--RP2End-->
     * 
     * 移除域名过滤规则时，当清空某条链时非必填，不影响整条链的清空；当移除单条规则时，是否填写必须与该规则一致，否则可能导致过滤规则已经移除，但是日志还在记录的问题；相同过滤规则移除时必须按添加时的顺序移除。
     * 
     * 获取域名过滤规则时，仅日志生效的场景可以获取到logType字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    logType?: LogType;
  }

  /**
   * 以太网连接模式。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  enum IpSetMode {
    /**
     * 以太网连接静态配置网络信息，设置为该模式时，需要同步设置IP地址、子网掩码、默认网关、DNS服务器。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    STATIC = 0,

    /**
     * 以太网连接动态配置网络信息，设置为该模式时，由网络中的DHCP服务器自动分配IP地址等信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DHCP = 1
  }

  /**
   * 以太网的网络接口配置。仅支持IPv4。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  interface InterfaceConfig {
    /**
     * 以太网连接配置模式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    ipSetMode: IpSetMode;

    /**
     * 静态IP地址，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    ipAddress?: string;

    /**
     * 网关，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    gateway?: string;

    /**
     * 子网掩码，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    netMask?: string;

    /**
     * DNS服务地址，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置），多地址间用“,”隔开。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    dnsServers?: string;
  }

  /**
   * 获取所有激活的有线网络接口。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。当接口调用成功，err为null，data为网络接口名称数组，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getAllNetworkInterfacesSync
   */
  function getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取所有激活的有线网络接口。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<Array<string>> } Promise结果，返回所有激活的有线网络接口名称数组。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getAllNetworkInterfacesSync
   */
  function getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * 获取所有激活的有线网络接口。适用于企业网络管理场景，例如查看当前设备可用的网络连接、审计网络接口状态、为后续网络配置操作做准备，帮助企业了解设备网络连接状态，便于集中管理网络资源和排查网络问题。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<string> } 返回所有激活的有线网络接口名称数组。
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
   * 根据网络接口获取设备IP地址。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @param { AsyncCallback<string> } callback - 回调函数。当接口调用成功，err为null，data为IP地址，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getIpAddressSync
   */
  function getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * 根据网络接口获取设备IP地址。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { Promise<string> } Promise结果，返回设备IP地址。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getIpAddressSync
   */
  function getIpAddress(admin: Want, networkInterface: string): Promise<string>;

  /**
   * 根据网络接口获取设备IP地址。适用于企业网络管理场景，例如网络审计、设备定位、网络连接问题排查、IP地址分配管理，帮助企业IT管理员了解设备网络配置，便于网络管理和故障诊断。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { string } 返回设备指定网络接口的IP地址。
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
   * 根据网络接口获取设备MAC地址。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @param { AsyncCallback<string> } callback - 回调函数。当接口调用成功，err为null，data为设备MAC地址，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getMacSync
   */
  function getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;

  /**
   * 根据网络接口获取设备MAC地址。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { Promise<string> } Promise结果，返回设备MAC地址。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getMacSync
   */
  function getMac(admin: Want, networkInterface: string): Promise<string>;

  /**
   * 根据网络接口获取设备MAC地址。适用于企业网络管理场景，例如设备识别、网络准入控制、MAC地址审计、设备资产管理，帮助企业识别和追踪设备，实现精细化的网络访问控制。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { string } 返回设备指定网络接口的MAC地址。
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
   * 查询指定网络接口是否被禁用。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用成功，err为null，data为指定网络接口是否被禁用，true表示该网络接口被禁用，false表示该网络接口未被禁
   *     用，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.isNetworkInterfaceDisabledSync
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定网络接口是否被禁用。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { Promise<boolean> } Promise结果，返回指定网络接口是否被禁用，true表示该网络接口被禁用，false表示该网络接口未被禁用。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.isNetworkInterfaceDisabledSync
   */
  function isNetworkInterfaceDisabled(admin: Want, networkInterface: string): Promise<boolean>;

  /**
   * 查询指定网络接口是否被禁用。适用于企业网络管理场景，例如检查网络接口状态、审计网络接口使用情况、验证网络策略执行效果，帮助企业确认网络接口管理策略是否生效，便于策略调整和问题排查。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { boolean } 返回指定网络接口是否被禁用，true表示该网络接口被禁用，false表示该网络接口未被禁用。
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
   * 查询指定网络接口是否被禁用。适用于企业网络管理场景，例如检查网络接口状态、审计网络接口使用情况、验证网络策略执行效果，帮助企业确认网络接口管理策略是否生效，便于策略调整和问题排查。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @param { string } networkInterface - 指定网络接口。
   * @returns { boolean } 返回指定网络接口是否被禁用，true表示该网络接口被禁用，false表示该网络接口未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function isNetworkInterfaceDisabledSync(admin: Want | null, networkInterface: string): boolean;

  /**
   * 禁止设备使用指定网络。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @param { boolean } isDisabled - true表示禁用该网络接口，false表示开启该网络接口。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.setNetworkInterfaceDisabledSync
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 禁止设备使用指定网络。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @param { boolean } isDisabled - true表示禁用该网络接口，false表示开启该网络接口。
   * @returns { Promise<void> } 无返回结果的Promise对象。当禁用网络接口失败时抛出错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.setNetworkInterfaceDisabledSync
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean): Promise<void>;

  /**
   * 禁止设备使用指定网络接口。适用于企业网络安全管控场景，例如禁用高风险网络接口、限制设备使用特定网络连接、防止通过网络接口进行数据泄露，帮助企业降低网络安全风险，防止通过特定网络接口进行的攻击或数据外泄。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 指定网络接口。
   * @param { boolean } isDisabled - true表示禁用该网络接口，false表示开启该网络接口。
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
   * 设置网络全局代理，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { connection.HttpProxy } httpProxy - 网络全局Http代理配置信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.setGlobalProxySync
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy, callback: AsyncCallback<void>): void;

  /**
   * 设置网络全局代理，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { connection.HttpProxy } httpProxy - 网络全局Http代理配置信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置网络全局代理失败时抛出错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.setGlobalProxySync
   */
  function setGlobalProxy(admin: Want, httpProxy: connection.HttpProxy): Promise<void>;

  /**
   * 设置网络全局代理。适用于企业网络管理场景，例如设置企业统一的网络代理、实现网络访问审计、控制网络访问路径、优化网络性能，帮助企业集中管理网络访问，实现网络访问的可审计和可控制。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { connection.HttpProxy } httpProxy - 网络全局Http代理配置信息。
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
   * 设置指定用户下的网络代理。适用于企业多用户环境下的网络管理场景，例如为不同用户设置不同的网络代理策略、实现用户级网络访问控制、满足不同用户的网络访问需求，帮助企业实现精细化的用户级网络管理。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { connection.HttpProxy } httpProxy - 网络代理配置信息。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。
   *     <br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 获取网络全局代理，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<connection.HttpProxy> } callback - 回调函数。当接口调用成功，err为null，否则err为错误对象。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getGlobalProxySync
   */
  function getGlobalProxy(admin: Want, callback: AsyncCallback<connection.HttpProxy>): void;

  /**
   * 获取网络全局代理，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<connection.HttpProxy> } Promise对象，返回网络全局Http代理配置信息。
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
   * @deprecated since 26.0.0
   * @useinstead networkManager.getGlobalProxySync
   */
  function getGlobalProxy(admin: Want): Promise<connection.HttpProxy>;

  /**
   * 获取网络全局代理。适用于企业网络管理场景，例如审计当前网络代理配置、验证代理策略是否生效、排查网络访问问题，帮助企业检查网络代理设置，确保网络访问策略正确执行。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { connection.HttpProxy } 返回网络全局HTTP代理配置信息。
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
   * 获取指定用户下的网络代理。适用于企业多用户环境下的网络管理场景，例如审计用户级网络代理配置、验证用户网络访问策略、排查用户网络访问问题，帮助企业检查和验证用户级网络管理策略。
   * 
   * > **说明：**
   * >
   * > 本接口用于获取通过setGlobalProxyForAccount设置的、指定用户的代理配置。如果需要获取应用于所有用户的全局代理配置，建议使用
   * > [getGlobalProxySync]{@link networkManager.getGlobalProxySync}接口。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 15 - 19]
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 20]
   * @param { number } accountId - 用户ID，取值范围：大于等于0。
   *     <br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
   * @returns { connection.HttpProxy } 网络代理配置信息。
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
   * 为设备添加网络包过滤规则，仅支持IPv4。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AddFilterRule } filterRule - 添加网络包过滤规则。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则err为错误对象。
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
   * 为设备添加网络包过滤规则，仅支持IPv4。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AddFilterRule } filterRule - 添加网络包过滤规则。
   * @returns { Promise<void> } 无返回结果的Promise对象。当添加网络包过滤规则失败时抛出错误对象。
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
   * 移除网络包过滤规则，仅支持IPv4。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { RemoveFilterRule } filterRule - 移除网络包过滤规则。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则err为错误对象。
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
   * 移除网络包过滤规则，仅支持IPv4。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { RemoveFilterRule } filterRule - 移除网络包过滤规则。
   * @returns { Promise<void> } 无返回结果的Promise对象。当移除网络包过滤规则失败时抛出错误对象。
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
   * 获取网络包过滤规则，仅支持IPv4。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<string> } callback - 回调函数。当接口调用成功，err为null，否则err为错误对象。
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
   * 获取网络包过滤规则，仅支持IPv4。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<string> } Promise对象，返回网络包过滤规则。
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
   * 为设备添加防火墙过滤规则。<!--RP3--><!--RP3End-->适用于企业网络安全管控场景，例如限制特定IP地址的网络访问、防止恶意网络攻击、控制应用程序的网络通信、实现网络访问的允许名单或禁用名单管理，帮助企业精细化控制
   * 网络访问，防止网络攻击和数据泄露。
   * 
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   * 
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   * 
   * > **说明：**
   * >
   * > - 添加了[Action]{@link networkManager.Action}为ALLOW规则后，将会默认添加DENY规则，不在ALLOW规则之内的网络数据包将会被丢弃或拦截。
   * >
   * > - 设备重启，将会清空防火墙过滤规则。
   * >
   * > - 规则匹配顺序：先匹配域名过滤规则（由[addDomainFilterRule]{@link networkManager.addDomainFilterRule}添加），再匹配本接口添加的IP防火墙规则；在域名规则或IP规
   * > 则中，均按[Action]{@link networkManager.Action}为ALLOW、DENY、REJECT的顺序进行匹配。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FirewallRule } firewallRule - 添加防火墙过滤规则。
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
   * 移除设备防火墙过滤规则。适用于企业网络安全策略调整场景，例如取消某些网络访问限制、调整防火墙策略、清理过时或无效的规则，帮助企业灵活调整网络安全策略，确保网络访问控制策略与实际需求保持一致。
   *
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   *
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   *
   * 移除规则后如果不存在[Action]{@link networkManager.Action}为ALLOW规则后，会将[addFirewallRule]{@link networkManager.addFirewallRule}添
   * 加的默认DENY规则清空。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FirewallRule } [firewallRule] - 移除防火墙过滤规则。值为空时，清空所有的防火墙规则。
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
   * 查询设备防火墙过滤规则。适用于企业网络安全审计场景，例如检查当前防火墙策略配置、审计网络访问控制规则、验证防火墙规则是否正确执行、排查网络访问问题，帮助企业审核和验证网络安全策略，确保网络访问控制符合安全要求。
   * 
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   * 
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<FirewallRule> } 返回当前设备配置的防火墙过滤规则列表，当方法调用错误时会抛出异常。
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
   * 为设备添加域名过滤规则。<!--RP3--><!--RP3End-->
   * 
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   * 
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   * 
   * > **说明：**
   * >
   * > - 添加[Action]{@link networkManager.Action}为ALLOW规则后会自动添加默认DENY规则，不在ALLOW规则之内的域名解析数据包将被丢弃或拦截。
   * >
   * > - 添加的规则在设备重启后会被清空。
   * >
   * > - 为避免DNS缓存导致拦截规则失效，建议系统启动后立即配置域名过滤规则。若已因DNS缓存导致拦截失效，重启系统可清除缓存，恢复拦截功能。
   * >
   * > - 规则匹配顺序：先匹配本接口添加的域名过滤规则，再匹配IP防火墙规则（由[addFirewallRule]{@link networkManager.addFirewallRule}添加）；在域名规则或IP规则中，均按
   * > [Action]{@link networkManager.Action}为ALLOW、DENY、REJECT的顺序进行匹配。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { DomainFilterRule } domainFilterRule - 域名过滤规则对象，包含域名、应用UID、IP协议版本等配置项。
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
   * 移除设备域名过滤规则。适用于企业网络安全策略调整场景，例如取消某些域名访问限制、调整域名过滤策略、清理过时或无效的规则、解决误拦截问题，帮助企业灵活调整域名访问策略，确保网络访问控制策略符合实际需求。
   *
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   *
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   *
   * 移除规则后如果不存在[Action]{@link networkManager.Action}为ALLOW规则后，会将
   * [addDomainFilterRule]{@link networkManager.addDomainFilterRule}添加的默认DENY规则清空。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { DomainFilterRule } [domainFilterRule] - 移除域名过滤规则。值为空时，清空所有的域名规则。
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
   * 查询设备域名过滤规则。适用于企业网络安全审计场景，例如检查当前域名过滤策略配置、审计域名访问控制规则、验证域名过滤规则是否正确执行、排查域名访问问题，帮助企业审核和验证域名访问控制策略，确保网络访问控制符合安全要求。
   * 
   * API version 21及之前版本，仅支持IPv4。从API version 22开始，支持IPv4和IPv6。
   * 
   * 从API version 23开始，支持[LogType]{@link networkManager.LogType}。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<DomainFilterRule> } 返回当前设备配置的域名过滤规则列表，当方法调用错误时会抛出异常。
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
   * 添加APN（Access Point Name，接入点名称）。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Record<string, string> } apnInfo - 需要添加的APN参数信息。设置后系统将使用这些参数配置移动数据网络的接入点，影响网络连接方式和数据传输路径。<br/>- apnName：
   *     APN配置的名称标识符，必选。<br/>- mcc：3位数字的移动国家代码，必选。<br/>- mnc：2-3位数字的移动网络代码，必选。<br/>- apn：接入点名称，必选。<br/>- type：APN的服务类型，可
   *     选。<br/>- user：APN身份验证的用户名，可选。<br/>- password：APN身份验证的密码，可选。<br/>- proxy：普通数据连接的代理服务器地址，可选。<br/>- mmsproxy：彩信服务的
   *     专用代理地址，可选。<br/>- authType：APN的认证协议类型，可选。
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
   * 删除APN。适用于企业移动网络配置管理场景，例如清理无效的APN配置、调整移动网络接入点配置、防止使用错误的APN配置，帮助企业维护正确的移动网络配置，确保设备使用正确的接入点连接移动网络。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } apnId - 需要删除的APN ID。设置后系统将移除该APN配置，对应的接入点将不再可用。可以通过
   *     [networkManager.queryApn]{@link networkManager.queryApn}获取设备APN信息。
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
   * 更新APN。适用于企业移动网络配置管理场景，例如修改APN配置参数、调整运营商设置、优化移动网络连接性能，帮助企业灵活调整移动网络配置，确保设备移动网络连接参数符合实际需求。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Record<string, string> } apnInfo - 需要更新的APN参数信息。设置后系统将使用更新后的参数修改对应APN配置，影响网络连接方式和数据传输路径。<br/>- apnName：APN
   *     配置的名称标识符，可选。<br/>- mcc：3位数字的移动国家代码，可选。<br/>- mnc：2-3位数字的移动网络代码，可选。<br/>- APN：接入点名称，可选。<br/>- type：APN的服务类型，可选。<
   *     br/>- user：APN身份验证的用户名，可选。<br/>- password：APN身份验证的密码，可选。<br/>- proxy：普通数据连接的代理服务器地址，可选。<br/>- mmsproxy：彩信服务的专用代
   *     理地址，可选。<br/>- authType：APN的认证协议类型，可选。
   * @param { string } apnId - 需要更新的APN ID。可以通过[networkManager.queryApn]{@link networkManager.queryApn}获取设备APN信息。
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
   * 设置优选APN。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } apnId - 需要设置成优选的APN ID。可以通过[networkManager.queryApn]{@link networkManager.queryApn}获取设备APN信息。
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
   * 查询符合特定APN信息的APN ID。适用于企业移动网络配置审计场景，例如查找特定配置的APN、验证APN配置是否存在、为APN管理操作提供APN ID参数，帮助企业查找和管理APN配置，为APN的更新和删除操作提供必要的参数信
   * 息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Record<string, string> } apnInfo - APN的查询条件。设置后系统将根据这些条件筛选匹配的APN配置，返回符合条件的APN ID列表。<br/>- apnName：APN配置的名称
   *     标识符，可选。<br/>- mcc：3位数字的移动国家代码，可选。<br/>- mnc：2-3位数字的移动网络代码，可选。<br/>- apn：接入点名称，可选。<br/>- type：APN的服务类型，可选。<br/>-
   *     user：APN身份验证的用户名，可选。<br/>- proxy：普通数据连接的代理服务器地址，可选。<br/>- mmsproxy：彩信服务的专用代理地址，可选。<br/>- authType：APN的认证协议类型，可
   *     选。
   * @returns { Array<string> } 满足要求的APN ID。
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
   * 查询特定APN的APN参数信息。适用于企业移动网络配置审计场景，例如检查特定APN的配置参数、验证APN配置是否正确、审计移动网络接入点配置，帮助企业审核和验证APN配置，确保移动网络配置符合要求。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } apnId - 指定的APN ID。设置后将查询该APN ID对应的详细参数配置信息。可以通过
   *     [networkManager.queryApn]{@link networkManager.queryApn}获取设备信息。
   * @returns { Record<string, string> } 指定APN ID的APN参数信息。<br/>- apnName：APN配置的名称标识符。<br/>- mcc：3位数字的移动国家代码。<br/>- mnc：2
   *     -3位数字的移动网络代码。<br/>- apn：接入点名称。<br/>- type：APN的服务类型。<br/>- user：APN身份验证的用户名。<br/>- proxy：普通数据连接的代理服务器地址。<br/>-
   *     mmsproxy：彩信服务的专用代理地址。<br/>- authType：APN的认证协议类型。
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
   * 开启移动数据网络。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isForce - 是否强制打开移动数据网络。true表示强制开启，强制开启后不支持用户在设备上手动关闭，必须采用
   *     [turnOffMobileData]{@link networkManager.turnOffMobileData}接口关闭。false表示非强制开启，此时用户可以在设备上手动操作关闭移动数据网络。适用于企业网络安全管控
   *     场景，例如防止通过移动数据网络进行数据泄露、控制网络连接方式、降低通信成本、确保设备仅使用企业网络，帮助企业控制设备网络访问方式，防止通过移动数据网络的安全风险和数据外泄。
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
   * 关闭移动数据网络。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * 设置特定以太网网络接口的IP地址。适用于企业网络管理场景，例如配置设备静态IP地址、统一管理企业网络设备IP分配、设置网络参数，帮助企业集中管理网络配置，确保设备网络参数符合企业网络管理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_NETWORK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } networkInterface - 要设置的网络接口名。
   * @param { InterfaceConfig } config - 要设置的网络接口配置信息。
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