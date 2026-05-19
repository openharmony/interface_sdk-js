/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
import cryptoFramework from './@ohos.security.cryptoFramework';

/**
 * 证书算法库框架提供证书相关接口。其中，依赖加解密算法库框架的基础算法能力的部分，详细接口说明可参考
 * [cryptoFramework API参考]{@link @ohos.security.cryptoFramework:cryptoFramework}。
 *
 * @syscap SystemCapability.Security.Cert
 * @crossplatform [since 11]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace cert {
  /**
   * 表示执行结果的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum CertResult {
    /**
     * 非法入参。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_PARAMS = 401,

    /**
     * 操作不支持。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_SUPPORT = 801,

    /**
     * 内存错误。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_OUT_OF_MEMORY = 19020001,

    /**
     * 运行时外部错误。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_RUNTIME_ERROR = 19020002,

    /**
     * 参数检查失败。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ERR_PARAMETER_CHECK_FAILED = 19020003,

    /**
     * 调用三方算法库API出错。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CRYPTO_OPERATION = 19030001,

    /**
     * 证书签名验证错误。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_SIGNATURE_FAILURE = 19030002,

    /**
     * 证书尚未生效。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_NOT_YET_VALID = 19030003,

    /**
     * 证书过期。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_HAS_EXPIRED = 19030004,

    /**
     * 无法获取证书的颁发者。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY = 19030005,

    /**
     * 证书的密钥用途不含证书签名。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_KEYUSAGE_NO_CERTSIGN = 19030006,

    /**
     * 证书的密钥用途不含数字签名。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE = 19030007,

    /**
     * 私钥密码错误。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    ERR_MAYBE_WRONG_PASSWORD = 19030008,

    /**
     * 证书不受信任。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_UNTRUSTED = 19030009,

    /**
     * 证书已被吊销。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_HAS_REVOKED = 19030010,

    /**
     * 未知的关键扩展。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_UNKNOWN_CRITICAL_EXTENSION = 19030011,

    /**
     * 证书主机名不匹配。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_HOSTNAME_MISMATCH = 19030012,

    /**
     * 证书邮箱地址不匹配。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_EMAIL_ADDRESS_MISMATCH = 19030013,

    /**
     * 证书密钥用途不匹配。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_KEYUSAGE_MISMATCH = 19030014,

    /**
     * 无法获取证书吊销列表。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_NOT_FOUND = 19030015,

    /**
     * 证书吊销列表尚未生效。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_NOT_YET_VALID = 19030016,

    /**
     * 证书吊销列表已过期。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_HAS_EXPIRED = 19030017,

    /**
     * 证书吊销列表签名验证失败。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_SIGNATURE_FAILURE = 19030018,

    /**
     * 无法获取证书吊销列表颁发者。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_ISSUER_NOT_FOUND = 19030019,

    /**
     * 无法获取在线证书状态协议（OCSP）响应。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_RESPONSE_NOT_FOUND = 19030020,

    /**
     * OCSP响应无效。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_RESPONSE_INVALID = 19030021,

    /**
     * OCSP签名验证失败。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_SIGNATURE_FAILURE = 19030022,

    /**
     * OCSP证书状态未知。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_CERT_STATUS_UNKNOWN = 19030023,

    /**
     * 网络连接超时。
     *
     * 26.0.0
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_NETWORK_TIMEOUT = 19030024
  }

  /**
   * 二进制数据的封装接口，核心字段data为Uint8Array类型。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataBlob {
    /**
     *
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
  }

  /**
   * buffer数组的列表。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataArray {
    /**
     *
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Array<Uint8Array>;
  }

  /**
   * 表示证书编码格式的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum EncodingFormat {
    /**
     * DER格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FORMAT_DER = 0,

    /**
     * PEM格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FORMAT_PEM = 1,

    /**
     * PKCS7格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FORMAT_PKCS7 = 2
  }

  /**
   * 表示获取证书字段的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CertItemType {
    /**
     * 表示获取证书的待签名信息。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_TBS = 0,

    /**
     * 表示获取证书的公钥信息。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_PUBLIC_KEY = 1,

    /**
     * 表示获取证书的颁发者唯一编号。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_ISSUER_UNIQUE_ID = 2,

    /**
     * 表示获取证书的主体唯一编号。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_SUBJECT_UNIQUE_ID = 3,

    /**
     * 表示获取证书的扩展域信息。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_EXTENSIONS = 4
  }

  /**
   * 表示获取扩展域中对象标识符类型的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExtensionOidType {
    /**
     * 表示获取扩展域中所有的对象标识符。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_ALL = 0,

    /**
     * 表示获取扩展域中critical为true的对象标识符。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_CRITICAL = 1,

    /**
     * 表示获取扩展域中critical为false的对象标识符。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_UNCRITICAL = 2
  }

  /**
   * 表示获取扩展域中对象类型的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExtensionEntryType {
    /**
     * 表示获取整个对象。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY = 0,

    /**
     * 表示获取对象的critical属性。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY_CRITICAL = 1,

    /**
     * 表示获取对象的数据。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY_VALUE = 2
  }

  /**
   * 带编码格式的证书二进制数组。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface EncodingBlob {
    /**
     * 传入的证书数据。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
    /**
     * 指明证书编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    encodingFormat: EncodingFormat;
  }

  /**
   * 证书链数据，在证书链校验时，作为入参传入。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CertChainData {
    /**
     * 传入的证书数据。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
    /**
     * 传入的数据中，包含的证书数量。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    count: int;
    /**
     * 指明证书编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    encodingFormat: EncodingFormat;
  }

  /**
   * 表示获取编码格式的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum EncodingType {
    /**
     * UTF8编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENCODING_UTF8 = 0
  }

  /**
   * X509证书类。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface X509Cert {
    /**
     * 表示对证书验签。使用callback异步回调。
     *
     * @param { cryptoFramework.PubKey } key - 用于验签的公钥对象。
     * @param { AsyncCallback<void> } callback - 回调函数，使用AsyncCallback的第一个error参数判断是否验签成功，error为null表示成功，不为null表示失败。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;

    /**
     * 表示对证书验签。使用Promise异步回调。
     *
     * @param { cryptoFramework.PubKey } key - 用于验签的公钥对象。
     * @returns { Promise<void> } Promise对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey): Promise<void>;

    /**
     * 表示获取X509证书序列化数据。使用callback异步回调。
     *
     * @param { AsyncCallback<EncodingBlob> } callback - 回调函数，表示X509证书序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * 表示获取X509证书序列化数据。使用Promise异步回调。
     *
     * @returns { Promise<EncodingBlob> } 表示X509证书序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * 表示获取X509证书公钥。
     *
     * @returns { cryptoFramework.PubKey } Public key of the X.509 certificate obtained. This object is used only for
     *     **verify()** of **X509Cert**.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getPublicKey(): cryptoFramework.PubKey;

    /**
     * 表示检查X509证书有效期。
     *
     * @param { string } date - 日期，为ASN.1时间格式。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    checkValidityWithDate(date: string): void;

    /**
     * 表示获取X509证书版本。
     *
     * @returns { int } 表示X509证书版本。
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * 表示获取X509证书序列号。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 10开始废弃，建议使用[getCertSerialNumber]{@link cert.X509Cert.getCertSerialNumber}替代。
     *
     * @returns { number } 表示X509证书序列号。
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.security.cert.X509Cert.getCertSerialNumber
     */
    getSerialNumber(): number;

    /**
     * 表示获取X509证书序列号。
     *
     * @returns { bigint } 表示X509证书序列号。
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCertSerialNumber(): bigint;

    /**
     * 表示获取X509证书颁发者名称。
     *
     * > **说明：**
     * >
     * > 获取到的X509证书颁发者名称数据带字符串结束符。
     *
     * @returns { DataBlob } 表示X509证书颁发者名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getIssuerName(): DataBlob;

    /**
     * 根据编码类型获取X509证书颁发者名称。
     *
     * @param { EncodingType } encodingType - 表示编码类型。
     * @returns { string } 表示X509证书颁发者名称，使用逗号分隔相对可分辨名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getIssuerName(encodingType: EncodingType): string;

    /**
     * 表示获取X509证书主体名称。
     *
     * > **说明：**
     * >
     * > 获取到的X509证书主体名称数据带字符串结束符。
     *
     * @param { EncodingType } [encodingType] - 编码类型。设置参数表示获取UTF8格式编码；不设置默认获取ASCII格式编码。<br>API 12后支持设置此参数。 [since 12]
     * @returns { DataBlob } 表示X509证书主体名称，转化成字符串后使用逗号分隔相对可分辨名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Incorrect parameter types;
     *     <br>2. Parameter verification failed. [since 12]
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubjectName(encodingType?: EncodingType): DataBlob;

    /**
     * 表示获取X509证书有效期起始时间。
     *
     * @returns { string } 表示X509证书有效期起始时间，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getNotBeforeTime(): string;

    /**
     * 表示获取X509证书有效期截止时间。
     *
     * @returns { string } 表示X509证书有效期截止时间，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getNotAfterTime(): string;

    /**
     * 表示获取X509证书签名数据。
     *
     * @returns { DataBlob } 表示X509证书签名数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignature(): DataBlob;

    /**
     * 表示获取X509证书签名算法名称。
     *
     * @returns { string } 表示X509证书签名算法名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignatureAlgName(): string;

    /**
     * 表示获取X509证书签名算法的对象标志符OID(Object Identifier)。OID是由国际标准组织(ISO)的名称注册机构分配。
     *
     * @returns { string } 表示X509证书签名算法对象标志符OID。若OID长度超过128字节，则会被截断。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignatureAlgOid(): string;

    /**
     * 表示获取X509证书签名算法参数。
     *
     * @returns { DataBlob } 表示X509证书签名算法参数。
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSignatureAlgParams(): DataBlob;

    /**
     * 表示获取X509证书密钥用途。
     *
     * @returns { DataBlob } 表示X509证书密钥用途。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getKeyUsage(): DataBlob;

    /**
     * 表示获取X509证书扩展密钥用途。
     *
     * @returns { DataArray } 表示X509证书扩展密钥用途。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getExtKeyUsage(): DataArray;

    /**
     * 表示获取X509证书基本约束。
     *
     * @returns { int } 表示X509证书基本约束。
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getBasicConstraints(): int;

    /**
     * 表示获取X509证书主体可选名称。
     *
     * > **说明：**
     * >
     * > 获取到的X509证书主体可选名称数据带字符串结束符。
     *
     * @returns { DataArray } 表示X509证书主体可选名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubjectAltNames(): DataArray;

    /**
     * 表示获取X509证书颁发者可选名称。
     *
     * > **说明：**
     * >
     * > 获取到的X509证书颁发者可选名称数据带字符串结束符。
     *
     * @returns { DataArray } 表示X509证书颁发者可选名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getIssuerAltNames(): DataArray;

    /**
     * 表示获取X509证书对应的字段。
     *
     * @param { CertItemType } itemType - 表示需要获取的证书字段。
     * @returns { DataBlob } 表示X509证书对应的字段，返回值为DER格式。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getItem(itemType: CertItemType): DataBlob;

    /**
     * 判断证书是否与输入参数匹配。
     *
     * @param { X509CertMatchParameters } param - 表示需要匹配的参数。
     * @returns { boolean } 当参数匹配时，该方法返回true，否则返回false。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    match(param: X509CertMatchParameters): boolean;

    /**
     * 获取X509证书CRL的分发点统一资源标识符。
     *
     * @returns { DataArray } 表示X509证书CRL的分发点统一资源标识符。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCRLDistributionPoint(): DataArray;

    /**
     * 获取颁发者的X509可分辨名称。
     *
     * @returns { X500DistinguishedName } X509的可分辨对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getIssuerX500DistinguishedName(): X500DistinguishedName;

    /**
     * 获取证书主题的X509可分辨名称。
     *
     * @returns { X500DistinguishedName } X509的可分辨对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getSubjectX500DistinguishedName(): X500DistinguishedName;

    /**
     * 获取对象的字符串类型数据。
     *
     * @returns { string } 对象的字符串类型数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * 根据编码类型获取对象的字符串类型数据。
     *
     * @param { EncodingType } encodingType - 表示编码类型。
     * @returns { string } 表示对象的字符串类型数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    toString(encodingType: EncodingType): string;

    /**
     * 获取DER格式数据的哈希值。
     *
     * @returns { Uint8Array } DER格式数据的哈希值。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;

    /**
     * 获取对应实体的扩展域DER格式数据。
     *
     * @returns { CertExtension } 证书扩展域段类对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getExtensionsObject(): CertExtension;
  }

  /**
   * 表示创建X509证书对象。使用callback异步回调。
   *
   * @param { EncodingBlob } inStream - X509证书序列化数据。
   * @param { AsyncCallback<X509Cert> } callback - 回调函数，表示X509证书对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createX509Cert(inStream: EncodingBlob, callback: AsyncCallback<X509Cert>): void;

  /**
   * 表示创建X509证书对象。使用Promise异步回调。
   *
   * @param { EncodingBlob } inStream - X509证书序列化数据。
   * @returns { Promise<X509Cert> } 表示X509证书对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createX509Cert(inStream: EncodingBlob): Promise<X509Cert>;

  /**
   * 证书扩展域段类。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CertExtension {
    /**
     * 表示获取证书扩展域段序列化数据。
     *
     * @returns { EncodingBlob } 表示证书扩展域段序列化数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getEncoded(): EncodingBlob;

    /**
     * 表示获取证书扩展域段对象标识符列表。
     *
     * @param { ExtensionOidType } valueType - 表示证书扩展域段对象标识符类型。
     * @returns { DataArray } 表示证书扩展域段对象标识符列表。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOidList(valueType: ExtensionOidType): DataArray;

    /**
     * 表示获取证书扩展域段对象信息。
     *
     * @param { ExtensionEntryType } valueType - 表示证书扩展域段获取的类型。
     * @param { DataBlob } oid - 表示证书扩展域段获取的对象标识符。
     * @returns { DataBlob } 表示证书扩展域段对象的数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getEntry(valueType: ExtensionEntryType, oid: DataBlob): DataBlob;

    /**
     * 表示校验证书是否为CA证书。
     *
     * @returns { int } 当证书扩展域段中密钥用途包含签名用途，并且基本约束中cA字段为true时，表示证书为CA证书。如果不是CA，则返回-1；否则返回基本约束中的路径长度。如果证书是CA证书，但是基本约束中未给定路
     *     径长度，则返回-2，表示无路径长度限制。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    checkCA(): int;

    /**
     * 判断是否存在不支持的关键扩展。
     *
     * @returns { boolean } 当存在不支持的关键扩展时，该方法返回true，否则返回false。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hasUnsupportedCriticalExtension(): boolean;
  }

  /**
   * 表示创建证书扩展域段的对象。使用callback异步回调。
   *
   * @param { EncodingBlob } inStream - 表示证书扩展域段序列化数据。
   * @param { AsyncCallback<CertExtension> } callback - 回调函数，表示扩展域段对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createCertExtension(inStream: EncodingBlob, callback: AsyncCallback<CertExtension>): void;

  /**
   * 表示创建证书扩展域段的对象。使用Promise异步回调。
   *
   * @param { EncodingBlob } inStream - 表示证书扩展域段序列化数据。
   * @returns { Promise<CertExtension> } 表示证书扩展域段对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createCertExtension(inStream: EncodingBlob): Promise<CertExtension>;

  /**
   * 被吊销证书对象。
   *
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRLEntry]{@link cert.X509CrlEntry}替代。
   *
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert.X509CRLEntry
   */
  interface X509CrlEntry {
    /**
     * 表示获取被吊销证书的序列化数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRLEntry.getEncoded]{@link cert.X509CRL.getEncoded(callback: AsyncCallback<EncodingBlob>)}替代。
     *
     * @param { AsyncCallback<EncodingBlob> } callback - 回调函数，表示被吊销证书的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getEncoded
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * 表示获取被吊销证书的序列化数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRLEntry.getEncoded]{@link cert.X509CRL.getEncoded()}替代。
     *
     * @returns { Promise<EncodingBlob> } 表示被吊销证书的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getEncoded
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * 表示获取被吊销证书的序列号。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRLEntry.getSerialNumber]{@link cert.X509CRLEntry.getSerialNumber}替代。
     *
     * @returns { number } 表示被吊销证书的序列号。
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getSerialNumber
     */
    getSerialNumber(): number;

    /**
     * 表示获取被吊销证书的颁发者信息。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRLEntry.getCertIssuer]{@link cert.X509CRLEntry.getCertIssuer()}替代。
     *
     * @returns { DataBlob } 表示被吊销证书的颁发者信息。
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getCertIssuer
     */
    getCertIssuer(): DataBlob;

    /**
     * 表示获取证书被吊销的日期，日期为ASN.1时间格式。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRLEntry.getRevocationDate]{@link cert.X509CRLEntry.getRevocationDate}替代。
     *
     * @returns { string } 表示证书被吊销的日期，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getRevocationDate
     */
    getRevocationDate(): string;
  }

  /**
   * 被吊销证书对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRLEntry {
    /**
     * 表示获取被吊销证书的序列化数据。使用callback异步回调。
     *
     * @param { AsyncCallback<EncodingBlob> } callback - 回调函数，表示被吊销证书的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * 表示获取被吊销证书的序列化数据。使用Promise异步回调。
     *
     * @returns { Promise<EncodingBlob> } 表示被吊销证书的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * 表示获取被吊销证书的序列号。
     *
     * @returns { bigint } 表示被吊销证书的序列号。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSerialNumber(): bigint;

    /**
     * 表示获取被吊销证书的颁发者信息。
     *
     * > **说明：**
     * >
     * > 获取到的被吊销证书的颁发者信息数据带字符串结束符。
     *
     * @returns { DataBlob } 表示被吊销证书的颁发者信息。
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCertIssuer(): DataBlob;

    /**
     * 根据编码类型获取被吊销证书的颁发者信息。
     *
     * @param { EncodingType } encodingType - 表示编码类型。
     * @returns { string } 表示被吊销证书的颁发者信息，使用逗号分隔相对可分辨名称。
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getCertIssuer(encodingType: EncodingType): string;

    /**
     * 表示获取证书被吊销的日期。
     *
     * @returns { string } 表示证书被吊销的日期。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevocationDate(): string;

    /**
     * 表示获取CRL的扩展。
     *
     * @returns { DataBlob } 表示X509CRL扩展用途。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getExtensions(): DataBlob;

    /**
     * 表示判断CRL Entry是否有扩展。
     *
     * @returns { boolean } 返回true则表示CRL Entry有扩展，返回false则表示无扩展。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hasExtensions(): boolean;

    /**
     * 获取颁发者的X509可分辨名称。
     *
     * @returns { X500DistinguishedName } X509的可分辨对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCertIssuerX500DistinguishedName(): X500DistinguishedName;

    /**
     * 获取对象的字符串类型数据。
     *
     * @returns { string } 对象的字符串类型数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * 获取DER格式数据的哈希值。
     *
     * @returns { Uint8Array } DER格式数据的哈希值。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;

    /**
     * 获取对应实体的扩展域DER格式数据。
     *
     * @returns { CertExtension } 证书扩展域段类对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getExtensionsObject(): CertExtension;
  }

  /**
   * X509证书吊销列表对象。
   *
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL]{@link cert.X509Crl}替代。
   *
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert.X509CRL
   */
  interface X509Crl {
    /**
     * 表示检查证书是否吊销。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.isRevoked]{@link cert.X509CRL.isRevoked}替代。
     *
     * @param { X509Cert } cert - 表示被检查的证书对象。
     * @returns { boolean } 表示证书吊销状态，true表示已吊销，false表示未吊销。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#isRevoked
     */
    isRevoked(cert: X509Cert): boolean;

    /**
     * 表示获取证书吊销列表类型。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getType]{@link cert.X509CRL.getType}替代。
     *
     * @returns { string } 表示证书吊销列表类型。
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getType
     */
    getType(): string;

    /**
     * 表示获取X509证书吊销列表的序列化数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.getEncoded]{@link cert.X509CRL.getEncoded(callback: AsyncCallback<EncodingBlob>)}替代。
     *
     * @param { AsyncCallback<EncodingBlob> } callback - 回调函数，表示X509证书吊销列表的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getEncoded
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * 表示获取X509证书吊销列表的序列化数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getEncoded]{@link cert.X509CRL.getEncoded()}替代。
     *
     * @returns { Promise<EncodingBlob> } 表示X509证书吊销列表的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getEncoded
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * 表示对X509证书吊销列表进行验签。使用callback异步回调。验签支持RSA算法。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.verify]{@link cert.X509CRL.verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>)}替代。
     *
     * @param { cryptoFramework.PubKey } key - 表示用于验签的公钥对象。
     * @param { AsyncCallback<void> } callback - 回调函数,使用AsyncCallback的第一个error参数判断是否验签成功，error为null表示成功，error不为null表示失败。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#verify
     */
    verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;

    /**
     * 表示对X509证书吊销列表进行验签。使用Promise异步回调。验签支持RSA算法。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.verify]{@link cert.X509CRL.verify(key: cryptoFramework.PubKey)}替代。
     *
     * @param { cryptoFramework.PubKey } key - 表示用于验签的公钥对象。
     * @returns { Promise<void> } Promise对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#verify
     */
    verify(key: cryptoFramework.PubKey): Promise<void>;

    /**
     * 表示获取X509证书吊销列表的版本号。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getVersion]{@link cert.X509CRL.getVersion}替代。
     *
     * @returns { number } 表示获取X509证书吊销列表的版本号。
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getVersion
     */
    getVersion(): number;

    /**
     * 表示获取X509证书吊销列表颁发者名称。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getIssuerName]{@link cert.X509CRL.getIssuerName()}替代。
     *
     * @returns { DataBlob } 表示X509证书吊销列表颁发者名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getIssuerName
     */
    getIssuerName(): DataBlob;

    /**
     * 表示获取X509证书吊销列表最后一次更新日期，日期为ASN.1时间格式。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getLastUpdate]{@link cert.X509CRL.getLastUpdate}替代。
     *
     * @returns { string } 表示X509证书吊销列表最后一次更新日期，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getLastUpdate
     */
    getLastUpdate(): string;

    /**
     * 表示获取证书吊销列表下一次更新的日期，日期为ASN.1时间格式。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getNextUpdate]{@link cert.X509CRL.getNextUpdate}替代。
     *
     * @returns { string } 表示X509证书吊销列表下一次更新的日期，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getNextUpdate
     */
    getNextUpdate(): string;

    /**
     * 表示通过指定证书序列号获取被吊销X509证书对象。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getRevokedCert]{@link cert.X509CRL.getRevokedCert}替代。
     *
     * @param { number } serialNumber - 表示证书序列号。
     * @returns { X509CrlEntry } 表示被吊销X509证书对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCert
     */
    getRevokedCert(serialNumber: number): X509CrlEntry;

    /**
     * 表示通过指定证书对象获取被吊销X509证书对象。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.getRevokedCertWithCert]{@link cert.X509CRL.getRevokedCertWithCert}替代。
     *
     * @param { X509Cert } cert - 表示证书对象。
     * @returns { X509CrlEntry } 表示被吊销X509证书对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCertWithCert
     */
    getRevokedCertWithCert(cert: X509Cert): X509CrlEntry;

    /**
     * 表示获取被吊销X509证书列表。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.getRevokedCerts]{@link cert.X509CRL.getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>)}替代。
     *
     * @param { AsyncCallback<Array<X509CrlEntry>> } callback - 回调函数，表示被吊销X509证书列表。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCerts
     */
    getRevokedCerts(callback: AsyncCallback<Array<X509CrlEntry>>): void;

    /**
     * 表示获取被吊销X509证书列表。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getRevokedCerts]{@link cert.X509CRL.getRevokedCerts()}替代。
     *
     * @returns { Promise<Array<X509CrlEntry>> } 表示被吊销X509证书列表。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getRevokedCerts
     */
    getRevokedCerts(): Promise<Array<X509CrlEntry>>;

    /**
     * 表示获取证书吊销列表的tbsCertList信息。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getTBSInfo]{@link cert.X509CRL.getTBSInfo}替代。
     *
     * @returns { DataBlob } 表示证书吊销列表的tbsCertList信息。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getTBSInfo
     */
    getTbsInfo(): DataBlob;

    /**
     * 表示获取X509证书吊销列表的签名数据。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getSignature]{@link cert.X509CRL.getSignature}替代。
     *
     * @returns { DataBlob } 表示X509证书吊销列表的签名数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignature
     */
    getSignature(): DataBlob;

    /**
     * 表示获取X509证书吊销列表签名的算法名称。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.getSignatureAlgName]{@link cert.X509CRL.getSignatureAlgName}替代。
     *
     * @returns { string } 表示X509证书吊销列表签名的算法名。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignatureAlgName
     */
    getSignatureAlgName(): string;

    /**
     * 表示获取X509证书吊销列表签名算法的对象标志符OID(Object Identifier)。OID是由国际标准组织(ISO)的名称注册机构分配。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[X509CRL.getSignatureAlgOid]{@link cert.X509CRL.getSignatureAlgOid}替
     * > 代。
     *
     * @returns { string } 表示X509证书吊销列表签名算法的对象标志符OID。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignatureAlgOid
     */
    getSignatureAlgOid(): string;

    /**
     * 表示获取X509证书吊销列表签名的算法参数。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用
     * > [X509CRL.getSignatureAlgParams]{@link cert.X509CRL.getSignatureAlgParams}替代。
     *
     * @returns { DataBlob } 表示X509证书吊销列表签名的算法参数。
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getSignatureAlgParams
     */
    getSignatureAlgParams(): DataBlob;
  }

  /**
   * 表示创建X509证书吊销列表的对象。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11开始废弃，建议使用
   * > [cert.createX509CRL]{@link cert.createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>)}替代。
   *
   * @param { EncodingBlob } inStream - 表示证书吊销列表序列化数据。
   * @param { AsyncCallback<X509Crl> } callback - 回调函数，表示证书吊销列表对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert#createX509CRL
   */
  function createX509Crl(inStream: EncodingBlob, callback: AsyncCallback<X509Crl>): void;

  /**
   * 表示创建X509证书吊销列表的对象。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11开始废弃，建议使用[cert.createX509CRL]{@link cert.createX509CRL(inStream: EncodingBlob)}
   * > 替代。
   *
   * @param { EncodingBlob } inStream - 表示证书吊销列表序列化数据。
   * @returns { Promise<X509Crl> } 表示证书吊销列表对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert#createX509CRL
   */
  function createX509Crl(inStream: EncodingBlob): Promise<X509Crl>;

  /**
   * 被吊销证书列表对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRL {
    /**
     * 表示检查证书是否吊销。
     *
     * @param { X509Cert } cert - 表示被检查的证书对象。
     * @returns { boolean } 表示证书吊销状态，true表示已吊销，false表示未吊销。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    isRevoked(cert: X509Cert): boolean;

    /**
     * 表示获取证书吊销列表类型。
     *
     * @returns { string } 表示证书吊销列表类型。
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * 表示获取X509证书吊销列表的序列化数据。使用callback异步回调。
     *
     * @param { AsyncCallback<EncodingBlob> } callback - 回调函数，表示X509证书吊销列表的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(callback: AsyncCallback<EncodingBlob>): void;

    /**
     * 表示获取X509证书吊销列表的序列化数据。使用Promise异步回调。
     *
     * @returns { Promise<EncodingBlob> } 表示X509证书吊销列表的序列化数据。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEncoded(): Promise<EncodingBlob>;

    /**
     * 表示对X509证书吊销列表进行验签。使用callback异步回调。验签支持RSA算法。
     *
     * @param { cryptoFramework.PubKey } key - 表示用于验签的公钥对象。
     * @param { AsyncCallback<void> } callback - 回调函数,使用AsyncCallback的第一个error参数判断是否验签成功，error为null表示成功，error不为null表示失败。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void;

    /**
     * 表示对X509证书吊销列表进行验签。使用Promise异步回调。验签支持RSA算法。
     *
     * @param { cryptoFramework.PubKey } key - 表示用于验签的公钥对象。
     * @returns { Promise<void> } Promise对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    verify(key: cryptoFramework.PubKey): Promise<void>;

    /**
     * 表示获取X509证书吊销列表的版本号。
     *
     * @returns { int } 表示获取X509证书吊销列表的版本号。
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * 表示获取X509证书吊销列表颁发者名称。
     *
     * > **说明：**
     * >
     * > 获取到的X509证书吊销列表颁发者名称数据带字符串结束符。
     *
     * @returns { DataBlob } 表示X509证书吊销列表颁发者名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getIssuerName(): DataBlob;

    /**
     * 根据编码类型获取X509证书吊销列表颁发者名称。
     *
     * @param { EncodingType } encodingType - 表示编码类型。
     * @returns { string } 表示X509证书吊销列表颁发者名称，使用逗号分隔相对可分辨名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getIssuerName(encodingType: EncodingType): string;

    /**
     * 表示获取X509证书吊销列表最后一次更新日期，日期为ASN.1时间格式。
     *
     * @returns { string } 表示X509证书吊销列表最后一次更新日期，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getLastUpdate(): string;

    /**
     * 表示获取证书吊销列表下一次更新的日期，日期为ASN.1时间格式。
     *
     * @returns { string } 表示X509证书吊销列表下一次更新的日期，日期为ASN.1时间格式。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getNextUpdate(): string;

    /**
     * 表示通过指定证书序列号获取被吊销X509证书对象。
     *
     * @param { bigint } serialNumber - 表示证书序列号。
     * @returns { X509CRLEntry } 表示被吊销X509证书对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCert(serialNumber: bigint): X509CRLEntry;

    /**
     * 表示通过指定证书对象获取被吊销X509证书对象。
     *
     * @param { X509Cert } cert - 表示证书对象。
     * @returns { X509CRLEntry } 表示被吊销X509证书对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCertWithCert(cert: X509Cert): X509CRLEntry;

    /**
     * 表示获取被吊销X509证书列表。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<X509CRLEntry>> } callback - 回调函数，表示被吊销X509证书列表。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>): void;

    /**
     * 表示获取被吊销X509证书列表。使用Promise异步回调。
     *
     * @returns { Promise<Array<X509CRLEntry>> } 表示被吊销X509证书列表。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getRevokedCerts(): Promise<Array<X509CRLEntry>>;

    /**
     * 表示获取证书吊销列表的tbsCertList信息。
     *
     * @returns { DataBlob } 表示证书吊销列表的tbsCertList信息。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getTBSInfo(): DataBlob;

    /**
     * 表示获取X509证书吊销列表的签名数据。
     *
     * @returns { DataBlob } 表示X509证书吊销列表的签名数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignature(): DataBlob;

    /**
     * 表示获取X509证书吊销列表签名的算法名称。
     *
     * @returns { string } 表示X509证书吊销列表签名的算法名。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignatureAlgName(): string;

    /**
     * 表示获取X509证书吊销列表签名算法的对象标志符OID(Object Identifier)。OID是由国际标准组织(ISO)的名称注册机构分配。
     *
     * @returns { string } 表示X509证书吊销列表签名算法的对象标志符OID。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignatureAlgOid(): string;

    /**
     * 表示获取X509证书吊销列表签名的算法参数。
     *
     * @returns { DataBlob } 表示X509证书吊销列表签名的算法参数。
     * @throws { BusinessError } 801 - this operation is not supported.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSignatureAlgParams(): DataBlob;

    /**
     * 表示获取CRL的扩展。
     *
     * @returns { DataBlob } 表示X509CRL扩展用途。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getExtensions(): DataBlob;

    /**
     * 判断证书吊销列表是否与输入参数匹配。
     *
     * @param { X509CRLMatchParameters } param - 表示需要匹配的参数。
     * @returns { boolean } 当参数匹配时，该方法返回true，否则返回false。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    match(param: X509CRLMatchParameters): boolean;

    /**
     * 获取颁发者的X509可分辨名称。
     *
     * @returns { X500DistinguishedName } X509的可分辨对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getIssuerX500DistinguishedName(): X500DistinguishedName;

    /**
     * 获取对象的字符串类型数据。
     *
     * @returns { string } 对象的字符串类型数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * 根据编码类型获取对象的字符串类型数据。
     *
     * @param { EncodingType } encodingType - 表示编码类型。
     * @returns { string } 表示对象的字符串类型数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    toString(encodingType: EncodingType): string;

    /**
     * 获取DER格式数据的哈希值。
     *
     * @returns { Uint8Array } DER格式数据的哈希值。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;

    /**
     * 获取对应实体的扩展域DER格式数据。
     *
     * @returns { CertExtension } 证书扩展域段类对象。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getExtensionsObject(): CertExtension;
  }

  /**
   * 表示创建X509证书吊销列表的对象。使用callback异步回调。
   *
   * @param { EncodingBlob } inStream - 表示证书吊销列表序列化数据。当前支持的数据长度不超过8192字节。
   * @param { AsyncCallback<X509CRL> } callback - 回调函数，表示证书吊销列表对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>): void;

  /**
   * 表示创建X509证书吊销列表的对象。使用Promise异步回调。
   *
   * @param { EncodingBlob } inStream - 表示证书吊销列表序列化数据。当前支持的数据长度不超过8192字节。
   * @returns { Promise<X509CRL> } 表示证书吊销列表对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CRL(inStream: EncodingBlob): Promise<X509CRL>;

  /**
   * 表示证书吊销检查标志的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum CertRevocationFlag {
    /**
     * 优先OCSP检查。仅当CERT_REVOCATION_CRL_CHECK与CERT_REVOCATION_OCSP_CHECK同时设置时，该标志生效。
     *
     * 设置后先执行OCSP检查，未找到响应或超时时回退CRL；
     * 不设置则先执行CRL检查，未找到CRL或超时时回退OCSP。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_PREFER_OCSP = 0,

    /**
     * 启用CRL检查。使用证书吊销列表检查证书状态。
     *
     * 首先使用[X509CertRevokedParams]{@link cert.X509CertRevokedParams}的crls参数，未匹配到CRL且[X509CertRevokedParams]{@link
     * cert.X509CertRevokedParams}的allowDownloadCrl参数设置为true则尝试使用证书的CDP扩展下载CRL
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_CRL_CHECK = 1,

    /**
     * 启用OCSP检查。使用在线证书状态协议检查证书状态。
     *
     * 首先使用[X509CertRevokedParams]{@link
     * cert.X509CertRevokedParams}的ocspResponses参数，未匹配到响应且[X509CertRevokedParams]{@link
     * cert.X509CertRevokedParams}的allowOcspCheckOnline参数设置为true则尝试从证书AIA扩展获取OCSP URL并发送请求获取响应
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_OCSP_CHECK = 2,

    /**
     * 检查所有证书的吊销状态。
     *
     * 设置后对证书链中所有证书执行吊销检查（跳过自签名证书）；
     * 不设置则仅检查终端证书（证书链第一个证书）。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_CHECK_ALL_CERT = 3
  }

  /**
   * 表示OCSP摘要算法的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OcspDigest {
    /**
     * SHA1摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA1 = 0,

    /**
     * SHA224摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA224 = 1,

    /**
     * SHA256摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA256 = 2,

    /**
     * SHA384摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA384 = 3,

    /**
     * SHA512摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA512 = 4
  }

  /**
   * 表示证书吊销检查参数。
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface X509CertRevokedParams {
    /**
     * 吊销检查标志。数量范围：[1, 4]。数组必须包含CERT_REVOCATION_CRL_CHECK或CERT_REVOCATION_OCSP_CHECK。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    revocationFlags: Array<CertRevocationFlag>;

    /**
     * CRL列表。最大数量：100。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    crls?: Array<X509CRL>;

    /**
     * 是否允许下载CRL，默认值为false。true：尝试使用证书的CDP扩展下载CRL；false：不尝试下载CRL。
     * **注意**
     * -如果crls中存在匹配的CRL，则跳过下载
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowDownloadCrl?: boolean;

    /**
     * OCSP响应数据。预置的OCSP响应数据。最大数量：100。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ocspResponses?: Array<Uint8Array>;

    /**
     * 是否允许在线OCSP检查，默认值为false。true：执行在线OCSP检查，即尝试从证书AIA扩展获取OCSP URL并发送请求获取响应；false：不执行在线OCSP检查。
     * **注意**
     * -如果在ocspResponses中找到匹配的OCSP响应，则跳过在线OCSP检查
     * <br>获取响应的请求。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowOcspCheckOnline?: boolean;

    /**
     * OCSP请求使用的摘要算法，默认值为SHA256。
     *
     * @default SHA256
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ocspDigest?: OcspDigest;
  }

  /**
   * 证书验证的参数。
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface CertValidationParams {
    /**
     * 非信任证书列表。仅用于构建证书链的中间证书，不作为信任锚点。最大数量：100。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    untrustedCerts?: Array<X509Cert>;

    /**
     * 信任证书列表。指定信任的根证书或中间CA证书，作为验证的信任锚点。最大数量：100。
     * 验证时，证书链须追溯至信任证书，必须设置此参数或将trustSystemCa设为true。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    trustedCerts?: Array<X509Cert>;

    /**
     * 是否信任系统CA。默认值为false。true：使用系统预置的CA证书库作为信任锚；false：不使用系统预置的CA证书库作为信任锚。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    trustSystemCa?: boolean;

    /**
     * 是否允许部分链验证。默认值为false。true：允许使用信任证书中的任意证书作为信任锚，而非必须追溯到根证书；false：构建证书链时必须追溯到根证书。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    partialChain?: boolean;

    /**
     * 是否允许从网络下载中间CA证书。默认值为false。true：当构建证书链缺失中间证书时，尝试使用证书AIA扩展中颁发者地址下载颁发者证书，解决证书链不完整的问题；false：不允许从网络下载中间的CA证书。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowDownloadIntermediateCa?: boolean;

    /**
     * 验证日期。格式为YYMMDDHHMMSSZ或YYYYMMDDHHMMSSZ，默认使用当前系统时间。
     * 支持自定义验证时间，适用于离线验证历史签名等场景。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    date?: string;

    /**
     * 是否验证日期。true：验证证书和CRL有效期；false：不验证证书和CRL有效期。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    validateDate?: boolean;

    /**
     * 允许忽略特定的验证错误。最大数量：8。
     * 可忽略的错误包括：ERR_CERT_NOT_YET_VALID、ERR_CERT_HAS_EXPIRED、ERR_UNKNOWN_CRITICAL_EXTENSION、ERR_CRL_NOT_FOUND、
     * ERR_CRL_NOT_YET_VALID、ERR_CRL_HAS_EXPIRED、ERR_OCSP_RESPONSE_NOT_FOUND、ERR_NETWORK_TIMEOUT。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ignoreErrs?: Array<CertResult>;

    /**
     * 主机名列表。验证证书的主题备用名（SAN）或通用名（CN）是否包含指定的主机名。最大数量：100，每个主机名最大长度：128。
     * 只要匹配其中一个主机名即校验成功。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    hostnames?: Array<string>;

    /**
     * 邮箱地址列表。验证证书是否包含指定的邮箱地址。最大数量：1，邮箱地址最大长度：128
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    emailAddresses?: Array<string>;

    /**
     * 密钥用途列表。验证证书的密钥用途扩展是否包含指定的用途。最大数量：9。
     * 证书必须包含所有指定的密钥用途才校验成功。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    keyUsage?: Array<KeyUsageType>;

    /**
     * 用户ID。用于验证国密SM2证书时设置签名验证所需的用户标识符。最大长度：128。
     * 国密证书场景最常用的值为`[0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37,
     * 0x38]`（对应ASCII字符串为"1234567812345678"，16字节）。
     * 设置userId后不支持证书吊销检查。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userId?: Uint8Array;

    /**
     * 证书吊销检查参数。用于检查证书是否被吊销。包含CRL列表、OCSP响应数据、是否允许在线检查等配置。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    revokedParams?: X509CertRevokedParams;
  }

  /**
   * 证书验证的结果。
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface CertValidationResult {
    /**
     * 验证后的证书链。验证成功时返回完整的证书链，从终端证书到信任锚点。可用于后续的证书信息查询或其他验证操作。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly certChain: Array<X509Cert>;
  }

  /**
   * 证书链校验器对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CertChainValidator {
    /**
     * 表示校验X509证书链。使用callback异步回调。
     *
     * 由于端侧系统时间不可信，证书链校验不包含对证书有效时间的校验。如果需要检查证书的时间有效性，可使用X509证书的
     * [checkValidityWithDate]{@link cert.X509Cert.checkValidityWithDate}方法进行检查。详见
     * [证书规格](docroot://security/DeviceCertificateKit/certificate-framework-overview.md#证书规格)。
     *
     * @param { CertChainData } certChain - 表示X509证书链序列化数据。
     * @param { AsyncCallback<void> } callback - 回调函数，使用AsyncCallback的第一个error参数判断是否校验成功，error为null表示成功，error不为null表示失败。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030002 - the certificate signature verification failed.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    validate(certChain: CertChainData, callback: AsyncCallback<void>): void;

    /**
     * 表示校验X509证书链。使用Promise异步回调。
     *
     * 由于端侧系统时间不可信，证书链校验不包含对证书有效时间的校验。如果需要检查证书的时间有效性，可使用X509证书的
     * [checkValidityWithDate]{@link cert.X509Cert.checkValidityWithDate}方法进行检查。详见
     * [证书规格](docroot://security/DeviceCertificateKit/certificate-framework-overview.md#证书规格)。
     *
     * @param { CertChainData } certChain - 表示X509证书链序列化数据。
     * @returns { Promise<void> } Promise对象。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030002 - the certificate signature verification failed.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    validate(certChain: CertChainData): Promise<void>;

    /**
     * 通过构建和验证证书链来验证证书。该接口使用Promise返回结果。
     *
     * 证书链构建过程遵循以下规则：
     * 1. 信任锚来源：始终以信证书列表（trustedCerts）作为信任锚源。仅当trustSystemCa设置为true时，才使用预配置证书作为信任锚源。
     * 2. 颁发者搜索顺序：系统首先从信任锚来源中搜索颁发者，若未找到，则继续在非信任证书列表（untrustedCerts）中查找。在线下载的中间CA证书
     * 属于非受信任证书。
     * 3. 信任锚锁定：一旦在信任锚来源中找到颁发者，后续查找过程将不会再回至非信任证书，即后续证书必须来自信任锚来源。
     * 4. 构建完成条件：若partialChain为false（默认值），则仅在找到根证书（自签名证书）时构建完成。若partialChain为true，则在首次在
     * 信任锚来源中找到颁发者时构建完成。
     * 5. 后续验证：证书链构建完成后，执行其他验证操作，如证书签名验证和证书吊销检查。
     *
     * @param { X509Cert } cert - 待验证的证书。
     * @param { CertValidationParams } params - 证书验证参数。
     * @returns { Promise<CertValidationResult> } Promise对象，返回验证结果。
     * @throws { BusinessError } 19020001 - 内存申请失败。
     * @throws { BusinessError } 19020002 - 运行时错误。可能的原因：
     *     <br>1. 内存拷贝失败；
     *     <br>2. 系统内部出现空指针；
     *     <br>3. ArkTS与C之间参数转换失败。
     * @throws { BusinessError } 19020003 - 参数校验失败。
     * @throws { BusinessError } 19030001 - 加密操作错误。
     * @throws { BusinessError } 19030002 - 证书签名验证失败。
     * @throws { BusinessError } 19030003 - 证书尚未生效。
     * @throws { BusinessError } 19030004 - 证书已过期。
     * @throws { BusinessError } 19030005 - 无法获取证书颁发者。
     * @throws { BusinessError } 19030006 - 密钥用途不能用于签名证书。
     * @throws { BusinessError } 19030007 - 密钥用途不能用于数字签名。
     * @throws { BusinessError } 19030009 - 不受信任的证书。
     * @throws { BusinessError } 19030010 - 证书已被吊销。
     * @throws { BusinessError } 19030011 - 不支持的关键扩展。
     * @throws { BusinessError } 19030012 - 证书中主机名不匹配。
     * @throws { BusinessError } 19030013 - 证书中电子邮件地址不匹配。
     * @throws { BusinessError } 19030014 - 证书中密钥用途不匹配。
     * @throws { BusinessError } 19030015 - 无法获取证书吊销列表。
     * @throws { BusinessError } 19030016 - 证书吊销列表尚未生效。
     * @throws { BusinessError } 19030017 - 证书吊销列表已过期。
     * @throws { BusinessError } 19030018 - 证书吊销列表签名验证失败。
     * @throws { BusinessError } 19030019 - 无法找到证书吊销列表的颁发者。
     * @throws { BusinessError } 19030020 - 无法获取OCSP响应。
     * @throws { BusinessError } 19030021 - 无效的OCSP响应。
     * @throws { BusinessError } 19030022 - OCSP签名验证失败。
     * @throws { BusinessError } 19030023 - 未知的OCSP证书状态。
     * @throws { BusinessError } 19030024 - 网络连接超时。
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    validateCert(cert: X509Cert, params: CertValidationParams): Promise<CertValidationResult>;

    /**
     * X509证书链校验器算法名称。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algorithm: string;
  }

  /**
   * 表示创建证书链校验器对象。
   *
   * @param { string } algorithm - 表示证书链校验器算法。当前仅支持输入"PKIX"。
   * @returns { CertChainValidator } 表示证书链校验器对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - this operation is not supported.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createCertChainValidator(algorithm: string): CertChainValidator;

  /**
   * 表示证书主体用途的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum GeneralNameType {
    /**
     * 表示其他名称。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_OTHER_NAME = 0,

    /**
     * 表示电子邮件地址。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_RFC822_NAME = 1,

    /**
     * 表示一个DNS名称。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_DNS_NAME = 2,

    /**
     * 表示X.400地址。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_X400_ADDRESS = 3,

    /**
     * 表示一个目录名称。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_DIRECTORY_NAME = 4,

    /**
     * 表示特定的EDI实体。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_EDI_PARTY_NAME = 5,

    /**
     * 表示一个统一资源标识符。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_UNIFORM_RESOURCE_ID = 6,

    /**
     * 表示一个IP地址。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_IP_ADDRESS = 7,

    /**
     * 表示一个已注册的对象标识符。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_REGISTERED_ID = 8
  }

  /**
   * 用于表示证书主体信息对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface GeneralName {
    /**
     * 指定具体的证书主体类型。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: GeneralNameType;

    /**
     * 指定具体的证书主体DER格式内容。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name?: Uint8Array;
  }

  /**
   * 用于匹配证书的过滤参数。如果参数中任一项都未指定，则匹配所有证书。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CertMatchParameters {
    /**
     * 指定证书主体名称。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subjectAlternativeNames?: Array<GeneralName>;

    /**
     * 指定是否需要匹配证书主体名称。true为需要，false为不需要。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    matchAllSubjectAltNames?: boolean;

    /**
     * 指定证书颁发机构密钥。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    authorityKeyIdentifier?: Uint8Array;

    /**
     * 指定证书CA路径长度。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minPathLenConstraint?: int;

    /**
     * 指定具体的证书对象。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    x509Cert?: X509Cert;

    /**
     * 指定证书有效期。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validDate?: string;

    /**
     * 指定证书颁发者，为DER编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    issuer?: Uint8Array;

    /**
     * 指定扩展密钥用途。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    extendedKeyUsage?: Array<string>;

    /**
     * 指定证书的使用者名称。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nameConstraints?: Uint8Array;

    /**
     * 指定证书策略。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    certPolicy?: Array<string>;

    /**
     * 指定证书私钥有效期。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    privateKeyValid?: string;

    /**
     * 指定是否需要匹配密钥用途。true为需要，false为不需要。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyUsage?: Array<boolean>;

    /**
     * 指定证书的序列号。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    serialNumber?: bigint;

    /**
     * 指定证书主题，DER编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    subject?: Uint8Array;

    /**
     * 指定证书公钥。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subjectKeyIdentifier?: Uint8Array;

    /**
     * 指定证书公钥，DER编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    publicKey?: DataBlob;

    /**
     * 指定证书公钥的算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    publicKeyAlgID?: string;

    /**
     * 指定证书私钥，string表示PEM格式私钥，Uint8Array表示DER格式私钥。
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    privateKey?: string | Uint8Array;
  }

  /**
   * 用于匹配证书吊销列表的过滤参数。如果参数中任一项都未指定，则匹配所有证书吊销列表。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRLMatchParameters {
    /**
     * 指定证书颁发者，为DER编码格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    issuer?: Array<Uint8Array>;

    /**
     * 指定具体的证书对象。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    x509Cert?: X509Cert;

    /**
     * 指定证书更新时间。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateDateTime?: string;

    /**
     * 指定CRL个数最大值。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxCRL?: bigint;

    /**
     * 指定CRL个数最小值。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minCRL?: bigint;
  }

  /**
   * 证书和证书吊销列表集合对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertCRLCollection {
    /**
     * 查找证书和证书吊销列表集合中所有与参数匹配的证书对象。使用Promise异步回调。
     *
     * @param { X509CertMatchParameters } param - 表示证书需匹配的参数。
     * @returns { Promise<Array<X509Cert>> } Promise对象。表示匹配到的证书对象数组。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCerts(param: X509CertMatchParameters): Promise<Array<X509Cert>>;

    /**
     * 查找证书和证书吊销列表集合中所有与参数匹配的证书对象。使用callback异步回调。
     *
     * @param { X509CertMatchParameters } param - 表示证书需匹配的参数。
     * @param { AsyncCallback<Array<X509Cert>> } callback - 回调函数，表示匹配到的证书对象数组。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCerts(param: X509CertMatchParameters, callback: AsyncCallback<Array<X509Cert>>): void;

    /**
     * 查找证书和证书吊销列表集合中所有与参数匹配的证书吊销列表对象。使用Promise异步回调。
     *
     * @param { X509CRLMatchParameters } param - 表示证书吊销列表需匹配的参数。
     * @returns { Promise<Array<X509CRL>> } Promise对象，表示匹配到的证书吊销列表对象数组。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCRLs(param: X509CRLMatchParameters): Promise<Array<X509CRL>>;

    /**
     * 查找证书和证书吊销列表集合中所有与参数匹配的证书吊销列表对象。使用callback异步回调。
     *
     * @param { X509CRLMatchParameters } param - 表示证书吊销列表需匹配的参数对象。
     * @param { AsyncCallback<Array<X509CRL>> } callback - 回调函数，表示匹配到的证书吊销列表对象数组。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    selectCRLs(param: X509CRLMatchParameters, callback: AsyncCallback<Array<X509CRL>>): void;
  }

  /**
   * 表示创建证书和证书吊销列表集合对象，并返回相应的结果。
   *
   * @param { Array<X509Cert> } certs - X509Cert数组。
   * @param { Array<X509CRL> } [options] crls - array of X509CRL. [since 11 - 11]
   * @param { Array<X509CRL> } [crls] - X509CRL数组。 [since 12]
   * @returns { CertCRLCollection } 表示证书和证书吊销列表集合对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createCertCRLCollection(certs: Array<X509Cert>, crls?: Array<X509CRL>): CertCRLCollection;

  /**
   * X509证书链对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CertChain {
    /**
     * 获取X509证书列表。
     *
     * @returns { Array<X509Cert> } X509证书数组。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCertList(): Array<X509Cert>;

    /**
     * 校验证书链。使用Promise异步回调。
     *
     * @param { CertChainValidationParameters } param - 表示校验X509证书链的参数。
     * @returns { Promise<CertChainValidationResult> } Promise对象，返回证书链校验结果。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030002 - the certificate signature verification failed.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validate(param: CertChainValidationParameters): Promise<CertChainValidationResult>;

    /**
     * 使用校验参数校验证书链。使用callback异步回调。
     *
     * @param { CertChainValidationParameters } param - 表示校验X509证书链的参数。
     * @param { AsyncCallback<CertChainValidationResult> } callback - 回调函数，返回证书链校验结果。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030002 - the certificate signature verification failed.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validate(param: CertChainValidationParameters, callback: AsyncCallback<CertChainValidationResult>): void;

    /**
     * 获取对象的字符串类型数据。
     *
     * @returns { string } 对象的字符串类型数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * 获取DER格式数据的哈希值。
     *
     * @returns { Uint8Array } DER格式数据的哈希值。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashCode(): Uint8Array;
  }

  /**
   * 表示创建X509证书链对象。使用Promise异步回调。
   *
   * @param { EncodingBlob } inStream - X509证书序列化数据。
   * @returns { Promise<X509CertChain> } 表示X509证书链对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CertChain(inStream: EncodingBlob): Promise<X509CertChain>;

  /**
   * 表示创建X509证书链对象。使用callback异步回调。
   *
   * @param { EncodingBlob } inStream - X509证书序列化数据。
   * @param { AsyncCallback<X509CertChain> } callback - 回调函数，表示X509证书链对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CertChain(inStream: EncodingBlob, callback: AsyncCallback<X509CertChain>): void;

  /**
   * 表示使用X509Cert数组方式创建X509证书链对象，并同步返回结果。
   *
   * @param { Array<X509Cert> } certs - X509证书对象数组。
   * @returns { X509CertChain } 表示X509证书链对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createX509CertChain(certs: Array<X509Cert>): X509CertChain;

  /**
   * 表示使用CertChainBuildParameters对象方式创建X509证书链对象。使用Promise异步回调。
   *
   * @param { CertChainBuildParameters } param - 构建证书链的参数对象。  <br>
   *     [CertChainBuildParameters]{@link cert.CertChainBuildParameters}中的maxLength要小于证书集合中证书数量。
   * @returns { Promise<CertChainBuildResult> } 表示X509证书链对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030002 - the certificate signature verification failed.
   * @throws { BusinessError } 19030003 - the certificate has not taken effect.
   * @throws { BusinessError } 19030004 - the certificate has expired.
   * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function buildX509CertChain(param: CertChainBuildParameters): Promise<CertChainBuildResult>;

  /**
   * 表示生成CSR的编码格式的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum EncodingBaseFormat {
    /**
     * PEM格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PEM = 0,

    /**
     * DER格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DER = 1
  }

  /**
   * 表示返回P12文件的解析后的证书、私钥及其他证书合集。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface Pkcs12Data {
    /**
     * 表示P12文件解析后的私钥。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    privateKey?: string | Uint8Array;

    /**
     * 表示P12文件解析后的证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    cert?: X509Cert;

    /**
     * 表示P12文件解析后的其他证书合集。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    otherCerts?: Array<X509Cert>;
  }

  /**
   * 表示解析P12文件的配置。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface Pkcs12ParsingConfig {
    /**
     * 表示P12文件的密码。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * 表示是否获取私钥。默认为true。
     *
     * true为获取，返回PKCS8编码的私钥数据；false为不获取。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    needsPrivateKey?: boolean;

    /**
     * 表示获取私钥的格式，当前支持PEM和DER格式。参数缺省时，默认为PEM格式。
     *
     * **注意**：当needsPrivateKey值为true时，该参数生效。
     *
     * @default EncodingBaseFormat.PEM
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    privateKeyFormat?: EncodingBaseFormat;

    /**
     * 表示是否获取证书。默认为true。true为获取，false为不获取。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    needsCert?: boolean;

    /**
     * 表示是否获取其他证书合集。默认为false。true为获取，false为不获取。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    needsOtherCerts?: boolean;
  }

  /**
   * 表示从P12文件中解析证书、私钥及其他证书合集，并返回结果。
   *
   * @param { Uint8Array } data - P12文件，DER格式。
   * @param { Pkcs12ParsingConfig } config - P12文件的解析配置。
   * @returns { Pkcs12Data } 表示P12文件解析后的证书、私钥及其他证书合集。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030008 - maybe wrong password.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function parsePkcs12(data: Uint8Array, config: Pkcs12ParsingConfig): Pkcs12Data;

  /**
   * 表示从Pkcs12文件中解析证书、私钥及其他证书合集。使用Promise异步回调。
   *
   * @param { Uint8Array } data - Pkcs12文件，DER格式。
   * @param { string } password - Pkcs12的密码。
   * @returns { Promise<Pkcs12Data> } Promise对象，返回Pkcs12文件解析后的证书、私钥及其他证书合集。返回的Pkcs12Data中的私钥采用PEM格式编码。
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
   *     <br>1. The length of the data is zero or too large;
   *     <br>2. The length of the password is too large.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030008 - maybe wrong password.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function parsePkcs12(data: Uint8Array, password: string): Promise<Pkcs12Data>;

  /**
   * 表示从P12文件中读取ca证书来构造[TrustAnchor]{@link cert.X509TrustAnchor}对象数组。使用Promise异步回调。
   *
   * @param { Uint8Array } keystore - P12文件，DER格式。
   * @param { string } pwd - P12文件的密码。
   * @returns { Promise<Array<X509TrustAnchor>> } 表示X509TrustAnchor对象数组。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030002 - the certificate signature verification failed.
   * @throws { BusinessError } 19030003 - the certificate has not taken effect.
   * @throws { BusinessError } 19030004 - the certificate has expired.
   * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createTrustAnchorsWithKeyStore(keystore: Uint8Array, pwd: string): Promise<Array<X509TrustAnchor>>;

  /**
   * 表示使用字符串格式的名称创建X500DistinguishedName对象。使用Promise异步回调。
   *
   * @param { string } nameStr - X509定义的Name字符串格式，使用斜杠'/'进行分割可分辨名称，每个可分辨名称为“属性=值”形式，常用属性包括CN（通用名）、O（组织名）、OU（组织单位）、C（国家/地
   *     区）、ST（省/州）、L（市/区）。例如：/CN=example.com/O=Example/C=CN。
   * @returns { Promise<X500DistinguishedName> } 表示X509的可分辨对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030002 - the certificate signature verification failed.
   * @throws { BusinessError } 19030003 - the certificate has not taken effect.
   * @throws { BusinessError } 19030004 - the certificate has expired.
   * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createX500DistinguishedName(nameStr: string): Promise<X500DistinguishedName>;

  /**
   * 表示使用DER格式的名称创建X500DistinguishedName对象。使用Promise异步回调。
   *
   * @param { Uint8Array } nameDer - X509定义的Uint8Array类型的DER格式数据。
   * @returns { Promise<X500DistinguishedName> } 表示X509的可分辨对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030002 - the certificate signature verification failed.
   * @throws { BusinessError } 19030003 - the certificate has not taken effect.
   * @throws { BusinessError } 19030004 - the certificate has expired.
   * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
   * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
   * @throws { BusinessError } 19030007 - the key cannot be used for digital signature.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createX500DistinguishedName(nameDer: Uint8Array): Promise<X500DistinguishedName>;

  /**
   * X509定义的Name类型的对象。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface X500DistinguishedName {
    /**
     * 获取可分辨名的字符串。
     *
     * @returns { string } 可分辨名的字符串。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getName(): string;

    /**
     * 根据指定编码格式获取可分辨名称的字符串。
     *
     * @param { EncodingType } encodingType - 表示编码格式。
     * @returns { string } 表示可分辨名称的字符串，使用逗号分隔相对可分辨名称。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is not in the EncodingType enumeration range.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getName(encodingType: EncodingType): string;

    /**
     * 按指定类型获取相对可分辨名称的字符串。
     *
     * @param { string } type - 指定类型的名称。如"CN"、"OU"等。
     * @returns { Array<string> } 相对可分辨名称的字符串数组。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getName(type: string): Array<string>;

    /**
     * 根据指定类型和编码格式获取相对可分辨名称的字符串数组。
     *
     * @param { string } type - 指定类型的名称。如"CN"、"OU"等。
     * @param { EncodingType } encodingType - 表示编码格式。
     * @returns { Array<string> } 相对可分辨名称的字符串数组。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The value of encodingType is invalid.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getName(type: string, encodingType: EncodingType): Array<string>;

    /**
     * 获取X509证书扩展域的数据。
     *
     * @returns { EncodingBlob } X509证书序列化数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncoded(): EncodingBlob;
  }

  /**
   * 表示X509信任锚，用于校验证书链。使用信任锚中的证书或者公钥作为可信根，对证书链进行校验。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509TrustAnchor {
    /**
     * 信任的CA证书。如果配置了CACert，则校验证书链时只使用CACert，不再使用CAPubKey和CASubject。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CACert?: X509Cert;

    /**
     * 信任的CA证书公钥，DER格式。仅在未配置CACert时生效。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CAPubKey?: Uint8Array;

    /**
     * 信任的CA证书主题，DER格式。仅在配置了CAPubKey时生效。校验对象根据CAPubKey类型（自签或上级）决定是校验根证书的主题还是颁发者。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CASubject?: Uint8Array;

    /**
     * 名称约束，DER格式。只校验当前证书链的叶子证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nameConstraints?: Uint8Array;
  }

  /**
   * 表示证书链在线校验证书吊销状态选项的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RevocationCheckOptions {
    /**
     * 优先采用OCSP进行校验，默认采用CRL校验。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_PREFER_OCSP = 0,

    /**
     * 支持通过访问网络获取CRL或OCSP响应进行吊销状态的校验，默认为关闭。仅支持通过证书中的CDP扩展中获取首个CRL分发点地址以检查证书吊销状态，或通过AIA扩展获取首个OCSP服务器地址以进行吊销状态验证，且仅支持http协
     * 议。必须声明ohos.permission.INTERNET权限。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_ACCESS_NETWORK = 1,

    /**
     * 当ACCESS_NETWORK选项打开时有效，如果优选的校验方法由于网络原因导致无法校验证书状态，则采用备选的方案进行校验。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_FALLBACK_NO_PREFER = 2,

    /**
     * 当ACCESS_NETWORK选项打开时有效，如果在线获取CRL和OCSP响应都由于网络的原因导致无法校验证书状态，则采用本地设置的CRL和OCSP响应进行校验。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_FALLBACK_LOCAL = 3,

    /**
     * 当ACCESS_NETWORK选项打开时有效。如果开启了该能力，对终端实体证书OCSP或CRL校验失败，则会继续校验中间证书的吊销情况。默认关闭。
     *
     * **注意**：当前能力与REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT不能同时开启。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE = 4,

    /**
     * 如果开启了该能力，则会拿本地吊销列表校验终端实体证书的吊销情况。默认关闭。
     *
     * **注意**：当前能力与REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE不能同时开启。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT = 5,

    /**
     * 如果开启了该能力，通过访问网络获取CRL或OCSP响应进行吊销状态的校验时，忽略网络不可达错误。默认关闭，默认情况下，网络不可达可能导致证书链校验失败。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    REVOCATION_CHECK_OPTION_IGNORE_NETWORK_ERROR = 6,
  }

  /**
   * 表示证书链在线校验策略的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ValidationPolicyType {
    /**
     * 默认值，不需要校验证书中的sslHostname或dNSName。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    VALIDATION_POLICY_TYPE_X509 = 0,

    /**
     * Indicates need to verify the sslHostname field in the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    VALIDATION_POLICY_TYPE_SSL = 1
  }

  /**
   * 表示证书中密钥用途的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum KeyUsageType {
    /**
     * 证书持有者可以用证书中包含的私钥进行数字签名操作。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DIGITAL_SIGNATURE = 0,

    /**
     * Indicates certificate public key can be used for non repudiation operations, preventing the signer from denying their signature.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_NON_REPUDIATION = 1,

    /**
     * Indicates certificate public key can be used for key encryption operations, for encrypting symmetric keys, etc.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_ENCIPHERMENT = 2,

    /**
     * Indicates certificate public key can be used for data encryption operations, to encrypt data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DATA_ENCIPHERMENT = 3,

    /**
     * Indicates certificate public key can be used for key negotiation operations, to negotiate shared keys.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_AGREEMENT = 4,

    /**
     * Indicates certificate public key can be used for certificate signing operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_CERT_SIGN = 5,

    /**
     * Indicates certificate public key can be used for signing operations on certificate revocation lists (CRLs).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_CRL_SIGN = 6,

    /**
     * Indicates the key can only be used for encryption operations and cannot be used for decryption operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_ENCIPHER_ONLY = 7,

    /**
     * Indicates the key can only be used for decryption operations and cannot be used for encryption operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DECIPHER_ONLY = 8
  }

  /**
   * 表示证书链校验证书吊销状态的参数。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface RevocationCheckParameter {
    /**
     * 表示发送OCSP请求的扩展字段。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspRequestExtension?: Array<Uint8Array>;

    /**
     * 表示用于OCSP请求的备选服务器URI地址，支持HTTP/HTTPS，具体配置由与服务器协商决定。
     *
     * **说明**：当前URI只针对实体证书生效。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponderURI?: string;

    /**
     * 表示用于OCSP响应的签名校验的签名证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponderCert?: X509Cert;

    /**
     * 表示用于OCSP服务器响应的备选数据。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponses?: Uint8Array;

    /**
     * 表示用于CRL请求的备选下载地址。
     *
     * **说明**：当前URI只针对实体证书生效。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    crlDownloadURI?: string;

    /**
     * 表示证书吊销状态查询的策略组合。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    options?: Array<RevocationCheckOptions>;

    /**
     * 表示OCSP通信时创建证书ID使用的哈希算法。默认为SHA256，支持可配置MD5、SHA1、SHA224、SHA256、SHA384、SHA512算法。
     *
     * @default SHA256
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspDigest?: string;
  }

  /**
   * 表示证书链校验的参数。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertChainValidationParameters {
    /**
     * 表示需要校验证书的有效期。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    date?: string;

    /**
     * 表示信任锚列表。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    trustAnchors: Array<X509TrustAnchor>;

    /**
     * 表示是否使用系统预置CA证书校验证书链。true表示使用；false表示不使用。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    trustSystemCa?: boolean;

    /**
     * 表示是否允许尝试从网络下载缺失的中间CA证书。
     * true表示允许；false表示不允许。默认值为false。
     * 下载地址将从证书AIA扩展中获取，仅支持http，如需使用网络下载，需申请ohos.permission.INTERNET权限。配置方式请参见
     * [声明权限](docroot://security/AccessToken/declare-permissions.md)。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    allowDownloadIntermediateCa?: boolean;

    /**
     * 表示需要校验证书是否在证书吊销列表中。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    certCRLs?: Array<CertCRLCollection>;

    /**
     * 表示需要在线校验证证书吊销状态的参数对象。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    revocationCheckParam?: RevocationCheckParameter;

    /**
     * 表示需要校验证书的策略类型。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    policy?: ValidationPolicyType;

    /**
     * 表示需要校验证书中主机名，与policy配合使用。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    sslHostname?: string;

    /**
     * 表示需要校验证书中的密钥用途。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    keyUsage?: Array<KeyUsageType>;
  }

  /**
   * 表示证书链校验的返回值。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertChainValidationResult {
    /**
     * 表示信任锚。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly trustAnchor: X509TrustAnchor;

    /**
     * 表示实体证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly entityCert: X509Cert;
  }

  /**
   * 用于指定证书链创建参数。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CertChainBuildParameters {
    /**
     * 指定过滤条件。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    certMatchParameters: X509CertMatchParameters;

    /**
     * 指定最终证书链中CA证书的最大长度。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxLength?: int;

    /**
     * 指定验证条件。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    validationParameters: CertChainValidationParameters;
  }

  /**
   * 用于指定证书链创建结果。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CertChainBuildResult {
    /**
     * 生成的证书链对象。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly certChain: X509CertChain;

    /**
     * 指定最终证书链的最大长度。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly validationResult: CertChainValidationResult;
  }

  /**
   * 表示Cms内容类型的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsContentType {
    /**
     * 签名数据。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SIGNED_DATA = 0,

    /**
     * 封装数据。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ENVELOPED_DATA = 1
  }

  /**
   * 表示Cms内容数据格式的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsContentDataFormat {
    /**
     * 表示二进制数据格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    BINARY = 0,

    /**
     * 表示文本数据格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TEXT = 1
  }

  /**
   * 表示Cms签名格式的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsFormat {
    /**
     * PEM格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PEM = 0,

    /**
     * DER格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    DER = 1
  }

  /**
   * 表示私钥信息。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface PrivateKeyInfo {
    /**
     * 未加密或加密的私钥，支持PEM或DER格式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * 私钥的密码，如果私钥是加密的。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password?: string;
  }

  /**
   * 表示RSA类型CMS签名填充方式的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsRsaSignaturePadding {
    /**
     * PKCS1填充方式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    PKCS1_PADDING = 0,

    /**
     * PKCS1 PSS填充方式。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    PKCS1_PSS_PADDING = 1
  }

  /**
   * 表示Cms签名者的配置选项。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsSignerConfig {
    /**
     * 消息摘要算法的名称，例如 "SHA384", 当前支持"SHA1"、"SHA256"、"SHA384"、"SHA512"。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;

    /**
     * RSA 签名填充方式。默认值为：PKCS1_PADDING。
     * 当设置为 PKCS1_PSS_PADDING 时，mdName 必须为 "SHA256"、"SHA384" 或 "SHA512"。
     * **说明**：仅当签名者私钥类型为RSA时有效。
     *
     * @default CmsRsaSignaturePadding.PKCS1_PADDING
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    rsaSignaturePadding?: CmsRsaSignaturePadding;

    /**
     * 是否添加证书。默认为true。true为需要，false为不需要。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addCert?: boolean;

    /**
     * 是否添加签名属性。默认为true。true为需要，false为不需要。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addAttr?: boolean;

    /**
     * 是否将SMIME能力添加到Cms对象。默认为true。true为需要，false为不需要。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addSmimeCapAttr?: boolean;
  }

  /**
   * CMS KeyAgree类型接收者摘要算法的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsKeyAgreeRecipientDigestAlgorithm {
    /**
     * SHA256 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA256 = 0,

    /**
     * SHA384 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA384 = 1,

    /**
     * SHA512 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA512 = 2
  }

  /**
   * CMS接收者对称算法的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsRecipientEncryptionAlgorithm {
    /**
     * AES_128_CBC 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_128_CBC = 0,

    /**
     * AES_192_CBC 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_192_CBC = 1,

    /**
     * AES_256_CBC 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_256_CBC = 2,

    /**
     * AES_128_GCM 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_128_GCM = 3,

    /**
     * AES_192_GCM 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_192_GCM = 4,

    /**
     * AES_256_GCM 算法
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_256_GCM = 5
  }

  /**
   * CMS封装数据的KeyTrans接收方信息。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsKeyTransRecipientInfo {
    /**
     * RSA证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert: X509Cert;
  }

  /**
   * CMS封装数据的KeyAgree接收方信息。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsKeyAgreeRecipientInfo {
    /**
     * RSA证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert: X509Cert;

    /**
     * KDF摘要算法，默认为SHA256。
     *
     * @default CmsKeyAgreeRecipientDigestAlgorithm.SHA256
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    digestAlgorithm?: CmsKeyAgreeRecipientDigestAlgorithm;
  }

  /**
   * CMS封装数据的接收者信息。
   *
   * > **说明：**
   * >
   * > 至少需要设置一个接收者。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsRecipientInfo {
    /**
     * keyTrans接收者信息。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyTransInfo?: CmsKeyTransRecipientInfo;
    /**
     * keyAgree接收者信息。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyAgreeInfo?: CmsKeyAgreeRecipientInfo;
  }

  /**
   * 表示生成Cms签名结果的配置选项。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsGeneratorOptions {
    /**
     * 内容数据的格式。默认为CmsContentDataFormat.BINARY。
     *
     * @default CmsContentDataFormat.BINARY
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    contentDataFormat?: CmsContentDataFormat;

    /**
     * Cms最终数据的输出格式。默认为DER。
     *
     * @default CmsFormat.DER
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    outFormat?: CmsFormat;

    /**
     * Cms最终数据是否不包含原始数据。默认为false。true为包含，false为不包含。
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isDetached?: boolean;
  }

  /**
   * CmsGenerator对象用于生成CMS（Cryptographic Message Syntax）格式的消息。
   *
   * > **说明：**
   * >
   * > PKCS#7是用于存储签名或加密数据的标准语法。注意CMS是PKCS#7的扩展，PKCS#7支持的数据类型包括数据、签名数据、信封数据、
   * > > 签名和信封数据、摘要数据、加密数据。常用于保护数据的完整性和机密性。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsGenerator {
    /**
     * 用于为内容类型为SIGNED_DATA的CMS添加签名者信息。
     *
     * @param { X509Cert } cert - 指定X509证书。
     * @param { PrivateKeyInfo } keyInfo - 指定私钥信息。
     * @param { CmsSignerConfig } config - 指定签名者选项。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030008 - maybe wrong password.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addSigner(cert: X509Cert, keyInfo: PrivateKeyInfo, config: CmsSignerConfig): void;

    /**
     * 用于添加内容类型为SIGNED_DATA的CMS的证书，例如签名证书的颁发者证书。
     *
     * 如果未调用addSigner接口，并且仅添加证书后，生成的CMS签名数据将只包含证书。
     *
     * @param { X509Cert } cert - 要添加的X509证书。
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    addCert(cert: X509Cert): void;

    /**
     * 为内容类型为ENVELOPED_DATA的CMS设置加密算法。
     *
     * 该方法应在创建ENVELOPED_DATA类型的CmsGenerator后立即调用。如果未调用此方法，则默认使用AES_256_GCM作为加密算法。
     *
     * @param { CmsRecipientEncryptionAlgorithm } algorithm - 用于CMS封装数据的加密算法。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The type of algorithm is invalid or not supported.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    setRecipientEncryptionAlgorithm(algorithm: CmsRecipientEncryptionAlgorithm): void;

    /**
     * 为内容类型为ENVELOPED_DATA的CMS添加接收者信息。使用Promise异步回调。
     *
     * 该方法至少需要设置一个接收者。
     *
     * @param { CmsRecipientInfo } recipientInfo - 接收者信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The type of recipient certificate is invalid or not supported;
     *     <br>2. The digestAlgorithm of CmsKeyAgreeRecipientInfo is invalid or not supported;
     *     <br>3. The recipientInfo does not have any recipient info.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    addRecipientInfo(recipientInfo: CmsRecipientInfo): Promise<void>;

    /**
     * 用于获取CMS最终数据，例如CMS签名数据或CMS封装数据。使用Promise异步回调。
     *
     * @param { Uint8Array } data - Cms操作的内容。
     * @param { CmsGeneratorOptions } [options] - Cms操作的配置选项。
     * @returns { Promise<Uint8Array | string> } Promise used to return the CMS data.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    doFinal(data: Uint8Array, options?: CmsGeneratorOptions): Promise<Uint8Array | string>;

    /**
     * 用于获取CMS最终数据，例如CMS签名数据或CMS封装数据。（同步方法）。
     *
     * @param { Uint8Array } data - Cms操作的内容。
     * @param { CmsGeneratorOptions } [options] - Cms操作的配置选项。
     * @returns { Uint8Array | string } CMS data generated.
     * @throws { BusinessError } 401 - invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    doFinalSync(data: Uint8Array, options?: CmsGeneratorOptions): Uint8Array | string;

    /**
     * 用于获取内容类型为ENVELOPED_DATA的CMS的加密内容数据。使用Promise异步回调。
     *
     * 如果创建了类型为ENVELOPED_DATA的CmsGenerator并使用了数据分离来生成CMS封装数据，使用此方法来获取加密的内容数据。
     *
     * @returns { Promise<Uint8Array> } Promise对象, 返回加密的数据内容。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getEncryptedContentData(): Promise<Uint8Array>;
  }

  /**
   * 表示创建CmsGenerator对象。
   *
   * @param { CmsContentType } contentType - 指定CMS内容类型。
   * @returns { CmsGenerator } CmsGenerator对象。
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function createCmsGenerator(contentType: CmsContentType): CmsGenerator;

  /**
   * CMS验证的配置。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsVerificationConfig {
    /**
     * 信任证书。
     * **说明**：需要配置所有签名者的信任证书。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    trustCerts: Array<X509Cert>;

    /**
     * 签名证书。默认为空。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    signerCerts?: Array<X509Cert>;

    /**
     * 内容数据，如果是detached模式，则需要指定明文数据。attached模式可以不传。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentData?: Uint8Array;

    /**
     * 内容数据的格式。默认为CmsContentDataFormat.BINARY。
     *
     * @default CmsContentDataFormat.BINARY
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentDataFormat?: CmsContentDataFormat;
  }

  /**
   * CMS解封装的配置。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsEnvelopedDecryptionConfig {
    /**
     * 私钥参数。默认为空。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyInfo?: PrivateKeyInfo;

    /**
     * 公钥证书。默认为空。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert?: X509Cert;

    /**
     * 加密的内容数据，如果CMS不包含指定数据。默认为空。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    encryptedContentData?: Uint8Array;

    /**
     * 内容数据的格式。默认为CmsContentDataFormat.BINARY。
     *
     * @default CmsContentDataFormat.BINARY
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentDataFormat?: CmsContentDataFormat;
  }

  /**
   * 从CMS中获取证书不同类型的枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsCertType {
    /**
     * 签名者证书
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SIGNER_CERTS = 0,

    /**
     * 全部证书
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ALL_CERTS = 1
  }

  /**
   * CmsParser对象用于对已签名跟封装的CMS（Cryptographic Message Syntax）格式的消息进行验签和解封装。
   *
   * > **说明：**
   * >
   * > PKCS#7是用于存储签名或加密数据的标准语法。注意CMS是PKCS#7的扩展，PKCS#7支持的数据类型包括数据、签名数据、信封数据、
   * > > 签名和信封数据、摘要数据、加密数据。常用于保护数据的完整性和机密性。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsParser {
    /**
     * 用于把CMS格式的数据转成CMS对象。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 支持PEM跟DER格式的CMS数据。string对应PEM格式；Uint8Array对应DER格式数据。
     *
     * > **说明**
     * >
     * > 支持PEM和DER格式的CMS数据。**string**对应PEM格式，**Uint8Array**
     * > 对应于DER格式。
     *
     * @param { Uint8Array | string } data - CMS数据内容。
     * @param { CmsFormat } cmsFormat - 指定输入的CMS格式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The length of the data is zero or too large;
     *     <br>2. The type of the cmsFormat is invalid or not supported.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    setRawData(data: Uint8Array | string, cmsFormat: CmsFormat): Promise<void>;

    /**
     * 用于获取CMS的数据类型。当前支持获取签名数据、解封装数据两种类型。
     *
     * @returns { CmsContentType } 返回CMS数据类型。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getContentType(): CmsContentType;

    /**
     * 用于验证Signed_DATA内容类型的CMS。使用Promise异步回调。
     *
     * @param { CmsVerificationConfig } config - CMS验签配置内容。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The trustCerts of config is empty;
     *     <br>2. The length of the contentData of config is zero or too large;
     *     <br>3. The contentDataFormat of config is invalid or not supported.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    verifySignedData(config: CmsVerificationConfig): Promise<void>;

    /**
     * 用于从签名类型的CMS数据中获取明文数据。使用Promise异步回调。
     *
     * @returns { Promise<Uint8Array> } Promise对象，返回CMS原始数据。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getContentData(): Promise<Uint8Array>;

    /**
     * 传入枚举值，用于从签名类型的CMS数据中获取证书。当前支持获取签名者证书或全部证书。使用Promise异步回调。
     *
     * @param { CmsCertType } type - 从cms中获取证书的类型。
     * @returns { Promise<Array<X509Cert>> } Promise对象，返回证书集合。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The type of the cmsFormat is invalid or not supported.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getCerts(type: CmsCertType): Promise<Array<X509Cert>>;

    /**
     * 用于验证Enveloped_DATA内容类型的CMS。使用Promise异步回调。
     *
     * @param { CmsEnvelopedDecryptionConfig } config - CMS解封装配置内容。
     * @returns { Promise<Uint8Array> } Promise对象，返回解封装结果。
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
     *     <br>1. The private key is invalid or not supported;
     *     <br>2. The recipient certificate is invalid or not supported.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    decryptEnvelopedData(config: CmsEnvelopedDecryptionConfig): Promise<Uint8Array>;
  }

  /**
   * 表示创建CmsParser对象。
   *
   * @returns { CmsParser } CmsParser对象。
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function createCmsParser(): CmsParser;

  /**
   * 定义CSR属性表示。
   *
   * CSR属性字段，当前仅支持字符串类型的属性字段，属性值添加到CSR中编码为utf-8。常见的type为challengePassword。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CsrAttribute {
    /**
     * openssl指定的扩展类型。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * 属性值。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * RSA私钥生成CSR时的配置参数，包含主体、扩展、摘要算法、输出格式等。
   *
   * > **说明：**
   * >
   * > - subject是X509定义的Name类型的对象。
   * >
   * > - mdName是摘要算法名，当前支持SHA1、SHA256、SHA384、SHA512。
   * >
   * > - attributes是可选参数，指定openssl中规定的扩展类型跟扩展值生成CSR。例如challengePassword、keyUsage等。
   * >
   * > - outFormat指定输出CSR的格式，若不指定默认为PEM格式。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CsrGenerationConfig {
    /**
     * X509定义的Name类型的对象。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    subject: X500DistinguishedName;

    /**
     * 摘要算法名。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;

    /**
     * 属性的集合。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    attributes?: Array<CsrAttribute>;

    /**
     * 输出类型。
     *
     * @default EncodingBaseFormat.PEM
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    outFormat?: EncodingBaseFormat;
  }

  /**
   * 表示使用指定的RSA私钥，传入主体、扩展、摘要算法、输出格式等配置参数去生成CSR。
   *
   * @param { PrivateKeyInfo } keyInfo - 包含私钥跟口令的配置参数。
   * @param { CsrGenerationConfig } config - 包含生成CSR的配置参数。
   * @returns { string | Uint8Array } CSR generated.
   * @throws { BusinessError } 401 - invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @throws { BusinessError } 19030008 - maybe wrong password.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function generateCsr(keyInfo: PrivateKeyInfo, config: CsrGenerationConfig): string | Uint8Array;

  /**
   * 表示基于密码的加密算法枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PbesEncryptionAlgorithm {
    /**
     * AES-128-CBC加密算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_128_CBC = 0,

    /**
     * AES-192-CBC加密算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_192_CBC = 1,

    /**
     * AES-256-CBC加密算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_256_CBC = 2
  }

  /**
   * 表示基于密码的加密算法参数，当前仅支持PBES2。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface PbesParams {
    /**
     * 表示盐值长度。默认为16，最小值为8。
     * 取值应为≥8的整数。
     *
     * @default 16
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    saltLen?: int;

    /**
     * 表示迭代次数。默认为2048。
     * 取值应为正整数。
     *
     * @default 2048
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    iterations?: int;

    /**
     * 表示PBES加密算法类型。默认为AES_256_CBC。
     *
     * @default PbesEncryptionAlgorithm.AES_256_CBC
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    encryptionAlgorithm?: PbesEncryptionAlgorithm;
  }

  /**
   * 表示PKCS12 MAC摘要算法枚举。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum Pkcs12MacDigestAlgorithm {
    /**
     * SHA256摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA256 = 0,

    /**
     * SHA384摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA384 = 1,

    /**
     * SHA512摘要算法。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA512 = 2
  }

  /**
   * 表示创建P12文件的配置。
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface Pkcs12CreationConfig {
    /**
     * 表示P12文件的密码。最小长度为4。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * 表示私钥加密的算法参数。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    keyEncParams?: PbesParams;

    /**
     * 表示是否加密证书。默认为true。true为加密，false为不加密。
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    encryptCert?: boolean;

    /**
     * 表示证书加密的算法参数。
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    certEncParams?: PbesParams;

    /**
     * 表示P12 MAC的盐值长度。最小值为8，默认为16。
     * 取值应为≥8的整数。
     *
     * @default 16
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    macSaltLen?: int;

    /**
     * 表示P12 MAC的迭代次数。默认为2048。
     * 取值应为正整数。
     *
     * @default 2048
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    macIterations?: int;

    /**
     * 表示P12 MAC的摘要算法。默认为SHA256。
     *
     * @default Pkcs12MacDigestAlgorithm.SHA256
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    macDigestAlgorithm?: Pkcs12MacDigestAlgorithm;
  }

  /**
   * 表示创建Pkcs12数据，同步返回结果。
   *
   * @param { Pkcs12Data } data - 要打包的P12数据对象。
   * @param { Pkcs12CreationConfig } config - P12文件的创建配置。
   * @returns { Uint8Array } 表示创建的P12文件，DER格式。
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
   *     <br>1. The password is too short or too long;
   *     <br>2. The private key does not match the certificate;
   *     <br>3. Invalid encryption algorithm parameters.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function createPkcs12Sync(data: Pkcs12Data, config: Pkcs12CreationConfig): Uint8Array;

  /**
   * 表示创建Pkcs12数据。使用Promise异步回调。
   *
   * @param { Pkcs12Data } data - 要打包的Pkcs12数据对象。
   * @param { Pkcs12CreationConfig } config - Pkcs12文件的创建配置。
   * @returns { Promise<Uint8Array> } Promise对象。表示创建的Pkcs12文件，DER格式。
   * @throws { BusinessError } 19020001 - memory malloc failed.
   * @throws { BusinessError } 19020002 - runtime error. Possible causes: 1. Memory copy failed;
   *     <br>2. A null pointer occurs inside the system; 3. Failed to convert parameters between ArkTS and C.
   * @throws { BusinessError } 19020003 - parameter check failed. Possible causes:
   *     <br>1. The password is too short or too long;
   *     <br>2. The private key does not match the certificate;
   *     <br>3. Invalid encryption algorithm parameters.
   * @throws { BusinessError } 19030001 - crypto operation error.
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function createPkcs12(data: Pkcs12Data, config: Pkcs12CreationConfig): Promise<Uint8Array>;
}

export default cert;