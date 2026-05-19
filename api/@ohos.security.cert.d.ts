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
 * The certificate algorithm library framework provides certificate-related APIs. The **certFramework** module depends
 * on the basic algorithm capabilities of the Crypto framework. For details, see
 * [Crypto Framework]{@link @ohos.security.cryptoFramework:cryptoFramework}.
 *
 * @syscap SystemCapability.Security.Cert
 * @crossplatform [since 11]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace cert {
  /**
   * Enumerates the error codes.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum CertResult {
    /**
     * Invalid parameters.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_PARAMS = 401,

    /**
     * This operation is not supported.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_SUPPORT = 801,

    /**
     * Memory error.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_OUT_OF_MEMORY = 19020001,

    /**
     * Runtime error.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_RUNTIME_ERROR = 19020002,

    /**
     * Parameter check failed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ERR_PARAMETER_CHECK_FAILED = 19020003,

    /**
     * Crypto operation error.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CRYPTO_OPERATION = 19030001,

    /**
     * The certificate signature verification failed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_SIGNATURE_FAILURE = 19030002,

    /**
     * The certificate has not taken effect.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_NOT_YET_VALID = 19030003,

    /**
     * The certificate has expired.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CERT_HAS_EXPIRED = 19030004,

    /**
     * Failed to obtain the certificate issuer.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_UNABLE_TO_GET_ISSUER_CERT_LOCALLY = 19030005,

    /**
     * The key cannot be used for signing a certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_KEYUSAGE_NO_CERTSIGN = 19030006,

    /**
     * The key cannot be used for digital signature.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_KEYUSAGE_NO_DIGITAL_SIGNATURE = 19030007,

    /**
     * The password for the private key is incorrect.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    ERR_MAYBE_WRONG_PASSWORD = 19030008,

    /**
     * Untrusted certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_UNTRUSTED = 19030009,

    /**
     * The certificate has been revoked.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_HAS_REVOKED = 19030010,

    /**
     * Unsupported critical extension.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_UNKNOWN_CRITICAL_EXTENSION = 19030011,

    /**
     * Host name mismatch in the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_HOSTNAME_MISMATCH = 19030012,

    /**
     * Email address mismatch in the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_EMAIL_ADDRESS_MISMATCH = 19030013,

    /**
     * Key usage mismatch in the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CERT_KEYUSAGE_MISMATCH = 19030014,

    /**
     * Failed to obtain the certificate revocation list.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_NOT_FOUND = 19030015,

    /**
     * The certificate revocation list does not take effect.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_NOT_YET_VALID = 19030016,

    /**
     * The certificate revocation list has expired.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_HAS_EXPIRED = 19030017,

    /**
     * Failed to verify the signature of the certificate revocation list.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_SIGNATURE_FAILURE = 19030018,

    /**
     * Failed to find the issuer of the certificate revocation list.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_CRL_ISSUER_NOT_FOUND = 19030019,

    /**
     * Failed to obtain the OCSP response.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_RESPONSE_NOT_FOUND = 19030020,

    /**
     * Invalid OCSP response.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_RESPONSE_INVALID = 19030021,

    /**
     * Failed to verify the OCSP signature.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_SIGNATURE_FAILURE = 19030022,

    /**
     * Unknown OCSP certificate status.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_OCSP_CERT_STATUS_UNKNOWN = 19030023,

    /**
     * Network connection timed out.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_NETWORK_TIMEOUT = 19030024
  }

  /**
   * Encapsulates binary data. The core field **data** is of the Uint8Array type.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataBlob {
    /**
     * Indicates the content of data blob.
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
   * Defines a list of data arrays.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataArray {
    /**
     * Indicates the content of data array.
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
   * Enumerates the certificate encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum EncodingFormat {
    /**
     * Distinguished Encoding Rules (DER) format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FORMAT_DER = 0,

    /**
     * Privacy-Enhanced Mail (PEM) format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FORMAT_PEM = 1,

    /**
     * PKCS #7 format.
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
   * Enumerates the certificate fields that can be obtained.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CertItemType {
    /**
     * Information to be signed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_TBS = 0,

    /**
     * Public key of the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_PUBLIC_KEY = 1,

    /**
     * Unique ID of the certificate issuer.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_ISSUER_UNIQUE_ID = 2,

    /**
     * Unique ID of the certificate subject.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CERT_ITEM_TYPE_SUBJECT_UNIQUE_ID = 3,

    /**
     * Certificate extensions, each of which is identified by a unique object identifier (OID).
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
   * Enumerates the OID types of the certificate extensions that can be obtained.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExtensionOidType {
    /**
     * All object identifiers.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_ALL = 0,

    /**
     * Object identifier whose **critical** is **true**.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_OID_TYPE_CRITICAL = 1,

    /**
     * Object identifier whose **critical** is **false**.
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
   * Enumerates the object types in certificate extensions that can be obtained.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ExtensionEntryType {
    /**
     * Entire object.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY = 0,

    /**
     * Critical attribute of the object.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EXTENSION_ENTRY_TYPE_ENTRY_CRITICAL = 1,

    /**
     * Data of the object.
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
   * Defines a certificate binary array in encoding format.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface EncodingBlob {
    /**
     * Certificate data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
    /**
     * Certificate encoding format.
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
   * Defines the certificate chain data, which is passed in as input parameters during certificate chain verification.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CertChainData {
    /**
     * Certificate data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
    /**
     * Number of certificates contained in the input data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    count: int;
    /**
     * Certificate encoding format.
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
   * Enumerates the obtained encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum EncodingType {
    /**
     * UTF-8.
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
   * Provides APIs for X.509 certificate operations.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface X509Cert {
    /**
     * Verifies the certificate signature. This API uses an asynchronous callback to return the result.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If **error** is **null**, the
     *     signature verification is successful. If **error** is not **null**, the signature verification fails.
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
     * Verifies the certificate signature. This API uses a promise to return the result.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Obtains the serialized X.509 certificate data. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback invoked to return the serialized X.509 certificate
     *     data obtained.
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
     * Obtains the serialized X.509 certificate data. This API uses a promise to return the result.
     *
     * @returns { Promise<EncodingBlob> } Serialized X.509 certificate data obtained.
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
     * Obtains the public key of this X.509 certificate.
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
     * Checks the validity period of this X.509 certificate.
     *
     * @param { string } date - Date in the ASN.1 format.
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
     * Obtains the X.509 certificate version.
     *
     * @returns { int } X.509 certificate version obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * Obtains the X.509 certificate serial number.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 10. Use
     * > [getCertSerialNumber]{@link cert.X509Cert.getCertSerialNumber} instead.
     *
     * @returns { number } X.509 certificate serial number obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.security.cert.X509Cert.getCertSerialNumber
     */
    getSerialNumber(): number;

    /**
     * Obtains the X.509 certificate serial number.
     *
     * @returns { bigint } X.509 certificate serial number obtained.
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
     * Obtains the X.509 certificate issuer.
     *
     * > **NOTE**
     * >
     * > The obtained X.509 certificate issuer name contains a string terminator.
     *
     * @returns { DataBlob } X.509 certificate issuer obtained.
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
     * Obtains the issuer name of an X.509 certificate based on the encoding type.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } Issuer name of an X.509 certificate, separated by commas (,).
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
     * Obtains the subject of this X.509 certificate.
     *
     * > **NOTE**
     * >
     * > The obtained X.509 certificate subject name contains a string terminator.
     *
     * @param { EncodingType } [encodingType] - Encoding type. If this parameter is set, the subject name in UTF-8
     *     format is to be obtained. If this parameter is not set, the subject name in ASCII encoding format is obtained
     *     by default.<br>This parameter is available since API version 12. [since 12]
     * @returns { DataBlob } Subject name of an X.509 certificate, separated by commas (,) after being converted into a
     *     string.
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
     * Obtains the start time of this X.509 certificate.
     *
     * @returns { string } Certificate start time obtained, in ASN.1 format.
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
     * Obtains the expiration time of this X.509 certificate.
     *
     * @returns { string } Certificate expiration time obtained, in ASN.1 format.
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
     * Obtains the signature data of this X.509 certificate.
     *
     * @returns { DataBlob } Signature data obtained.
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
     * Obtains the signing algorithm of this X.509 certificate.
     *
     * @returns { string } X.509 certificate signing algorithm obtained.
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
     * Obtains the object identifier (OID) of the X.509 certificate signing algorithm. OIDs are allocated by the
     * International Organization for Standardization (ISO).
     *
     * @returns { string } OID obtained. It will be truncated if the length exceeds 128 bytes.
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
     * Obtains the signing algorithm parameters of this X.509 certificate.
     *
     * @returns { DataBlob } X.509 certificate signing algorithm parameters obtained.
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
     * Obtains the key usage of this X.509 certificate.
     *
     * @returns { DataBlob } Key usage of the X.509 certificate obtained.
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
     * Obtains the usage of the extended key of this X.509 certificate.
     *
     * @returns { DataArray } Usage of the extended key obtained.
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
     * Obtains the basic constraints for obtaining this X.509 certificate.
     *
     * @returns { int } Basic constraints obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getBasicConstraints(): int;

    /**
     * Obtains the Subject Alternative Names (SANs) of this X.509 certificate.
     *
     * > **NOTE**
     * >
     * > The obtained SANs contain a string terminator.
     *
     * @returns { DataArray } SANs obtained.
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
     * Obtains the Issuer Alternative Names (IANs) of this X.509 certificate.
     *
     * > **NOTE**
     * >
     * > The obtained IANs contain a string terminator.
     *
     * @returns { DataArray } IANs obtained.
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
     * Obtains the fields in the X.509 certificate.
     *
     * @param { CertItemType } itemType - Certificate field to obtain.
     * @returns { DataBlob } Fields in DER format.
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
     * Checks whether this certificate matches the specified parameters.
     *
     * @param { X509CertMatchParameters } param - Parameters specified for matching the certificate.
     * @returns { boolean } Returns **true** if the certificate matches the parameters specified; returns **false**
     *     otherwise.
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
     * Obtains the CRL distribution points of this X.509 certificate.
     *
     * @returns { DataArray } URIs of the distribution points for this X.509 CRL obtained.
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
     * Obtains the distinguished name (DN) of the X.509 certificate issuer.
     *
     * @returns { X500DistinguishedName } DN object obtained.
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
     * Obtains the DN of the X.509 certificate subject (holder).
     *
     * @returns { X500DistinguishedName } DN object obtained.
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
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
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
     * Converts this object into a string in the specified encoding format.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } String obtained.
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
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value obtained.
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
     * Obtains the certification extensions in DER format.
     *
     * @returns { CertExtension } Certificate extensions object obtained.
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
   * Creates an **X509Cert** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @param { AsyncCallback<X509Cert> } callback - Callback invoked to return the **X509Cert** instance created.
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
   * Creates an **X509Cert** instance. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @returns { Promise<X509Cert> } Returns the **X509Cert** instance created.
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
   * Provides APIs for operating the certificate extensions.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CertExtension {
    /**
     * Obtains the serialized data of the certificate extensions.
     *
     * @returns { EncodingBlob } Serialized data obtained.
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
     * Obtains the OIDs of the certificate extensions.
     *
     * @param { ExtensionOidType } valueType - Type of the OIDs to obtain.
     * @returns { DataArray } OIDs obtained.
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
     * Obtains the certificate extension object information.
     *
     * @param { ExtensionEntryType } valueType - Type of the information to obtain.
     * @param { DataBlob } oid - OID of the certificate extension to obtain.
     * @returns { DataBlob } Certificate extension object information obtained.
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
     * Checks whether the certificate is a CA certificate.
     *
     * @returns { int } If the key purpose in the certificate extension contains signing and the CA field in the basic
     *     constraints is **true**, the certificate is a CA certificate. Returns **-1** if the certificate is not a CA
     *     certificate; returns the path length in the basic constraints otherwise. Returns **-2** if the certificate is
     *     a CA certificate but the path length is not specified in the basic constraints, which means the path length
     *     is not limited.
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
     * Checks whether there is critical extension that is not supported.
     *
     * @returns { boolean } Returns **true** if unsupported critical extension is found; returns **false** otherwise.
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
   * Creates a certificate extension object. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized data obtained.
   * @param { AsyncCallback<CertExtension> } callback - Callback for the **CertExtension** instance.
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
   * Creates a certificate extension object. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized data obtained.
   * @returns { Promise<CertExtension> } Promise used to return the **CertExtension** instance created.
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
   * Provides APIs for operating the revoked certificates.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use
   * > [X509CRLEntry]{@link cert.X509CrlEntry} instead.
   *
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert.X509CRLEntry
   */
  interface X509CrlEntry {
    /**
     * Obtains the serialized data of this revoked certificate. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getEncoded]{@link cert.X509CRL.getEncoded(callback: AsyncCallback<EncodingBlob>)} instead.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback invoked to return the serialized data of the revoked
     *     certificate.
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
     * Obtains the serialized data of this revoked certificate. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getEncoded]{@link cert.X509CRL.getEncoded()} instead.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized data of the revoked certificate
     *     obtained.
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
     * Obtains the serial number of this revoked certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getSerialNumber]{@link cert.X509CRLEntry.getSerialNumber} instead.
     *
     * @returns { number } Serial number of the revoked certificate obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRLEntry#getSerialNumber
     */
    getSerialNumber(): number;

    /**
     * Obtains the issuer of a revoked certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getCertIssuer]{@link cert.X509CRLEntry.getCertIssuer()} instead.
     *
     * @returns { DataBlob } Issuer of the revoked certificate obtained.
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
     * Obtains the date when the certificate is revoked.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRLEntry.getRevocationDate]{@link cert.X509CRLEntry.getRevocationDate} instead.
     *
     * @returns { string } Certificate revocation date, in ASN.1 format.
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
   * Provides APIs for operating the revoked certificates.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRLEntry {
    /**
     * Obtains the serialized data of this revoked certificate. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback invoked to return the serialized data of the revoked
     *     certificate.
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
     * Obtains the serialized data of this revoked certificate. This API uses a promise to return the result.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized data of the revoked certificate
     *     obtained.
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
     * Obtains the serial number of this revoked certificate.
     *
     * @returns { bigint } Serial number of the revoked certificate obtained.
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
     * Obtains the issuer of a revoked certificate.
     *
     * > **NOTE**
     * >
     * > The obtained issuer of this revoked certificate contains a string terminator.
     *
     * @returns { DataBlob } Issuer of the revoked certificate obtained.
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
     * Obtains the issuer information of a revoked certificate based on the encoding type.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } Issuer information of a revoked certificate, separated by commas (,).
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
     * Obtains the date when the certificate was revoked.
     *
     * @returns { string } Promise used to return the certificate revocation date obtained.
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
     * Obtains the CRL extensions.
     *
     * @returns { DataBlob } X.509 CRL extensions obtained.
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
     * Checks whether this CRL entry has extensions.
     *
     * @returns { boolean } Returns **true** if the CRL entry has extension; returns **false** otherwise.
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
     * Obtains the distinguished name (DN) of the X.509 certificate issuer.
     *
     * @returns { X500DistinguishedName } DN object obtained.
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
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
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
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value obtained.
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
     * Obtains the certification extensions in DER format.
     *
     * @returns { CertExtension } Certificate extensions object obtained.
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
   * Provides APIs for X.509 certificate CRL operations.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use [X509CRL]{@link cert.X509Crl}
   * > instead.
   *
   * @syscap SystemCapability.Security.Cert
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cert.X509CRL
   */
  interface X509Crl {
    /**
     * Checks whether an X.509 certificate is revoked.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.isRevoked]{@link cert.X509CRL.isRevoked} instead.
     *
     * @param { X509Cert } cert - X.509 certificate to check.
     * @returns { boolean } Whether the certificate is revoked. The value **true** indicates that the certificate is
     *     revoked, and **false** indicates the opposite.
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
     * Obtains the CRL type.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getType]{@link cert.X509CRL.getType} instead.
     *
     * @returns { string } CRL type obtained.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getType
     */
    getType(): string;

    /**
     * Obtains the serialized X.509 CRL data. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getEncoded]{@link cert.X509CRL.getEncoded(callback: AsyncCallback<EncodingBlob>)} instead.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback invoked to return the serialized X.509 CRL data
     *     obtained.
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
     * Obtains the serialized X.509 CRL data. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getEncoded]{@link cert.X509CRL.getEncoded()} instead.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized X.509 CRL data obtained.
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
     * Verifies the signature of the X.509 CRL. This API uses an asynchronous callback to return the result. The RSA
     * algorithm is supported.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.verify]{@link cert.X509CRL.verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>)}
     * > instead.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If **error** is **null**, the
     *     signature verification is successful. If **error** is not **null**, the signature verification fails.
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
     * Verifies the signature of the X.509 CRL. This API uses a promise to return the result. The RSA algorithm is
     * supported.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.verify]{@link cert.X509CRL.verify(key: cryptoFramework.PubKey)} instead.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Obtains the version of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getVersion]{@link cert.X509CRL.getVersion} instead.
     *
     * @returns { number } Obtains the version of the X.509 CRL.
     * @syscap SystemCapability.Security.Cert
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.security.cert.X509CRL#getVersion
     */
    getVersion(): number;

    /**
     * Obtains the issuer of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getIssuerName]{@link cert.X509CRL.getIssuerName()} instead.
     *
     * @returns { DataBlob } Issuer of the X.509 CRL obtained.
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
     * Obtains the last update date of this X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getLastUpdate]{@link cert.X509CRL.getLastUpdate} instead.
     *
     * @returns { string } Last update date of the X.509 CRL, in ASN.1 format.
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
     * Obtains the next update date of this CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getNextUpdate]{@link cert.X509CRL.getNextUpdate} instead.
     *
     * @returns { string } Next update date of the CRL, in ASN.1 format.
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
     * Obtains the revoked X.509 certificate based on the specified serial number of the certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCert]{@link cert.X509CRL.getRevokedCert} instead.
     *
     * @param { number } serialNumber - Serial number of the certificate.
     * @returns { X509CrlEntry } Revoked X.509 certificate obtained.
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
     * Obtains the revoked X.509 certificate based on the specified certificate.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use X509
     * > CRL.getRevokedCertWithCert](#getrevokedcertwithcert11) instead.
     *
     * @param { X509Cert } cert - Certificate based on which the revoked certificate is obtained.
     * @returns { X509CrlEntry } Revoked X.509 certificate obtained.
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
     * Obtains all the revoked X.509 certificates. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCerts]{@link cert.X509CRL.getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>)}
     * > instead.
     *
     * @param { AsyncCallback<Array<X509CrlEntry>> } callback - Callback invoked to return the revoked X.509
     *     certificates obtained.
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
     * Obtains all the revoked X.509 certificates. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getRevokedCerts]{@link cert.X509CRL.getRevokedCerts()} instead.
     *
     * @returns { Promise<Array<X509CrlEntry>> } A list of revoked X.509 certificates.
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
     * Obtains the DER-encoded CRL information, that is, **tbsCertList** from this CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getTBSInfo]{@link cert.X509CRL.getTBSInfo} instead.
     *
     * @returns { DataBlob } **tbsCertList** information obtained.
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
     * Obtains the signature data of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignature]{@link cert.X509CRL.getSignature} instead.
     *
     * @returns { DataBlob } Signature data of the X.509 CRL obtained.
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
     * Obtains the signing algorithm of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignatureAlgName]{@link cert.X509CRL.getSignatureAlgName} instead.
     *
     * @returns { string } Signing algorithm obtained.
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
     * Obtains the OID of the X.509 CRL signing algorithm. OIDs are allocated by the International Organization for
     * Standardization (ISO).
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignatureAlgOid]{@link cert.X509CRL.getSignatureAlgOid} instead.
     *
     * @returns { string } OID of the X.509 CRL signing algorithm obtained.
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
     * Obtains the parameters of the X.509 CRL signing algorithm.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use
     * > [X509CRL.getSignatureAlgParams]{@link cert.X509CRL.getSignatureAlgParams} instead.
     *
     * @returns { DataBlob } Algorithm parameters obtained.
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
   * Creates an **X509Crl** instance. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use
   * > [cert.createX509CRL]{@link cert.createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>)} instead.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data.
   * @param { AsyncCallback<X509Crl> } callback - Callback invoked to return the **X509Crl** instance created.
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
   * Creates an **X509Crl** instance. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 11. Use
   * > [cert.createX509CRL]{@link cert.createX509CRL(inStream: EncodingBlob)} instead.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data.
   * @returns { Promise<X509Crl> } **X509Crl** instance created.
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
   * Provides APIs for managing a CRL object.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRL {
    /**
     * Checks whether an X.509 certificate is revoked.
     *
     * @param { X509Cert } cert - X.509 certificate to check.
     * @returns { boolean } Whether the certificate is revoked. The value **true** indicates that the certificate is
     *     revoked, and **false** indicates the opposite.
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
     * Obtains the CRL type.
     *
     * @returns { string } CRL type obtained.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * Obtains the serialized X.509 CRL data. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EncodingBlob> } callback - Callback invoked to return the serialized X.509 CRL data
     *     obtained.
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
     * Obtains the serialized X.509 CRL data. This API uses a promise to return the result.
     *
     * @returns { Promise<EncodingBlob> } Promise used to return the serialized X.509 CRL data obtained.
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
     * Verifies the signature of the X.509 CRL. This API uses an asynchronous callback to return the result. The RSA
     * algorithm is supported.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If **error** is **null**, the
     *     signature verification is successful. If **error** is not **null**, the signature verification fails.
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
     * Verifies the signature of the X.509 CRL. This API uses a promise to return the result. The RSA algorithm is
     * supported.
     *
     * @param { cryptoFramework.PubKey } key - Public key used for signature verification.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Obtains the version of the X.509 CRL.
     *
     * @returns { int } Obtains the version of the X.509 CRL.
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * Obtains the issuer of the X.509 CRL.
     *
     * > **NOTE**
     * >
     * > The obtained X.509 CRL issuer name contains a string terminator.
     *
     * @returns { DataBlob } Issuer of the X.509 CRL obtained.
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
     * Obtains the issuer name of an X.509 CRL based on the encoding type.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } Issuer name of an X.509 CRL, separated by commas (,).
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
     * Obtains the last update date of this X.509 CRL.
     *
     * @returns { string } Last update date of the X.509 CRL, in ASN.1 format.
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
     * Obtains the next update date of this CRL.
     *
     * @returns { string } Next update date of the CRL, in ASN.1 format.
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
     * Obtains the revoked X.509 certificate based on the specified serial number of the certificate.
     *
     * @param { bigint } serialNumber - Serial number of the certificate.
     * @returns { X509CRLEntry } Revoked X.509 certificate obtained.
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
     * Obtains the revoked X.509 certificate based on the specified certificate.
     *
     * @param { X509Cert } cert - Certificate based on which the revoked certificate is obtained.
     * @returns { X509CRLEntry } Revoked X.509 certificate obtained.
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
     * Obtains all the revoked X.509 certificates. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<X509CRLEntry>> } callback - Callback invoked to return the revoked X.509
     *     certificates obtained.
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
     * Obtains all the revoked X.509 certificates. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<X509CRLEntry>> } A list of revoked X.509 certificates.
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
     * Obtains the DER-encoded CRL information, that is, **tbsCertList** from this CRL.
     *
     * @returns { DataBlob } **tbsCertList** information obtained.
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
     * Obtains the signature data of the X.509 CRL.
     *
     * @returns { DataBlob } Signature data of the X.509 CRL obtained.
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
     * Obtains the signing algorithm of the X.509 CRL.
     *
     * @returns { string } Signing algorithm obtained.
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
     * Obtains the OID of the X.509 CRL signing algorithm. OIDs are allocated by the International Organization for
     * Standardization (ISO).
     *
     * @returns { string } OID of the X.509 CRL signing algorithm obtained.
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
     * Obtains the parameters of the X.509 CRL signing algorithm.
     *
     * @returns { DataBlob } Algorithm parameters obtained.
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
     * Obtains the CRL extensions.
     *
     * @returns { DataBlob } X.509 CRL extensions obtained.
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
     * Checks whether this CRL matches the specified parameters.
     *
     * @param { X509CRLMatchParameters } param - Parameters specified for matching the certificate.
     * @returns { boolean } Returns **true** if the certificate matches the parameters specified; returns **false**
     *     otherwise.
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
     * Obtains the distinguished name (DN) of the X.509 certificate issuer.
     *
     * @returns { X500DistinguishedName } DN object obtained.
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
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
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
     * Converts this object into a string in the specified encoding format.
     *
     * @param { EncodingType } encodingType - Encoding type.
     * @returns { string } String obtained.
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
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value obtained.
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
     * Obtains the certification extensions in DER format.
     *
     * @returns { CertExtension } Certificate extensions object obtained.
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
   * Creates an **X509Crl** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data. The data length cannot exceed 8192 bytes.
   * @param { AsyncCallback<X509CRL> } callback - Callback invoked to return the **X509Crl** instance created.
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
   * Creates an **X509Crl** instance. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - Serialized CRL data. The data length cannot exceed 8192 bytes.
   * @returns { Promise<X509CRL> } **X509Crl** instance created.
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
   * Enumerates the certificate revocation flag.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum CertRevocationFlag {
    /**
     * OCSP check is preferred. This flag is valid only when CERT_REVOCATION_CRL_CHECK and CERT_REVOCATION_OCSP_CHECK
     * are both set.
     *
     * After the OCSP check is performed, the CRL is rolled back when no response is received or the CRL times out.
     * If this parameter is not set, CRL check is performed first. If no CRL is found or the timer expires, OCSP is
     * rolled back.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_PREFER_OCSP = 0,

    /**
     * Enable the CRL check. Check the certificate status using a certificate revocation list.
     *
     * The crls parameter of the [X509CertRevokedParams]{@link cert.X509CertRevokedParams} is used. The CRL is not
     * matched and the [X509CertRevokedParams]{@link is used.
     * If the allowDownloadCrl parameter in cert.X509CertRevokedParams} is set to true, the CDP extension of the
     * certificate is used to download the CRL.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_CRL_CHECK = 1,

    /**
     * Enable OCSP inspection. Check the certificate status using the Online Certificate Status Protocol.
     *
     * Start with [X509CertRevokedParams]{@link
     * The ocspResponses parameter of cert.X509CertRevokedParams} does not match the response and
     * [X509CertRevokedParams]{@link
     * If the allowOcspCheckOnline parameter of cert.X509CertRevokedParams} is set to true, the system attempts to
     * obtain the OCSP URL from the certificate AIA extension and sends a request to obtain the response.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_OCSP_CHECK = 2,

    /**
     * Check the revocation status of all certificates.
     *
     * Perform revocation check on all certificates in the certificate chain (skip self-signed signature certificate).
     * If this parameter is not set, only the terminal certificate (the first certificate in the certificate chain) is
     * checked.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CERT_REVOCATION_CHECK_ALL_CERT = 3
  }

  /**
   * Enumerates the OCSP digest algorithm.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OcspDigest {
    /**
     * SHA1 digest algorithm.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA1 = 0,

    /**
     * SHA224 digest algorithm.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA224 = 1,

    /**
     * SHA256 digest algorithm.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA256 = 2,

    /**
     * SHA384 digest algorithm.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA384 = 3,

    /**
     * SHA512 digest algorithm.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SHA512 = 4
  }

  /**
   * Parameters for checking a certificate revocation status.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface X509CertRevokedParams {
    /**
     * Revocation check flag. Quantity range: [1,4]. The array must contain either CERT_REVOCATION_CRL_CHECK or
     * CERT_REVOCATION_OCSP_CHECK.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    revocationFlags: Array<CertRevocationFlag>;

    /**
     * CRL list. Maximum quantity: 100.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    crls?: Array<X509CRL>;

    /**
     * Indicates whether to allow CRL download. The default value is false. true: The CDP extension of the certificate
     * is used to download the CRL. false: Do not attempt to download the CRL.
     * **Note**
     * - Skip download if matching CRL exists in crls
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowDownloadCrl?: boolean;

    /**
     * OCSP response data. Preconfigured OCSP response data. Maximum quantity: 100.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ocspResponses?: Array<Uint8Array>;

    /**
     * Indicates whether to allow online OCSP check. The default value is false. true: Perform online OCSP check, that
     * is, attempt to obtain the OCSP URL from the certificate AIA extension and send a request to obtain the response.
     * false: Do not perform online OCSP check.
     * **Note**
     * - Skip online OCSP check if a matching OCSP response is found in ocspResponses
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowOcspCheckOnline?: boolean;

    /**
     * Digest algorithm used by OCSP requests. The default value is SHA256.
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
   * Parameters for certificate validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface CertValidationParams {
    /**
     * Indicates the list of untrusted certificates. An intermediate certificate is used only to construct a certificate
     * chain and is not used as a trust anchor. Maximum quantity: 100.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    untrustedCerts?: Array<X509Cert>;

    /**
     * Trust certificate list. Specifies the trusted root certificate or intermediate CA certificate as the trust anchor
     *  for authentication. Maximum quantity: 100.
     * During verification, the certificate chain must be traced back to the trust certificate. You must set this
     * parameter or set trustSystemCa to true.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    trustedCerts?: Array<X509Cert>;

    /**
     * Indicates whether to trust the system CA. The default value is false. true: Use the preconfigured CA certificate
     * store as the trust anchor. false: The preconfigured CA certificate store is not used as the trust anchor.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    trustSystemCa?: boolean;

    /**
     * Indicates whether to allow partial chain validation. The default value is false. true: Any certificate in the
     * trust certificate can be used as the trust anchor instead of the root certificate. false: indicates that the root
     *  certificate must be traced during certificate chain construction.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    partialChain?: boolean;

    /**
     * Indicates whether intermediate CA certificates can be downloaded from the network. The default value is false.
     * true: Use the issuer address in the certificate AIA extension to download the issuer certificate when the
     * intermediate certificate is missing in the certificate chain. false: The intermediate CA certificate cannot be
     * downloaded from the network.
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    allowDownloadIntermediateCa?: boolean;

    /**
     * Verification date, in the format of YYMMDDHHMMSSZ or YYYYMMDDHHMMSSZ. By default, the current system time is
     * used.
     * You can customize the verification time, which is applicable to scenarios such as offline verification of
     * historical signatures.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    date?: string;

    /**
     * Indicates whether to verify the date. true: Verify the validity period of the certificate and CRL. false: The
     * validity period of the certificate and CRL is not verified.
     *
     * @default true
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    validateDate?: boolean;

    /**
     * Allows specific validation errors to be ignored. Maximum quantity: 8.
     * Errors that can be ignored include: ERR_CERT_NOT_YET_VALID, ERR_CERT_HAS_EXPIRED, ERR_UNKNOWN_CRITICAL_EXTENSION,
     *  ERR_CRL_NOT_FOUND,
     * ERR_CRL_NOT_YET_VALID, ERR_CRL_HAS_EXPIRED, ERR_OCSP_RESPONSE_NOT_FOUND, ERR_NETWORK_TIMEOUT.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ignoreErrs?: Array<CertResult>;

    /**
     * List of hostnames. Verify that the certificate's subject alternate name (SAN) or common name (CN) contains the
     * specified hostname. Maximum number: 100; maximum length of each host name: 128.
     * If one of the host names is matched, the verification is successful.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    hostnames?: Array<string>;

    /**
     * Email address list. Verify that the certificate contains the specified email address. The maximum number is 1.
     * The maximum length of the email address is 128
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    emailAddresses?: Array<string>;

    /**
     * Key usage list. Verify that the certificate's key usage extension includes the specified usage. Maximum quantity:
     *  9.
     * The certificate must contain all specified key usages.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    keyUsage?: Array<KeyUsageType>;

    /**
     * User ID, which is used to set the user ID required for signature verification during SM2 certificate
     * verification. Maximum length: 128 characters.
     * The most commonly used value is `[0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x31, 0x32, 0x33, 0x34, 0x35,
     * 0x36, 0x37, 0x38]`. (The corresponding ASCII character string is 1234567812345678, 16 bytes.)
     * Certificate revocation check is not supported after userId is set.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userId?: Uint8Array;

    /**
     * Indicates the certificate revocation check parameter. Used to check whether a certificate is revoked. The
     * configuration includes the CRL list, OCSP response data, and whether online check is allowed.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    revokedParams?: X509CertRevokedParams;
  }

  /**
   * Result of certificate validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface CertValidationResult {
    /**
     * Indicates the authenticated certificate chain. Upon successful authentication, the complete certificate chain is
     * returned, from the endpoint certificate to the trust anchor. It can be used for subsequent certificate
     * information query or other verification operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly certChain: Array<X509Cert>;
  }

  /**
   * Provides APIs for certificate chain validator operations.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CertChainValidator {
    /**
     * Validates an X.509 certificate chain. This API uses an asynchronous callback to return the result.
     *
     * The certificate chain validator does not verify the certificate validity period because the system time on the
     * device is untrusted. To check the validity period of a certificate, use the
     * [checkValidityWithDate()]{@link cert.X509Cert.checkValidityWithDate} API of the **X509Cert** class. For details
     * about certificate specifications, see
     * [Certificate Specifications](docroot://security/DeviceCertificateKit/certificate-framework-overview.md#certificate-specifications)
     * .
     *
     * @param { CertChainData } certChain - Serialized X.509 certificate chain data.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If **error** is **null**, the
     *     validation is successful. If **error** is not **null**, the validation fails.
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
     * Validates an X.509 certificate chain. This API uses a promise to return the result.
     *
     * The certificate chain validator does not verify the certificate validity period because the system time on the
     * device is untrusted. To check the validity period of a certificate, use the
     * [checkValidityWithDate()]{@link cert.X509Cert.checkValidityWithDate} API of the **X509Cert** class. For details
     * about certificate specifications, see
     * [Certificate Specifications](docroot://security/DeviceCertificateKit/certificate-framework-overview.md#certificate-specifications)
     * .
     *
     * @param { CertChainData } certChain - Serialized X.509 certificate chain data.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Validates a certificate by building and verifying its certificate chain. This API uses a promise to return the
     * result.
     *
     * The certificate chain construction process complies with the following rules:
     * 1. Trusted anchor source: The trusted certificate list (trustedCerts) is always used as the trust anchor source.
     * The preconfigured certificate is used as the trust anchor source only when trustSystemCa is set to true.
     * 2. Issuer search sequence: The system searches for the issuer from the trust anchor source first. If the issuer
     * cannot be found, the system searches for the issuer in the untrusted certificate list (untrustedCerts). The
     * intermediate CA certificate downloaded online is an untrusted certificate.
     * 3. Trust anchor locking: Once the issuer is found in the trust anchor source, the subsequent lookup process does
     * not roll back to the untrusted certificate, that is, the subsequent certificates must come from the trust anchor
     * source.
     * 4. Construction completion conditions:
     * If partialChain is false (default value), the build is complete only when the root certificate (from signature
     * certificate) is found.
     * If partialChain is true, the first time the issuer is found in the trust anchor source, the build is complete.
     * 5. Follow-up verification: After the certificate chain is constructed, perform other verification operations,
     * such as certificate signature verification and certificate revocation check.
     *
     * @param { X509Cert } cert - indicates the certificate to verify.
     * @param { CertValidationParams } params - indicates the certificate validation parameters.
     * @returns { Promise<CertValidationResult> } Promise used to return the result of certificate validation.
     * @throws { BusinessError } 19020001 - memory malloc failed.
     * @throws { BusinessError } 19020002 - runtime error. Possible causes:
     *     <br>1. Memory copy failed;
     *     <br>2. A null pointer occurs inside the system;
     *     <br>3. Failed to convert parameters between ArkTS and C.
     * @throws { BusinessError } 19020003 - the parameter check failed.
     * @throws { BusinessError } 19030001 - crypto operation error.
     * @throws { BusinessError } 19030002 - the certificate signature verification failed.
     * @throws { BusinessError } 19030003 - the certificate has not taken effect.
     * @throws { BusinessError } 19030004 - the certificate has expired.
     * @throws { BusinessError } 19030005 - failed to obtain the certificate issuer.
     * @throws { BusinessError } 19030006 - the key cannot be used for signing a certificate.
     * @throws { BusinessError } 19030007 - the key cannot be used for a digital signature.
     * @throws { BusinessError } 19030009 - untrusted certificate.
     * @throws { BusinessError } 19030010 - the certificate has been revoked.
     * @throws { BusinessError } 19030011 - unsupported critical extension.
     * @throws { BusinessError } 19030012 - hostname mismatch in the certificate.
     * @throws { BusinessError } 19030013 - email address mismatch in the certificate.
     * @throws { BusinessError } 19030014 - key usage mismatch in the certificate.
     * @throws { BusinessError } 19030015 - failed to obtain the certificate revocation list.
     * @throws { BusinessError } 19030016 - the certificate revocation list does not take effect.
     * @throws { BusinessError } 19030017 - the certificate revocation list has expired.
     * @throws { BusinessError } 19030018 - failed to verify the signature of the certificate revocation list.
     * @throws { BusinessError } 19030019 - failed to find the issuer of the certificate revocation list.
     * @throws { BusinessError } 19030020 - failed to obtain the OCSP response.
     * @throws { BusinessError } 19030021 - invalid OCSP response.
     * @throws { BusinessError } 19030022 - failed to verify the OCSP signature.
     * @throws { BusinessError } 19030023 - unknown OCSP certificate status.
     * @throws { BusinessError } 19030024 - network connection timed out.
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    validateCert(cert: X509Cert, params: CertValidationParams): Promise<CertValidationResult>;

    /**
     * Algorithm used by the X.509 certificate chain validator.
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
   * Creates a **CertChainValidator** object.
   *
   * @param { string } algorithm - Certificate chain validator algorithm. Currently, only **PKIX** is supported.
   * @returns { CertChainValidator } **CertChainValidator** object created.
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
   * Enumerates the types of the common name (CN), which uniquely identifies the subject of the certificate.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum GeneralNameType {
    /**
     * Indicates others.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_OTHER_NAME = 0,

    /**
     * Indicates an email address.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_RFC822_NAME = 1,

    /**
     * Indicates a DNS name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_DNS_NAME = 2,

    /**
     * Indicates an X.400 address.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_X400_ADDRESS = 3,

    /**
     * Indicates a directory name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_DIRECTORY_NAME = 4,

    /**
     * Indicates an Electronic Data Interchange (EDI) entity.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_EDI_PARTY_NAME = 5,

    /**
     * Indicates a uniform resource identifier.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_UNIFORM_RESOURCE_ID = 6,

    /**
     * Indicates an IP address.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GENERAL_NAME_TYPE_IP_ADDRESS = 7,

    /**
     * Indicates a registered object identifier.
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
   * Represents the CN information of a certificate.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface GeneralName {
    /**
     * Type of the certificate subject.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: GeneralNameType;

    /**
     * DER format of the certificate subject.
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
   * Defines the parameters used to match a certificate. If no parameter is specified, all certificates are matched.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CertMatchParameters {
    /**
     * Subject Alternative Names (SANs) of the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subjectAlternativeNames?: Array<GeneralName>;

    /**
     * Whether to match all SANs of the certificate. **true**: yes; **false**: no.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    matchAllSubjectAltNames?: boolean;

    /**
     * Key of the certificate authority (CA).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    authorityKeyIdentifier?: Uint8Array;

    /**
     * Minimum length of the certification path (chain of trust) that can be built from the certificate to a trusted
     * root CA.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    minPathLenConstraint?: int;

    /**
     * Certificate object.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    x509Cert?: X509Cert;

    /**
     * Certificate validity period.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    validDate?: string;

    /**
     * Certificate issuer, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    issuer?: Uint8Array;

    /**
     * Extended key usage.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    extendedKeyUsage?: Array<string>;

    /**
     * Constraints on the subject names that can be included in certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nameConstraints?: Uint8Array;

    /**
     * Certificate policy.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    certPolicy?: Array<string>;

    /**
     * Validity period of the certificate private key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    privateKeyValid?: string;

    /**
     * Whether to match the key usage. **true**: yes; **false**: no.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyUsage?: Array<boolean>;

    /**
     * Serial number of the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    serialNumber?: bigint;

    /**
     * Certificate subject, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    subject?: Uint8Array;

    /**
     * Identifier of the public key of the certificate's subject.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subjectKeyIdentifier?: Uint8Array;

    /**
     * Public key of the certificate, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    publicKey?: DataBlob;

    /**
     * Algorithm of the certificate public key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    publicKeyAlgID?: string;

    /**
     * Specifies the certificate private key. string indicates a private key in PEM format, and Uint8Array indicates a
     * private key in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    privateKey?: string | Uint8Array;
  }

  /**
   * Represents the parameters used to match a certificate revocation list (CRL). If no parameter is specified, all CRLs
   * are matched.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CRLMatchParameters {
    /**
     * Certificate issuer, in DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    issuer?: Array<Uint8Array>;

    /**
     * Certificate object.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    x509Cert?: X509Cert;

    /**
     * Certificate update time.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateDateTime?: string;

    /**
     * Maximum number of CRLs.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxCRL?: bigint;

    /**
     * Minimum number of CRLs.
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
   * Provides APIs for locating certificates or CRLs in a **CertCRLCollection** object.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertCRLCollection {
    /**
     * Selects certificates that match the specified parameters. This API uses a promise to return the result.
     *
     * @param { X509CertMatchParameters } param - Parameters used to match the certificates.
     * @returns { Promise<Array<X509Cert>> } Promise used to return the result. Matched certificates.
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
     * Selects certificates that match the specified parameters. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { X509CertMatchParameters } param - Parameters used to match the certificates.
     * @param { AsyncCallback<Array<X509Cert>> } callback - Callback invoked to return the matched certificates.
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
     * Selects CRLs that match the specified parameters. This API uses a promise to return the result.
     *
     * @param { X509CRLMatchParameters } param - Parameters used to match the CRLs.
     * @returns { Promise<Array<X509CRL>> } Promise used to return the matched CRLs.
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
     * Selects CRLs that match the specified parameters. This API uses an asynchronous callback to return the result.
     *
     * @param { X509CRLMatchParameters } param - Parameters used to match the CRLs.
     * @param { AsyncCallback<Array<X509CRL>> } callback - Callback used to return the matched CRLs.
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
   * Creates an object for a collection of X.509 certificates and CRLs.
   *
   * @param { Array<X509Cert> } certs - X.509 certificates.
   * @param { Array<X509CRL> } [options] crls - array of X509CRL. [since 11 - 11]
   * @param { Array<X509CRL> } [crls] - X.509 CRLs. [since 12]
   * @returns { CertCRLCollection } **CertCRLCollection** object created.
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
   * Provides APIs for managing the X.509 certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509CertChain {
    /**
     * Obtains the X.509 certificate list.
     *
     * @returns { Array<X509Cert> } X.509 certificate list obtained.
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
     * Validates a certificate chain. This API uses a promise to return the result.
     *
     * @param { CertChainValidationParameters } param - Parameters for validating the X.509 certificate chain.
     * @returns { Promise<CertChainValidationResult> } Promise used to return the result.
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
     * Validates a certificate chain. This API uses an asynchronous callback to return the result.
     *
     * @param { CertChainValidationParameters } param - Parameters for validating the X.509 certificate chain.
     * @param { AsyncCallback<CertChainValidationResult> } callback - Callback used to return the certificate chain
     *     validation result.
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
     * Converts the object data into a string.
     *
     * @returns { string } String obtained.
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
     * Obtains the hash value of the data in DER format.
     *
     * @returns { Uint8Array } Hash value obtained.
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
   * Creates an **X509CertChain** instance. This API uses a promise to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @returns { Promise<X509CertChain> } **X509CertChain** object created.
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
   * Creates an **X509CertChain** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { EncodingBlob } inStream - X.509 certificate serialization data.
   * @param { AsyncCallback<X509CertChain> } callback - Callback invoked to return the **X509CertChain** instance
   *     created.
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
   * Creates an X.509 certificate chain object based on the specified certificates. This API returns the result
   * synchronously.
   *
   * @param { Array<X509Cert> } certs - Array of X.509 certificates.
   * @returns { X509CertChain } **X509CertChain** object created.
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
   * Builds an X.509 certificate chain with a CertChainBuildParameters object. This API uses a promise to return the
   * result.
   *
   * @param { CertChainBuildParameters } param - Object used to build the certificate chain.<br> The value of
   *     **maxLength** in [CertChainBuildParameters]{@link cert.CertChainBuildParameters} must be less than the number
   *     of certificates in the certificate set.
   * @returns { Promise<CertChainBuildResult> } **X509CertChain** object created.
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
   * Enumerates the CSR encoding formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum EncodingBaseFormat {
    /**
     * Privacy-Enhanced Mail (PEM) format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PEM = 0,

    /**
     * Distinguished Encoding Rules (DER) format.
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
   * Represents data of the parsed PKCS #12 (.p12) file.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface Pkcs12Data {
    /**
     * Private key obtained after the .p12 file is parsed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    privateKey?: string | Uint8Array;

    /**
     * X.509 certificate obtained after the .p12 file is parsed.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    cert?: X509Cert;

    /**
     * Other certificates obtained after the .p12 file is parsed.
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
   * Represents the configuration for parsing .p12 files.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface Pkcs12ParsingConfig {
    /**
     * Password of the .p12 file.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Whether to obtain the private key. The default value is **true**.
     *
     * **true**: To obtain the private key in PKCS #8 format; **false**: Not to obtain the private key.
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
     * Format of the private key to be obtained. Currently, the PEM and DER formats are supported. If this parameter is
     * not specified, the PEM format is used by default.
     *
     * **Note**: This parameter is valid only when **needsPrivateKey** is set to **true**.
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
     * Whether to obtain the certificate. The default value is **true**. **true**: yes; **false**: no.
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
     * Whether to obtain other certificates. The default value is **false**. **true**: yes; **false**: no.
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
   * Parses a .p12 file.
   *
   * @param { Uint8Array } data - .p12 file to parse, in DER format.
   * @param { Pkcs12ParsingConfig } config - Configuration for parsing the file.
   * @returns { Pkcs12Data } Data parsed from the .p12 file.
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
   * Parses a PKCS #12 file. This API uses a promise to return the result.
   *
   * @param { Uint8Array } data - PKCS #12 file to parse, in DER format.
   * @param { string } password - PKCS #12 password.
   * @returns { Promise<Pkcs12Data> } Promise used to return the certificate, private key, and other certificates parsed
   *     from the PKCS #12 file. The private key in the returned **Pkcs12Data** is encoded in PEM format.
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
   * Creates a [TrustAnchor]{@link cert.X509TrustAnchor} object array by using the CA certificate parsed from a .p12
   * keystore file. This API uses a promise to return the result.
   *
   * @param { Uint8Array } keystore - .p12 file to parse, in DER format.
   * @param { string } pwd - Password of the .p12 file.
   * @returns { Promise<Array<X509TrustAnchor>> } **X509TrustAnchor** object array created.
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
   * Creates an **X500DistinguishedName** object with a name in the form of a string. This API uses a promise to return
   * the result.
   *
   * @param { string } nameStr - Name string format defined by X.509. The name is separated by slashes (/). Each
   *     distinguishable name is in the format of **attribute=value**. Common attributes include **CN** (common name),
   *     **O** (organization name), **OU** (organization unit), **C** (country/region), **ST** (province/state), and
   *     **L** (city/district). For example, **\/CN=example.com/O=Example/C=CN**.
   * @returns { Promise<X500DistinguishedName> } Promise used to return the **X500DistinguishedName** object created.
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
   * Creates an **X500DistinguishedName** object with a name in DER format. This API uses a promise to return the
   * result.
   *
   * @param { Uint8Array } nameDer - Name of the Uint8Array type in DER format defined by X.509.
   * @returns { Promise<X500DistinguishedName> } Promise used to return the **X500DistinguishedName** object created.
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
   * Provides APIs for managing the **X500DistinguishedName** instance.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface X500DistinguishedName {
    /**
     * Obtains the DN in the form of a string.
     *
     * @returns { string } DN in the form of a string obtained.
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
     * Obtains RDN strings based on the specified encoding format.
     *
     * @param { EncodingType } encodingType - Encoding format.
     * @returns { string } RDN string. Multiple strings are separated by commas (,).
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
     * Obtains relative distinguished name (RDN) strings of the specified type.
     *
     * @param { string } type - Type of the RDNs to obtain. For example, **CN** and **OU**.
     * @returns { Array<string> } Array of RDN strings.
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
     * Obtains an array of RDN strings based on the specified type and encoding format.
     *
     * @param { string } type - Type of the RDNs to obtain. For example, **CN** and **OU**.
     * @param { EncodingType } encodingType - Encoding format.
     * @returns { Array<string> } Array of RDN strings.
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
     * Obtains the data of the X.509 certificate **extensions** field.
     *
     * @returns { EncodingBlob } X.509 certificate serialization data obtained.
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
   * Represents an X.509 trust anchor, which is used to verify the certificate chain. The certificate or public key in
   * the trust anchor is used as the trusted root to verify the certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X509TrustAnchor {
    /**
     * Trusted CA certificate. If **CACert** is set, only **CACert** is used to validate the certificate chain.
     * **CAPubKey** and **CASubject** are not used.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CACert?: X509Cert;

    /**
     * Public key of the trusted CA certificate, in DER format. This parameter takes effect only when **CACert** is not
     * set.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CAPubKey?: Uint8Array;

    /**
     * Subject of the trusted CA certificate, in DER format. This parameter takes effect only when **CAPubKey** is set.
     * The validation object is determined based on the **CAPubKey** type (self-signed or upper-level), and can be the
     * subject or issuer of the root certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CASubject?: Uint8Array;

    /**
     * Name constraints, in DER format. Only the leaf certificate of the current certificate chain is validated.
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
   * Enumerates the options for checking the certificate revocation status.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RevocationCheckOptions {
    /**
     * Use OCSP over CRL (default).
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_PREFER_OCSP = 0,

    /**
     * Obtain the CRL/OCSP response over the network. By default, it is disabled. Only the first CRL distribution point
     * address can be obtained from the CDP extension of the certificate to check the certificate revocation status, or
     * the first OCSP server address can be obtained from the AIA extension of the certificate to check the certificate
     * revocation status. Moreover, only HTTP is supported. You must declare the ohos.permission.INTERNET permission.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_ACCESS_NETWORK = 1,

    /**
     * This parameter is valid when the **ACCESS_NETWORK** option is enabled. It allows the alternative solution to be
     * used to obtain the certificate revocation status if the preferred solution cannot be used due to network
     * problems.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_FALLBACK_NO_PREFER = 2,

    /**
     * This parameter is valid when the **ACCESS_NETWORK** option is enabled. It allows the locally configured CRL/OCSP
     * response to be used to check the certificate revocation status if the online CRL/OCSP response cannot be used due
     * to network problems.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_FALLBACK_LOCAL = 3,

    /**
     * This parameter is valid when the **ACCESS_NETWORK** option is enabled. If this capability is enabled, the system
     * continues to check the revocation status of the intermediate certificate if the OCSP or CRL check of the leaf
     * certificate fails. This capability is disabled by default.
     *
     * Note: This capability and **REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT** cannot be enabled at
     * the same time.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE = 4,

    /**
     * If this capability is enabled, the system checks the revocation status of the leaf certificate based on the local
     * CRL. This capability is disabled by default.
     *
     * Note: This capability and **REVOCATION_CHECK_OPTION_CHECK_INTERMEDIATE_CA_ONLINE** cannot be enabled at the same
     * time.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    REVOCATION_CHECK_OPTION_LOCAL_CRL_ONLY_CHECK_END_ENTITY_CERT = 5,

    /**
     * If this capability is enabled, the system ignores the network unreachable error when obtaining the CRL or OCSP
     * response over the network for revocation status check. This capability is disabled by default. By default, the
     * network unreachable error may cause certificate chain validation failure.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    REVOCATION_CHECK_OPTION_IGNORE_NETWORK_ERROR = 6,
  }

  /**
   * Enumerates the types of the online certificate chain validation policy.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ValidationPolicyType {
    /**
     * Do not verify **sslHostname** or **dNSName** in the certificate. It is the default value.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    VALIDATION_POLICY_TYPE_X509 = 0,

    /**
     * Verify **sslHostname** or **dNSName** in the certificate.
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
   * Enumerates the purposes, for which the key in the certificate is used.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum KeyUsageType {
    /**
     * The certificate holder can use the private key contained in the certificate to generate a digital signature.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DIGITAL_SIGNATURE = 0,

    /**
     * The certificate holder can use the key to verify a digital signature as part of a nonrepudiation service.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_NON_REPUDIATION = 1,

    /**
     * The certificate holder can use the public key contained in the certificate for key encryption.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_ENCIPHERMENT = 2,

    /**
     * The certificate holder can use the public key contained in the certificate for data encryption.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_DATA_ENCIPHERMENT = 3,

    /**
     * The certificate holder can use the private key contained in the certificate to perform key agreement operations.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_AGREEMENT = 4,

    /**
     * The certificate holder can use the private key contained in the certificate to sign other certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_KEY_CERT_SIGN = 5,

    /**
     * The certificate holder can use the private key contained in the certificate to sign CRLs.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_CRL_SIGN = 6,

    /**
     * The certificate holder can use the key to perform encryption operations only.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    KEYUSAGE_ENCIPHER_ONLY = 7,

    /**
     * The certificate holder can use the key to perform decryption operations only.
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
   * Represents the parameters for checking the certificate revocation status for a certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface RevocationCheckParameter {
    /**
     * OCSP request extensions.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspRequestExtension?: Array<Uint8Array>;

    /**
     * URI of the alternative server used to send OCSP requests. HTTP and HTTPS are supported. The specific
     * configuration is determined via the negotiation with the server.
     *
     * Note: The URI takes effect only for the leaf certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponderURI?: string;

    /**
     * Signing certificate used for verifying the signature of the OCSP response.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponderCert?: X509Cert;

    /**
     * Alternative OCSP responses.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ocspResponses?: Uint8Array;

    /**
     * Address used to download the CRLs.
     *
     * Note: The URI takes effect only for the leaf certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    crlDownloadURI?: string;

    /**
     * A set of rules for obtaining the certificate revocation status.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    options?: Array<RevocationCheckOptions>;

    /**
     * Hash algorithm used to create a certificate ID during OCSP communication. The options **MD5**, **SHA1**,
     * **SHA224**, **SHA256**, **SHA384**, and **SHA512** are supported. The default value is **SHA256**.
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
   * Represents the parameters for certificate chain validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertChainValidationParameters {
    /**
     * Validity period of the certificate to validate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    date?: string;

    /**
     * List of trusted anchors.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    trustAnchors: Array<X509TrustAnchor>;

    /**
     * Whether to use the prebuilt CA certificate to validate the certificate chain. **true** means yes; **false**
     * otherwise.
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
     * Whether to allow the application to download the missing intermediate CA certificate from the network.
     * **true** means yes; **false** otherwise. The default value is **false**.
     * The download address is obtained from the certificate AIA extension. Only HTTP is supported. To use the network
     * for download, you need to request the **ohos.permission.INTERNET** permission. For details about the permission
     * configuration, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
     *
     * @default false
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    allowDownloadIntermediateCa?: boolean;

    /**
     * Check whether the certificate is in a CRL.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    certCRLs?: Array<CertCRLCollection>;

    /**
     * Parameters for checking the certificate revocation status online.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    revocationCheckParam?: RevocationCheckParameter;

    /**
     * Type of the policy for certificate validation.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    policy?: ValidationPolicyType;

    /**
     * Host name in the certificate to be verified. This parameter must be used with **policy** together.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    sslHostname?: string;

    /**
     * Usage of the key in the certificate to be validated.
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
   * Represents the return value of certificate chain validation.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CertChainValidationResult {
    /**
     * Trust anchor.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly trustAnchor: X509TrustAnchor;

    /**
     * Entity certificate.
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
   * Represents the parameters for building a certificate chain.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CertChainBuildParameters {
    /**
     * Filter criteria.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    certMatchParameters: X509CertMatchParameters;

    /**
     * Maximum length of the CA certificate in the certificate chain.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maxLength?: int;

    /**
     * Parameters for certificate chain validation.
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
   * Represents the certificate chain build result.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CertChainBuildResult {
    /**
     * Certificate chain object created.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly certChain: X509CertChain;

    /**
     * Result of the certificate chain validation.
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
   * Enumerates the Cryptographic Message Syntax (CMS) message types.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsContentType {
    /**
     * Signature data.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SIGNED_DATA = 0,

    /**
     * Encapsulated data.
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
   * Enumerates the CMS message formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsContentDataFormat {
    /**
     * Binary.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    BINARY = 0,

    /**
     * Text.
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
   * Enumerates the CMS signature formats.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum CmsFormat {
    /**
     * Privacy-Enhanced Mail (PEM) format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PEM = 0,

    /**
     * Distinguished Encoding Rules (DER) format.
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
   * Represents the private key information.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface PrivateKeyInfo {
    /**
     * Encrypted or unencrypted private key in PEM or DER format.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * Password of the private key, if the private key is encrypted.
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
   * Enumerates the RSA CMS signature padding modes.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsRsaSignaturePadding {
    /**
     * PKCS #1 padding mode.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    PKCS1_PADDING = 0,

    /**
     * PKCS #1 PSS padding mode.
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
   * Represents the configuration of the CMS signer.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsSignerConfig {
    /**
     * Message digest algorithm, for example, **SHA384**. Currently, **SHA1**, **SHA256**, **SHA384**, and **SHA512**
     * are supported.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;

    /**
     * Padding mode for an RSA signature. The default value is **PKCS1_PADDING**.
     * When this parameter is set to **PKCS1_PSS_PADDING**, **mdName** must be set to **SHA256**, **SHA384**, or
     * **SHA512**.
     * **Note**: This parameter is valid only when the private key type of the signature is RSA.
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
     * Whether to add a certificate. The default value is **true**. **true**: yes; **false**: no.
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
     * Whether to add the signature attribute. The default value is **true**. **true**: yes; **false**: no.
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
     * Whether to add the SMIME capability to the CMS object. The default value is **true**. **true**: yes; **false**:
     * no.
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
   * Enumerates the digest algorithms of the CMS KeyAgree type.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsKeyAgreeRecipientDigestAlgorithm {
    /**
     * SHA-256.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA256 = 0,

    /**
     * SHA-384.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SHA384 = 1,

    /**
     * SHA-512.
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
   * Enumerates the symmetric algorithms of the CMS recipient.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsRecipientEncryptionAlgorithm {
    /**
     * AES_128_CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_128_CBC = 0,

    /**
     * AES_192_CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_192_CBC = 1,

    /**
     * AES_256_CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_256_CBC = 2,

    /**
     * AES_128_GCM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_128_GCM = 3,

    /**
     * AES_192_GCM.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AES_192_GCM = 4,

    /**
     * AES_256_GCM.
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
   * Represents KeyTrans recipient information encapsulated in CMS data.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsKeyTransRecipientInfo {
    /**
     * RSA certificate.
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
   * Represents KeyAgree recipient information encapsulated in CMS data.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsKeyAgreeRecipientInfo {
    /**
     * RSA certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert: X509Cert;

    /**
     * KDF digest algorithm. The default value is **SHA256**.
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
   * Represents recipient information encapsulated in CMS data.
   *
   * > * * Note: * *
   * >
   * > At least one receiver needs to be set.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsRecipientInfo {
    /**
     * KeyTrans recipient information.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyTransInfo?: CmsKeyTransRecipientInfo;
    /**
     * keyAgree recipient information.
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
   * Represents the configuration for generating the CMS signing result.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsGeneratorOptions {
    /**
     * Format of the content. The default value is **CmsContentDataFormat.BINARY**.
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
     * Format of the CMS data generated. The default value is **DER**.
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
     * Whether the final CMS data does not contain the raw data. The default value is **false**. **true**: raw data is
     * contained; **false**: raw data is not contained.
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
   * Provides APIs for generating the messages in CMS format.
   *
   * > **NOTE**
   * >
   * > PKCS #7 is a standard syntax for storing signed or encrypted data. CMS is an extension of PKCS #7. PKCS#7
   * > supports data types including data, signature data, envelope data,
   * > > signature and envelope data, message digest data, and encrypted data. It is often used to protect data
   * > integrity and confidentiality.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmsGenerator {
    /**
     * Adds signer information to the CMS whose content type is **SIGNED_DATA**.
     *
     * @param { X509Cert } cert - X.509 certificate.
     * @param { PrivateKeyInfo } keyInfo - Private key information.
     * @param { CmsSignerConfig } config - Signer configuration.
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
     * Adds a CMS certificate of the **SIGNED_DATA** content type, for example, the issuer certificate of a signing
     * certificate.
     *
     * If the **addSigner** API is not called and only the certificate is added, the generated CMS signature data
     * contains only the certificate.
     *
     * @param { X509Cert } cert - X.509 certificate to add.
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
     * Sets the encryption algorithm for the CMS whose content type is **ENVELOPED_DATA**.
     *
     * This method should be called immediately after the **CmsGenerator** of the **ENVELOPED_DATA** type is created. If
     * this method is not called, AES_256_GCM is used as the encryption algorithm by default.
     *
     * @param { CmsRecipientEncryptionAlgorithm } algorithm - Encryption algorithm used by the CMS to encapsulate data.
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
     * Adds recipient information to a CMS with the content type of **ENVELOPED_DATA**. This API uses a promise to
     * return the result.
     *
     * At least one recipient needs to be set.
     *
     * @param { CmsRecipientInfo } recipientInfo - Recipient information.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the CMS data, for example, the CMS signature data or CMS encapsulated data. This API uses a promise to
     * return the result.
     *
     * @param { Uint8Array } data - Data to be operated.
     * @param { CmsGeneratorOptions } [options] - Configuration of the CMS operation.
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
     * Obtains the CMS data, for example, the CMS signature data or CMS encapsulated data. This API returns the result
     * synchronously.
     *
     * @param { Uint8Array } data - Data to be operated.
     * @param { CmsGeneratorOptions } [options] - Configuration of the CMS operation.
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
     * Obtains the encrypted content data of the CMS whose content type is **ENVELOPED_DATA**. This API uses a promise
     * to return the result.
     *
     * Obtains the encrypted content data if the **CmsGenerator** of the **ENVELOPED_DATA** type is created and data
     * separation is used to generate CMS encapsulated data.
     *
     * @returns { Promise<Uint8Array> } Promise used to return the encrypted data.
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
   * Creates a **CmsGenerator** object.
   *
   * @param { CmsContentType } contentType - CMS message type.
   * @returns { CmsGenerator } **CmsGenerator** object created.
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
   * Represents CMS verification configuration.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsVerificationConfig {
    /**
     * Trust certificate.
     * Note: You need to configure the trust certificates of all signers.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    trustCerts: Array<X509Cert>;

    /**
     * Signing certificate. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    signerCerts?: Array<X509Cert>;

    /**
     * Content data. If the detached mode is used, you need to specify the plaintext data. This parameter can be left
     * empty in attached mode.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    contentData?: Uint8Array;

    /**
     * Format of the content. The default value is **CmsContentDataFormat.BINARY**.
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
   * Represents CMS decapsulation configuration.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsEnvelopedDecryptionConfig {
    /**
     * Private key parameter. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keyInfo?: PrivateKeyInfo;

    /**
     * Public key certificate. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cert?: X509Cert;

    /**
     * Encrypted content data used when the CMS does not contain the specified data. This parameter is left empty by
     * default.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    encryptedContentData?: Uint8Array;

    /**
     * Format of the content. The default value is **CmsContentDataFormat.BINARY**.
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
   * Enumerates certificate types obtained from CMS.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum CmsCertType {
    /**
     * Signer certificates.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    SIGNER_CERTS = 0,

    /**
     * All certificates.
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
   * Verifies and decapsulates signed and encapsulated messages in CMS format.
   *
   * > **NOTE**
   * >
   * > PKCS #7 is a standard syntax for storing signed or encrypted data. CMS is an extension of PKCS #7. PKCS#7
   * > supports data types including data, signature data, envelope data,
   * > > signature and envelope data, message digest data, and encrypted data. It is often used to protect data
   * > integrity and confidentiality.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CmsParser {
    /**
     * Converts data in CMS format into CMS objects. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > CMS data in PEM and DER formats is supported. **string** corresponds to the PEM format, and **Uint8Array**
     * > corresponds to the DER format.
     *
     * @param { Uint8Array | string } data - CMS data content.
     * @param { CmsFormat } cmsFormat - Input CMS format.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the CMS data type. Currently, signature data and decapsulated data can be obtained.
     *
     * @returns { CmsContentType } CMS data type.
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
     * Verifies the CMS of the **Signed_DATA** content type. This API uses a promise to return the result.
     *
     * @param { CmsVerificationConfig } config - CMS signature verification configuration.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the plaintext data from CMS data of the signature type. This API uses a promise to return the result.
     *
     * @returns { Promise<Uint8Array> } Promise used to return the original CMS data.
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
     * Obtains the certificate from CMS data of the signature type by passing enumerated values. The signer certificate
     * or all certificates can be obtained. This API uses a promise to return the result.
     *
     * @param { CmsCertType } type - Type of the certificate obtained from the CMS.
     * @returns { Promise<Array<X509Cert>> } Promise used to return a certificate set.
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
     * Verifies the CMS of the **Enveloped_DATA** content type. This API uses a promise to return the result.
     *
     * @param { CmsEnvelopedDecryptionConfig } config - CMS decapsulation configuration content.
     * @returns { Promise<Uint8Array> } Promise used to return the decapsulation result.
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
   * Creates a **CmsParser** object.
   *
   * @returns { CmsParser } CmsParser object.
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
   * Defines the CSR attribute representation.
   *
   * CSR attribute field. Currently, only character string attribute fields are supported. The attribute value added to
   * the CSR is encoded in UTF-8 format. The common type is challengePassword.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CsrAttribute {
    /**
     * Attribute type defined in PKCS#9.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Attribute value.
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
   * Configuration parameters for generating a CSR using the RSA private key, including the subject name, digest
   * algorithm, attribute, and output format.
   *
   * > * * Note: * *
   * >
   * > - subject is an object of the Name type defined by X509.
   * >
   * > - mdName indicates the digest algorithm name. Currently, SHA1, SHA256, SHA384, and SHA512 are supported.
   * >
   * > - attributes is an optional parameter that specifies the attribute types and attribute values specified in PKCS#9
   *  to generate a CSR. For example, challengePassword.
   * >
   * > - outFormat specifies the format of the output CSR. If the format is not specified, the PEM format is used by
   * default.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CsrGenerationConfig {
    /**
     * Provides APIs for managing the **X500DistinguishedName** instance.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    subject: X500DistinguishedName;

    /**
     * Message digest algorithm name.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;

    /**
     * A collection of attributes.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    attributes?: Array<CsrAttribute>;

    /**
     * Output format.
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
   * Generates a CSR.
   *
   * @param { PrivateKeyInfo } keyInfo - Private key information.
   * @param { CsrGenerationConfig } config - Configuration for generating the CSR.
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
   * Enumerates password-based encryption scheme (PBES) algorithms.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PbesEncryptionAlgorithm {
    /**
     * AES-128-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_128_CBC = 0,

    /**
     * AES-192-CBC.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    AES_192_CBC = 1,

    /**
     * AES-256-CBC.
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
   * Enumerates PBES algorithm parameters. Currently, only PBES2 is supported.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface PbesParams {
    /**
     * Length of the salt value. The default value is **16**, and the minimum value is **8**.
     * The value must be an integer greater than or equal to 8.
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
     * Number of iterations. The default value is **2048**.
     * The value must be a positive integer.
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
     * PBES algorithm type. The default value is **AES_256_CBC**.
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
   * Enumerates the PKCS #12 MAC digest algorithms.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum Pkcs12MacDigestAlgorithm {
    /**
     * SHA-256.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA256 = 0,

    /**
     * SHA-384.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    SHA384 = 1,

    /**
     * SHA-512.
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
   * Represents the configuration for creating .p12 files.
   *
   * @syscap SystemCapability.Security.Cert
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface Pkcs12CreationConfig {
    /**
     * Password of the .p12 file. The minimum length is 4.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Algorithm parameters for encrypting the private key.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    keyEncParams?: PbesParams;

    /**
     * Whether to encrypt the certificate. The default value is **true**. **true** means to encrypt the certificate;
     * **false** otherwise.
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
     * Algorithm parameters for encrypting the certificate.
     *
     * @syscap SystemCapability.Security.Cert
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    certEncParams?: PbesParams;

    /**
     * Length of the salt value of the P12 MAC. The minimum value is **8**, and the default value is **16**.
     * The value must be an integer greater than or equal to 8.
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
     * Number of P12 MAC iterations. The default value is **2048**.
     * The value must be a positive integer.
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
     * Enumerates the P12 MAC digest algorithms. The default value is **SHA256**.
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
   * Creates PKCS #12 data. This API uses a promise to return the result synchronously.
   *
   * @param { Pkcs12Data } data - P12 data object to be packed.
   * @param { Pkcs12CreationConfig } config - Configuration for creating the P12 file.
   * @returns { Uint8Array } P12 file created, in DER format.
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
   * Creates PKCS #12 data. This API uses a promise to return the result.
   *
   * @param { Pkcs12Data } data - PKCS #12 data object to be packed.
   * @param { Pkcs12CreationConfig } config - Configuration for creating the PKCS #12 file.
   * @returns { Promise<Uint8Array> } Promise used to return the result. PKCS #12 file created, in DER format.
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