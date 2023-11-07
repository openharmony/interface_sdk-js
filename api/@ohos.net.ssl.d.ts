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

/**
 * Provides ssl related APIs.
 * @namespace ssl
 * @syscap SystemCapability.Communication.NetStack
 * @since 11
 */
declare namespace ssl {
  /**
   * Creates an Cert task.
   * @returns Return a Cert instance
   * @syscap SystemCapability.Communication.NetStack
   * @since 11
   */
  function createCert(): Cert;
  /**
   * Defines the certificate type.
   * @enum {number}
   * @syscap SystemCapability.Communication.NetStack
   * @since 11
   */
  export enum CertType {
    /**
     * PEM type certificate.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    CERT_TYPE_PEM = 0,

    /**
     * DER type certificate.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    CERT_TYPE_DER = 1
  }

  /**
   * Define the certificate content.
   * @interface CertBlob
   * @syscap SystemCapability.Communication.NetStack
   * @since 11
   */
  export interface CertBlob {
    /**
     * Certificate type.
     * @type { CertType }
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    type: CertType;

    /**
     * Certificate data.
     * @type {string | ArrayBuffer}
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    data: string | ArrayBuffer;
  }

  /**
   * Support server certificate verification function.
   * @interface Cert
   * @syscap SystemCapability.Communication.NetStack
   * @since 11
   */
  export interface Cert {
    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { AsyncCallback<boolean> } callback - The callback of verifyCertification.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } caCert - Incoming custom CA cert.
     * @param { AsyncCallback<boolean> } callback - The callback of verifyCertification.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, caCert: CertBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } caCert - Incoming custom CA cert.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, caCert?: CertBlob): Promise<boolean>;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } caCert - Incoming custom CA cert.
     * @returns { boolean } Returns true if the verify certification to server succeed, else returns false.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertificationSync(cert: CertBlob, caCert?: CertBlob): boolean;
  }
}

export default ssl;
