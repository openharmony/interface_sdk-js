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

import huks from '@ohos.security.huks';
import huksExternalCrypto from '@ohos.security.huksExternalCrypto';
import certificateManager from '@ohos.security.certManager';

/**
 * Enum for crypto extension ability result code, used by HuksCryptoExtensionResult.resultCode.
 *
 * @enum { int }
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @stagemodelonly
 * @since 22
 */
export const enum HuksCryptoExtensionResultCode {
  /**
   * An error occurred in the crypto extension. Possible causes:
   * 1. The input parameter is invalid.
   * 2. The crypto extension encountered an unresolvable error state.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL = 34800000,
  /**
   * The UKey does not exist. Possible causes:
   * 1. The UKey has been removed.
   * 2. The crypto extension maintained an error UKey state.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_UKEY_NOT_EXIST = 34800001,
  /**
   * The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_UKEY_DRIVER_FAIL = 34800002,
  /**
   * The UKey PIN is not authenticated. Please verify the UKey PIN first.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_PIN_NO_AUTH = 34800003,
  /**
   * The handle does not exist. Possible causes:
   * 1. The handle you entered is invalid.
   * 2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   * the handle held by huks service was not released.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_HANDLE_NOT_EXIST = 34800004,
  /**
   * The handle is unavailable, possibly due to an inconsistent state between the crypto extension and the UKey.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_HANDLE_UNAVAILABLE = 34800005,
  /**
   * The UKey PIN is not correct. Please check the PIN you entered.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_PIN_INCORRECT = 34800006,
  /**
   * The UKey PIN is locked because the maximum allowed number of attempts has been exceeded.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_PIN_LOCKED = 34800007
}

/**
 * Represents the information of certificate.
 *
 * @typedef HuksCryptoExtensionCertInfo
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
export interface HuksCryptoExtensionCertInfo {
  /**
   * The type of the certificate, sign or encrypt.
   *
   * @type { certificateManager.CertificatePurpose }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  purpose: certificateManager.CertificatePurpose;
  /**
   * The resource index of the certificate.
   *
   * @type { string }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  resourceId: string;
  /**
   * The content of the certificate.
   *
   * @type { Uint8Array }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  cert: Uint8Array;
}

/**
 * Represents the operation result of crypto extension.
 *
 * @typedef HuksCryptoExtensionResult
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
export interface HuksCryptoExtensionResult {
  /**
   * Returned code.
   *
   * @type { int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  resultCode: int;
  /**
   * The provider resource handle.
   *
   * @type { ?string }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  handle?: string;
  /**
   * Auth state.
   *
   * @type { ?int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  authState?: int;
  /**
   * The remaining retry count when the PIN is incorrect.
   *
   * @type { ?int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  retryCount?: int;
  /**
   * The cert array.
   *
   * @type { ?Array<HuksCryptoExtensionCertInfo> }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  certs?: Array<HuksCryptoExtensionCertInfo>;
  /**
   * Returned property info.
   *
   * @type { ?Array<huksExternalCrypto.HuksExternalCryptoParam> }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  property?: Array<huksExternalCrypto.HuksExternalCryptoParam>;
  /**
   * Returned data.
   *
   * @type { ?Uint8Array }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  outData?: Uint8Array;

  /**
   * The returned resource ID.
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  resourceId?: string;
}

/**
 * Class to be override for external crypto extension ability.
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
declare class CryptoExtensionAbility {
  /**
   *  Callback to get the resource ID of the crypto extension.
   *
   * @param { huksExternalCrypto.HuksExternalCryptoParam[] } params - Indicates the needed properties of
   *     the get resource ID operation.
   * @returns { Promise<HuksCryptoExtensionResult> } The promise returned by the function.
   *     If the function execution fails, the extension needs to set the detailed error information in
   *     HuksCryptoExtensionResult.errInfo.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onGetResourceId(params: huksExternalCrypto.HuksExternalCryptoParam[]):Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be called to open the resource handle before crypto operations.
   * NOTE: the handle returned must be closed by onCloseResource.
   *
   * @param { string } resourceId - resourceId indicates the resource id of the provider.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *     1. The input parameter is invalid.
   *     2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *     1. The UKey has been removed.
   *     2. The crypto extension maintained an error UKey state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800004 - The resourceId does not exist. This indicates that the resourceId has
   *     an incorrect device name, application name, or container name.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onOpenResource(resourceId: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be called to close the resource handle.
   *
   * @param { string } handle - handle indicates the handle opened by onOpenResource.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onCloseResource(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be called to do general get operations of the provider.
   *
   * @param { string } handle - handle indicates the handle opened by onOpenResource.
   * @param { string } propertyId - propertyId indicates the name of the property function
   *     to be operated as defined in GMT 0016-2023.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   *     34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onGetProperty(handle: string, propertyId: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;
      
  /**
   * Callback to be called to verify PIN of the provider handle.
   *
   * @param { string } handle - handle indicates the handle opened by onOpenResource.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *     1. The input parameter is invalid.
   *     2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800004 - The handle does not exist. Possible causes:
   *     1. The handle you entered is invalid.
   *     2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *     the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *     between the crypto extension and the UKey.
   *     34800006 - The UKey PIN is not correct. Please check the PIN you entered.
   *     34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onAuthUkeyPin(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to get the PIN auth state of the provider handle.
   *
   * @param { string } handle - handle indicates the handle opened by onOpenResource.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onGetUkeyPinAuthState(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to clear the PIN auth state of the provider handle.
   *
   * @param { string } handle - handle indicates the handle opened by onOpenResource.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onClearUkeyPinAuthState(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to do the initialize operation.
   *
   * @param { string } handle - handle indicates the handle opened by onOpenResource.
   * @param { huks.HuksOptions } params - params indicates the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   *     34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onInitSession(handle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;
  /**
   * Callback to do update operation.
   *
   * @param { string } initHandle - initHandle indicates the handle returned by onInitSession.
   * @param { huks.HuksOptions } params - params indicates the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   *     34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onUpdateSession(initHandle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to do the finish operation.
   *
   * @param { string } initHandle - initHandle indicates the handle returned by onInitSession.
   * @param { huks.HuksOptions } params - params indicates the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800003 - The UKey PIN is not authenticated. Please verify the UKey PIN first.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   *     34800007 - The UKey PIN is locked because the maximum allowed number of attempts has been exceeded.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onFinishSession(initHandle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to export certificates specified by the resource id.
   *
   * @param { string } resourceId - resourceId indicates the resource id of the extension.
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } [params] - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *                1. The UKey has been removed.
   *                2. The crypto extension maintained an error UKey state.
   *     34800002 - The UKey driver error. This means an unknown error has occurred in the UKey driver.
   *     34800004 - The resourceId does not exist. This indicates that the resourceId has
   *                an incorrect device name, application name, or container name.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onExportCertificate(resourceId: string,
      params?: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to import a certificate specified by the resource handle.
   *
   * @param { string } handle - Indicates the import certificate's resource handle.
   * @param { HuksCryptoExtensionCertInfo } certInfo - Indicates the certificate information to be imported.
   * @param { huksExternalCrypto.HuksExternalCryptoParam[] } [params] - Indicates
   *     the needed properties for the import certificate operation.
   * @returns { Promise<HuksCryptoExtensionResult> } The promise returned by the function.
   *     If the function execution fails, the extension needs to set the detailed error information in
   *     HuksCryptoExtensionResult.errInfo.
   *     HuksCryptoExtensionResult.resultCode may have the following values.
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *                1. The UKey has been removed.
   *                2. The crypto extension maintains an error UKey state.
   *     34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onImportCertificate(handle: string, certInfo: HuksCryptoExtensionCertInfo,
      params?: huksExternalCrypto.HuksExternalCryptoParam[]): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to list all certificates of the provider.
   *
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } [params] - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *                1. The UKey has been removed.
   *                2. The crypto extension maintained an error UKey state.
   *     34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onEnumCertificates(params?: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to generate a key pair specified by the resource handle.
   *
   * @param { string } handle - Indicates the resource handle of the key to be generated.
   * @param { huks.HuksParam[] } params - Indicates the properties of the key generation operation.
   * @returns { Promise<HuksCryptoExtensionResult> } The promise returned by the function.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *                1. The UKey has been removed.
   *                2. The crypto extension maintains an error UKey state.
   *     34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onGenerateKeyItem(handle: string, params: huks.HuksParam[]): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to export the public key specified by the resource handle.
   *
   * @param { string } handle - Indicates the resource handle of the key to be exported.
   * @param { huks.HuksParam[] } params - Indicates the needed properties of the export public key operation.
   * @returns { Promise<HuksCryptoExtensionResult> } The promise returned by the function.
   *     If the function execution fails, the extension needs to set the detailed error information in
   *     HuksCryptoExtensionResult.errInfo.
   *     HuksCryptoExtensionResult.resultCode may have the following values.
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *                1. The UKey has been removed.
   *                2. The crypto extension maintains an error UKey state.
   *     34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of huks service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by huks service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onExportKeyItem(handle: string, params: huks.HuksParam[]): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to import the wrapped key pair specified by the resource handle.
   *
   * @param { string } handle - Indicates the resource handle of the wrapped key to be imported.
   * @param { string } wrappedHandle - Indicates the resource handle of the key used to unwrap the imported key.
   * @param { huks.HuksParam[] } params - Indicates the needed properties for the import wrapped key operation.
   * @param { Uint8Array } wrappedKey - Indicates the wrapped key data, which format is defined by the crypto extension.
   * @returns { Promise<HuksCryptoExtensionResult> } The promise returned by the function.
   *     If the function execution fails, the extension needs to set the detailed error information in
   *     HuksCryptoExtensionResult.errInfo.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *                1. The input parameter is invalid.
   *                2. The crypto extension encountered an unresolvable error state.
   *     34800001 - The UKey does not exist. Possible causes:
   *                1. The UKey has been removed.
   *                2. The crypto extension maintains an error UKey state.
   *     34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.
   *     34800004 - The handle does not exist. Possible causes:
   *                1. The handle you entered is invalid.
   *                2. The states of HUKS service and crypto extension are inconsistent. Due to an exception,
   *                the handle held by HUKS service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *                between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onImportWrappedKeyItem(handle: string, wrappedHandle: string, params: huks.HuksParam[],
      wrappedKey: Uint8Array): Promise<HuksCryptoExtensionResult>;
}

export default CryptoExtensionAbility;