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
 * @file 安全管理
 * @kit MDMKit
 */

/**
 * 本模块提供企业设备安全管理能力，支持证书管理、设备安全策略管理、口令策略管理、剪贴板策略管理、水印策略管理、权限管理等功能。企业可使用本模块实现设备安全状态的实时监控、企业证书的生命周期管理、设备口令策略的统一配置、应用剪贴板使用行为
 * 的管控、屏幕和应用水印的设置以防止信息泄露、以及应用权限的精细化管理等场景，帮助企业提升设备安全防护能力，降低数据泄露风险。
 *
 * > **说明：**
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 11 - 11]
 * @publicapi [since 12]
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace securityManager {
  /**
   * 设备管理应用的文件系统加密状态。
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
   * 水印属性。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface WatermarkProperties {
    /**
     * 显示水印的行数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    intervalsRow: number;

    /**
     * 显示水印的列数。
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
     * [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo}获取
     * bundleInfo.signatureInfo.appIdentifier和bundleInfo.signatureInfo.appId。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    appIdentifier: string;

    /**
     * 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    accountId: number;

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
   * 处理口令数据使用的加密算法。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum PasswordAlgs {
    /**
     * SCRYPT-HKDF-AES组合加密算法。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCRYPT_HKDF_AES = 0,

    /**
     * SCRYPT-HKDF-SM4组合加密算法。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCRYPT_HKDF_SM4 = 1
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
   * 获取当前设备安全策略信息。适用于设备合规性检查、安全状态审计、策略执行效果验证等场景，帮助企业管理员确认设备是否符合安全要求。企业可通过此接口实时监控设备的安全补丁状态和文件加密状态，及时发现设备安全风险并采取相应措施，保障企业设
   * 备和数据安全。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } item - 安全策略名称。<br/>- patch：设备安全补丁。<br/>- encryption：设备文件系统加密。
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
   * 安装用户证书，使用Promise异步回调。企业可通过此接口将证书安装到设备上，用于企业VPN连接、安全认证、数字签名等场景，实现企业级的安全通信和数据保护。
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
   * 支持按系统账户安装用户证书。企业可为不同用户账户安装独立的证书，实现多用户环境下的安全隔离和个性化证书管理，满足多用户设备的安全管控需求。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { CertBlob } certificate - 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 卸载用户证书，使用Promise异步回调。适用于企业证书管理场景，如证书过期更换、撤销员工对企业资源的访问权限等。企业可在证书过期、更换或不再需要时调用此接口卸载证书，确保设备证书管理的灵活性和安全性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certUri - 证书uri，由安装用户证书接口[installUserCertificate]{@link securityManager.installUserCertificate}设置
   *     返回。
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
   * 获取指定系统账户下的用户证书信息。企业可通过此接口查询设备上已安装的用户证书列表，用于证书审计、证书有效期管理等场景，确保证书管理的可追溯性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
   * @returns { Array<string> } 返回在指定用户ID下安装的所有用户证书。
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
   * 设置设备锁屏口令策略。策略设置后，当用户设置锁屏口令时，如果设置的锁屏口令不符合要求，会有安全提示重新设置锁屏口令。适用于企业安全合规场景，如强制要求员工使用强密码、定期更换密码等，降低企业数据泄露风险。
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
   * 获取设备锁屏口令策略。企业可通过此接口查询当前配置的口令策略，用于策略审计、合规性检查等场景，确保设备口令策略符合企业安全规范。
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
   * 获取设备锁屏口令策略。企业可通过此接口查询当前配置的口令策略，用于策略审计、合规性检查等场景，确保设备口令策略符合企业安全规范。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @returns { PasswordPolicy } 设备锁屏口令策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getPasswordPolicy(admin: Want | null): PasswordPolicy;

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
   * 设置设备剪贴板策略。策略设置后，应用将按照设置的策略限制剪贴板的使用范围。适用于企业数据防泄露场景，如限制敏感应用（如企业邮箱、财务系统）的剪贴板使用范围，防止敏感数据被复制到非授权应用，降低数据泄露风险。企业可通过此接口控制应用
   * 的剪贴板使用权限，防止敏感数据通过剪贴板泄露到未授权应用，增强企业数据安全防护能力。
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
   * 获取设备剪贴板策略。企业可通过此接口查询当前配置的剪贴板策略，用于策略审计和合规性检查，确保剪贴板管控策略符合企业安全要求。
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
   * 获取设备剪贴板策略。企业可通过此接口查询当前配置的剪贴板策略，用于策略审计和合规性检查，确保剪贴板管控策略符合企业安全要求。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
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
   * @since 26.0.0
   */
  function getAppClipboardPolicy(admin: Want | null, tokenId?: number): string;

  /**
   * 设置指定用户下指定应用的设备剪贴板策略。策略设置后，指定应用的剪贴板将按照策略限制使用范围。企业可为不同用户的不同应用配置差异化的剪贴板使用权限，实现精细化的数据访问控制，满足多用户多应用场景下的安全管控需求。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被设置剪贴板策略的应用包名。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 获取指定用户下指定应用的设备剪贴板策略。企业可通过此接口查询特定应用的剪贴板使用权限配置，用于策略审计和合规性检查。
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
   * 获取指定用户下指定应用的设备剪贴板策略。企业可通过此接口查询特定应用的剪贴板使用权限配置，用于策略审计和合规性检查。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @param { string } bundleName - 被设置剪贴板策略的应用包名。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
   * @returns { string } 返回JSON字符串形式的设备剪贴板策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAppClipboardPolicy(admin: Want | null, bundleName: string, accountId: number): string;

  /**
   * 为指定用户的指定应用设置水印策略。当前只支持最多保存100个策略。
   *
   * > **说明：**
   * >
   * > 1.本接口适用于企业场景下为三方应用设置水印，降低企业信息泄露风险。不建议为系统应用设置水印（如：桌面应用），可能存在未知异常。
   * >
   * > 2.水印图片会以平铺方式重复覆盖整个应用界面。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被设置水印的应用包名。
   * @param { string | image.PixelMap } source - string表示图像路径，图像路径为应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径。
   *     <br>image.PixelMap表示图像对象。
   *     <br>图像像素占用大小不得超过500KB。
   *     <br>图像像素占用大小计算公式：图像宽度(像素)×图像高度 (像素)×每个像素占用的字节数（通常为4）。例如：一张 100x100 的图片，图像像素占用大小为100×100×4=40000字节。
   * @param { number } accountId - 用户ID。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 取消指定用户的水印策略。当应用不再需要水印保护或需要更换水印时，企业可调用此接口取消水印策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被取消水印的应用包名。
   * @param { number } accountId - 用户ID。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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

    /**
     * 处理口令数据使用的加密算法。设置后，PC/2in1设备上将原始口令处理成口令凭据会使用该参数指定的加密算法，其他设备无效果。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    passwordAlgs?: PasswordAlgs;
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
   * 为指定用户的指定应用设置水印策略。当前只支持最多保存100个策略。
   *
   * > **说明：**
   * >
   * > 本接口适用于企业场景下为三方应用设置水印，降低企业信息泄露风险。不建议为系统应用设置水印（如：桌面应用），可能存在未知异常。
   * >
   * > 当水印属性[properties]{@link securityManager.WatermarkProperties}行列参数的取值范围是[1, 255]内的整数。若传入小于1或大于255的值，接口会返回错误码920001
   * > 2。
   * >
   * > 当水印属性行数和列数都为1时，居中显示单个水印图片。当水印属性行数为m，列数为n时，按m行n列的网格布局排列显示m\*n个水印图片。当水印属性行列参数过大，导致网格布局无法适应窗口大小时，水印会以窗口左上角为原点，以平铺方式重
   * > 复覆盖整个应用窗口界面，水印图片超出界面右侧、下侧的部分会被裁剪（例如屏幕宽高是1260\*2720，水印图片宽高是100\*100，若设置的行数超过27，或设置的列数超过12，水印会以平铺方式重复覆盖整个应用窗口界面）。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被设置水印的应用包名。
   * @param { string | image.PixelMap } source - string表示图像路径，图像路径为应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径。
   *     <br>image.PixelMap表示图像对象。
   *     <br>图像像素占用大小不得超过500KB。
   *     <br>图像像素占用大小计算公式：图像宽度(像素)×图像高度 (像素)×每个像素占用的字节数（通常为4）。例如：一张 100x100 的图片，图像像素占用大小为100×100×4=40000字节。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
   * @param { WatermarkProperties } properties - 配置水印的行列数。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number, properties: WatermarkProperties): void;

  /**
   * 获取指定用户下已设置水印的应用程序包名列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
   * @returns { Array<string> } 返回已设置水印的应用程序包名列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getWatermarkImageApps(admin: Want, accountId: number): Array<string>;

  /**
   * 设置指定应用的[user_grant权限]{@link permissions:Permissions}的管理策略。适用于企业应用批量部署场景，如静默授权减少权限弹窗干扰、统一企业应用权限管理策略，提升员工使用体验和管理效率。
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
   * @throws { BusinessError } 9200012 - Parameter verification failed.
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
   * @throws { BusinessError } 9200012 - Parameter verification failed.
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
   * 设置外部来源扩展程序的管控策略。策略设置后，系统将按照设置的策略控制外部来源扩展程序的运行行为。适用于企业安全管控场景，如防止员工安装非授权浏览器扩展程序，或强制开启企业批准的扩展程序功能，保障企业终端安全。
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
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
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
   * @returns { common.ManagedPolicy } 返回ManagedPolicy枚举类型的管控策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getExternalSourceExtensionsPolicy(admin: Want): common.ManagedPolicy;

  /**
   * 获取外部来源扩展程序的管控策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @returns { common.ManagedPolicy } 返回ManagedPolicy枚举类型的管控策略。
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
  function getExternalSourceExtensionsPolicy(admin: Want | null): common.ManagedPolicy;

  /**
   * 安装企业应用重签名证书。安装成功后，企业可使用该证书对应用进行重签名。
   *
   * 同一用户下最多可下发10本不同证书。证书别名作为证书的唯一标识，不支持重复下发相同别名的证书。如需更新同一别名的证书，需先调用
   * [uninstallEnterpriseReSignatureCertificate]{@link securityManager.uninstallEnterpriseReSignatureCertificate}进行卸载。
   *
   * 在MDM应用卸载或admin取消激活场景下，已安装的证书会保留在设备上，不会被移除。
   *
   * 在企业应用分发场景下，开发者可以使用重签名证书对企业应用进行二次签名，签名完成后将应用包提供给企业管理员。企业管理员可以将重签名后的应用安装在已部署重签名证书的企业设备上。
   *
   * 企业应用重签名证书使用流程：
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
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 卸载企业应用重签名证书。卸载企业重签名证书后，使用该证书签名的应用在设备重启前正常运行，设备重启后无法运行。
   *
   * 使用场景：
   *
   * 1.安装新证书：调用[installEnterpriseReSignatureCertificate]{@link securityManager.installEnterpriseReSignatureCertificate}接
   * 口安装新证书后，经新证书重签名的应用可正常运行。如果旧签名证书对应的应用为超级设备管理应用，需先取消激活后才能卸载证书，否则卸载证书后该应用无法卸载且无法运行。
   *
   * 2.恢复误删证书：调用[installEnterpriseReSignatureCertificate]{@link securityManager.installEnterpriseReSignatureCertificate}
   * 接口重新安装误删除的证书后，已重签名的应用可正常运行，不受影响。
   *
   * > **注意：**
   * >
   * > 删除证书常见证书过期和证书泄露场景，建议开发者在实现该功能时，强提示管理员谨慎删除证书，并确保删除证书前加载新的重签名证书，并完成所有应用更新切换到新的重签名证书，否则重启后历史安装的应用将无法运行。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } certificateAlias - 证书别名，必须以'.cer'结尾。
   * @param { int } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 设置屏幕水印策略，对所有用户生效。
   *
   * > **说明：**
   * >
   * > 1.屏幕水印策略会将设置的图片平铺覆盖整个屏幕，建议使用带透明度的图片以确保设备屏幕内容可见。
   * >
   * > 2.当水印图片尺寸小于屏幕时，图片会被拉伸；当水印图片尺寸大于屏幕时，图片会被压缩。该实现方式与应用级别水印的重复平铺方式不同。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { image.PixelMap } pixelMap - 图像对象。图片宽度不超过设备屏幕宽度的两倍，图片高度不超过设备屏幕高度的两倍。图片像素占用大小不得超过128MB。图片像素占用大小计算公式：图片宽度(像素)
   *     ×图片高度(像素)×每个像素占用的字节数（通常为4）。例如：一张100×100的图片，像素占用大小为100×100×4=40000字节。对于1920×1080分辨率的屏幕，若使用相同分辨率的图片，像素占用大小为1920×1
   *     080×4=8294400字节（约7.9MB）。
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
   * 取消屏幕水印策略，对所有用户生效。取消成功后，设备屏幕上的水印消失。当设备不再需要屏幕水印保护时，企业可调用此接口取消水印策略。只有设置屏幕水印的用户才能取消该水印，例如用户100设置的屏幕水印，用户101无法取消。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * 禁用指定用户下的指定权限，禁用后指定用户下的所有应用申请和使用指定权限时默认拒绝。适用于企业安全合规场景，如禁用相机、麦克风等高风险权限防止隐私泄露，或禁用特定功能（如蓝牙分享）防止企业数据外传。
   *
   * > **说明：**
   * >
   * > 1.只能禁用[权限APL等级](docroot://security/AccessToken/app-permission-mgmt-overview.md#权限机制中的基本概念)为normal或system_basic的权
   * > 限，否则返回错误码9201045。
   * >
   * > 2.单个用户下最多可以禁用200个权限。
   * >
   * > 3.权限禁用后，仅影响应用（系统应用和普通应用）使用对应的权限，不影响系统SA使用对应的权限。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } permission - 权限名称。
   * @param { boolean } disallow - 是否禁用。true表示禁用，false表示取消禁用。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。当admin为null时，表示获取所有企业设备管理
   *     应用下发的禁用权限列表，返回合并后的结果。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
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
   * 将应用添加至权限使用例外名单，例外名单中的应用不受[setDisallowedPermission]{@link securityManager.setDisallowedPermission}设置的权限禁用策略限制。适用于企业应
   * 用场景，如相机权限被禁用时，允许考勤应用、协作办公应用继续使用相机功能，保障企业关键业务正常运行。
   *
   * > **说明：**
   * >
   * > 1.必须先通过[setDisallowedPermission]{@link securityManager.setDisallowedPermission}接口禁用权限后，才能添加应用到权限使用例外名单，否则返回错误码920
   * > 1044。
   * >
   * > 2.应用实际未申请指定权限时，不可将应用添加到权限使用例外名单中。例如相机权限被禁用时，A应用实际未申请相机权限，则不能添加A应用到相机权限使用例外名单中，返回错误码9200012。可以通过
   * > [bm dump](docroot://tools/bm-tool.md#查询应用信息命令dump)命令查询应用是否申请指定权限。
   * >
   * > 3.当指定权限通过[setDisallowedPermission]{@link securityManager.setDisallowedPermission}接口取消禁用后，该权限对应的权限使用例外名单会同步清理。
   * >
   * > 4.所有用户下单个权限最多可以设置1024个应用到权限使用例外名单。
   * >
   * > 5.系统应用和普通应用都可以添加。
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
   * 从权限使用例外名单中移除指定应用，移除后该应用不能继续使用对应的权限。
   *
   * > **说明：**
   * >
   * > 必须先通过[setDisallowedPermission]{@link securityManager.setDisallowedPermission}接口禁用权限后，才能从权限使用例外名单移除应用，否则返回错误码92010
   * > 44。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } permission - 权限名称。
   * @param { common.ApplicationInstance } applicationInstance - 需从权限使用例外名单移除的应用实例信息。
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
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。当admin为null时，表示获取所有企业设备管理
   *     应用下发的权限使用例外应用名单，返回合并后的结果。
   * @param { string } permission - 权限名称。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。*@ohos.account.osAccount** to obtain the user ID.
   * @returns { Array<common.ApplicationInstance> } 返回权限使用例外名单列表。
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
   * 禁用/启用当前用户的滑动解锁能力。启用时：设备灭屏后再亮屏，用户需要在屏幕上滑动后才能进入桌面。禁用时：设备灭屏后再亮屏会直接进入桌面。适用于企业设备管理场景，如在特定安全环境下禁用滑动解锁简化操作，或在通用场景下启用滑动解锁作为
   * 基础安全措施。
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