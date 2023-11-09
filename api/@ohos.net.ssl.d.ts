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
   * @returns { Cert } Return a Cert instance
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
     * @param { CertBlob } [caCert] - Incoming custom CA cert.
     * @param { AsyncCallback<boolean> } callback - The callback of verifyCertification.
     * @throws { BusinessError } 1 - Unspecified error.
     * @throws { BusinessError } 2 - Unable to get issuer certificate.
     * @throws { BusinessError } 3 - Unable to get certificate revocation list (CRL).
     * @throws { BusinessError } 4 - Unable to decrypt certificate signature.
     * @throws { BusinessError } 5 - Unable to decrypt CRL signature.
     * @throws { BusinessError } 6 - Unable to decode issuer public key.
     * @throws { BusinessError } 7 - Certificate signature failure.
     * @throws { BusinessError } 8 - CRL signature failure.
     * @throws { BusinessError } 9 - Certificate is not yet valid.
     * @throws { BusinessError } 10 - Certificate has expired.
     * @throws { BusinessError } 11 - CRL is not yet valid.
     * @throws { BusinessError } 12 - CRL has expired.
     * @throws { BusinessError } 13 - Error in certificate notBefore field.
     * @throws { BusinessError } 14 - Error in certificate notAfter field.
     * @throws { BusinessError } 15 - Error in CRL lastUpdate field.
     * @throws { BusinessError } 16 - Error in CRL nextUpdate field.
     * @throws { BusinessError } 17 - Out of memory.
     * @throws { BusinessError } 18 - Depth zero self-signed certificate.
     * @throws { BusinessError } 19 - Self-signed certificate in certificate chain.
     * @throws { BusinessError } 20 - Unable to get issuer certificate locally.
     * @throws { BusinessError } 21 - Unable to verify leaf signature.
     * @throws { BusinessError } 22 - Certificate chain too long.
     * @throws { BusinessError } 23 - Certificate has been revoked.
     * @throws { BusinessError } 24 - Invalid certificate authority (CA).
     * @throws { BusinessError } 25 - Path length exceeded.
     * @throws { BusinessError } 26 - Invalid purpose for certificate.
     * @throws { BusinessError } 27 - Certificate is untrusted.
     * @throws { BusinessError } 28 - Certificate rejected.
     * @throws { BusinessError } 29 - Subject issuer mismatch.
     * @throws { BusinessError } 30 - AKID SKID mismatch.
     * @throws { BusinessError } 31 - AKID issuer serial mismatch.
     * @throws { BusinessError } 32 - Key usage does not include certificate signing.
     * @throws { BusinessError } 33 - Unable to get CRL issuer.
     * @throws { BusinessError } 34 - Unhandled critical extension.
     * @throws { BusinessError } 35 - Key usage does not include CRL signing.
     * @throws { BusinessError } 36 - Unhandled critical CRL extension.
     * @throws { BusinessError } 37 - Invalid non-CA certificate.
     * @throws { BusinessError } 38 - Proxy path length exceeded.
     * @throws { BusinessError } 39 - Key usage does not include digital signature.
     * @throws { BusinessError } 40 - Proxy certificates not allowed.
     * @throws { BusinessError } 41 - Invalid certificate extension.
     * @throws { BusinessError } 42 - Invalid policy extension.
     * @throws { BusinessError } 43 - No explicit policy.
     * @throws { BusinessError } 44 - Different CRL scope.
     * @throws { BusinessError } 45 - Unsupported extension feature.
     * @throws { BusinessError } 46 - Resources not nested.
     * @throws { BusinessError } 47 - Permitted violation.
     * @throws { BusinessError } 48 - Excluded violation.
     * @throws { BusinessError } 49 - Subtree constraints do not meet the minimum and maximum limits.
     * @throws { BusinessError } 50 - Application verification error.
     * @throws { BusinessError } 51 - Unsupported constraint type.
     * @throws { BusinessError } 52 - Unsupported constraint syntax.
     * @throws { BusinessError } 53 - Unsupported name syntax.
     * @throws { BusinessError } 54 - CRL path validation error.
     * @throws { BusinessError } 55 - Path loop error.
     * @throws { BusinessError } 56 - Suite B invalid version.
     * @throws { BusinessError } 57 - Suite B invalid algorithm.
     * @throws { BusinessError } 58 - Suite B invalid curve.
     * @throws { BusinessError } 59 - Suite B invalid signature algorithm.
     * @throws { BusinessError } 60 - Suite B LOS not allowed.
     * @throws { BusinessError } 61 - Suite B cannot sign P-384 with P-256.
     * @throws { BusinessError } 62 - Hostname mismatch in certificate.
     * @throws { BusinessError } 63 - Email address mismatch in certificate.
     * @throws { BusinessError } 64 - IP address mismatch in certificate.
     * @throws { BusinessError } 65 - DANE no match.
     * @throws { BusinessError } 66 - End-entity key is too small.
     * @throws { BusinessError } 67 - CA key is too small.
     * @throws { BusinessError } 68 - CA message digest is too weak.
     * @throws { BusinessError } 69 - Invalid call.
     * @throws { BusinessError } 70 - Store lookup error.
     * @throws { BusinessError } 71 - No valid SCTs found.
     * @throws { BusinessError } 72 - Proxy subject name violation.
     * @throws { BusinessError } 73 - OCSP verification needed.
     * @throws { BusinessError } 74 - OCSP verification failed.
     * @throws { BusinessError } 75 - Certificate not recognized by OCSP responder.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, caCert?: CertBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } [caCert] - Incoming custom CA cert.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 1 - Unspecified error.
     * @throws { BusinessError } 2 - Unable to get issuer certificate.
     * @throws { BusinessError } 3 - Unable to get certificate revocation list (CRL).
     * @throws { BusinessError } 4 - Unable to decrypt certificate signature.
     * @throws { BusinessError } 5 - Unable to decrypt CRL signature.
     * @throws { BusinessError } 6 - Unable to decode issuer public key.
     * @throws { BusinessError } 7 - Certificate signature failure.
     * @throws { BusinessError } 8 - CRL signature failure.
     * @throws { BusinessError } 9 - Certificate is not yet valid.
     * @throws { BusinessError } 10 - Certificate has expired.
     * @throws { BusinessError } 11 - CRL is not yet valid.
     * @throws { BusinessError } 12 - CRL has expired.
     * @throws { BusinessError } 13 - Error in certificate notBefore field.
     * @throws { BusinessError } 14 - Error in certificate notAfter field.
     * @throws { BusinessError } 15 - Error in CRL lastUpdate field.
     * @throws { BusinessError } 16 - Error in CRL nextUpdate field.
     * @throws { BusinessError } 17 - Out of memory.
     * @throws { BusinessError } 18 - Depth zero self-signed certificate.
     * @throws { BusinessError } 19 - Self-signed certificate in certificate chain.
     * @throws { BusinessError } 20 - Unable to get issuer certificate locally.
     * @throws { BusinessError } 21 - Unable to verify leaf signature.
     * @throws { BusinessError } 22 - Certificate chain too long.
     * @throws { BusinessError } 23 - Certificate has been revoked.
     * @throws { BusinessError } 24 - Invalid certificate authority (CA).
     * @throws { BusinessError } 25 - Path length exceeded.
     * @throws { BusinessError } 26 - Invalid purpose for certificate.
     * @throws { BusinessError } 27 - Certificate is untrusted.
     * @throws { BusinessError } 28 - Certificate rejected.
     * @throws { BusinessError } 29 - Subject issuer mismatch.
     * @throws { BusinessError } 30 - AKID SKID mismatch.
     * @throws { BusinessError } 31 - AKID issuer serial mismatch.
     * @throws { BusinessError } 32 - Key usage does not include certificate signing.
     * @throws { BusinessError } 33 - Unable to get CRL issuer.
     * @throws { BusinessError } 34 - Unhandled critical extension.
     * @throws { BusinessError } 35 - Key usage does not include CRL signing.
     * @throws { BusinessError } 36 - Unhandled critical CRL extension.
     * @throws { BusinessError } 37 - Invalid non-CA certificate.
     * @throws { BusinessError } 38 - Proxy path length exceeded.
     * @throws { BusinessError } 39 - Key usage does not include digital signature.
     * @throws { BusinessError } 40 - Proxy certificates not allowed.
     * @throws { BusinessError } 41 - Invalid certificate extension.
     * @throws { BusinessError } 42 - Invalid policy extension.
     * @throws { BusinessError } 43 - No explicit policy.
     * @throws { BusinessError } 44 - Different CRL scope.
     * @throws { BusinessError } 45 - Unsupported extension feature.
     * @throws { BusinessError } 46 - Resources not nested.
     * @throws { BusinessError } 47 - Permitted violation.
     * @throws { BusinessError } 48 - Excluded violation.
     * @throws { BusinessError } 49 - Subtree constraints do not meet the minimum and maximum limits.
     * @throws { BusinessError } 50 - Application verification error.
     * @throws { BusinessError } 51 - Unsupported constraint type.
     * @throws { BusinessError } 52 - Unsupported constraint syntax.
     * @throws { BusinessError } 53 - Unsupported name syntax.
     * @throws { BusinessError } 54 - CRL path validation error.
     * @throws { BusinessError } 55 - Path loop error.
     * @throws { BusinessError } 56 - Suite B invalid version.
     * @throws { BusinessError } 57 - Suite B invalid algorithm.
     * @throws { BusinessError } 58 - Suite B invalid curve.
     * @throws { BusinessError } 59 - Suite B invalid signature algorithm.
     * @throws { BusinessError } 60 - Suite B LOS not allowed.
     * @throws { BusinessError } 61 - Suite B cannot sign P-384 with P-256.
     * @throws { BusinessError } 62 - Hostname mismatch in certificate.
     * @throws { BusinessError } 63 - Email address mismatch in certificate.
     * @throws { BusinessError } 64 - IP address mismatch in certificate.
     * @throws { BusinessError } 65 - DANE no match.
     * @throws { BusinessError } 66 - End-entity key is too small.
     * @throws { BusinessError } 67 - CA key is too small.
     * @throws { BusinessError } 68 - CA message digest is too weak.
     * @throws { BusinessError } 69 - Invalid call.
     * @throws { BusinessError } 70 - Store lookup error.
     * @throws { BusinessError } 71 - No valid SCTs found.
     * @throws { BusinessError } 72 - Proxy subject name violation.
     * @throws { BusinessError } 73 - OCSP verification needed.
     * @throws { BusinessError } 74 - OCSP verification failed.
     * @throws { BusinessError } 75 - Certificate not recognized by OCSP responder.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, caCert?: CertBlob): Promise<boolean>;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } [caCert] - Incoming custom CA cert.
     * @returns { boolean } Returns true if the verify certification to server succeed, else returns false.
     * @throws { BusinessError } 1 - Unspecified error.
     * @throws { BusinessError } 2 - Unable to get issuer certificate.
     * @throws { BusinessError } 3 - Unable to get certificate revocation list (CRL).
     * @throws { BusinessError } 4 - Unable to decrypt certificate signature.
     * @throws { BusinessError } 5 - Unable to decrypt CRL signature.
     * @throws { BusinessError } 6 - Unable to decode issuer public key.
     * @throws { BusinessError } 7 - Certificate signature failure.
     * @throws { BusinessError } 8 - CRL signature failure.
     * @throws { BusinessError } 9 - Certificate is not yet valid.
     * @throws { BusinessError } 10 - Certificate has expired.
     * @throws { BusinessError } 11 - CRL is not yet valid.
     * @throws { BusinessError } 12 - CRL has expired.
     * @throws { BusinessError } 13 - Error in certificate notBefore field.
     * @throws { BusinessError } 14 - Error in certificate notAfter field.
     * @throws { BusinessError } 15 - Error in CRL lastUpdate field.
     * @throws { BusinessError } 16 - Error in CRL nextUpdate field.
     * @throws { BusinessError } 17 - Out of memory.
     * @throws { BusinessError } 18 - Depth zero self-signed certificate.
     * @throws { BusinessError } 19 - Self-signed certificate in certificate chain.
     * @throws { BusinessError } 20 - Unable to get issuer certificate locally.
     * @throws { BusinessError } 21 - Unable to verify leaf signature.
     * @throws { BusinessError } 22 - Certificate chain too long.
     * @throws { BusinessError } 23 - Certificate has been revoked.
     * @throws { BusinessError } 24 - Invalid certificate authority (CA).
     * @throws { BusinessError } 25 - Path length exceeded.
     * @throws { BusinessError } 26 - Invalid purpose for certificate.
     * @throws { BusinessError } 27 - Certificate is untrusted.
     * @throws { BusinessError } 28 - Certificate rejected.
     * @throws { BusinessError } 29 - Subject issuer mismatch.
     * @throws { BusinessError } 30 - AKID SKID mismatch.
     * @throws { BusinessError } 31 - AKID issuer serial mismatch.
     * @throws { BusinessError } 32 - Key usage does not include certificate signing.
     * @throws { BusinessError } 33 - Unable to get CRL issuer.
     * @throws { BusinessError } 34 - Unhandled critical extension.
     * @throws { BusinessError } 35 - Key usage does not include CRL signing.
     * @throws { BusinessError } 36 - Unhandled critical CRL extension.
     * @throws { BusinessError } 37 - Invalid non-CA certificate.
     * @throws { BusinessError } 38 - Proxy path length exceeded.
     * @throws { BusinessError } 39 - Key usage does not include digital signature.
     * @throws { BusinessError } 40 - Proxy certificates not allowed.
     * @throws { BusinessError } 41 - Invalid certificate extension.
     * @throws { BusinessError } 42 - Invalid policy extension.
     * @throws { BusinessError } 43 - No explicit policy.
     * @throws { BusinessError } 44 - Different CRL scope.
     * @throws { BusinessError } 45 - Unsupported extension feature.
     * @throws { BusinessError } 46 - Resources not nested.
     * @throws { BusinessError } 47 - Permitted violation.
     * @throws { BusinessError } 48 - Excluded violation.
     * @throws { BusinessError } 49 - Subtree constraints do not meet the minimum and maximum limits.
     * @throws { BusinessError } 50 - Application verification error.
     * @throws { BusinessError } 51 - Unsupported constraint type.
     * @throws { BusinessError } 52 - Unsupported constraint syntax.
     * @throws { BusinessError } 53 - Unsupported name syntax.
     * @throws { BusinessError } 54 - CRL path validation error.
     * @throws { BusinessError } 55 - Path loop error.
     * @throws { BusinessError } 56 - Suite B invalid version.
     * @throws { BusinessError } 57 - Suite B invalid algorithm.
     * @throws { BusinessError } 58 - Suite B invalid curve.
     * @throws { BusinessError } 59 - Suite B invalid signature algorithm.
     * @throws { BusinessError } 60 - Suite B LOS not allowed.
     * @throws { BusinessError } 61 - Suite B cannot sign P-384 with P-256.
     * @throws { BusinessError } 62 - Hostname mismatch in certificate.
     * @throws { BusinessError } 63 - Email address mismatch in certificate.
     * @throws { BusinessError } 64 - IP address mismatch in certificate.
     * @throws { BusinessError } 65 - DANE no match.
     * @throws { BusinessError } 66 - End-entity key is too small.
     * @throws { BusinessError } 67 - CA key is too small.
     * @throws { BusinessError } 68 - CA message digest is too weak.
     * @throws { BusinessError } 69 - Invalid call.
     * @throws { BusinessError } 70 - Store lookup error.
     * @throws { BusinessError } 71 - No valid SCTs found.
     * @throws { BusinessError } 72 - Proxy subject name violation.
     * @throws { BusinessError } 73 - OCSP verification needed.
     * @throws { BusinessError } 74 - OCSP verification failed.
     * @throws { BusinessError } 75 - Certificate not recognized by OCSP responder.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertificationSync(cert: CertBlob, caCert?: CertBlob): boolean;
  }
}

export default ssl;
