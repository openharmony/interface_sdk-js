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
 * @kit CryptoArchitectureKit
 */
import type { AsyncCallback } from './@ohos.base';

/**
 * The **cryptoFramework** module provides APIs for cryptographic operations, shielding the underlying hardware and
 * algorithm library.
 *
 * @syscap SystemCapability.Security.CryptoFramework
 * @stagemodelonly [since 9 - 11]
 * @FaAndStageModel [since 12]
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace cryptoFramework {
  /**
   * Enumerates the operation results.
   *
   * @syscap SystemCapability.Security.CryptoFramework
   * @stagemodelonly [since 9 - 11]
   * @FaAndStageModel [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum Result {
    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_PARAMS = 401,

    /**
     * Unsupported operation.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_SUPPORT = 801,

    /**
     * The memory operation failed.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_OUT_OF_MEMORY = 17620001,

    /**
     * Failed to obtain the native object or convert parameters.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_RUNTIME_ERROR = 17620002,

    /**
     * The parameter check failed.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    ERR_PARAMETER_CHECK_FAILED = 17620003,

    /**
     * Invalid function call.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_INVALID_CALL = 17620004,

    /**
     * Cryptographic operation error.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ERR_CRYPTO_OPERATION = 17630001
  }

  /**
   * Encapsulates binary data. The core field **data** is of the Uint8Array type.
   *
   * > **NOTE**
   * >
   * > The Uint8Array typed array represents an array of 8-bit unsigned integers.
   *
   * @syscap SystemCapability.Security.CryptoFramework
   * @stagemodelonly [since 9 - 11]
   * @FaAndStageModel [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataBlob {
    /**
     * Binary data array.
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Uint8Array;
  }

  /**
   * Encapsulates the parameters used for encryption or decryption. You need to construct its child class object and
   * pass it to [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} for
   * symmetric encryption or decryption.
   *
   * It applies to the symmetric block cipher modes that require parameters such as the initialization vector (IV). If
   * the IV is not required (for example, the ECB mode), pass in **null** to
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}.
   *
   * > **NOTE**
   * >
   * > An initialization vector (IV) is a byte sequence used to introduce randomness or uniqueness in symmetric
   * > encryption modes (such as CBC, CTR, OFB, CFB, GCM, CCM, and Poly1305). It ensures that different ciphertexts are
   * > generated for the same plaintext under the same key.
   *
   * > **NOTE**
   * >
   * > The **params** parameter in
   * > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} is of the
   * > **ParamsSpec** type (parent class). However, a child class object (such as
   * > [IvParamsSpec]{@link cryptoFramework.IvParamsSpec}) needs to be passed in. When constructing the child class
   * > object, you must set **algName** for its parent class **ParamsSpec** to specify the child class object to be
   * > passed to **init()**.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ParamsSpec {
    /**
     * Algorithm for symmetric encryption or decryption. The value can be:
     *
     * - **IvParamsSpec**: applicable to the CBC, CTR, OFB, and CFB modes.
     * - **GcmParamsSpec**: applicable to the GCM mode.
     * - **CcmParamsSpec**: applicable to the CCM mode.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    algName: string;
  }

  /**
   * Encapsulates the parameters for encryption or decryption using a block cipher mode that requires an IV. It is a
   * child class of [ParamsSpec]{@link cryptoFramework.ParamsSpec} and used as a parameter in
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} for symmetric
   * encryption or decryption.
   *
   * This class is applicable to block cipher modes that require an IV, such as CBC, CTR, OFB, and CFB.
   *
   * > **NOTE**
   * >
   * > Before passing a value to
   * > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}, specify
   * > **algName** for its parent class [ParamsSpec]{@link cryptoFramework.ParamsSpec}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface IvParamsSpec extends ParamsSpec {
    /**
     * IV for encryption or decryption. Options:
     *
     * - In the CBC, CTR, OFB, or CFB mode of AES: The IV length is 16 bytes.
     * - In the CBC, OFB, or CFB mode of 3DES: The IV length is 8 bytes.
     * - In the CBC, CTR, OFB, or CFB mode of SM4<sup>10+</sup>: The IV length is 16 bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    iv: DataBlob;
  }

  /**
   * Encapsulates the parameters for encryption or decryption using a block cipher mode that requires an IV. It is a
   * child class of [ParamsSpec]{@link cryptoFramework.ParamsSpec} and used as a parameter in
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} for symmetric
   * encryption or decryption.
   *
   * Applies to the GCM mode.
   *
   * > **NOTE**
   * >
   * > 1. Before passing a value to
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}, specify
   * **algName** for its parent class [ParamsSpec](#paramsspec).
   * > 2. The Crypto framework imposes no additional restrictions on the IV of 1 to 128 bytes. However, the operation
   * result depends on the underlying OpenSSL support.
   * > 3. If **aad** is not required or the **aad** length is 0, you can set its **data** attribute to an empty
   * Uint8Array in the **aad: { data: new Uint8Array() }** format when constructing **GcmParamsSpec**.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface GcmParamsSpec extends ParamsSpec {
    /**
     * IV, which is of 1 to 128 bytes. A 12-byte IV is commonly used.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    iv: DataBlob;

    /**
     * Additional authentication data (AAD), which is of 0 to INT_MAX bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    aad: DataBlob;

    /**
     * Authentication tag, which is of 16 bytes.
     *
     * When GCM mode is used for encryption, you need to extract the last 16 bytes from the
     * [DataBlob]{@link cryptoFramework.DataBlob} returned by
     * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)} or
     * [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)} and use them as **authTag** in
     * **GcmParamsSpec** for
     * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} or
     * [initSync()]{@link cryptoFramework.Cipher.initSync}.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    authTag: DataBlob;
  }

  /**
   * Encapsulates the parameters for encryption or decryption using a block cipher mode that requires an IV. It is a
   * child class of [ParamsSpec]{@link cryptoFramework.ParamsSpec} and used as a parameter in
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} for symmetric
   * encryption or decryption.
   *
   * Applies to the CCM mode.
   *
   * > **NOTE**
   * >
   * > Before passing a value to
   * > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}, specify
   * > **algName** for its parent class [ParamsSpec]{@link cryptoFramework.ParamsSpec}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CcmParamsSpec extends ParamsSpec {
    /**
     * IV for encryption and decryption. Only 7 bytes are supported. If the length of the input **iv** parameter exceeds
     * 7 bytes, the excess part will be truncated.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    iv: DataBlob;

    /**
     * AAD for encryption and decryption. The AAD value contains 1 to 2,048 bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    aad: DataBlob;

    /**
     * Authentication tag, which is of 16 bytes.
     *
     * When CCM mode is used for encryption, you need to extract the last 16 bytes from the
     * [DataBlob]{@link cryptoFramework.DataBlob} returned by
     * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)} or
     * [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)} and use them as **authTag** in
     * **CcmParamsSpec** for
     * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} or
     * [initSync()]{@link cryptoFramework.Cipher.initSync}.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    authTag: DataBlob;
  }

  /**
   * Encapsulates the parameters for encryption or decryption using a block cipher mode that requires an IV. It is a
   * child class of [ParamsSpec]{@link cryptoFramework.ParamsSpec} and used as a parameter in
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} for symmetric
   * encryption or decryption.
   *
   * Applicable to [ChaCha20-Poly1305](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20).
   *
   * > **NOTE**
   * >
   * > Before passing a value to
   * > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}, specify
   * > **algName** for its parent class [ParamsSpec]{@link cryptoFramework.ParamsSpec}.
   * >
   * > When the Poly1305 mode is used for encryption, you need to extract the last 16 bytes from the
   * > [DataBlob]{@link cryptoFramework.DataBlob} returned by
   * > [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)} or
   * > [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)} and use them as **authTag** in
   * > [Poly1305ParamsSpec]{@link cryptoFramework.Poly1305ParamsSpec} for
   * > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} or
   * > [initSync()]{@link cryptoFramework.Cipher.initSync} during decryption.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface Poly1305ParamsSpec extends ParamsSpec {
    /**
     * IV, which is of 12 bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    iv: DataBlob;

    /**
     * AAD of arbitrary length.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    aad: DataBlob;

    /**
     * Authentication tag, which is of 16 bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    authTag: DataBlob;
  }

  /**
   * Describes parameters in
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} for symmetric
   * encryption and decryption using authenticated encryption with association data (AEAD). It inherits from
   * [ParamsSpec]{@link cryptoFramework.ParamsSpec}.
   *
   * It is applicable to the CCM and GCM modes of
   * [AES](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#aes).
   * It is applicable to the GCM mode of
   * [SM4](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#sm4).
   * It is applicable to [ChaCha20-Poly1305](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20).
   *
   * > **NOTE**
   * >
   * > When **AeadParamsSpec** is used for encryption in AES-CCM mode:
   * > - If the tag length is specified during encryption, the same length must be passed during decryption.
   * >
   * > - Only one of [update]{@link cryptoFramework.Cipher.update} and
   * > [doFinal]{@link cryptoFramework.Cipher.doFinal} can be called for encryption or decryption in CCM mode. Each
   * > method can be called only once.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface AeadParamsSpec extends ParamsSpec {
    /**
     * Number used once.
     *
     * <br>For AES-CCM, the nonce length ranges from 7 to 13 bytes.
     * For AES-GCM, the nonce length ranges from 1 to 128 bytes, 12 bytes are recommended.
     * For SM4-GCM, the nonce length ranges from 1 to 128 bytes, 12 bytes are recommended.
     * For ChaCha20-Poly1305, the nonce length must be 12 bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    nonce: Uint8Array;

    /**
     * Optional additional authenticated data, which is of any bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    authenticatedData?: Uint8Array;

    /**
     * Authentication tag length.
     *
     * For encryption, the tag will be added to the end of the ciphertext.
     * For decryption, the tag should be at the end of the ciphertext.
     * The value should be an integer.
     * <br>For AES-CCM, the default value is 12. The supported values are 4, 6, 8, 10, 12, 14, and 16.
     * For AES-GCM, the default value is 16. The supported values are 4, 8, 12, 13, 14, 15, and 16.
     * For SM4-GCM, the default value is 16. The supported values are 4, 8, 12, 13, 14, 15, and 16.
     * For ChaCha20-Poly1305, the default value is 16. The supported value is 16.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    tagLen?: int;
  }

  /**
   * Enumerates the cryptographic operations.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum CryptoMode {
    /**
     * Encryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ENCRYPT_MODE = 0,

    /**
     * Decryption.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    DECRYPT_MODE = 1
  }

  /**
   * Represents the RSA private key encoding parameters. You can use it to generate an encoded private key string with
   * the specified algorithm and password.
   *
   * > **NOTE**
   * >
   * > - **password** specifies the password used for encoding the private key. It is mandatory.
   * >
   * > - **cipherName** specifies the algorithm used for encoding. It is mandatory. Currently, only **AES-128-CBC**,
   * > **AES-192-CBC**, **AES-256-CBC**, and **DES-EDE3-CBC** are supported.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface KeyEncodingConfig {
    /**
     * Password used for encoding the private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Algorithm to use.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    cipherName: string;
  }

  /**
   * Provides APIs for key operations. Before performing cryptographic operations (such as encryption and decryption),
   * you need to construct a child class object of **Key** and pass it to
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} of the
   * [Cipher]{@link cryptoFramework.Cipher} instance.
   *
   * Keys can be generated by a child class key generator. For details, see the child class description. The child
   * classes include [SymKey]{@link cryptoFramework.SymKey}, [PubKey]{@link cryptoFramework.PubKey}, and
   * [PriKey]{@link cryptoFramework.PriKey}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Key {
    /**
     * Obtains the byte stream of the key data. This API returns the result synchronously. The key can be a symmetric
     * key, public key, or private key. The public key must comply with the ASN.1 syntax, X.509 specifications, and DER
     * encoding. The private key must comply with the ASN.1 syntax, PKCS #8 specifications, and DER encoding.
     *
     * > **NOTE**
     * >
     * > When the RSA algorithm generates a private key using key parameters, **getEncoded** is available for the
     * > private key object.
     *
     * @returns { DataBlob } Key obtained.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getEncoded(): DataBlob;

    /**
     * Obtains the bit length of a key synchronously. The key can be a symmetric key, public key, or private key.
     *
     * @returns { int } Bit length of the key.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeySize(): int;

    /**
     * Indicates the format of the key object.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: string;

    /**
     * Indicates the algorithm name of the key object. This parameter contains the key length if the key is a symmetric
     * key.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Provides APIs for symmetric key operations. It is a child class of [Key]{@link cryptoFramework.Key}.
   * Its objects need to be passed to
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)} of the
   * [Cipher]{@link cryptoFramework.Cipher} instance in symmetric encryption and decryption.
   *
   * Symmetric keys can be generated by a [SymKeyGenerator]{@link cryptoFramework.SymKeyGenerator}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface SymKey extends Key {
    /**
     * Clears the keys in memory. This API returns the result synchronously. Call this API when the symmetric key
     * instance is no longer required.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    clearMem(): void;
  }

  /**
   * Provides APIs for private key operations. **PriKey** is a child class of
   * [Key]{@link cryptoFramework.Key}. It needs to be passed in during asymmetric encryption and
   * decryption, signing, and key agreement.
   *
   * The private key can be generated by using the asymmetric key generator
   * [AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator} or
   * [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface PriKey extends Key {
    /**
     * Clears the keys in memory. This API returns the result synchronously.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    clearMem(): void;

    /**
     * Obtains a key parameter. This API returns the result synchronously.
     *
     * @param { AsyKeySpecItem } itemType - Key parameter type to obtain.
     * @returns { bigint | string | int } Content of the key parameter obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | int;

    /**
     * Obtains the private key data that complies with the ASN.1 syntax and DER encoding based on the specified format (
     * such as the key specifications).
     *
     * In API versions 12 to 24, only the ECC private key data in PKCS #8 format can be obtained.
     *
     * Since API version 26.0.0, the RSA private key data in PKCS #1 and PKCS #8 formats can be obtained.
     *
     * > **NOTE**
     * >
     * > The difference between [Key.getEncoded()]{@link cryptoFramework.Key.getEncoded} and this API is as follows:
     * > 1. You can specify the format of the key data to be obtained in this API. Currently, the ECC private key data
     * > in PKCS #8 format is supported.
     * > 2. The format of the key data to be obtained cannot be specified in
     * > [Key.getEncoded()]{@link cryptoFramework.Key.getEncoded}.
     *
     * @param { string } format - Format of the key.<br>In API versions 12 to 24, only PKCS #8 format is supported.<br>
     *     Since API version 26.0.0, the RSA private key can be in PKCS #1 or PKCS #8 format.
     * @returns { DataBlob } ECC private key data obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedDer(format: string): DataBlob;

    /**
     * Obtains the key data. This API returns the result synchronously.
     *
     * @param { string } format - Encoding format of the key data to obtain. RSA key is supported, the format can be
     *     **'PKCS8'** or **'PKCS1'**. Since API version 26.0.0, EC key is supported, the format can be **'PKCS8'**
     *     or **'EC'**.
     * @returns { string } Key data obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedPem(format: string): string;

    /**
     * Obtains the key data. This API returns the result synchronously. Currently, only RSA key are supported.
     *
     * @param { string } format - Encoding format of the key data to obtain. For RSA key, the format can be **'PKCS8'**
     *     or **'PKCS1'**.
     * @param { KeyEncodingConfig } config - Options (including the password and algorithm) for encoding the private
     *     key.
     * @returns { string } Key data obtained. If **config** is specified, the key obtained is encoded.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getEncodedPem(format: string, config: KeyEncodingConfig): string;

    /**
     * Obtains a public key from a private key. This API uses a promise to return the result.
     *
     * @returns { Promise<PubKey> } Promise used to return the public key.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    getPubKey(): Promise<PubKey>;

    /**
     * Obtains a public key from a private key in synchronous mode.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link getPubKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { PubKey } Public key object.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    getPubKeySync(): PubKey;

    /**
     * Obtains the private key data based on the specified key data type. This API uses a promise to return the result.
     *
     * @param { AsyKeyDataItem } itemType - Key data type.
     * @returns { Promise<Uint8Array> } Promise used to return the private key data of the specified key data type.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyData(itemType: AsyKeyDataItem): Promise<Uint8Array>;

    /**
     * Obtains the private key data based on the specified key data type. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link getKeyData}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { AsyKeyDataItem } itemType - Key data type.
     * @returns { Uint8Array } Private key data of the specified key data type.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyDataSync(itemType: AsyKeyDataItem): Uint8Array;
  }

  /**
   * Provides APIs for public key operations. **PubKey** is a child class of
   * [Key]{@link cryptoFramework.Key}. It needs to be passed in during asymmetric encryption and
   * decryption, signature verification, and key agreement.
   *
   * The public key can be generated by using the asymmetric key generator
   * [AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator} or
   * [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface PubKey extends Key {
    /**
     * Obtains a key parameter. This API returns the result synchronously.
     *
     * @param { AsyKeySpecItem } itemType - Key parameter to obtain.
     * @returns { bigint | string | int } Content of the key parameter obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 801 - This operation is not supported. [since 12]
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | int;

    /**
     * Obtains the public key data that complies with the ASN.1 syntax and DER encoding format based on the specified
     * key format (such as the specifications and compression status). Currently, only the ECC compressed and
     * uncompressed public key data is supported.
     *
     * > **NOTE**
     * >
     * > The difference between [Key.getEncoded()]{@link cryptoFramework.Key.getEncoded} and this API is as follows:
     * > 1. You can specify the format of the data to be obtained in this API.
     * > 2. The format of the key to be obtained cannot be specified in
     * [Key.getEncoded()]{@link cryptoFramework.Key.getEncoded}. It must match that of the original data, which is the
     * format of the key object generated by [convertKey]{@link cryptoFramework.AsyKeyGenerator.convertKey}.
     *
     * @param { string } format - Format of the key.<br>In API versions 12 to 24, the value can only be
     *     **X509|COMPRESSED** and **X509|UNCOMPRESSED**.
     *     <br>Since API version 26.0.0, the RSA public key format supports **PKCS1** and **X509**.
     * @returns { DataBlob } Public key data obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedDer(format: string): DataBlob;

    /**
     * Obtains the key data. This API returns the result synchronously.
     *
     * @param { string } format - Encoding format of the key data to obtain. RSA key is supported, the format can be
     *     **'X509'** or **'PKCS1'**. Since API version 26.0.0, EC key is supported, the format can be **'X509'**.
     * @returns { string } Key data obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedPem(format: string): string;

    /**
     * Obtains the public key data based on the specified key data type. This API uses a promise to return the result.
     *
     * @param { AsyKeyDataItem } itemType - Key data type.
     * @returns { Promise<Uint8Array> } Promise used to return the public key data of the specified key data type.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyData(itemType: AsyKeyDataItem): Promise<Uint8Array>;

    /**
     * Obtains the public key data based on the specified key data type. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link getKeyData}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { AsyKeyDataItem } itemType - Key data type.
     * @returns { Uint8Array } Public key data of the specified key data type.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyDataSync(itemType: AsyKeyDataItem): Uint8Array;
  }

  /**
   * Defines an asymmetric key pair, which includes a public key and a private key.
   *
   * The asymmetric key pair can be generated by using the asymmetric key generator
   * [AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator} or
   * [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}.
   *
   * > **NOTE**
   * >
   * > The **pubKey** and **priKey** objects are members of the **KeyPair** object. When the **KeyPair** object is out
   * > of the scope, its **pubKey** and **priKey** objects will be destructed.
   * >
   * > The service must reference the **KeyPair** object instead of the internal **pubKey** or **priKey** object.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface KeyPair {
    /**
     * KeyPair's private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly priKey: PriKey;

    /**
     * KeyPair's public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly pubKey: PubKey;
  }

  /**
   * Provides APIs for random number operations. Before using any API of the **Random** class, you must create a
   * **Random** instance by using [createRandom]{@link cryptoFramework.createRandom}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
   * @stagemodelonly [since 9 - 11]
   * @FaAndStageModel [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Random {
    /**
     * Generates a random number of the specified length. This API uses an asynchronous callback to return the result.
     *
     * @param { int } len - Length of the random number to generate, in bytes. The value range is [1, INT_MAX].
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the random number obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    generateRandom(len: int, callback: AsyncCallback<DataBlob>): void;

    /**
     * Generates a random number of the specified length. This API uses a promise to return the result.
     *
     * @param { int } len - Length of the random number to generate, in bytes. The value range is [1, INT_MAX].
     * @returns { Promise<DataBlob> } Promise used to return the random number generated.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    generateRandom(len: int): Promise<DataBlob>;

    /**
     * Generates a random number of the specified length. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generateRandom}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { int } len - Length of the random number to generate, in bytes. The value range is [1, INT_MAX].
     * @returns { DataBlob } Returns the generated random number.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
     * @stagemodelonly [since 10 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    generateRandomSync(len: int): DataBlob;

    /**
     * Sets a seed.
     *
     * @param { DataBlob } seed - Seed to set.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setSeed(seed: DataBlob): void;

    /**
     * Enables the hardware entropy source.
     *
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @stagemodelonly
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    enableHardwareEntropy(): void;

    /**
     * Indicates the random generation algorithm name. Currently, only CTR_DRBG is supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates a **Random** instance for generating random numbers and setting seeds.
   *
   * @returns { Random } Returns the [Random]{@link cryptoFramework.Random} instance created.
   *     <br>For details about the supported specifications, see
   *     [Supported Algorithms and Specifications](docroot://security/CryptoArchitectureKit/crypto-generate-random-number.md#supported-algorithms-and-specifications)
   *     .
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Rand [since 12]
   * @stagemodelonly [since 9 - 11]
   * @FaAndStageModel [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createRandom(): Random;
  /**
   * Provides APIs for using the **AsyKeyGenerator**. Before using any API of the **AsyKeyGenerator** class, you must
   * create an **AsyKeyGenerator** instance by using
   * [createAsyKeyGenerator]{@link cryptoFramework.createAsyKeyGenerator}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AsyKeyGenerator {
    /**
     * Generates a random key pair using this asymmetric key generator. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { AsyncCallback<KeyPair> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the key pair obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateKeyPair(callback: AsyncCallback<KeyPair>): void;

    /**
     * Generates a random key pair using this asymmetric key generator. This API uses a promise to return the result.
     *
     * @returns { Promise<KeyPair> } Promise used to return the asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * Generates a random key pair using this asymmetric key generator. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generateKeyPair}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { KeyPair } Asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateKeyPairSync(): KeyPair;

    /**
     * Converts asymmetric key data to a key pair object. This API uses an asynchronous callback to return the result.
     *
     * @param { DataBlob } pubKey - The public key data blob.
     * @param { DataBlob } priKey - The private key data blob.
     * @param { AsyncCallback<KeyPair> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the asymmetric key pair obtained. Otherwise, **err** is an error
     *     object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    convertKey(pubKey: DataBlob, priKey: DataBlob, callback: AsyncCallback<KeyPair>): void;

    /**
     * Converts data into an asymmetric key pair. This API uses an asynchronous callback to return the result.
     *
     * @param { DataBlob | null } pubKey - Public key material to convert. If no public key needs to be converted, set
     *     this parameter to **null**. In versions earlier than API version 10, only **DataBlob** is supported. Since
     *     API version 10, **null** is also supported.
     * @param { DataBlob | null } priKey - Private key material to convert. If no private key needs to be converted, set
     *     this parameter to **null**. In versions earlier than API version 10, only **DataBlob** is supported. Since
     *     API version 10, **null** is also supported.
     * @param { AsyncCallback<KeyPair> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the key pair obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    convertKey(pubKey: DataBlob | null, priKey: DataBlob | null, callback: AsyncCallback<KeyPair>): void;

    /**
     * Converts asymmetric key data to a key pair object. This API uses a promise to return the result.
     *
     * @param { DataBlob } pubKey - The public key data blob.
     * @param { DataBlob } priKey - The private key data blob.
     * @returns { Promise<KeyPair> } Promise used to return the asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    convertKey(pubKey: DataBlob, priKey: DataBlob): Promise<KeyPair>;

    /**
     * Converts data into an asymmetric key pair. This API uses a promise to return the result.
     *
     * @param { DataBlob | null } pubKey - Public key material to convert. If no public key needs to be converted, set
     *     this parameter to **null**. In versions earlier than API version 10, only **DataBlob** is supported. Since
     *     API version 10, **null** is also supported.
     * @param { DataBlob | null } priKey - Private key material to convert. If no private key needs to be converted, set
     *     this parameter to **null**. In versions earlier than API version 10, only **DataBlob** is supported. Since
     *     API version 10, **null** is also supported.
     * @returns { Promise<KeyPair> } Promise used to return the asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    convertKey(pubKey: DataBlob | null, priKey: DataBlob | null): Promise<KeyPair>;

    /**
     * Converts data into an asymmetric key pair. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link convertKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob | null } pubKey - Public key material. If no public key needs to be converted, set this
     *     parameter to **null**. Before API version 10, only **DataBlob** is supported. Since API version 10, **null**
     *     can be passed in.
     * @param { DataBlob | null } priKey - Private key material. If no private key needs to be converted, set this
     *     parameter to **null**. Before API version 10, only **DataBlob** is supported. Since API version 10, **null**
     *     can be passed in.
     * @returns { KeyPair } Asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertKeySync(pubKey: DataBlob | null, priKey: DataBlob | null): KeyPair;

    /**
     * Converts data into an asymmetric key pair. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > 1. When **convertPemKey()** is used to convert an external string into an asymmetric key object defined by
     * > the Crypto framework, the public key must comply with the ASN.1 syntax, X.509 specifications, and PEM
     * > encoding format, and the private key must comply with the ASN.1 syntax, PKCS #8 specifications, and PEM
     * > encoding format.
     * > 2. In **convertPemKey()**, you can pass in either **pubKey** or **priKey**, or both of them. If one of them is
     * > passed in, the returned **KeyPair** instance contains only the key converted from the data you passed in.
     * > 3. When **convertPemKey** is used to convert an external string into an asymmetric key object defined by the
     * > Crypto framework, the system does not verify whether the specifications of the generated key object are the
     * > same as the key specifications specified for the asymmetric key generator.
     *
     * @param { string | null } pubKey - Public key material to convert. If no public key needs to be converted, set
     *     this parameter to **null**.
     * @param { string | null } priKey - Private key material to convert. If no private key needs to be converted, set
     *     this parameter to **null**.<br>Note: The public key and private key materials cannot be both null or empty
     *     strings.
     * @returns { Promise<KeyPair> } Promise used to return the asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertPemKey(pubKey: string | null, priKey: string | null): Promise<KeyPair>;

    /**
     * Converts data into an asymmetric key pair. Encrypted private keys are supported. The private key password is
     * synchronously passed to decrypt the private key. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > 1. When **convertPemKey()** is used to convert an external string into an asymmetric key object defined by
     * > the Crypto framework, the public key must comply with the ASN.1 syntax, X.509 specifications, and PEM
     * > encoding format, and the private key must comply with the ASN.1 syntax, PKCS #8 specifications, and PEM
     * > encoding format.
     * > 2. In **convertPemKey()**, you can pass in either **pubKey** or **priKey**, or both of them. If one of them is
     * > passed in, the returned **KeyPair** instance contains only the key converted from the data you passed in.
     * > 3. When **convertPemKey** is used to convert an external string into an asymmetric key object defined by the
     * > Crypto framework, the system does not verify whether the specifications of the generated key object are the
     * > same as the key specifications specified for the asymmetric key generator.
     * > 4. If **password** is passed in, it can be used to decrypt the encrypted private key.
     *
     * @param { string | null } pubKey - Public key material to convert. If no public key needs to be converted, set
     *     this parameter to **null**.
     * @param { string | null } priKey - Private key material to convert. If no private key needs to be converted, set
     *     this parameter to **null**.<br>Note: The public key and private key materials cannot be both null or empty
     *     strings.
     * @param { string } password - Password used to decrypt the private key.
     * @returns { Promise<KeyPair> } Promise used to return the asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    convertPemKey(pubKey: string | null, priKey: string | null, password: string): Promise<KeyPair>;

    /**
     * Converts data into an asymmetric key pair. This API returns the result synchronously.
     *
     * > **NOTE**
     * > The precautions for using **convertPemKeySync** are the same as those for **convertPemKey**. For details, see
     * > the description of
     * > [convertPemKey]{@link cryptoFramework.AsyKeyGenerator.convertPemKey(pubKey: string | null, priKey: string | null)}
     * > .
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link convertPemKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { string | null } pubKey - Public key material to convert. If no public key needs to be converted, set
     *     this parameter to **null**.
     * @param { string | null } priKey - Private key material. If no private key needs to be converted, set this
     *     parameter to **null**.<br>Note: The public key and private key materials cannot be both null or empty
     *     strings.
     * @returns { KeyPair } Asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertPemKeySync(pubKey: string | null, priKey: string | null): KeyPair;

    /**
     * Converts data into an asymmetric key pair. Encrypted private keys are supported. The private key password is
     * synchronously passed to decrypt the private key. This API is synchronous.
     *
     * > **NOTE**
     * > The precautions for using **convertPemKeySync** are the same as those for
     * > [convertPemKey]{@link cryptoFramework.AsyKeyGenerator.convertPemKey(pubKey: string | null, priKey: string | null, password: string)}
     * > .
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link convertPemKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { string | null } pubKey - Public key material to convert. If no public key needs to be converted, set
     *     this parameter to **null**.
     * @param { string | null } priKey - Private key material. If no private key needs to be converted, set this
     *     parameter to **null**. <br>Note: **pubKey** and **priKey** cannot be **null** at the same time.
     * @param { string } password - Password used to decrypt the private key.
     * @returns { KeyPair } Asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    convertPemKeySync(pubKey: string | null, priKey: string | null, password: string): KeyPair;

    /**
     * The algName of the AsyKeyGenerator.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Provides APIs for using the **symKeyGenerator**.
   *
   * Before using the APIs of this class, use [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator} to
   * create a **SymKeyGenerator** instance.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface SymKeyGenerator {
    /**
     * Generates a random key using this symmetric key generator. This API uses an asynchronous callback to return the
     * result.
     *
     * This API can be used only after a **symKeyGenerator** instance is created by using
     * [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}.
     *
     * RAND_priv_bytes() of OpenSSL can be used to generate random keys.
     *
     * > **NOTE**
     * >
     * > For symmetric keys used in the HMAC algorithm, if a hash algorithm (for example, **HMAC|SHA256**) is specified
     * > when the symmetric key generator is created, a binary key matching the hash length (for example, a 256-bit key)
     * > will be randomly generated. If no hash algorithm is specified, for example, only **HMAC** is specified, random
     * > symmetric key generation is not supported. You can generate symmetric key data using
     * > [convertKey]{@link cryptoFramework.SymKeyGenerator.convertKey(key: DataBlob, callback: AsyncCallback<SymKey>)}.
     *
     * @param { AsyncCallback<SymKey> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the symmetric key obtained. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSymKey(callback: AsyncCallback<SymKey>): void;

    /**
     * Generates a random key using this symmetric key generator. This API uses a promise to return the result.
     *
     * This API can be used only after a **symKeyGenerator** instance is created by using
     * [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}.
     *
     * RAND_priv_bytes() of OpenSSL can be used to generate random keys.
     *
     * @returns { Promise<SymKey> } Promise used to return the symmetric key generated.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSymKey(): Promise<SymKey>;

    /**
     * Generates a random key using this symmetric key generator. This API returns the result synchronously.
     *
     * This API can be used only after a **symKeyGenerator** instance is created by using
     * [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}.
     *
     * RAND_priv_bytes() of OpenSSL can be used to generate random keys.
     *
     * > **NOTE**
     * >
     * > For symmetric keys used in the HMAC algorithm, if a hash algorithm (for example, **HMAC|SHA256**) is specified
     * > when the symmetric key generator is created, a binary key matching the hash length (for example, a 256-bit key)
     * > will be randomly generated.
     *
     * If no hash algorithm is specified, for example, only **HMAC** is specified, random symmetric key generation is
     * not supported. You can generate symmetric key data using
     * [convertKeySync]{@link cryptoFramework.SymKeyGenerator.convertKeySync}.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generateSymKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { SymKey } Symmetric key generated.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateSymKeySync(): SymKey;

    /**
     * Generates a symmetric key based on specified data. This API uses an asynchronous callback to return the result.
     *
     * This API can be used only after a **symKeyGenerator** instance is created by using
     * [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}.
     *
     * > **NOTE**
     * >
     * > For symmetric keys used in the HMAC algorithm, if a hash algorithm (for example, **HMAC|SHA256**) is specified
     * > when the symmetric key generator is created, the binary key data passed in must match the hash length (for
     * > example, a 256-bit key for SHA256).
     *
     * If no hash algorithm is specified when the symmetric key generator is created (for example, only **HMAC** is
     * specified), any binary key data with a length of 1 to 4,096 bytes is supported.
     *
     * @param { DataBlob } key - Data to convert.
     * @param { AsyncCallback<SymKey> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the symmetric key obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    convertKey(key: DataBlob, callback: AsyncCallback<SymKey>): void;

    /**
     * Generates a symmetric key based on specified data. This API uses a promise to return the result.
     *
     * Before using this API, create a symmetric key generator by using
     * [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}.
     *
     * @param { DataBlob } key - Data to convert.
     * @returns { Promise<SymKey> } Promise used to return the symmetric key generated.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    convertKey(key: DataBlob): Promise<SymKey>;

    /**
     * Generates a symmetric key based on specified data.
     *
     * This API can be used only after a **symKeyGenerator** instance is created by using
     * [createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}.
     *
     * > **NOTE**
     * >
     * > For symmetric keys used in the HMAC algorithm, if a hash algorithm (for example, **HMAC|SHA256**) is specified
     * > when the symmetric key generator is created, the binary key data passed in must match the hash length (for
     * > example, a 256-bit key for SHA256). If no hash algorithm is specified when the symmetric key generator is
     * > created (for example, only **HMAC** is specified), any binary key data with a length of 1 to 4,096 bytes is
     * > supported.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link convertKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } key - Data to convert.
     * @returns { SymKey } Symmetric key obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertKeySync(key: DataBlob): SymKey;

    /**
     * Indicates the algorithm name of the SymKeyGenerator object.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates an **AsyKeyGenerator** instance based on the specified algorithm.
   *
   * For details about the supported specifications, see
   * [Asymmetric Key Generation and Conversion Specifications](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)
   * .
   *
   * @param { string } algName - Algorithm used by the asymmetric keys. For details, see the string parameters in
   *     [Asymmetric Key Generation and Conversion Specifications](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)
   *     .
   * @returns { AsyKeyGenerator } **AsyKeyGenerator** instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createAsyKeyGenerator(algName: string): AsyKeyGenerator;

  /**
   * Creates a symmetric key generator instance with the specified algorithm.
   *
   * For details about the supported specifications, see
   * [Symmetric Key Generation and Conversion Specifications](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)
   * .
   *
   * @param { string } algName - Algorithm to be used by the **symKeyGenerator** instance.<br>For details, see
   *     **String Parameter** in
   *     [Symmetric Key Generation and Conversion Specifications](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)
   *     .
   * @returns { SymKeyGenerator } **SymKeyGenerator** instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createSymKeyGenerator(algName: string): SymKeyGenerator;

  /**
   * Represents the message authentication code (MAC) parameters. You need to construct a child class object and use it
   * as a parameter when generating an HMAC or a CMAC.
   *
   * > **NOTE**
   * >
   * > **algName** specifies the MAC algorithm to use. It is mandatory.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface MacSpec {
    /**
     * Algorithm to use.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    algName: string;
  }

  /**
   * Represents the child class of [MacSpec]{@link cryptoFramework.MacSpec}. It is used as an input parameter for HMAC
   * generation.
   *
   * > **NOTE**
   * >
   * > **mdName** specifies the HMAC message digest algorithm. It is mandatory.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface HmacSpec extends MacSpec {
    /**
     * Message digest algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    mdName: string;
  }

  /**
   * Represents the child class of [MacSpec]{@link cryptoFramework.MacSpec}. It is used as an input parameter for CMAC
   * generation.
   *
   * > **NOTE**
   * >
   * > **cipherName** specifies the CMAC symmetric encryption algorithm. It is mandatory.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmacSpec extends MacSpec {
    /**
     * Symmetric encryption algorithm to use.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    cipherName: string;
  }

  /**
   * Provides APIs for message authentication code (MAC) operations. Before using any API of the **Mac** class, you must
   * create a **Mac** instance by using [createMac]{@link cryptoFramework.createMac(algName: string)}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Mac {
    /**
     * Initializes the MAC computation using a symmetric key. This API uses an asynchronous callback to return the
     * result. **init**, **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and
     * **update** is optional.
     *
     * @param { SymKey } key - Symmetric key obtained.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(key: SymKey, callback: AsyncCallback<void>): void;

    /**
     * Initializes the MAC computation using a symmetric key. This API uses a promise to return the result. **init**,
     * **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and **update** is
     * optional.
     *
     * @param { SymKey } key - Symmetric key obtained.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(key: SymKey): Promise<void>;

    /**
     * Initializes the MAC computation using a symmetric key. This API returns the result synchronously. **initSync**,
     * **updateSync**, and **doFinalSync** must be used together. **initSync** and **doFinalSync** are mandatory, and
     * **updateSync** is optional.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link init}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { SymKey } key - Symmetric key obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(key: SymKey): void;

    /**
     * Updates the MAC status. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > For details about the sample code for calling **update** multiple times in an HMAC operation, see
     * > [Generating an HMAC by Passing In Data by Segment](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment)
     * > .
     *
     * @param { DataBlob } input - Data to pass in.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(input: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Updates the MAC status. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > For details about the sample code for calling **update** multiple times in an HMAC operation, see
     * > [Generating an HMAC by Passing In Data by Segment](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment)
     * > .
     *
     * @param { DataBlob } input - Data to pass in.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(input: DataBlob): Promise<void>;

    /**
     * Updates the MAC status. This API returns the result synchronously.
     *
     * > **NOTE**
     * >
     * > For details about the sample code for calling **updateSync** multiple times in an HMAC operation, see
     * > [Generating an HMAC by Passing In Data by Segment](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment)
     * > .
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } input - Data to pass in.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(input: DataBlob): void;

    /**
     * MAC computation result. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the MAC computation result obtained. Otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    doFinal(callback: AsyncCallback<DataBlob>): void;

    /**
     * MAC computation result. This API uses a promise to return the result.
     *
     * @returns { Promise<DataBlob> } Promise used to return the MAC computation result.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    doFinal(): Promise<DataBlob>;

    /**
     * Finishes the MAC computation. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link doFinal}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { DataBlob } MAC computation result.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doFinalSync(): DataBlob;

    /**
     * Obtains the MAC length, in bytes.
     *
     * @returns { int } MAC length obtained.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMacLength(): int;

    /**
     * Indicates the algorithm name.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates a **Mac** instance for MAC operations.
   *
   * For details about the supported specifications, see
   * [MAC Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)
   * .
   *
   * @param { string } algName - Specifies the digest algorithm. For details about the supported algorithms, see
   *     [MAC Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)
   *     .
   * @returns { Mac } Returns the [Mac]{@link cryptoFramework.Mac} instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createMac(algName: string): Mac;

  /**
   * Creates a **Mac** instance for message authentication code (MAC) operations.
   *
   * For details about the supported specifications, see
   * [MAC Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)
   * .
   *
   * @param { MacSpec } macSpec - Specifies the input parameter struct based on the MAC algorithm. For details about the
   *     supported algorithms, see
   *     [MAC Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)
   *     .
   * @returns { Mac } [Mac]{@link cryptoFramework.Mac} instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 17630001 - Crypto operation error.
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function createMac(macSpec: MacSpec): Mac;

  /**
   * Provides APIs for message digest operations. Before using any API of the **Md** class, you must create an
   * **Md** instance by using [createMd]{@link cryptoFramework.createMd}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
   * @stagemodelonly [since 9 - 11]
   * @FaAndStageModel [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Md {
    /**
     * Updates the message digest status. This API uses an asynchronous callback to return the result. **update** must
     * be used with **digest** together. **digest** is mandatory, and **update** is optional.
     *
     * > **NOTE**
     * >
     * > For details about the code for calling **update** multiple times in a message digest operation, see
     * > [Generating an MD by Passing In Data by Segment](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#generating-an-md-by-passing-in-data-by-segment)
     * > .
     *
     * @param { DataBlob } input - Data to pass in.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(input: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Updates the message digest status. This API uses a promise to return the result. **update** must be used with
     * **digest** together. **digest** is mandatory, and **update** is optional.
     *
     * > **NOTE**
     * >
     * > For details about the code for calling **update** multiple times in a message digest operation, see
     * > [Generating an MD by Passing In Data by Segment](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#generating-an-md-by-passing-in-data-by-segment)
     * > .
     *
     * @param { DataBlob } input - Data to pass in.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(input: DataBlob): Promise<void>;

    /**
     * Updates the message digest status. This API returns the result synchronously. **updateSync** must be used with
     * **digestSync** together. **digestSync** is mandatory, and **updateSync** is optional.
     *
     * > **NOTE**
     * >
     * > For details about the code for calling **updateSync** multiple times in a message digest operation, see
     * > [Generating an MD by Passing In Data by Segment](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#generating-an-md-by-passing-in-data-by-segment)
     * > .
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } input - Data to pass in.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(input: DataBlob): void;

    /**
     * Generates a message digest. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the message digest obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    digest(callback: AsyncCallback<DataBlob>): void;

    /**
     * Generates a message digest. This API uses a promise to return the result.
     *
     * @returns { Promise<DataBlob> } Promise used to return the message digest generated.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    digest(): Promise<DataBlob>;

    /**
     * Generates a message digest. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link digest}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { DataBlob } Message digest generated.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    digestSync(): DataBlob;

    /**
     * Obtains the message digest length, in bytes.
     *
     * @returns { int } Message digest length obtained.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
     * @stagemodelonly [since 9 - 11]
     * @FaAndStageModel [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMdLength(): int;

    /**
     * Indicates the algorithm name.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates an **Md** instance for message digest operations.
   *
   * For details about the supported specifications, see
   * [Supported Algorithms and Specifications](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#supported-algorithms-and-specifications)
   * .
   *
   * @param { string } algName - Message digest algorithm to use. For details about the supported algorithms, see
   *     [Supported Algorithms and Specifications](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#supported-algorithms-and-specifications)
   *     .
   * @returns { Md } Returns the [Md]{@link cryptoFramework.Md} instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.MessageDigest [since 12]
   * @stagemodelonly [since 9 - 11]
   * @FaAndStageModel [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createMd(algName: string): Md;

  /**
   * Enumerates encryption and decryption parameters, which can be set by using
   * [setCipherSpec]{@link cryptoFramework.Cipher.setCipherSpec} and obtained by using
   * [getCipherSpec]{@link cryptoFramework.Cipher.getCipherSpec}.
   *
   * Currently, only RSA and SM2 are supported. Since API version 11, the **SM2_MD_NAME_STR** parameter is supported.
   * For details, see
   * [Asymmetric Key Encryption and Decryption Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md)
   * .
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum CipherSpecItem {
    /**
     * Message digest algorithm used with the PKCS1_OAEP padding mode in RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    OAEP_MD_NAME_STR = 100,

    /**
     * Mask generation algorithm used with the PKCS1_OAEP padding mode in RSA. Currently, only MGF1 is supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    OAEP_MGF_NAME_STR = 101,

    /**
     * Message digest algorithm for the MGF1 mask generation used with the PKCS1_OAEP padding mode in RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    OAEP_MGF1_MD_STR = 102,

    /**
     * **pSource** byte stream used with the PKCS1_OAEP padding mode in RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    OAEP_MGF1_PSRC_UINT8ARR = 103,

    /**
     * Message digest algorithm used in SM2.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    SM2_MD_NAME_STR = 104
  }

  /**
   * Enumerates the signing and signature verification parameters, which can be set by using
   * [setSignSpec]{@link cryptoFramework.Sign.setSignSpec(itemType: SignSpecItem, itemValue: int)} and
   * [setVerifySpec]{@link cryptoFramework.Verify.setVerifySpec(itemType: SignSpecItem, itemValue: int)}, and obtained
   * by using [getSignSpec]{@link cryptoFramework.Sign.getSignSpec} and
   * [getVerifySpec]{@link cryptoFramework.Verify.getVerifySpec}.
   *
   * Currently, only RSA and SM2 are supported. Since API version 11, the **SM2_USER_ID_UINT8ARR** parameter is
   * supported. For details, see
   * [Signing and Signature Verification Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)
   * .
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum SignSpecItem {
    /**
     * Message digest algorithm used with the PSS padding mode in RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PSS_MD_NAME_STR = 100,

    /**
     * Mask generation algorithm used with the PSS padding mode in RSA. Currently, only MGF1 is supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PSS_MGF_NAME_STR = 101,

    /**
     * Message digest parameters for the MGF1 mask generation used with the PSS padding mode in RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PSS_MGF1_MD_STR = 102,

    /**
     * Length of the salt in bytes used with the PSS padding mode in RSA.
     *
     * According to the FIPS 186-4 standard, sLen should be greater than or equal to 0 and less than or equal to the
     * hash length.
     *
     * Default:
     * For sign, automatically calculate the maximum salt length.
     * For verify, automatically calculate the salt length.
     *
     * Special:
     * For sign, you can also set the value to -1 to use the digest length as the salt length, and -2 or -3 to
     * automatically calculate the maximum salt length. The recommended value is -1.
     * For verify, you can also set the value to -1 to use the digest length as the salt length, -2 to automatically
     * calculate the salt length, or -3 to use the maximum salt length. The recommended value is -2.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PSS_SALT_LEN_NUM = 103,

    /**
     * Trailer field used in the encoding operation when PSS padding mode is used in RSA.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PSS_TRAILER_FIELD_NUM = 104,

    /**
     * User ID field in SM2.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    SM2_USER_ID_UINT8ARR = 105,

    /**
     * Indicates the value for deterministic. It is used in ML-DSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_DETERMINISTIC_BOOL = 106,

    /**
     * Indicates the value for mu. It is used in ML-DSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_MU_BOOL = 107,

    /**
     * Indicates the value for context. It is used in ML-DSA signing and verifying process.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_CONTEXT_UINT8ARR = 108
  }

  /**
   * Provides APIs for cipher operations. The
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)},
   * [update()]{@link cryptoFramework.Cipher.update(data: DataBlob, callback: AsyncCallback<DataBlob>)}, and
   * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)} APIs in
   * this class are called in sequence to implement symmetric encryption or decryption and asymmetric encryption or
   * decryption.
   *
   * For details about the complete encryption and decryption process, see
   * [Encryption and Decryption Overview](docroot://security/CryptoArchitectureKit/crypto-encryption-decryption-overview.md)
   * .
   *
   * A complete symmetric encryption/decryption process is slightly different from the asymmetric encryption/decryption
   * process.
   *
   * - Symmetric encryption and decryption: **init()** and **doFinal()** are mandatory. **update()** is optional and can
   * be called multiple times to encrypt or decrypt big data. After **doFinal()** is called to complete an encryption or
   * decryption operation, **init()** can be called to start a new encryption or decryption operation.
   * - RSA or SM2 asymmetric encryption and decryption: **init()** and **doFinal()** are mandatory, and **update()** is
   * not supported. **doFinal()** can be called multiple times to encrypt or decrypt big data. **init()** cannot be
   * called repeatedly. If the encryption/decryption mode or padding mode is changed, a new **Cipher** object must be
   * created.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Cipher {
    /**
     * Initializes the crypto operation with the given crypto mode, key and parameters. This API uses an asynchronous
     * callback to return the result.
     *
     * **init**, **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and
     * **update** is optional.
     *
     * @param { CryptoMode } opMode - Indicates the crypto mode is encryption or decryption.
     * @param { Key } key - Indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - Indicates the algorithm parameters such as IV.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid opMode value;
     *     <br>2. Invalid iv length;
     *     <br>3. Invalid key length. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec, callback: AsyncCallback<void>): void;

    /**
     * Initializes the [cipher]{@link cryptoFramework.Cipher} object for encryption and decryption. This API
     * uses an asynchronous callback to return the result.
     *
     * **init**, **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and
     * **update** is optional.
     *
     * This API can be used only after a [Cipher]{@link cryptoFramework.Cipher} instance is created by using
     * [createCipher]{@link cryptoFramework.createCipher}.
     *
     * @param { CryptoMode } opMode - Operation (encryption or decryption) to perform.
     * @param { Key } key - Key for encryption or decryption.
     * @param { ParamsSpec | null } params - Parameters for encryption or decryption. For algorithm modes without
     *     parameters (such as ECB), set this parameter to **null**. In versions earlier than API version 10, only
     *     **ParamsSpec** is supported. Since API version 10, **null** is also supported.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid opMode value;
     *     <br>2. Invalid iv length;
     *     <br>3. Invalid key length. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec | null, callback: AsyncCallback<void>): void;

    /**
     * Initializes the crypto operation with the given crypto mode, key and parameters. This API uses a promise to
     * return the result.
     *
     * **init**, **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and
     * **update** is optional.
     *
     * @param { CryptoMode } opMode - Indicates the crypto mode is encryption or decryption.
     * @param { Key } key - Indicates the symmetric key or the asymmetric key.
     * @param { ParamsSpec } params - Indicates the algorithm parameters such as IV.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid opMode value;
     *     <br>2. Invalid iv length;
     *     <br>3. Invalid key length. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec): Promise<void>;

    /**
     * Initializes the cipher object for encryption and decryption. This API uses a promise to return the result.
     *
     * **init**, **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and
     * **update** is optional.
     *
     * This API can be used only after a [Cipher]{@link cryptoFramework.Cipher} instance is created by using
     * [createCipher]{@link cryptoFramework.createCipher}.
     *
     * @param { CryptoMode } opMode - Operation (encryption or decryption) to perform.
     * @param { Key } key - Key for encryption or decryption.
     * @param { ParamsSpec | null } params - Parameters for encryption or decryption. For algorithm modes without
     *     parameters (such as ECB), set this parameter to **null**. Before API version 10, only **ParamsSpec** is
     *     supported. Since API version 10, **null** is also supported.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid opMode value;
     *     <br>2. Invalid iv length;
     *     <br>3. Invalid key length. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec | null): Promise<void>;

    /**
     * Initializes a [cipher]{@link cryptoFramework.Cipher} instance. This API returns the result synchronously.
     *
     * **initSync**, **updateSync**, and **doFinalSync** must be used together. **initSync** and **doFinalSync** are
     * mandatory, and **updateSync** is optional.
     *
     * This API can be used only after a [Cipher]{@link cryptoFramework.Cipher} instance is created by using
     * [createCipher]{@link cryptoFramework.createCipher}.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link init}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { CryptoMode } opMode - Operation (encryption or decryption) to perform.
     * @param { Key } key - Key for encryption or decryption.
     * @param { ParamsSpec | null } params - Parameters for encryption or decryption. For algorithm modes without
     *     parameters (such as ECB), set this parameter to **null**.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid opMode value;
     *     <br>2. Invalid iv length;
     *     <br>3. Invalid key length. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(opMode: CryptoMode, key: Key, params: ParamsSpec | null): void;

    /**
     * Updates the data to encrypt or decrypt by segment. This API uses an asynchronous callback to return the result.
     *
     * This API can be called only after the [Cipher]{@link cryptoFramework.Cipher} instance is initialized by
     * using [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}.
     *
     * > **NOTE**
     * >
     * > 1. The results of **update()** and **doFinal()** may vary with the block mode used. If you are not familiar
     * > with the block modes, you are advised to check each **update()** and **doFinal()** result to ensure that the
     * > results are not **null**. When a valid result is returned, extract and concatenate the data to form a complete
     * > ciphertext or plaintext.
     * > For example, in ECB and CBC modes, encryption and decryption are performed by block regardless of whether the
     * > data input by **update()** is an integer multiple of the block size, and **update()** returns the newly
     * > processed block data.
     * > That is, data is returned as long as the data passed in by **update()** reaches the size of a block. Otherwise,
     * > **null** is returned and the data will be retained until a block is formed in the next **update()** or
     * > **doFinal()**.
     * > In the final **doFinal()** operation, the remaining unprocessed data is padded based on the padding mode set in
     * > [createCipher]{@link cryptoFramework.createCipher} to the integer multiple of the block size to produce the
     * > final encrypted or decrypted data.
     * > For block cipher modes that can be converted to stream mode, the ciphertext length may be the same as the
     * > plaintext length.
     * > 2. You can call **update()** multiple times or skip calling **update()** (call **doFinal()** directly after
     * > **init()**), depending on the data volume.
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to pass data in multiple **update()** calls rather than processing it all
     * > at once.
     * > For details about the sample code for passing data in multiple **update()** calls, see
     * > [Encryption and Decryption by Segment with an AES Symmetric Key (GCM Mode)](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md).
     * > 3. RSA or SM2 asymmetric encryption and decryption do not support **update()**.
     * > 4. If CCM is used in symmetric encryption or decryption, **update()** can be called only once. In the
     * > encryption process, you can either use **update()** to encrypt data and use **doFinal()** to obtain **authTag**
     * > or use **doFinal()** without using **update()**. In the decryption process, you can either use **update()** or
     * > **doFinal()** once to decrypt data and verify the tag.
     *
     * @param { DataBlob } data - Data to be encrypted or decrypted. It cannot be null.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the data is updated
     *     successfully, **err** is **undefined**, and **data** is the encryption or decryption result obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    update(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * Updates the crypto operation with the input data, and feeds back the encrypted or decrypted data
     * this time. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > 1. The results of **update()** and **doFinal()** may vary with the block mode used. If you are not familiar
     * > with the block modes, you are advised to check each **update()** and **doFinal()** result to ensure that the
     * > results are not **null**. When a valid result is returned, extract and concatenate the data to form a complete
     * > ciphertext or plaintext.
     * > For example, in ECB and CBC modes, encryption and decryption are performed by block regardless of whether the
     * > data input by **update()** is an integer multiple of the block size, and **update()** returns the newly
     * > processed block data.
     * > That is, data is returned as long as the data passed in by **update()** reaches the size of a block. Otherwise,
     * > **null** is returned and the data will be retained until a block is formed in the next **update()** or
     * > **doFinal()**.
     * > In the final **doFinal()** operation, the remaining unprocessed data is padded based on the padding mode set in
     * > [createCipher]{@link cryptoFramework.createCipher} to the integer multiple of the block size to produce the
     * > final encrypted or decrypted data.
     * > For block cipher modes that can be converted to stream mode, the ciphertext length may be the same as the
     * > plaintext length.
     * > 2. You can call **update()** multiple times or skip calling **update()** (call **doFinal()** directly after
     * > **init()**), depending on the data volume.
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to pass data in multiple **update()** calls rather than processing it all
     * > at once.
     * > For details about the sample code for passing data in multiple **update()** calls, see
     * > [Encryption and Decryption by Segment with an AES Symmetric Key (GCM Mode)](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md).
     * > 3. RSA or SM2 asymmetric encryption and decryption do not support **update()**.
     * > 4. If CCM is used in symmetric encryption or decryption, **update()** can be called only once. In the
     * > encryption process, you can either use **update()** to encrypt data and use **doFinal()** to obtain **authTag**
     * > or use **doFinal()** without using **update()**. In the decryption process, you can either use **update()** or
     * > **doFinal()** once to decrypt data and verify the tag.
     *
     * @param { DataBlob } data - Indicates the data to be encrypted or decrypted.
     * @param { AsyncCallback<DataBlob | null> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the encrypted or decrypted data obtained. Otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    update(data: DataBlob, callback: AsyncCallback<DataBlob | null>): void;

    /**
     * Updates the data to encrypt or decrypt by segment. This API uses a promise to return the result.
     *
     * This API can be called only after the [Cipher]{@link cryptoFramework.Cipher} instance is initialized by
     * using [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}.
     *
     * > **NOTE**
     * >
     * > 1. The results of **update()** and **doFinal()** may vary with the block mode used. If you are not familiar
     * > with the block modes, you are advised to check each **update()** and **doFinal()** result to ensure that the
     * > results are not **null**. When a valid result is returned, extract and concatenate the data to form a complete
     * > ciphertext or plaintext.
     * > For example, in ECB and CBC modes, encryption and decryption are performed by block regardless of whether the
     * > data input by **update()** is an integer multiple of the block size, and **update()** returns the newly
     * > processed block data.
     * > That is, data is returned as long as the data passed in by **update()** reaches the size of a block. Otherwise,
     * > **null** is returned and the data will be retained until a block is formed in the next **update()** or
     * > **doFinal()**.
     * > In the final **doFinal()** operation, the remaining unprocessed data is padded based on the padding mode set in
     * > [createCipher]{@link cryptoFramework.createCipher} to the integer multiple of the block size to produce the
     * > final encrypted or decrypted data.
     * > For block cipher modes that can be converted to stream mode, the ciphertext length may be the same as the
     * > plaintext length.
     * > 2. You can call **update()** multiple times or skip calling **update()** (call **doFinal()** directly after
     * > **init()**), depending on the data volume.
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to pass data in multiple **update()** calls rather than processing it all
     * > at once.
     * > For details about the sample code for passing data in multiple **update()** calls, see
     * > [Encryption and Decryption by Segment with an AES Symmetric Key (GCM Mode)](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md).
     * > 3. RSA or SM2 asymmetric encryption and decryption do not support **update()**.
     * > 4. If CCM is used in symmetric encryption or decryption, **update()** can be called only once. In the
     * > encryption process, you can either use **update()** to encrypt data and use **doFinal()** to obtain **authTag**
     * > or use **doFinal()** without using **update()**. In the decryption process, you can either use **update()** or
     * > **doFinal()** once to decrypt data and verify the tag.
     *
     * @param { DataBlob } data - Data to encrypt or decrypt. It cannot be null.
     * @returns { Promise<DataBlob> } Promise used to return the **DataBlob** (containing the encrypted or decrypted
     *     data).
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    update(data: DataBlob): Promise<DataBlob>;

    /**
     * Updates the crypto operation with the input data, and feeds back the encrypted or decrypted data this time. This
     * API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > 1. The results of **update()** and **doFinal()** may vary with the block mode used. If you are not familiar
     * > with the block modes, you are advised to check each **update()** and **doFinal()** result to ensure that the
     * > results are not **null**. When a valid result is returned, extract and concatenate the data to form a complete
     * > ciphertext or plaintext.
     * > For example, in ECB and CBC modes, encryption and decryption are performed by block regardless of whether the
     * > data input by **update()** is an integer multiple of the block size, and **update()** returns the newly
     * > processed block data.
     * > That is, data is returned as long as the data passed in by **update()** reaches the size of a block. Otherwise,
     * > **null** is returned and the data will be retained until a block is formed in the next **update()** or
     * > **doFinal()**.
     * > In the final **doFinal()** operation, the remaining unprocessed data is padded based on the padding mode set in
     * > [createCipher]{@link cryptoFramework.createCipher} to the integer multiple of the block size to produce the
     * > final encrypted or decrypted data.
     * > For block cipher modes that can be converted to stream mode, the ciphertext length may be the same as the
     * > plaintext length.
     * > 2. You can call **update()** multiple times or skip calling **update()** (call **doFinal()** directly after
     * > **init()**), depending on the data volume.
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to pass data in multiple **update()** calls rather than processing it all
     * > at once.
     * > For details about the sample code for passing data in multiple **update()** calls, see
     * > [Encryption and Decryption by Segment with an AES Symmetric Key (GCM Mode)](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md).
     * > 3. RSA or SM2 asymmetric encryption and decryption do not support **update()**.
     * > 4. If CCM is used in symmetric encryption or decryption, **update()** can be called only once. In the
     * > encryption process, you can either use **update()** to encrypt data and use **doFinal()** to obtain **authTag**
     * > or use **doFinal()** without using **update()**. In the decryption process, you can either use **update()** or
     * > **doFinal()** once to decrypt data and verify the tag.
     *
     * @param { DataBlob } data - Indicates the data to be encrypted or decrypted.
     * @returns { Promise<DataBlob | null> } Promise used to return the encrypted or decrypted data.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    update(data: DataBlob): Promise<DataBlob | null>;

    /**
     * Updates the data to encrypt or decrypt by segment.
     *
     * This API can be called only after the [Cipher]{@link cryptoFramework.Cipher} instance is initialized by
     * using [initSync()]{@link cryptoFramework.Cipher.initSync}.
     *
     * See **NOTE** in **update()** for other precautions.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } data - Data to encrypt or decrypt. It cannot be null.
     * @returns { DataBlob } Encryption/decryption result.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    updateSync(data: DataBlob): DataBlob;

    /**
     * Updates the data to encrypt or decrypt by segment.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } data - Indicates the data to be encrypted or decrypted.
     * @returns { DataBlob | null } cipherText when encrypted or plainText when decrypted.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    updateSync(data: DataBlob): DataBlob | null;

    /**
     * Finishes the crypto operation, encrypts or decrypts the input data, and then feeds back the output data.
     * Data cannot be updated after the crypto operation is finished. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { DataBlob } data - Indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the encrypted or decrypted data obtained. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    doFinal(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * (1) Processes the remaining data and the data passed in this time, and completes the encryption or decryption
     * operation for symmetric encryption and decryption. This API uses an asynchronous callback to return the encrypted
     * or decrypted data. If a small amount of data needs to be encrypted or decrypted, you can use **doFinal()** to
     * pass in all the data without using **update()**. If all the data has been passed in by
     * [update()]{@link cryptoFramework.Cipher.update(data: DataBlob, callback: AsyncCallback<DataBlob>)}, you can pass
     * in **null** in **data** of **doFinal()**. The output of **doFinal()** varies with the symmetric block cipher mode
     * in use. This API uses an asynchronous callback to return the result.
     *
     * - In a single encryption process with GCM or CCM mode, concatenating the results of each **update()** and
     * **doFinal()** produces the ciphertext and **authTag**. In GCM mode, **authTag** is the last 16 bytes. In CCM
     * mode, **authTag** is the last 12 bytes. The rest part is the ciphertext. If **data** passed to **doFinal()** is
     * **null**, the **doFinal()** result is only the **authTag**. During decryption, **authTag** must be set in
     * [GcmParamsSpec]{@link cryptoFramework.GcmParamsSpec} or [CcmParamsSpec]{@link cryptoFramework.CcmParamsSpec}, and
     * the ciphertext must be set in **data**.
     * - For other symmetric encryption and decryption modes and GCM and CCM decryption modes, concatenating the results
     * of **update()** and **doFinal()** throughout the process will yield the complete plaintext or ciphertext.
     *
     * (2) Encrypts or decrypts the data passed in this time in RSA and SM2 asymmetric encryption or decryption. This
     * API uses an asynchronous callback to return the encrypted or decrypted data. If a large amount of data needs to
     * be encrypted/decrypted, call **doFinal()** multiple times and concatenate the result of each **doFinal()** to
     * obtain the complete plaintext/ciphertext.
     *
     * > **NOTE**
     * >
     * > 1. In symmetric encryption and decryption, after **doFinal** is called, the encryption and decryption process
     * > is complete and the [Cipher]{@link cryptoFramework.Cipher} instance is cleared. When a new encryption and
     * > decryption process is started, **init()** must be called with a complete parameter list for initialization.
     * > Even if the same symmetric key is used to encrypt and decrypt the same **Cipher** instance, the **params**
     * > parameter must be set when **init** is called during decryption.
     * > 2. If a decryption fails, check whether the data to be encrypted and decrypted matches the parameters in
     * > **init()**. For the GCM mode, check whether the **authTag** obtained after encryption is obtained from the
     * > **GcmParamsSpec** for decryption.
     * > 3. The result of **doFinal()** may be **null**. To avoid exceptions, determine whether the result is **null**
     * > before using the **.data** field to access the **doFinal()** result.
     * > For encryption in CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is **null**.
     * > For decryption in GCM, CCM, CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is
     * > **null**. For decryption in other modes, if **update** is called to pass in all the plaintext, which is an
     * > integer multiple of the encryption block size, and **doFinal()** is called to pass in **null**, the returned
     * > result is **null**.
     * > 4. For details about the sample code for calling **doFinal** multiple times in asymmetric encryption and
     * > decryption, see [Encryption and Decryption by Segment with an RSA Asymmetric Key Pair](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md).
     * > The operations are similar for SM2 and RSA.
     *
     * @param { DataBlob | null } data - Data to encrypt or decrypt. In symmetric encryption and decryption, this
     *     parameter can be **null**, but **{data: Uint8Array (empty)}** cannot be passed in. Before API version 10,
     *     only **DataBlob** is supported. Since API version 10, **null** is also supported.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the encryption or decryption
     *     is successful, **err** is **undefined**, and **data** is the encryption or decryption result obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;

    /**
     * Finishes the crypto operation, encrypts or decrypts the input data, and then feeds back the output data.
     * Data cannot be updated after the crypto operation is finished. This API uses an asynchronous callback
     * to return the result.
     *
     * > **NOTE**
     * >
     * > 1. In symmetric encryption and decryption, after **doFinal** is called, the encryption and decryption process
     * > is complete and the [Cipher]{@link cryptoFramework.Cipher} instance is cleared. When a new encryption and
     * > decryption process is started, **init()** must be called with a complete parameter list for initialization.
     * > Even if the same symmetric key is used to encrypt and decrypt the same **Cipher** instance, the **params**
     * > parameter must be set when **init** is called during decryption.
     * > 2. If a decryption fails, check whether the data to be encrypted and decrypted matches the parameters in
     * > **init()**. For the GCM mode, check whether the **authTag** obtained after encryption is obtained from the
     * > **GcmParamsSpec** for decryption.
     * > 3. The result of **doFinal()** may be **null**. To avoid exceptions, determine whether the result is **null**
     * > before using the **.data** field to access the **doFinal()** result.
     * > For encryption in CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is **null**.
     * > For decryption in GCM, CCM, CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is
     * > **null**. For decryption in other modes, if **update** is called to pass in all the plaintext, which is an
     * > integer multiple of the encryption block size, and **doFinal()** is called to pass in **null**, the returned
     * > result is **null**.
     * > 4. For details about the sample code for calling **doFinal** multiple times in asymmetric encryption and
     * > decryption, see [Encryption and Decryption by Segment with an RSA Asymmetric Key Pair](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md).
     * > The operations are similar for SM2 and RSA.
     *
     * @param { DataBlob | null } data - Indicates the data to be finally encrypted or decrypted.
     * @param { AsyncCallback<DataBlob | null> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the encrypted or decrypted data obtained. Otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob | null>): void;

    /**
     * Finishes the crypto operation, encrypts or decrypts the input data, and then feeds back the output data.
     * Data cannot be updated after the crypto operation is finished. This API uses a promise to return the result.
     *
     * @param { DataBlob } data - Indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob> } Promise used to return the encrypted or decrypted data.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    doFinal(data: DataBlob): Promise<DataBlob>;

    /**
     * (1) Encrypts or decrypts the remaining data (generated by the block cipher mode) and the data passed in this time
     * to finalize the symmetric encryption or decryption. This API uses a promise to return the result.
     *
     * If a small amount of data needs to be encrypted or decrypted, you can use **doFinal()** to pass in data without
     * using **update()**. If all the data has been passed in by **update()**, you can pass in **null** in **data** of
     * **doFinal()**.
     *
     * The output of **doFinal()** varies with the symmetric encryption/decryption mode in use.
     *
     * - Symmetric encryption in GCM and CCM mode: The result consists of the ciphertext and **authTag** (the last 16
     * bytes for GCM and the last 12 bytes for CCM). If **data** in **doFinal** is null, the result of **doFinal** is
     * **authTag**.
     *
     * During decryption, **authTag** must be set in [GcmParamsSpec]{@link cryptoFramework.GcmParamsSpec} or
     * [CcmParamsSpec]{@link cryptoFramework.CcmParamsSpec}, and the ciphertext must be set in **data**.
     *
     * - For other symmetric encryption and decryption modes and GCM and CCM decryption modes, concatenating the results
     * of **update()** and **doFinal()** throughout the process will yield the complete plaintext or ciphertext.
     *
     * (2) Encrypts or decrypts the data passed in RSA and SM2 asymmetric encryption or decryption. This API uses a
     * promise to return the encrypted or decrypted data. If a large amount of data is to be processed, call
     * **doFinal()** multiple times and concatenate the results to obtain the complete plaintext or ciphertext.
     *
     * > **NOTE**
     * >
     * > 1. In symmetric encryption and decryption, after **doFinal** is called, the encryption and decryption process
     * > is complete and the [Cipher]{@link cryptoFramework.Cipher} instance is cleared. When a new encryption and
     * > decryption process is started, **init()** must be called with a complete parameter list for initialization.
     * > Even if the same symmetric key is used to encrypt and decrypt the same **Cipher** instance, the **params**
     * > parameter must be set when **init** is called during decryption.
     * > 2. If a decryption fails, check whether the data to be encrypted and decrypted matches the parameters in
     * > **init()**. For the GCM mode, check whether the **authTag** obtained after encryption is obtained from the
     * > **GcmParamsSpec** for decryption.
     * > 3. The result of **doFinal()** may be **null**. To avoid exceptions, determine whether the result is **null**
     * > before using the **.data** field to access the **doFinal()** result.
     * > For encryption in CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is **null**.
     * > For decryption in GCM, CCM, CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is
     * > **null**. For decryption in other modes, if **update** is called to pass in all the plaintext, which is an
     * > integer multiple of the encryption block size, and **doFinal()** is called to pass in **null**, the returned
     * > result is **null**.
     * > 4. For details about the sample code for calling **doFinal** multiple times in asymmetric encryption and
     * > decryption, see [Encryption and Decryption by Segment with an RSA Asymmetric Key Pair](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md).
     * > The operations are similar for SM2 and RSA.
     *
     * @param { DataBlob | null } data - Data to encrypt or decrypt. It can be **null**, but cannot be {data:Uint8Array(
     *     empty)}. In versions earlier than API version 10, only **DataBlob** is supported. Since API version 10,
     *     **null** is also supported.
     * @returns { Promise<DataBlob> } Promise used to return the **DataBlob**, which is the encryption or decryption
     *     result of the remaining data.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    doFinal(data: DataBlob | null): Promise<DataBlob>;

    /**
     * Finishes the crypto operation, encrypts or decrypts the input data, and then feeds back the output data.
     * Data cannot be updated after the crypto operation is finished. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > 1. In symmetric encryption and decryption, after **doFinal** is called, the encryption and decryption process
     * > is complete and the [Cipher]{@link cryptoFramework.Cipher} instance is cleared. When a new encryption and
     * > decryption process is started, **init()** must be called with a complete parameter list for initialization.
     * > Even if the same symmetric key is used to encrypt and decrypt the same **Cipher** instance, the **params**
     * > parameter must be set when **init** is called during decryption.
     * > 2. If a decryption fails, check whether the data to be encrypted and decrypted matches the parameters in
     * > **init()**. For the GCM mode, check whether the **authTag** obtained after encryption is obtained from the
     * > **GcmParamsSpec** for decryption.
     * > 3. The result of **doFinal()** may be **null**. To avoid exceptions, determine whether the result is **null**
     * > before using the **.data** field to access the **doFinal()** result.
     * > For encryption in CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is **null**.
     * > For decryption in GCM, CCM, CFB, OFB, or CTR mode, if **doFinal()** passes in **null**, the returned result is
     * > **null**. For decryption in other modes, if **update** is called to pass in all the plaintext, which is an
     * > integer multiple of the encryption block size, and **doFinal()** is called to pass in **null**, the returned
     * > result is **null**.
     * > 4. For details about the sample code for calling **doFinal** multiple times in asymmetric encryption and
     * > decryption, see [Encryption and Decryption by Segment with an RSA Asymmetric Key Pair](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md).
     * > The operations are similar for SM2 and RSA.
     *
     * @param { DataBlob | null } data - Indicates the data to be finally encrypted or decrypted.
     * @returns { Promise<DataBlob | null> } Promise used to return the encrypted or decrypted data.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    doFinal(data: DataBlob | null): Promise<DataBlob | null>;

    /**
     * (1) Processes the remaining data and the data passed in this time, and completes the encryption or decryption
     * operation for symmetric encryption and decryption. This API returns the encrypted or decrypted data
     * synchronously.
     *
     * If a small amount of data is to be processed, you can pass in all the data at a time in **doFinalSync()** without
     * using **updateSync()**. If data has been passed in by using
     * [updateSync]{@link cryptoFramework.Cipher.updateSync(data: DataBlob)} in the current encryption and decryption
     * process, you can pass in **null** to the **data** parameter of **doFinalSync()**.
     *
     * The output of **doFinalSync()** varies with the symmetric block cipher mode in use.
     *
     * - In a single encryption process with GCM or CCM mode, concatenating the results of each **updateSync()** and
     * **doFinalSync()** produces the ciphertext and **authTag**. In GCM mode, **authTag** is the last 16 bytes. In
     * CCM mode, **authTag** is the last 12 bytes. The rest part is the ciphertext. If **data** in **doFinalSync()** is
     * **null**, the result of **doFinalSync()** is **authTag**.
     *  During decryption, **authTag** must be set in [GcmParamsSpec]{@link cryptoFramework.GcmParamsSpec} or
     * [CcmParamsSpec]{@link cryptoFramework.CcmParamsSpec}, and the ciphertext must be set in **data**.
     * - For other symmetric encryption and decryption modes and GCM and CCM decryption modes, concatenating the results
     * of **updateSync()** and **doFinalSync()** throughout the process will yield the complete plaintext or ciphertext.
     *
     * (2) Encrypts or decrypts the input data for RSA or SM2 asymmetric encryption/decryption. This API returns the
     * encrypted or decrypted data synchronously. If a large amount of data is to be processed, call **doFinalSync()**
     * multiple times and concatenate the results to obtain the complete plaintext or ciphertext.
     *
     * See **NOTE** in
     * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)} for
     * other precautions.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link doFinal}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob | null } data - Data to encrypt or decrypt. It can be **null** in symmetric encryption or
     *     decryption, but cannot be {data:Uint8Array(empty)}.
     * @returns { DataBlob } Encrypted or decrypted data.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    doFinalSync(data: DataBlob | null): DataBlob;

    /**
     * Finishes the crypto operation, encrypts or decrypts the input data, and then feeds back the output data.
     * Data cannot be updated after the crypto operation is finished.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link doFinal}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob | null } data - Indicates the data to be finally encrypted or decrypted.
     * @returns { DataBlob | null } cipherText when encrypted or plainText when decrypted.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The data is too long.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    doFinalSync(data: DataBlob | null): DataBlob | null;

    /**
     * Sets cipher specifications. You can use this API to set cipher specifications that cannot be set by
     * [createCipher]{@link cryptoFramework.createCipher}. Currently, only RSA is supported.
     *
     * @param { CipherSpecItem } itemType - Cipher parameter to set.
     * @param { Uint8Array } itemValue - Value of the parameter to set.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Unsupported itemType. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setCipherSpec(itemType: CipherSpecItem, itemValue: Uint8Array): void;

    /**
     * Obtains cipher specifications. Currently, only RSA and SM2 (available since API version 11) are supported.
     *
     * @param { CipherSpecItem } itemType - Cipher parameter to obtain.
     * @returns { string | Uint8Array } Returns the value of the cipher parameter obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Unsupported itemType. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCipherSpec(itemType: CipherSpecItem): string | Uint8Array;

    /**
     * Indicates the algorithm name of the cipher object.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates a [Cipher]{@link cryptoFramework.Cipher} instance based on the specified algorithm.
   *
   * > **NOTE**
   * >
   * > 1. In symmetric encryption and decryption, PKCS #5 and PKCS #7 share the same implementation, with padding
   * > length and block size remaining consistent. In 3DES, padding is applied in 8-byte blocks; in AES, padding
   * > is applied in 16-byte blocks. **NoPadding** means no padding is applied.
   * > You need to understand the differences between different block cipher modes and use the correct parameter
   * > specifications. For example, padding is required for ECB and CBC. Otherwise, ensure that the plaintext
   * > length is an integer multiple of the block size. No padding is recommended for other modes. In this case,
   * > the ciphertext length is the same as the plaintext length.
   * > 2. When RSA or SM2 is used for asymmetric encryption and decryption, two **Cipher** objects must be created
   * > to perform encryption and decryption separately. This is not required for symmetric encryption and
   * > decryption. If the algorithm specifications are the same, the same **Cipher** object can be used for
   * > encryption and decryption.
   *
   * @param { string } transformation - Combination of the algorithm name (including the key length), encryption mode,
   *     and padding algorithm of the **Cipher** instance to create.<br>For details about the supported specifications,
   *     see
   *     [Symmetric Key Encryption and Decryption Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md)
   *     and
   *     [Asymmetric Key Encryption and Decryption Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md)
   *     .
   * @returns { Cipher } [Cipher]{@link cryptoFramework.Cipher} instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createCipher(transformation: string): Cipher;

  /**
   * Provides APIs for signing. Before using any API of the **Sign** class, you must create a **Sign** instance by using
   * [createSign(algName: string): Sign]{@link cryptoFramework.createSign}. Invoke **init()**, **update()**, and
   * **sign()** in this class in sequence to complete the signing operation. For details about the sample code, see
   * [Signing and Signature Verification with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md)
   * .
   *
   * The **Sign** class does not support repeated initialization. When a new key is used for signing, you must create a
   * new **Sign** instance and call **init()** for initialization.
   *
   * The signing mode is determined by **createSign()**, and the key is set by **init()**.
   *
   * If a small amount of data is to be signed, you can directly call **sign()** to pass in the data for signing after
   * **init()**.
   *
   * If a large amount of data is to be signed, you can use **update()** to pass in the data by segment, and then use
   * **sign()** to sign the entire data.
   *
   * When **update()** is used, the **sign()** API supports only **DataBlob** in versions earlier than API version 10
   * and starts to support **null** since API version 10. After all the data is passed in by using **update()**, call
   * **sign()** to sign the data.
   *
   * If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, the **update()** operation is not
   * supported. If **update()** is called in this case, the error code **ERR_CRYPTO_OPERATION** will be returned.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Sign {
    /**
     * Initializes the **Sign** object using a private key. This API uses an asynchronous callback to return the result.
     * **init**, **update**, and **sign** must be used together. **init** and **sign** are mandatory, and **update** is
     * optional.
     *
     * The **Sign** class does not support repeated use of **init**.
     *
     * @param { PriKey } priKey - Private key used for the initialization.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Incorrect key type. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(priKey: PriKey, callback: AsyncCallback<void>): void;

    /**
     * Initializes the **Sign** object using a private key. This API uses a promise to return the result.
     *
     * **init**, **update**, and **sign** must be used together. **init** and **sign** are mandatory, and **update** is
     * optional.
     *
     * The **Sign** class does not support repeated use of **init**.
     *
     * @param { PriKey } priKey - Private key used for the initialization.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Incorrect key type. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(priKey: PriKey): Promise<void>;

    /**
     * Initializes the **Sign** instance with a private key. This API returns the result synchronously.
     *
     * **initSync**, **updateSync**, and **signSync** must be used together. **initSync** and **signSync** are
     * mandatory, and **updateSync** is optional.
     *
     * The **Sign** class does not support repeated use of **initSync**.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link init}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { PriKey } priKey - Private key used for the initialization.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Incorrect key type. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(priKey: PriKey): void;

    /**
     * Updates data to be signed. This API uses an asynchronous callback to return the result.
     *
     * This API can be called only after the [Sign]{@link cryptoFramework.Sign} instance is initialized by using
     * [init]{@link cryptoFramework.Sign.init} or [initSync]{@link cryptoFramework.Sign.initSync}.
     *
     * > **NOTE**
     * >
     * > You can call **update** multiple times or do not use **update** (call [sign]{@link cryptoFramework.Sign} after
     * > [init]{@link cryptoFramework.Sign.init}), depending on the data volume.
     * >
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to call **update()** multiple times to pass in the data by segment. This
     * > prevents too much memory from being requested at a time.
     * >
     * > For details about the sample code for calling **update()** multiple times in signing, see
     * > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > . The operations of other algorithms are similar.
     * >
     * > **OnlySign** cannot be used with **update()**. If **OnlySign** is specified, use **sign()** to pass in data.
     * >
     * > If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, **update()** is not supported.
     * > If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
     *
     * @param { DataBlob } data - Data to pass in.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Updates data to be signed. This API uses a promise to return the result.
     *
     * Before using this API, you must use [Sign]{@link cryptoFramework.Sign} to initialize the
     * [init()]{@link cryptoFramework.Sign.init} instance.
     *
     * > **NOTE**
     * >
     * > You can call **update** multiple times or do not use **update** (call
     * > [sign]{@link cryptoFramework.Sign.sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>)} after
     * > [init]{@link cryptoFramework.Sign.init}), depending on the
     * > data volume.
     * >
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to call **update()** multiple times to pass in the data by segment. This
     * > prevents too much memory from being requested at a time.
     * > For details about the sample code for calling **update()** multiple times in signing, see
     * > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > . The operations of other algorithms are similar.
     * >
     * > **OnlySign** cannot be used with **update()**. If **OnlySign** is specified, use **sign()** to pass in data.
     * >
     * > If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, **update()** is not supported.
     * > If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
     *
     * @param { DataBlob } data - Data to pass in.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob): Promise<void>;

    /**
     * Updates data to be signed. This API returns the result synchronously.
     *
     * This API can be called only after the [Sign]{@link cryptoFramework.Sign} instance is initialized by using
     * [initSync()]{@link cryptoFramework.Sign.initSync}.
     *
     * > **NOTE**
     * >
     * > You can call **updateSync** multiple times or do not use **updateSync** (call
     * > [signSync]{@link cryptoFramework.Sign.signSync} after [initSync]{@link cryptoFramework.Sign.initSync}),
     * > depending on the data volume.
     * >
     * > The amount of the data to be passed in by **updateSync** (one-time or accumulative) is not limited. If there is
     * > a large amount of data, you are advised to call **updateSync** multiple times to pass in the data by segment.
     * > This prevents too much memory from being requested at a time.
     * >
     * > For details about the sample code for calling **updateSync** multiple times in signing, see
     * > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > . The operations of other algorithms are similar.
     * >
     * > **OnlySign** cannot be used with **updateSync**. If **OnlySign** is specified, use **signSync** to pass in
     * > data.
     * >
     * > If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, **updateSync** is not
     * > supported. If **updateSync** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } data - Data to pass in.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(data: DataBlob): void;

    /**
     * Signs the data, including data added via the update interface. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { DataBlob } data - The data to be signed.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**, and **data** is the signature obtained. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    sign(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * Signs data. This API uses an asynchronous callback to return the result.
     *
     * @param { DataBlob | null } data - Data to pass in. In versions earlier than API version 10, only **DataBlob** is
     *     supported. Since API version 10, **null** is also supported.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the signature obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;

    /**
     * Signs the data, including data added via the update interface. This API uses a promise to return the result.
     *
     * @param { DataBlob } data - The data to be signed.
     * @returns { Promise<DataBlob> } Promise used to return the signature.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    sign(data: DataBlob): Promise<DataBlob>;

    /**
     * Signs data. This API uses a promise to return the result.
     *
     * @param { DataBlob | null } data - Data to pass in.
     * @returns { Promise<DataBlob> } Promise used to return the signature.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sign(data: DataBlob | null): Promise<DataBlob>;

    /**
     * Signs the data. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link sign}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob | null } data - Data to pass in.
     * @returns { DataBlob } Signature.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    signSync(data: DataBlob | null): DataBlob;

    /**
     * Sets signing specifications. You can use this API to set signing parameters that cannot be set by
     * [createSign]{@link cryptoFramework.createSign}.
     *
     * Currently, only RSA and SM2 are supported. Since API version 11, SM2 signing parameters can be set.
     *
     * @param { SignSpecItem } itemType - Signing parameter to set.
     * @param { int } itemValue - Value of the signing parameter to set.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int): void;

    /**
     * Sets the specified parameter to the Sign object.
     *
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.
     *
     * @param { SignSpecItem } itemType - Indicates the specified parameter type.
     * @param { int | Uint8Array } itemValue - The value of the specified parameter.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters. [since 26.0.0]
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array): void;

    /**
     * Sets the specified parameter to the Sign object.
     *
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 and ML_DSA_DETERMINISTIC/ML_DSA_MU/ML_DSA_CONTEXT in
     * ML-DSA are supported.
     *
     * @param { SignSpecItem } itemType - Indicates the specified parameter type.
     * @param { int | Uint8Array | boolean } itemValue - The value of the specified parameter.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17620004 - Invalid function call.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array | boolean): void;

    /**
     * Sets the specified parameter to the Sign object.
     *
     * Currently, only the ML-DSA parameters ML_DSA_DETERMINISTIC and ML_DSA_MU are supported. For ML_DSA_CONTEXT param,
     * use [setSignSpec()]{@link cryptoFramework.Sign.setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array)}.
     *
     * @param { SignSpecItem } itemType - Indicates the specified parameter type.
     * @param { boolean } itemValue - The value of the specified parameter.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17620004 - Invalid function call.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    setSignSpec(itemType: SignSpecItem, itemValue: boolean): void;

    /**
     * Obtains signing specifications. Currently, only RSA is supported.
     *
     * @param { SignSpecItem } itemType - Signing parameter to obtain.
     * @returns { string | int } Returns the value of the signing parameter obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getSignSpec(itemType: SignSpecItem): string | int;

    /**
     * Indicates the algorithm name of the Sign object.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Provides APIs for signature verification. Before using any API of the **Verify** class, you must create a
   * **Verify** instance by using [createVerify(algName: string): Verify]{@link cryptoFramework.createVerify}. Invoke
   * **init()**, **update()**, and **verify()** in this class in sequence to complete the signature verification. For
   * details about the sample code, see
   * [Signing and Signature Verification with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md)
   * .
   *
   * The **Verify** class does not support repeated initialization. When a new key is used for signature verification,
   * you must create a new **Verify** instance and call **init()** for initialization.
   *
   * The signature verification mode is determined in **createVerify()**, and the key is set by **init()**.
   *
   * If the signed message is short, you can call **verify()** to pass in the signed message and signature (
   * **signatureData**) for signature verification after **init()**. That is, you do not need to use **update()**.
   *
   * If the signed message is too long, you can call **update()** multiple times to pass in the signed message by
   * segment, and then call **verify()** to verify the full text of the message. In versions earlier than API version 10
   * , the input parameter **data** of **verify()** supports only **DataBlob**. Since API version 10, **data** also
   * supports **null**. After all the data is passed in by using **update()**, **verify()** can be called to verify the
   * signature data.
   *
   * If the DSA algorithm is used for signature verification and the digest algorithm is **NoHash**, **update()** is not
   * supported. If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Verify {
    /**
     * Initializes the **Verify** object using a public key. This API uses an asynchronous callback to return the
     * result. **init**, **update**, and **verify** must be used together. **init** and **verify** are mandatory, and
     * **update** is optional.
     *
     * @param { PubKey } pubKey - Public key used to initialize the **Verify** instance.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Incorrect key type. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(pubKey: PubKey, callback: AsyncCallback<void>): void;

    /**
     * Initializes the **Verify** object using a public key. This API uses a promise to return the result. **init**,
     * **update**, and **verify** must be used together. **init** and **verify** are mandatory, and **update** is
     * optional.
     *
     * @param { PubKey } pubKey - Public key used to initialize the **Verify** instance.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Incorrect key type. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(pubKey: PubKey): Promise<void>;

    /**
     * Initializes the **Verify** instance with a public key. This API returns the result synchronously. **initSync**,
     * **updateSync**, and **verifySync** must be used together. **initSync** and **verifySync** are mandatory, and
     * **updateSync** is optional.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link init}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { PubKey } pubKey - Public key used to initialize the **Verify** instance.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Incorrect key type. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(pubKey: PubKey): void;

    /**
     * Updates the data for signature verifications. This API uses an asynchronous callback to return the result.
     *
     * This API can be called only after the [Verify]{@link cryptoFramework.Verify} instance is initialized using
     * [init]{@link cryptoFramework.Verify.init} or [initSync]{@link cryptoFramework.Verify.initSync}.
     *
     * > **NOTE**
     * >
     * > You can call **update** multiple times or do not use **update** (call
     * > [verify]{@link cryptoFramework.Verify.verify(data: DataBlob | null, signatureData: DataBlob, callback: AsyncCallback<boolean>)}
     * > after [init]{@link cryptoFramework.Verify.init}), depending on
     * > the data volume.
     * >
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to call **update()** multiple times to pass in the data by segment. This
     * > prevents too much memory from being requested at a time.
     * >
     * > For details about the sample code for calling **update()** multiple times in signature verification, see
     * > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > . The operations of other algorithms are similar.
     * >
     * > **OnlyVerify** cannot be used with **update()**. If **OnlyVerify** is specified, use **verify()** to pass in
     * > data.
     * >
     * > If the DSA algorithm is used for signature verification and the digest algorithm is **NoHash**, **update()** is
     * > not supported. If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
     *
     * @param { DataBlob } data - Data to pass in.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * Updates the data for signature verifications. This API uses a promise to return the result.
     *
     * This API can be called only after the [Verify]{@link cryptoFramework.Verify} instance is initialized using
     * [init()]{@link cryptoFramework.Verify.init}.
     *
     * > **NOTE**
     * >
     * > You can call **update** multiple times or do not use **update** (call
     * > [verify]{@link cryptoFramework.Verify.verify(data: DataBlob | null, signatureData: DataBlob)} after
     * > [init]{@link cryptoFramework.Verify.init}), depending on the data volume.
     *
     * > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a
     * > large amount of data, you are advised to call **update()** multiple times to pass in the data by segment. This
     * > prevents too much memory from being requested at a time.
     *
     * > For details about the sample code for calling **update()** multiple times in signature verification, see
     * > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > . The operations of other algorithms are similar.
     *
     * > **OnlyVerify** cannot be used with **update()**. If **OnlyVerify** is specified, use **verify()** to pass in
     * > data.
     *
     * > If the DSA algorithm is used for signature verification and the digest algorithm is **NoHash**, **update()** is
     * > not supported. If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
     *
     * @param { DataBlob } data - Data to pass in.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob): Promise<void>;

    /**
     * Updates the data for signature verifications. This API returns the result synchronously.
     *
     * This API can be called only after the [Verify]{@link cryptoFramework.Verify} instance is initialized by using
     * [initSync()]{@link cryptoFramework.Verify.initSync}.
     *
     * > **NOTE**
     * >
     * > You can call **updateSync** multiple times or do not use **updateSync** (call
     * > [verifySync]{@link cryptoFramework.Verify.verifySync} after [initSync]{@link cryptoFramework.Verify.initSync}),
     * > depending on the data volume.
     *
     * > The amount of the data to be passed in by **updateSync** (one-time or accumulative) is not limited. If there is
     * > a large amount of data, you are advised to call **updateSync** multiple times to pass in the data by segment.
     * > This prevents too much memory from being requested at a time.
     *
     * > For details about the sample code for calling **updateSync** multiple times in signature verification, see
     * > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > . The operations of other algorithms are similar.
     *
     * > **OnlyVerify** cannot be used with **update()**. If **OnlyVerify** is specified, use **verifySync()** to pass
     * > in data.
     *
     * > If the DSA algorithm is used for signature verification and the digest algorithm is **NoHash**, **updateSync**
     * > is not supported. If **updateSync** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } data - Data to pass in.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(data: DataBlob): void;

    /**
     * Verifies the message, including the update data. This API uses an asynchronous callback to return the result.
     *
     * @param { DataBlob } data - Data to be verified.
     * @param { DataBlob } signatureData - The signature data.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates
     *     that the signature verification is successful, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    verify(data: DataBlob, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verifies the signature of the data. This API uses an asynchronous callback to return the result.
     *
     * @param { DataBlob | null } data - Data to pass in. In versions earlier than API version 10, only **DataBlob** is
     *     supported. Since API version 10, **null** is also supported.
     * @param { DataBlob } signatureData - Signature data.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true**
     *     indicates that the signature verification is successful, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    verify(data: DataBlob | null, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;

    /**
     * Verifies the message, including the update data. This API uses a promise to return the result.
     *
     * @param { DataBlob } data - Data to be verified.
     * @param { DataBlob } signatureData - The signature data.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the signature
     *     verification is successful, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    verify(data: DataBlob, signatureData: DataBlob): Promise<boolean>;

    /**
     * Verifies the signature of the data. This API uses a promise to return the result.
     *
     * @param { DataBlob | null } data - Data to pass in. In versions earlier than API version 10, only **DataBlob** is
     *     supported. Since API version 10, **null** is also supported.
     * @param { DataBlob } signatureData - Signature data.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the signature
     *     verification is successful, and **false** indicates the opposite.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    verify(data: DataBlob | null, signatureData: DataBlob): Promise<boolean>;

    /**
     * Verifies the signature. This API returns the verification result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link verify}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob | null } data - Data to pass in.
     * @param { DataBlob } signatureData - Signature data.
     * @returns { boolean } Signature verification result. **true**: passed; **false**: failed.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    verifySync(data: DataBlob | null, signatureData: DataBlob): boolean;

    /**
     * Recovers the original data from a signature. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - Currently, only RSA is supported.
     *
     * @param { DataBlob } signatureData - Signature data.
     * @returns { Promise<DataBlob | null> } Promise used to return the raw data recovered from the signature.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    recover(signatureData: DataBlob): Promise<DataBlob | null>;

    /**
     * Recovers the original data from a signature. This API returns the result synchronously.
     *
     * > **NOTE**
     * >
     * > - Currently, only RSA is supported.
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link recover}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { DataBlob } signatureData - Signature data.
     * @returns { DataBlob | null } Data restored.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    recoverSync(signatureData: DataBlob): DataBlob | null;

    /**
     * Sets signature verification specifications. You can use this API to set signature verification parameters that
     * cannot be set by [createVerify]{@link cryptoFramework.createVerify}.
     *
     * Currently, only RSA and SM2 are supported. Since API version 11, SM2 signing parameters can be set.
     *
     * The parameters for signature verification must be the same as those for signing.
     *
     * @param { SignSpecItem } itemType - Signature verification parameter to set.
     * @param { int } itemValue - Value of the signature verification parameter to set.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int): void;

    /**
     * Sets the specified parameter to the Verify object.
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.
     *
     * @param { SignSpecItem } itemType - Indicates the specified parameter type.
     * @param { int | Uint8Array } itemValue - The value of the specified parameter.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters. [since 26.0.0]
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @throws { BusinessError } 17620004 - Invalid function call. [since 26.0.0]
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array): void;

    /**
     * Sets the specified parameter to the Verify object.
     * Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 and ML_DSA_DETERMINISTIC/ML_DSA_MU/ML_DSA_CONTEXT in
     * ML-DSA are supported.
     *
     * @param { SignSpecItem } itemType - Indicates the specified parameter type.
     * @param { int | Uint8Array | boolean } itemValue - The value of the specified parameter.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17620004 - Invalid function call.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array | boolean): void;

    /**
     * Sets the specified parameter to the Verify object.
     * Currently, only the ML-DSA parameters ML_DSA_DETERMINISTIC and ML_DSA_MU are supported. For ML_DSA_CONTEXT param,
     * use [setVerifySpec()]{@link cryptoFramework.Verify.setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array)}.
     *
     * @param { SignSpecItem } itemType - Indicates the specified parameter type.
     * @param { boolean } itemValue - The value of the specified parameter.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17620004 - Invalid function call.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: boolean): void;

    /**
     * Obtains signature verification specifications. Currently, only RSA is supported.
     *
     * The parameters for signature verification must be the same as those for signing.
     *
     * @param { SignSpecItem } itemType - Signature verification parameter to obtain.
     * @returns { string | int } Returns the value of the parameter obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getVerifySpec(itemType: SignSpecItem): string | int;

    /**
     * Indicates the algorithm name of the Verify object.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates a **Sign** instance.
   *
   * @param { string } algName - Signing algorithm to use. Currently, RSA, ECC, DSA, SM2<sup>10+</sup> and Ed25519<sup>1
   *     1+</sup> are supported. If RSA PKCS1 is used, you must set the digest. If RSA PSS is used, you must set the
   *     digest and mask digest. For signing, you can set **OnlySign** to enable the data digest to be used for signing
   *     only.<br>For details about the supported specifications, see
   *     [Signing and Signature Verification Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)
   * @returns { Sign } Returns the **Sign** instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createSign(algName: string): Sign;

  /**
   * Creates a **Verify** instance.
   *
   * @param { string } algName - Signing algorithm to use. Currently, RSA, ECC, DSA, SM2<sup>10+</sup> and Ed25519<sup>1
   *     1+</sup> are supported. If RSA PKCS1 is used, you must set the digest. If RSA PSS is used, you must set the
   *     digest and mask digest. When the RSA algorithm is used for signature verification, you can use **Recover** to
   *     verify and recover the signed data.<br>For details about the supported specifications, see
   *     [Signing and Signature Verification Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)
   *     .
   * @returns { Verify } Returns the **Verify** instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createVerify(algName: string): Verify;
  /**
   * Provides APIs for key agreement operations. Before using any API of the **KeyAgreement** class, you must create a
   * **KeyAgreement** instance by using
   * [createKeyAgreement(algName: string): KeyAgreement]{@link cryptoFramework.createKeyAgreement}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface KeyAgreement {
    /**
     * Generates a shared secret based on the given private key and public key. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { PriKey } priKey - Private key used for key agreement.
     * @param { PubKey } pubKey - Public key used for key agreement.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the shared key obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void;

    /**
     * Generates a shared secret based on the given private key and public key. This API uses a promise to return the
     * result.
     *
     * @param { PriKey } priKey - Private key used for key agreement.
     * @param { PubKey } pubKey - Public key used for key agreement.
     * @returns { Promise<DataBlob> } Promise used to return the shared key of key agreement.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>;

    /**
     * Generates a shared secret based on the given private key and public key. This API returns the shared secret
     * generated synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generateSecret}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { PriKey } priKey - Private key used for key agreement.
     * @param { PubKey } pubKey - Public key used for key agreement.
     * @returns { DataBlob } Returns the shared secret generated.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateSecretSync(priKey: PriKey, pubKey: PubKey): DataBlob;

    /**
     * Indicates the algorithm name.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates a **KeyAgreement** instance.
   *
   * @param { string } algName - Key agreement algorithm to use. In addition to ECC, X25519 and DH are supported since
   *     API version 11.<br>For details about the supported specifications, see
   *     [Key Agreement Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-key-agreement-overview.md)
   *     .
   * @returns { KeyAgreement } Returns the **KeyAgreement** instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createKeyAgreement(algName: string): KeyAgreement;

  /**
   * Enumerates the asymmetric key parameters.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AsyKeySpecItem {
    /**
     * Prime modulus **p** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DSA_P_BN = 101,

    /**
     * Parameter **q**, prime factor of (p - 1) in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DSA_Q_BN = 102,

    /**
     * Parameter **g** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DSA_G_BN = 103,

    /**
     * Private key **sk** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DSA_SK_BN = 104,

    /**
     * Public key **pk** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DSA_PK_BN = 105,

    /**
     * Prime number **p** in the **Fp** field of the elliptic curve in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_FP_P_BN = 201,

    /**
     * First coefficient **a** of the elliptic curve in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_A_BN = 202,

    /**
     * Second coefficient **b** of the elliptic curve in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_B_BN = 203,

    /**
     * X coordinate of the base point **g** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_G_X_BN = 204,

    /**
     * Y coordinate of the base point **g** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_G_Y_BN = 205,

    /**
     * Order **n** of the base point **g** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_N_BN = 206,

    /**
     * Cofactor **h** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_H_NUM = 207,

    /**
     * Private key **sk** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_SK_BN = 208,

    /**
     * X coordinate of the public key **pk** (a point on the elliptic curve) in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_PK_X_BN = 209,

    /**
     * Y coordinate of the public key **pk** (a point on the elliptic curve) in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_PK_Y_BN = 210,

    /**
     * Elliptic curve field type in the ECC algorithm. Currently, only the **Fp** field is supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_FIELD_TYPE_STR = 211,

    /**
     * Size of the field in the ECC algorithm, in bits.
     *
     * Note: The size of the **Fp** field is the length of the prime **p**, in bits.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_FIELD_SIZE_NUM = 212,

    /**
     * Standards for Efficient Cryptography Group (SECG) curve name in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ECC_CURVE_NAME_STR = 213,

    /**
     * Modulus **n** in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    RSA_N_BN = 301,

    /**
     * Private key **sk** (private key exponent **d**) in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    RSA_SK_BN = 302,

    /**
     * Public key **pk** (public key exponent **e**) in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    RSA_PK_BN = 303,

    /**
     * Prime **p** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DH_P_BN = 401,

    /**
     * Parameter **g** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DH_G_BN = 402,

    /**
     * Length of the private key in the DH algorithm, in bits.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DH_L_NUM = 403,

    /**
     * Private key **sk** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DH_SK_BN = 404,

    /**
     * Public key **pk** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DH_PK_BN = 405,

    /**
     * Private key **sk** in the Ed25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    ED25519_SK_BN = 501,

    /**
     * Public key **pk** in the Ed25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    ED25519_PK_BN = 502,

    /**
     * Private key **sk** in the X25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    X25519_SK_BN = 601,

    /**
     * Public key **pk** in the X25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    X25519_PK_BN = 602
  }

  /**
   * Enumerates the asymmetric key data types.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum AsyKeyDataItem {
    /**
     * Indicates the private seed of the ML-DSA private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_PRIVATE_SEED = 0,

    /**
     * Indicates the private raw of the ML-DSA private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_PRIVATE_RAW = 1,

    /**
     * Indicates the public raw of the ML-DSA public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_PUBLIC_RAW = 2,

    /**
     * Indicates the private seed of the ML-KEM private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_PRIVATE_SEED = 3,

    /**
     * Indicates the private raw of the ML-KEM private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_PRIVATE_RAW = 4,

    /**
     * Indicates the public raw of the ML-KEM public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_PUBLIC_RAW = 5,

    /**
     * Private key **K** on the elliptic curve (EC).
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PRIVATE_K = 6,

    /**
     * Indicates the 04||X||Y||K of the EC private key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PRIVATE_04_X_Y_K = 7,

    /**
     * Indicates the X||Y of the EC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PUBLIC_X_Y = 8,

    /**
     * Indicates the 04||X||Y of the EC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PUBLIC_04_X_Y = 9,

    /**
     * Indicates the 02||X or 03||X of the EC public key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PUBLIC_COMPRESS_X = 10
  }

  /**
   * Enumerates the key parameter types.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AsyKeySpecType {
    /**
     * Common parameter of the public and private keys. You can use
     * [generateKeyPair]{@link cryptoFramework.AsyKeyGeneratorBySpec.generateKeyPair(callback: AsyncCallback<KeyPair>)}
     * to randomly generate a key pair based on the parameters of this type.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_PARAMS_SPEC = 0,

    /**
     * Parameter of the private key. You can use
     * [generatePriKey]{@link cryptoFramework.AsyKeyGeneratorBySpec.generatePriKey(callback: AsyncCallback<PriKey>)} to
     * generate a private key based on the parameters of this type.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PRIVATE_KEY_SPEC = 1,

    /**
     * Parameter of the public key. You can use
     * [generatePubKey]{@link cryptoFramework.AsyKeyGeneratorBySpec.generatePubKey(callback: AsyncCallback<PubKey>)} to
     * generate a public key based on the parameters of this type.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PUBLIC_KEY_SPEC = 2,

    /**
     * Full parameters of the public and private keys. You can use
     * [generateKeyPair]{@link cryptoFramework.AsyKeyGeneratorBySpec.generateKeyPair(callback: AsyncCallback<KeyPair>)}
     * to generate a key pair based on the parameters of this type.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    KEY_PAIR_SPEC = 3
  }

  /**
   * Defines the asymmetric key parameters for creating a key generator. You need to construct a child class object and
   * pass it to [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key
   * generator. When constructing a child class object, use little-endian format for RSA keys and use big-endian format
   * and positive numbers for other key parameters of the bigint type.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AsyKeySpec {
    /**
     * Asymmetric key algorithm, for example, **RSA**, **DSA**, **ECC**, **SM2**, **Ed25519**, **X25519**, or **DH**.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    algName: string;

    /**
     * Key parameter type, which is used to distinguish public and private key parameters.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    specType: AsyKeySpecType;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the common parameters of
   * the public and private keys in the DSA algorithm. It can be used to randomly generate a public or private key.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DSACommonParamsSpec extends AsyKeySpec {
    /**
     * Prime modulus **p** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    p: bigint;

    /**
     * Parameter **q**, prime factor of (p - 1) in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    q: bigint;

    /**
     * Parameter **g** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    g: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public key in the DSA algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DSAPubKeySpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: DSACommonParamsSpec;

    /**
     * Public key **pk** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify full parameters of the
   * public and private keys in the DSA algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DSAKeyPairSpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: DSACommonParamsSpec;

    /**
     * Private key **sk** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sk: bigint;

    /**
     * Public key **pk** in the DSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines the field type of an elliptic curve. Currently, only the **Fp** field is supported.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ECField {
    /**
     * Type of the elliptic curve field. Currently, only **Fp** is supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    fieldType: string;
  }

  /**
   * Defines the prime field of the elliptic curve. It is a child class of [ECField]{@link cryptoFramework.ECField}.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ECFieldFp extends ECField {
    /**
     * Value of the prime number **p**.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    p: bigint;
  }

  /**
   * Defines a point on the elliptic curve.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Point {
    /**
     * X coordinate of the point on an elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    x: bigint;

    /**
     * Y coordinate of the point on an elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    y: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the common parameters of
   * the public and private keys in the ECC algorithm. It can be used to randomly generate a public or private key.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ECCCommonParamsSpec extends AsyKeySpec {
    /**
     * Field of the elliptic curve. Currently, only **Fp** is supported.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    field: ECField;

    /**
     * First coefficient **a** of the elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    a: bigint;

    /**
     * Second coefficient **b** of the elliptic curve.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    b: bigint;

    /**
     * Base point g.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    g: Point;

    /**
     * Order **n** of the base point **g** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    n: bigint;

    /**
     * Cofactor **h**.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    h: int;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * private key in the ECC algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ECCPriKeySpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: ECCCommonParamsSpec;

    /**
     * Private key **sk** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public key in the ECC algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ECCPubKeySpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: ECCCommonParamsSpec;

    /**
     * Public key **pk** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    pk: Point;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify full parameters of the
   * public and private keys in the ECC algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface ECCKeyPairSpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: ECCCommonParamsSpec;

    /**
     * Private key **sk** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sk: bigint;

    /**
     * Public key **pk** in the ECC algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    pk: Point;
  }

  /**
   * Generates common parameters for an asymmetric key pair based on the specified elliptic curve name.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  class ECCKeyUtil {
    /**
     * Generates common parameters for an asymmetric key pair based on the specified name identifier (NID) of an
     * elliptic curve. For details, see
     * [ECC](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#ecc) and
     * [SM2](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#sm2).
     *
     * @param { string } curveName - NID of the elliptic curve.
     * @returns { ECCCommonParamsSpec } ECC common parameters generated.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    static genECCCommonParamsSpec(curveName: string): ECCCommonParamsSpec;

    /**
     * Converts the specified point data into a **Point** object based on the curve name (NID). Currently, compressed
     * and uncompressed point data is supported.
     *
     * > **NOTE**
     * >
     * > According to section 2.2 in RFC 5480:
     * > 1. The uncompressed point data is represented as **0x04**|x coordinate|y coordinate.
     * > 2. The compressed point data in the **Fp** field (the **F2m** field is not supported currently) is represented
     * > as follows: **0x03**|x coordinate (when the coordinate y is an odd number); **0x02**|x coordinate (when the
     * > coordinate y is an even number).
     *
     * @param { string } curveName - Elliptic curve name, that is, the NID.
     * @param { Uint8Array } encodedPoint - Data of the point on the ECC elliptic curve to convert.
     * @returns { Point } **Point** object obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static convertPoint(curveName: string, encodedPoint: Uint8Array): Point;

    /**
     * Obtains the point data in the specified format from a **Point** object. Currently, compressed and uncompressed
     * point data is supported.
     *
     * @param { string } curveName - Elliptic curve name, that is, the NID.
     * @param { Point } point - **Point** object of the elliptic curve.
     * @param { string } format - Format of the point data to obtain. Currently, the value can be **COMPRESSED** or
     *     **UNCOMPRESSED** only.
     * @returns { Uint8Array } Point data in the specified format.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getEncodedPoint(curveName: string, point: Point, format: string): Uint8Array;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public and private keys in the DH algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface DHCommonParamsSpec extends AsyKeySpec {
    /**
     * Large prime **p** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    p: bigint;

    /**
     * Parameter **g** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    g: bigint;

    /**
     * Length of the private key in the DH algorithm, in bits.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    l: int;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * private key in the DH algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface DHPriKeySpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    params: DHCommonParamsSpec;

    /**
     * Private key **sk** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public key in the DH algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface DHPubKeySpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    params: DHCommonParamsSpec;

    /**
     * Public key **pk** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify full parameters of the
   * public and private keys in the DH algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface DHKeyPairSpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    params: DHCommonParamsSpec;

    /**
     * Private key **sk** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sk: bigint;

    /**
     * Public key **pk** in the DH algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Generates common parameters for a DH key based on the prime **p** length and the private key length.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  class DHKeyUtil {
    /**
     * Generates common parameters for a DH key based on the prime **p** length and the private key length, in bits. For
     * details, see [DH](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#dh).
     *
     * @param { int } pLen - Length of the prime **p**, in bits.
     * @param { int } [skLen] - Maximum length of the generated DH private key, in bits. The default value is **0**.<br>
     *     When this parameter is set to **0**, the maximum length of the generated DH private key is as follows:<br>
     *     ffdhe2048: 255 bits.<br>ffdhe3072: 275 bits.<br>ffdhe4096: 325 bits.<br>ffdhe6144: 375 bits.<br>ffdhe8192: 40
     *     0 bits.
     * @returns { DHCommonParamsSpec } DH common parameters generated.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - This operation is not supported.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    static genDHCommonParamsSpec(pLen: int, skLen?: int): DHCommonParamsSpec;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * private key in the Ed25519 algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface ED25519PriKeySpec extends AsyKeySpec {
    /**
     * Private key **sk** in the Ed25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public key in the Ed25519 algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface ED25519PubKeySpec extends AsyKeySpec {
    /**
     * Public key **pk** in the Ed25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify full parameters of the
   * public and private keys in the Ed25519 algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface ED25519KeyPairSpec extends AsyKeySpec {
    /**
     * Private key **sk** in the Ed25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sk: bigint;

    /**
     * Public key **pk** in the Ed25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * private key in the X25519 algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X25519PriKeySpec extends AsyKeySpec {
    /**
     * Private key **sk** in the X25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public key in the X25519 algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X25519PubKeySpec extends AsyKeySpec {
    /**
     * Public key **pk** in the X25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify full parameters of the
   * public and private keys in the X25519 algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface X25519KeyPairSpec extends AsyKeySpec {
    /**
     * Private key **sk** in the X25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sk: bigint;

    /**
     * Public key **pk** in the X25519 algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the common parameters of
   * the public and private keys in the RSA algorithm. It can be used to randomly generate a public or private key.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface RSACommonParamsSpec extends AsyKeySpec {
    /**
     * Modulus **n**.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    n: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify the parameters of the
   * public key in the RSA algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface RSAPubKeySpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: RSACommonParamsSpec;

    /**
     * Public key **pk** in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Defines a child class of [AsyKeySpec]{@link cryptoFramework.AsyKeySpec} used to specify full parameters of the
   * public and private keys in the RSA algorithm.
   *
   * To generate a key based on key parameters, pass it to
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create a key generator.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface RSAKeyPairSpec extends AsyKeySpec {
    /**
     * Common parameters of the public and private keys in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    params: RSACommonParamsSpec;

    /**
     * Private key **sk** in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sk: bigint;

    /**
     * Public key **pk** in the RSA algorithm.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    pk: bigint;
  }

  /**
   * Provides APIs for using the **AsyKeyGenerator**. Before using the APIs of this class, you need to use
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec} to create an
   * **AsyKeyGeneratorBySpec** instance.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AsyKeyGeneratorBySpec {
    /**
     * Generates a key pair using this asymmetric key generator. This API uses an asynchronous callback to return the
     * result.
     *
     * If a key parameter of the [COMMON_PARAMS_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the
     * key generator, a key pair will be randomly generated. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain a
     * key pair that is consistent with the specified key parameters.
     *
     * @param { AsyncCallback<KeyPair> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the key pair obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generateKeyPair(callback: AsyncCallback<KeyPair>): void;

    /**
     * Generates a key pair using this asymmetric key generator. This API uses a promise to return the result.
     *
     * If a key parameter of the [COMMON_PARAMS_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the
     * key generator, a key pair will be randomly generated. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain a
     * key pair that is consistent with the specified key parameters.
     *
     * @returns { Promise<KeyPair> } Promise used to return the asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * Generates a key pair using this asymmetric key generator. This API returns the result synchronously.
     *
     * If a key parameter of the [COMMON_PARAMS_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the
     * key generator, a key pair will be randomly generated. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain a
     * key pair that is consistent with the specified key parameters.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generateKeyPair}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { KeyPair } Asymmetric key pair.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateKeyPairSync(): KeyPair;

    /**
     * Generates a private key using this asymmetric key generator. This API uses an asynchronous callback to return the
     * result.
     *
     * If [PRIVATE_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType} is used to create a key generator, the key generator
     * generates the specified private key. If [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} is used to create a
     * key generator, you can obtain the specified private key from the key pair generated.
     *
     * @param { AsyncCallback<PriKey> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the private key obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePriKey(callback: AsyncCallback<PriKey>): void;

    /**
     * Generates a private key using this asymmetric key generator. This API uses a promise to return the result.
     *
     * If a key parameter of the [PRIVATE_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key
     * generator, a private key can be obtained. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain
     * the private key from the key pair generated.
     *
     * @returns { Promise<PriKey> } Promise used to return the private key.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePriKey(): Promise<PriKey>;

    /**
     * Generates a private key using this asymmetric key generator. This API returns the result synchronously.
     *
     * If a key parameter of the [PRIVATE_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key
     * generator, a private key can be obtained. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain
     * the private key from the key pair generated.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generatePriKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { PriKey } Private key.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generatePriKeySync(): PriKey;

    /**
     * Generates a public key using this asymmetric key generator. This API uses an asynchronous callback to return the
     * result.
     *
     * If a key parameter of the [PUBLIC_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key
     * generator, the specified public key can be obtained. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain
     * the specified public key from the key pair generated.
     *
     * @param { AsyncCallback<PubKey> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the public key obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes: Incorrect parameter types;
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePubKey(callback: AsyncCallback<PubKey>): void;

    /**
     * Generates a public key using this asymmetric key generator. This API uses a promise to return the result.
     *
     * If a key parameter of the [PUBLIC_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key
     * generator, the specified public key can be obtained. If a key parameter of the
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} type is used to create the key generator, you can obtain
     * the specified public key from the key pair generated.
     *
     * @returns { Promise<PubKey> } Promise used to return the public key.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePubKey(): Promise<PubKey>;

    /**
     * Generates a public key using this asymmetric key generator. This API returns the result synchronously.
     *
     * If [PUBLIC_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType} is used to create a key generator, the key generator
     * generates the specified public key. If [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType} is used to create a
     * key generator, you can obtain the specified public key from the key pair generated.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generatePubKey}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @returns { PubKey } Public key.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generatePubKeySync(): PubKey;

    /**
     * Indicates the algorithm name of the generator.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Obtains an asymmetric key generator instance with the specified key parameters.
   *
   * @param { AsyKeySpec } asyKeySpec - Key parameters. The **AsyKeyGenerator** generates the public/private key based
   *     on the specified parameters.<br>For details about the supported specifications, see
   *     [Asymmetric Key Generation and Conversion Specifications](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)
   *     .
   * @returns { AsyKeyGeneratorBySpec } Returns the **AsyKeyGenerator** instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createAsyKeyGeneratorBySpec(asyKeySpec: AsyKeySpec): AsyKeyGeneratorBySpec;

  /**
   * Defines the parameters of the key derivation function. When the key derivation function is used to derive a key,
   * you need to construct and pass in a child class object of **KdfSpec**.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface KdfSpec {
    /**
     * Algorithm of the key derivation function, for example, **PBKDF2**.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    algName: string;
  }

  /**
   * Defines the child class of [KdfSpec]{@link cryptoFramework.KdfSpec}. It is used as a parameter for PBKDF2 key
   * derivation.
   *
   * > **NOTE**
   * >
   * > **password** is the original password. If **password** of the string type is used, pass in the actual data for
   * > key derivation, rather than a HexString or Base64-encoded value. In addition, the string must be encoded in UTF-8
   * > , as other encodings may alter the derivation outcome.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface PBKDF2Spec extends KdfSpec {
    /**
     * Original password entered by the user.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    password: string | Uint8Array;

    /**
     * Salt value.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    salt: Uint8Array;

    /**
     * Number of iterations. The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    iterations: int;

    /**
     * Length of the derived key, in bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keySize: int;
  }

  /**
   * Defines the child class of [KdfSpec]{@link cryptoFramework.KdfSpec}. It is a parameter for HKDF key derivation.
   *
   * > **NOTE**
   * >
   * > **key** is the original key material entered by the user. An empty string can be passed in for **info** and
   * > **salt** based on the mode.
   * >
   * > For example, if the mode is **EXTRACT_AND_EXPAND**, all parameter values must be passed in. If the mode is
   * > **EXTRACT_ONLY**, **info** can be empty. When **HKDFSpec** is constructed, pass in **null** to **info**.
   * >
   * > The default mode is **EXTRACT_AND_EXPAND**. The value **HKDF|SHA256|EXTRACT_AND_EXPAND** is equivalent to
   * > **HKDF|SHA256**.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface HKDFSpec extends KdfSpec {
    /**
     * Key material.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * Salt value.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    salt: Uint8Array;

    /**
     * Information used to expand the key.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    info: Uint8Array;

    /**
     * Length of the derived key, in bytes.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    keySize: int;
  }

  /**
   * Defines the child class of [KdfSpec]{@link cryptoFramework.KdfSpec}. It is a parameter for scrypt key derivation
   * function (KDF).
   *
   * > **NOTE**
   * >
   * > **passphrase** specifies the original password. If **password** is of the string type, pass in the data used for
   * > key derivation rather than a string of the HexString or Base64 type. In addition, the string must be in utf-8
   * > format. Otherwise, the key derived may be different from the one expected.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface ScryptSpec extends KdfSpec {
    /**
     * Original password entered by the user.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    passphrase: string | Uint8Array;

    /**
     * Salt value.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    salt: Uint8Array;

    /**
     * Number of iterations. The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    n: long;

    /**
     * Block size. The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    r: long;

    /**
     * Parallelization parameter. The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    p: long;

    /**
     * Maximum memory size, in bytes. The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    maxMemory: long;

    /**
     * Length of the derived key, in bytes. The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    keySize: int;
  }

  /**
   * Defines the child class of [KdfSpec]{@link cryptoFramework.KdfSpec}. It is a parameter for X963KDF key derivation
   * function (KDF).
   *
   * > **NOTE**
   * >
   * > **key** is the original key material entered by the user.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface X963KdfSpec extends KdfSpec {
    /**
     * Key material.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * Additional description.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    info: Uint8Array;

    /**
     * Length of the derived key, in bytes.
     * The value must be a positive integer.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    keySize: int;
  }

  /**
   * Defines the key derivation function class. Before using APIs of this class, you need to create an instance of this
   * class by using **createKdf(algName: string): Kdf**.
   *
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Kdf {
    /**
     * Generates a key based on the specified key derivation parameters. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { KdfSpec } params - Parameters of the key derivation function.
     * @param { AsyncCallback<DataBlob> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**, and **data** is the derived key obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid key length in the params;
     *     <br>2. Invalid info length in the params;
     *     <br>3. Invalid keySize in the params. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void;

    /**
     * Generates a key based on the specified key derivation parameters. This API uses a promise to return the result.
     *
     * @param { KdfSpec } params - Parameters of the key derivation function.
     * @returns { Promise<DataBlob> } Promise used to return the derived key.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid key length in the params;
     *     <br>2. Invalid info length in the params;
     *     <br>3. Invalid keySize in the params. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    generateSecret(params: KdfSpec): Promise<DataBlob>;

    /**
     * Generates a key based on the specified key derivation parameters. This API returns the result synchronously.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link generateSecret}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { KdfSpec } params - Parameters of the key derivation function.
     * @returns { DataBlob } the derived key.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. Invalid key length in the params;
     *     <br>2. Invalid info length in the params;
     *     <br>3. Invalid keySize in the params. [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateSecretSync(params: KdfSpec): DataBlob;

    /**
     * Indicates the algorithm name of the key derivation function.
     *
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly algName: string;
  }

  /**
   * Creates a key derivation function instance.
   *
   * @param { string } algName - Key derivation algorithm (including the hash function for the HMAC). Currently, PBKDF2,
   *     HKDF, SCRYPT, and X963KDF are supported. For example, **PBKDF2|SHA256**, **HKDF|SHA256**,
   *     **SCRYPT**, or **X963KDF|SHA256**.<br>For details about the supported specifications, see
   *     [Key Derivation Function Specifications](docroot://security/CryptoArchitectureKit/crypto-key-derivation-overview.md).
   * @returns { Kdf } Key derivation function instance created.
   * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - This operation is not supported.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createKdf(algName: string): Kdf;

  /**
   * Represents the SM2 ciphertext parameters. You can use this object to generate SM2 ciphertext in ASN.1 format or
   * obtain SM2 parameters from the SM2 ciphertext in ASN.1 format.
   *
   * > **NOTE**
   * >
   * > - **hashData** is a value obtained by applying the SM3 algorithm to the plaintext. It has a fixed length of 256
   * > bits.
   * >
   * > - **cipherTextData** is the ciphertext with the same length as the plaintext.
   * >
   * > - During the generation of ciphertext in C1C3C2 format, if the length of x (**C1_X**) or y (**C1_Y**) is less
   * > than 32 bytes, zeros must be added to the high-order bits to extend them to 32 bytes.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SM2CipherTextSpec {
    /**
     * Indicates the x coordinate, also known as C1x.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    xCoordinate: bigint;

    /**
     * Indicates the y coordinate, also known as C1y.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    yCoordinate: bigint;

    /**
     * Indicates the ciphertext data, also known as C2.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cipherTextData: Uint8Array;

    /**
     * Indicates the hash data, also known as C3.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hashData: Uint8Array;
  }

  /**
   * Provides APIs for SM2 cryptographic operations.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class SM2CryptoUtil {
    /**
     * Generates SM2 ciphertext in ASN.1 format.
     *
     * @param { SM2CipherTextSpec } spec - SM2 ciphertext parameters.
     * @param { string } [mode] - Order of the SM2 parameters in the ciphertext. Currently, only C1C3C2 is supported. If
     *     this parameter is left empty or is an empty string, the default value is used.
     * @returns { DataBlob } SM2 ciphertext in ASN.1 format.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static genCipherTextBySpec(spec: SM2CipherTextSpec, mode?: string): DataBlob;

    /**
     * Obtains SM2 ciphertext parameters from the SM2 ciphertext in ASN.1 format.
     *
     * @param { DataBlob } cipherText - SM2 ciphertext in ASN.1 format.
     * @param { string } [mode] - Order of the SM2 parameters in the ciphertext. Currently, only C1C3C2 is supported. If
     *     this parameter is left empty or is an empty string, the default value is used.
     * @returns { SM2CipherTextSpec } SM2 ciphertext parameters obtained.
     * @throws { BusinessError } 401 - Invalid parameters. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getCipherTextSpec(cipherText: DataBlob, mode?: string): SM2CipherTextSpec;
  }

  /**
   * Represents the ECC/SM2 signature data that contains (r, s).
   *
   * > **NOTE**
   * >
   * > **r** and **s** are each 256 bits long.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface EccSignatureSpec {
    /**
     * Randomized value derived from the elliptic curve calculation using the ephemeral private key during signature
     * generation.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    r: bigint;

    /**
     * Signature component, computed using the signer's private key, r, and the hashed message.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    s: bigint;
  }

  /**
   * Provides utilities for converting ECC/SM2 signature data.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  class SignatureUtils {
    /**
     * Generates r and s from the ECC/SM2 signature data in ASN1 DER format.
     *
     * @param { Uint8Array } data - Signature data in ASN1 DER format.
     * @returns { EccSignatureSpec } struct that contains r and s.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The length of the data parameter is 0 or too large.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static genEccSignatureSpec(data: Uint8Array): EccSignatureSpec;

    /**
     * Converts an ECC/SM2 signature (r, s) to the ASN1 DER format.
     *
     * @param { EccSignatureSpec } spec - SM2 signature data to convert.
     * @returns { Uint8Array } Signature data in ASN1 DER format.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed. Possible causes:
     *     <br>1. The r or s value of the spec parameter is 0 or too large.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static genEccSignature(spec: EccSignatureSpec): Uint8Array;
  }

  /**
   * Indicates the KEM algorithm name ID.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum KemAlgNameId {
    /**
     * Indicates the ML_KEM_512 algorithm name ID.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_512 = 0,

    /**
     * Indicates the ML_KEM_768 algorithm name ID.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_768 = 1,

    /**
     * Indicates the ML_KEM_1024 algorithm name ID.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_1024 = 2
  }

  /**
   * Indicates the encapsulation result of the KEM.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface KemEncapResult {
    /**
     * Indicates the shared secret key of the KEM.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    sharedSecret: Uint8Array;

    /**
     * Indicates the wrapped key of the KEM, which is the ciphertext of the KEM.
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    wrappedKey: Uint8Array;
  }

  /**
   * Indicates the KEM(key encapsulation mechanism) type, which is used for key encapsulation and decapsulation
   * operations.
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface Kem {
    /**
     * Key encapsulation operation. Using the recipient's public key, executed by the sender, to generate and
     * encapsulate a shared key. This API uses a promise to return the result.
     *
     * @param { PubKey } pubKey - The public key of the receiver.
     * @param { Uint8Array | null } ikme - Random number seed, used to replace the random number within the algorithm.
     *     For the ML-KEM algorithm, the random number seed is 32 bytes. It is recommended to pass null.
     * @returns { Promise<KemEncapResult> } Promise used to return the KemEncapResult.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    encapsulate(pubKey: PubKey, ikme: Uint8Array | null): Promise<KemEncapResult>;

    /**
     * Key encapsulation operation. Using the recipient's public key, executed by the sender, to generate and
     * encapsulate a shared key.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link encapsulate}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { PubKey } pubKey - The public key of the receiver.
     * @param { Uint8Array | null } ikme - Random number seed, used to replace the random number within the algorithm.
     *     For the ML-KEM algorithm, the random number seed is 32 bytes. It is recommended to pass null.
     * @returns { KemEncapResult } the encapsulation result of the KEM.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    encapsulateSync(pubKey: PubKey, ikme: Uint8Array | null): KemEncapResult;

    /**
     * Key decapsulation operation. Using the receiver's private key, executed by the receiver, to decapsulate the
     * shared key from the ciphertext. This API uses a promise to return the result.
     *
     * @param { PriKey } priKey - The private key of the receiver.
     * @param { Uint8Array } wrappedKey - The wrapped key of the KEM.
     * @returns { Promise<Uint8Array> } Promise used to return the shared secret.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    decapsulate(priKey: PriKey, wrappedKey: Uint8Array): Promise<Uint8Array>;

    /**
     * Key decapsulation operation. Using the receiver's private key, executed by the receiver, to decapsulate the
     * shared key from the ciphertext.
     *
     * <br><br>**NOTE**
     * <br>It is recommended to prioritize the use of asynchronous API, {@link decapsulate}. Synchronous API may
     * take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,
     * it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.
     *
     * @param { PriKey } priKey - The private key of the receiver.
     * @param { Uint8Array } wrappedKey - The wrapped key of the KEM.
     * @returns { Uint8Array } the decapsulation result of the KEM.
     * @throws { BusinessError } 17620001 - Memory operation failed.
     * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
     * @throws { BusinessError } 17620003 - Parameter check failed.
     * @throws { BusinessError } 17630001 - Crypto operation error.
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    decapsulateSync(priKey: PriKey, wrappedKey: Uint8Array): Uint8Array;
  }

  /**
   * Creates a KEM instance for key encapsulation and decapsulation operations.
   *
   * @param { KemAlgNameId } algNameId - The algorithm name ID of the KEM.
   * @returns { Kem } the KEM instance.
   * @throws { BusinessError } 17620001 - Memory operation failed.
   * @throws { BusinessError } 17620002 - Failed to obtain the native object or convert parameters.
   * @throws { BusinessError } 17620003 - Parameter check failed.
   * @throws { BusinessError } 17630001 - Crypto operation error.
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createKem(algNameId: KemAlgNameId): Kem;
}

export default cryptoFramework;