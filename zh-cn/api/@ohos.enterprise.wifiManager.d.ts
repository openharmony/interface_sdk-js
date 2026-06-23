/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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

/**
 * 本模块提供企业设备Wi-Fi管理能力，包括查询Wi-Fi开启状态等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 * >
 * > 全局通用限制类策略由restrictions统一提供，若要全局禁用Wi-Fi，请参考
 * > [@ohos.enterprise.restrictions（限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 10
 */
declare namespace wifiManager {
  /**
   * 表示加密类型的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum WifiSecurityType {
    /**
     * 无效加密类型。例如机场公共Wi-Fi。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * 开放加密类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * Wired?Equivalent?Privacy?(WEP)加密类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared?key?(PSK)加密类型。 例如家庭、小型办公室Wi-Fi。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous?Authentication?of?Equals?(SAE)加密类型。例如智能家居、中小型企业网络。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP加密类型。例如大型企业认证、大学校园网络等。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * Suite-B 192位加密类型。例如政府和高安全机构。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * 机会性无线加密类型。例如咖啡馆的公共Wi-Fi，无需密码为连接提供加密。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * WAPI-Cert加密类型。中国自主的无线安全标准。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * WAPI-PSK加密类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * 表示IP类型的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum IpType {
    /**
     * 静态IP，一般用于需要固定IP的场景、例如办公室打印机，固定打印机IP地址，便于大家稳定地添加和使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    STATIC = 0,

    /**
     * 动态主机配置协议，一种能自动为网络中的设备分配IP地址和其他网络配置信息的服务。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DHCP = 1,

    /**
     * 未指定。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UNKNOWN = 2
  }

  /**
   * IP配置信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface IpProfile {
    /**
     * IP地址，十进制表示，正常点分十进制写法为192.168.1.1，对应的十进制为3232235777。地址值范围0.0.0.0到255.255.255.255。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ipAddress: number;

    /**
     * 默认网关，十进制表示，通常是路由器的IP地址。地址值范围0.0.0.0到255.255.255.255。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    gateway: number;

    /**
     * 子网掩码。地址值范围0.0.0.0到255.255.255.255。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    prefixLength: number;

    /**
     * DNS服务器，数组内最多包含首选DNS服务器和备用DNS服务器两个地址。地址值范围0.0.0.0到255.255.255.255。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    dnsServers: number[];

    /**
     * 域信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    domains: Array<string>;
  }

  /**
   * 表示EAP认证方式的枚举。
   *
   * > **说明**：
   * >
   * > 当前仅支持使用EAP_PEAP、EAP_TLS两种认证方式，其他暂不支持。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum EapMethod {
    /**
     * 未指定。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_NONE = 0,

    /**
     * PEAP类型，受保护的可扩展认证协议。先建立安全的TLS隧道、然后进行简单认证。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_PEAP = 1,

    /**
     * TLS类型，传输层安全协议。双向证书认证。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_TLS = 2,

    /**
     * TTLS类型，隧道传输层安全协议。与PEAP类似，但后续隧道内部认证方法更加丰富。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_TTLS = 3,

    /**
     * 密码。当eapMethod为EAP_PEAP或EAP_PWD时，该字段不能为空串，最大长度为128字节。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_PWD = 4,

    /**
     * SIM类型，使用手机SIM卡中的密钥和算法进行认证。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_SIM = 5,

    /**
     * AKA类型，使用USIM卡（3G/4G/5G SIM卡）中的增强密钥和算法进行认证。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_AKA = 6,

    /**
     * AKA Prime类型，EAP-AKA增强版，在密钥派生中绑定网络名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_AKA_PRIME = 7,

    /**
     * UNAUTH TLS类型，单向认证（仅认证客户端）和加密通道。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    EAP_UNAUTH_TLS = 8
  }

  /**
   * 表示第二阶段认证方式的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum Phase2Method {
    /**
     * 未指定。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_NONE = 0,

    /**
     * PAP类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_PAP = 1,

    /**
     * MSCHAP类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_MSCHAP = 2,

    /**
     * MSCHAPV2类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_MSCHAPV2 = 3,

    /**
     * GTC类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_GTC = 4,

    /**
     * SIM类型，使用手机SIM卡中的密钥和算法进行认证。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_SIM = 5,

    /**
     * AKA类型，使用USIM卡（3G/4G/5G SIM卡）中的增强密钥和算法进行认证。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_AKA = 6,

    /**
     * AKA Prime类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    PHASE2_AKA_PRIME = 7
  }

  /**
   * 可扩展身份验证协议配置信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface WifiEapProfile {
    /**
     * EAP认证方式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    eapMethod: EapMethod;

    /**
     * 第二阶段认证方式。只有eapMethod为EAP_PEAP或EAP_TTLS时需要填写。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    phase2Method: Phase2Method;

    /**
     * 身份信息。当eapMethod为TLS时，该字段不能为空。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    identity: string;

    /**
     * 匿名身份。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    anonymousIdentity: string;

    /**
     * 密码。当eapMethod为EAP_PEAP或EAP_PWD时，该字段不能为空串，最大长度为128字节。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    password: string;

    /**
     * CA 证书别名。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    caCertAliases: string;

    /**
     * CA 证书路径。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    caPath: string;

    /**
     * 客户端证书别名。当客户端证书内容为空时，客户端证书需先调用证书管理接口安装后传入别名。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    clientCertAliases: string;

    /**
     * 客户端证书内容。当eapMethod为EAP_TLS时，如果该字段为空，则客户端证书别名不能为空。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    certEntry: Uint8Array;

    /**
     * CA证书密码。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    certPassword: string;

    /**
     * 替代主题匹配。证书验证中，除了检查证书主域名，还检查证书的主题备用名称是否匹配。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    altSubjectMatch: string;

    /**
     * 域后缀匹配。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    domainSuffixMatch: string;

    /**
     * 通行证凭证的领域。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    realm: string;

    /**
     * 凭证提供商。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    plmn: string;

    /**
     * SIM卡的子ID。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    eapSubId: number;
  }

  /**
   * Wi-Fi配置信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface WifiProfile {
    /**
     * Wi-Fi热点名称，最大长度为32字节，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ssid: string;

    /**
     * Wi-Fi热点的MAC地址，长度6个字节，例如：00:11:22:33:44:55。获取方式如下：打开设置应用-点击系统选项-点击开发者选项-开启WLAN详细日志记录开关，然后进入设置应用中的WLAN列表，查看显示的MAC地址
     * 。若一个Wi-Fi对应多个MAC地址，需添加所有MAC地址。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    bssid?: string;

    /**
     * 热点的密钥，最大长度为64字节。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    preSharedKey: string;

    /**
     * 是否是隐藏网络。true表示是隐藏网络，false表示不是隐藏网络，默认为false。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    isHiddenSsid?: boolean;

    /**
     * 安全类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    securityType: WifiSecurityType;

    /**
     * 创建用户的ID，默认值-1。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    creatorUid?: number;

    /**
     * 禁用原因，默认值0。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    disableReason?: number;

    /**
     * 分配的网络ID，默认值-1。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    netId?: number;

    /**
     * 随机MAC类型。0-随机MAC地址， 1-设备MAC地址，默认值0。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    randomMacType?: number;

    /**
     * MAC地址。randomMacType为设备MAC类型时，该字段必填。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    randomMacAddr?: string;

    /**
     * IP地址类型，默认值DHCP。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    ipType?: IpType;

    /**
     * 静态IP配置信息。ipType为STATIC时，该字段必填。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    staticIp?: IpProfile;

    /**
     * 可扩展身份验证协议配置。只有securityType为WIFI_SEC_TYPE_EAP时必填。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    eapProfile?: WifiEapProfile;
  }

  /**
   * Wi-Fi的SSID和BSSID信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  interface WifiAccessInfo {
    /**
     * Wi-Fi热点名称，编码格式为UTF-8，最大长度为32字节（中文字符占3位，英文字符占1位）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    ssid: string;

    /**
     * Wi-Fi热点的MAC地址，例如：00:11:22:33:44:55。获取方式如下：打开设置应用-点击系统选项-点击开发者选项-开启WLAN详细日志记录开关，然后进入设置应用中的WLAN列表，查看显示的MAC地址。若一个Wi-
     * Fi对应多个MAC地址，需添加所有MAC地址。
     *
     * 作为[addDisallowedWifiList]{@link wifiManager.addDisallowedWifiList}和
     * [removeDisallowedWifiList]{@link wifiManager.removeDisallowedWifiList}接口的入参时，该属性可选，默认值为空字符串。
     *
     * 作为[addAllowedWifiList]{@link wifiManager.addAllowedWifiList}和
     * [removeAllowedWifiList]{@link wifiManager.removeAllowedWifiList}接口入参时，从API version 21开始，该属性可选，默认值为空字符串。API
     * version 20及之前的版本，该属性必填。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    bssid?: string;
  }

  /**
   * 查询当前设备的Wi-Fi开启状态。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean值，true表示Wi-Fi开启，false表示Wi-Fi关闭，否则err
   *     为错误对象。
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
   * @useinstead wifiManager.isWifiActiveSync
   */
  function isWifiActive(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前设备的Wi-Fi开启状态。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<boolean> } Promise对象，返回Wi-Fi开启状态，true表示Wi-Fi开启，false表示Wi-Fi关闭。
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
   * @useinstead wifiManager.isWifiActiveSync
   */
  function isWifiActive(admin: Want): Promise<boolean>;

  /**
   * 查询当前设备Wi-Fi开启状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回Wi-Fi开启状态，true表示Wi-Fi开启，false表示Wi-Fi关闭。
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
  function isWifiActiveSync(admin: Want): boolean;

  /**
   * 为当前设备配置Wi-Fi，使连接到指定网络。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { WifiProfile } profile - Wi-Fi配置信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
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
   * @useinstead wifiManager.setWifiProfileSync
   */
  function setWifiProfile(admin: Want, profile: WifiProfile, callback: AsyncCallback<void>): void;

  /**
   * 为当前设备配置Wi-Fi，使连接到指定网络。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { WifiProfile } profile - Wi-Fi配置信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。当配置Wi-Fi连接到指定网络失败时会抛出错误对象。
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
   * @useinstead wifiManager.setWifiProfileSync
   */
  function setWifiProfile(admin: Want, profile: WifiProfile): Promise<void>;

  /**
   * 为当前设备配置Wi-Fi，连接到指定网络。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { WifiProfile } profile - Wi-Fi配置信息。
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
  function setWifiProfileSync(admin: Want, profile: WifiProfile): void;

  /**
   * 设置禁用Wi-Fi策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁用Wi-Fi，false表示解除Wi-Fi禁用。
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
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setWifiDisabled(admin: Want, disabled: boolean): void;

  /**
   * 查询当前设备Wi-Fi是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回Wi-Fi禁用状态，true表示Wi-Fi被禁用，false表示Wi-Fi未被禁用。
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
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isWifiDisabled(admin: Want): boolean;

  /**
   * 添加Wi-Fi禁用名单。添加禁用名单后当前设备不允许连接该名单下的Wi-Fi。
   *
   * 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备Wi-Fi能力。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}解除Wi-Fi禁用后，可解除冲突。
   * 2. 已经通过[addAllowedWifiList]{@link wifiManager.addAllowedWifiList}接口添加了Wi-Fi允许名单。通过[removeAllowedWifiList]{@link wifiManager.removeAllowedWifiList}移除Wi-Fi允许名单后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<WifiAccessInfo> } list - Wi-Fi禁用名单数组。数组总长度不能超过200。例如，若当前禁用名单数组中已有100个Wi-Fi，则最多支持通过该接口再添加100个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function addDisallowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void;

  /**
   * 移除Wi-Fi禁用名单。若移除禁用名单中的部分Wi-Fi，则当前设备不允许连接禁用名单内剩余的Wi-Fi。若移除禁用名单中的所有Wi-Fi，则当前设备可以连接任意的Wi-Fi。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<WifiAccessInfo> } list - 待移除的Wi-Fi禁用名单数组。数组总长度不能超过200。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function removeDisallowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void;

  /**
   * 获取Wi-Fi禁用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<WifiAccessInfo> } Wi-Fi禁用名单数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function getDisallowedWifiList(admin: Want): Array<WifiAccessInfo>;

  /**
   * 添加Wi-Fi允许名单。添加允许名单后当前设备仅允许连接该名单下的Wi-Fi。
   *
   * 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备Wi-Fi能力。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}解除Wi-Fi禁用后，可解除冲突。
   * 2. 已经通过[addDisallowedWifiList]{@link wifiManager.addDisallowedWifiList}接口添加了Wi-Fi禁用名单。通过[removeDisallowedWifiList]{@link wifiManager.removeDisallowedWifiList}移除Wi-Fi禁用名单后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<WifiAccessInfo> } list - Wi-Fi允许名单数组。数组总长度不能超过200。例如，若当前允许名单数组中已有100个Wi-Fi，则最多支持通过该接口再添加100个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function addAllowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void;

  /**
   * 移除Wi-Fi允许名单。若移除允许名单中的部分Wi-Fi，则当前设备仅允许连接剩下未移除的Wi-Fi。若移除允许名单中的所有Wi-Fi，则当前设备可以连接任意Wi-Fi。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<WifiAccessInfo> } list - 待移除的Wi-Fi允许名单数组。数组总长度不能超过200。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function removeAllowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void;

  /**
   * 获取Wi-Fi允许名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<WifiAccessInfo> } Wi-Fi允许名单数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function getAllowedWifiList(admin: Want): Array<WifiAccessInfo>;

  /**
   * 打开Wi-Fi开关。
   *
   * 以下情况下，通过本接口打开Wi-Fi开关，会打开失败并提示"系统功能被禁用"：
   *
   * ?已经通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口禁用了Wi-Fi。需通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口启用Wi-Fi，解决"系统功能被禁用"报错。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isForce - 是否强制打开Wi-Fi功能。<br/>true表示强制开启Wi-Fi，强制开启后不支持用户在设备上手动关闭Wi-Fi开关，必须采用
   *     [turnOffWifi]{@link wifiManager.turnOffWifi}接口关闭。false表示非强制开启Wi-Fi，此时用户可以在设备上手动操作关闭Wi-Fi开关。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOnWifi(admin: Want, isForce: boolean): void;

  /**
   * 关闭Wi-Fi开关。
   *
   * 以下情况下，通过本接口关闭Wi-Fi开关，会提示"系统功能被禁用"：
   *
   * ?已经通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口禁用了Wi-Fi。需通过
   * [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * 接口启用Wi-Fi，解决"系统功能被禁用"报错。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_WIFI
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOffWifi(admin: Want): void;
}

export default wifiManager;