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
     * Number of the int type.
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
     * Extra data. The format and content are defined by the provider.
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
     * Purpose of the certificate chain.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_PURPOSE = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_INT | 200005,
    /**
     * Specify the information required to obtain the resource ID. The format and content are defined by the provider.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    HUKS_EXT_CRYPTO_TAG_RESOURCE_INFO = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200007,
    /**
     * Specifies the ability configuration for the custom PIN dialog.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    HUKS_EXT_CRYPTO_TAG_ABILITY_INFO = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200008,
    /**
     * Specifies the hap bundle name of the crypto extension ability.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    HUKS_EXT_CRYPTO_TAG_BUNDLE_NAME = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200009
  }

  /**
   * Enumerates the PIN auth states.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export enum HuksExternalPinAuthState {
    /**
     * UKey PIN is not authenticated.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_PIN_NO_AUTH = 0,
    /**
     * UKey PIN is authenticated.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED = 1,
    /**
     * UKey PIN is locked.
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_PIN_LOCKED = 2
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
   * @throws { BusinessError } 12000002 - the ability name param is missing.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000019 - the provider is already registered.
   * @throws { BusinessError } 12000020 - an error occurred in the dependent module.
   * @throws { BusinessError } 12000025 - the number of providers exceeds the limit.
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
   * @throws { BusinessError } 12000012 - Device environment or input parameter is abnormal.
   *     This may happen for several reasons, such as the model already being unloaded.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  function unregisterProvider(providerName: string, params?: Array<HuksExternalCryptoParam>): Promise<void>;

  /**
   * PIN auth for the specified UKey resource ID.
   *
   * @param { string } resourceId - resourceId indicates the resource id of the provider.
   * @param { Array<HuksExternalCryptoParam> } params - params indicates the properties of the operation.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 202 -  The caller is not a system application
   *     and is not allowed to use system applications.
   * @throws { BusinessError } 801 - api is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - the UKey driver operation failed.
   * @throws { BusinessError } 12000011 - queried entity does not exist.
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal.
   *     This error may occur if the process function is not found, or due to other issues.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000020 - the provider operation failed.
   * @throws { BusinessError } 12000021 - the UKey PIN is locked.
   * @throws { BusinessError } 12000022 - the UKey PIN is incorrect.
   * @throws { BusinessError } 12000024 - the provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @systemapi this method can be used only by system applications.
   * @since 22
   */
  function authUkeyPin(resourceId: string, params: Array<HuksExternalCryptoParam>): Promise<void>;

  /**
   * Get the PIN auth state of the specified UKey resource id.
   *
   * @param { string } resourceId - resourceId indicates the resource id of the provider.
   * @param { Array<HuksExternalCryptoParam> } [params] - params indicates the properties of the operation.
   * @returns { Promise<HuksExternalPinAuthState> } the promise returned by the function.
   * @throws { BusinessError } 801 - api is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - the UKey driver operation failed.
   * @throws { BusinessError } 12000011 - queried entity does not exist. This may happen
   *     because the resource ID has not been opened.
   * @throws { BusinessError } 12000012 - Device environment or input parameter is abnormal.
   *     This error may occur if the process function is not found, or due to other issues.
   * @throws { BusinessError } 12000014 - memory is insufficient.
   * @throws { BusinessError } 12000018 - the input parameter is invalid.
   * @throws { BusinessError } 12000020 - the provider operation failed.
   * @throws { BusinessError } 12000024 - the provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  function getUkeyPinAuthState(resourceId: string, params?: Array<HuksExternalCryptoParam>): Promise<HuksExternalPinAuthState>;

  /**
   *  Clear the PIN auth state of the specified resource ID.
   *
   * @param { string } resourceId - Indicates the resource ID of the provider.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - Failed to call the UKey driver interface.
   *     Please check the UKey connection and driver status.
   * @throws { BusinessError } 12000011 - The cached resource ID not found.
   * @throws { BusinessError } 12000012 - Device environment or input parameters are abnormal.
   *     This may occur if the process function is null, or due to other issues.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000018 - The input parameters are invalid. Possible causes:
   *     1. The resourceId length is invalid.
   * @throws { BusinessError } 12000020 - The provider operation failed.
   *     This means an error occurred in the crypto extension before calling the UKey driver interface.
   * @throws { BusinessError } 12000024 - The provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  function clearUkeyPinAuthState(resourceId: string): Promise<void>;

  /**
   * The general get operation of the external provider.
   *
   * @param { string } resourceId - Indicates the resource id of the provider.
   * @param { string } propertyId - Indicates the id of the property needed to get.
   *     Currently supports the property method names defined in GMT 0016-2023.
   * @param { Array<HuksExternalCryptoParam> } [params] - Indicates the input operation parameters.
   * @returns { Promise<Array<HuksExternalCryptoParam>> } The promise returned by the function.
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - If the UKey driver operation failed. Possible causes:
   *     1. Error reported when the provider accesses the SKF interface of UKey.
   * @throws { BusinessError } 12000011 - If the cached resource ID is not found.
   * @throws { BusinessError } 12000012 - Device environment or input parameter is abnormal.
   *     This error may occur if the process function is not found, or due to other issues.
   * @throws { BusinessError } 12000014 - If the memory is insufficient.
   * @throws { BusinessError } 12000018 - Input parameter is invalid. Possible causes:
   *     1. The resourceId or propertyId length is invalid.
   *     2. The params contains invalid tags or invalid value types.
   * @throws { BusinessError } 12000020 - If the provider operation failed. Possible causes:
   *     1. The provider experienced an internal processing error.
   * @throws { BusinessError } 12000021 - The UKey PIN is locked.
   * @throws { BusinessError } 12000023 - The UKey PIN is not authenticated.
   * @throws { BusinessError } 12000024 - If the provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  function getProperty(resourceId: string, propertyId: string, params?: Array<HuksExternalCryptoParam>): Promise<Array<HuksExternalCryptoParam>>;
  /**
   * Obtain the resource ID of the provider.
   *
   * @param { string } providerName - Indicates the name of the external crypto provider
   *     and must be globally unique. One effective way is to include manufacturer information.
   * @param { HuksExternalCryptoParam[] } params - Indicates the input operation parameters,
   *     including the bundle name, ability name, and the related information to get the resource ID.
   * @returns { Promise<string> } The promise returned by the function.
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000002 - The ability name or bundle name parameter is missing.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000011 - The provider is not found.
   * @throws { BusinessError } 12000012 - Device environment or input parameters are abnormal.
   *     This error may occur if the process function is not found, or due to other issues.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000018 - Input parameters are invalid. Possible causes:
   *     1. The providerName length is invalid.
   *     2. The parameters contain invalid tags or invalid value types.
   * @throws { BusinessError } 12000020 - The provider operation failed.
   *     This means an error occurred in the crypto extension before calling the UKey driver interface.
   * @throws { BusinessError } 12000024 - The provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  function getResourceId(providerName: string, params: HuksExternalCryptoParam[]): Promise<string>;
  /**
   * Open resource by specific resource ID.
   * NOTE: The opened resource must be closed using closeResource.
   *
   * @param { string } resourceId - Indicates the resource ID of the provider.
   * @param { HuksExternalCryptoParam[] } [params] - Indicates the input operation parameters.
   * @returns { Promise<void> } Return value of the Promise type
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - Failed to call the UKey driver interface.
   *     Please check the UKey connection and driver status.
   * @throws { BusinessError } 12000011 - The cached resource ID is not found.
   *     This may happen because the resource ID has not been opened.
   * @throws { BusinessError } 12000012 - Device environment or input parameters are abnormal.
   *     This error may occur if the process function is not found, or due to other issues.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000017 - The resource with the resource ID is already open.
   * @throws { BusinessError } 12000018 - Input parameters are invalid. Possible causes:
   *     1. The resourceId length is invalid.
   *     2. The parameters contain invalid tags or invalid value types.
   * @throws { BusinessError } 12000020 - The provider operation failed.
   *     This means an error occurred in the crypto extension before calling the UKey driver interface.
   * @throws { BusinessError } 12000024 - The provider or UKey is busy.
   * @throws { BusinessError } 12000025 - The opened resources exceed the limit.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  function openResource(resourceId: string, params?: HuksExternalCryptoParam[]): Promise<void>;

  /**
   * Close the resource with a specific resource ID.
   *
   * @param { string } resourceId - Indicates the resource ID of the provider.
   * @param { HuksExternalCryptoParam[] } [params] - Indicates the input operation parameters.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - Failed to call the UKey driver interface.
   *     Please check the UKey connection and driver status.
   * @throws { BusinessError } 12000012 - Device environment or input parameters are abnormal.
   *     This error may occur if the process function is not found, or due to other issues.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000018 - Input parameters are invalid. Possible causes:
   *     1. The resourceId length is invalid.
   *     2. The parameters contain invalid tags or invalid value types.
   * @throws { BusinessError } 12000020 - The provider operation failed.
   *     This means an error occurred in the crypto extension before calling the UKey driver interface.
   * @throws { BusinessError } 12000024 - The provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  function closeResource(resourceId: string, params?: HuksExternalCryptoParam[]): Promise<void>;
}

export default huksExternalCrypto;