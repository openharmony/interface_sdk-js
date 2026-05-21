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
 * [HuksCryptoExtensionResult]{@link HuksCryptoExtensionResultCode}中的resultCode枚举值。
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @stagemodelonly
 * @since 22
 */
export const enum HuksCryptoExtensionResultCode {
  /**
   * 密钥扩展错误。可能的原因：
   * 
   * 1. 输入参数无效。
   * 2. 密钥扩展出现无法解决的错误状态。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL = 34800000,
  /**
   * UKey不存在。可能的原因：
   * 
   * 1. UKey已被移除。
   * 2. 密钥扩展陷入错误的UKey状态。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_UKEY_NOT_EXIST = 34800001,
  /**
   * UKey驱动出现未知错误。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_UKEY_DRIVER_FAIL = 34800002,
  /**
   * UKey PIN码未认证，需要先认证Ukey PIN码。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_PIN_NO_AUTH = 34800003,
  /**
   * 句柄不存在。可能的原因：
   * 
   * 1. 句柄无效。
   * 2. HUKS服务和密钥扩展的状态不一致。由于异常情况，HUKS服务持有的句柄未能释放。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_HANDLE_NOT_EXIST = 34800004,
  /**
   * 句柄不可用。可能的原因：
   * 
   * 密钥扩展和Ukey的状态不一致。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_HANDLE_UNAVAILABLE = 34800005,
  /**
   * UKey PIN码错误，需要检查输入的PIN码。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_PIN_INCORRECT = 34800006,
  /**
   * UKey PIN码被锁。可能的原因：
   * 
   * PIN码输入错误次数过多。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 22
   */
  HUKS_CRYPTO_EXTENSION_ERR_PIN_LOCKED = 34800007
}

/**
 * [HuksCryptoExtensionResult]{@link HuksCryptoExtensionResultCode}中的certs数组中的元素。
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
export interface HuksCryptoExtensionCertInfo {
  /**
   * 表示证书链对应密钥的使用类型。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  purpose: certificateManager.CertificatePurpose;
  /**
   * 资源ID。JSON格式，能够映射到Ukey中的某个资源。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  resourceId: string;
  /**
   * 证书。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  cert: Uint8Array;
}

/**
 * 接口返回值的通用类型。
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
export interface HuksCryptoExtensionResult {
  /**
   * 返回值的错误码。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  resultCode: int;
  /**
   * 资源句柄。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  handle?: string;
  /**
   * 认证状态。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  authState?: int;
  /**
   * 重试次数。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  retryCount?: int;
  /**
   * 证书。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  certs?: Array<HuksCryptoExtensionCertInfo>;
  /**
   * 属性。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  property?: Array<huksExternalCrypto.HuksExternalCryptoParam>;
  /**
   * 返回的数据。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  outData?: Uint8Array;
  /**
   * 返回的资源ID。
   * 
   * 26.0.0
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  resourceId?: string;
  /**
   * 返回详细错误信息
   *
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  errInfo?: huksExternalCrypto.HuksExternalErrorInfo;
}

/**
 * Class to be override for external crypto extension ability.
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
declare class CryptoExtensionAbility {
  /**
   * 获取外部扩展设备内的资源ID。使用Promise异步回调。
   *
   * @param { huksExternalCrypto.HuksExternalCryptoParam[] } params - 获取资源ID所需的属性参数。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，resourceId携带资源ID信息。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onGetResourceId(params: huksExternalCrypto.HuksExternalCryptoParam[]):Promise<HuksCryptoExtensionResult>;

  /**
   * 根据参数中的resourceId，打开Ukey的密钥资源。使用Promise异步回调。
   *
   * @param { string } resourceId - 资源ID。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，handle携带资源句柄信息。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800001 - Ukey不存在。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onOpenResource(resourceId: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 根据参数中的handle，关闭Ukey的密钥资源。使用Promise异步回调。
   *
   * @param { string } handle - 会话句柄。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，表示关闭资源成功。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onCloseResource(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 根据参数中的handle和propertyId获取属性。使用Promise异步回调。
   *
   * @param { string } handle - 资源句柄。
   * @param { string } propertyId - 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，要业务针对接口名适配。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，HuksCryptoExtensionResult的property成员非空，
   * 包含获取到的属性，由HUKS_EXT_CRYPTO_TAG_EXTRA_DATA参数携带。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800003 - Ukey PIN码未认证。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onGetProperty(handle: string, propertyId: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;
  /**
   * 用于执行提供程序的set操作的回调。
   *
   * @param { string } handle - set操作的资源句柄。
   * @param { string } propertyId - 需要设置的属性的ID。
   *     目前支持GMT 0016-2023定义的部分方法名和自定义方法。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作参数。
   *     此参数包含与需要设置的属性ID相关的参数。
   * @returns { Promise<HuksCryptoExtensionResult> } 函数返回的promise。 如果函数执行失败，扩展需要在HuksCryptoExtensionResult.errInfo设置详细信息.  HuksCryptoExtensionResult.resultCode可能具有以下值：
   *     0-操作成功。
   *     34800000 -加密扩展中发生错误。可能原因：
   *     1.输入参数非法。
   *     2.加密扩展遇到无法解析的错误状态。
   *     34800002 -调用UKey驱动接口失败。请检查UKey连接和驱动程序状态。
   *     34800003-UKey PIN未鉴权。请先验证UKey PIN码。
   *     34800004 -句柄不存在。可能原因：
   *     1.输入的句柄无效。
   *     2.HUKS服务和加密扩展的状态不一致。由于异常，
   *     HUKS服务持有的句柄没有释放。
   *     34800005 -句柄不可用，可能是因为状态不一致
   *     在加密扩展和UKey之间。
   *     34800007-UKey PIN被锁定，因为已超过允许的最大尝试次数。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onSetProperty(handle: string, propertyId: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;
  /**
   * 请求Ukey认证PIN码。使用Promise异步回调。
   *
   * @param { string } handle - 资源句柄。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，authState非0，表示认证请求成功。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * 34800006 - Ukey PIN码错误。
   * 34800007 - Ukey PIN码被锁。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onAuthUkeyPin(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 获取Ukey的PIN码认证状态。使用Promise异步回调。
   *
   * @param { string } handle - 资源句柄。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，HuksCryptoExtensionResult的authState成员非空，为获取的PIN码认证状态。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onGetUkeyPinAuthState(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 清除应用维度PIN码的认证状态。使用Promise异步回调。
   *
   * @param { string } handle - 会话句柄。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，表示清除PIN码认证状态成功。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onClearUkeyPinAuthState(handle: string,
      params: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 三段式初始化密钥会话操作。使用Promise异步回调。
   *
   * @param { string } handle - 资源句柄。
   * @param { huks.HuksOptions } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，handle成员非空。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800003 - Ukey PIN码未认证。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * 34800007 - Ukey PIN码被锁。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onInitSession(handle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;
  /**
   * 三段式密钥会话更新数据操作。使用Promise异步回调。
   *
   * @param { string } initHandle - 资源句柄。
   * @param { huks.HuksOptions } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800003 - Ukey PIN码未认证。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * 34800007 - Ukey PIN码被锁。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onUpdateSession(initHandle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;

  /**
   * 三段式密钥会话结束操作。使用Promise异步回调。
   *
   * @param { string } initHandle - 资源句柄。
   * @param { huks.HuksOptions } params - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800002 - Ukey驱动错误。
   * 34800003 - Ukey PIN码未认证。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * 34800007 - Ukey PIN码被锁。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onFinishSession(initHandle: string, params: huks.HuksOptions): Promise<HuksCryptoExtensionResult>;

  /**
   * 查询指定resourceId下的证书。使用Promise异步回调。
   *
   * @param { string } resourceId - 资源ID。会附带在HuksCryptoExtensionCertInfo中。
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } [params] - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，certs成员非空，包含获取的单本证书。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800001 - Ukey不存在。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onExportCertificate(resourceId: string,
      params?: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 导入指定资源句柄的证书。使用Promise异步回调。
   *
   * @param { string } handle - 导入证书的资源句柄。
   * @param { huksExternalCrypto.HuksExternalCryptoParam[] } params - 导入证书所需的属性参数。
   * @param { HuksCryptoExtensionCertInfo } certInfo - 待导入的证书信息。需指定证书类型（purpose）。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，表示导入证书成功。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800001 - Ukey不存在。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onImportCertificate(handle: string, params: huksExternalCrypto.HuksExternalCryptoParam[],
      certInfo: HuksCryptoExtensionCertInfo): Promise<HuksCryptoExtensionResult>;

  /**
   * 枚举Extension下所有Ukey设备的证书信息。使用Promise异步回调。
   *
   * @param { Array<huksExternalCrypto.HuksExternalCryptoParam> } [params] - 操作属性。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，certs成员非空，包含获取的所有证书。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800001 - Ukey不存在。
   * 34800002 - Ukey驱动错误。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  onEnumCertificates(params?: Array<huksExternalCrypto.HuksExternalCryptoParam>): Promise<HuksCryptoExtensionResult>;

  /**
   * 用于在扩展设备内生成密钥对。使用Promise异步回调。
   *
   * @param { string } handle - 待生成密钥的资源句柄。
   * @param { huks.HuksParam[] } params - 密钥生成操作的属性参数。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，表示生成密钥成功。调用失败时，resultCode携带错误码信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800001 - Ukey不存在。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onGenerateKeyItem(handle: string, params: huks.HuksParam[]): Promise<HuksCryptoExtensionResult>;

  /**
   * 用于导出指定密钥的公钥。使用Promise异步回调。
   *
   * @param { string } handle - 待导出公钥的资源句柄。
   * @param { huks.HuksParam[] } params - 导出公钥操作的属性参数。
   * @returns { Promise<HuksCryptoExtensionResult> } Promise对象。
   * 当调用成功时，resultCode为0，outData携带导出的公钥数据。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。
   * 可能返回的错误码值：
   * 0 - 调用成功。
   * 34800000 - 密钥扩展错误。
   * 34800001 - Ukey不存在。
   * 34800002 - Ukey驱动错误。
   * 34800004 - 句柄不存在。
   * 34800005 - 句柄不可用。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onExportKeyItem(handle: string, params: huks.HuksParam[]): Promise<HuksCryptoExtensionResult>;

  /**
   * Callback to import the wrapped key pair specified by the resource handle.
   *
   * @param { string } handle - Indicates the resource handle of the wrapped key to be imported.
   * @param { string } wrappingHandle - Indicates the resource handle of the key used to unwrap the imported key.
   * @param { huks.HuksParam[] } params - Indicates the needed properties for the import wrapped key operation.
   * @param { Uint8Array } wrappedKey - Indicates the wrapped key data, which format is defined by the crypto extension.
   * @returns { Promise<HuksCryptoExtensionResult> } The promise returned by the function.
   *     If the function execution fails, the extension needs to set the detailed error information in
   *     HuksCryptoExtensionResult.errInfo.
   *     HuksCryptoExtensionResult.resultCode may have the following values:
   *     0 - The operation is successful.
   *     34800000 - An error occurred in the crypto extension. Possible causes:
   *     1. The input parameter is invalid.
   *     2. The crypto extension encountered an unresolvable error state.
   *     34800002 - Failed to call the UKey driver interface. Please check the UKey's connection and driver status.
   *     34800004 - The handle does not exist. Possible causes:
   *     1. The handle you entered is invalid.
   *     2. The states of HUKS service and crypto extension are inconsistent. Due to an exception,
   *     the handle held by HUKS service was not released.
   *     34800005 - The handle is unavailable, possibly due to an inconsistent state
   *     between the crypto extension and the UKey.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  onImportWrappedKeyItem(handle: string, wrappingHandle: string, params: huks.HuksParam[],
      wrappedKey: Uint8Array): Promise<HuksCryptoExtensionResult>;
}

export default CryptoExtensionAbility;