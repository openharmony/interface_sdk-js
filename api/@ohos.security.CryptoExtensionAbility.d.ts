
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
 * Represents the information of certificate.
 *
 * @typedef HuksCryptoExtensionCertInfo
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
export interface HuksCryptoExtensionCertInfo {
  /**
   * The type of the cerificate, sign or encrypt.
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
   * The left retry counts when pin is incorrect.
   *
   * @type { ?int }
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  retryCount?: int;
  /**
   * The cert array.
   *
   * @type { ?Array<HuksCryptoExtensionCertInfo>}
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  certs?: Array<HuksCryptoExtensionCertInfo>;
  /**
   * Returned property info.
   *
   * @type { ?Array<HuksExternalCrypto.HuksExternalCryptoParam>}
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  property?: Array<HuksExternalCrypto.HuksExternalCryptoParam>;
  /**
   * Returned data.
   *
   * @type { ?Uint8Array}
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  outData?:Uint8Array;
}

/**
 * Class to be override for external crypto extension ability.
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
declare class CryptoExtensionAbility {

  /**
   * Callback to be called to open the resource handle before crypto operations.
   * NOTE: the handle returned must be closed by onCloseRemoteHandle.
   *
   * @param { string }  resourceId -  resourceId indicates the resource id of the provider.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onOpenResource(resourceId: string,
      params: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be called to close the resource handle.
   *
   * @param { string }  handle -  handle indicates the handle opened by onOpenRemoteHandle.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onCloseResource(handle: string,
      params: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be called to do general get operations of the provider.
   *
   * @param { string }  handle -  handle indicates the handle opened by onOpenRemoteHandle.
   * @param { string }  propertyId -  propertyId indicates the name of the property function
   *     to operate defined in GMT 0016-2023.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onGetProperty(handle: string, propertyId: string,
      params: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be called to verify pin of the provider handle.
   *
   * @param { string }  handle -  handle indicates the handle opened by onOpenRemoteHandle.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onAuthUkeyPin(handle: string,
      params: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be get the pin auth state of the provider handle.
   *
   * @param { string }  handle -  handle indicates the handle opened by onOpenRemoteHandle.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onGetUkeyPinAuthState(handle: string,
      params: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to be clear the pin auth state of the provider handle.
   *
   * @param { string }  handle -  handle indicates the handle opened by onOpenRemoteHandle.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } params - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onClearUkeyPinAuthState(handle: string,
      params: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to do init operation.
   *
   * @param { string }  handle -  handle indicates the handle opened by onOpenRemoteHandle.
   * @param { huks.HuksOptions } params - params indicates the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onInitSession(handle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;
  /**
   * Callback to do update operation.
   *
   * @param { string }  initHandle -  initHandle indicates the handle returned by onInitSession.
   * @param { huks.HuksOptions } params - params indicates the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onUpdateSession(initHandle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to do finish operation.
   *
   * @param { string }  initHandle -  initHandle indicates the handle returned by onInitSession.
   * @param { huks.HuksOptions } params - params indicates the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onFinishSession(initHandle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to export certificates specific by the resource id.
   *
   * @param { string }  resourceId -  resourceId indicates the resource id of the extension.
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } [params] - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onExportCertificate(resourceId: string,
      params?: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to list all certificates of the provider.
   *
   * @param { Array<HuksExternalCrypto.HuksExternalCryptoParam> } [params] - params indicates
   *     the properties of the operation.
   * @returns { Promise<HuksCryptoExtensionResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onEnumCertificates(params?: Array<HuksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;
}

export default CryptoExtensionAbility;