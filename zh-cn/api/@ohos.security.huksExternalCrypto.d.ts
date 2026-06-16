/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @file External Key Management
 * @kit UniversalKeystoreKit
 */

/**
 * 模块提供外部密钥管理扩展功能的注册与注销，PIN码认证与认证状态获取等。
 *
 * @syscap SystemCapability.Security.Huks.CryptoExtension
 * @since 22
 */
declare namespace huksExternalCrypto {

  /**
   * 表示外部加密数据类型的枚举。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export enum HuksExternalCryptoTagType {

    /**
     * 表示TAG的值为整数类型。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_TYPE_INT = 1 << 28,

    /**
     * 表示TAG的值为字节数组。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_TYPE_BYTES = 5 << 28
  }

  /**
   * 表示调用参数的Tag。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export enum HuksExternalCryptoTag {

    /**
     * 表示PIN码的TAG。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_UKEY_PIN = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200001,

    /**
     * 表示[CryptoExtensionAbility]{@link @ohos.security.CryptoExtensionAbility}的名称。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_ABILITY_NAME = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200002,

    /**
     * 外部数据，在通用查询场景，表示返回的数据。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_EXTRA_DATA = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200003,

    /**
     * 表示调用方的uid。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_UID = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_INT | 200004,

    /**
     * 表示证书链对应密钥的使用类型，具体类型详见
     * [CertificatePurpose定义]{@link @ohos.security.certManager:certificateManager.CertificatePurpose}。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_TAG_PURPOSE = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_INT | 200005,

    /**
     * 表示获取资源ID所需的信息，格式和内容由厂商自定义。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    HUKS_EXT_CRYPTO_TAG_RESOURCE_INFO = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200007,

    /**
     * 表示密钥管理扩展自定义PIN码弹窗相关Ability列表信息，在注册密钥管理扩展时，同步注册，详见
     * [provider注册示例](docroot://security/UniversalKeystoreKit/huks-extension-registration-and-unregistration-arkts.md)。注
     * 册了自定义弹窗，则在PIN码认证时允许拉起自定义弹窗，进行PIN码认证等操作。
     * 
     * HUKS_EXT_CRYPTO_TAG_ABILITY_NAME中的JSON列表由多个JSON对象组成，每个JSON对象包含两个字段：AbilityName和index。字段应遵循以下要求：
     * 
     * 1.AbilityName：长度范围为1~128字节。
     * 
     * 2.index：其值为resourceId，最大长度为512字节。允许单个CryptoExtension下该字段为空，为空时传输空字符串，该字段不允许重复。在搜索时优先匹配index对应的UIExtensionAbility，
     * 当不存在时返回index为空的UIExtensionAbility。
     * 
     * 26.0.0
     * 
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    HUKS_EXT_CRYPTO_TAG_ABILITY_INFO = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200008,

    /**
     * 表示CryptoExtensionAbility所属的HAP Bundle名称。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    HUKS_EXT_CRYPTO_TAG_BUNDLE_NAME = HuksExternalCryptoTagType.HUKS_EXT_CRYPTO_TAG_TYPE_BYTES | 200009
  }

  /**
   * 枚举PIN认证的状态
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export enum HuksExternalPinAuthState {

    /**
     * Ukey PIN未认证。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_PIN_NO_AUTH = 0,

    /**
     * PIN认证成功
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED = 1,

    /**
     * UKey PIN码已锁定
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    HUKS_EXT_CRYPTO_PIN_LOCKED = 2
  }

  /**
   * 表示调用接口使用的param数组的类型。
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @since 22
   */
  export interface HuksExternalCryptoParam {

    /**
     * 参数标签，用于区分参数。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    tag: HuksExternalCryptoTag;

    /**
     * 标签对应值。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @since 22
     */
    value: boolean | int | bigint | Uint8Array;
  }

  /**
   * 详细错误信息
   *
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface HuksExternalErrorInfo {

    /**
     * 详细错误码
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    errno: number;

    /**
     * 错误描述
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @stagemodelonly
     * @since 26.0.0
     */
    errorDesc: string;
  }

  /**
   * 注册指定的外部provider。使用Promise异步回调。
   * 
   * 若需使用自定义PIN码弹窗，在注册provider时需要同步注册UIExtensionAbility，注意事项如下：
   * 
   * 1. 自定义ability通过UIExtensionAbility扩展实现。
   * 2. 注册的UIExtensionAbility可以通过证书管理kit提供的[openUKeyAuthDialog]{@link @ohos.security.certManager:certificateManager}接口统一拉起。
   *   
   * 3. 系统拉起自定义弹窗时会通过want接口向开发者传递以下参数：
   *     - Action：string参数类型，在拉起自定义弹窗时want传输的Action为"UkeyPINAuth"。
   *     - appUid：number参数类型，通过want.parameters传输。"appUid"字段为应用id，开发者可以通过该字段完成应用隔离。
   *     - keyUri：string参数类型其值为resourceId，通过want.parameters传输，表示Ukey证书的索引。
   *   
   * 4. 开发者实现UIExtensionAbility时，应用需根据指定场景返回对应的错误码：
   *     - 用户取消操作时，返回-1001。
   *     - keyUri指定的证书/密钥不存在时，返回-1008。
   *     - 参数格式错误时，返回-1014。
   *     - 其余失败场景返回错误码-1000，成功时返回0。
   *
   * @permission ohos.permission.CRYPTO_EXTENSION_REGISTER
   * @param { string } providerName - provider名称，最大长度为128。建议包含厂商信息，全局唯一，不要包含个人联系方式等敏感数据。<br>最多支持注册10个provider。
   * @param { Array<HuksExternalCryptoParam> } params - 操作时需传入的参数，必选TAG：
   *     [HUKS_EXT_CRYPTO_TAG_ABILITY_NAME]{@link huksExternalCrypto.HuksExternalCryptoTagType}，表示ability的名字，根据业务自己内部定义按
   *     照实际填写。<br>从API版本26.0.0开始，可选TAG：
   *     [HUKS_EXT_CRYPTO_TAG_ABILITY_INFO]{@link huksExternalCrypto.HuksExternalCryptoTagType}，以JSON列表的形式传入PIN码认证自定义弹窗
   *     UIExtensionAbility的名字以及包名。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 注销指定的外部provider。使用Promise异步回调。
   *
   * @permission  ohos.permission.CRYPTO_EXTENSION_REGISTER
   * @param { string } providerName - provider名称，最大长度为128。建议包含厂商信息，全局唯一，不要包含个人联系方式等敏感数据。如果provider注册了多个扩展能力，则该provider下的
   *     扩展能力都会被注销。
   * @param { Array<HuksExternalCryptoParam> } [params] - 操作时需传入的参数。<br>可以在param参数中指定
   *     [HUKS_EXT_CRYPTO_TAG_ABILITY_NAME]{@link huksExternalCrypto.HuksExternalCryptoTagType}，将根据“包名 + providerName +
   *     abilityName”注销对应的cryptoExtensionAbility。<br>如果未在params参数中指定
   *     [HUKS_EXT_CRYPTO_TAG_ABILITY_NAME]{@link huksExternalCrypto.HuksExternalCryptoTagType}，或者未传入params参数，则注销对应的
   *     providerName下的所有Provider。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * PIN码认证。使用Promise异步回调。
   *
   * @param { string } resourceId - Ukey中某容器的资源ID，可通过
   *     [导出证书的接口]{@link @ohos.security.certManagerDialog:certificateManagerDialog.openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest)}
   *     获取，其结果中附带resourceId。
   * @param { Array<HuksExternalCryptoParam> } params - 操作时需传入的参数，必选TAG：
   *     [HUKS_EXT_CRYPTO_TAG_UKEY_PIN]{@link @ohos.security.huksExternalCrypto:huksExternalCrypto.HuksExternalCryptoTagType}
   *     。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - The caller is not a system application
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
   * 获取PIN码认证状态。使用Promise异步回调。
   *
   * @param { string } resourceId - 资源ID，可通过
   *     [导出证书的接口]{@link @ohos.security.certManagerDialog:certificateManagerDialog.openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest)}
   *     获取，其结果中附带资源ID。
   * @param { Array<HuksExternalCryptoParam> } [params] - 操作的属性。非系统应用传入
   *     [HUKS_EXT_CRYPTO_TAG_UID]{@link huksExternalCrypto.HuksExternalCryptoTagType}是非法参数。
   * @returns { Promise<HuksExternalPinAuthState> } Promise对象，返回认证结果。
   *     <br>HUKS_EXT_CRYPTO_PIN_NO_AUTH 表示未认证；HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED 表示认证成功；HUKS_EXT_CRYPTO_PIN_LOCKED 表示PIN被锁定。
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
   * 清除指定资源ID的PIN码认证状态。使用Promise异步回调。
   *
   * @param { string } resourceId - 资源ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 调用此接口获取属性值并返回结果。使用Promise异步回调。
   * 
   * propertyId表示查询属性的ID信息，当前仅支持GMT 0016-2023中定义的SKF接口名作为属性ID，支持的ID包括如下：
   * 
   * - SKF_EnumDev
   * - SKF_GetDevInfo
   * - SKF_EnumApplication
   * - SKF_EnumContainer
   *
   * @param { string } resourceId - 资源ID，可通过
   *     [导出证书的接口]{@link @ohos.security.certManagerDialog:certificateManagerDialog.openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest)}
   *     获取，该接口的返回结果中附带resourceId。
   * @param { string } propertyId - 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，应用开发者需要针对接口名进行适配。
   * @param { Array<HuksExternalCryptoParam> } [params] - 需要传递给
   *     [Extension Ability]{@link @ohos.security.CryptoExtensionAbility}的输入参数。非系统应用传入
   *     [HUKS_EXT_CRYPTO_TAG_UID]{@link huksExternalCrypto.HuksExternalCryptoTagType}是非法参数。
   * @returns { Promise<Array<HuksExternalCryptoParam>> } Promise对象，返回调用接口的结果。当调用成功时，返回结果为HuksExternalCryptoParam类型的数组，包
   *     含要查询的属性。
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
   * The set-type operations of the external crypto extension support calling custom interfaces.
   * However, the custom interface must be registered with the provider.
   *
   * @param { string } resourceId - 资源ID，可通过
   *     [导出证书的接口]{@link @ohos.security.certManagerDialog:certificateManagerDialog.openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest)}
   *     获取，该接口的返回结果中附带resourceId。
   * @param { string } propertyId - 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，应用开发者需要针对接口名进行适配。
   * @param { HuksExternalCryptoParam[] } [params] - 需要传递给
   *     [Extension Ability]{@link @ohos.security.CryptoExtensionAbility}的输入参数。非系统应用传入
   *     [HUKS_EXT_CRYPTO_TAG_UID]{@link huksExternalCrypto.HuksExternalCryptoTagType}是非法参数。
   * @returns { Promise<void> } Promise对象，返回调用接口的结果。
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - Failed to call the UKey driver interface.
   *     Please check the UKey connection and driver status.
   * @throws { BusinessError } 12000011 - The cached resource ID not found.
   * @throws { BusinessError } 12000012 - Device environment or input parameters are abnormal.
   *     This may occur if the process function is null, or due to other issues.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000018 - The input parameters are invalid. Possible causes:
   *     1. The resourceId or propertyId length is invalid.
   *     2. The parameters contain invalid tags or invalid value types.
   * @throws { BusinessError } 12000020 - The provider operation failed.
   *     This means an error occurred in the crypto extension before calling the UKey driver interface.
   * @throws { BusinessError } 12000021 - The UKey PIN is locked.
   * @throws { BusinessError } 12000023 - The UKey PIN is not authenticated.
   * @throws { BusinessError } 12000024 - The provider or UKey is busy.
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  function setProperty(resourceId: string, propertyId: string, params?: HuksExternalCryptoParam[]): Promise<void>;

  /**
   * 获取密钥扩展能力的资源ID。使用Promise异步回调。
   *
   * @param { string } providerName - 提供者名称，建议包含厂商信息，全局唯一，长度最大为128字节。
   * @param { HuksExternalCryptoParam[] } params - 获取资源ID所需的属性参数。必选TAG包括：
   *     [HUKS_EXT_CRYPTO_TAG_ABILITY_NAME]{@link huksExternalCrypto.HuksExternalCryptoTagType}、
   *     [HUKS_EXT_CRYPTO_TAG_BUNDLE_NAME]{@link huksExternalCrypto.HuksExternalCryptoTagType}、
   *     [HUKS_EXT_CRYPTO_TAG_RESOURCE_INFO]{@link huksExternalCrypto.HuksExternalCryptoTagType}。
   * @returns { Promise<string> } Promise对象，返回资源ID。
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000002 - The ability name, bundle name parameter or resource information is missing.
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
   * 打开指定资源ID的资源。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 打开的资源必须使用[closeResource]{@link huksExternalCrypto.closeResource}关闭。
   *
   * @param { string } resourceId - 资源ID。可通过
   *     [证书选择接口]{@link @ohos.security.certManagerDialog:certificateManagerDialog.openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest)}
   *     获取keyUri作为resourceId，或通过[getResourceId]{@link huksExternalCrypto.getResourceId}获取外部密钥管理扩展的资源ID。
   * @param { HuksExternalCryptoParam[] } [params] - 需要传递给
   *     [Extension Ability]{@link @ohos.security.CryptoExtensionAbility}的输入参数。不传入时，不向Extension Ability传递额外参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 关闭指定资源ID的资源。使用Promise异步回调。
   * 
   * 该接口会回调
   * [onClearUkeyPinAuthState](docroot://reference/apis-universal-keystore-kit/js-apis-CryptoExtensionAbility.md#cryptoextensionabilityonclearukeypinauthstate)
   * 清理该资源关联的PIN认证状态，以及会回调
   * [onFinishSession](docroot://reference/apis-universal-keystore-kit/js-apis-CryptoExtensionAbility.md#cryptoextensionabilityonfinishsession)
   * 清理该资源关联的会话handle。
   *
   * @param { string } resourceId - 资源ID。可通过
   *     [证书选择接口]{@link @ohos.security.certManagerDialog:certificateManagerDialog.openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest)}
   *     获取keyUri作为resourceId，或通过[getResourceId]{@link huksExternalCrypto.getResourceId}获取外部密钥管理扩展的资源ID。
   * @param { HuksExternalCryptoParam[] } [params] - 需要传递给
   *     [Extension Ability]{@link @ohos.security.CryptoExtensionAbility}的输入参数。不传入时，不向Extension Ability传递额外参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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

  /**
   * 查询上次接口调用产生的详细错误信息。
   *
   * @returns { HuksExternalErrorInfo } 返回的详细错误信息。
   * @syscap SystemCapability.Security.Huks.CryptoExtension
   * @stagemodelonly
   * @since 26.0.0
   */
  function getErrorInfo(): HuksExternalErrorInfo;
}

export default huksExternalCrypto;