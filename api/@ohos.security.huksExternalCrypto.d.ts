
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit UniversalKeystoreKit
 */

/**
 * This module provides the interface of external crypto provider.
 *
 * @namespace huksExternalCrypto
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
declare namespace huksExternalCrypto {
  /**
   * Enumerates the huks external crypto tag data types.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export enum HuksExternalCryptoTagType {
    /**
     * Uint8Array type.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_TYPE_INT = 1 << 28,
    /**
     * Uint8Array type.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_TYPE_BYTES = 5 << 28
  }

  /**
   * Enumerates the tags used to invoke parameters.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export enum HuksExternalCryptoTag {
    /**
     * PIN code
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_UKEY_PIN = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200001,
    /**
     * Ability Name
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_ABILITY_NAME = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200002,
    /**
     * Extra data.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_EXTRA_DATA = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200003,
    /**
     * Calling uid.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_UID = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_INT | 200004,
    /**
     * Purpose of the cert chain.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_PURPOSE = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_INT | 200005
  }

  /**
   * Defines the param field used in the APIs.
   *
   * @typedef HuksExternalCryptoParam
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export interface HuksExternalCryptoParam {
    /**
     * External crypto tag
     *
     * @type { HuksExternalCryptoTag }
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    tag: HuksExternalCryptoTag;
    /**
     * Param value
     *
     * @type { boolean | int | bigint | Uint8Array }
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    value: boolean | int | bigint | Uint8Array;
  }

  /**
   * Register the specific external key provider by providerName.
   *
   * @permission ohos.permission.CRYPTO_EXTENSION_REGISTER
   * @param { string } providerName - providerName indicates the name of the external crypto provider
   *     and must be globally unique. One effective way is to include manufacturer information.
   * @param { Array<HuksExternalCryptoParam> } params - params indicates the properties of the operation.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - check permission failed.
   * @throws { BusinessError } 801 - api is not supported.
   * @throws { BusinessError } 12000002 - the provider param is missing.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000019 - the provider is already registered.
   * @throws { BusinessError } 12000020 - an error occured in the dependent module.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  function registerProvider(providerName: string, params: Array<HuksExternalCryptoParam>): Promise<void>;

  /**
   * Unregister the external key provider named by providerName.
   *
   * @permission  ohos.permission.CRYPTO_EXTENSION_REGISTER
   * @param { string } providerName - providerName indicates the name of the external crypto provider
   *     and must be globally unique. One effective way is to include manufacturer information.
   * @param { Array<HuksExternalCryptoParam> } [params] - params indicates the properties of the operation.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - check permission failed.
   * @throws { BusinessError } 801 - api is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000011 - the provider is not found.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000020 - an error occured in the dependent module.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  function unregisterProvider(providerName: string, params?: Array<HuksExternalCryptoParam>): Promise<void>;

  /**
   * Pin auth for the specified ukey resource id.
   *
   * @param { string } resourceId - resourceId indicates the resource id of the provider.
   * @param { Array<HuksExternalCryptoParam> } params - params indicates the properties of the operation.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - api is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - error occurred in crypto engine.
   * @throws { BusinessError } 12000011 - queried entity does not exist.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000020 - an error occured in the dependent module.
   * @throws { BusinessError } 12000021 - the pin code is incorrect.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @systemapi this method can be used only by system applications.
   * @since 22
   */
  function authUkeyPin(resourceId: string, params: Array<HuksExternalCryptoParam>): Promise<void>;

  /**
   * Get the pin auth state of the specified ukey resource id.
   *
   * @param { string } resourceId - resourceId indicates the resource id of the provider.
   * @param { Array<HuksExternalCryptoParam> } [params] - params indicates the properties of the operation.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 801 - api is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000020 - an error occured in the dependent module.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  function getUkeyPinAuthState(resourceId: string, params?: Array<HuksExternalCryptoParam>): Promise<boolean>;
}

export default huksExternalCrypto;