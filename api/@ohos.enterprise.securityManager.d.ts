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
 * The **securityManager** module provides device security management capabilities, including obtaining the security
 * patch status and file system encryption status.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace securityManager {
  /**
   * Represents the file system encryption status.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface DeviceEncryptionStatus {
    /**
     * Whether the file system of the device is encrypted.
     *
     * The value **true** means the file system of the device is encrypted; the value **false** means the opposite.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    isEncrypted: boolean;
  }

  /**
   * Represents the certificate information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface CertBlob {
    /**
     * Binary content of the certificate.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    inData: Uint8Array;

    /**
     * Certificate alias. The value length must be less than 40 characters.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    alias: string;
  }

  /**
   * The properties of a watermark.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface WatermarkProperties {
    /**
     * The number of rows in the watermark layout.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    intervalsRow: number;

    /**
     * The number of columns in the watermark layout.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    intervalsCol: number;
  }

  /**
   * Represents the management status of application permissions.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum PermissionManagedState {
    /**
     * This permission is denied silently.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    DENIED = -1,

    /**
     * This permission is granted silently.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    GRANTED = 0,

    /**
     * The permission is granted by the user by default.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    DEFAULT = 1
  }

  /**
   * Application instance
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export interface ApplicationInstance {
    /**
     * The [unique identifier]{@link ./bundleManager/BundleInfo:SignatureInfo} of an application. If an application does
     * not have **appIdentifier**, **appId** can be used instead. Both **bundleInfo.signatureInfo.appIdentifier** and
     * **bundleInfo.signatureInfo.appId** can be obtained via the
     * [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
     * API.
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
     * Index of the application clone. The default value is **0**.
     *
     * If **appIndex** is set to **0**, the main application is used. If **appIndex** is set to a value greater than 0,
     * the application clone with the specified index is used.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    appIndex: number;
  }

  /**
   * Queries the security patch tag of a device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { string } Patch tag obtained.
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
   * Queries the encryption status of the device file system.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { DeviceEncryptionStatus } File system encryption status. Currently, only a boolean value indicating
   *     whether the file system is encrypted is returned.
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
   * Obtains the security status of the current device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } item - Type of the security status to obtain.<br>- **patch**: device security patch.<br>-
   *     **encryption**: device file system encryption.<!--RP1--><!--RP1End-->
   * @returns { string } Security status obtained.
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
   * Installs a user certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { CertBlob } certificate - Certificate information. The certificate file must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .
   * @returns { Promise<string> } Promise used to return the URI of the installed certificate. This URI can be used to
   *     uninstall the certificate.
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
   * Installs a user certificate based on the system account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { CertBlob } certificate - Certificate information. The certificate file must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .
   * @param { number } accountId - Account ID, which must be greater than or equal to 0. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
   * @returns { string } URI of the installed certificate, which is used to uninstall the certificate.
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
   * Uninstalls a user certificate. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certUri - Certificate URI, which is set and returned by the
   *     [installUserCertificate]{@link securityManager.installUserCertificate(admin: Want, certificate: CertBlob)} API
   *     for installing a user certificate.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when a user certificate fails
   *     to be uninstalled.
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
   * Obtains the user certificate of a specified system account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
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
   * Sets the device screen lock password policy. During screen lock password setting, if the current screen lock
   * password does not meet the requirements, a security message will be displayed, prompting the user to reset the
   * screen lock password.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { PasswordPolicy } policy - Device screen lock password policy.
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
   * Obtains the device screen lock password policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { PasswordPolicy } Device screen lock password policy.
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
  function getPasswordPolicy(admin: Want | null): PasswordPolicy;

  /**
   * Obtains the device screen lock password policy.
   *
   * @returns { PasswordPolicy } Device screen lock password policy.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getPasswordPolicy(): PasswordPolicy;

  /**
   * Sets the device clipboard policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } tokenId - Application token ID, which can be obtained using
   *     [bundleManager.getApplicationInfo]{@link ./bundleManager/ApplicationInfo}.
   * @param { ClipboardPolicy } policy - Clipboard policy to set.
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
   * Obtains the device clipboard policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { number } [tokenId] - Application token ID, which can be obtained using
   *     [bundleManager.getApplicationInfo]{@link ./bundleManager/ApplicationInfo}.
   * @returns { string } Device clipboard policy in JSON format.
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
  function getAppClipboardPolicy(admin: Want | null, tokenId?: number): string;

  /**
   * Sets the device clipboard policy of a specified application for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application for which the device clipboard policy is set.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
   * @param { ClipboardPolicy } policy - Clipboard policy to set.
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
   * Obtains the device clipboard policy of a specified application for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 18 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { string } bundleName - Bundle name of the application for which the device clipboard policy is set.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
   * @returns { string } Device clipboard policy in JSON format.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  function getAppClipboardPolicy(admin: Want | null, bundleName: string, accountId: number): string;

  /**
   * Sets a watermark policy for a specified application of a specified user. Currently, a maximum of 100 policies can
   * be saved.
   *
   * > **NOTE**
   * >
   * > This API is applicable to setting watermarks for third-party applications in enterprise scenarios to reduce the
   * > risk of enterprise information leakage. You are not advised to set watermarks for system applications (such as
   * > the home screen application), as unknown exceptions may occur.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application for which the watermark is set.
   * @param { string | image.PixelMap } source - **string** indicates the image path, which is the path that the app has
   *     the permission to access, such as the app sandbox path. For details about the mapping between the app sandbox
   *     path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .<br>**image.PixelMap** indicates an image object. The size of an image pixel cannot exceed 500 KB.<br>The size
   *     of an image pixel is calculated as follows: Image width (pixels) �� Image height (pixels) �� Number of bytes per
   *     pixel (typically 4). For example, the size of a 100 �� 100 image is 100 �� 100 �� 4 = 40,000 bytes.
   * @param { number } accountId - Account ID. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
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
   * Cancels the watermark policy for a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of the application for which the watermark is removed.
   * @param { number } accountId - Account ID. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
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
   * Represents a device screen lock password policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PasswordPolicy {
    /**
     * Regular expression for password complexity.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    complexityRegex?: string;

    /**
     * Password validity period, in ms.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    validityPeriod?: long;

    /**
     * Password complexity description, for example, "The password must contain 8 to 30 characters consisting of letters
     * , digits, and special characters".
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    additionalDescription?: string;

    /**
     * The encryption algorithm of the password.
     * 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    passwordAlgs?: PasswordAlgs;
  }

  /**
   * Represents a device clipboard policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum ClipboardPolicy {
    /**
     * Default policy, which indicates no policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT = 0,

    /**
     * Allow the clipboard to be used in the same application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    IN_APP = 1,

    /**
     * Allow the clipboard to be used on the same device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    LOCAL_DEVICE = 2,

    /**
     * Allow the clipboard to be used across devices.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    CROSS_DEVICE = 3
  }

  /**
   * Sets the watermark image displayed during the application running.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - bundleName indicates the bundle name of the application to be set watermark.
   * @param { string | image.PixelMap } source - source indicates the watermark's PixelMap or its URL.
   * @param { number } accountId - accountId indicates the ID of OS account
   *     <br>The value must be an integer greater than or equal to 0.
   * @param { WatermarkProperties } properties - properties indicates the properties of the watermark layout.
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
   * Gets the bundle names of the applications that have been set watermark.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } accountId - accountId indicates the ID of OS account.
   *   <br>The value must be an integer greater than or equal to 0.
   * @throws { BusinessError } 201 - Permission verification failed.
   *   The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getWatermarkImageApps(admin: Want, accountId: number): Array<string>;

  /**
   * Sets the management policy for the [user_grant permission]{@link permissions:Permissions} of a specified
   * application.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { ApplicationInstance } applicationInstance - Application instance.
   * @param { Array<string> } permissions - List of permissions to be managed. Only
   *     [user_grant permission]{@link permissions:Permissions} is supported. The list is grouped by
   *     [application permission groups](docroot://security/AccessToken/app-permission-group-list.md) and must include
   *     all permissions in the same permission group declared by the application in
   *     [module.json5](docroot://quick-start/module-configuration-file.md). For example, if an application declares
   *     ohos.permission.READ_CALENDAR and ohos.permission.WRITE_CALENDAR in **module.json5**, the input permission list
   *     must contain both ohos.permission.READ_CALENDAR and ohos.permission.WRITE_CALENDAR.
   * @param { PermissionManagedState } managedState - Management policy for application permissions.
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
   * Obtains the management policy for the [user_grant permission]{@link permissions:Permissions} of a specified
   * application.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { ApplicationInstance } applicationInstance - Application instance.
   * @param { string } permission - Name of the permission required for obtaining the management policy. Only the
   *     **user_grant** permission is supported.
   * @returns { PermissionManagedState } Management policy for application permissions.
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
   * Sets the management policy for extensions from external sources.
   *
   * - DEFAULT:
   *
   *  Default policy with no restrictions applied. Users can enable or disable **Run extensions from external sources**
   * in **Settings** > **Privacy & security** > **Advanced option**.
   * - DISALLOW:
   *
   *  Policy that disallows extensions from external sources to run. With this policy, currently running extensions can
   * continue, but cannot be started after being closed. Users cannot enable **Run extensions from external sources**.
   * - FORCE_OPEN:
   *
   *  Policy that forcibly enables extensions from external sources to run. Users cannot disable
   * **Run extensions from external sources**.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { common.ManagedPolicy } policy - Management policy.
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
   * Obtains the management policy for extensions from external sources.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 22 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { common.ManagedPolicy } Management policy obtained.
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
  function getExternalSourceExtensionsPolicy(admin: Want | null): common.ManagedPolicy;

  /**
   * Installs the enterprise re-signing certificate.
   *
   * A maximum of 10 distinct certificates can be deployed per user. The certificate alias serves as a unique identifier
   * for each certificate and cannot be duplicated during deployment. To update a certificate with an existing alias,
   * you must first uninstall the old certificate by calling
   * [uninstallEnterpriseReSignatureCertificate]{@link securityManager.uninstallEnterpriseReSignatureCertificate}.
   *
   * The installed certificates are retained on the device and will not be removed when the MDM app is uninstalled or
   * the admin privilege is deactivated.
   *
   * In the enterprise app distribution scenario, <!--RP2--><!--RP2End-->you can use the re-signing certificate to re-
   * sign enterprise apps. After re-signing, the app package is provided to enterprise administrators, who can then
   * install the re-signed app on enterprise devices where the corresponding re-signing certificate has been deployed.
   *
   * Process of using the enterprise re-signing certificate:<!--RP3--><!--RP3End-->
   *
   * 1. Installs the enterprise re-signing certificate through the MDM app.
   * 2. Re-sign the original HAP package using a signing tool (**ohos-signer** or the DevEco Studio signing plugin).
   * 3. Install the re-signed app (through the enterprise private app store).
   * 4. Launch and run the app.
   *
   * Specifications:
   *
   * 1. Apps signed with the old certificate will continue to run normally after a new re-signing certificate is
   * installed.
   * 2. After a new enterprise signing certificate is installed for an installed enterprise app, if the installed app
   * needs to be updated, you can directly overwrite the original app without uninstalling it.
   * 3. In enterprise scenarios (especially those involving information security), enterprises need to ensure that only
   * designated internal software and tools are installed and run on employees' mobile devices. The enterprise
   * re-signing certificate, in conjunction with the system's app management and permission controlmechanisms (via a
   * unified app ID), supports silent installation of enterprise apps, controlled invocation of system capabilities,
   * and restriction of app running scopes. This enables admission control and security governance for enterprise
   * software on managed devices.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certificateAlias - Certificate alias, which must end with **.cer**.
   * @param { int } fd - Descriptor of an existing re-signing certificate file. The certificate file must be stored in
   *     the [app sandbox directory](docroot://file-management/app-sandbox-directory.md).
   * @param { int } accountId - Account ID, which must be greater than or equal to 0. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
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
   * Uninstalls the enterprise re-signing certificate.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } certificateAlias - Certificate alias, which must end with **.cer**.
   * @param { int } accountId - Account ID, which must be greater than or equal to 0. You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.
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
   * Sets the watermark image to be displayed on the screen.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { image.PixelMap } pixelMap - pixelMap indicates the PixelMap of watermark image
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
   * Cancels the watermark image displayed on the screen.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
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
   * Sets the permissions that are disallowed to be granted for an account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } permission - permission indicates the name of the permission.
   * @param { boolean } disallow - true if disallowed granted for the account, otherwise false.
   * @param { number } accountId - accountId indicates the ID of OS account
   *     <br>The value must be an integer greater than or equal to 0.
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
   * Gets the permissions that are disallowed to be granted for an account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - admin indicates the administrator ability information.
   * @param { number } accountId - accountId indicates the ID of OS account
   *     <br>The value must be an integer greater than or equal to 0.
   * @returns { Array<string> } the list of permissions that are disallowed to be granted for the account.
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
   * Adds the application to the list of applications allowed to grant the permission.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } permission - permission indicates the name of the permission.
   * @param { common.ApplicationInstance } applicationInstance - applicationInstance indicates
   *     the application that need to be added to the list of applications allowed to grant the permission.
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
   * Removes the application from the list of applications allowed to grant the permission.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } permission - permission indicates the name of the permission.
   * @param { common.ApplicationInstance } applicationInstance - applicationInstance indicates
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
   * Gets the applications that are allowed to be granted the permission.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want | null } admin - admin indicates the administrator ability information.
   * @param { string } permission - permission indicates the name of the permission.
   * @param { number } accountId - accountId indicates the ID of OS account
   *     <br>The value must be an integer greater than or equal to 0.
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
   * Sets the screen lock disabled for current account.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disable - true if disable the screen lock for account, otherwise false.
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
   * Queries whether the screen lock is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { boolean } Returns true if the screen lock for account is disallowed, otherwise false.
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

  /**
   * Encryption algorithm.
   * 
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum PasswordAlgs {

    /**
     * SCRYPT-HKDF-AES combination encryption algorithm.
     * 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCRYPT_HKDF_AES = 0,
    
    /**
     * SCRYPT-HKDF-SM4 combination encryption algorithm.
     * 
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCRYPT_HKDF_SM4 = 1
  }
}

/*** if arkts dynamic */
import type Want from './@ohos.app.ability.Want';
import type common from './@ohos.enterprise.common';
import type image from './@ohos.multimedia.image';
/*** endif */

export default securityManager;