/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

/**
 * 本模块提供设备安全管理的能力，包括查询安全补丁状态、查询文件加密状态等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace securityManager {
  /**
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface DeviceEncryptionStatus {
    /**
     * 表示设备的文件系统是否加密。true：表示已加密。false：表示未加密。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    isEncrypted: boolean;
  }

  /**
   * 证书信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface CertBlob {
    /**
     * 证书的二进制内容。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    inData: Uint8Array;

    /**
     * 证书别名，别名长度小于40个字符。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    alias: string;
  }

  /**
   * 水印参数
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface WatermarkProperties {
    /**
     * 水印排版行数
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    intervalsRow: number;

    /**
     * 水印排版列数
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    intervalsCol: number;
  }

  /**
   * 应用权限的管理状态。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum PermissionManagedState {
    /**
     * 已静默拒绝。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    DENIED = -1,

    /**
     * 已静默授予。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    GRANTED = 0,

    /**
     * 默认由用户授予。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    DEFAULT = 1
  }

  /**
   * 应用实例。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export interface ApplicationInstance {
    /**
     * 应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}，如果应用没有appIdentifier可使用appId代替，可以通过接口
     * [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
     * 获取bundleInfo.signatureInfo.appIdentifier和bundleInfo.signatureInfo.appId。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    appIdentifier: string;

    /**
     * Account ID, which must be greater than or equal to 0. You can call
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
     * **@ohos.account.osAccount** to obtain the account ID.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    accountId: number,

    /**
     * 表示分身应用的索引，默认值为0。
     *
     * appIndex为0时，表示主应用。appIndex大于0时，表示指定的分身应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    appIndex: number;
  }

  /**
   * 添加凭证信息
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface AddCredentialInfo {

    /**
     * 认证令牌
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    authToken?: Uint8Array;
  }

  /**
   * 查询设备安全补丁Tag。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { string } 补丁Tag结果，返回补丁Tag字符串。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead securityManager.getSecurityStatus
   */
  function getSecurityPatchTag(admin: Want): string;

  /**
   * 查询设备文件系统加密状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { DeviceEncryptionStatus } 文件加密状态结构体，现只含有是否进行加密字段（bool）。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead securityManager.getSecurityStatus
   */
  function getDeviceEncryptionStatus(admin: Want): DeviceEncryptionStatus;

  /**
   * 获取当前设备安全策略信息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } item - 安全策略名称。<br/>- patch：设备安全补丁。<br/>- encryption：设备文件系统加密。 <!--RP1--><!--RP1End-->
   * @returns { string } 返回安全策略状态值。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getSecurityStatus(admin: Want, item: string): string;

  /**
   * 安装用户证书，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { CertBlob } certificate - 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。
   * @returns { Promise<string> } Promise对象，返回当前证书安装后的uri，用于卸载证书。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * 支持按系统账户安装用户证书。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { CertBlob } certificate - 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @returns { string } 返回当前证书安装后的uri，用于卸载证书。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  function installUserCertificate(admin: Want, certificate: CertBlob, accountId: number): string;

  /**
   * 卸载用户证书，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certUri - 证书uri，由安装用户证书接口
   *     [installUserCertificate]{@link securityManager.installUserCertificate(admin: Want, certificate: CertBlob)}设置返回。
   * @returns { Promise<void> } 无返回结果的Promise对象。当卸载用户证书失败时会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - Failed to manage the certificate.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * 获取指定系统账户下的用户证书信息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @returns { Array<string> } All user certificates installed under the specified account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  function getUserCertificates(admin: Want, accountId: number): Array<string>;

  /**
   * 设置设备锁屏口令策略。当用户设置锁屏口令时，如果设置的锁屏口令不符合要求，会有安全提示重新设置锁屏口令。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { PasswordPolicy } policy - 设备锁屏口令策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setPasswordPolicy(admin: Want, policy: PasswordPolicy): void;

  /**
   * 获取设备锁屏口令策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { PasswordPolicy } 设备锁屏口令策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getPasswordPolicy(admin: Want): PasswordPolicy;

  /**
   * 获取设备锁屏口令策略。
   *
   * @returns { PasswordPolicy } 设备锁屏口令策略。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getPasswordPolicy(): PasswordPolicy;

  /**
   * 设置设备剪贴板策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } tokenId - 目标应用的身份标识。可通过[bundleManager.getApplicationInfo]{@link ./bundleManager/ApplicationInfo}获
   *     取accessTokenId。
   * @param { ClipboardPolicy } policy - 剪贴板策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setAppClipboardPolicy(admin: Want, tokenId: number, policy: ClipboardPolicy): void;

  /**
   * 获取设备剪贴板策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [tokenId] - 目标应用的身份标识。可通过
   *     [bundleManager.getApplicationInfo]{@link ./bundleManager/ApplicationInfo}获取accessTokenId。
   * @returns { string } 返回JSON字符串形式的设备剪贴板策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAppClipboardPolicy(admin: Want, tokenId?: number): string;

  /**
   * 设置指定用户下指定应用的设备剪贴板策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被设置剪贴板策略的应用包名。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @param { ClipboardPolicy } policy - 剪贴板策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  function setAppClipboardPolicy(admin: Want, bundleName: string, accountId: number, policy: ClipboardPolicy): void;

  /**
   * 获取指定用户下指定应用的设备剪贴板策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被设置剪贴板策略的应用包名。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @returns { string } 返回JSON字符串形式的设备剪贴板策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  function getAppClipboardPolicy(admin: Want, bundleName: string, accountId: number): string;

  /**
   * 为指定用户的指定应用设置水印策略。当前只支持最多保存100个策略。
   *
   * > **说明：**
   * >
   * > 本接口适用于企业场景下为三方应用设置水印，降低企业信息泄露风险。不建议为系统应用设置水印（如：桌面应用），可能存在未知异常。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被设置水印的应用包名。
   * @param { string | image.PixelMap } source - string表示图像路径，图像路径为应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径。<br>
   *     image.PixelMap表示图像对象，图像像素占用大小不得超过500KB。<br>图像像素占用大小计算公式：图像宽度(像素)×图像高度 (像素)×每个像素占用的字节数（通常为4）。例如：一张 100x100 的图片，图
   *     像像素占用大小为100×100×4=40000字节。
   * @param { number } accountId - 用户ID。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number): void;

  /**
   * 取消指定用户的水印策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被取消水印的应用包名。
   * @param { number } accountId - 用户ID。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function cancelWatermarkImage(admin: Want, bundleName: string, accountId: number): void;

  /**
   * 设备锁屏口令策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PasswordPolicy {
    /**
     * 口令复杂度正则表达式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    complexityRegex?: string;

    /**
     * 密码有效期（单位：毫秒）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    validityPeriod?: long;

    /**
     * 口令复杂度描述文本，例如：密码中必须包含字母、数字、特殊字符，至少8个字符，最多30个字符。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    additionalDescription?: string;
  }

  /**
   * 设备剪贴板策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum ClipboardPolicy {
    /**
     * 默认，表示无策略。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT = 0,

    /**
     * 剪贴板可在同一应用使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    IN_APP = 1,

    /**
     * 剪贴板可在同一设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    LOCAL_DEVICE = 2,

    /**
     * 剪贴板可跨设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    CROSS_DEVICE = 3
  }

  /**
   * 为指定用户的指定应用设置水印策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { string } bundleName - 被设置水印的应用包名。
   * @param { string | image.PixelMap } source - 水印图片或者路径
   * @param { number } accountId - 系统账号ID
   *     <br>取值应为≥0的整数。
   * @param { WatermarkProperties } properties - 水印图片参数信息
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number, properties: WatermarkProperties): void;

  /**
   * 查询设置了水印的应用列表
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { number } accountId - 系统账号ID
   *     <br>取值应为≥0的整数。
   * @returns { Array<string> } 设置水印的应用列表
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getWatermarkImageApps(admin: Want, accountId: number): Array<string>;

  /**
   * 设置指定应用的[user_grant权限]{@link permissions:Permissions}的管理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { ApplicationInstance } applicationInstance - 指定应用实例。
   * @param { Array<string> } permissions - 需要管理的权限名称列表，仅支持[user_grant权限]{@link permissions:Permissions}。权限名称列表以
   *     [应用权限组](docroot://security/AccessToken/app-permission-group-list.md)为单位。列表中应包含应用在
   *     [module.json5](docroot://quick-start/module-configuration-file.md)中声明的同一权限组内的所有权限。例如：应用如果在module.json5中声明需要
   *     ohos.permission.READ_CALENDAR和ohos.permission.WRITE_CALENDAR权限，则传入的权限名称列表必须同时包含ohos.permission.READ_CALENDAR和
   *     ohos.permission.WRITE_CALENDAR两个权限。
   * @param { PermissionManagedState } managedState - 应用权限的管理策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setPermissionManagedState(
    admin: Want,
    applicationInstance: ApplicationInstance,
    permissions: Array<string>,
    managedState: PermissionManagedState
  ): void;

  /**
   * 获取指定应用的指定[user_grant权限]{@link permissions:Permissions}的管理策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { ApplicationInstance } applicationInstance - 指定应用实例。
   * @param { string } permission - 需要获取管理策略的权限名称，仅支持user_grant权限。
   * @returns { PermissionManagedState } 应用权限的管理策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getPermissionManagedState(
    admin: Want,
    applicationInstance: ApplicationInstance,
    permission: string
  ): PermissionManagedState;

  /**
   * 设置外部来源扩展程序的管控策略。
   *
   * - DEFAULT：
   *
   *  默认，表示无管控策略，用户可以通过“设置-隐私与安全-高级”中的“运行外部来源的扩展程序”开关来设置是否允许扩展程序运行。
   * - DISALLOW：
   *
   *  禁用。设置此策略后，禁止运行外部来源的扩展程序，运行中的扩展程序可继续运行，扩展程序关闭后无法启动运行。用户无法开启“设置-隐私和安全-高级”中的“运行外部来源的扩展程序”开关。
   * - FORCE_OPEN：
   *
   *  强制开启。设置此策略后，允许运行外部来源的扩展程序，用户无法关闭“设置-隐私和安全-高级”中的“运行外部来源的扩展程序”开关。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { common.ManagedPolicy } policy - 管控策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function setExternalSourceExtensionsPolicy(admin: Want, policy: common.ManagedPolicy): void;

  /**
   * 获取外部来源扩展程序的管控策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { common.ManagedPolicy } Management policy obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getExternalSourceExtensionsPolicy(admin: Want): common.ManagedPolicy;

  /**
   * 安装企业应用重签名证书。
   *
   * 同一用户下最多可下发10本不同证书。证书别名作为证书的唯一标识，不支持重复下发相同别名的证书。如需更新同一别名的证书，需先调用
   * [uninstallEnterpriseReSignatureCertificate]{@link securityManager.uninstallEnterpriseReSignatureCertificate}进行卸载。
   *
   * 在MDM应用卸载或admin取消激活场景下，已安装的证书会保留在设备上，不会被移除。
   *
   * 在企业应用分发场景下，<!--RP2--><!--RP2End-->开发者可以使用重签名证书对企业应用进行二次签名，签名完成后将应用包提供给企业管理员。企业管理员可以将重签名后的应用安装在已部署重签名证书的企业设备上。
   *
   * 企业应用重签名证书使用流程：<!--RP3--><!--RP3End-->
   *
   * 1.通过MDM应用安装企业应用重签名证书；
   *
   * 2.开发者利用签名工具（如ohos-signer或DevEco Studio签名插件），对原始HAP包进行二次签名；
   *
   * 3.安装重签名应用（可以通过企业私有应用市场安装）；
   *
   * 4.运行应用。
   *
   * 规格约束：
   *
   * 1.安装新的签名证书之后，使用旧签名证书的应用可以继续运行；
   *
   * 2.已经安装的企业应用，安装了新的企业签名证书后，已安装的应用如需更新，可以直接覆盖安装，无需先卸载原应用；
   *
   * 3.企业场景下，特别是在涉及信息安全的场景中，企业需要确保员工使用的移动设备中仅安装并运行特定的内部软件和工具。企业应用重签名证书通过统一的应用身份标识，与系统的应用管理与权限控制机制配合使用，可支持企业应用的静默安装、受控的系统
   * 能力调用及运行范围限制，从而实现企业软件在受控终端上的准入控制与安全管理。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certificateAlias - 证书别名，必须以'.cer'结尾。
   * @param { int } fd - 表示已存在的重签名证书文件描述符，证书文件需要放置于[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   * @param { int } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201006 - The number of certificates has reached the limit.
   * @throws { BusinessError } 9201007 - The certificate is invalid.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function installEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, fd: int, accountId: int): void;

  /**
   * 卸载企业应用重签名证书。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certificateAlias - 证书别名，必须以'.cer'结尾。
   * @param { int } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the account ID.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201008 - The certificate does not exist.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: int): void;

  /**
   * 设置屏幕水印
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { image.PixelMap } pixelMap - 水印图片的图像像素类
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setScreenWatermarkImage(admin: Want, pixelMap: image.PixelMap): void;

  /**
   * 取消屏幕水印
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function cancelScreenWatermarkImage(admin: Want): void;

  /**
   * 禁用指定用户下的指定权限，禁用后指定用户下的所有应用申请和使用指定权限时默认拒绝。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } permission - 权限名称。
   * @param { boolean } disallow - 是否禁用。true表示禁用，false表示取消禁用。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201045 - This permission cannot be disallowed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDisallowedPermission(admin: Want, permission: string, disallow: boolean, accountId: number): void;

  /**
   * 获取指定用户下禁用的权限列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。<br/>当设备有多个MDM应用时，传入admin
   *     查询对应admin设置的策略。传入null时查询整机实际生效的策略。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<string> } 返回禁用的权限列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedPermissions(admin: Want | null, accountId: number): Array<string>;

  /**
   *  添加允许使用已禁用指定权限的应用到权限使用例外名单，权限使用例外名单中的应用可以不受[setDisallowedPermission]{@link securityManager.setDisallowedPermission}的策略限制。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } permission - 权限名称。
   * @param { common.ApplicationInstance } applicationInstance - 需添加到权限使用例外名单的应用实例信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201015 - The application is not installed.
   * @throws { BusinessError } 9201044 - This permission is not disallowed.
   *     Applications cannot be added to or removed from the trustlist.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void;

  /**
   * 从权限使用例外名单中移除指定应用，移除后该应用则不能继续使用对应的权限。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } permission - 权限名称。
   * @param { common.ApplicationInstance } applicationInstance - 需从权限使用例外名单移除的应用实例信息。
   *     the application need to be removed from the list of applications allowed to grant the permission.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201044 - This permission is not disallowed.
   *     Applications cannot be added to or removed from the trustlist.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void;

  /**
   * 获取权限使用例外名单的应用列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。<br/>当设备有多个MDM应用时，传入admin
   *     查询对应admin设置的策略。传入null时查询整机实际生效的策略。
   * @param { string } permission - 权限名称。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取
   *     <br>取值应为≥0的整数。
   * @returns { Array<common.ApplicationInstance> } the list of applications
   *     that are allowed to be granted the permission.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAllowedPermissionBundles(admin: Want | null, permission: string, accountId: number): Array<common.ApplicationInstance>;
  /**
   * 设置解锁策略
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { UnlockPolicy } policy - 解锁策略
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setUnlockPolicy(admin: Want, policy: UnlockPolicy, accountId: number): void;

  /**
   * 查询解锁策略
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   * @returns { UnlockPolicy } 9200001 - 应用没有激活成设备管理器
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getUnlockPolicy(admin: Want, accountId: number): UnlockPolicy;

  /**
   * 开启指定用户的凭据变更会话
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   * @returns { Promise<Uint8Array> } promise回调
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function openSession(admin: Want, accountId: number): Promise<Uint8Array>;

  /**
   * 关闭指定用户的凭据变更会话
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   *     <br>Value range:[0, +∞)
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function closeSession(admin: Want, accountId: number): void;

  /**
   * 添加扩展用户认证凭据
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { AddCredentialInfo } info - 添加用户凭据所需信息
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   * @returns { Promise<Uint8Array> } 用户凭据ID
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addUserExtCredential(admin: Want, info: AddCredentialInfo, accountId: number): Promise<Uint8Array>;

  /**
   * 移除扩展用户认证凭据
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { RemoveCredentialInfo } info - 移除用户凭据所需信息
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeUserExtCredential(admin: Want, info: RemoveCredentialInfo): void;

  /**
   * 查询指定用户安装的扩展用户凭据
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   * @returns { Promise<UserExtCredentialInfo[]> } Returns the list of extended user credential information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getUserExtCredential(admin: Want, accountId: number): Promise<UserExtCredentialInfo[]>;

  /**
   * 设备DSL切换策略
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { DeviceSecurityLevelPolicy } level - DSL切换策略
   *     <br>Value range:[0, +∞)
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDeviceSecurityLevelPolicy(admin: Want, level: DeviceSecurityLevelPolicy): void;

  /**
   * 查询DSL切换策略
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件
   * @returns { DeviceSecurityLevelPolicy } 返回DSL切换策略
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDeviceSecurityLevelPolicy(admin: Want): DeviceSecurityLevelPolicy;

  /**
   * 禁用/启用当前用户的滑动解锁能力。启用时：设备灭屏后再亮屏，用户需要在屏幕上滑动后才能进入桌面。禁用时：设备灭屏后再亮屏会直接进入桌面。
   *
   * > **说明：**
   * >
   * > 1.该接口能力仅在设备无锁屏密码时生效。
   * >
   * > 2.设备默认属于启用滑动解锁的状态。
   * >
   * > 3.设备上存在密码时，设置禁用滑动解锁会失败，抛出9201021错误码。
   * >
   * > 4.下发禁用滑动解锁的策略后，用户输入了设备密码，此时密码会生效，设备需要验证密码后才能进入桌面，之前下发的策略失效。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disable - 是否禁用当前用户的滑动解锁能力。true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201021 - A lock screen password has been set for the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setScreenLockDisabledForAccount(admin: Want, disable: boolean): void;

  /**
   * 查询当前用户的滑动解锁能力是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回true表示当前用户的滑动解锁能力已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function isScreenLockDisabledForAccount(admin: Want): boolean;
}

/*** if arkts dynamic */
import type Want from './@ohos.app.ability.Want';
import type common from './@ohos.enterprise.common';
import type image from './@ohos.multimedia.image';
/*** endif */

export default securityManager;