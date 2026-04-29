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
 * @kit DeviceCertificateKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 证书管理主要提供系统级的证书管理能力，实现证书全生命周期（安装，存储，使用，销毁）的管理和安全使用。
 *
 * @syscap SystemCapability.Security.CertificateManager
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace certificateManager {
  /**
   * 表示调用证书管理相关API的错误码。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CMErrorCode {
    /**
     * 表示应用程序无权限调用接口。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_PERMISSION = 201,

    /**
     * 表示应用程序不是系统应用程序。 
     * 
     * 此接口为系统接口。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NOT_SYSTEM_APP = 202,

    /**
     * 表示输入参数无效。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_INVALID_PARAMS = 401,

    /**
     * 表示调用接口时发生内部错误。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_GENERIC = 17500001,

    /**
     * 表示证书或凭据不存在。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_FOUND = 17500002,

    /**
     * 表示输入证书或凭据的数据格式无效。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_INCORRECT_FORMAT = 17500003,

    /**
     * 表示证书或凭据数量达到上限。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 12 dynamic
     * @since 23 static
     */
    CM_ERROR_MAX_CERT_COUNT_REACHED = 17500004,

    /**
     * 表示应用未经用户授权。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 12 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_AUTHORIZATION = 17500005,

    /**
     * 表示设备进入坚盾守护模式。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CM_ERROR_DEVICE_ENTER_ADVSECMODE = 17500007,

    /**
     * 表示密码错误。 
     * 
     * 此接口为系统接口。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    CM_ERROR_PASSWORD_IS_ERR = 17500008,

    /**
     * 表示不支持指定的证书存储路径。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    CM_ERROR_STORE_PATH_NOT_SUPPORTED = 17500009,

    /**
     * 表示访问USB凭据服务失败。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    CM_ERROR_ACCESS_UKEY_SERVICE_FAILED = 17500010,

    /**
     * 表示输入参数校验失败。
     * 
     * 例如：参数格式不正确、参数范围无效。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    CM_ERROR_PARAMETER_VALIDATION_FAILED = 17500011
  }

  /**
   * 表示证书详细信息。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertInfo {
    /**
     * 表示证书的唯一标识符，最大长度为256字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 表示证书的别名，最大长度为128字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certAlias: string;

    /**
     * 表示证书的状态，true为启用状态、false为禁用状态。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    state: boolean;

    /**
     * 表示证书的颁发者名称，最大长度为256字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    issuerName: string;

    /**
     * 表示证书的使用者名称，最大长度为1024字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    subjectName: string;

    /**
     * 表示证书的序列号，最大长度为64字节。格式为16进制字符串，例如：62C2CB4DE8405E96。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * 表示证书有效期起始日期，最大长度为32字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    notBefore: string;

    /**
     * 表示证书有效期截止日期，最大长度为32字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    notAfter: string;

    /**
     * 表示证书的指纹值，最大长度为128字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    fingerprintSha256: string;

    /**
     * 表示证书二进制数据，最大长度为8196字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    cert: Uint8Array;
  }

  /**
   * 表示证书简要信息。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertAbstract {
    /**
     * 表示证书的唯一标识符，最大长度为256字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 表示证书的别名，最大长度为128字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certAlias: string;

    /**
     * 表示证书的状态，true为启用状态、false为禁用状态。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    state: boolean;

    /**
     * 表示证书的使用者名称，最大长度为1024字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    subjectName: string;
  }

  /**
   * 表示凭据详细信息。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Credential {
    /**
     * 表示凭据的类型，最大长度为8字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * 表示凭据的别名，最大长度为128字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * 表示凭据的唯一标识符，最大长度为256字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyUri: string;

    /**
     * 表示凭据中包含的证书个数。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certNum: int;

    /**
     * 表示凭据中包含的密钥个数。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyNum: int;

    /**
     * 表示凭据二进制数据，最大长度为20480字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credentialData: Uint8Array;

    /**
     * 表示凭据的用途。默认值为CertificatePurpose.PURPOSE_DEFAULT。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    certPurpose?: CertificatePurpose;
  }

  /**
   * 表示凭据的简要信息。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CredentialAbstract {
    /**
     * 表示凭据的类型，最大长度为8字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * 表示凭据的别名，最大长度为128字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * 表示凭据的唯一标识符，最大长度为256字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyUri: string;
  }

  /**
   * 表示接口的返回结果。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMResult {
    /**
     * 表示证书简要信息的列表。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certList?: Array<CertAbstract>;

    /**
     * 表示证书详情。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certInfo?: CertInfo;

    /**
     * 表示凭据简要信息的列表。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credentialList?: Array<CredentialAbstract>;

    /**
     * 表示凭据详情。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credential?: Credential;

    /**
     * 表示授权应用列表。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    appUidList?: Array<string>;

    /**
     * 表示证书或凭据的唯一标识符，最大长度为256字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * 表示签名结果。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    outData?: Uint8Array;

    /**
     * 表示凭据详细信息。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    credentialDetailList?: Array<Credential>;

    /**
     * 表示证书URI列表。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    uriList?: Array<string>;
  }

  /**
   * 表示密钥使用目的的枚举，用于签名、验签。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyPurpose {
    /**
     * 签名。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_KEY_PURPOSE_SIGN = 4,

    /**
     * 验签。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_KEY_PURPOSE_VERIFY = 8
  }

  /**
   * 表示签名、验签使用的摘要算法的枚举。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyDigest {
    /**
     * 不需要摘要算法，选用此项时，需要业务传入已经计算过摘要的数据进行签名、验签。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_NONE = 0,

    /**
     * MD5摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_MD5 = 1,

    /**
     * SHA1摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA1 = 2,

    /**
     * SHA224摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA224 = 3,

    /**
     * SHA256摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA256 = 4,

    /**
     * SHA384摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA384 = 5,

    /**
     * SHA512摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA512 = 6,

    /**
     * SM3摘要算法。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CM_DIGEST_SM3 = 7
  }

  /**
   * 表示签名、验签使用的填充方式的枚举。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyPadding {
    /**
     * 无填充。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_NONE = 0,

    /**
     * PSS方式填充。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_PSS = 1,

    /**
     * PKCS1_V1_5方式填充。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_PKCS1_V1_5 = 2
  }

  /**
   * 表示签名、验签操作使用的参数集合，包括密钥使用目的、填充方式和摘要算法。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMSignatureSpec {
    /**
     * 表示密钥使用目的的枚举。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    purpose: CmKeyPurpose;

    /**
     * 表示填充方式的枚举。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    padding?: CmKeyPadding;

    /**
     * 表示摘要算法的枚举。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    digest?: CmKeyDigest;
  }

  /**
   * 表示签名、验签的初始化操作句柄。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMHandle {
    /**
     * 签名、验签的初始化操作句柄，最大长度为8字节。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    handle: Uint8Array;
  }

  /**
   * 表示安装私有凭据，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - 表示带有密钥对和证书的密钥库文件，最大长度为20480字节。
   * @param { string } keystorePwd - 表示密钥库文件的密码，长度限制32字节以内。
   * @param { string } certAlias - 表示用户输入的凭据别名，当前仅支持传入数字、字母或下划线，长度建议32字节以内。
   * @param { AsyncCallback<CMResult> } callback - 回调函数。当安装私有凭据成功时，err为null，data为
   *     [CMResult]{@link certificateManager.CMResult}对象中的uri属性；否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @throws { BusinessError } 17500004 - The number of certificates or credentials reaches the maximum allowed.
   *     [since 12]
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function installPrivateCertificate(
    keystore: Uint8Array,
    keystorePwd: string,
    certAlias: string,
    callback: AsyncCallback<CMResult>
  ): void;

  /**
   * 表示安装私有凭据。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - 表示带有密钥对和证书的密钥库文件，最大长度为20480字节。
   * @param { string } keystorePwd - 表示密钥库文件的密码，长度限制32字节以内。
   * @param { string } certAlias - 表示用户输入的凭据别名，当前仅支持传入数字、字母或下划线，长度建议32字节以内。
   * @returns { Promise<CMResult> } Promise对象，返回安装私有凭据的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @throws { BusinessError } 17500004 - The number of certificates or credentials reaches the maximum allowed.
   *     [since 12]
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string): Promise<CMResult>;

  /**
   * 表示卸载指定的私有凭据，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示待卸载凭据的唯一标识符，长度限制256字节以内。
   * @param { AsyncCallback<void> } callback - 回调函数。当卸载私有凭据成功时，err为null，否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function uninstallPrivateCertificate(keyUri: string, callback: AsyncCallback<void>): void;

  /**
   * 表示卸载指定的私有凭据。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示待卸载凭据的唯一标识符，长度限制256字节以内。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function uninstallPrivateCertificate(keyUri: string): Promise<void>;

  /**
   * 表示获取所有私有凭据列表，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { AsyncCallback<CMResult> } callback - 回调函数。当获取所有私有凭据列表成功时，err为null，data为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的credentialList属性；否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllAppPrivateCertificates(callback: AsyncCallback<CMResult>): void;

  /**
   * 表示获取所有私有凭据列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Promise对象，返回获取所有私有凭据列表的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的credentialList属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllAppPrivateCertificates(): Promise<CMResult>;

  /**
   * 表示获取私有凭据的详细信息，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示待获取凭据的唯一标识符，长度限制256字节以内。
   * @param { AsyncCallback<CMResult> } callback - 回调函数。当获取私有凭据的详细信息成功时，err为null，data为
   *     [CMResult]{@link certificateManager.CMResult}对象中的credential属性；否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function getPrivateCertificate(keyUri: string, callback: AsyncCallback<CMResult>): void;

  /**
   * 表示获取私有凭据详情。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示待获取凭据的唯一标识符，长度限制256字节以内。
   * @returns { Promise<CMResult> } Promise对象，返回获取私有凭据详细信息的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     credential属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function getPrivateCertificate(keyUri: string): Promise<CMResult>;

  /**
   * 表示使用凭据进行签名、验签的初始化操作，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - 表示使用凭据的唯一标识符，长度限制256字节以内。
   * @param { CMSignatureSpec } spec - 表示签名、验签的属性。
   * @param { AsyncCallback<CMHandle> } callback - 回调函数。当签名、验签的初始化操作成功时，err为null，data为获取到的CMHandle；否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @throws { BusinessError } 17500005 - The application is not authorized by the user. [since 12]
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function init(authUri: string, spec: CMSignatureSpec, callback: AsyncCallback<CMHandle>): void;

  /**
   * 表示使用凭据进行签名、验签的初始化操作。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - 表示使用凭据的唯一标识符，长度限制256字节以内。
   * @param { CMSignatureSpec } spec - 表示签名、验签的属性。
   * @returns { Promise<CMHandle> } Promise对象，返回签名、验签的初始化操作结果，返回值为CMHandle对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @throws { BusinessError } 17500005 - The application is not authorized by the user. [since 12]
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function init(authUri: string, spec: CMSignatureSpec): Promise<CMHandle>;

  /**
   * 表示签名、验签的数据更新操作，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @param { Uint8Array } data - 表示待签名、验签的数据。
   * @param { AsyncCallback<void> } callback - 回调函数。当签名、验签的数据更新操作成功时，err为null，否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function update(handle: Uint8Array, data: Uint8Array, callback: AsyncCallback<void>): void;

  /**
   * 表示签名、验签的数据更新操作。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @param { Uint8Array } data - 表示待签名、验签的数据。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function update(handle: Uint8Array, data: Uint8Array): Promise<void>;

  /**
   * 表示完成签名的操作，Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @param { AsyncCallback<CMResult> } callback - 回调函数。当签名成功时，err为null，data为
   *     [CMResult]{@link certificateManager.CMResult}对象中的outData属性，表示签名数据；否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function finish(handle: Uint8Array, callback: AsyncCallback<CMResult>): void;

  /**
   * 表示完成验签的操作，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @param { Uint8Array } signature - 表示签名数据。
   * @param { AsyncCallback<CMResult> } callback - 回调函数。当验签成功时，err为null；否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function finish(handle: Uint8Array, signature: Uint8Array, callback: AsyncCallback<CMResult>): void;

  /**
   * 表示完成签名、验签的操作。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @param { Uint8Array } signature - 表示用于验签操作的签名数据，仅验签操作需要指定。
   * @returns { Promise<CMResult> } Promise对象。执行签名操作时，返回签名的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     outData属性；执行验签操作时，无返回值。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function finish(handle: Uint8Array, signature?: Uint8Array): Promise<CMResult>;

  /**
   * 表示中止签名、验签的操作，使用Callback回调异步返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @param { AsyncCallback<void> } callback - 回调函数。当中止签名、验签成功时，err为null，否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function abort(handle: Uint8Array, callback: AsyncCallback<void>): void;

  /**
   * 表示中止签名、验签的操作。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - 表示初始化操作返回的句柄，最大长度为8字节。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  function abort(handle: Uint8Array): Promise<void>;

  /**
   * 表示获取用户公共凭据的详细信息。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示用户公共凭据的唯一标识符，长度限制256字节以内。
   * @returns { Promise<CMResult> } Promise对象，返回获取用户公共凭据详细信息的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     credential属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @throws { BusinessError } 17500005 - The application is not authorized by the user.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function getPublicCertificate(keyUri: string): Promise<CMResult>;

  /**
   * 表示当前应用是否由指定的用户凭据授权。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示用户授权给应用使用的凭据的唯一标识符，长度限制256字节以内。
   * @returns { Promise<boolean> } Promise对象，返回查询应用是否被授权的结果，true为已授权，false为未授权。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function isAuthorizedApp(keyUri: string): Promise<boolean>;

  /**
   * 表示获取当前用户和设备公共位置的所有用户根CA证书列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } Promise对象，返回获取用户根CA证书列表的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     certList属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllUserTrustedCertificates(): Promise<CMResult>;

  /**
   * 表示获取用户根CA证书的详细信息。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } certUri - 表示用户根CA证书的唯一标识符，长度限制256字节以内。
   * @returns { Promise<CMResult> } Promise对象，返回获取用户根CA证书详细信息的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     certInfo属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 12 dynamic
   * @since 23 static
   */
  function getUserTrustedCertificate(certUri: string): Promise<CMResult>;

  /**
   * 表示获取所有系统凭据列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } Promise对象，返回获取所有系统凭据列表的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的credentialList属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllSystemAppCertificates(): Promise<CMResult>;

  /**
   * 表示获取应用安装的凭据列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } Promise对象，返回获取应用安装的凭据列表的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     credentialList属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 13 dynamic
   * @since 23 static
   */
  function getPrivateCertificates(): Promise<CMResult>;

  /**
   * 表示获取证书的存储路径。
   *
   * @param { CertStoreProperty } property - 表示获取证书存储路径的参数集合。
   * @returns { string } 表示证书的存储路径。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed. For example, CertStoreProperty.certType
   *     is set to CA_CERT_USER, but CertStoreProperty.certScope is not specified.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500009 - The device does not support the specified certificate storage path,
   *     For example, the device outside China does not support the certificate that uses SM algorithm. [since 20]
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getCertificateStorePath(property: CertStoreProperty): string;

  /**
   * 表示安装用户CA证书。
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { Uint8Array } cert - 表示CA证书数据，最大长度为8196字节。
   * @param { CertScope } certScope - 表示CA证书安装的位置。
   * @returns { CMResult } 表示CA证书的安装结果，返回值为CMResult对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500007 - Indicates that the device enters advanced security mode. In this mode, the
   *     user CA certificate cannot be installed.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function installUserTrustedCertificateSync(cert: Uint8Array, certScope: CertScope): CMResult;

  /**
   * 表示凭据的存储级别。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum AuthStorageLevel {
    /**
     * EL1级别，表示设备启动后可以访问。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL1 = 1,

    /**
     * EL2级别，表示设备首次解锁后可以访问。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL2 = 2,

    /**
     * EL4级别，表示设备解锁时可以访问。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL4 = 4
  }

  /**
   * 表示获取证书存储位置的参数集合，包括证书的类型及证书的位置。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export interface CertStoreProperty {
    /**
     * 表示证书的类型。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    certType: CertType;

    /**
     * 表示证书的存储位置。当证书类型为CA_CERT_USER时，此项为必选项。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    certScope?: CertScope;

    /**
     * 表示证书算法类型。仅当certType为CA_CERT_SYSTEM时有效，默认值为INTERNATIONAL。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    certAlg?: CertAlgorithm;
  }

  /**
   * 表示证书类型。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CertType {
    /**
     * 表示系统CA证书。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CA_CERT_SYSTEM = 0,

    /**
     * 表示用户CA证书。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CA_CERT_USER = 1
  }

  /**
   * 表示安装私有凭据并指定凭据的存储级别。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - 表示带有密钥对和证书的密钥库文件，最大长度为20480字节。
   * @param { string } keystorePwd - 表示密钥库文件的密码。<br>长度限制：32字节以内。
   * @param { string } certAlias - 表示用户输入的凭据别名，当前仅支持传入数字、字母或下划线。<br>长度建议：32字节以内。
   * @param { AuthStorageLevel } level - 表示凭据的存储级别。
   * @returns { Promise<CMResult> } Promise对象，返回安装私有凭据的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - The keystore is in an invalid format or the keystore password is incorrect.
   * @throws { BusinessError } 17500004 - The number of certificates or credentials reaches the maximum allowed.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, level: AuthStorageLevel): Promise<CMResult>;

  /**
   * 表示根据证书的位置获取用户根CA证书列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { CertScope } scope - 表示证书的位置。
   * @returns { Promise<CMResult> } Promise对象，返回获取用户根CA证书列表的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     certList属性。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function getAllUserTrustedCertificates(scope: CertScope): Promise<CMResult>;

  /**
   * 表示证书的位置。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CertScope {
    /**
     * 表示当前用户。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CURRENT_USER = 1,

    /**
     * 表示设备公共，即所有用户都可以访问的位置。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    GLOBAL_USER = 2
  }

  /**
   * 表示删除用户CA证书。
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { string } certUri - 表示待卸删除证书的唯一标识符，长度限制256字节以内。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  function uninstallUserTrustedCertificateSync(certUri: string): void;

  /**
   * 表示证书的算法类型。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CertAlgorithm {
    /**
     * 表示国际密码算法，如RSA、NIST ECC等。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    INTERNATIONAL = 1,

    /**
     * 表示商用密码算法，如SM2、SM4等。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    SM = 2
  }

  /**
   * 表示凭据用途的枚举。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  export enum CertificatePurpose {
    /**
     * 默认用途，用于凭据签名。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_DEFAULT = 0,

    /**
     * 用于查询所有凭据。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_ALL = 1,

    /**
     * 用于凭据签名。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_SIGN = 2,

    /**
     * 用于凭据加密。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_ENCRYPT = 3
  }

  /**
   * 表示获取USB凭据详细信息。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示USB凭据的唯一标识符，长度限制256字节以内。
   * @param { UkeyInfo } ukeyInfo - 表示USB凭据的属性信息。
   * @returns { Promise<CMResult> } Promise对象，返回获取到的USB凭据详情的结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @throws { BusinessError } 17500010 - Indicates that access USB key service failed.
   * @throws { BusinessError } 17500011 - Indicates that the input parameters validation failed.
   *     For example, the parameter format is incorrect or the value range is invalid.
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  function getUkeyCertificate(keyUri: string, ukeyInfo: UkeyInfo): Promise<CMResult>;

  /**
   * 提供USB凭据属性信息。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  export interface UkeyInfo {
    /**
     * 表示凭据用途。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    certPurpose?: CertificatePurpose;
  }

  /**
   * 获取系统信任的CA证书列表，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Promise对象，返回获取系统信任CA证书列表的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的certList属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getSystemTrustedCertificateList(): Promise<CMResult>;

  /**
   * 获取系统信任的CA证书详情，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } certUri - 表示证书的唯一标识符。可通过
   *     [getSystemTrustedCertificateList]{@link certificateManager.getSystemTrustedCertificateList}接口获取。
   * @returns { Promise<CMResult> } Promise对象，返回获取系统信任CA证书详细信息的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的certInfo属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br>Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getSystemTrustedCertificate(certUri: string): Promise<CMResult>;

  /**
   * 设置CA证书的状态，当前仅支持设置用户CA证书状态，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { string } certUri - 表示证书的唯一标识符。当前仅支持用户CA证书。
   * @param { CertType } certType - 表示证书类型。当前仅支持设置用户CA证书（CA_CERT_USER）的状态。
   * @param { boolean } enabled - 表示证书状态是否启用。true：已启用，false：已禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br>Possible causes: the URI is null or the URI format is wrong,
   *     <br> the certType's value is invalid or not supported.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - The certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function setCertificateStatus(certUri: string, certType: CertType, enabled: boolean) : Promise<void>;

  /**
   * 表示证书文件格式。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export enum CertFileFormat {
    /**
     * 表示证书文件格式为PEM或DER。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    PEM_DER = 0,

    /**
     * 表示证书文件格式为P7B。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    P7B = 1
  }

  /**
   * 表示证书二进制数据。
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export interface CertBlob {
    /**
     * 表示证书文件数据。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    certData: Uint8Array;

    /**
     * 表示证书文件格式。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    certFormat? : CertFileFormat;

    /**
     * 表示用户CA证书的存储位置。
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    certScope? : CertScope;
  }

  /**
   * 安装用户CA证书。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { CertBlob } certificate - 表示证书信息。
   * @returns { Promise<CMResult> } Promise对象，返回安装用户CA证书的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter verification failed. Possible causes:
   *     <br>the certData parameter is empty or exceeds the maximum length .
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500007 - Indicates that the device enters advanced security mode.
   *     <br>In this mode, the user CA certificate cannot be installed.
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function installUserTrustedCertificate(certificate: CertBlob) : Promise<CMResult>;

  /**
   * 卸载所有用户信任的CA证书，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallAllUserTrustedCertificate() : Promise<void>;

  /**
   * 安装用户的公共凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { Uint8Array } keystore - 表示带有密钥对和证书的密钥库文件，仅支持P12格式。
   * @param { string } keystorePwd - 表示密钥库文件的密码。
   * @returns { Promise<CMResult> } Promise对象，返回安装用户公共凭据的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed. Possible causes:
   *     <br>the keystore parameter is empty or exceeds the maximum length.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500008 - Indicates that the password is error.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function installPublicCertificate(keystore: Uint8Array, keystorePwd: string) : Promise<CMResult>;

  /**
   * 卸载用的户公共凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - 表示用户公共凭据的唯一标识符。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallPublicCertificate(keyUri: string) : Promise<void>;

  /**
   * 获取所有用户的公共凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Promise对象，返回获取所有用户公共凭据的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的credentialDetailList属性。
   *     <br>**说明**：用户公共凭据个数为0时，返回CMResult为undefined。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getAllPublicCertificates() : Promise<CMResult>;

  /**
   * 授予应用使用用户公共凭据的权限，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - 表示用户公共凭据的唯一标识符。
   * @param { int } clientAppUid - 表示应用UID。
   * @returns { Promise<CMResult> } Promise对象，返回授予应用使用用户公共凭据权限的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function grantPublicCertificate(keyUri: string, clientAppUid: int) : Promise<CMResult>;

  /**
   * 获取用户公共凭据的授权应用列表，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - 表示用户公共凭据的唯一标识符。
   * @returns { Promise<CMResult> } Promise对象，返回获取授权应用列表的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的appUidList属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getAuthorizedAppList(keyUri: string) : Promise<CMResult>;

  /**
   * 移除应用使用用户公共凭据的权限，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - 表示用户公共凭据的唯一标识符。
   * @param { int } clientAppUid - 表示应用UID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function removeGrantedPublicCertificate(keyUri: string, clientAppUid: int) : Promise<void>;

  /**
   * 获取指定应用的所有私有凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { int } appUid - 表示应用UID。
   * @returns { Promise<CMResult> } Promise对象，返回获取指定应用的所有私有凭据的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的credentialDetailList属性。
   *     <br>**说明**：私有凭据个数为0时，返回CMResult为undefined。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getAllAppPrivateCertificatesByUid(appUid: int) : Promise<CMResult>;

  /**
   * 安装系统应用凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { Uint8Array } keystore - 表示带有密钥对和证书的密钥库文件，仅支持P12格式。
   * @param { string } keystorePwd - 表示密钥库文件的密码。
   * @returns { Promise<CMResult> } Promise对象，返回安装系统应用凭据的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的uri属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed. Possible causes:
   *     <br>The keystore parameter is empty or exceeds the maximum length.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500003 - Indicates that the certificate is in an invalid format.
   * @throws { BusinessError } 17500004 - Indicates that the number of certificates reaches the maximum allowed.
   * @throws { BusinessError } 17500008 - Indicates that the password is error.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function installSystemAppCertificate(keystore: Uint8Array, keystorePwd: string): Promise<CMResult>;

  /**
   * 获取系统应用的凭据详情，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { string } keyUri - 表示系统应用凭据的唯一标识符。
   * @returns { Promise<CMResult> } Promise对象，返回获取系统应用凭据详细信息的结果，返回值为
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult}对象中的credential属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function getSystemAppCertificate(keyUri: string) : Promise<CMResult>;

  /**
   * 卸载系统应用的凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { string } keyUri - 表示系统应用凭据的唯一标识符。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter verification failed.
   *     <br> Possible causes: the URI is null or the URI format is wrong.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallSystemAppCertificate(keyUri: string) : Promise<void>;

  /**
   * 获取USB凭据证书列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } ukeyProvider - 表示USB凭据提供商。
   * @param { UkeyInfo } ukeyInfo - 表示USB凭据的属性信息。
   * @returns { Promise<CMResult> } Promise对象，返回获取USB凭据证书列表的结果，返回值为[CMResult]{@link certificateManager.CMResult}对象中的
   *     credentialDetailList属性。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error.
   * @throws { BusinessError } 17500010 - Indicates that access USB key service failed.
   * @throws { BusinessError } 17500011 - Parameter verification failed.
   *     <br> Possible causes: the ukeyInfo parameter is invalid.
   *     For example, the parameter format is incorrect or the value range is invalid.
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function getUkeyCertificateList(ukeyProvider: string, ukeyInfo: UkeyInfo): Promise<CMResult>;

  /**
   * 卸载所有系统应用凭据和用户公共凭据，仅证书管理应用调用。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   *     and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br> The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManager
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  function uninstallAllAppCertificate() : Promise<void>;

  /**
   * 导入证书到USB Key
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - 表示USB key证书的uri.
   *     <br>keyUri参数用于标识证书实体，可以通过调用getUkeyCertificateList接口得到。
   * @param { Uint8Array } cert - 表示待导入的证书数据
   *     <br>证书数据格式遵循SKF规范的定义
   * @param { UkeyInfo } ukeyInfo - 表示USB key证书属性信息
   *     <br>UkeyInfo.CertificatePurpose只能取值为PURPOSE_SIGN或PURPOSE_ENCRYPT
   * @returns { Promise<void> } 201 - 能力不支持。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17500001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 17500002 - Indicates that the certificate does not exist.
   * @throws { BusinessError } 17500010 - Indicates that access USB key service failed.
   * @throws { BusinessError } 17500011 - Indicates that the input parameters validation failed.
   *     For example, the parameter format is incorrect or the value range is invalid.
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function importUkeyCertificate(keyUri: string, cert: Uint8Array, ukeyInfo: UkeyInfo): Promise<void>;
}

export default certificateManager;