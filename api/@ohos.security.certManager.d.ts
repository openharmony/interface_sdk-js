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
 * The **certManager** module provides system-level certificate management capabilities to implement management and 
 * secure use of certificates throughout their lifecycle (installation, storage, use, and destruction).
 *
 * @syscap SystemCapability.Security.CertificateManager
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace certificateManager {
  /**
   * Enumerates the error codes used in the certificate management APIs.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CMErrorCode {
    /**
     * The application does not have the permission to call the API.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_PERMISSION = 201,

    /**
     * The caller is not a system application.
     * 
     * This is a system API.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NOT_SYSTEM_APP = 202,

    /**
     * Invalid input parameter is found.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_INVALID_PARAMS = 401,

    /**
     * An internal error occurs when the interface is called.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_GENERIC = 17500001,

    /**
     * The certificate or credential does not exist.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_FOUND = 17500002,

    /**
     * The certificate or credential is in invalid format.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_ERROR_INCORRECT_FORMAT = 17500003,

    /**
     * The number of certificates or credentials has reached the limit.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 12 dynamic
     * @since 23 static
     */
    CM_ERROR_MAX_CERT_COUNT_REACHED = 17500004,

    /**
     * The application has not obtained user authorization.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 12 dynamic
     * @since 23 static
     */
    CM_ERROR_NO_AUTHORIZATION = 17500005,

    /**
     * The device enters the advanced security mode.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CM_ERROR_DEVICE_ENTER_ADVSECMODE = 17500007,

    /**
     * Indicates that the password is incorrect.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    CM_ERROR_PASSWORD_IS_ERR = 17500008,

    /**
     * The device does not support the specified certificate storage path.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    CM_ERROR_STORE_PATH_NOT_SUPPORTED = 17500009,

    /**
     * The USB credential service fails to be accessed.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    CM_ERROR_ACCESS_UKEY_SERVICE_FAILED = 17500010,

    /**
     * The input parameter validation fails.
     * 
     * For example, the parameter format is incorrect or the parameter range is invalid.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    CM_ERROR_PARAMETER_VALIDATION_FAILED = 17500011,
  }

  /**
   * Represents detailed information about a certificate.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertInfo {
    /**
     * Unique identifier of a certificate. The value contains up to 256 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Alias of a certificate. The value contains up to 128 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certAlias: string;

    /**
     * Certificate state. The value **true** indicates that the certificate is enabled, and **false** means the 
     * opposite.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    state: boolean;

    /**
     * Name of the certificate issuer. The value contains up to 256 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    issuerName: string;

    /**
     * Name of the certificate subject. The value contains up to 1024 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    subjectName: string;

    /**
     * Serial number of a certificate. The value contains up to 64 bytes. The value is a hexadecimal string, for example
     * , **62C2CB4DE8405E96**.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * Start date of a certificate. The value contains up to 32 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    notBefore: string;

    /**
     * Expiry date of a certificate. The value contains up to 32 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    notAfter: string;

    /**
     * Fingerprint of a certificate. The value contains up to 128 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    fingerprintSha256: string;

    /**
     * Binary data of a certificate. The value contains up to 8196 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    cert: Uint8Array;
  }

  /**
   * Represents brief information about a certificate.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CertAbstract {
    /**
     * Unique identifier of a certificate. The value contains up to 256 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Alias of a certificate. The value contains up to 128 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certAlias: string;

    /**
     * Certificate state. The value **true** indicates that the certificate is enabled, and **false** means the 
     * opposite.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    state: boolean;

    /**
     * Name of the certificate subject. The value contains up to 1024 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    subjectName: string;
  }

  /**
   * Represents detailed information about a credential.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Credential {
    /**
     * Type of a credential. The value contains up to 8 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Alias of a credential. The value contains up to 128 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Unique identifier of a credential. The value contains up to 256 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyUri: string;

    /**
     * Number of certificates contained in the credential.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certNum: int;

    /**
     * Number of keys contained in the credential.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyNum: int;

    /**
     * Binary data of a credential. The value contains up to 20480 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credentialData: Uint8Array;

    /**
     * Credential usage. The default value is **CertificatePurpose.PURPOSE_DEFAULT**.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    certPurpose?: CertificatePurpose;
  }

  /**
   * Represents brief information about a credential.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CredentialAbstract {
    /**
     * Type of a credential. The value contains up to 8 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Alias of a credential. The value contains up to 128 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Unique identifier of a credential. The value contains up to 256 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    keyUri: string;
  }

  /**
   * Represents the result returned.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMResult {
    /**
     * Brief certificate information.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certList?: Array<CertAbstract>;

    /**
     * Detailed certificate information.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    certInfo?: CertInfo;

    /**
     * Brief credential information.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credentialList?: Array<CredentialAbstract>;

    /**
     * Detailed credential information.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    credential?: Credential;

    /**
     * List of authorized applications.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    appUidList?: Array<string>;

    /**
     * Unique identifier of a certificate or credential. The value contains up to 256 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * Signature generated.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    outData?: Uint8Array;

    /**
     * Represents detailed information about a credential.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    credentialDetailList?: Array<Credential>;

    /**
     * Certificate URI list.
     * 
     * **Since**: 26.0.0
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    uriList?: Array<string>;
  }

  /**
   * Enumerates the purposes of using the key.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyPurpose {
    /**
     * Signs data.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_KEY_PURPOSE_SIGN = 4,

    /**
     * Verifies a signature.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_KEY_PURPOSE_VERIFY = 8
  }

  /**
   * Enumerates the digest algorithms that can be used for signing and signature verification.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyDigest {
    /**
     * No digest algorithm is required. If this option is used, the service needs to pass in the data with the digest 
     * generated for signing or signature verification.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_NONE = 0,

    /**
     * MD5.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_MD5 = 1,

    /**
     * SHA-1.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA1 = 2,

    /**
     * SHA-224.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA224 = 3,

    /**
     * SHA-256.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA256 = 4,

    /**
     * SHA-384.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA384 = 5,

    /**
     * SHA-512.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_DIGEST_SHA512 = 6,

    /**
     * SM3.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CM_DIGEST_SM3 = 7,
  }

  /**
   * Enumerates the padding modes that can be used for signing and signature verification.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CmKeyPadding {
    /**
     * No padding.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_NONE = 0,

    /**
     * PSS.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_PSS = 1,

    /**
     * PKCS1-V1_5.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    CM_PADDING_PKCS1_V1_5 = 2
  }

  /**
   * Represents a set of parameters used for signing or signature verification, including the key usage purpose, padding
   * mode, and digest algorithm.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMSignatureSpec {
    /**
     * Purpose of using the key.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    purpose: CmKeyPurpose;

    /**
     * Padding mode.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    padding?: CmKeyPadding;

    /**
     * Digest algorithm.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    digest?: CmKeyDigest;
  }

  /**
   * Represents the handle to a signing or signature verification operation.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CMHandle {
    /**
     * Handle of the initialization for signing and signature verification. The value contains up to 8 bytes.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 11 dynamic
     * @since 23 static
     */
    handle: Uint8Array;
  }

  /**
   * Installs a private credential. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Keystore file with a key pair and certificate. The value contains up to 20480
   *     bytes.
   * @param { string } keystorePwd - Password of the keystore file. The password cannot exceed 32 bytes.
   * @param { string } certAlias - Credential alias. Currently, the alias can contain only digits, letters, and
   *     underscores (_) and should not exceed 32 bytes.
   * @param { AsyncCallback<CMResult> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null** and **data** is **uri** in the [CMResult]{@link certificateManager.CMResult} object.
   *     Otherwise, **err** is an error object.
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
   * Installs a private credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Keystore file with a key pair and certificate. The value contains up to 20480
   *     bytes.
   * @param { string } keystorePwd - Password of the keystore file. The password cannot exceed 32 bytes.
   * @param { string } certAlias - Credential alias. Currently, the alias can contain only digits, letters, and
   *     underscores (_) and should not exceed 32 bytes.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **uri** in the
   *     [CMResult]{@link certificateManager.CMResult} object.
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
   * Uninstalls a private credential. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of the credential to be uninstalled. The value contains up to 256
   *     bytes.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * Uninstalls a private credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of the credential to be uninstalled. The value contains up to 256
   *     bytes.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains all private credentials. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { AsyncCallback<CMResult> } callback - Callback used to return the result. If all private credentials are
   *     obtained, **err** is **null**, and **data** is the **credentialList** attribute in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object. Otherwise, **err** is an error
   *     object.
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
   * Obtains all private credentials. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Promise used to return the result, which is the value of **credentialList** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Obtains detailed information about a private credential. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of the credential to be obtained. The value contains up to 256 bytes.
   * @param { AsyncCallback<CMResult> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null** and **data** is **credential** in the [CMResult]{@link certificateManager.CMResult} object.
   *     Otherwise, **err** is an error object.
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
   * Obtains detailed information about a private credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of the credential to be obtained. The value contains up to 256 bytes.
   * @returns { Promise<CMResult> } Promise used to return the private credential details obtained, that is,
   *     **credential** in the [CMResult]{@link certificateManager.CMResult} object.
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
   * Initializes the signing or signature verification operation using the specified credential. This API uses an 
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Unique identifier of the credential to be used. The value contains up to 256 bytes.
   * @param { CMSignatureSpec } spec - Parameters for the signing or signature verification operation.
   * @param { AsyncCallback<CMHandle> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the obtained **CMHandle**. Otherwise, **err** is an error object.
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
   * Initializes the signing or signature verification operation using the specified credential. This API uses a promise
   * to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } authUri - Unique identifier of the credential to be used. The value contains up to 256 bytes.
   * @param { CMSignatureSpec } spec - Parameters for the signing or signature verification operation.
   * @returns { Promise<CMHandle> } Promise used to return the operation result, that is, the **CMHandle** object.
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
   * Updates the data for the signing or signature verification operation. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @param { Uint8Array } data - Data to be signed or verified.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * Updates the data for the signing or signature verification operation. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @param { Uint8Array } data - Data to be signed or verified.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Finishes the signing operation. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @param { AsyncCallback<CMResult> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the signature, that is, **outData** of the
   *     [CMResult]{@link certificateManager.CMResult} object. Otherwise, **err** is an error object.
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
   * Finishes the signature verification operation. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @param { Uint8Array } signature - Data to sign or verify.
   * @param { AsyncCallback<CMResult> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * Finishes the signing or signature verification operation. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @param { Uint8Array } signature - Signature data used for signature verification. This parameter needs to be
   *     specified only for signature verification.
   * @returns { Promise<CMResult> } Promise used to return the signature of a signing operation, that is, **outData** in
   *     the [CMResult]{@link certificateManager.CMResult} object. For a signature verification operation, the promise
   *     returns no value.
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
   * Aborts the signing or signature verification operation. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * Aborts the signing or signature verification operation. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } handle - Handle of initialization. The value contains up to 8 bytes.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains detailed information about a public credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of a user's public credential. The value contains up to 256 bytes.
   * @returns { Promise<CMResult> } Promise used to return the detailed information about the user's public credential
   *     obtained, that is, **credential** in the [CMResult]{@link certificateManager.CMResult} object.
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
   * Checks whether this application is authorized by the specified user credential. This API uses a promise to return 
   * the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of the credential authorized by the user to the application. The value
   *     contains up to 256 bytes.
   * @returns { Promise<boolean> } Promise used to return whether the application is authorized. The value **true**
   *     means authorized; the value **false** means the opposite.
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
   * Obtains all user trusted root CA certificates of the device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **certList** in the
   *     [CMResult]{@link certificateManager.CMResult} object.
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
   * Obtains the detailed information about a user root CA certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } certUri - Unique identifier of a user's root CA certificate. The value contains up to 256 bytes.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **certInfo** in the
   *     [CMResult]{@link certificateManager.CMResult} object.
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
   * Obtains all system credentials. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } Promise used to return the result, which is the value of **credentialList** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Obtains the credentials for installing the application. This API uses a promise to return the result 
   * asynchronously.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @returns { Promise<CMResult> } Promise used to return credentials obtained, which is **credentialList** in
   *     [CMResult]{@link certificateManager.CMResult}.
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
   * Obtains the certificate storage path.
   *
   * @param { CertStoreProperty } property - Storage information about the target certificate.
   * @returns { string } Certificate storage path.
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
   * Installs a user CA certificate.
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { Uint8Array } cert - CA certificate data. The value contains up to 8196 bytes.
   * @param { CertScope } certScope - Scope of the CA certificate.
   * @returns { CMResult } CA certificate installation result. The **uri** property in **CMResult** is returned if the
   *     certificate is installed successfully.
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
   * Enumerates the credential storage levels.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum AuthStorageLevel {
    /**
     * The credential can be accessed after the device is started.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL1 = 1,

    /**
     * The credential can be accessed after the device is unlocked for the first time.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL2 = 2,

    /**
     * The credential can be accessed after the device is unlocked.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    EL4 = 4
  }

  /**
   * Represents the storage information about a certificate, including the certificate type and location.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export interface CertStoreProperty {
    /**
     * Type of the certificate.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    certType: CertType;

    /**
     * Scope of the certificate. This parameter is mandatory when **certType** is **CA_CERT_USER**.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    certScope?: CertScope;

    /**
     * Certificate algorithm. This parameter is valid only when **certType** is set to **CA_CERT_SYSTEM**. The default 
     * value is **INTERNATIONAL**.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    certAlg?: CertAlgorithm;
  }

  /**
   * Enumerates the certificate types.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CertType {
    /**
     * System CA certificate.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CA_CERT_SYSTEM = 0,

    /**
     * User CA certificate.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CA_CERT_USER = 1
  }

  /**
   * Installs a private credential and specifies its storage level. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { Uint8Array } keystore - Keystore file with a key pair and certificate. The value contains up to 20480
   *     bytes.
   * @param { string } keystorePwd - Password of the keystore file.<br>The value contains up to 32 bytes.
   * @param { string } certAlias - Alias of the credential entered by the user. Only digits, letters, and underscores (_
   *     ) are supported.<br>The value should contain up to 32 bytes.
   * @param { AuthStorageLevel } level - Credential storage level.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **uri** in the
   *     [CMResult]{@link certificateManager.CMResult} object.
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
   * Obtains the user root CA certificates based on the certificate scope. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { CertScope } scope - Scope of the certificates to obtain.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **certList** in the
   *     [CMResult]{@link certificateManager.CMResult} object.
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
   * Enumerates the certificate scopes.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CertScope {
    /**
     * The certificate is accessible only to the current user.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    CURRENT_USER = 1,

    /**
     * The certificate is accessible to all users.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 18 dynamic
     * @since 23 static
     */
    GLOBAL_USER = 2
  }

  /**
   * Uninstalls a user CA certificate.
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERT or ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { string } certUri - Unique identifier of the certificate to be uninstalled. The value contains up to 256
   *     bytes.
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
   * Enumerates the certificate algorithms.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CertAlgorithm {
    /**
     * International cryptographic algorithm, such as RSA and NIST ECC.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    INTERNATIONAL = 1,

    /**
     * Commercial cryptographic algorithm, such as SM2 and SM4.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 20 dynamic
     * @since 23 static
     */
    SM = 2,
  }

  /**
   * Enumerates the usage of a credential.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  export enum CertificatePurpose {
    /**
     * Default usage, which is used for credential signing.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_DEFAULT = 0,

    /**
     * Query of all credentials.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_ALL = 1,

    /**
     * Credential signing.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_SIGN = 2,

    /**
     * Credential encryption.
     *
     * @syscap SystemCapability.Security.CertificateManager
     * @since 22 dynamic
     * @since 23 static
     */
    PURPOSE_ENCRYPT = 3,
  }

  /**
   * Obtains the details of a USB credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } keyUri - Unique identifier of a USB credential. The value contains up to 256 bytes.
   * @param { UkeyInfo } ukeyInfo - Attributes of a USB credential.
   * @returns { Promise<CMResult> } Promise used to return the obtained USB credential details.
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
   * Provides USB credential attributes.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @since 22 dynamic
   * @since 23 static
   */
  export interface UkeyInfo {
    /**
      * Credential usage.
      *
      * @syscap SystemCapability.Security.CertificateManager
      * @since 22 dynamic
      * @since 23 static
      */
     certPurpose?: CertificatePurpose;
  }

  /**
   * Obtains details about a CA certificate trusted by the system. This API is called only by the certificate management
   * application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } certUri - Unique identifier of the certificate. You can obtain the value through
   *     [getSystemTrustedCertificateList]{@link certificateManager.getSystemTrustedCertificateList}.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **certInfo** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Obtains the list of CA certificates trusted by the system. This API is called only by the certificate management 
   * application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **certList** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Sets the status of a CA certificate. Currently, only the status of a user's CA certificate can be set. This API is 
   * called only by the certificate management application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { string } certUri - Unique identifier of the certificate. Currently, only user CA certificates are
   *     supported.
   * @param { CertType } certType - Certificate type. Currently, only the status of user CA certificates (
   *     **CA_CERT_USER**) can be set.
   * @param { boolean } enabled - Whether the certificate is enabled. **true**: enabled; **false**: disabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Represents the certificate file format.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export enum CertFileFormat {
      /**
       * The certificate file format is PEM or DER.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      PEM_DER = 0,

      /**
       * The certificate file format is P7B.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      P7B = 1,
  }

  /**
   * Represents the certificate data in binary format.
   *
   * @syscap SystemCapability.Security.CertificateManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export interface CertBlob {
      /**
       * Certificate file data.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      certData: Uint8Array;

      /**
       * Certificate file format.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      certFormat? : CertFileFormat;

      /**
       * Scope of the CA certificate.
       *
       * @syscap SystemCapability.Security.CertificateManager
       * @FaAndStageModel
       * @since 26.0.0 dynamic&static
       */
      certScope? : CertScope;
  }

  /**
   * Installs a user CA certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_ENTERPRISE_USER_TRUSTED_CERTorohos.permission.ACCESS_USER_TRUSTED_CERT
   * @param { CertBlob } certificate - Certificate information.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **uri** in the
   *     [CMResult]{@link certificateManager.CMResult} object.
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
   * Uninstalls all CA certificates trusted by the user. This API is called only by the certificate management 
   * application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_USER_TRUSTED_CERT
   * @returns { Promise<void> } Promise that returns no value.
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
   * Installs the public credential of the user. This API is called only by the certificate management application. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { Uint8Array } keystore - Keystore file containing the key pair and certificate. Only the P12 format is
   *     supported.
   * @param { string } keystorePwd - Password of the keystore file.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **uri** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Uninstalls the public credential of the user. This API is called only by the certificate management application. 
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Unique identifier of a user's public credential.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the public credentials of all users. This API is called only by the certificate management application. 
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **credentialDetailList** in
   *     the [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
   *     <br>Note: If the number of public credentials is 0, the value of **CMResult** is **undefined**.
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
   * Grants the permission for an application to use the public credentials of a user. This API is called only by the 
   * certificate management application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Unique identifier of a user's public credential.
   * @param { int } clientAppUid - Application UID.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **uri** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Obtains the list of authorized applications of a user's public credential. This API is called only by the 
   * certificate management application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Unique identifier of a user's public credential.
   * @returns { Promise<CMResult> } Promise used to return the result, which is the value of **appUidList** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Removes the permission for an application to use the public credentials of a user. This API is called only by the 
   * certificate management application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { string } keyUri - Unique identifier of a user's public credential.
   * @param { int } clientAppUid - Application UID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains all private credentials of a specified application. This API is called only by the certificate management 
   * application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   * @param { int } appUid - Application UID.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **credentialDetailList** in
   *     the [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
   *     <br>Note: If the number of private credentials is 0, the returned **CMResult** is **undefined**.
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
   * Installs the system application credential. This API is called only by the certificate management application. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { Uint8Array } keystore - Keystore file containing the key pair and certificate. Only the P12 format is
   *     supported.
   * @param { string } keystorePwd - Password of the keystore file.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **uri** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Obtains the credential details of the system application. This API is called only by the certificate management 
   * application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { string } keyUri - Unique identifier of a system application credential.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **credential** in the
   *     [CMResult]{@link @ohos.security.certManager:certificateManager.CMResult} object.
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
   * Uninstalls the credential of the system application. This API is called only by the certificate management 
   * application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @param { string } keyUri - Unique identifier of a system application credential.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the list of USB credential certificates. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { string } ukeyProvider - USB credential provider.
   * @param { UkeyInfo } ukeyInfo - Attributes of a USB credential.
   * @returns { Promise<CMResult> } Promise used to return the operation result, that is, **credentialDetailList** in
   *     the [CMResult]{@link certificateManager.CMResult} object.
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
   * Uninstalls all system application credentials and public user credentials. This API is called only by the 
   * certificate management application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER and ohos.permission.ACCESS_CERT_MANAGER_INTERNAL
   *     and ohos.permission.ACCESS_SYSTEM_APP_CERT
   * @returns { Promise<void> } Promise that returns no value.
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
}

export default certificateManager;