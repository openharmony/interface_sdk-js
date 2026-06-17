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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type osAccount from './@ohos.account.osAccount';

/**
 * The **accountManager** module provides APIs for account management of enterprise devices.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace accountManager {
  /**
   * Domain account policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  interface DomainAccountPolicy {
    /**
     * Validity period of the domain account authentication token, in seconds. The value range is [-1, 2147483647]. The
     * validity period starts from the time when the domain account is authenticated for the last time, for example,
     * login or unlocking after the screen is locked.
     *
     * The default value is **-1**, indicating that the token is permanently valid. The value **0** indicates that the
     * token becomes invalid immediately. After the token expires or becomes invalid, the domain account and password
     * must be authenticated when a user logs in to the system.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    authenticationValidityPeriod?: number;

    /**
     * Validity period of the domain account password, in seconds. The value range is [-1,2147483647]. The validity
     * period starts from the time when the password is last changed on the device.
     *
     * The default value is **-1**, indicating that the domain account password is permanently valid.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    passwordValidityPeriod?: number;

    /**
     * Notification period before a domain account password expires, in seconds. The value range is [0, 2147483647].
     *
     * The default value is **0**, indicating that the system does not display a message indicating that the domain
     * account password has expired.
     *
     * Note: **passwordExpirationNotification** must be used together with **passwordValidityPeriod**. When the system
     * time is later than or equal to (the time when the domain account password is last changed on the device + the
     * value of **passwordValidityPeriod** �C the value of **passwordExpirationNotification**), a message is displayed,
     * indicating that the password is about to expire.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    passwordExpirationNotification?: number;
  }

  /**
   * Disallows a device to create local user accounts. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disallow - Whether to forbid the creation of local user accounts. The value **true** means the
   *     creation of local user accounts is forbidden, and the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function disallowAddLocalAccount(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;

  /**
   * Disallows a device to create local user accounts. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disallow - Whether to forbid the creation of local user accounts. The value **true** means the
   *     creation of local user accounts is forbidden, and the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value. An error object will be thrown if the operation fails.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function disallowAddLocalAccount(admin: Want, disallow: boolean): Promise<void>;

  /**
   * Disallows a user to add accounts.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { boolean } disallow - Whether to disallow the user to add system accounts. The value **true** means to
   *     disallow the user to add system accounts; the value **false** means the opposite.
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
   */
  function disallowAddOsAccountByUser(admin: Want, userId: number, disallow: boolean): void;

  /**
   * Queries whether to disallow a user to add accounts.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @returns { boolean } Returns **true** if the user is not allowed to add system accounts;
   *     <br>returns **false** otherwise.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isAddOsAccountByUserDisallowed(admin: Want, userId: number): boolean;

  /**
   * Adds an account in the background.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } name - User ID, which must be greater than or equal to 0.
   * @param { osAccount.OsAccountType } type - Type of the account to add.<br>The value can be any of the following:<br>
   *     �� **ADMIN**: administrator account.<br>�� **NORMAL**: normal account.<br>�� **GUEST**: guest account.
   * @returns { osAccount.OsAccountInfo } Information about the account added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201003 - Failed to add an OS account.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function addOsAccount(admin: Want, name: string, type: osAccount.OsAccountType): osAccount.OsAccountInfo;

  /**
   * Users are not allowed to add accounts.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disallow - Whether to forbid the creation of local user accounts. The value **true** means the
   *     creation of local user accounts is forbidden, and the value **false** means the opposite.
   * @param { number } [accountId] - User ID, which specifies a user. If this parameter is not specified, all users are
   *     not allowed to add accounts. If this parameter is specified, specified users are not allowed to add accounts.
   *     The value must be greater than or equal to 0.<br>You can call the
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     API to obtain the user ID.
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
  function disallowOsAccountAddition(admin: Want, disallow: boolean, accountId?: number): void;

  /**
   * Queries whether a user is not allowed to add an account.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { number } [accountId] - User ID, which specifies a user. If this parameter is not specified, the system
   *     queries whether all users are not allowed to add accounts. If this parameter is specified, the system queries
   *     whether specified users are not allowed to add accounts. The value must be greater than or equal to 0.<br>You
   *     can call the
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     API to obtain the user ID.
   * @returns { boolean } If **true** is returned, accounts cannot be added.
   *     <br>If **false** is returned, the account can be added.
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
  function isOsAccountAdditionDisallowed(admin: Want | null, accountId?: number): boolean;

  /**
   * Adds an account in the background. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is time-consuming. Subsequent calls to other synchronous APIs in the application main thread must wait
   * > for the asynchronous return of this API.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } name - Account name, which is the name of the account to be added. An account with the same name
   *     or an empty name cannot be created.
   * @param { osAccount.OsAccountType } type - Type of the account to add.<br>The value can be any of the following:<br>
   *     �� **ADMIN**: administrator account.<br>�� **NORMAL**: normal account.<br>�� **GUEST**: guest account.
   * @returns { Promise<osAccount.OsAccountInfo> } Promise used to return the added account information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201003 - Failed to add an OS account.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addOsAccountAsync(admin: Want, name: string, type: osAccount.OsAccountType): Promise<osAccount.OsAccountInfo>;

  /**
   * Sets the domain account policy.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { osAccount.DomainAccountInfo } domainAccountInfo - Domain account information.<br>If the internal attribute
   *     of **domainAccountInfo** is empty, a global policy is set for all domain accounts.<br>If the internal attribute
   *     of **domainAccountInfo** is not empty, the policy is set for the specified domain account.<br>The priority of
   *     the specified domain account policy is higher than that of the global policy. If the specified domain account
   *     has a domain account policy, the global policy does not take effect for the domain account.<br>Note: To set a
   *     policy for a specified domain account, the **serverConfigId** field in **DomainAccountInfo** is mandatory.
   * @param { DomainAccountPolicy } policy - Domain account policy.<br>Note: After setting the domain account policy,
   *     you must change the domain account password on the device. Otherwise, the **passwordValidityPeriod** and
   *     **passwordExpirationNotification** configurations in **DomainAccountPolicy** do not take effect.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function setDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo, policy: DomainAccountPolicy): void;

  /**
   * Obtains the domain account policy.
   *
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { osAccount.DomainAccountInfo } domainAccountInfo - Domain account information.<br>If all the internal
   *     attributes of **domainAccountInfo** are empty, the global domain account policy is queried.<br>If the internal
   *     attribute of **domainAccountInfo** is not empty, the specified domain account policy is queried.<br>Note: To
   *     query a specified domain account policy, the **serverConfigId** field in **DomainAccountInfo** is mandatory.
   * @returns { DomainAccountPolicy } Domain account policy.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 19
   */
  function getDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo): DomainAccountPolicy;

  /**
   * Adds a normal OS account using the name.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { string } name - the OS account name. It cannot be empty.
   * @returns { Promise<osAccount.OsAccountInfo> } Returns the information about the added OS account.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201003 - Failed to add an OS account.
   * @throws { BusinessError } 9201040 - The number of accounts reaches the upper limit.
   * @throws { BusinessError } 201 - Permission verification failed.
   * The application does not have the permission required to call the API.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   * 1. The operation is restricted by the OS-account constraint.
   * 2. The required privilege for the operation has not been granted.
   * @throws { BusinessError } 801 - Capability not supported.
   * Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function createNormalOsAccount(admin: Want, name: string): Promise<osAccount.OsAccountInfo>;

  /**
   * Removes an OS account by ID.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * <br>The value must be an integer greater than or equal to 101.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9201041 - Restricted account.
   * @throws { BusinessError } 201 - Permission verification failed.
   * The application does not have the permission required to call the API.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   * 1. The operation is restricted by the OS-account constraint.
   * 2. The required privilege for the operation has not been granted.
   * @throws { BusinessError } 801 - Capability not supported.
   * Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeOsAccount(admin: Want, accountId: number): Promise<void>;

  /**
   * Activates a specified OS account by ID.
   *
   * @permission ohos.permission.ENTERPRISE_INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } accountId - accountId indicates the local ID of the OS account.
   * <br>The value must be an integer greater than or equal to 100.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200016 - Service timeout.
   * @throws { BusinessError } 9201041 - Restricted account.
   * @throws { BusinessError } 9201046 - The number of signed-in accounts reaches the upper limit.
   * @throws { BusinessError } 201 - Permission verification failed.
   * The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function activateOsAccount(admin: Want, accountId: number): Promise<void>;
}

export default accountManager;