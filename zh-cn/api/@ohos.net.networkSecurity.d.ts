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

/**
 * @file 网络安全校验
 * @kit NetworkKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供网络安全校验能力。应用可以通过证书校验API完成证书校验功能。
 *
 * @syscap SystemCapability.Communication.NetStack
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace networkSecurity {
  /**
   * 证书编码类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CertType {
    /**
     * PEM格式证书。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 11 dynamic
     * @since 23 static
     */
    CERT_TYPE_PEM = 0,

    /**
     * DER格式证书。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 11 dynamic
     * @since 23 static
     */
    CERT_TYPE_DER = 1
  }

  /**
   * 证书数据。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertBlob {
    /**
     * 证书编码类型。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 11 dynamic
     * @since 23 static
     */
    type: CertType;

    /**
     * 证书内容。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 11 dynamic
     * @since 23 static
     */
    data: string | ArrayBuffer;
  }

  /**
   * 系统将使用证书管理中的预置CA证书和用户安装的CA证书来校验应用传入的证书。使用Promise异步回调。
   *
   * @param { CertBlob } cert - 被校验的证书。
   * @param { CertBlob } [caCert] - 传入自定义的CA证书。
   * @returns { Promise<int> } 以promise形式返回一个数字，表示证书验证的结果。如果证书验证成功，则返回0； 否则验证失败。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2305001 - Unspecified error.
   * @throws { BusinessError } 2305002 - Unable to get issuer certificate.
   * @throws { BusinessError } 2305003 - Unable to get certificate revocation list (CRL).
   * @throws { BusinessError } 2305004 - Unable to decrypt certificate signature.
   * @throws { BusinessError } 2305005 - Unable to decrypt CRL signature.
   * @throws { BusinessError } 2305006 - Unable to decode issuer public key.
   * @throws { BusinessError } 2305007 - Certificate signature failure.
   * @throws { BusinessError } 2305008 - CRL signature failure.
   * @throws { BusinessError } 2305009 - Certificate is not yet valid.
   * @throws { BusinessError } 2305010 - Certificate has expired.
   * @throws { BusinessError } 2305011 - CRL is not yet valid.
   * @throws { BusinessError } 2305012 - CRL has expired.
   * @throws { BusinessError } 2305023 - Certificate has been revoked.
   * @throws { BusinessError } 2305024 - Invalid certificate authority (CA).
   * @throws { BusinessError } 2305027 - Certificate is untrusted.
   * @throws { BusinessError } 2305018 - Self-signed certificate. [since 12]
   * @throws { BusinessError } 2305069 - Invalid certificate verification context. [since 12]
   * @syscap SystemCapability.Communication.NetStack
   * @since 11 dynamic
   * @since 23 static
   */
  export function certVerification(cert: CertBlob, caCert?: CertBlob): Promise<int>;

  /**
   * 系统将使用证书管理中的预置CA证书和用户安装的CA证书来校验应用传入的证书，使用同步方式返回。
   *
   * @param { CertBlob } cert - 被校验的证书。
   * @param { CertBlob } [caCert] - 传入自定义的CA证书。
   * @returns { int } 表示证书验证的结果。如果证书验证成功，则返回0； 否则验证失败。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2305001 - Unspecified error.
   * @throws { BusinessError } 2305002 - Unable to get issuer certificate.
   * @throws { BusinessError } 2305003 - Unable to get certificate revocation list (CRL).
   * @throws { BusinessError } 2305004 - Unable to decrypt certificate signature.
   * @throws { BusinessError } 2305005 - Unable to decrypt CRL signature.
   * @throws { BusinessError } 2305006 - Unable to decode issuer public key.
   * @throws { BusinessError } 2305007 - Certificate signature failure.
   * @throws { BusinessError } 2305008 - CRL signature failure.
   * @throws { BusinessError } 2305009 - Certificate is not yet valid.
   * @throws { BusinessError } 2305010 - Certificate has expired.
   * @throws { BusinessError } 2305011 - CRL is not yet valid.
   * @throws { BusinessError } 2305012 - CRL has expired.
   * @throws { BusinessError } 2305023 - Certificate has been revoked.
   * @throws { BusinessError } 2305024 - Invalid certificate authority (CA).
   * @throws { BusinessError } 2305027 - Certificate is untrusted.
   * @throws { BusinessError } 2305018 - Self-signed certificate. [since 12]
   * @throws { BusinessError } 2305069 - Invalid certificate verification context. [since 12]
   * @syscap SystemCapability.Communication.NetStack
   * @since 11 dynamic
   * @since 23 static
   */
  export function certVerificationSync(cert: CertBlob, caCert?: CertBlob): int;

  /**
   * 验证服务器证书链并返回排序后的证书链。
   *
   * @param { CertBlob[] } cert - 要验证的证书链。
   * @param { CertBlob } [caCert] - 入站自定义 CA 证书。
   * @param { string } [hostname] - 要验证的主机名。
   * @returns { Promise<CertBlob[]> } 返回一个 Promise，如果验证成功则解析为排序后的证书链（从叶子到根排序）。
   * @throws { BusinessError } 2305001 - Unspecified error.
   * @throws { BusinessError } 2305002 - Unable to get issuer certificate.
   * @throws { BusinessError } 2305004 - Unable to decrypt certificate signature.
   * @throws { BusinessError } 2305006 - Unable to decode issuer public key.
   * @throws { BusinessError } 2305007 - Certificate signature failure.
   * @throws { BusinessError } 2305009 - Certificate is not yet valid.
   * @throws { BusinessError } 2305010 - Certificate has expired.
   * @throws { BusinessError } 2305018 - Self-signed certificate.
   * @throws { BusinessError } 2305024 - Invalid certificate authority (CA).
   * @throws { BusinessError } 2305027 - Certificate is untrusted.
   * @throws { BusinessError } 2305062 - Invalid hostname.
   * @throws { BusinessError } 2305069 - Invalid certificate verification context.
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export function verifyCertChain(cert: CertBlob[], caCert?: CertBlob, hostname?: string): Promise<CertBlob[]>;

  /**
   * 从应用预置network_config.json文件中获取整体明文HTTP是否允许信息，默认允许明文HTTP访问。
   *
   * @permission ohos.permission.INTERNET
   * @returns { boolean } 整体明文HTTP是否允许。返回true表示允许访问明文HTTP，false表示不允许。默认返回true。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Communication.NetStack
   * @since 18 dynamic
   * @since 23 static
   */
  export function isCleartextPermitted(): boolean;

  /**
   * 从应用预置network_config.json文件中获取按域名明文HTTP是否允许信息，默认允许明文HTTP访问。
   *
   * @permission ohos.permission.INTERNET
   * @param { string } hostName - 需要查询的主机名。
   * @returns { boolean } 按域名明文HTTP是否允许。返回true表示允许明文HTTP访问该主机，false表示不允许。默认返回true。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Communication.NetStack
   * @since 18 dynamic
   * @since 23 static
   */
  export function isCleartextPermittedByHostName(hostName: string): boolean;
}

export default networkSecurity;