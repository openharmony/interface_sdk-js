/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file 扩展认证
 * @kit NetworkKit
 */

import { Callback } from './@ohos.base';
/**
 * 该模块提供了第三方客户端接入802.1X认证（一种基于端口的网络接入控制协议）流程的机制，支撑客户端的定制认证等功能。
 *
 * @syscap SystemCapability.Communication.NetManager.Eap
 * @since 20 dynamic
 */
declare namespace eap {
  /**
   * 用于指定需要定制化处理的EAP报文类型和对应的处理callback。使用callback异步回调。
   * 
   * 系统会将符合条件的EAP报文送入callback函数中供企业应用获取。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netType - 网络类型，取值为1或2。
   *     <br>netType=1表示WLAN，netType=2表示以太网。
   * @param { int } eapCode - 需要进行定制的EAP code，取值为1、2、3、4 。
   *     <br>code=1 Request、 code=2 Response、 code=3 Success、 code=4 Failure。
   * @param { int } eapType - 需要进行定制处理的EAP method类型，取值范围[0, 255]。
   *     <br>常用取值包括：eapType=1 Identity，eapType=2 Notification，eapType=3 NAK，eapType=4 MD5-Challenge，eapType=5 OTP（One-
   *     Time Password），eapType=6 GTC（Generic Token Card），eapType=13 EAP-TLS，eapType=21 EAP-TTLS，eapType=25 EAP-PEAP，
   *     eapType=254 Expanded Types，eapType=255 Experimental use。
   * @param { Callback<EapData> } callback - 回调函数，返回指定的eapCode+eapType的报文。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200006 - Invalid net type
   * @throws { BusinessError } 33200007 - Invalid eap code
   * @throws { BusinessError } 33200008 - Invalid eap type
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  function regCustomEapHandler(netType: int, eapCode: int, eapType: int, callback: Callback<EapData>): void;

  /**
   * 用于指定需要取消定制化处理的EAP报文类型和对应的处理callback。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netType - 网络类型，取值为1或2。
   *     <br>netType=1表示WLAN，netType=2表示以太网。
   * @param { int } eapCode - 需要进行定制的EAP code，取值为1、2、3、4 。
   *     <br>code=1 Request、 code=2 Response、 code=3 Success、 code=4 Failure。
   * @param { int } eapType - 需要进行定制处理的EAP method类型，取值范围[0, 255]。
   *     <br>常用取值包括：eapType=1 Identity，eapType=2 Notification，eapType=3 NAK，eapType=4 MD5-Challenge，eapType=5 OTP（One-
   *     Time Password），eapType=6 GTC（Generic Token Card），eapType=13 EAP-TLS，eapType=21 EAP-TTLS，eapType=25 EAP-PEAP，
   *     eapType=254 Expanded Types，eapType=255 Experimental use。
   * @param { Callback<EapData> } callback - 回调函数，返回指定的eapCode+eapType的报文。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200006 - Invalid net type
   * @throws { BusinessError } 33200007 - Invalid eap code
   * @throws { BusinessError } 33200008 - Invalid eap type
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  function unregCustomEapHandler(netType:int, eapCode: int, eapType: int, callback: Callback<EapData>): void;

  /**
   * 该接口用于通知系统已完成该步定制化处理。
   * 
   * > **说明**:
   * >
   * > - 若用于处理收EAP数据包(rx)时的callback，传给系统的EAP数据需要剥离服务器添加的定制部分。
   * >
   * > - 若用于处理发EAP数据包(tx)时的callback，传给系统的EAP数据为经过添加定制部分后的EAP数据。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { CustomResult } result - 定制化判定结果。
   * @param { EapData } data - 经过定制化的EAP数据。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200004 - Invalid result
   * @throws { BusinessError } 33200005 - Invalid size of eap data
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  function replyCustomEapData(result: CustomResult, data: EapData): void;

  /**
   * 该接口用于指定一个以太网卡发起EAP认证。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netId - 以太网卡Id。（传入默认参数-1，系统将自动匹配以太网卡发起EAP认证）
   * @param { EthEapProfile } profile - EAP配置信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200001 - Invalid netId
   * @throws { BusinessError } 33200003 - Invalid profile
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200010 - invalid eth state
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  function startEthEap(netId: int, profile: EthEapProfile): void;

  /**
   * 该接口用于指定一个以太网卡从EAP已认证状态退出。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION
   * @param { int } netId - 以太网卡Id。（传入默认参数-1，系统将自动匹配以太网卡发起EAP认证）
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 33200001 - Invalid netId
   * @throws { BusinessError } 33200002 - Log off fail
   * @throws { BusinessError } 33200009 - netmanager stop
   * @throws { BusinessError } 33200010 - invalid eth state
   * @throws { BusinessError } 33200099 - internal error
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  function logOffEthEap(netId: int): void;

  /**
   * EAP信息。
   * 
   * ​**系统能力**​：SystemCapability.Communication.NetManager.Eap
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  interface EapData {
    /**
     * 伪随机数，用于关联处理前后的EAP数据。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    msgId: int;
    /**
     * 从EAP header开始的EAP原始数据，未加密。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    eapBuffer: Uint8Array;
    /**
     * 数据长度。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    bufferLen: int;
  }

  /**
   * 表示EAP认证处理结果的枚举。
   * 
   * ​**系统能力**​：SystemCapability.Communication.NetManager.Eap
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  enum CustomResult {
    /**
     * 认证流程结束，结果失败。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    RESULT_FAIL = 0,

    /**
     * 本部分校验成功，校验下一步骤
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    RESULT_NEXT = 1,

    /**
     * 校验结束且成功
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    RESULT_FINISH = 2
  }

  /**
   * 表示EAP认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  enum EapMethod {
    /**
     * 不指定。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_NONE = 0,

    /**
     * Protected extensible authentication protocol
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_PEAP = 1,

    /**
     * Transport layer security
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_TLS = 2,

    /**
     * Tunneled transport layer security
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_TTLS = 3,

    /**
     * Password
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_PWD = 4,

    /**
     * Subscriber identity module
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_SIM = 5,

    /**
     * Authentication and key agreement
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_AKA = 6,

    /**
     * AKA prime
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_AKA_PRIME = 7,

    /**
     * Unauth TLS
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    EAP_UNAUTH_TLS = 8
  }

  /**
   * 表示第二阶段认证方式的枚举。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  enum Phase2Method {
    /**
     * 不指定。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_NONE = 0,

    /**
     * Password authentication protocol
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_PAP = 1,

    /**
     * Microsoft challenge handshake authentication protocol
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_MSCHAP = 2,

    /**
     * Microsoft challenge handshake authentication protocol version 2
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_MSCHAPV2 = 3,

    /**
     * Generic token card
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_GTC = 4,

    /**
     * Subscriber identity module
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_SIM = 5,

    /**
     * Authentication and key agreement
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_AKA = 6,

    /**
     * AKA prime
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    PHASE2_AKA_PRIME = 7
  }

  /**
   * 可扩展身份验证协议配置信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Eap
   * @since 20 dynamic
   */
  interface EthEapProfile {
    /**
     * AP认证方式。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    eapMethod: EapMethod;

    /**
     * 第二阶段认证方式。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    phase2Method: Phase2Method;

    /**
     * 身份信息。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    identity: string;

    /**
     * 匿名身份。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    anonymousIdentity: string;

    /**
     * Password
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    password: string;

    /**
     * CA证书别名。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    caCertAliases: string;

    /**
     * CA证书路径。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    caPath: string;

    /**
     * 客户端证书别名。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    clientCertAliases: string;

    /**
     * CA证书内容。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    certEntry: Uint8Array;

    /**
     * CA证书密码。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    certPassword: string;

    /**
     * 替代主题匹配。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    altSubjectMatch: string;

    /**
     * 域后缀匹配。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    domainSuffixMatch: string;

    /**
     * 通行证凭证的领域。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    realm: string;

    /**
     * 公共陆地移动网的直通凭证提供商。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    plmn: string;

    /**
     * SIM卡的子ID。
     *
     * @syscap SystemCapability.Communication.NetManager.Eap
     * @since 20 dynamic
     */
    eapSubId: int;
  }

}

export default eap;