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
 * 提供统一的密码算法库加解密接口，以屏蔽底层硬件和算法库。
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
   * 表示执行结果的枚举。
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
     * 非法入参。
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
     * 操作不支持。
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
     * 内存操作失败。
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
     * 获取Native对象失败或参数转换失败。
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
     * 表示参数检查失败。
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
     * 表示无效的函数调用。
     *
     * @syscap SystemCapability.Security.CryptoFramework
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ERR_INVALID_CALL = 17620004,

    /**
     * 密码操作错误。
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
   * 二进制数据的封装接口，核心字段data为Uint8Array类型。
   *
   * > **说明：**
   * >
   * > Uint8Array类型数据表示8位无符号整数的数组。
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
     * 数据。
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
   * 加解密参数，在进行对称加解密时需要构造其子类对象，并将子类对象传入
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法。
   *
   * 适用于需要iv等参数的对称加解密模式（对于无iv等参数的模式如ECB模式，无需构造，在
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}中传入null即可）。
   *
   * > **说明：**
   * >
   * > iv（Initialization Vector，初始化向量）是用于对称加密模式（如 CBC/CTR/OFB/CFB/GCM/CCM/ChaCha20-Poly1305）中引入随机性或
   * > 唯一性的字节序列，保证相同明文在相同密钥下产生不同密文。
   *
   * > **说明：**
   * >
   * > 由于[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}的params
   * > 参数是ParamsSpec类型（父类），而实际需要传入具体的子类对象（如[IvParamsSpec]{@link cryptoFramework.IvParamsSpec}），因此在
   * > 构造子类对象时应设置其父类ParamsSpec的algName参数，使算法库在init()时知道传入的是哪种子类对象。
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
     * 指明对称加解密参数的算法模式。可选值如下：
     *
     * - "IvParamsSpec"：适用于CBC|CTR|OFB|CFB模式。
     * - "GcmParamsSpec"：适用于GCM模式。
     * - "CcmParamsSpec"：适用于CCM模式。
     * - "AeadParamsSpec"：适用于AES-GCM，AES-CCM，SM4-GCM和ChaCha20-Poly1305算法。
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
   * 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。
   *
   * 适用于CBC、CTR、OFB、CFB这些需要iv作为参数的加解密模式。
   *
   * > **说明：**
   * >
   * > 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需要
   * > 指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。
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
     * 加密和解密参数iv。常见取值如下：
     *
     * - AES的CBC|CTR|OFB|CFB模式：iv长度为16字节。
     * - 3DES的CBC|OFB|CFB模式：iv长度为8字节。
     * - SM4<sup>10+</sup>的CBC|CTR|OFB|CFB模式：iv长度为16字节。
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
   * 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，封装使用GCM AEAD模式进行加密或解密的参数，需要IV、AAD和认证
   * 标签。它是[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。
   *
   * 适用于GCM模式。
   *
   * > **说明：**
   * >
   * > 1. 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需
   * > 要指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。
   * > 2. 如果不需要aad或者aad长度为0，构造GcmParamsSpec时可以将aad的data属性设置为空的Uint8Array，
   * > 即aad: { data: new Uint8Array() }。
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
     * 指明加解密参数iv，长度为1~128字节，常用为12字节。
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
     * 指明加解密参数aad，长度为0~INT_MAX字节。
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
     * 指明加解密参数authTag，长度为16字节。
     *
     * 采用GCM模式加密时，需从
     * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}或
     * [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)}输出的
     * [DataBlob]{@link cryptoFramework.DataBlob}中提取末尾16字节，作为
     * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}或
     * [initSync()]{@link cryptoFramework.Cipher.initSync}方法中GcmParamsSpec的authTag。
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
   * 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，封装使用CCM AEAD模式进行加密或解密的参数，需要IV、AAD和认证
   * 标签。它是[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。
   *
   * 适用于CCM模式。
   *
   * > **说明：**
   * >
   * > 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需
   * > 要指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。
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
     * 指明加解密参数iv，仅支持7字节。若传入iv长度超过7字节，超出范围将被截断。
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
     * 指明加解密参数aad。aad最小长度为1字节，最大为2048字节。
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
     * 指明加解密参数authTag，长度为12字节。
     *
     * 采用CCM模式加密时，需从
     * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}或
     * [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)}输出的
     * [DataBlob]{@link cryptoFramework.DataBlob}中提取末尾12字节，作为解密时
     * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}或
     * [initSync()]{@link cryptoFramework.Cipher.initSync}方法中CcmParamsSpec的authTag。
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
   * 加解密参数[ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，封装使用ChaCha20-Poly1305 AEAD模式进行加密或解密的参数，
   * 需要nonce、AAD和认证标签。它是
   * [ParamsSpec]{@link cryptoFramework.ParamsSpec}的子类，用于在对称加解密时作为
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法的参数。
   *
   * 适用于[ChaCha20-Poly1305](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20)。
   *
   * > **说明：**
   * >
   * > 传入[init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法前需要
   * > 指定其algName属性（来源于父类[ParamsSpec]{@link cryptoFramework.ParamsSpec}）。
   * >
   * > 在ChaCha20-Poly1305加密时，需从
   * > [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}或
   * > [doFinalSync()]{@link cryptoFramework.Cipher.doFinalSync(data: DataBlob | null)}输出的
   * > [DataBlob]{@link cryptoFramework.DataBlob}末尾提取16字节，作为解密时
   * > [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}或
   * > [initSync()]{@link cryptoFramework.Cipher.initSync}方法的参数
   * > [Poly1305ParamsSpec]{@link cryptoFramework.Poly1305ParamsSpec}中的authTag。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface Poly1305ParamsSpec extends ParamsSpec {
    /**
     * Nonce（通过iv字段传入），长度为12字节。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    iv: DataBlob;

    /**
     * 指明加解密参数aad。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    aad: DataBlob;

    /**
     * 指定加解密参数authTag，长度为16字节。
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
   * 用于AEAD（带附加数据的认证加密）对称加解密的
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法参数，继承自
   * [ParamsSpec]{@link cryptoFramework.ParamsSpec}。
   *
   * 适用于[AES算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#aes)的CCM和GCM分组模式。
   * 适用于[SM4算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#sm4)的GCM分组模式。
   * 适用于[ChaCha20-Poly1305算法](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md#chacha20)
   * 分组模式。
   *
   * > **说明：**
   * >
   * > 在AES-CCM模式下使用AeadParamsSpec加密时：
   * > - 如果加密时指定了tag长度，解密时也必须传入相同的长度。
   * >
   * > - CCM模式下[update]{@link cryptoFramework.Cipher.update}与[doFinal]{@link cryptoFramework.Cipher.doFinal}只能调用其
   * > 中一个进行加密或者解密，且每个方法只能调用一次。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface AeadParamsSpec extends ParamsSpec {
    /**
     * 指明加解密参数nonce。
     * <br>对于AES-CCM，nonce长度的取值范围为7~13字节。
     * 对于AES-GCM，nonce长度范围为1~128字节，推荐使用12字节。
     * 对于SM4-GCM，nonce长度范围为1~128字节，推荐使用12字节。
     * 对于ChaCha20-Poly1305，nonce长度必须为12字节。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    nonce: Uint8Array;

    /**
     * 指定可选的附加认证数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    authenticatedData?: Uint8Array;

    /**
     * 指定加解密参数authTag长度。
     * 对于加密操作，tag将被添加到密文的末尾。
     * 对于解密操作，tag应位于密文的末尾。
     * 取值限定为整数。
     * <br>对于 AES-CCM，其默认值为12。支持的范围为4、6、8、10、12、14 和 16。
     * 对于 AES-GCM，其默认值为16。支持的范围为4、8、12、13、14、15 和 16。
     * 对于 SM4-GCM，其默认值为16。支持的范围为4、8、12、13、14、15 和 16。
     * 对于 ChaCha20-Poly1305，其默认值为16。支持的范围为16。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    tagLen?: int;
  }

  /**
   * 枚举加密和解密的密码操作模式。
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
     * 表示进行加密操作。
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
     * 表示进行解密操作。
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
   * RSA私钥编码参数，使用获取私钥字符串时，可以添加此参数，生成指定算法、密码的编码后的私钥字符串。
   *
   * > **说明：**
   * >
   * > - password是必选参数，表示编码用到的密码。
   * >
   * > - cipherName是必选参数，指定编码用到的算法。当前仅支持AES-128-CBC、AES-192-CBC、AES-256-CBC、DES-EDE3-CBC。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface KeyEncodingConfig {
    /**
     * 密码。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * 用于编码私钥的对称密码算法。
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
   * 密钥（父类），在运行密码算法（如加解密）时需要提前生成其子类对象，并传入[Cipher]{@link cryptoFramework.Cipher}实例的
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法。
   *
   * 密钥通过子类密钥生成器来生成，详见子类描述。具体子类有：
   * [SymKey]{@link cryptoFramework.SymKey}、[PubKey]{@link cryptoFramework.PubKey}、
   * [PriKey]{@link cryptoFramework.PriKey}。
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
     * 同步方法，获取密钥数据的字节流。密钥可以是对称密钥、公钥或私钥。公钥格式需符合ASN.1语法、X.509规范和DER编码；私钥格式需符合ASN.1
     * 语法、PKCS#8规范和DER编码。
     *
     * > **说明：**
     * >
     * > RSA算法使用密钥参数生成私钥时，私钥对象支持getEncoded。
     *
     * @returns { DataBlob } 获取的密钥数据。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getEncoded(): DataBlob;

    /**
     * 以同步方式获取密钥的比特长度。密钥可以是对称密钥、公钥或私钥。
     *
     * @returns { int } 获取密钥的比特长度。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeySize(): int;

    /**
     * 密钥的格式。
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
     * 密钥对应的算法名（如果是对称密钥，则含密钥长度，否则不含密钥长度）。
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
   * 对称密钥，是[Key]{@link cryptoFramework.Key}的子类，在对称加解密时需要将其对象传入
   * [Cipher]{@link cryptoFramework.Cipher}实例的
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}方法使用。
   *
   * 对称密钥通过对称密钥生成器[SymKeyGenerator]{@link cryptoFramework.SymKeyGenerator}来生成。
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
     * 同步方法，将系统底层内存中的密钥数据清零。建议在不再使用对称密钥实例时调用此函数，避免密钥数据在内存中存留过久。
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
   * 私钥，是[Key]{@link cryptoFramework.Key}的子类，在非对称解密、签名、密钥协商时需要将其作为输入使用。
   *
   * 私钥可以通过非对称密钥生成器[AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator}、
   * [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}来生成。
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
     * 同步方法，清零系统底层内存中的密钥数据。
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
     * 获取一个密钥参数。此API以同步方式返回结果。
     *
     * @param { AsyKeySpecItem } itemType - 指定的密钥参数类型。
     * @returns { bigint | string | int } 获取的密钥参数内容。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | int;

    /**
     * 支持根据指定的密钥格式（如采用哪个规范），获取满足ASN.1语法、DER编码的私钥数据。
     *
     * > **说明：**
     * >
     * > 本接口和[Key.getEncoded()]{@link cryptoFramework.Key.getEncoded}的区别是：
     * > 1. 本接口可以指定获取密钥数据的格式。
     * > 2. [Key.getEncoded()]{@link cryptoFramework.Key.getEncoded}不支持指定获取密钥数据的格式。
     *
     * @param { string } format - 用于指定当前密钥格式。支持EC密钥，format取值支持"PKCS8"。
     *     <br>从API版本26.0.0开始，支持RSA密钥，format取值支持"PKCS1"和"PKCS8"。
     *     <br>从API版本26.0.0开始，支持ML-DSA和ML-KEM密钥，format取值支持"PKCS8"。
     * @returns { DataBlob } 返回满足ASN.1语法和DER编码的指定密钥格式的ECC私钥数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedDer(format: string): DataBlob;

    /**
     * 获取密钥数据。此API以同步方式返回结果。
     *
     * @param { string } format - 指定的获取密钥字符串的编码格式。支持RSA密钥，format取值支持'PKCS8'或'PKCS1'。
     *     <br>自API版本26.0.0起，支持EC密钥，format取值支持'PKCS8'或'EC'。
     *     <br>自API版本26.0.0起，支持ML-DSA和ML-KEM密钥，format取值支持'PKCS8'。
     * @returns { string } 用于获取指定密钥格式的具体内容。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedPem(format: string): string;

    /**
     * 获取密钥数据。此API以同步方式返回结果。目前仅支持RSA密钥。
     *
     * @param { string } format - 指定的获取密钥字符串的编码格式。对于RSA密钥，格式可以是'PKCS8'或'PKCS1'。
     * @param { KeyEncodingConfig } config - 指定编码的算法跟口令，对私钥进行编码操作。
     * @returns { string } 用于获取指定密钥格式的具体内容。如果填了config参数，则获取编码后的内容。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getEncodedPem(format: string, config: KeyEncodingConfig): string;

    /**
     * 从私钥对象中获取公钥对象。使用Promise异步回调。
     *
     * @returns { Promise<PubKey> } Promise对象，返回公钥对象PubKey。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    getPubKey(): Promise<PubKey>;

    /**
     * 以同步方式，从私钥对象中获取公钥对象。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link getPubKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { PubKey } 公钥对象。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic&static
     */
    getPubKeySync(): PubKey;

    /**
     * 指定密钥数据项类型，获取对应类型的私钥数据。使用Promise异步回调。
     *
     * @param { AsyKeyDataItem } itemType - 指定密钥数据项类型。
     * @returns { Promise<Uint8Array> } Promise对象，返回指定密钥数据项类型的私钥数据。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyData(itemType: AsyKeyDataItem): Promise<Uint8Array>;

    /**
     * 根据指定的密钥数据类型获取私钥数据。此API以同步方式返回结果。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link getKeyData}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { AsyKeyDataItem } itemType - 指定密钥数据项类型。
     * @returns { Uint8Array } 返回指定密钥数据项类型的私钥数据。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyDataSync(itemType: AsyKeyDataItem): Uint8Array;
  }

  /**
   * 公钥，是[Key]{@link cryptoFramework.Key}的子类，在非对称加密、签名验证、密钥协商时需要将其对象作为输入使用。
   *
   * 公钥可以通过非对称密钥生成器[AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator}、
   * [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}来生成。
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
     * 获取密钥参数。此API以同步方式返回结果。
     *
     * @param { AsyKeySpecItem } itemType - 指定的密钥参数。
     * @returns { bigint | string | int } 获取的密钥参数内容。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 801 - 该操作不支持。 [since 12]
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAsyKeySpec(itemType: AsyKeySpecItem): bigint | string | int;

    /**
     * 支持根据指定的密钥格式（如规范、压缩状态等），获取符合ASN.1语法和DER编码的公钥数据。
     *
     * > **说明：**
     * >
     * > 本接口和[Key.getEncoded()]{@link cryptoFramework.Key.getEncoded}的区别是：
     * > 1. 本接口可以指定获取密钥数据的格式。
     * > 2. [Key.getEncoded()]{@link cryptoFramework.Key.getEncoded}不支持指定获取密钥数据的格式。
     *
     * @param { string } format - 用于指定当前密钥格式。 支持EC密钥，format取值支持"X509|COMPRESSED"和"X509|UNCOMPRESSED"。
     *     <br>从API版本26.0.0开始，支持RSA密钥，format取值支持"PKCS1"和"X509"。
     *     <br>从API版本26.0.0开始，支持ML-DSA和ML-KEM密钥，format取值支持"X509"。
     * @returns { DataBlob } 返回满足ASN.1语法和DER编码的指定密钥格式的公钥数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedDer(format: string): DataBlob;

    /**
     * 获取密钥数据。此API以同步方式返回结果。
     *
     * @param { string } format - 指定的获取密钥字符串的编码格式。支持RSA密钥，format取值支持'X509'或'PKCS1'。
     *     <br>自API版本26.0.0起，支持EC、ML-DSA和ML-KEM密钥，format取值支持'X509'。
     * @returns { string } 用于获取指定密钥格式的具体内容。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getEncodedPem(format: string): string;

    /**
     * 获取指定的密钥数据类型对应的公钥数据。使用Promise异步回调。
     *
     * @param { AsyKeyDataItem } itemType - 指定密钥数据项类型。
     * @returns { Promise<Uint8Array> } Promise对象，返回指定密钥数据项类型的公钥数据。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyData(itemType: AsyKeyDataItem): Promise<Uint8Array>;

    /**
     * 获取指定的密钥数据类型对应的公钥数据。此API以同步方式返回结果。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link getKeyData}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { AsyKeyDataItem } itemType - 指定密钥数据项类型。
     * @returns { Uint8Array } 返回指定密钥数据项类型的公钥数据。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getKeyDataSync(itemType: AsyKeyDataItem): Uint8Array;
  }

  /**
   * 非对称密钥对包含公钥和私钥。
   *
   * 可以通过非对称密钥生成器[AsyKeyGenerator]{@link cryptoFramework.AsyKeyGenerator}、
   * [AsyKeyGeneratorBySpec]{@link cryptoFramework.AsyKeyGeneratorBySpec}来生成。
   *
   * > **说明：**
   * >
   * > KeyPair对象中的pubKey对象和priKey对象是KeyPair对象的成员。当KeyPair对象超出作用域时，其内部的pubKey对象和priKey对象将被析构。
   * >
   * > 业务方使用时应持有KeyPair对象的引用，而非内部pubKey或priKey对象的引用。
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
     * 私钥。
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
     * 公钥。
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
   * Random类，调用Random方法生成随机数。调用前，需要通过[createRandom]{@link cryptoFramework.createRandom}构造Random实例。
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
     * 生成指定长度的随机数。使用callback异步回调。
     *
     * @param { int } len - 表示生成随机数的长度，单位为bytes，范围在[1, INT_MAX]。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当生成随机数成功时，err为undefined，data为获取到的随机数；否则为
     *     错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 生成指定长度的随机数。使用promise异步回调。
     *
     * @param { int } len - 表示生成随机数的长度，单位为bytes，范围在[1, INT_MAX]。
     * @returns { Promise<DataBlob> } Promise对象，返回生成的随机数。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 同步生成指定长度的随机数。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generateRandom}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { int } len - 表示生成随机数的长度，单位为bytes，范围在[1, INT_MAX]。
     * @returns { DataBlob } 表示生成的随机数。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 设置指定的种子。
     *
     * @param { DataBlob } seed - 设置的种子。
     * @throws { BusinessError } 17620001 - 内存操作失败。
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
     * 开启硬件熵源。
     *
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Rand
     * @stagemodelonly
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    enableHardwareEntropy(): void;

    /**
     * 代表当前使用的随机数生成算法，目前只支持"CTR_DRBG"。
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
   * 生成Random实例，用于进行随机数的计算与设置种子。
   *
   * @returns { Random } 返回由输入算法指定生成的[Random]{@link cryptoFramework.Random}对象。
   *     <br>支持的规格详见框架概述[随机数算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-random-number.md#支持的算法与规格)。
   * @throws { BusinessError } 17620001 - 内存操作失败。
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
   * 非对称密钥生成器。在使用该类的方法前，需要先使用[createAsyKeyGenerator]{@link cryptoFramework.createAsyKeyGenerator}方法构建
   * 一个AsyKeyGenerator实例。
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
     * 获取非对称密钥生成器随机生成的密钥。使用callback异步回调。
     *
     * @param { AsyncCallback<KeyPair> } callback - 回调函数。当生成非对称密钥成功时，err为undefined，data为获取到的KeyPair；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：参数类型不正确。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateKeyPair(callback: AsyncCallback<KeyPair>): void;

    /**
     * 获取非对称密钥生成器随机生成的密钥。使用Promise异步回调。
     *
     * @returns { Promise<KeyPair> } Promise对象，返回非对称密钥KeyPair。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * 同步获取非对称密钥生成器随机生成的密钥。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generateKeyPair}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { KeyPair } 非对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateKeyPairSync(): KeyPair;

    /**
     * 将非对称密钥数据转换为密钥对对象。使用callback异步回调。
     *
     * @param { DataBlob } pubKey - 公钥材料。
     * @param { DataBlob } priKey - 私钥材料。
     * @param { AsyncCallback<KeyPair> } callback - 回调函数。当生成非对称密钥成功时，err为undefined，data为获取到的KeyPair；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    convertKey(pubKey: DataBlob, priKey: DataBlob, callback: AsyncCallback<KeyPair>): void;

    /**
     * 获取指定数据生成非对称密钥。使用callback异步回调。
     *
     * @param { DataBlob | null } pubKey - 指定的公钥材料。如果公钥不需要转换，请传入null。API 10之前只支持DataBlob， API 10之后增
     *     加支持null。
     * @param { DataBlob | null } priKey - 指定的私钥材料。如果私钥不需要转换，请传入null。API 10之前只支持DataBlob， API 10之后增
     *     加支持null。
     * @param { AsyncCallback<KeyPair> } callback - 回调函数。当生成非对称密钥成功时，err为undefined，data为获取到的KeyPair；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    convertKey(pubKey: DataBlob | null, priKey: DataBlob | null, callback: AsyncCallback<KeyPair>): void;

    /**
     * 将非对称密钥数据转换为密钥对对象。使用Promise异步回调。
     *
     * @param { DataBlob } pubKey - 公钥材料。
     * @param { DataBlob } priKey - 私钥材料。
     * @returns { Promise<KeyPair> } Promise对象，返回非对称密钥KeyPair。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    convertKey(pubKey: DataBlob, priKey: DataBlob): Promise<KeyPair>;

    /**
     * 获取指定数据生成非对称密钥。使用Promise异步回调。
     *
     * @param { DataBlob | null } pubKey - 指定的公钥材料。如果公钥不需要转换，请传入null。API 10之前只支持DataBlob， API 10之后增
     *     加支持null。
     * @param { DataBlob | null } priKey - 指定的私钥材料。如果私钥不需要转换，请传入null。API 10之前只支持DataBlob， API 10之后增
     *     加支持null。
     * @returns { Promise<KeyPair> } Promise对象，返回非对称密钥KeyPair。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    convertKey(pubKey: DataBlob | null, priKey: DataBlob | null): Promise<KeyPair>;

    /**
     * 同步获取指定数据生成非对称密钥。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link convertKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob | null } pubKey - 指定公钥材料。如果公钥无需转换，请传入null。API 10前仅支持DataBlob，API 10起支持传入
     *     null。
     * @param { DataBlob | null } priKey - 指定私钥材料。如果私钥无需转换，请传入null。API 10前仅支持DataBlob，API 10起支持传入
     *     null。
     * @returns { KeyPair } 非对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertKeySync(pubKey: DataBlob | null, priKey: DataBlob | null): KeyPair;

    /**
     * 获取指定数据生成非对称密钥。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 1. 使用convertPemKey()将外部字符串转换为Crypto框架定义的非对称密钥对象时，公钥需满足ASN.1语法、X.509规范和PEM编码格式，私钥需
     * > 满足ASN.1语法、PKCS#8规范和PEM编码格式。
     * > 2. 在convertPemKey()中，可以只传入pubKey或priKey中的一个，也可以两个都传入。如果只传入其中一个，返回的KeyPair实例中只包含从传
     * > 入数据转换而来的密钥。
     * > 3. 使用convertPemKey将外部字符串转换为Crypto框架定义的非对称密钥对象时，系统不会校验生成的密钥对象规格是否与为非对称密钥生成器指
     * > 定的密钥规格相同。
     *
     * @param { string | null } pubKey - 指定的公钥材料。如果公钥不需要转换，请传入null。
     * @param { string | null } priKey - 指定的私钥材料。如果私钥不需要转换，请传入null。<br>**说明：**公钥和私钥材料不能同时为null
     *     或空字符串。
     * @returns { Promise<KeyPair> } Promise对象，返回非对称密钥KeyPair。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertPemKey(pubKey: string | null, priKey: string | null): Promise<KeyPair>;

    /**
     * 获取指定数据生成非对称密钥。支持加密的私钥，同步传入私钥口令解密私钥。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 1. 使用convertPemKey()将外部字符串转换为Crypto框架定义的非对称密钥对象时，公钥需满足ASN.1语法、X.509规范和PEM编码格式，私钥需
     * > 满足ASN.1语法、PKCS#8规范和PEM编码格式。
     * > 2. 在convertPemKey()中，可以只传入pubKey或priKey中的一个，也可以两个都传入。如果只传入其中一个，返回的KeyPair实例中只包含从传
     * > 入数据转换而来的密钥。
     * > 3. 使用convertPemKey将外部字符串转换为Crypto框架定义的非对称密钥对象时，系统不会校验生成的密钥对象规格是否与为非对称密钥生成器指
     * > 定的密钥规格相同。
     * > 4. 如果传入了password参数，可用于解密加密的私钥。
     *
     * @param { string | null } pubKey - 指定的公钥材料。如果公钥不需要转换，请传入null。
     * @param { string | null } priKey - 指定的私钥材料。如果私钥不需要转换，请传入null。<br>**说明：**公钥和私钥材料不能同时为null
     *     或空字符串。
     * @param { string } password - 指定口令，用于解密私钥。
     * @returns { Promise<KeyPair> } Promise对象，返回非对称密钥KeyPair。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    convertPemKey(pubKey: string | null, priKey: string | null, password: string): Promise<KeyPair>;

    /**
     * 同步获取指定数据，生成非对称密钥。
     *
     * > **说明：**
     * > convertPemKeySync接口与convertPemKey接口注意事项相同，见
     * > [convertPemKey]{@link cryptoFramework.AsyKeyGenerator.convertPemKey(pubKey: string | null, priKey: string | null)}
     * > 接口说明。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link convertPemKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { string | null } pubKey - 指定的公钥材料。如果公钥不需要转换，请传入null。
     * @param { string | null } priKey - 指定私钥材料。私钥无需转换时，请传入null。<br>**说明：**公钥和私钥材料不能同时为null或
     *     空字符串。
     * @returns { KeyPair } 非对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertPemKeySync(pubKey: string | null, priKey: string | null): KeyPair;

    /**
     * 获取指定数据生成非对称密钥。支持加密的私钥，同步传入私钥口令解密私钥。使用同步方法。
     *
     * > **说明：**
     * > convertPemKeySync接口与convertPemKey接口注意事项相同，见
     * > [convertPemKey]{@link cryptoFramework.AsyKeyGenerator.convertPemKey(pubKey: string | null, priKey: string | null, password: string)}
     * > 接口说明。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link convertPemKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { string | null } pubKey - 指定的公钥材料。如果公钥不需要转换，请传入null。
     * @param { string | null } priKey - 指定私钥材料。若无需转换，请传入 null。注意：公钥与私钥材料不可同时为 null。
     * @param { string } password - 指定口令，用于解密私钥。
     * @returns { KeyPair } 非对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    convertPemKeySync(pubKey: string | null, priKey: string | null, password: string): KeyPair;

    /**
     * 非对称密钥生成器指定的算法名称。
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
   * 对称密钥生成器。
   *
   * 在使用该类的方法前，先使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}构建SymKeyGenerator实例。
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
     * 获取对称密钥生成器随机生成的密钥。使用callback异步回调。
     *
     * 必须在使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}创建对称密钥生成器后，才能使用本函数。
     *
     * 目前支持使用OpenSSL的RAND_priv_bytes()作为底层能力生成随机密钥。
     *
     * > **说明：**
     * >
     * > 对于HMAC算法的对称密钥，如果在创建对称密钥生成器时指定了具体哈希算法（如"HMAC|SHA256"），则会随机生成与哈希长度一致的二进制密钥
     * > 数据（如256位的密钥数据）。如果未指定具体哈希算法，如仅指定"HMAC"，则不支持随机生成对称密钥数据，可通过
     * > [convertKey]{@link cryptoFramework.SymKeyGenerator.convertKey(key: DataBlob, callback: AsyncCallback<SymKey>)}
     * > 方式生成对称密钥数据。
     *
     * @param { AsyncCallback<SymKey> } callback - 回调函数。当生成对称密钥成功时，err为undefined，data为获取到的SymKey；否则为
     *     错误对象。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSymKey(callback: AsyncCallback<SymKey>): void;

    /**
     * 获取该对称密钥生成器随机生成的密钥。使用Promise异步回调。
     *
     * 必须在使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}创建对称密钥生成器后，才能使用本函数。
     *
     * 目前支持使用OpenSSL的RAND_priv_bytes()作为底层能力生成随机密钥。
     *
     * @returns { Promise<SymKey> } Promise对象，返回对称密钥SymKey。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSymKey(): Promise<SymKey>;

    /**
     * 同步获取对称密钥生成器随机生成的密钥。
     *
     * 必须在使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}创建对称密钥生成器后，才能使用本函数。
     *
     * 目前支持使用OpenSSL的RAND_priv_bytes()作为底层能力生成随机密钥。
     *
     * > **说明：**
     * >
     * > 对于HMAC算法的对称密钥，如果已经在创建对称密钥生成器时指定了具体哈希算法（如指定"HMAC|SHA256"），则会随机生成与哈希长度一致的
     * > 二进制密钥数据（如指定"HMAC|SHA256"会随机生成256位的密钥数据）。
     *
     * 如果在创建对称密钥生成器时没有指定具体哈希算法，如仅指定"HMAC"，则不支持随机生成对称密钥数据，可通过
     * [convertKeySync]{@link cryptoFramework.SymKeyGenerator.convertKeySync}方式生成对称密钥数据。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generateSymKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { SymKey } 返回对称密钥SymKey。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateSymKeySync(): SymKey;

    /**
     * 将指定数据转换为对称密钥。使用callback异步回调。
     *
     * 必须在使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}创建对称密钥生成器后，才能使用本函数。
     *
     * > **说明：**
     * >
     * > 对于HMAC算法的对称密钥，如果已经在创建对称密钥生成器时指定了具体哈希算法（如指定"HMAC|SHA256"），则需要传入与哈希长度一致的二进制
     * > 密钥数据（如传入SHA256对应256位的密钥数据）。
     *
     * 如果在创建对称密钥生成器时没有指定具体哈希算法，如仅指定"HMAC"，则支持传入长度在[1,4096]范围内（单位为bytes）的任意二进制密钥数据。
     *
     * @param { DataBlob } key - 指定的对称密钥材料。
     * @param { AsyncCallback<SymKey> } callback - 回调函数。当生成对称密钥成功时，err为undefined，data为获取到的SymKey；否则为
     *     错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    convertKey(key: DataBlob, callback: AsyncCallback<SymKey>): void;

    /**
     * 将指定数据转换为对称密钥。使用Promise异步回调。
     *
     * 在使用本函数前，需先通过[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}创建对称密钥生成器。
     *
     * @param { DataBlob } key - 指定的密钥材料数据。
     * @returns { Promise<SymKey> } Promise对象，返回对称密钥SymKey。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    convertKey(key: DataBlob): Promise<SymKey>;

    /**
     * 将指定数据转换为对称密钥。
     *
     * 必须在使用[createSymKeyGenerator]{@link cryptoFramework.createSymKeyGenerator}创建对称密钥生成器后，才能使用本函数。
     *
     * > **说明：**
     * >
     * > 对于HMAC算法的对称密钥，如果在创建对称密钥生成器时指定了具体哈希算法（如"HMAC|SHA256"），则需要传入与哈希长度一致的二进制密钥数据
     * >（如传入SHA256对应的256位密钥数据）。如果在创建对称密钥生成器时未指定具体哈希算法，如仅指定"HMAC"，则支持传入长度在1到4096字节范围
     * > 内的任意二进制密钥数据。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link convertKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } key - 指定的对称密钥材料。
     * @returns { SymKey } 对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    convertKeySync(key: DataBlob): SymKey;

    /**
     * 对称密钥生成器指定的算法名称。
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
   * 通过指定算法名称的字符串，获取相应的非对称密钥生成器实例。
   *
   * 支持的规格详见
   * [非对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)。
   *
   * @param { string } algName - 非对称密钥生成支持的算法名。详见
   *     [非对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)
   *     一节中的“字符串参数”。
   * @returns { AsyKeyGenerator } 返回非对称密钥生成器。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createAsyKeyGenerator(algName: string): AsyKeyGenerator;

  /**
   * 通过指定算法名称获取相应的对称密钥生成器实例。
   *
   * 支持的规格详见
   * [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)。
   *
   * @param { string } algName - 待生成对称密钥生成器的算法名称。<br>具体取值详见
   *     [对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-sym-key-generation-conversion-spec.md)
   *     一节中的“字符串参数”。
   * @returns { SymKeyGenerator } 返回对称密钥生成器的对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.SymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createSymKeyGenerator(algName: string): SymKeyGenerator;

  /**
   * 消息认证码参数，计算HMAC或CMAC时，需要构建子类对象并作为输入参数。
   *
   * > **说明：**
   * >
   * > algName是必选参数，表示消息认证码算法。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface MacSpec {
    /**
     * 消息认证码算法名。
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
   * 消息认证码参数[MacSpec]{@link cryptoFramework.MacSpec}的子类，作为HMAC计算的输入。
   *
   * > **说明：**
   * >
   * > mdName是必选参数，表示HMAC摘要算法。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface HmacSpec extends MacSpec {
    /**
     * 摘要算法名。
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
   * 消息认证码参数[MacSpec]{@link cryptoFramework.MacSpec}的子类，作为CMAC计算的输入。
   *
   * > **说明：**
   * >
   * > cipherName是必选参数，表示CMAC使用的对称密码算法。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface CmacSpec extends MacSpec {
    /**
     * CMAC使用的对称密码算法名。
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
   * Mac类，调用Mac方法进行消息认证码（Message Authentication Code）计算。调用前，需要通过
   * [createMac]{@link cryptoFramework.createMac(algName: string)}构造Mac实例。
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
     * 使用对称密钥初始化Mac计算。使用callback异步回调。init、update、doFinal为三段式接口，需要成组使用。其中init和doFinal必选，
     * update可选。
     *
     * @param { SymKey } key - 对称密钥。
     * @param { AsyncCallback<void> } callback - 回调函数。当HMAC初始化成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(key: SymKey, callback: AsyncCallback<void>): void;

    /**
     * 使用对称密钥初始化Mac计算。使用Promise异步回调。init、update、doFinal为三段式接口，需要成组使用。其中init和doFinal必选，
     * update可选。
     *
     * @param { SymKey } key - 对称密钥。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(key: SymKey): Promise<void>;

    /**
     * 使用对称密钥初始化Mac计算，通过同步方式获取结果。initSync、updateSync、doFinalSync为三段式接口，需要成组使用。其中initSync和
     * doFinalSync必选，updateSync可选。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link init}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { SymKey } key - 对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(key: SymKey): void;

    /**
     * 传入消息进行Mac更新消息认证码状态。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > HMAC算法多次调用update更新的代码示例详见[消息认证码计算](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#分段hmac)。
     *
     * @param { DataBlob } input - 传入的消息。
     * @param { AsyncCallback<void> } callback - 回调函数。当HMAC更新成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(input: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * 传入消息进行Mac更新消息认证码状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > HMAC算法多次调用update更新的代码示例详见[消息认证码计算](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#分段hmac)。
     *
     * @param { DataBlob } input - 传入的消息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(input: DataBlob): Promise<void>;

    /**
     * 传入消息进行Mac更新消息认证码状态，通过同步方式获取结果。
     *
     * > **说明：**
     * >
     * > HMAC算法多次调用updateSync更新的代码示例详见
     * > [消息认证码计算](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#分段hmac)。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } input - 传入的消息。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(input: DataBlob): void;

    /**
     * 完成MAC计算并获取MAC计算结果。使用callback异步回调。
     *
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当MAC计算成功时，err为undefined，data为获取到的Mac计算结果；否则为
     *     错误对象。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    doFinal(callback: AsyncCallback<DataBlob>): void;

    /**
     * 完成MAC计算并获取MAC计算结果。使用Promise异步回调。
     *
     * @returns { Promise<DataBlob> } Promise对象，返回MAC计算结果。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    doFinal(): Promise<DataBlob>;

    /**
     * 通过同步方式完成MAC计算并获取MAC计算结果。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link doFinal}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { DataBlob } 返回MAC计算结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Mac
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doFinalSync(): DataBlob;

    /**
     * 获取Mac消息认证码的长度（字节数）。
     *
     * @returns { int } 返回Mac计算结果的字节长度。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMacLength(): int;

    /**
     * 代表指定的摘要算法名。
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
   * 生成Mac实例，用于消息认证码的计算与操作。
   *
   * 支持的规格详见[HMAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。
   *
   * @param { string } algName - 指定摘要算法，支持算法请参考
   *     [HMAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。
   * @returns { Mac } 返回由输入算法指定生成的[Mac]{@link cryptoFramework.Mac}对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Mac [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createMac(algName: string): Mac;

  /**
   * 生成Mac实例，用于进行消息认证码的计算与操作。
   *
   * 支持的规格详见[MAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。
   *
   * @param { MacSpec } macSpec - 根据消息认证码的不同算法，指定入参参数，支持算法请参考
   *     [MAC消息认证码算法规格](docroot://security/CryptoArchitectureKit/crypto-compute-mac-overview.md)。
   * @returns { Mac } 返回由指定入参参数生成的[Mac]{@link cryptoFramework.Mac}对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
   * @throws { BusinessError } 17630001 - 密码操作错误。
   * @syscap SystemCapability.Security.CryptoFramework.Mac
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function createMac(macSpec: MacSpec): Mac;
  /**
   * Md类，调用Md方法进行消息摘要（Message Digest）计算。调用前，需要通过[createMd]{@link cryptoFramework.createMd}构造Md实例。
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
     * 传入消息进行Md更新摘要状态。使用callback异步回调。update和digest为两段式接口，需要成组使用。其中digest必选，update可选。
     *
     * > **说明：**
     * >
     * > Md算法多次调用update更新的代码示例详见开发指导
     * > [分段摘要算法](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#分段摘要算法)。
     *
     * @param { DataBlob } input - 传入的消息。
     * @param { AsyncCallback<void> } callback - 回调函数。当摘要更新成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 传入消息进行Md更新摘要状态。使用Promise异步回调。update和digest为两段式接口，需要成组使用。其中digest必选，update可选。
     *
     * > **说明：**
     * >
     * > Md算法多次调用update更新的代码示例详见开发指导
     * > [分段摘要算法](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#分段摘要算法)。
     *
     * @param { DataBlob } input - 传入的消息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 传入消息进行Md更新摘要状态，通过同步方式更新。updateSync和digestSync为两段式接口，需要成组使用。其中digestSync必选，
     * updateSync可选。
     *
     * > **说明：**
     * >
     * > Md算法多次调用updateSync更新的代码示例详见开发指导
     * > [分段摘要算法](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#分段摘要算法)。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } input - 传入的消息。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(input: DataBlob): void;

    /**
     * 返回Md的计算结果。使用callback异步回调。
     *
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当摘要计算成功时，err为undefined，data为获取到的摘要结果；否则为
     *     错误对象。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 生成消息摘要。使用Promise异步回调。
     *
     * @returns { Promise<DataBlob> } Promise对象，返回摘要计算结果。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 生成消息摘要，通过同步方式返回摘要计算结果。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link digest}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { DataBlob } 生成的消息摘要。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.MessageDigest
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    digestSync(): DataBlob;

    /**
     * 获取消息摘要的字节长度，单位为字节。
     *
     * @returns { int } 消息摘要长度。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
     * 代表指定的摘要算法名。
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
   * 生成Md实例，用于进行消息摘要的计算与操作。
   *
   * 支持的规格详见
   * [MD消息摘要算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#支持的算法与规格)。
   *
   * @param { string } algName - 指定摘要算法，支持算法请参考
   *     [MD消息摘要算法规格](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest-overview.md#支持的算法与规格)。
   * @returns { Md } 返回由输入算法指定生成的[Md]{@link cryptoFramework.Md}对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 17620001 - 内存操作失败。
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
   * 表示加解密参数的枚举。这些参数支持通过[setCipherSpec]{@link cryptoFramework.Cipher.setCipherSpec}接口设置，通过
   * [getCipherSpec]{@link cryptoFramework.Cipher.getCipherSpec}接口获取。
   *
   * 当前只支持RSA算法和SM2算法，从API version 11开始，增加对SM2_MD_NAME_STR参数的支持，详细规格请参考
   * [加解密规格](docroot://security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md)。
   *
   * API version 10-11 系统能力为 SystemCapability.Security.CryptoFramework；从 API version 12 开始为
   * SystemCapability.Security.CryptoFramework.Cipher
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
     * 表示RSA算法中，使用PKCS1_OAEP模式时，消息摘要功能的算法名。
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
     * 表示RSA算法中，使用PKCS1_OAEP模式时，掩码生成算法（目前仅支持MGF1）。
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
     * 表示RSA算法中，使用PKCS1_OAEP模式时，MGF1掩码生成功能的消息摘要算法。
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
     * 表示RSA算法中，使用PKCS1_OAEP模式时，pSource的字节流。
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
     * 表示SM2算法中，使用的摘要算法名。
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
   * 表示签名验签参数的枚举。这些参数支持通过
   * [setSignSpec]{@link cryptoFramework.Sign.setSignSpec(itemType: SignSpecItem, itemValue: int)}、
   * [setVerifySpec]{@link cryptoFramework.Verify.setVerifySpec(itemType: SignSpecItem, itemValue: int)}接口设置，通过
   * [getSignSpec]{@link cryptoFramework.Sign.getSignSpec}、[getVerifySpec]{@link cryptoFramework.Verify.getVerifySpec}接口
   * 获取。
   *
   * 当前只支持RSA算法和SM2算法，从API version 11开始，增加对SM2_USER_ID_UINT8ARR参数的支持，详细规格请参考
   * [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。
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
     * 表示RSA算法中，使用PSS模式时，消息摘要功能的算法名。
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
     * 表示RSA算法中，使用PSS模式时，掩码生成算法（目前仅支持MGF1）。
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
     * 表示RSA算法中，使用PSS模式时，MGF1掩码生成功能的消息摘要算法。
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
     * 表示RSA算法中，使用PSS模式时，盐值的长度，长度以字节为单位。
     *
     * 根据 FIPS 186-4 标准，sLen 应大于等于 0 且小于等于哈希长度。
     *
     * 默认值：
     * 对于签名操作，自动计算最大盐值长度。
     * 对于验证操作，自动计算盐值长度。
     *
     * 特殊值：
     * 对于签名操作，您也可以将值设置为 -1，以使用摘要长度作为盐值长度；或设置为 -2 或 -3，以自动计算最大盐值长度。推荐使用 -1。
     * 对于验证操作，您也可以将值设置为 -1，以使用摘要长度作为盐值长度；设置为 -2，以自动计算盐值长度；或设置为 -3，以使用最大盐值长度。
     * 推荐使用 -2。
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
     * 表示RSA算法中，使用PSS模式时，用于编码操作的整数。
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
     * 表示SM2算法中，用户身份标识字段。
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
     * 指示ML-DSA签名和验证过程中是否使用确定性签名。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_DETERMINISTIC_BOOL = 106,

    /**
     * 指示ML-DSA签名和验证过程中的mu参数值。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_MU_BOOL = 107,

    /**
     * 指示ML-DSA签名和验证过程中的上下文数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_CONTEXT_UINT8ARR = 108
  }

  /**
   * 提供加解密的算法操作功能，按序调用本类中的
   * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}、
   * [update()]{@link cryptoFramework.Cipher.update(data: DataBlob, callback: AsyncCallback<DataBlob>)}、
   * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}方法，
   * 可以实现对称加密/对称解密/非对称加密/非对称解密。
   *
   * 完整的加解密流程示例可参考[开发指南](docroot://security/CryptoArchitectureKit/crypto-encryption-decryption-overview.md)。
   *
   * 一次完整的加/解密流程在对称加密和非对称加密中略有不同：
   *
   * - 对称加解密：init为必选，update为可选（且允许多次update加/解密大数据），doFinal为必选；doFinal结束后可以重新init开始新一轮加/解密
   * 流程。
   * - RSA、SM2非对称加解密：init为必选，不支持update操作，doFinal为必选（允许连续多次doFinal加/解密大数据）；RSA不支持重复init，切换
   * 加解密模式或填充方式时，需要重新创建Cipher对象。
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
     * 使用给定的加密模式、密钥和参数初始化加密操作。
     *
     * init、update和doFinal必须配合使用，其中init和doFinal是必选的，update是可选的。
     *
     * @param { CryptoMode } opMode - 要执行的操作（加密或解密）
     * @param { Key } key - 用于加密或解密的密钥
     * @param { ParamsSpec } params - IV等算法参数
     * @param { AsyncCallback<void> } callback - 回调函数。当加解密初始化成功时，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 无效的opMode值；
     *     <br>2. 无效的iv长度；
     *     <br>3. 无效的密钥长度。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec, callback: AsyncCallback<void>): void;

    /**
     * 初始化加解密的[cipher]{@link cryptoFramework.Cipher}对象，使用callback异步回调获取结果。
     *
     * init、update、doFinal为三段式接口，需要成组使用。其中init和doFinal必选，update可选。
     *
     * 必须在使用[createCipher]{@link cryptoFramework.createCipher}创建[Cipher]{@link cryptoFramework.Cipher}
     * 实例后，才能使用本函数。
     *
     * @param { CryptoMode } opMode - 加密或者解密模式。
     * @param { Key } key - 指定加密或解密的密钥。
     * @param { ParamsSpec | null } params - 指定加密或解密的参数，对于ECB等没有参数的算法模式，请传入null。API 10之前只支持
     *     ParamsSpec， API 10之后增加支持null。
     * @param { AsyncCallback<void> } callback - 回调函数。当加解密初始化成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 无效的opMode值；
     *     <br>2. 无效的iv长度；
     *     <br>3. 无效的密钥长度。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec | null, callback: AsyncCallback<void>): void;

    /**
     * 使用给定的加密模式、密钥和参数初始化加密操作。使用Promise异步回调。
     *
     * init、update和doFinal必须配合使用，其中init和doFinal是必选的，update是可选的。
     *
     * @param { CryptoMode } opMode - 要执行的操作（加密或解密）
     * @param { Key } key - 用于加密或解密的密钥
     * @param { ParamsSpec } params - IV等算法参数
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 无效的opMode值；
     *     <br>2. 无效的iv长度；
     *     <br>3. 无效的密钥长度。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec): Promise<void>;

    /**
     * 初始化加解密的cipher对象。使用Promise异步回调。
     *
     * init、update、doFinal为三段式接口，需要成组使用。其中init和doFinal必选，update可选。
     *
     * 必须在使用[createCipher]{@link cryptoFramework.createCipher}创建[Cipher]{@link cryptoFramework.Cipher}
     * 实例后，才能使用本函数。
     *
     * @param { CryptoMode } opMode - 加密或者解密模式。
     * @param { Key } key - 指定加密或解密的密钥。
     * @param { ParamsSpec | null } params - 指定加密或解密的参数，对于ECB等没有参数的算法模式，请传入null。API 10之前仅支持
     *     ParamsSpec，从API 10开始增加对null的支持。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 无效的opMode值；
     *     <br>2. 无效的iv长度；
     *     <br>3. 无效的密钥长度。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    init(opMode: CryptoMode, key: Key, params: ParamsSpec | null): Promise<void>;

    /**
     * 初始化加解密的[cipher]{@link cryptoFramework.Cipher}对象，此API以同步方式返回结果。
     *
     * initSync、updateSync、doFinalSync为三段式接口，需要成组使用。其中initSync和doFinalSync必选，updateSync可选。
     *
     * 必须在使用[createCipher]{@link cryptoFramework.createCipher}创建[Cipher]{@link cryptoFramework.Cipher}
     * 实例后，才能使用本函数。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link init}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { CryptoMode } opMode - 加密或者解密模式。
     * @param { Key } key - 指定加密或解密的密钥。
     * @param { ParamsSpec | null } params - 指定加密或解密的参数，对于ECB等没有参数的算法模式，请传入null。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 无效的opMode值；
     *     <br>2. 无效的iv长度；
     *     <br>3. 无效的密钥长度。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(opMode: CryptoMode, key: Key, params: ParamsSpec | null): void;

    /**
     * 更新要分段加密或解密的数据。使用Callback异步回调。
     *
     * 必须在对[Cipher]{@link cryptoFramework.Cipher}实例使用
     * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}初始化后，才能
     * 使用本函数。
     *
     * > **说明：**
     * >
     * > 1.在进行对称加解密操作时，如果开发者对各分组模式不够熟悉，建议每次调用**update**和**doFinal**后，都判断结果是否为null。如果结果
     * > 不为null，则取出其中的数据进行拼接，以形成完整的密文或明文。这是因为选择的分组模式等各项规格可能会影响**update**和**doFinal**的
     * > 结果。
     * > 例如，对于ECB和CBC模式，不论**update**传入的数据是否为分组长度的整数倍，都会以分组作为基本单位进行加密或解密，并输出本次
     * > **update**新产生的加密或解密分组结果。
     * > 可以理解为，**update**只要凑满一个新的分组就会有输出，如果没有凑满则此次**update**输出为null，把当前还没被加密或解密的数据留着，
     * > 等下一次**update**或**doFinal**传入数据的时候，拼接起来继续凑分组。
     * > 最后**doFinal**的时候，会把剩下的还没加/解密的数据，根据[createCipher]{@link cryptoFramework.createCipher}时设置的
     * > padding模式进行填充，补齐到分组的整数倍长度，再输出剩余加解密结果。
     * > 而对于可以将分组密码转化为流模式实现的模式，还可能出现密文长度和明文长度相同的情况等。
     * > 2.根据数据量，可以不调用**update**（即**init**完成后直接调用**doFinal**）或多次调用**update**。
     * > 算法库目前没有对**update**（单次或累计）的数据量设置大小限制，建议对于大数据量的对称加解密，可以采用多次**update**的方式传入数据。
     * > 有关在多次**update()**调用中传递数据的示例代码的详细信息，请参见
     * > [使用AES对称密钥分段加密和解密（GCM模式）](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md)。
     * > 3. RSA或SM2非对称加解密不支持**update()**。
     * > 4. 对于CCM模式的对称加解密算法，加密时只能调用1次**update**接口加密数据并调用**doFinal**接口获取tag，或直接调用**doFinal**
     * > 接口加密数据并获取tag，解密时只能调用1次**update**接口或调用1次**doFinal**接口解密数据并验证tag。
     *
     * @param { DataBlob } data - 需要进行加密或解密的数据。data不能为null。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当更新加/解密数据成功时，err为undefined，data为加密或解密结果
     *     DataBlob；否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    update(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * 使用输入数据更新加密操作，并反馈此次加密或解密的数据。此API使用异步回调来返回结果。
     *
     * > **说明：**
     * >
     * > 1.在进行对称加解密操作时，如果开发者对各分组模式不够熟悉，建议每次调用**update**和**doFinal**后，都判断结果是否为null。如果结果
     * > 不为null，则取出其中的数据进行拼接，以形成完整的密文或明文。这是因为选择的分组模式等各项规格可能会影响**update**和**doFinal**的
     * > 结果。
     * > 例如，对于ECB和CBC模式，不论**update**传入的数据是否为分组长度的整数倍，都会以分组作为基本单位进行加密或解密，并输出本次
     * > **update**新产生的加密或解密分组结果。
     * > 可以理解为，**update**只要凑满一个新的分组就会有输出，如果没有凑满则此次**update**输出为null，把当前还没被加密或解密的数据留着，
     * > 等下一次**update**或**doFinal**传入数据的时候，拼接起来继续凑分组。
     * > 最后**doFinal**的时候，会把剩下的还没加/解密的数据，根据[createCipher]{@link cryptoFramework.createCipher}时设置的
     * > padding模式进行填充，补齐到分组的整数倍长度，再输出剩余加解密结果。
     * > 而对于可以将分组密码转化为流模式实现的模式，还可能出现密文长度和明文长度相同的情况等。
     * > 2.根据数据量，可以不调用**update**（即**init**完成后直接调用**doFinal**）或多次调用**update**。
     * > 算法库目前没有对**update**（单次或累计）的数据量设置大小限制，建议对于大数据量的对称加解密，可以采用多次**update**的方式传入数据。
     * > 有关在多次**update()**调用中传递数据的示例代码的详细信息，请参见
     * > [使用AES对称密钥分段加密和解密（GCM模式）](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md)。
     * > 3. RSA或SM2非对称加解密不支持**update()**。
     * > 4. 对于CCM模式的对称加解密算法，加密时只能调用1次**update**接口加密数据并调用**doFinal**接口获取tag，或直接调用**doFinal**
     * > 接口加密数据并获取tag，解密时只能调用1次**update**接口或调用1次**doFinal**接口解密数据并验证tag。
     *
     * @param { DataBlob } data - 表示要加密或解密的数据。
     * @param { AsyncCallback<DataBlob | null> } callback - 回调函数。当更新加/解密数据成功时，err为undefined，data为加密或解密
     *     后的数据；否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    update(data: DataBlob, callback: AsyncCallback<DataBlob | null>): void;

    /**
     * 分段更新加密或者解密数据操作。使用Promise异步回调。
     *
     * 必须在对[Cipher]{@link cryptoFramework.Cipher}实例使用
     * [init()]{@link cryptoFramework.Cipher.init(opMode: CryptoMode, key: Key, params: ParamsSpec | null)}初始化后，才能
     * 使用本函数。
     *
     * > **说明：**
     * >
     * > 1.在进行对称加解密操作时，如果开发者对各分组模式不够熟悉，建议每次调用**update**和**doFinal**后，都判断结果是否为null。如果结果
     * > 不为null，则取出其中的数据进行拼接，以形成完整的密文或明文。这是因为选择的分组模式等各项规格可能会影响**update**和**doFinal**的
     * > 结果。
     * > 例如，对于ECB和CBC模式，不论**update**传入的数据是否为分组长度的整数倍，都会以分组作为基本单位进行加密或解密，并输出本次
     * > **update**新产生的加密或解密分组结果。
     * > 可以理解为，**update**只要凑满一个新的分组就会有输出，如果没有凑满则此次**update**输出为null，把当前还没被加密或解密的数据留着，
     * > 等下一次**update**或**doFinal**传入数据的时候，拼接起来继续凑分组。
     * > 最后**doFinal**的时候，会把剩下的还没加/解密的数据，根据[createCipher]{@link cryptoFramework.createCipher}时设置的
     * > padding模式进行填充，补齐到分组的整数倍长度，再输出剩余加解密结果。
     * > 而对于可以将分组密码转化为流模式实现的模式，还可能出现密文长度和明文长度相同的情况等。
     * > 2.根据数据量，可以不调用**update**（即**init**完成后直接调用**doFinal**）或多次调用**update**。
     * > 算法库目前没有对**update**（单次或累计）的数据量设置大小限制，建议对于大数据量的对称加解密，可以采用多次**update**的方式传入数据。
     * > 有关在多次**update()**调用中传递数据的示例代码的详细信息，请参见
     * > [使用AES对称密钥分段加密和解密（GCM模式）](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md)。
     * > 3. RSA或SM2非对称加解密不支持**update()**。
     * > 4. 对于CCM模式的对称加解密算法，加密时只能调用1次**update**接口加密数据并调用**doFinal**接口获取tag，或直接调用**doFinal**
     * > 接口加密数据并获取tag，解密时只能调用1次**update**接口或调用1次**doFinal**接口解密数据并验证tag。
     *
     * @param { DataBlob } data - 加密或者解密的数据。data不能为null。
     * @returns { Promise<DataBlob> } Promise对象，返回此次更新的加密或解密结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    update(data: DataBlob): Promise<DataBlob>;

    /**
     * 使用输入数据更新加密操作，并反馈此次加密或解密的数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 1.在进行对称加解密操作时，如果开发者对各分组模式不够熟悉，建议每次调用**update**和**doFinal**后，都判断结果是否为null。如果结果
     * > 不为null，则取出其中的数据进行拼接，以形成完整的密文或明文。这是因为选择的分组模式等各项规格可能会影响**update**和**doFinal**的
     * > 结果。
     * > 例如，对于ECB和CBC模式，不论**update**传入的数据是否为分组长度的整数倍，都会以分组作为基本单位进行加密或解密，并输出本次
     * > **update**新产生的加密或解密分组结果。
     * > 可以理解为，**update**只要凑满一个新的分组就会有输出，如果没有凑满则此次**update**输出为null，把当前还没被加密或解密的数据留着，
     * > 等下一次**update**或**doFinal**传入数据的时候，拼接起来继续凑分组。
     * > 最后**doFinal**的时候，会把剩下的还没加/解密的数据，根据[createCipher]{@link cryptoFramework.createCipher}时设置的
     * > padding模式进行填充，补齐到分组的整数倍长度，再输出剩余加解密结果。
     * > 而对于可以将分组密码转化为流模式实现的模式，还可能出现密文长度和明文长度相同的情况等。
     * > 2.根据数据量，可以不调用**update**（即**init**完成后直接调用**doFinal**）或多次调用**update**。
     * > 算法库目前没有对**update**（单次或累计）的数据量设置大小限制，建议对于大数据量的对称加解密，可以采用多次**update**的方式传入数据。
     * > 有关在多次**update()**调用中传递数据的示例代码的详细信息，请参见
     * > [使用AES对称密钥分段加密和解密（GCM模式）](docroot://security/CryptoArchitectureKit/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md)。
     * > 3. RSA或SM2非对称加解密不支持**update()**。
     * > 4. 对于CCM模式的对称加解密算法，加密时只能调用1次**update**接口加密数据并调用**doFinal**接口获取tag，或直接调用**doFinal**
     * > 接口加密数据并获取tag，解密时只能调用1次**update**接口或调用1次**doFinal**接口解密数据并验证tag。
     *
     * @param { DataBlob } data - 表示要加密或解密的数据。
     * @returns { Promise<DataBlob | null> } Promise对象，返回更新的加密或解密结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    update(data: DataBlob): Promise<DataBlob | null>;

    /**
     * 分段更新加密或者解密数据操作。
     *
     * 必须在对[Cipher]{@link cryptoFramework.Cipher}实例使用[initSync()]{@link cryptoFramework.Cipher.initSync}
     * 初始化后，才能使用本函数。
     *
     * 其他注意事项同上异步接口说明。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } data - 加密或者解密的数据。data不能为null。
     * @returns { DataBlob } 返回此次更新的加/解密结果DataBlob。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    updateSync(data: DataBlob): DataBlob;

    /**
     * 分段更新加密或者解密数据操作。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } data - 表示要加密或解密的数据。
     * @returns { DataBlob | null } 加密时返回密文，解密时返回明文。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    updateSync(data: DataBlob): DataBlob | null;

    /**
     * 完成加密操作，对输入数据进行加密或解密，然后反馈输出数据。加密操作完成后，数据无法更新。使用Callback异步回调。
     *
     * @param { DataBlob } data - 表示最终要加密或解密的数据。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当加/解密成功时，err为undefined，data为加/解密结果DataBlob；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    doFinal(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     *（1）在对称加解密中**doFinal**用于处理剩余数据和本次传入的数据，并最终结束加密或解密操作，使用callback异步回调函数获取加密或解密后的
     * 数据。如果数据量较小，可以在**doFinal**中一次性传入数据，而不使用**update**；如果在本次加解密流程中已经使用**update**传入过数据，
     * 可以在**doFinal**的data参数处传入null。根据对称加解密的模式不同，**doFinal**的输出有以下区别：
     * - 在GCM和CCM模式的对称加密中，一次加密流程中，将每次**update**和**doFinal**的结果拼接起来，会得到“密文 + authTag”。GCM模式下，
     * authTag为末尾的16字节；CCM模式下，authTag为末尾的12字节。其余部分均为密文。如果**doFinal**的data参数传入null，则**doFinal**的
     * 结果就是authTag。解密时，authTag需要填入[GcmParamsSpec]{@link cryptoFramework.GcmParamsSpec}或
     * [CcmParamsSpec]{@link cryptoFramework.CcmParamsSpec}，密文作为解密时的data参数。
     * - 对于其他模式的对称加解密及GCM和CCM模式的加解密：每次加/解密流程中，**update**和**doFinal**的结果拼接起来，得到完整的明文或密文。
     *（2）在RSA、SM2非对称加解密中，**doFinal**加密或解密本次传入的数据，使用callback异步回调函数获取加密或者解密数据。如果数据量较大，
     * 可以多次调用**doFinal**，拼接结果得到完整的明文/密文。
     *
     * > **说明：**
     * >
     * > 1.对称加解密中，调用**doFinal**标志着一次加解密流程已经完成，即[Cipher]{@link cryptoFramework.Cipher}实例的状态被清除，
     * > 因此当后续开启新一轮加解密流程时，需要重新调用**init**并传入完整的参数列表进行初始化。 即使是对同一个Cipher实例，采用同样的对称
     * > 密钥，进行加密然后解密，则解密中调用**init**的时候仍需填写params参数，而不能直接省略为null。
     * > 如果遇到解密失败，需检查加解密数据和**init**时的参数是否匹配，包括GCM模式下加密得到的authTag是否填入解密时的GcmParamsSpec等。
     * > **doFinal**的结果可能为null，因此使用.data字段访问**doFinal**结果的具体数据前，请记得先判断结果是否为null，避免产生异常。
     * > 2.对于加密，CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null。
     * > 3.对于解密，GCM、CCM、CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null；对于解密，其他模式，如果明文是加密块大小的
     * > 整倍数，调用**update**传入所有密文，调用**doFinal**传null，则返回结果为null。
     * > 4.非对称加解密时多次**doFinal**操作的示例代码请参阅
     * > [使用RSA非对称密钥对按段加密和解密](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md)。
     * > SM2和RSA的操作类似。
     *
     * @param { DataBlob | null } data - 要加密或解密的数据。在对称加解密中，这个参数可以是**null**，但是
     *     **{data: Uint8Array()}**不能传入。在API版本10之前，仅支持**DataBlob**。从API版本10开始，还支持**null**。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当加/解密成功时，err为undefined，data为加/解密结果DataBlob；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;

    /**
     * 完成加密操作，对输入数据进行加密或解密，然后反馈输出数据。加密操作完成后，数据无法再更新。使用Callback异步回调。
     *
     * > **说明：**
     * >
     * > 1.对称加解密中，调用**doFinal**标志着一次加解密流程已经完成，即[Cipher]{@link cryptoFramework.Cipher}实例的状态被清除，
     * > 因此当后续开启新一轮加解密流程时，需要重新调用**init**并传入完整的参数列表进行初始化。 即使是对同一个Cipher实例，采用同样的对称
     * > 密钥，进行加密然后解密，则解密中调用**init**的时候仍需填写params参数，而不能直接省略为null。
     * > 如果遇到解密失败，需检查加解密数据和**init**时的参数是否匹配，包括GCM模式下加密得到的authTag是否填入解密时的GcmParamsSpec等。
     * > **doFinal**的结果可能为null，因此使用.data字段访问**doFinal**结果的具体数据前，请记得先判断结果是否为null，避免产生异常。
     * > 2.对于加密，CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null。
     * > 3.对于解密，GCM、CCM、CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null；对于解密，其他模式，如果明文是加密块大小的
     * > 整倍数，调用**update**传入所有密文，调用**doFinal**传null，则返回结果为null。
     * > 4.非对称加解密时多次**doFinal**操作的示例代码请参阅
     * > [使用RSA非对称密钥对按段加密和解密](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md)。
     * > SM2和RSA的操作类似。
     *
     * @param { DataBlob | null } data - 表示最终要加密或解密的数据。
     * @param { AsyncCallback<DataBlob | null> } callback - 回调函数。当加/解密成功时，err为undefined，data为加密或解密后的数据；
     *     否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob | null>): void;

    /**
     * 完成加密操作，对输入数据进行加密或解密，然后反馈输出数据。加密操作完成后，数据无法更新。
     *
     * @param { DataBlob } data - 表示最终要加密或解密的数据。
     * @returns { Promise<DataBlob> } Promise对象，返回加密或解密的数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    doFinal(data: DataBlob): Promise<DataBlob>;

    /**
     * （1）在对称加解密中，**doFinal**加/解密（分组模式产生的）剩余数据和本次传入的数据，最后结束加密或者解密数据操作，使用Promise异步回
     * 调获取加密或者解密数据。
     * 如果数据量较小，可以在**doFinal**中一次性传入数据，而不使用**update**；如果在本次加解密流程中，已经使用**update**传入过数据，
     * 可以在**doFinal**的data参数处传入null。
     * 根据对称加解密的模式不同，**doFinal**的输出有如下区别：
     * - 对于GCM和CCM模式的对称加密：一次加密流程中，如果将每一次**update**和**doFinal**的结果拼接起来，会得到“密文+authTag”，即末尾的
     * 16字节（GCM模式）或12字节（CCM模式）是authTag，而其余部分均为密文。（也就是说，如果**doFinal**的data参数传入null，则
     * **doFinal**的结果就是authTag）
     * authTag需要填入解密时的[GcmParamsSpec]{@link cryptoFramework.GcmParamsSpec}或
     * [CcmParamsSpec]{@link cryptoFramework.CcmParamsSpec}；密文则作为解密时的入参data。
     * - 对于其他模式的对称加解密及GCM和CCM模式的对称解密：一次加解密流程中，每次**update**和**doFinal**的结果拼接起来，得到完整的明文或
     * 密文。
     * （2）在RSA和SM2非对称加解密中，使用**doFinal**方法加解密传入的数据，并使用Promise异步回调获取加密或解密结果。如果数据量较大，可以
     * 多次调用**doFinal**，拼接结果以获得完整的明文或密文。
     *
     * > **说明：**
     * >
     * > 1.对称加解密中，调用**doFinal**标志着一次加解密流程已经完成，即[Cipher]{@link cryptoFramework.Cipher}实例的状态被清除，
     * > 因此当后续开启新一轮加解密流程时，需要重新调用**init**并传入完整的参数列表进行初始化。 即使是对同一个Cipher实例，采用同样的对称
     * > 密钥，进行加密然后解密，则解密中调用**init**的时候仍需填写params参数，而不能直接省略为null。
     * > 如果遇到解密失败，需检查加解密数据和**init**时的参数是否匹配，包括GCM模式下加密得到的authTag是否填入解密时的GcmParamsSpec等。
     * > **doFinal**的结果可能为null，因此使用.data字段访问**doFinal**结果的具体数据前，请记得先判断结果是否为null，避免产生异常。
     * > 2.对于加密，CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null。
     * > 3.对于解密，GCM、CCM、CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null；对于解密，其他模式，如果明文是加密块大小的
     * > 整倍数，调用**update**传入所有密文，调用**doFinal**传null，则返回结果为null。
     * > 4.非对称加解密时多次**doFinal**操作的示例代码请参阅
     * > [使用RSA非对称密钥对按段加密和解密](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md)。
     * > SM2和RSA的操作类似。
     *
     * @param { DataBlob | null } data - 要加密或解密的数据。可以为**null**，但不能为{data:Uint8Array(0)}。在API版本10之前的版本
     *     中，仅支持**DataBlob**。从API版本10开始，也支持**null**。
     * @returns { Promise<DataBlob> } Promise对象，返回剩余数据的加/解密结果DataBlob。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    doFinal(data: DataBlob | null): Promise<DataBlob>;

    /**
     * 完成加密操作，对输入数据进行加密或解密，然后反馈输出数据。加密操作完成后，数据无法更新。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 1.对称加解密中，调用**doFinal**标志着一次加解密流程已经完成，即[Cipher]{@link cryptoFramework.Cipher}实例的状态被清除，
     * > 因此当后续开启新一轮加解密流程时，需要重新调用**init**并传入完整的参数列表进行初始化。 即使是对同一个Cipher实例，采用同样的对称
     * > 密钥，进行加密然后解密，则解密中调用**init**的时候仍需填写params参数，而不能直接省略为null。
     * > 如果遇到解密失败，需检查加解密数据和**init**时的参数是否匹配，包括GCM模式下加密得到的authTag是否填入解密时的GcmParamsSpec等。
     * > **doFinal**的结果可能为null，因此使用.data字段访问**doFinal**结果的具体数据前，请记得先判断结果是否为null，避免产生异常。
     * > 2.对于加密，CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null。
     * > 3.对于解密，GCM、CCM、CFB、OFB和CTR模式，如果**doFinal**传null，则返回结果为null；对于解密，其他模式，如果明文是加密块大小的
     * > 整倍数，调用**update**传入所有密文，调用**doFinal**传null，则返回结果为null。
     * > 4.非对称加解密时多次**doFinal**操作的示例代码请参阅
     * > [使用RSA非对称密钥对按段加密和解密](docroot://security/CryptoArchitectureKit/crypto-rsa-asym-encrypt-decrypt-by-segment.md)。
     * > SM2和RSA的操作类似。
     *
     * @param { DataBlob | null } data - 表示最终要加密或解密的数据。
     * @returns { Promise<DataBlob | null> } Promise对象，返回加密或解密后的数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    doFinal(data: DataBlob | null): Promise<DataBlob | null>;

    /**
     *
     * （1）在对称加解密中，**doFinal**加/解密（分组模式产生的）剩余数据和本次传入的数据，最后结束加密或者解密数据操作，使用Promise异步
     * 回调获取加密或者解密数据。
     * 如果数据量较小，可以在**doFinal**中一次性传入数据，而不使用**update**；如果在本次加解密流程中，已经使用**update**传入过数据，可以
     * 在**doFinal**的data参数处传入null。
     * 根据对称加解密的模式不同，**doFinal**的输出有如下区别：
     * - 对于GCM和CCM模式的对称加密：一次加密流程中，如果将每一次**update**和**doFinal**的结果拼接起来，会得到“密文+authTag”，即末尾的
     * 16字节（GCM模式）或12字节（CCM模式）是authTag，而其余部分均为密文。（也就是说，如果**doFinal**的data参数传入null，则
     * **doFinal**的结果就是authTag）
     * authTag需要填入解密时的[GcmParamsSpec]{@link cryptoFramework.GcmParamsSpec}或
     * [CcmParamsSpec]{@link cryptoFramework.CcmParamsSpec}；密文则作为解密时的入参data。
     * - 对于其他模式的对称加解密及GCM和CCM模式的对称解密：一次加解密流程中，每次**update**和**doFinal**的结果拼接起来，得到完整的明文或
     * 密文。
     * （2）在RSA和SM2非对称加解密中，使用**doFinal**方法加解密传入的数据，并使用Promise异步回调获取加密或解密结果。如果数据量较大，可以
     * 多次调用**doFinal**，拼接结果以获得完整的明文或密文。
     *
     * 关于其他注意事项，请参见
     * [doFinal()]{@link cryptoFramework.Cipher.doFinal(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}中的
     * **说明：**。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link doFinal}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob | null } data - 待加密或解密的数据。在对称加解密中可以为**null**， 但不能传入{data: Uint8Array(0)}。
     * @returns { DataBlob } 加密或解密后的数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    doFinalSync(data: DataBlob | null): DataBlob;

    /**
     * 完成加密操作，对输入数据进行加密或解密，然后反馈输出数据。
     * 加密操作完成后，数据无法更新。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link doFinal}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob | null } data - 表示最终要加密或解密的数据。
     * @returns { DataBlob | null } 加密时返回密文，解密时返回明文。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 数据过长。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    doFinalSync(data: DataBlob | null): DataBlob | null;

    /**
     * 设置加解密参数。常用的加解密参数直接通过[createCipher]{@link cryptoFramework.createCipher} 来指定，剩余参数通过本接口指定。
     * 当前只支持RSA算法。
     *
     * @param { CipherSpecItem } itemType - 用于指定需要设置的加解密参数。
     * @param { Uint8Array } itemValue - 用于指定加解密参数的具体值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 不支持的itemType。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setCipherSpec(itemType: CipherSpecItem, itemValue: Uint8Array): void;

    /**
     * 获取加解密参数。当前只支持RSA算法和SM2算法，从API version 11开始，支持SM2算法获取加解密参数。
     *
     * @param { CipherSpecItem } itemType - 用于指定需要获取的加解密参数。
     * @returns { string | Uint8Array } 返回获取的加解密参数值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 不支持的itemType。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCipherSpec(itemType: CipherSpecItem): string | Uint8Array;

    /**
     * 加解密生成器指定的算法名称。
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
   * 通过指定算法名称，获取相应的[Cipher]{@link cryptoFramework.Cipher}实例。
   *
   * > **说明：**
   * >
   * > 1. 在对称加解密中，PKCS #5和PKCS #7的实现方式相同，即补位长度和块大小保持一致。3DES补位为8字节，AES补位为16字节。**NoPadding**
   * > 表示不进行补位。
   * > 需要了解不同分组模式的区别，使用正确的参数规格。例如，ECB和CBC模式需要补位，否则需保证明文长度为块大小的整数倍。其他模式建议不补位，
   * > 此时密文长度和明文长度一致。
   * > 2. 使用RSA或SM2进行非对称加解密时，需要创建两个**Cipher**对象分别进行加密和解密。对称加解密不需要如此，算法规格相同时，可以使用同
   * > 一个**Cipher**对象进行加解密。
   *
   * @param { string } transformation - 待生成Cipher的算法名称（含密钥长度）、加密模式以及填充方法的组合。<br>支持的规格详见
   *     [对称密钥加解密算法规格](docroot://security/CryptoArchitectureKit/crypto-sym-encrypt-decrypt-spec.md)和
   *     [非对称密钥加解密算法规格](docroot://security/CryptoArchitectureKit/crypto-asym-encrypt-decrypt-spec.md)。
   * @returns { Cipher } 返回加解密生成器的对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Cipher [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createCipher(transformation: string): Cipher;

  /**
   * Sign类，使用Sign方法之前需要创建该类的实例进行操作，通过
   * [createSign(algName: string): Sign]{@link cryptoFramework.createSign}方法构造此实例。按序调用本类中的init、update、sign
   * 方法完成签名操作。签名操作的示例代码详见
   * [签名验签开发指导](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md)。
   *
   * Sign类不支持重复初始化，当业务方需要使用新密钥签名时，需要重新创建新Sign对象并调用init初始化。
   *
   * 业务方使用时，调用createSign接口确定签名的模式，调用init接口设置密钥。
   *
   * 当待签名数据长度较短时，可在初始化后直接调用sign接口传入数据进行签名，无需调用update。
   *
   * 当待签名数据较长时，可通过update接口分段传入切分后的原文数据，最后调用sign接口对整体原文数据进行签名。
   *
   * 当使用update分段传入原文时，sign接口API 10之前只支持传入DataBlob， API 10之后增加支持null。业务方可在循环中调用update接口，循环
   * 结束后调用sign进行签名。
   *
   * 使用DSA算法签名时，如果摘要算法设置为NoHash，则不支持update操作，调用update接口将返回错误码ERR_CRYPTO_OPERATION。
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
     * 使用私钥初始化Sign对象。使用callback异步回调。init、update、sign为三段式接口，需要成组使用。其中init和sign必选，update可选。
     *
     * Sign类不支持重复初始化。
     *
     * @param { PriKey } priKey - 用于Sign的初始化。
     * @param { AsyncCallback<void> } callback - 回调函数。当签名初始化成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 密钥类型不正确。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(priKey: PriKey, callback: AsyncCallback<void>): void;

    /**
     * 使用私钥初始化Sign对象。使用Promise异步回调。init、update、sign为三段式接口，需要成组使用。其中init和sign必选，update可选。
     *
     * Sign类不支持重复初始化。
     *
     * @param { PriKey } priKey - 用于Sign的初始化。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 密钥类型不正确。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(priKey: PriKey): Promise<void>;

    /**
     * 使用私钥初始化Sign对象，通过同步方式获取结果。initSync、updateSync、signSync为三段式接口，需要成组使用。其中initSync和signSync
     * 必选，updateSync可选。
     *
     * Sign类不支持重复调用initSync。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link init}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { PriKey } priKey - 用于Sign的初始化。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 密钥类型不正确。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(priKey: PriKey): void;

    /**
     * 追加待签名数据，使用callback异步回调完成更新。
     *
     * 必须在对[Sign]{@link cryptoFramework.Sign}实例使用[init]{@link cryptoFramework.Sign.init}或
     * [initSync]{@link cryptoFramework.Sign.initSync}初始化后，才能使用本函数。
     *
     * > **说明：**
     * >
     * > 根据数据量，可以不调用update（即[init]{@link cryptoFramework.Sign.init}完成后直接调用
     * > [sign]{@link cryptoFramework.Sign}）或多次调用update。
     * >
     * > 算法库目前没有对update（单次或累计）的数据量设置大小限制，建议对于大数据量的签名操作，采用多次update的方式传入数据，避免一次性申请
     * > 过大内存。
     * >
     * > 签名使用多次update操作的示例代码详见
     * > [使用RSA密钥对分段签名验签](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)，
     * > 其余算法操作类似。
     *
     * > OnlySign模式下，不支持update操作，需要直接使用sign传入数据。
     *
     * > 当使用DSA算法进行签名，并设置了摘要算法为NoHash时，则不支持update操作，update接口会返回错误码ERR_CRYPTO_OPERATION。
     *
     * @param { DataBlob } data - 传入的消息。
     * @param { AsyncCallback<void> } callback - 回调函数。当签名更新成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * 追加待签名数据，使用Promise异步回调方式完成更新。
     *
     * 在使用本函数前，必须先使用[init]{@link cryptoFramework.Sign.init}对
     * [Sign]{@link cryptoFramework.Sign}实例进行初始化。
     *
     * > **说明：**
     * >
     * > 根据数据量，可以不调用update（即[init]{@link cryptoFramework.Sign.init}
     * > 完成后直接调用[sign]{@link cryptoFramework.Sign.sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>)}）
     * > 或多次调用update。
     * >
     * > 算法库不对单次或累计的update数据量设置大小限制。建议在处理大数据量的签名操作时，采用多次update方式传入数据，以避免一次性申请过大内
     * > 存。
     * > 签名使用多次update操作的示例代码详见
     * > [使用RSA密钥对分段签名验签](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)，
     * > 其余算法操作类似。
     * >
     * > OnlySign模式下，不支持update操作，需要直接使用sign传入数据。
     * >
     * > 当使用DSA算法进行签名，并设置了摘要算法为NoHash时，则不支持update操作，update接口会返回错误码ERR_CRYPTO_OPERATION。
     *
     * @param { DataBlob } data - 传入的消息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob): Promise<void>;

    /**
     * 追加待签名数据，通过同步方式完成更新。
     *
     * 必须在对[Sign]{@link cryptoFramework.Sign}实例使用[initSync()]{@link cryptoFramework.Sign.initSync}初始化
     * 后，才能使用本函数。
     *
     * > **说明：**
     * >
     * > 根据数据量，可以不调用updateSync（即[initSync]{@link cryptoFramework.Sign.initSync}完成后直接调用
     * > [signSync]{@link cryptoFramework.Sign.signSync}）或多次调用updateSync。
     * >
     * > 算法库目前没有对updateSync（单次或累计）的数据量设置大小限制，建议对于大数据量的签名操作，采用多次updateSync的方式传入数据，避免
     * > 一次性申请过大内存。
     * >
     * > 签名使用多次updateSync操作的示例代码详见
     * > [使用RSA密钥对分段签名验签](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)，
     * > 其余算法操作类似。
     * >
     * > OnlySign模式下，不支持updateSync操作，需要直接使用signSync传入数据。
     * >
     * > 当使用DSA算法进行签名，并设置了摘要算法为NoHash时，则不支持updateSync操作，updateSync接口会返回错误码ERR_CRYPTO_OPERATION。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } data - 传入的消息。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(data: DataBlob): void;

    /**
     * 对数据进行签名，包括更新的数据。使用callback异步回调。
     *
     * @param { DataBlob } data - 待签名的数据。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当签名成功时，err为undefined，data为获取到的签名结果DataBlob；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    sign(data: DataBlob, callback: AsyncCallback<DataBlob>): void;

    /**
     * 对数据进行签名。使用callback异步回调。
     *
     * @param { DataBlob | null } data - 传入的消息。API 10之前只支持DataBlob， API 10之后增加支持null。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当签名成功时，err为undefined，data为获取到的签名结果DataBlob；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void;

    /**
     * 对数据进行签名，包括更新的数据。使用Promise异步回调。
     *
     * @param { DataBlob } data - 待签名的数据。
     * @returns { Promise<DataBlob> } Promise对象，返回签名结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    sign(data: DataBlob): Promise<DataBlob>;

    /**
     * 对数据进行签名。使用Promise异步回调。
     *
     * @param { DataBlob | null } data - 传入的消息。
     * @returns { Promise<DataBlob> } Promise对象，返回签名结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sign(data: DataBlob | null): Promise<DataBlob>;

    /**
     * 对数据进行签名，通过同步方式返回签名结果。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link sign}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob | null } data - 传入的消息。
     * @returns { DataBlob } 返回签名结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    signSync(data: DataBlob | null): DataBlob;

    /**
     * 设置签名参数。常用签名参数可通过 [createSign]{@link cryptoFramework.createSign} 指定，其他参数则通过本接口设置。
     *
     * 当前仅支持RSA算法、SM2算法，从API version11开始，支持SM2算法设置签名参数。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的签名参数。
     * @param { int } itemValue - 用于指定签名参数的具体值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int): void;

    /**
     * 为Sign对象设置指定参数。当前仅支持RSA算法中的PSS_SALT_LEN参数和SM2算法中的USER_ID参数。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的签名参数类型。
     * @param { int | Uint8Array } itemValue - 指定签名参数的具体值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。 [since 26.0.0]
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array): void;

    /**
     * 为Sign对象设置指定参数。当前仅支持RSA算法中的PSS_SALT_LEN参数、SM2算法中的USER_ID参数以及ML-DSA算法中的
     * ML_DSA_DETERMINISTIC、ML_DSA_MU和ML_DSA_CONTEXT参数。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的签名参数类型。
     * @param { int | Uint8Array | boolean } itemValue - 指定签名参数的具体值。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array | boolean): void;

    /**
     * 为Sign对象设置指定参数。当前仅支持ML-DSA算法中的ML_DSA_DETERMINISTIC和ML_DSA_MU参数。ML_DSA_CONTEXT参数请使用
     * [setSignSpec()]{@link cryptoFramework.Sign.setSignSpec(itemType: SignSpecItem, itemValue: int | Uint8Array)}。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的签名参数类型。
     * @param { boolean } itemValue - 指定签名参数的具体值。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    setSignSpec(itemType: SignSpecItem, itemValue: boolean): void;

    /**
     * 获取签名参数。当前仅支持RSA算法。
     *
     * @param { SignSpecItem } itemType - 用于指定需要获取的签名参数。
     * @returns { string | int } 返回获取的签名参数值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getSignSpec(itemType: SignSpecItem): string | int;

    /**
     * 签名指定的算法名称。
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
   * Verify类，使用Verify方法之前需要创建该类的实例进行操作，通过
   * [createVerify(algName: string): Verify]{@link cryptoFramework.createVerify}方法构造此实例。按序调用本类中的init、update、
   * verify方法完成签名操作。验签操作的示例代码详见
   * [签名验签开发指导](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md)。
   *
   * Verify类不支持重复初始化，当业务方需要使用新密钥验签时，需要重新创建新Verify对象并调用init初始化。
   *
   * 业务方使用时，在createVerify时确定验签的模式，调用init接口设置密钥。
   *
   * 当被签名的消息较短时，可在init初始化后，（无需update）直接调用verify接口传入被签名的消息和签名（signatureData）进行验签。
   *
   * 当被签名的消息较长时，可通过update接口分段传入被签名的消息，最后调用verify接口对消息全文进行验签。verify接口的data入参在API 10之前只
   * 支持DataBlob， API 10之后增加支持null。业务方可在循环中调用update接口，循环结束后调用verify传入签名（signatureData）进行验签。
   *
   * 当使用DSA算法进行验签，并设置了摘要算法为NoHash时，则不支持update操作，update接口会返回错误码ERR_CRYPTO_OPERATION。
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
     * 传入公钥初始化Verify对象。使用callback异步回调。init、update、verify为三段式接口，需要成组使用。其中init和verify必选，update
     * 可选。
     *
     * @param { PubKey } pubKey - 公钥对象，用于Verify的初始化。
     * @param { AsyncCallback<void> } callback - 回调函数。当验签初始化成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 密钥类型不正确。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(pubKey: PubKey, callback: AsyncCallback<void>): void;

    /**
     * 传入公钥初始化Verify对象。使用Promise异步回调。init、update、verify为三段式接口，需要成组使用。其中init和verify必选，update
     * 可选。
     *
     * @param { PubKey } pubKey - 公钥对象，用于Verify的初始化。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 密钥类型不正确。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    init(pubKey: PubKey): Promise<void>;

    /**
     * 传入公钥初始化Verify对象，通过同步方式获取结果。initSync、updateSync、verifySync为三段式接口，需要成组使用。其中initSync和
     * verifySync必选，updateSync可选。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link init}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { PubKey } pubKey - 公钥对象，用于Verify的初始化。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 密钥类型不正确。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    initSync(pubKey: PubKey): void;

    /**
     * 追加待验签数据，使用callback异步回调完成更新。
     *
     * 必须在对[Verify]{@link cryptoFramework.Verify}实例使用[init]{@link cryptoFramework.Verify.init}或
     * [initSync]{@link cryptoFramework.Verify.initSync}初始化后，才能使用本函数。
     *
     * > **说明：**
     * >
     * > 根据数据量，可以不调用update（即[init]{@link cryptoFramework.Verify.init}
     * > 完成后直接调用
     * > [verify]{@link cryptoFramework.Verify.verify(data: DataBlob | null, signatureData: DataBlob, callback: AsyncCallback<boolean>)}
     * > ）或多次调用update。
     * >
     * > 算法库目前没有对update（单次或累计）的数据量设置大小限制，建议对于大数据量的验签操作，采用多次update的方式传入数据，避免一次性申请
     * > 过大内存。
     * >
     * > 验签使用多次update操作的示例代码详见
     * > [使用RSA密钥对分段签名验签](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > ，其余算法操作类似。
     * >
     * > OnlyVerify模式下，不支持update操作，直接使用verify传入数据即可。
     * >
     * > 当使用DSA算法进行验签，并设置了摘要算法为NoHash时，则不支持update操作，update接口会返回错误码ERR_CRYPTO_OPERATION。
     *
     * @param { DataBlob } data - 传入的消息。
     * @param { AsyncCallback<void> } callback - 回调函数。当验签更新成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob, callback: AsyncCallback<void>): void;

    /**
     * 追加待验签数据，使用Promise异步回调完成更新。
     *
     * 必须在对[Verify]{@link cryptoFramework.Verify}实例使用[init()]{@link cryptoFramework.Verify.init}初始化后，才能使
     * 用本函数。
     *
     * > **说明：**
     * >
     * > 根据数据量，可以不调用update（即[init]{@link cryptoFramework.Verify.init}完成后直接调用
     * > [verify]{@link cryptoFramework.Verify.verify(data: DataBlob | null, signatureData: DataBlob)}）或多次调用update。
     * >
     * > 算法库目前没有对update（单次或累计）的数据量设置大小限制，建议对于大数据量的验签操作，采用多次update的方式传入数据，避免一次性申请
     * > 过大内存。
     * >
     * > 验签使用多次update操作的示例代码详见
     * > [使用RSA密钥对分段签名验签](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)
     * > ，其余算法操作类似。
     * >
     * > OnlyVerify模式下，不支持update操作，直接使用verify传入数据即可。
     * >
     * > 当使用DSA算法进行验签，并设置了摘要算法为NoHash时，则不支持update操作，update接口会返回错误码ERR_CRYPTO_OPERATION。
     *
     * @param { DataBlob } data - 传入的消息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    update(data: DataBlob): Promise<void>;

    /**
     * 追加待验签数据，通过同步方式完成更新。
     *
     * 必须在对[Verify]{@link cryptoFramework.Verify}实例使用[initSync()]{@link cryptoFramework.Verify.initSync}初始化后，才
     * 能使用本函数。
     *
     * > **说明：**
     * >
     * > 根据数据量，可以不调用updateSync（即[initSync]{@link cryptoFramework.Verify.initSync}完成后直接调用
     * > [verifySync]{@link cryptoFramework.Verify.verifySync}）或多次调用updateSync。
     * >
     * > 算法库目前没有对updateSync（单次或累计）的数据量设置大小限制，建议对于大数据量的验签操作，采用多次updateSync的方式传入数据，避免
     * > 一次性申请过大内存。
     * >
     * > 验签使用多次updateSync操作的示例代码详见
     * > [使用RSA密钥对分段签名验签](docroot://security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md)，
     * > 其余算法操作类似。
     * >
     * > OnlyVerify模式下，不支持updateSync操作，需要直接使用verifySync传入数据。
     * >
     * > 当使用DSA算法进行验签，并设置了摘要算法为NoHash时，则不支持updateSync操作，updateSync接口会返回错误码ERR_CRYPTO_OPERATION。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } data - 传入的消息。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(data: DataBlob): void;

    /**
     * 对数据进行验签，包含update的数据。使用callback异步回调。
     *
     * @param { DataBlob } data - 待验签的数据。
     * @param { DataBlob } signatureData - 签名数据。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示验签通过；返回false表示验签失败。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    verify(data: DataBlob, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;

    /**
     * 对数据进行验签。使用callback异步回调。
     *
     * @param { DataBlob | null } data - 传入的消息。API 10之前只支持DataBlob， API 10之后增加支持null。
     * @param { DataBlob } signatureData - 签名数据。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示验签通过；返回false表示验签不通过。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    verify(data: DataBlob | null, signatureData: DataBlob, callback: AsyncCallback<boolean>): void;

    /**
     * 对数据进行验签，包含update的数据。使用Promise异步回调。
     *
     * @param { DataBlob } data - 待验签的数据。
     * @param { DataBlob } signatureData - 签名数据。
     * @returns { Promise<boolean> } Promise对象，返回验签结果。返回true表示验签成功，返回false表示验签失败。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    verify(data: DataBlob, signatureData: DataBlob): Promise<boolean>;

    /**
     * 对数据进行验签。使用Promise异步回调。
     *
     * @param { DataBlob | null } data - 传入的消息。API 10之前只支持DataBlob， API 10之后增加支持null。
     * @param { DataBlob } signatureData - 签名数据。
     * @returns { Promise<boolean> } Promise对象。返回true表示验签成功，返回false表示验签失败。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    verify(data: DataBlob | null, signatureData: DataBlob): Promise<boolean>;

    /**
     * 对数据进行验签，通过同步方式返回验签结果。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link verify}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob | null } data - 传入的消息。
     * @param { DataBlob } signatureData - 签名数据。
     * @returns { boolean } 同步返回值，表示验签是否通过。true为通过，false为不通过。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    verifySync(data: DataBlob | null, signatureData: DataBlob): boolean;

    /**
     * 对数据进行签名恢复原始数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 目前仅RSA支持。
     *
     * @param { DataBlob } signatureData - 签名数据。
     * @returns { Promise<DataBlob | null> } Promise对象，返回从签名中恢复的原始数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    recover(signatureData: DataBlob): Promise<DataBlob | null>;

    /**
     * 对数据进行签名恢复原始数据。
     *
     * > **说明：**
     * >
     * > - 目前仅RSA支持。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link recover}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { DataBlob } signatureData - 签名数据。
     * @returns { DataBlob | null } 恢复的数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    recoverSync(signatureData: DataBlob): DataBlob | null;

    /**
     * 设置验签参数。常用的验签参数直接通过[createVerify]{@link cryptoFramework.createVerify} 来指定，剩余参数通过本接口指定。
     *
     * 支持RSA算法和SM2算法，从API version 11开始，支持SM2算法设置签名验证参数。
     *
     * 验签的参数应当与签名的参数保持一致。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的验签参数。
     * @param { int } itemValue - 用于指定验签参数的具体值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int): void;

    /**
     * 设置签名验证参数。
     *
     * 当前仅支持RSA算法中的PSS_SALT_LEN和SM2签名验证中的USER_ID。
     *
     * 验签的参数应当与签名的参数保持一致。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的验签参数类型。
     * @param { int | Uint8Array } itemValue - 指定验签参数的具体值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。 [since 26.0.0]
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @throws { BusinessError } 17620004 - 无效的函数调用。 [since 26.0.0]
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array): void;

    /**
     * 设置签名验证参数。
     *
     * 当前仅支持RSA算法中的PSS_SALT_LEN，SM2算法中的USER_ID以及ML-DSA算法中的ML_DSA_DETERMINISTIC、ML_DSA_MU和ML_DSA_CONTEXT。
     *
     * 验签的参数应当与签名的参数保持一致。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的验签参数类型。
     * @param { int | Uint8Array | boolean } itemValue - 指定验签参数的具体值。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array | boolean): void;

    /**
     * 为Verify对象设置指定参数。
     *
     * 目前仅支持ML-DSA算法中的ML_DSA_DETERMINISTIC和ML_DSA_MU参数。ML_DSA_CONTEXT参数请使用
     * [setVerifySpec()]{@link cryptoFramework.Verify.setVerifySpec(itemType: SignSpecItem, itemValue: int | Uint8Array)}。
     * 验签的参数应当与签名的参数保持一致。
     *
     * @param { SignSpecItem } itemType - 用于指定需要设置的验签参数类型。
     * @param { boolean } itemValue - 指定验签参数的具体值。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17620004 - 无效的函数调用。
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    setVerifySpec(itemType: SignSpecItem, itemValue: boolean): void;

    /**
     * 获取验签参数。当前只支持RSA算法。
     *
     * @param { SignSpecItem } itemType - 用于指定需要获取的验签参数。
     * @returns { string | int } 返回获取的参数值。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。 [since 26.0.0]
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getVerifySpec(itemType: SignSpecItem): string | int;

    /**
     * 验签指定的算法名称。
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
   * 生成Sign实例。
   *
   * @param { string } algName - 指定签名算法。当前支持RSA、ECC、DSA、SM2<sup>10+</sup>，Ed25519<sup>11+</sup>和
   *     ML-DSA<sup>26.0.0+</sup>。
   *     <br>使用RSA PKCS1模式时需设置摘要；使用RSA PSS模式时需设置摘要和掩码摘要。签名时，通过设置OnlySign参数可传入数据摘要仅作签名。
   *     <br>支持的规格详见
   *     [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。
   * @returns { Sign } 返回由输入算法指定生成的Sign对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createSign(algName: string): Sign;

  /**
   * 生成Verify实例。
   *
   * @param { string } algName - 指定签名验证算法。当前支持RSA、ECC、DSA、SM2<sup>10+</sup>，Ed25519<sup>11+</sup>和
   *     ML-DSA<sup>26.0.0+</sup>。
   *     <br>使用RSA PKCS1模式时需设置摘要；使用RSA PSS模式时需设置摘要和掩码摘要。使用RSA算法验签时，设置recover参数可支持验签恢复。
   *     <br>支持的规格详见
   *     [签名验签规格](docroot://security/CryptoArchitectureKit/crypto-sign-sig-verify-overview.md)。
   * @returns { Verify } 返回由输入算法指定生成的Verify对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Signature [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createVerify(algName: string): Verify;
  /**
   * KeyAgreement类，使用密钥协商方法之前需要创建该类的实例进行操作，通过
   * [createKeyAgreement(algName: string): KeyAgreement]{@link cryptoFramework.createKeyAgreement}方法构造此实例。
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
     * 基于传入的私钥与公钥进行密钥协商。使用callback异步回调。
     *
     * @param { PriKey } priKey - 设置密钥协商的私钥输入。
     * @param { PubKey } pubKey - 设置密钥协商的公钥输入。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当密钥协商成功时，err为undefined，data为协商的共享密钥；否则为
     *     错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void;

    /**
     * 基于传入的私钥与公钥进行密钥协商。使用Promise异步回调。
     *
     * @param { PriKey } priKey - 设置密钥协商的私钥输入。
     * @param { PubKey } pubKey - 设置密钥协商的公钥输入。
     * @returns { Promise<DataBlob> } Promise对象，返回密钥协商的共享密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>;

    /**
     * 基于传入的私钥与公钥进行密钥协商，通过同步返回共享密钥。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generateSecret}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { PriKey } priKey - 设置密钥协商的私钥输入。
     * @param { PubKey } pubKey - 设置密钥协商的公钥输入。
     * @returns { DataBlob } 共享密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateSecretSync(priKey: PriKey, pubKey: PubKey): DataBlob;

    /**
     * 密钥协商指定的算法名称。
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
   * 生成KeyAgreement实例。
   *
   * @param { string } algName - 指定密钥协商算法：目前仅支持ECDH，从API version 11开始，增加支持X25519和DH。<br>支持的规格详见
   *     [密钥协商规格](docroot://security/CryptoArchitectureKit/crypto-key-agreement-overview.md)。
   * @returns { KeyAgreement } 返回由输入算法指定生成的KeyAgreement对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 9 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.KeyAgreement [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createKeyAgreement(algName: string): KeyAgreement;

  /**
   * 表示密钥参数的枚举。
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
     * DSA算法的素模数p。
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
     * DSA算法中密钥参数q（p-1的素因子）。
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
     * DSA算法的参数g。
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
     * DSA算法的私钥sk。
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
     * DSA算法的公钥pk。
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
     * ECC算法中表示椭圆曲线Fp域的素数p。
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
     * ECC算法中椭圆曲线的第一个系数a。
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
     * ECC算法中椭圆曲线的第二个系数b。
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
     * ECC算法中基点g的x坐标。
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
     * ECC算法中基点g的y坐标。
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
     * ECC算法中基点g的阶n。
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
     * ECC算法中的余因子h。
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
     * ECC算法中的私钥sk。
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
     * ECC算法中，公钥pk（椭圆曲线上的一个点）的x坐标。
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
     * ECC算法中，公钥pk（椭圆曲线上的一个点）的y坐标。
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
     * ECC算法中，椭圆曲线的域类型（当前只支持Fp域）。
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
     * ECC算法中域的大小，单位为bits（注：对于Fp域，域的大小为素数p的bits长度）。
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
     * ECC算法中的SECG（Standards for Efficient Cryptography Group）曲线名称。
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
     * RSA算法中的模数n。
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
     * RSA算法中的私钥sk（即私钥指数d）。
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
     * RSA算法中的公钥pk（即公钥指数e）。
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
     * DH算法中的素数p。
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
     * DH算法中的参数g。
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
     * DH算法中私钥长度，单位为bits。
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
     * DH算法中的私钥sk。
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
     * DH算法中的公钥pk。
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
     * Ed25519算法中的私钥sk。
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
     * Ed25519算法中的公钥pk。
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
     * X25519算法中的私钥sk。
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
     * X25519算法中的公钥pk。
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
   * 表示非对称密钥数据项类型的枚举。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum AsyKeyDataItem {
    /**
     * ML-DSA私钥的私有种子。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_PRIVATE_SEED = 0,

    /**
     * ML-DSA私钥的原始私钥数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_PRIVATE_RAW = 1,

    /**
     * ML-DSA公钥的原始公钥数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_DSA_PUBLIC_RAW = 2,

    /**
     * ML-KEM私钥的私有种子。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_PRIVATE_SEED = 3,

    /**
     * ML-KEM私钥的原始私钥数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_PRIVATE_RAW = 4,

    /**
     * ML-KEM公钥的原始公钥数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_PUBLIC_RAW = 5,

    /**
     * 表示椭圆曲线（EC）上的私钥标量k。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PRIVATE_K = 6,

    /**
      * 表示椭圆曲线（EC）密钥的复合编码04||X||Y||K，其中04||X||Y为非压缩公钥点，K为私钥标量。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PRIVATE_04_X_Y_K = 7,

    /**
     * 表示椭圆曲线（EC）公钥的 X||Y格式编码数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PUBLIC_X_Y = 8,

    /**
     * 表示椭圆曲线（EC）公钥的 04||X||Y格式编码数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PUBLIC_04_X_Y = 9,

    /**
     * 表示椭圆曲线（EC）公钥的 02||X 或 03||X格式编码数据。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    EC_PUBLIC_COMPRESS_X = 10
  }

  /**
   * 表示密钥参数类型的枚举。
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
     * 表示公私钥中包含的公共参数。使用此类型的参数可以调用
     * [generateKeyPair]{@link cryptoFramework.AsyKeyGeneratorBySpec.generateKeyPair(callback: AsyncCallback<KeyPair>)}
     * 随机生成密钥对。
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
     * 表示私钥中包含的参数。使用此类型的参数可以调用
     * [generatePriKey]{@link cryptoFramework.AsyKeyGeneratorBySpec.generatePriKey(callback: AsyncCallback<PriKey>)}生成
     * 指定的私钥。
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
     * 表示公钥中包含的参数。使用此类型的参数可以调用
     * [generatePubKey]{@link cryptoFramework.AsyKeyGeneratorBySpec.generatePubKey(callback: AsyncCallback<PubKey>)}生成
     * 指定的公钥。
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
     * 表示公私钥中包含的全量参数。使用此类型的参数可以调用
     * [generateKeyPair]{@link cryptoFramework.AsyKeyGeneratorBySpec.generateKeyPair(callback: AsyncCallback<KeyPair>)}
     * 生成指定的密钥对。
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
   * 指定非对称密钥参数的基本接口，用于创建密钥生成器。在指定非对称密钥参数时需要构造其子类对象，并将子类对象传入
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法创建密钥生成器。构造子类对象时，
   * 除了RSA密钥采用小端写法外，其他bigint类型的密钥参数均采用大端写法，并使用正数。
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
     * 指定非对称密钥的算法名称，比如"RSA"、"DSA"、"ECC"、"SM2"、"Ed25519"、"X25519"、"DH"。
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
     * 指定密钥参数类型，用于区分公/私钥参数。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DSA算法中公私钥包含的公共参数，随机生成公/私钥。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * DSA算法的素模数p。
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
     * DSA算法中密钥参数q（p-1的素因子）。
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
     * DSA算法的参数g。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DSA算法中公钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定DSA算法中公私钥包含的公共参数。
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
     * DSA算法的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DSA算法中公私钥包含的全量参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定DSA算法中公私钥包含的公共参数。
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
     * DSA算法的私钥sk。
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
     * DSA算法的公钥pk。
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
   * 指定椭圆曲线的域类型。当前只支持Fp域。
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
     * 指定椭圆曲线域的类型，当前只支持"Fp"。
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
   * 指定椭圆曲线的素数域。是[ECField]{@link cryptoFramework.ECField}的子类。
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
     * 指定素数p的值。
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
   * 指定椭圆曲线上的一个点。
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
     * 指定椭圆曲线上点的x坐标。
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
     * 指定椭圆曲线上点的y坐标。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中公私钥包含的公共参数，随机生成公/私钥。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定椭圆曲线的域（当前只支持Fp域）。
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
     * 指定椭圆曲线的第一个系数a。
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
     * 指定椭圆曲线的第二个系数b。
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
     * 指定基点g。
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
     * ECC算法中基点g的阶n。
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
     * 指定余因子h。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中私钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定ECC算法中公私钥都包含的公共参数。
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
     * ECC算法中的私钥sk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中公钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定ECC算法中公私钥都包含的公共参数。
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
     * 指定ECC算法的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定ECC算法中公私钥包含的全量参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定ECC算法中公私钥都包含的公共参数。
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
     * ECC算法中的私钥sk。
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
     * 指定ECC算法的公钥pk。
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
   * 提供ECC密钥参数生成和基于指定椭圆曲线的点转换工具。
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
     * 根据椭圆曲线相应的NID（Name Identifier）字符串名称生成相应的非对称公共密钥参数。详见
     * [ECC密钥生成规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#ecc)和
     * [SM2密钥生成规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#sm2)。
     *
     * @param { string } curveName - 椭圆曲线相应的NID（Name Identifier）字符串名称。
     * @returns { ECCCommonParamsSpec } 返回ECC公共密钥参数。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    static genECCCommonParamsSpec(curveName: string): ECCCommonParamsSpec;

    /**
     * 根据椭圆曲线的曲线名，即相应的NID（Name Identifier），将指定的点数据转换为Point对象。当前支持压缩/非压缩格式的点数据。
     *
     * > **说明：**
     * >
     * > 根据RFC5480规范中第2.2节的描述：
     * > 1. 非压缩格式的点数据表示为 **0x04**|x坐标|y坐标。
     * > 2. **Fp**域（当前不支持**F2m**域）中的压缩点数据表示如下：**0x03**|x坐标（当y坐标为奇数时）；**0x02**|x坐标（当y坐标为偶数时）。
     *
     * @param { string } curveName - 椭圆曲线的曲线名，即相应的NID（Name Identifier）。
     * @param { Uint8Array } encodedPoint - 指定的ECC椭圆曲线上的点的数据。
     * @returns { Point } 返回ECC的Point对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static convertPoint(curveName: string, encodedPoint: Uint8Array): Point;

    /**
     * 根据椭圆曲线的曲线名，即相应的NID（Name Identifier），按照指定的点数据格式，将Point对象转换为点数据。当前支持压缩/非压缩格式的点
     * 数据。
     *
     * @param { string } curveName - 椭圆曲线的曲线名，即相应的NID（Name Identifier）。
     * @param { Point } point - 椭圆曲线上的Point点对象。
     * @param { string } format - 需要获取的点数据格式，当前支持"COMPRESSED"或"UNCOMPRESSED"。
     * @returns { Uint8Array } 返回指定格式的点数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getEncodedPoint(curveName: string, point: Point, format: string): Uint8Array;
  }

  /**
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中公私钥包含的公共参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定DH算法中大素数p。
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
     * DH算法中的参数g。
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
     * DH算法中私钥长度，单位为bits。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中私钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定DH算法中公私钥都包含的公共参数。
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
     * DH算法中的私钥sk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中公钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定DH算法中公私钥都包含的公共参数。
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
     * DH算法中的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定DH算法中公私钥包含的全量参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定DH算法中公私钥都包含的公共参数。
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
     * DH算法中的私钥sk。
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
     * DH算法中的公钥pk。
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
   * 根据素数P的长度和私钥长度（bit位数）生成DH公共密钥参数。
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
     * 根据素数P的长度和私钥长度（单位为bit）生成DH公共密钥参数。详见
     * [DH密钥生成规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md#dh)。
     *
     * @param { int } pLen - 用于指定DH公共密钥参数中素数P的长度，单位为bits。
     * @param { int } [skLen] - 用于指定生成DH私钥的最大长度，单位为bits，默认值为0。<br>当参数值设置为0时，生成DH私钥的最大长度为：
     *     <br>ffdhe2048：255 bits。<br>ffdhe3072：275 bits。<br>ffdhe4096：325 bits。<br>ffdhe6144：375 bits。
     *     <br>ffdhe8192：400 bits。
     * @returns { DHCommonParamsSpec } 返回DH公共密钥参数。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 801 - 该操作不支持。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定Ed25519算法中私钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * Ed25519算法中的私钥sk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定Ed25519算法中公钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * Ed25519算法中的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定Ed25519算法中公私钥包含的全量参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * Ed25519算法中的私钥sk。
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
     * Ed25519算法中的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定X25519算法中私钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * X25519算法中的私钥sk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定X25519算法中公钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * X25519算法中的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定X25519算法中公私钥包含的全量参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * X25519算法中的私钥sk。
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
     * X25519算法中的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定RSA算法中公私钥包含的公共参数，随机生成公/私钥。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定模数n。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定RSA算法中公钥包含的参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定RSA算法中公私钥都包含的公共参数。
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
     * 指定RSA算法的公钥pk。
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
   * 密钥参数[AsyKeySpec]{@link cryptoFramework.AsyKeySpec}的子类，用于指定RSA算法中公私钥包含的全量参数。
   *
   * 在使用密钥参数生成密钥时，将其传入[createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法
   * 创建密钥生成器。
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
     * 指定RSA算法中公私钥都包含的公共参数。
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
     * 指定RSA算法的私钥sk。
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
     * 指定RSA算法的公钥pk。
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
   * AsyKeyGeneratorBySpec非对称密钥生成器。在使用该类的方法前，需要先使用
   * [createAsyKeyGeneratorBySpec()]{@link cryptoFramework.createAsyKeyGeneratorBySpec}方法构建一个AsyKeyGeneratorBySpec
   * 实例。
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
     * 获取非对称密钥生成器生成的密钥。使用callback异步回调。
     *
     * 当使用[COMMON_PARAMS_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到随机生成的密钥对；
     * 当使用[KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到各项数据与密钥参数一致的
     * 密钥对。
     *
     * @param { AsyncCallback<KeyPair> } callback - 回调函数。当生成非对称密钥成功时，err为undefined，data为获取到的KeyPair；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：参数类型不正确。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generateKeyPair(callback: AsyncCallback<KeyPair>): void;

    /**
     * 获取该非对称密钥生成器生成的密钥。使用Promise异步回调。
     *
     * 当使用[COMMON_PARAMS_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到随机生成的密钥对；
     * 当使用[KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到各项数据与密钥参数一致的
     * 密钥对。
     *
     * @returns { Promise<KeyPair> } Promise对象，返回非对称密钥KeyPair。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * 同步获取该非对称密钥生成器生成的密钥。
     *
     * 当使用[COMMON_PARAMS_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到随机生成的密钥对；
     * 当使用[KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到各项数据与密钥参数一致的
     * 密钥对。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generateKeyPair}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { KeyPair } 非对称密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateKeyPairSync(): KeyPair;

    /**
     * 获取非对称密钥生成器生成的密钥。使用callback异步回调。
     *
     * 使用[PRIVATE_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType}类型密钥参数创建密钥生成器，生成指定私钥。使用
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型密钥参数创建密钥生成器，从生成的密钥对中获取指定私钥。
     *
     * @param { AsyncCallback<PriKey> } callback - 回调函数。当生成私钥成功时，err为undefined，data为获取到的私钥；否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：必填参数未指定。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePriKey(callback: AsyncCallback<PriKey>): void;

    /**
     * 获取该非对称密钥生成器生成的密钥。使用Promise异步回调。
     *
     * 当使用[PRIVATE_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到指定的私钥；当使用
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以从生成的密钥对中获取指定的私钥。
     *
     * @returns { Promise<PriKey> } Promise对象，返回私钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePriKey(): Promise<PriKey>;

    /**
     * 使用该非对称密钥生成器生成私钥。该接口以同步方式返回结果。
     *
     * 当使用[PRIVATE_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到指定的私钥；当使用
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以从生成的密钥对中获取指定的私钥。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generatePriKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { PriKey } 私钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generatePriKeySync(): PriKey;

    /**
     * 获取非对称密钥生成器生成的公钥。使用callback异步回调。
     *
     * 当使用[PUBLIC_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到指定的公钥；当使用
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以从生成的密钥对中获取指定的公钥。
     *
     * @param { AsyncCallback<PubKey> } callback - 回调函数。当生成公钥成功时，err为undefined，data为获取到的公钥；否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因： 参数类型不正确。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePubKey(callback: AsyncCallback<PubKey>): void;

    /**
     * 获取该非对称密钥生成器生成的公钥。使用Promise异步回调。
     *
     * 当使用[PUBLIC_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到指定的公钥；当使用
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以从生成的密钥对中获取指定的公钥。
     *
     * @returns { Promise<PubKey> } Promise对象，返回非对称密钥的公钥PubKey。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    generatePubKey(): Promise<PubKey>;

    /**
     * 同步获取该非对称密钥生成器生成的密钥。
     *
     * 当使用[PUBLIC_KEY_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数来创建密钥生成器时，可以得到指定的公钥；使用
     * [KEY_PAIR_SPEC]{@link cryptoFramework.AsyKeySpecType}类型的密钥参数时，可以从生成的密钥对中获取指定的公钥。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generatePubKey}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @returns { PubKey } 公钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generatePubKeySync(): PubKey;

    /**
     * 非对称密钥生成器的算法名。
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
   * 指定密钥参数，获取AsyKeyGeneratorBySpec非对称密钥生成器实例。
   *
   * @param { AsyKeySpec } asyKeySpec - 密钥参数。非对称密钥生成器根据指定的这些参数生成公/私钥。<br>支持的规格详见
   *     [非对称密钥生成和转换规格](docroot://security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md)。
   * @returns { AsyKeyGeneratorBySpec } 返回AsyKeyGeneratorBySpec非对称密钥生成器实例。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 10 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Key.AsymKey [since 12]
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createAsyKeyGeneratorBySpec(asyKeySpec: AsyKeySpec): AsyKeyGeneratorBySpec;

  /**
   * 密钥派生函数参数，使用密钥派生函数进行密钥派生时，需要构建其子类对象并作为输入。
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
     * 指明密钥派生函数的算法名，如"PBKDF2"。
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
   * 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为PBKDF2密钥派生函数进行密钥派生时的输入。
   *
   * > **说明：**
   * >
   * > password 是原始密码。如果使用 string 类型，需直接传入用于密钥派生的数据，而不是 HexString 或 base64 等字符串类型，并确保该字符串
   * > 为 UTF-8 编码，否则派生结果会有差异。
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
     * 用户输入的原始密码。
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
     * 盐值。
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
     * 迭代次数，需要为正整数。
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
     * 派生得到的密钥字节长度，单位为bytes。
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
   * 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为HKDF密钥派生函数进行密钥派生时的输入。
   *
   * > **说明：**
   * >
   * > key指的是用户输入的最初的密钥材料。根据模式的不同info与salt可以传空，但是不可不传。
   * >
   * > 例如：EXTRACT_AND_EXPAND模式需要输入全部的值，EXTRACT_ONLY模式info可以为空，在构建HKDFSpec的时候，info传入null值。
   * >
   * > 默认的模式为EXTRACT_AND_EXPAND，"HKDF|SHA256|EXTRACT_AND_EXPAND"等价于"HKDF|SHA256"。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface HKDFSpec extends KdfSpec {
    /**
     * 密钥材料。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * 盐值。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    salt: Uint8Array;

    /**
     * 拓展信息。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    info: Uint8Array;

    /**
     * 派生得到的密钥字节长度，单位为bytes。
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
   * 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为SCRYPT密钥派生函数进行密钥派生时的输入。
   *
   * > **说明：**
   * >
   * > passphrase指的是原始密码，如果使用string类型，需要直接传入用于密钥派生的数据，而不是HexString、base64等字符串类型，同时需要确保该
   * > 字符串为utf-8编码，否则派生结果会有差异。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface ScryptSpec extends KdfSpec {
    /**
     * 用户输入的原始密码。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    passphrase: string | Uint8Array;

    /**
     * 盐值。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    salt: Uint8Array;

    /**
     * CPU/内存开销参数，需要为正整数。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    n: long;

    /**
     * 块大小参数，需要为正整数。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    r: long;

    /**
     * 并行化参数，需要为正整数。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    p: long;

    /**
     * 最大内存限制参数，需要为正整数，单位为bytes。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    maxMemory: long;

    /**
     * 派生得到的密钥字节长度，需要为正整数，单位为bytes。
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
   * 密钥派生函数参数[KdfSpec]{@link cryptoFramework.KdfSpec}的子类，作为X963KDF密钥派生函数进行密钥派生时的输入。
   *
   * > **说明：**
   * >
   * > key指的是用户输入的最初的密钥材料。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Kdf
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface X963KdfSpec extends KdfSpec {
    /**
     * 密钥材料。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    key: string | Uint8Array;

    /**
     * 共享信息。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    info: Uint8Array;

    /**
     * 派生得到的密钥字节长度，需要为正整数，单位为bytes。
     * 取值应为正整数。
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
   * 密钥派生函数（key derivation function）类，使用密钥派生方法之前需要创建该类的实例进行操作，通过createKdf(algName: string): Kdf
   * 方法构造此实例。
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
     * 基于传入的密钥派生参数进行密钥派生。使用callback异步回调。
     *
     * @param { KdfSpec } params - 设置密钥派生函数的参数。
     * @param { AsyncCallback<DataBlob> } callback - 回调函数。当密钥派生成功时，err为undefined，data为派生的密钥；否则为错误对象。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 参数中的密钥长度无效；
     *     <br>2. 参数中的info长度无效；
     *     <br>3. 参数中的keySize无效。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void;

    /**
     * 基于传入的密钥派生参数进行密钥派生。使用Promise异步回调。
     *
     * @param { KdfSpec } params - 设置密钥派生函数的参数。
     * @returns { Promise<DataBlob> } Promise对象，返回派生的密钥。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 参数中的密钥长度无效；
     *     <br>2. 参数中的info长度无效；
     *     <br>3. 参数中的keySize无效。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    generateSecret(params: KdfSpec): Promise<DataBlob>;

    /**
     * 基于传入的密钥派生参数进行密钥派生，通过同步方式返回派生得到的密钥。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link generateSecret}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { KdfSpec } params - 设置密钥派生函数的参数。
     * @returns { DataBlob } 用于获取派生得到的密钥DataBlob数据。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. 参数中的密钥长度无效；
     *     <br>2. 参数中的info长度无效；
     *     <br>3. 参数中的keySize无效。 [since 22]
     * @syscap SystemCapability.Security.CryptoFramework.Kdf
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    generateSecretSync(params: KdfSpec): DataBlob;

    /**
     * 密钥派生函数的算法名称。
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
   * 密钥派生函数（key derivation function）实例生成。
   *
   * @param { string } algName - 指定密钥派生算法（包含HMAC配套的散列函数）：目前支持PBKDF2、HKDF、SCRYPT、X963KDF算法，
   *     如"PBKDF2|SHA256", "HKDF|SHA256", "SCRYPT", "X963KDF|SHA256"。<br>支持的规格详见
   *     [密钥派生函数规格](docroot://security/CryptoArchitectureKit/crypto-key-derivation-overview.md)。
   * @returns { Kdf } 返回由输入算法指定生成的Kdf对象。
   * @throws { BusinessError } 401 - 非法入参。可能的原因：
   *     <br>1. 必填参数未指定；
   *     <br>2. 参数类型不正确；
   *     <br>3. 参数验证失败。
   * @throws { BusinessError } 801 - 该操作不支持。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @syscap SystemCapability.Security.CryptoFramework [since 11 - 11]
   * @syscap SystemCapability.Security.CryptoFramework.Kdf [since 12]
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function createKdf(algName: string): Kdf;

  /**
   * SM2密文参数，使用SM2密文格式转换函数进行格式转换时，需要用到此对象。可以通过指定此参数，生成符合国密标准的ASN.1格式的SM2密文，反之，
   * 也可以从ASN.1格式的SM2密文中获取具体参数。
   *
   * > **说明：**
   * >
   * > - hashData为使用SM3算法对明文数据运算得到的杂凑值，其长度固定为256位。
   * >
   * > - cipherTextData是与明文等长的密文。
   * >
   * > - 在拼接生成C1C3C2格式的密文时，如果x分量（C1_X）或y分量（C1_Y）的长度不足32字节，需要在高位补0，使得x分量和y分量的长度均为32字节。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SM2CipherTextSpec {
    /**
     * x分量。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    xCoordinate: bigint;

    /**
     * y分量，也称为C1y。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    yCoordinate: bigint;

    /**
     * 密文数据，也称为C2。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cipherTextData: Uint8Array;

    /**
     * 哈希值，也称为C3。
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
   * 用于SM2密码学运算的工具类。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class SM2CryptoUtil {
    /**
     * 根据指定的SM2密文参数，生成符合国密标准的ASN.1格式SM2密文。
     *
     * @param { SM2CipherTextSpec } spec - 指定的SM2密文参数。
     * @param { string } [mode] - 可选的密文转换模式，可用于指定密文参数的拼接顺序，当前仅支持默认值"C1C3C2"。为空或空字符串时使用
     *     默认值。
     * @returns { DataBlob } 返回符合国密标准的ASN.1格式的SM2密文。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static genCipherTextBySpec(spec: SM2CipherTextSpec, mode?: string): DataBlob;

    /**
     * 从符合国密标准的ASN.1格式的SM2密文中，获取具体的SM2密文参数。
     *
     * @param { DataBlob } cipherText - 符合国密标准的ASN.1格式的SM2密文。
     * @param { string } [mode] - 可选的密文转换模式，可用于指定密文参数的拼接顺序，当前仅支持默认值"C1C3C2"。为空或空字符串时使用
     *     默认值。
     * @returns { SM2CipherTextSpec } 返回SM2密文参数。
     * @throws { BusinessError } 401 - 非法入参。可能的原因：
     *     <br>1. 必填参数未指定；
     *     <br>2. 参数类型不正确；
     *     <br>3. 参数验证失败。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static getCipherTextSpec(cipherText: DataBlob, mode?: string): SM2CipherTextSpec;
  }

  /**
   * 包含（r、s）的ECC/SM2签名数据的对象。
   *
   * > **说明：**
   * >
   * > r和s的长度各为256位。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface EccSignatureSpec {
    /**
     * r分量。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    r: bigint;

    /**
     * s分量。
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
   * 用于ECC/SM2签名数据转换的工具类。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Signature
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  class SignatureUtils {
    /**
     * 从ASN1 DER格式的ECC/SM2签名数据获取r和s。
     *
     * @param { Uint8Array } data - ASN1 DER格式的签名数据。
     * @returns { EccSignatureSpec } 包含r和s的数据对象。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. data参数长度为0或过大。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static genEccSignatureSpec(data: Uint8Array): EccSignatureSpec;

    /**
     * 将（r、s）的ECC/SM2签名数据转换为ASN1 DER格式。
     *
     * @param { EccSignatureSpec } spec - （r、s）的ECC/SM2签名数据。
     * @returns { Uint8Array } ASN1 DER格式的签名数据。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。可能的原因：
     *     <br>1. spec参数的r或s值为0或过大。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Signature
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    static genEccSignature(spec: EccSignatureSpec): Uint8Array;
  }

  /**
   * 枚举KEM算法名称ID。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum KemAlgNameId {
    /**
     * ML_KEM_512算法名称ID。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_512 = 0,

    /**
     * ML_KEM_768算法名称ID。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_768 = 1,

    /**
     * ML_KEM_1024算法名称ID。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ML_KEM_1024 = 2
  }

  /**
   * KEM封装结果。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface KemEncapResult {
    /**
     * KEM的共享密钥。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    sharedSecret: Uint8Array;

    /**
     * KEM封装的密钥，即KEM的密文。
     *
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    wrappedKey: Uint8Array;
  }

  /**
   * 提供KEM密钥封装和解封装操作的API。
   *
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface Kem {
    /**
     * 密钥封装操作。使用接收方的公钥，由发送方执行，生成并封装一个共享密钥。使用Promise异步回调。
     *
     * @param { PubKey } pubKey - 接收方的公钥。
     * @param { Uint8Array | null } ikme - 随机数种子，用于替代算法内部的随机数。对于ML-KEM算法，随机数种子是32字节。建议传null。
     * @returns { Promise<KemEncapResult> } Promise对象，返回KEM封装结果。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    encapsulate(pubKey: PubKey, ikme: Uint8Array | null): Promise<KemEncapResult>;

    /**
     * 密钥封装操作。使用接收方的公钥，由发送方执行，生成并封装一个共享密钥。使用同步回调。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link encapsulate}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { PubKey } pubKey - 接收方的公钥。
     * @param { Uint8Array | null } ikme - 随机数种子，用于替代算法内部的随机数。对于ML-KEM算法，随机数种子是32字节。建议传null。
     * @returns { KemEncapResult } KEM封装结果。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    encapsulateSync(pubKey: PubKey, ikme: Uint8Array | null): KemEncapResult;

    /**
     * 密钥解封装操作。使用接收方的私钥，由接收方执行，从密文中解封装出共享密钥。使用Promise异步回调。
     *
     * @param { PriKey } priKey - 接收方的私钥。
     * @param { Uint8Array } wrappedKey - KEM封装的密钥。
     * @returns { Promise<Uint8Array> } Promise对象，返回共享密钥。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    decapsulate(priKey: PriKey, wrappedKey: Uint8Array): Promise<Uint8Array>;

    /**
     * 密钥解封装操作。使用接收方的私钥，由接收方执行，从密文中解封装出共享密钥。使用同步回调。
     *
     * <br><br>**说明：**
     * <br>建议优先使用异步API{@link decapsulate}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。
     * 因此建议在子线程中调用同步API，以避免阻塞主线程。
     *
     * @param { PriKey } priKey - 接收方的私钥。
     * @param { Uint8Array } wrappedKey - KEM封装的密钥。
     * @returns { Uint8Array } 共享密钥。
     * @throws { BusinessError } 17620001 - 内存操作失败。
     * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
     * @throws { BusinessError } 17620003 - 参数检查失败。
     * @throws { BusinessError } 17630001 - 密码操作错误。
     * @syscap SystemCapability.Security.CryptoFramework.Cipher
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    decapsulateSync(priKey: PriKey, wrappedKey: Uint8Array): Uint8Array;
  }

  /**
   * 创建一个用于密钥封装和解封装操作的KEM实例。
   *
   * @param { KemAlgNameId } algNameId - KEM的算法名称ID。
   * @returns { Kem } KEM实例。
   * @throws { BusinessError } 17620001 - 内存操作失败。
   * @throws { BusinessError } 17620002 - 获取Native对象失败或参数转换失败。
   * @throws { BusinessError } 17620003 - 参数检查失败。
   * @throws { BusinessError } 17630001 - 密码操作错误。
   * @syscap SystemCapability.Security.CryptoFramework.Cipher
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createKem(algNameId: KemAlgNameId): Kem;
}

export default cryptoFramework;