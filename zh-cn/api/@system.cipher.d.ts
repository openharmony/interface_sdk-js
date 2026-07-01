/*
 * Copyright (c) 2020-2023 Huawei Device Co., Ltd.
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

/**
 * 调用cipher接口后，返回的内容。
 *
 * @syscap SystemCapability.Security.Cipher
 * @since 3 dynamiconly
 * @deprecated since 11
 * @useinstead ohos.security.cryptoFramework.Cipher
 */
export interface CipherResponse {
  /**
   * 返回的内容。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  text: string;
}

/**
 * 调用cipher rsa方法时，传入的参数。
 *
 * @syscap SystemCapability.Security.Cipher
 * @since 3 dynamiconly
 * @deprecated since 11
 * @useinstead ohos.security.cryptoFramework.Cipher
 */
export interface CipherRsaOptions {
  /**
   * 加解密操作类型，可选项有：
   *
   * 1. encrypt 加密；
   * 2. decrypt 解密。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  action: string;

  /**
   * 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过keySize / 8 - 66，其中keySize是密钥的长度
   * （例如密钥长度为1024时，text不能超过62个字节）。待解密的文本内容应该是经过base64编码的一段二进制值。base64编码使用
   * 默认风格。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  text: string;

  /**
   * 加解密使用的RSA密钥。加密时key为公钥，解密时key为私钥。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  key: string;

  /**
   * RSA算法的填充项，默认为RSA/None/OAEPWithSHA256AndMGF1Padding。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  transformation?: string;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  success: (data: CipherResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  fail: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  complete: () => void;
}

/**
 * 调用cipher aes方法时，传入的参数。
 *
 * @syscap SystemCapability.Security.Cipher
 * @since 3 dynamiconly
 * @deprecated since 11
 * @useinstead ohos.security.cryptoFramework.Cipher
 */
export interface CipherAesOptions {
  /**
   * 加解密操作类型，可选项有：
   *
   * 1. encrypt 加密；
   * 2. decrypt 解密。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  action: string;

  /**
   * 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  text: string;

  /**
   * 加密或解密使用到的密钥，经过 base64 编码后生成的字符串。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  key: string;

  /**
   * AES算法的加密模式和填充项，默认AES/CBC/PKCS5Padding。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  transformation?: string;

  /**
   * AES加解密的初始向量，经过base64编码后的字符串，默认值为key值。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  iv?: string;

  /**
   * AES加解密的初始向量偏移，默认值0，仅支持0。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  ivOffset?: string;

  /**
   * AES加解密的初始向量字节长度，当前为预留字段，默认值16，仅支持16。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  ivLen?: string;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  success: (data: CipherResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  fail: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 11
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  complete: () => void;
}

/**
 * 提供加解密接口。
 *
 * @syscap SystemCapability.Security.Cipher
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.security.cryptoFramework.Cipher
 */
export default class Cipher {
  /**
   * 使用RSA对数据进行加密或解密。
   *
   * @param { CipherRsaOptions } options - RSA 加解密参数。
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  static rsa(options: CipherRsaOptions): void;

  /**
   * 使用AES对数据进行加密或解密。
   *
   * @param { CipherAesOptions } options - AES 加解密参数。
   * @syscap SystemCapability.Security.Cipher
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.security.cryptoFramework.Cipher
   */
  static aes(options: CipherAesOptions): void;
}