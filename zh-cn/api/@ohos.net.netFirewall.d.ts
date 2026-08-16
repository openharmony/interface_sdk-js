/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 网络防火墙
 * @kit NetworkKit
 */

/**
 * 本模块为应用程序提供网络防火墙能力。应用程序可以对机器进行防火墙拦截记录的查询。
 *
 * @syscap SystemCapability.Communication.NetManager.NetFirewall
 * @since 14 dynamic
 */
declare namespace netFirewall {
  /**
   * 设置系统用户ID的防火墙策略，包含防火墙开关状态，默认的出站/入站行为（允许/阻止）。支持不同的系统用户ID配置不同的防火墙策略。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 同一系统用户下，多应用调用该接口下发策略，会以最新下发的策略为准。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { NetFirewallPolicy } policy - 设置的防火墙策略。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function setNetFirewallPolicy(userId: int, policy: NetFirewallPolicy): Promise<void>;

  /**
   * 查询系统用户ID的防火墙策略，包含防火墙开关状态，默认出站入站行为（允许/阻止）。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @returns { Promise<NetFirewallPolicy> } 以Promise形式返回当前用户防火墙策略。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function getNetFirewallPolicy(userId: int): Promise<NetFirewallPolicy>;

  /**
   * 添加系统用户ID的防火墙规则，目前支持的规则类型有：IP、Domain、DNS。使用Promise异步回调。
   * 
   * > **说明**
   * >
   * > 1. 防火墙规则优先级说明（[setNetFirePolicy]{@link netFirewall.setNetFirewallPolicy}和
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}无调用顺序要求）：
   * >
   * > - 调用[setNetFirePolicy]{@link netFirewall.setNetFirewallPolicy}设置默认策略为阻止，调用
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}新增显式规则，规则优先级由高到低为：
   * >
   * > - 显式阻止规则
   * >
   * > - 显式允许规则
   * >
   * > - 默认阻止策略
   * >
   * > - 调用[setNetFirePolicy]{@link netFirewall.setNetFirewallPolicy}设置默认策略为允许，调用
   * > [addNetFirewallRule]{@link netFirewall.addNetFirewallRule}新增显式规则，规则优先级由高到低为：
   * >
   * > - 显式允许规则
   * >
   * > - 显式阻止规则
   * >
   * > - 默认允许策略
   * >
   * > - 防火墙IP规则和域名规则冲突时（域名解析的IP与IP规则的IP相同，规则行为冲突）：
   * >
   * > - 若以域名方式访问，则域名规则优先级高于IP规则，不受域名解析出的IP的规则影响。
   * >
   * > - 若以IP方式访问，遵循以下原则：
   * >
   * > - 域名规则放行，若以IP方式访问之前经历过域名解析过程，则IP规则拦截或者默认策略拦截是不生效的，最终以IP方式访问是放行的。
   * >
   * > - 域名规则放行，若以IP方式访问之前未经历过域名解析过程，则IP规则拦截或者默认策略拦截是生效的，最终以IP方式访问是拦截的。
   * >
   * > - 域名规则拦截，则IP规则放行或者默认策略放行是生效的，最终以IP方式访问是放行的。
   * >
   * > 2. 规则类型补充说明：
   * >
   * > - 当addNetFirewallRule的入参rule.type配置为RULE_IP时：
   * >
   * > - 若rule.action为RULE_ALLOW，且rule.localIps、rule.remoteIps均不配置，规则生效为全IP段允许通行；
   * >
   * > - 若rule.action 为RULE_DENY，且rule.localIps、rule.remoteIps均不配置，规则生效为全IP段拦截。
   * >
   * > - 当addNetFirewallRule的入参rule.type配置为RULE_DOMAIN时，若rule.domains未配置，该规则不生效。
   * >
   * > 3. 防火墙规则添加上限说明：
   * >
   * > - 单个系统用户ID添加的防火墙规则上限是1000，若超过该上限，则报错29400001。
   * >
   * > - 所有的系统用户ID添加的防火墙规则总和的上限是2000，若超过该上限，则报错29400001。
   * >
   * > - 所有的系统用户ID添加的模糊域名规则总和的上限是100，若超过该上限，则报错29400005。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { NetFirewallRule } rule - 防火墙规则。
   * @returns { Promise<int> } 以Promise形式返回防火墙规则ID，防火墙规则ID由系统自动生成。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400001 - The number of firewall rules exceeds the maximum.
   * @throws { BusinessError } 29400002 - The number of IP address rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400003 - The number of port rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400004 - The number of domain rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400005 - The number of domain rules exceeds the maximum.
   * @throws { BusinessError } 29400007 - The dns rule is duplication.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function addNetFirewallRule(rule: NetFirewallRule): Promise<int>;

  /**
   * 更新防火墙规则。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { NetFirewallRule } rule - 防火墙规则。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400002 - The number of IP address rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400003 - The number of port rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400004 - The number of domain rules in the firewall rule exceeds the maximum.
   * @throws { BusinessError } 29400005 - The number of domain rules exceeds the maximum.
   * @throws { BusinessError } 29400006 - The specified rule does not exist.
   * @throws { BusinessError } 29400007 - The dns rule is duplication.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function updateNetFirewallRule(rule: NetFirewallRule): Promise<void>;

  /**
   * 删除系统用户ID的指定防火墙规则。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { int } ruleId - 防火墙规则ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400006 - The specified rule does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function removeNetFirewallRule(userId: int, ruleId: int): Promise<void>;

  /**
   * 按用户ID获取防火墙规则，需要指定分页查询参数。目前支持根据防火墙规则名排序。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { RequestParam } requestParam - 分页查询参数，其中orderField字段仅支持根据防火墙规则名排序。
   * @returns { Promise<FirewallRulePage> } 以Promise形式返回防火墙分页规则列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function getNetFirewallRules(userId: int, requestParam: RequestParam): Promise<FirewallRulePage>;

  /**
   * 通过userId和ruleId获取指定的防火墙规则。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - 系统用户ID，只能是存在的用户ID。
   * @param { int } ruleId - 防火墙规则ID。
   * @returns { Promise<NetFirewallRule> } 以Promise形式返回防火墙规则。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @throws { BusinessError } 29400006 - The specified rule does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  function getNetFirewallRule(userId: int, ruleId: int): Promise<NetFirewallRule>;

  /**
   * 按userId获取截获的记录，需要指定分页查询参数。
   *
   * @permission ohos.permission.GET_NET_FIREWALL
   * @param { int } userId - Indicates the user ID. It cannot be the ID of a user that does not exist.
   * @param { RequestParam } requestParam - Paging query input parameters.
   * @returns { Promise<InterceptedRecordPage> } Block Record List.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @throws { BusinessError } 29400000 - The specified user does not exist.
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   */
  function getInterceptedRecords(userId: int, requestParam: RequestParam): Promise<InterceptedRecordPage>;

  /**
   * 枚举类型，防火墙规则方向，包含入站、出站。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  enum NetFirewallRuleDirection {
    /**
     * 入站。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_IN = 1,
    /**
     * 出站。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_OUT = 2
  }

  /**
   * 枚举类型，防火墙规则行为，包含允许网络连接、阻止网络连接。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  enum FirewallRuleAction {
    /**
     * 允许。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_ALLOW = 0,
    /**
     * 阻止。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_DENY = 1
  }

  /**
   * 枚举类型，防火墙规则类型，包含IP、Domain、DNS。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  enum NetFirewallRuleType {
    /**
     * IP类规则。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_IP = 1,
    /**
     * 域名类规则。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_DOMAIN = 2,
    /**
     * DNS规则。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    RULE_DNS = 3,
  }

  /**
   * 枚举类型，防火墙规则排序方法。
   * 
   * > **说明**
   * >
   * > [getNetFirewallRules]{@link netFirewall.getNetFirewallRules}接口，仅支持ORDER_BY_RULE_NAME字段。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  enum NetFirewallOrderField {
    /**
     * 根据防火墙规则名排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    ORDER_BY_RULE_NAME = 1,
    /**
     * 根据记录时间排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    ORDER_BY_RECORD_TIME = 100
  }

  /**
   * 枚举类型，防火墙规则排序顺序，包含升序或降序。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  enum NetFirewallOrderType {
    /**
     * 按防火墙规则排序类型升序排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    ORDER_ASC = 1,
    /**
     * 按防火墙规则排序类型降序排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    ORDER_DESC = 100
  }

  /**
   * 防火墙策略，包含防火墙开关状态，默认的出站/入站行为（允许/阻止）。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface NetFirewallPolicy {
    /**
     * 是否开启防火墙。true表示开启防火墙，false表示关闭防火墙。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    isOpen: boolean;

    /**
     * 入站行为。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    inAction: FirewallRuleAction;

    /**
     * 出站行为。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    outAction: FirewallRuleAction;
  }

  /**
   * 防火墙规则的IP参数，IP类型包括IPv4、IPv6，支持单个IP或IP段。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface NetFirewallIpParams {
    /**
     * 1：IP地址或子网。该场景下必须指定address和mask字段，当使用单个IP时，mask字段需设置为32。 
     * 
     * 2：IP段，该场景下必须指定startIp和endIp字段。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    type: int;
    /**
     * 1：表示family地址族设置为IPv4。
     * 
     * 2：表示family地址族设置为IPv6。  
     * 
     * 默认IPv4，其他当前不支持。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    family?: int;
    /**
     * IP地址。当type等于1时需要设置，并且仅在type等于1时有效，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    address?: string;
    /**
     * IPv4：子网掩码。
     * 
     * IPv6：前缀。
     * 
     * 当type等于1时需要设置，并且仅在type等于1时有效，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    mask?: int;
    /**
     * 起始IP。当type等于2时需要设置，并且仅在type等于2时有效，范围从0.0.0.1到255.255.255.254，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    startIp?: string;
    /**
     * 结束IP。当type等于2时需要设置，并且仅在type等于2时有效，范围从0.0.0.1到255.255.255.254，否则将被忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    endIp?: string;
  }

  /**
   * 防火墙规则端口参数。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface NetFirewallPortParams {
    /**
     * 开始端口。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    startPort: int;
    /**
     * 结束端口。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    endPort: int;
  }

  /**
   * 防火墙规则域名参数，目前不支持中文域名。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface NetFirewallDomainParams {
    /**
     * 是否包含通配符。true表示包含，false表示不包含。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    isWildcard: boolean;
    /**
     * 当isWildcard为false时，需要确定的完整域， 例如"www.example.cn"。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    domain: string;
  }

  /**
   * 防火墙规则DNS信息。
   * 
   * > **说明**
   * >
   * > 当[addNetFirewallRule]{@link netFirewall.addNetFirewallRule}的入参rule.type配置为RULE_DNS时，该字段不能为空。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface NetFirewallDnsParams {
    /**
     * 主域名服务器。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    primaryDns: string;
    /**
     * 备份DNS。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    standbyDns?: string;
  }

  /**
   * 防火墙规则信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface NetFirewallRule {
    /**
     * 系统用户ID，只能是存在的用户ID。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    userId: int;
    /**
     * 规则名称，必填，最多128个字符。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    name: string;
    /**
     * 规则方向，包含入站和出站。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    direction: NetFirewallRuleDirection;
    /**
     * 行为，包含允许和阻止。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    action: FirewallRuleAction;
    /**
     * 规则类型，包含IP、Domain、DNS。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    type: NetFirewallRuleType;
    /**
     * 是否启用规则。true表示启用，false表示不启用。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    isEnabled: boolean;
    /**
     * 防火墙规则的ID。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    id?: int;
    /**
     * 规则描述，可选，最多256个字符。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    description?: string;
    /**
     * 应用程序或服务UID。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    appUid?: int;
    /**
     * 本地IP地址。当type=RULE_IP时有效，否则将被忽略，最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    localIps?: Array<NetFirewallIpParams>;
    /**
     * 远端IP地址。当type=RULE_IP时有效，否则将被忽略，最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    remoteIps?: Array<NetFirewallIpParams>;
    /**
     * 协议，包含TCP：6，UDP：17。当type=RULE_IP时有效。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    protocol?: int;
    /**
     * 本地端口。当type=RULE_IP时有效，否则将被忽略，最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    localPorts?: Array<NetFirewallPortParams>;
    /**
     * 远端端口。当type=RULE_IP时有效，否则将被忽略。最多10个。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    remotePorts?: Array<NetFirewallPortParams>;
    /**
     * 域名列表，当type=RULE_DOMAIN时有效，否则将被忽略，目前不支持中文域名。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    domains?: Array<NetFirewallDomainParams>;
    /**
     * DNS：当type=RULE_DNS时有效，否则将被忽略。当type=RULE_DNS时，该字段不能为空。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    dns?: NetFirewallDnsParams;
    /**
     * 接口名：当type=RULE_IP时有效，否则忽略。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    interface?: string;
  }

  /**
   * 拦截记录。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   */
  interface InterceptedRecord {
    /**
     * Time stamp.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    time: int;
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    localIp?: string;
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    remoteIp?: string;
    /**
     * Local port.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    localPort?: int;
    /**
     * Remote port.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    remotePort?: int;
    /**
     * Transport layer protocol.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    protocol?: int;
    /**
     * Application or service ID.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    appUid?: int;
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    domain?: string;
  }

  /**
   * 查询输入信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface RequestParam {
    /**
     * 页码，值范围：[1, 1000]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    page: int;
    /**
     * 页面大小，值范围：[1, 50]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    pageSize: int;
    /**
     * 排序方法。 该字段仅支持根据防火墙规则名排序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    orderField: NetFirewallOrderField;
    /**
     * 排序顺序。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    orderType: NetFirewallOrderType;
  }

  /**
   * 防火墙规则页信息结构。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @since 15 dynamic
   */
  interface FirewallRulePage {
    /**
     * 当前页码，值范围：[1,1000]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    page: int;
    /**
     * 页面大小，值范围：[1, 50]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    pageSize: int;
    /**
     * 总页数，值范围：[1,1000]。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    totalPage: int;
    /**
     * 页面数据。
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @since 15 dynamic
     */
    data: Array<NetFirewallRule>;
  }

  /**
   * 拦截记录分页信息。
   *
   * @syscap SystemCapability.Communication.NetManager.NetFirewall
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   */
  interface InterceptedRecordPage {
    /**
     * Current page number: indicates the page number of this query.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    page: int;
    /**
     * Page size: maximum number of records on a page for this query.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    pageSize: int;
    /**
     * Total pages: total number of pages.
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    totalPage: int;
    /**
     *
     * @syscap SystemCapability.Communication.NetManager.NetFirewall
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     */
    data: Array<InterceptedRecord>;
  }
}

export default netFirewall;