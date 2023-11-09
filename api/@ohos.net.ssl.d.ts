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
     * @param { AsyncCallback<boolean> } callback - The callback of verifyCertification.
     * @throws { BusinessError } 1 - X509_V_ERR_UNSPECIFIED.
     * @throws { BusinessError } 2 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT.
     * @throws { BusinessError } 3 - X509_V_ERR_UNABLE_TO_GET_CRL.
     * @throws { BusinessError } 4 - X509_V_ERR_UNABLE_TO_DECRYPT_CERT_SIGNATURE.
     * @throws { BusinessError } 5 - X509_V_ERR_UNABLE_TO_DECRYPT_CRL_SIGNATURE.
     * @throws { BusinessError } 6 - X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY.
     * @throws { BusinessError } 7 - X509_V_ERR_CERT_SIGNATURE_FAILURE.
     * @throws { BusinessError } 8 - X509_V_ERR_CRL_SIGNATURE_FAILURE.
     * @throws { BusinessError } 9 - X509_V_ERR_CERT_NOT_YET_VALID.
     * @throws { BusinessError } 10 - X509_V_ERR_CERT_HAS_EXPIRED.
     * @throws { BusinessError } 11 - X509_V_ERR_CRL_NOT_YET_VALID.
     * @throws { BusinessError } 12 - X509_V_ERR_CRL_HAS_EXPIRED.
     * @throws { BusinessError } 13 - X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD.
     * @throws { BusinessError } 14 - X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD.
     * @throws { BusinessError } 15 - X509_V_ERR_ERROR_IN_CRL_LAST_UPDATE_FIELD.
     * @throws { BusinessError } 16 - X509_V_ERR_ERROR_IN_CRL_NEXT_UPDATE_FIELD.
     * @throws { BusinessError } 17 - X509_V_ERR_OUT_OF_MEM.
     * @throws { BusinessError } 18 - X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT.
     * @throws { BusinessError } 19 - X509_V_ERR_SELF_SIGNED_CERT_IN_CHAIN.
     * @throws { BusinessError } 20 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY.
     * @throws { BusinessError } 21 - X509_V_ERR_UNABLE_TO_VERIFY_LEAF_SIGNATURE.
     * @throws { BusinessError } 22 - X509_V_ERR_CERT_CHAIN_TOO_LONG.
     * @throws { BusinessError } 23 - X509_V_ERR_CERT_REVOKED.
     * @throws { BusinessError } 24 - X509_V_ERR_INVALID_CA.
     * @throws { BusinessError } 25 - X509_V_ERR_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 26 - X509_V_ERR_INVALID_PURPOSE.
     * @throws { BusinessError } 27 - X509_V_ERR_CERT_UNTRUSTED.
     * @throws { BusinessError } 28 - X509_V_ERR_CERT_REJECTED.
     * @throws { BusinessError } 29 - X509_V_ERR_SUBJECT_ISSUER_MISMATCH.
     * @throws { BusinessError } 30 - X509_V_ERR_AKID_SKID_MISMATCH.
     * @throws { BusinessError } 31 - X509_V_ERR_AKID_ISSUER_SERIAL_MISMATCH.
     * @throws { BusinessError } 32 - X509_V_ERR_KEYUSAGE_NO_CERTSIGN.
     * @throws { BusinessError } 33 - X509_V_ERR_UNABLE_TO_GET_CRL_ISSUER.
     * @throws { BusinessError } 34 - X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION.
     * @throws { BusinessError } 35 - X509_V_ERR_KEYUSAGE_NO_CRL_SIGN.
     * @throws { BusinessError } 36 - X509_V_ERR_UNHANDLED_CRITICAL_CRL_EXTENSION.
     * @throws { BusinessError } 37 - X509_V_ERR_INVALID_NON_CA.
     * @throws { BusinessError } 38 - X509_V_ERR_PROXY_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 39 - X509_V_ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE.
     * @throws { BusinessError } 40 - X509_V_ERR_PROXY_CERTIFICATES_NOT_ALLOWED.
     * @throws { BusinessError } 41 - X509_V_ERR_INVALID_EXTENSION.
     * @throws { BusinessError } 42 - X509_V_ERR_INVALID_POLICY_EXTENSION.
     * @throws { BusinessError } 43 - X509_V_ERR_NO_EXPLICIT_POLICY.
     * @throws { BusinessError } 44 - X509_V_ERR_DIFFERENT_CRL_SCOPE.
     * @throws { BusinessError } 45 - X509_V_ERR_UNSUPPORTED_EXTENSION_FEATURE.
     * @throws { BusinessError } 46 - X509_V_ERR_UNNESTED_RESOURCE.
     * @throws { BusinessError } 47 - X509_V_ERR_PERMITTED_VIOLation.
     * @throws { BusinessError } 48 - X509_V_ERR_EXCLUDED_VIOLATION.
     * @throws { BusinessError } 49 - X509_V_ERR_SUBTREE_MINMAX.
     * @throws { BusinessError } 50 - X509_V_ERR_APPLICATION_VERIFICATION.
     * @throws { BusinessError } 51 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_TYPE.
     * @throws { BusinessError } 52 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_SYNTAX.
     * @throws { BusinessError } 53 - X509_V_ERR_UNSUPPORTED_NAME_SYNTAX.
     * @throws { BusinessError } 54 - X509_V_ERR_CRL_PATH_VALIDATION_ERROR.
     * @throws { BusinessError } 55 - X509_V_ERR_PATH_LOOP.
     * @throws { BusinessError } 56 - X509_V_ERR_SUITE_B_INVALID_VERSION.
     * @throws { BusinessError } 57 - X509_V_ERR_SUITE_B_INVALID_ALGORITHM.
     * @throws { BusinessError } 58 - X509_V_ERR_SUITE_B_INVALID_CURVE.
     * @throws { BusinessError } 59 - X509_V_ERR_SUITE_B_INVALID_SIGNATURE_ALGORITHM.
     * @throws { BusinessError } 60 - X509_V_ERR_SUITE_B_LOS_NOT_ALLOWED.
     * @throws { BusinessError } 61 - X509_V_ERR_SUITE_B_CANNOT_SIGN_P_384_WITH_P_256.
     * @throws { BusinessError } 62 - X509_V_ERR_HOSTNAME_MISMATCH.
     * @throws { BusinessError } 63 - X509_V_ERR_EMAIL_MISMATCH.
     * @throws { BusinessError } 64 - X509_V_ERR_IP_ADDRESS_MISMATCH.
     * @throws { BusinessError } 65 - X509_V_ERR_DANE_NO_MATCH.
     * @throws { BusinessError } 66 - X509_V_ERR_EE_KEY_TOO_SMALL.
     * @throws { BusinessError } 67 - X509_V_ERR_CA_KEY_TOO_SMALL.
     * @throws { BusinessError } 68 - X509_V_ERR_CA_MD_TOO_WEAK.
     * @throws { BusinessError } 69 - X509_V_ERR_INVALID_CALL.
     * @throws { BusinessError } 70 - X509_V_ERR_STORE_LOOKUP.
     * @throws { BusinessError } 71 - X509_V_ERR_NO_VALID_SCTS.
     * @throws { BusinessError } 72 - X509_V_ERR_PROXY_SUBJECT_NAME_VIOLATION.
     * @throws { BusinessError } 73 - X509_V_ERR_OCSP_VERIFY_NEEDED.
     * @throws { BusinessError } 74 - X509_V_ERR_OCSP_VERIFY_FAILED.
     * @throws { BusinessError } 75 - X509_V_ERR_OCSP_CERT_UNKNOWN.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } caCert - Incoming custom CA cert.
     * @param { AsyncCallback<boolean> } callback - The callback of verifyCertification.
     * @throws { BusinessError } 1 - X509_V_ERR_UNSPECIFIED.
     * @throws { BusinessError } 2 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT.
     * @throws { BusinessError } 3 - X509_V_ERR_UNABLE_TO_GET_CRL.
     * @throws { BusinessError } 4 - X509_V_ERR_UNABLE_TO_DECRYPT_CERT_SIGNATURE.
     * @throws { BusinessError } 5 - X509_V_ERR_UNABLE_TO_DECRYPT_CRL_SIGNATURE.
     * @throws { BusinessError } 6 - X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY.
     * @throws { BusinessError } 7 - X509_V_ERR_CERT_SIGNATURE_FAILURE.
     * @throws { BusinessError } 8 - X509_V_ERR_CRL_SIGNATURE_FAILURE.
     * @throws { BusinessError } 9 - X509_V_ERR_CERT_NOT_YET_VALID.
     * @throws { BusinessError } 10 - X509_V_ERR_CERT_HAS_EXPIRED.
     * @throws { BusinessError } 11 - X509_V_ERR_CRL_NOT_YET_VALID.
     * @throws { BusinessError } 12 - X509_V_ERR_CRL_HAS_EXPIRED.
     * @throws { BusinessError } 13 - X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD.
     * @throws { BusinessError } 14 - X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD.
     * @throws { BusinessError } 15 - X509_V_ERR_ERROR_IN_CRL_LAST_UPDATE_FIELD.
     * @throws { BusinessError } 16 - X509_V_ERR_ERROR_IN_CRL_NEXT_UPDATE_FIELD.
     * @throws { BusinessError } 17 - X509_V_ERR_OUT_OF_MEM.
     * @throws { BusinessError } 18 - X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT.
     * @throws { BusinessError } 19 - X509_V_ERR_SELF_SIGNED_CERT_IN_CHAIN.
     * @throws { BusinessError } 20 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY.
     * @throws { BusinessError } 21 - X509_V_ERR_UNABLE_TO_VERIFY_LEAF_SIGNATURE.
     * @throws { BusinessError } 22 - X509_V_ERR_CERT_CHAIN_TOO_LONG.
     * @throws { BusinessError } 23 - X509_V_ERR_CERT_REVOKED.
     * @throws { BusinessError } 24 - X509_V_ERR_INVALID_CA.
     * @throws { BusinessError } 25 - X509_V_ERR_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 26 - X509_V_ERR_INVALID_PURPOSE.
     * @throws { BusinessError } 27 - X509_V_ERR_CERT_UNTRUSTED.
     * @throws { BusinessError } 28 - X509_V_ERR_CERT_REJECTED.
     * @throws { BusinessError } 29 - X509_V_ERR_SUBJECT_ISSUER_MISMATCH.
     * @throws { BusinessError } 30 - X509_V_ERR_AKID_SKID_MISMATCH.
     * @throws { BusinessError } 31 - X509_V_ERR_AKID_ISSUER_SERIAL_MISMATCH.
     * @throws { BusinessError } 32 - X509_V_ERR_KEYUSAGE_NO_CERTSIGN.
     * @throws { BusinessError } 33 - X509_V_ERR_UNABLE_TO_GET_CRL_ISSUER.
     * @throws { BusinessError } 34 - X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION.
     * @throws { BusinessError } 35 - X509_V_ERR_KEYUSAGE_NO_CRL_SIGN.
     * @throws { BusinessError } 36 - X509_V_ERR_UNHANDLED_CRITICAL_CRL_EXTENSION.
     * @throws { BusinessError } 37 - X509_V_ERR_INVALID_NON_CA.
     * @throws { BusinessError } 38 - X509_V_ERR_PROXY_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 39 - X509_V_ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE.
     * @throws { BusinessError } 40 - X509_V_ERR_PROXY_CERTIFICATES_NOT_ALLOWED.
     * @throws { BusinessError } 41 - X509_V_ERR_INVALID_EXTENSION.
     * @throws { BusinessError } 42 - X509_V_ERR_INVALID_POLICY_EXTENSION.
     * @throws { BusinessError } 43 - X509_V_ERR_NO_EXPLICIT_POLICY.
     * @throws { BusinessError } 44 - X509_V_ERR_DIFFERENT_CRL_SCOPE.
     * @throws { BusinessError } 45 - X509_V_ERR_UNSUPPORTED_EXTENSION_FEATURE.
     * @throws { BusinessError } 46 - X509_V_ERR_UNNESTED_RESOURCE.
     * @throws { BusinessError } 47 - X509_V_ERR_PERMITTED_VIOLation.
     * @throws { BusinessError } 48 - X509_V_ERR_EXCLUDED_VIOLATION.
     * @throws { BusinessError } 49 - X509_V_ERR_SUBTREE_MINMAX.
     * @throws { BusinessError } 50 - X509_V_ERR_APPLICATION_VERIFICATION.
     * @throws { BusinessError } 51 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_TYPE.
     * @throws { BusinessError } 52 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_SYNTAX.
     * @throws { BusinessError } 53 - X509_V_ERR_UNSUPPORTED_NAME_SYNTAX.
     * @throws { BusinessError } 54 - X509_V_ERR_CRL_PATH_VALIDATION_ERROR.
     * @throws { BusinessError } 55 - X509_V_ERR_PATH_LOOP.
     * @throws { BusinessError } 56 - X509_V_ERR_SUITE_B_INVALID_VERSION.
     * @throws { BusinessError } 57 - X509_V_ERR_SUITE_B_INVALID_ALGORITHM.
     * @throws { BusinessError } 58 - X509_V_ERR_SUITE_B_INVALID_CURVE.
     * @throws { BusinessError } 59 - X509_V_ERR_SUITE_B_INVALID_SIGNATURE_ALGORITHM.
     * @throws { BusinessError } 60 - X509_V_ERR_SUITE_B_LOS_NOT_ALLOWED.
     * @throws { BusinessError } 61 - X509_V_ERR_SUITE_B_CANNOT_SIGN_P_384_WITH_P_256.
     * @throws { BusinessError } 62 - X509_V_ERR_HOSTNAME_MISMATCH.
     * @throws { BusinessError } 63 - X509_V_ERR_EMAIL_MISMATCH.
     * @throws { BusinessError } 64 - X509_V_ERR_IP_ADDRESS_MISMATCH.
     * @throws { BusinessError } 65 - X509_V_ERR_DANE_NO_MATCH.
     * @throws { BusinessError } 66 - X509_V_ERR_EE_KEY_TOO_SMALL.
     * @throws { BusinessError } 67 - X509_V_ERR_CA_KEY_TOO_SMALL.
     * @throws { BusinessError } 68 - X509_V_ERR_CA_MD_TOO_WEAK.
     * @throws { BusinessError } 69 - X509_V_ERR_INVALID_CALL.
     * @throws { BusinessError } 70 - X509_V_ERR_STORE_LOOKUP.
     * @throws { BusinessError } 71 - X509_V_ERR_NO_VALID_SCTS.
     * @throws { BusinessError } 72 - X509_V_ERR_PROXY_SUBJECT_NAME_VIOLATION.
     * @throws { BusinessError } 73 - X509_V_ERR_OCSP_VERIFY_NEEDED.
     * @throws { BusinessError } 74 - X509_V_ERR_OCSP_VERIFY_FAILED.
     * @throws { BusinessError } 75 - X509_V_ERR_OCSP_CERT_UNKNOWN.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, caCert: CertBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 1 - X509_V_ERR_UNSPECIFIED.
     * @throws { BusinessError } 2 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT.
     * @throws { BusinessError } 3 - X509_V_ERR_UNABLE_TO_GET_CRL.
     * @throws { BusinessError } 4 - X509_V_ERR_UNABLE_TO_DECRYPT_CERT_SIGNATURE.
     * @throws { BusinessError } 5 - X509_V_ERR_UNABLE_TO_DECRYPT_CRL_SIGNATURE.
     * @throws { BusinessError } 6 - X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY.
     * @throws { BusinessError } 7 - X509_V_ERR_CERT_SIGNATURE_FAILURE.
     * @throws { BusinessError } 8 - X509_V_ERR_CRL_SIGNATURE_FAILURE.
     * @throws { BusinessError } 9 - X509_V_ERR_CERT_NOT_YET_VALID.
     * @throws { BusinessError } 10 - X509_V_ERR_CERT_HAS_EXPIRED.
     * @throws { BusinessError } 11 - X509_V_ERR_CRL_NOT_YET_VALID.
     * @throws { BusinessError } 12 - X509_V_ERR_CRL_HAS_EXPIRED.
     * @throws { BusinessError } 13 - X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD.
     * @throws { BusinessError } 14 - X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD.
     * @throws { BusinessError } 15 - X509_V_ERR_ERROR_IN_CRL_LAST_UPDATE_FIELD.
     * @throws { BusinessError } 16 - X509_V_ERR_ERROR_IN_CRL_NEXT_UPDATE_FIELD.
     * @throws { BusinessError } 17 - X509_V_ERR_OUT_OF_MEM.
     * @throws { BusinessError } 18 - X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT.
     * @throws { BusinessError } 19 - X509_V_ERR_SELF_SIGNED_CERT_IN_CHAIN.
     * @throws { BusinessError } 20 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY.
     * @throws { BusinessError } 21 - X509_V_ERR_UNABLE_TO_VERIFY_LEAF_SIGNATURE.
     * @throws { BusinessError } 22 - X509_V_ERR_CERT_CHAIN_TOO_LONG.
     * @throws { BusinessError } 23 - X509_V_ERR_CERT_REVOKED.
     * @throws { BusinessError } 24 - X509_V_ERR_INVALID_CA.
     * @throws { BusinessError } 25 - X509_V_ERR_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 26 - X509_V_ERR_INVALID_PURPOSE.
     * @throws { BusinessError } 27 - X509_V_ERR_CERT_UNTRUSTED.
     * @throws { BusinessError } 28 - X509_V_ERR_CERT_REJECTED.
     * @throws { BusinessError } 29 - X509_V_ERR_SUBJECT_ISSUER_MISMATCH.
     * @throws { BusinessError } 30 - X509_V_ERR_AKID_SKID_MISMATCH.
     * @throws { BusinessError } 31 - X509_V_ERR_AKID_ISSUER_SERIAL_MISMATCH.
     * @throws { BusinessError } 32 - X509_V_ERR_KEYUSAGE_NO_CERTSIGN.
     * @throws { BusinessError } 33 - X509_V_ERR_UNABLE_TO_GET_CRL_ISSUER.
     * @throws { BusinessError } 34 - X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION.
     * @throws { BusinessError } 35 - X509_V_ERR_KEYUSAGE_NO_CRL_SIGN.
     * @throws { BusinessError } 36 - X509_V_ERR_UNHANDLED_CRITICAL_CRL_EXTENSION.
     * @throws { BusinessError } 37 - X509_V_ERR_INVALID_NON_CA.
     * @throws { BusinessError } 38 - X509_V_ERR_PROXY_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 39 - X509_V_ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE.
     * @throws { BusinessError } 40 - X509_V_ERR_PROXY_CERTIFICATES_NOT_ALLOWED.
     * @throws { BusinessError } 41 - X509_V_ERR_INVALID_EXTENSION.
     * @throws { BusinessError } 42 - X509_V_ERR_INVALID_POLICY_EXTENSION.
     * @throws { BusinessError } 43 - X509_V_ERR_NO_EXPLICIT_POLICY.
     * @throws { BusinessError } 44 - X509_V_ERR_DIFFERENT_CRL_SCOPE.
     * @throws { BusinessError } 45 - X509_V_ERR_UNSUPPORTED_EXTENSION_FEATURE.
     * @throws { BusinessError } 46 - X509_V_ERR_UNNESTED_RESOURCE.
     * @throws { BusinessError } 47 - X509_V_ERR_PERMITTED_VIOLation.
     * @throws { BusinessError } 48 - X509_V_ERR_EXCLUDED_VIOLATION.
     * @throws { BusinessError } 49 - X509_V_ERR_SUBTREE_MINMAX.
     * @throws { BusinessError } 50 - X509_V_ERR_APPLICATION_VERIFICATION.
     * @throws { BusinessError } 51 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_TYPE.
     * @throws { BusinessError } 52 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_SYNTAX.
     * @throws { BusinessError } 53 - X509_V_ERR_UNSUPPORTED_NAME_SYNTAX.
     * @throws { BusinessError } 54 - X509_V_ERR_CRL_PATH_VALIDATION_ERROR.
     * @throws { BusinessError } 55 - X509_V_ERR_PATH_LOOP.
     * @throws { BusinessError } 56 - X509_V_ERR_SUITE_B_INVALID_VERSION.
     * @throws { BusinessError } 57 - X509_V_ERR_SUITE_B_INVALID_ALGORITHM.
     * @throws { BusinessError } 58 - X509_V_ERR_SUITE_B_INVALID_CURVE.
     * @throws { BusinessError } 59 - X509_V_ERR_SUITE_B_INVALID_SIGNATURE_ALGORITHM.
     * @throws { BusinessError } 60 - X509_V_ERR_SUITE_B_LOS_NOT_ALLOWED.
     * @throws { BusinessError } 61 - X509_V_ERR_SUITE_B_CANNOT_SIGN_P_384_WITH_P_256.
     * @throws { BusinessError } 62 - X509_V_ERR_HOSTNAME_MISMATCH.
     * @throws { BusinessError } 63 - X509_V_ERR_EMAIL_MISMATCH.
     * @throws { BusinessError } 64 - X509_V_ERR_IP_ADDRESS_MISMATCH.
     * @throws { BusinessError } 65 - X509_V_ERR_DANE_NO_MATCH.
     * @throws { BusinessError } 66 - X509_V_ERR_EE_KEY_TOO_SMALL.
     * @throws { BusinessError } 67 - X509_V_ERR_CA_KEY_TOO_SMALL.
     * @throws { BusinessError } 68 - X509_V_ERR_CA_MD_TOO_WEAK.
     * @throws { BusinessError } 69 - X509_V_ERR_INVALID_CALL.
     * @throws { BusinessError } 70 - X509_V_ERR_STORE_LOOKUP.
     * @throws { BusinessError } 71 - X509_V_ERR_NO_VALID_SCTS.
     * @throws { BusinessError } 72 - X509_V_ERR_PROXY_SUBJECT_NAME_VIOLATION.
     * @throws { BusinessError } 73 - X509_V_ERR_OCSP_VERIFY_NEEDED.
     * @throws { BusinessError } 74 - X509_V_ERR_OCSP_VERIFY_FAILED.
     * @throws { BusinessError } 75 - X509_V_ERR_OCSP_CERT_UNKNOWN.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob): Promise<boolean>;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } caCert - Incoming custom CA cert.
     * @returns { Promise<boolean> } The promise returned by the function.
     * @throws { BusinessError } 1 - X509_V_ERR_UNSPECIFIED.
     * @throws { BusinessError } 2 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT.
     * @throws { BusinessError } 3 - X509_V_ERR_UNABLE_TO_GET_CRL.
     * @throws { BusinessError } 4 - X509_V_ERR_UNABLE_TO_DECRYPT_CERT_SIGNATURE.
     * @throws { BusinessError } 5 - X509_V_ERR_UNABLE_TO_DECRYPT_CRL_SIGNATURE.
     * @throws { BusinessError } 6 - X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY.
     * @throws { BusinessError } 7 - X509_V_ERR_CERT_SIGNATURE_FAILURE.
     * @throws { BusinessError } 8 - X509_V_ERR_CRL_SIGNATURE_FAILURE.
     * @throws { BusinessError } 9 - X509_V_ERR_CERT_NOT_YET_VALID.
     * @throws { BusinessError } 10 - X509_V_ERR_CERT_HAS_EXPIRED.
     * @throws { BusinessError } 11 - X509_V_ERR_CRL_NOT_YET_VALID.
     * @throws { BusinessError } 12 - X509_V_ERR_CRL_HAS_EXPIRED.
     * @throws { BusinessError } 13 - X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD.
     * @throws { BusinessError } 14 - X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD.
     * @throws { BusinessError } 15 - X509_V_ERR_ERROR_IN_CRL_LAST_UPDATE_FIELD.
     * @throws { BusinessError } 16 - X509_V_ERR_ERROR_IN_CRL_NEXT_UPDATE_FIELD.
     * @throws { BusinessError } 17 - X509_V_ERR_OUT_OF_MEM.
     * @throws { BusinessError } 18 - X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT.
     * @throws { BusinessError } 19 - X509_V_ERR_SELF_SIGNED_CERT_IN_CHAIN.
     * @throws { BusinessError } 20 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY.
     * @throws { BusinessError } 21 - X509_V_ERR_UNABLE_TO_VERIFY_LEAF_SIGNATURE.
     * @throws { BusinessError } 22 - X509_V_ERR_CERT_CHAIN_TOO_LONG.
     * @throws { BusinessError } 23 - X509_V_ERR_CERT_REVOKED.
     * @throws { BusinessError } 24 - X509_V_ERR_INVALID_CA.
     * @throws { BusinessError } 25 - X509_V_ERR_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 26 - X509_V_ERR_INVALID_PURPOSE.
     * @throws { BusinessError } 27 - X509_V_ERR_CERT_UNTRUSTED.
     * @throws { BusinessError } 28 - X509_V_ERR_CERT_REJECTED.
     * @throws { BusinessError } 29 - X509_V_ERR_SUBJECT_ISSUER_MISMATCH.
     * @throws { BusinessError } 30 - X509_V_ERR_AKID_SKID_MISMATCH.
     * @throws { BusinessError } 31 - X509_V_ERR_AKID_ISSUER_SERIAL_MISMATCH.
     * @throws { BusinessError } 32 - X509_V_ERR_KEYUSAGE_NO_CERTSIGN.
     * @throws { BusinessError } 33 - X509_V_ERR_UNABLE_TO_GET_CRL_ISSUER.
     * @throws { BusinessError } 34 - X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION.
     * @throws { BusinessError } 35 - X509_V_ERR_KEYUSAGE_NO_CRL_SIGN.
     * @throws { BusinessError } 36 - X509_V_ERR_UNHANDLED_CRITICAL_CRL_EXTENSION.
     * @throws { BusinessError } 37 - X509_V_ERR_INVALID_NON_CA.
     * @throws { BusinessError } 38 - X509_V_ERR_PROXY_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 39 - X509_V_ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE.
     * @throws { BusinessError } 40 - X509_V_ERR_PROXY_CERTIFICATES_NOT_ALLOWED.
     * @throws { BusinessError } 41 - X509_V_ERR_INVALID_EXTENSION.
     * @throws { BusinessError } 42 - X509_V_ERR_INVALID_POLICY_EXTENSION.
     * @throws { BusinessError } 43 - X509_V_ERR_NO_EXPLICIT_POLICY.
     * @throws { BusinessError } 44 - X509_V_ERR_DIFFERENT_CRL_SCOPE.
     * @throws { BusinessError } 45 - X509_V_ERR_UNSUPPORTED_EXTENSION_FEATURE.
     * @throws { BusinessError } 46 - X509_V_ERR_UNNESTED_RESOURCE.
     * @throws { BusinessError } 47 - X509_V_ERR_PERMITTED_VIOLation.
     * @throws { BusinessError } 48 - X509_V_ERR_EXCLUDED_VIOLATION.
     * @throws { BusinessError } 49 - X509_V_ERR_SUBTREE_MINMAX.
     * @throws { BusinessError } 50 - X509_V_ERR_APPLICATION_VERIFICATION.
     * @throws { BusinessError } 51 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_TYPE.
     * @throws { BusinessError } 52 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_SYNTAX.
     * @throws { BusinessError } 53 - X509_V_ERR_UNSUPPORTED_NAME_SYNTAX.
     * @throws { BusinessError } 54 - X509_V_ERR_CRL_PATH_VALIDATION_ERROR.
     * @throws { BusinessError } 55 - X509_V_ERR_PATH_LOOP.
     * @throws { BusinessError } 56 - X509_V_ERR_SUITE_B_INVALID_VERSION.
     * @throws { BusinessError } 57 - X509_V_ERR_SUITE_B_INVALID_ALGORITHM.
     * @throws { BusinessError } 58 - X509_V_ERR_SUITE_B_INVALID_CURVE.
     * @throws { BusinessError } 59 - X509_V_ERR_SUITE_B_INVALID_SIGNATURE_ALGORITHM.
     * @throws { BusinessError } 60 - X509_V_ERR_SUITE_B_LOS_NOT_ALLOWED.
     * @throws { BusinessError } 61 - X509_V_ERR_SUITE_B_CANNOT_SIGN_P_384_WITH_P_256.
     * @throws { BusinessError } 62 - X509_V_ERR_HOSTNAME_MISMATCH.
     * @throws { BusinessError } 63 - X509_V_ERR_EMAIL_MISMATCH.
     * @throws { BusinessError } 64 - X509_V_ERR_IP_ADDRESS_MISMATCH.
     * @throws { BusinessError } 65 - X509_V_ERR_DANE_NO_MATCH.
     * @throws { BusinessError } 66 - X509_V_ERR_EE_KEY_TOO_SMALL.
     * @throws { BusinessError } 67 - X509_V_ERR_CA_KEY_TOO_SMALL.
     * @throws { BusinessError } 68 - X509_V_ERR_CA_MD_TOO_WEAK.
     * @throws { BusinessError } 69 - X509_V_ERR_INVALID_CALL.
     * @throws { BusinessError } 70 - X509_V_ERR_STORE_LOOKUP.
     * @throws { BusinessError } 71 - X509_V_ERR_NO_VALID_SCTS.
     * @throws { BusinessError } 72 - X509_V_ERR_PROXY_SUBJECT_NAME_VIOLATION.
     * @throws { BusinessError } 73 - X509_V_ERR_OCSP_VERIFY_NEEDED.
     * @throws { BusinessError } 74 - X509_V_ERR_OCSP_VERIFY_FAILED.
     * @throws { BusinessError } 75 - X509_V_ERR_OCSP_CERT_UNKNOWN.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertification(cert: CertBlob, caCert: CertBlob): Promise<boolean>;

    /**
     * Verify certification to server.
     * @param { CertBlob } cert - Certificates to be verified.
     * @param { CertBlob } [caCert] - Incoming custom CA cert.
     * @returns { boolean } Returns true if the verify certification to server succeed, else returns false.
     * @throws { BusinessError } 1 - X509_V_ERR_UNSPECIFIED.
     * @throws { BusinessError } 2 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT.
     * @throws { BusinessError } 3 - X509_V_ERR_UNABLE_TO_GET_CRL.
     * @throws { BusinessError } 4 - X509_V_ERR_UNABLE_TO_DECRYPT_CERT_SIGNATURE.
     * @throws { BusinessError } 5 - X509_V_ERR_UNABLE_TO_DECRYPT_CRL_SIGNATURE.
     * @throws { BusinessError } 6 - X509_V_ERR_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY.
     * @throws { BusinessError } 7 - X509_V_ERR_CERT_SIGNATURE_FAILURE.
     * @throws { BusinessError } 8 - X509_V_ERR_CRL_SIGNATURE_FAILURE.
     * @throws { BusinessError } 9 - X509_V_ERR_CERT_NOT_YET_VALID.
     * @throws { BusinessError } 10 - X509_V_ERR_CERT_HAS_EXPIRED.
     * @throws { BusinessError } 11 - X509_V_ERR_CRL_NOT_YET_VALID.
     * @throws { BusinessError } 12 - X509_V_ERR_CRL_HAS_EXPIRED.
     * @throws { BusinessError } 13 - X509_V_ERR_ERROR_IN_CERT_NOT_BEFORE_FIELD.
     * @throws { BusinessError } 14 - X509_V_ERR_ERROR_IN_CERT_NOT_AFTER_FIELD.
     * @throws { BusinessError } 15 - X509_V_ERR_ERROR_IN_CRL_LAST_UPDATE_FIELD.
     * @throws { BusinessError } 16 - X509_V_ERR_ERROR_IN_CRL_NEXT_UPDATE_FIELD.
     * @throws { BusinessError } 17 - X509_V_ERR_OUT_OF_MEM.
     * @throws { BusinessError } 18 - X509_V_ERR_DEPTH_ZERO_SELF_SIGNED_CERT.
     * @throws { BusinessError } 19 - X509_V_ERR_SELF_SIGNED_CERT_IN_CHAIN.
     * @throws { BusinessError } 20 - X509_V_ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY.
     * @throws { BusinessError } 21 - X509_V_ERR_UNABLE_TO_VERIFY_LEAF_SIGNATURE.
     * @throws { BusinessError } 22 - X509_V_ERR_CERT_CHAIN_TOO_LONG.
     * @throws { BusinessError } 23 - X509_V_ERR_CERT_REVOKED.
     * @throws { BusinessError } 24 - X509_V_ERR_INVALID_CA.
     * @throws { BusinessError } 25 - X509_V_ERR_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 26 - X509_V_ERR_INVALID_PURPOSE.
     * @throws { BusinessError } 27 - X509_V_ERR_CERT_UNTRUSTED.
     * @throws { BusinessError } 28 - X509_V_ERR_CERT_REJECTED.
     * @throws { BusinessError } 29 - X509_V_ERR_SUBJECT_ISSUER_MISMATCH.
     * @throws { BusinessError } 30 - X509_V_ERR_AKID_SKID_MISMATCH.
     * @throws { BusinessError } 31 - X509_V_ERR_AKID_ISSUER_SERIAL_MISMATCH.
     * @throws { BusinessError } 32 - X509_V_ERR_KEYUSAGE_NO_CERTSIGN.
     * @throws { BusinessError } 33 - X509_V_ERR_UNABLE_TO_GET_CRL_ISSUER.
     * @throws { BusinessError } 34 - X509_V_ERR_UNHANDLED_CRITICAL_EXTENSION.
     * @throws { BusinessError } 35 - X509_V_ERR_KEYUSAGE_NO_CRL_SIGN.
     * @throws { BusinessError } 36 - X509_V_ERR_UNHANDLED_CRITICAL_CRL_EXTENSION.
     * @throws { BusinessError } 37 - X509_V_ERR_INVALID_NON_CA.
     * @throws { BusinessError } 38 - X509_V_ERR_PROXY_PATH_LENGTH_EXCEEDED.
     * @throws { BusinessError } 39 - X509_V_ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE.
     * @throws { BusinessError } 40 - X509_V_ERR_PROXY_CERTIFICATES_NOT_ALLOWED.
     * @throws { BusinessError } 41 - X509_V_ERR_INVALID_EXTENSION.
     * @throws { BusinessError } 42 - X509_V_ERR_INVALID_POLICY_EXTENSION.
     * @throws { BusinessError } 43 - X509_V_ERR_NO_EXPLICIT_POLICY.
     * @throws { BusinessError } 44 - X509_V_ERR_DIFFERENT_CRL_SCOPE.
     * @throws { BusinessError } 45 - X509_V_ERR_UNSUPPORTED_EXTENSION_FEATURE.
     * @throws { BusinessError } 46 - X509_V_ERR_UNNESTED_RESOURCE.
     * @throws { BusinessError } 47 - X509_V_ERR_PERMITTED_VIOLation.
     * @throws { BusinessError } 48 - X509_V_ERR_EXCLUDED_VIOLATION.
     * @throws { BusinessError } 49 - X509_V_ERR_SUBTREE_MINMAX.
     * @throws { BusinessError } 50 - X509_V_ERR_APPLICATION_VERIFICATION.
     * @throws { BusinessError } 51 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_TYPE.
     * @throws { BusinessError } 52 - X509_V_ERR_UNSUPPORTED_CONSTRAINT_SYNTAX.
     * @throws { BusinessError } 53 - X509_V_ERR_UNSUPPORTED_NAME_SYNTAX.
     * @throws { BusinessError } 54 - X509_V_ERR_CRL_PATH_VALIDATION_ERROR.
     * @throws { BusinessError } 55 - X509_V_ERR_PATH_LOOP.
     * @throws { BusinessError } 56 - X509_V_ERR_SUITE_B_INVALID_VERSION.
     * @throws { BusinessError } 57 - X509_V_ERR_SUITE_B_INVALID_ALGORITHM.
     * @throws { BusinessError } 58 - X509_V_ERR_SUITE_B_INVALID_CURVE.
     * @throws { BusinessError } 59 - X509_V_ERR_SUITE_B_INVALID_SIGNATURE_ALGORITHM.
     * @throws { BusinessError } 60 - X509_V_ERR_SUITE_B_LOS_NOT_ALLOWED.
     * @throws { BusinessError } 61 - X509_V_ERR_SUITE_B_CANNOT_SIGN_P_384_WITH_P_256.
     * @throws { BusinessError } 62 - X509_V_ERR_HOSTNAME_MISMATCH.
     * @throws { BusinessError } 63 - X509_V_ERR_EMAIL_MISMATCH.
     * @throws { BusinessError } 64 - X509_V_ERR_IP_ADDRESS_MISMATCH.
     * @throws { BusinessError } 65 - X509_V_ERR_DANE_NO_MATCH.
     * @throws { BusinessError } 66 - X509_V_ERR_EE_KEY_TOO_SMALL.
     * @throws { BusinessError } 67 - X509_V_ERR_CA_KEY_TOO_SMALL.
     * @throws { BusinessError } 68 - X509_V_ERR_CA_MD_TOO_WEAK.
     * @throws { BusinessError } 69 - X509_V_ERR_INVALID_CALL.
     * @throws { BusinessError } 70 - X509_V_ERR_STORE_LOOKUP.
     * @throws { BusinessError } 71 - X509_V_ERR_NO_VALID_SCTS.
     * @throws { BusinessError } 72 - X509_V_ERR_PROXY_SUBJECT_NAME_VIOLATION.
     * @throws { BusinessError } 73 - X509_V_ERR_OCSP_VERIFY_NEEDED.
     * @throws { BusinessError } 74 - X509_V_ERR_OCSP_VERIFY_FAILED.
     * @throws { BusinessError } 75 - X509_V_ERR_OCSP_CERT_UNKNOWN.
     * @syscap SystemCapability.Communication.NetStack
     * @since 11
     */
    verifyCertificationSync(cert: CertBlob, caCert?: CertBlob): boolean;
  }
}

export default ssl;
