/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type distributedAccount from './@ohos.account.distributedAccount';
import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
/*** if arkts static */
import type { RecordData } from './@ohos.base';
/*** endif */

/**
 * The **osAccount** module provides basic capabilities for managing system (OS) accounts, including adding, deleting,
 * querying, setting, subscribing to, and enabling an OS account.
 *
 * @syscap SystemCapability.Account.OsAccount
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace osAccount {
  /**
   * Obtains an **AccountManager** instance.
   *
   * @returns { AccountManager } **AccountManager** instance obtained.
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  function getAccountManager(): AccountManager;

  /**
  * Obtains an OS account sub-profile manager instance.
  *
  * @returns { OsAccountSubProfileManager } Instance object of the OS account sub-profile manager.
  * @throws { BusinessError } 202 - Not system application.
  * @syscap SystemCapability.Account.OsAccount
  * @systemapi
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
  function getOsAccountSubProfileManager(): OsAccountSubProfileManager;

  /**
   * Obtains this OS account authorization manager.
   *
   * @returns { AuthorizationManager } Instance object of the OS account authorization manager.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAuthorizationManager(): AuthorizationManager;

  /**
   * Checks whether this domain account is supported. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means this domain account is
   *     supported; the value **false** means the opposite.
   * @throws { BusinessError } 12300001 - The system service works abnormally.
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isDomainAccountSupported(): Promise<boolean>;

  /**
   * Provides APIs for managing OS accounts.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface AccountManager {
    /**
     * Activates an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - ID of the target OS account.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300009 - Account has been activated. [since 7 - 11]
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being
     *     operated. [since 12]
     * @throws { BusinessError } 12300016 - The number of logged in accounts reaches the upper limit. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    activateOsAccount(localId: int, callback: AsyncCallback<void>): void;

    /**
     * Activates an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300009 - Account has been activated. [since 7 - 11]
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being
     *     operated. [since 12]
     * @throws { BusinessError } 12300016 - The number of logged in accounts reaches the upper limit. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    activateOsAccount(localId: int): Promise<void>;

    /**
     * Activates (Starts on the foreground or switches to) the target OS account on the specified logical display.
     * This API uses a promise to return the result.
     * Currently, cross-logical-display activation is not supported. That is, you cannot activate an OS account that
     * is already running on the foreground of another logical display on the specified logical display.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - ID of the target OS account.
     * @param { long } displayId - Logical display ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @throws { BusinessError } 12300016 - The number of logged in accounts reaches the upper limit.
     * @throws { BusinessError } 12300018 - Display not found.
     * @throws { BusinessError } 12300019 - Cross-display activation not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    activateOsAccount(localId: int, displayId: long): Promise<void>;

    /**
     * Deactivates (logs out of) an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    deactivateOsAccount(localId: int): Promise<void>;

    /**
     * Checks whether multiple OS accounts are supported. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [checkMultiOsAccountEnabled]{@link osAccount.AccountManager.checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>)}
     * >  instead.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     *     The value **true** means multiple OS accounts are supported;
     *     the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>)
     */
    isMultiOsAccountEnable(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether multiple OS accounts are supported. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [checkMultiOsAccountEnabled]{@link osAccount.AccountManager.checkMultiOsAccountEnabled()} instead.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     multiple OS accounts are supported; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkMultiOsAccountEnabled()
     */
    isMultiOsAccountEnable(): Promise<boolean>;

    /**
     * Checks whether multiple OS accounts are supported. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means multiple OS accounts are supported;
     *     the value **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether multiple OS accounts are supported. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value
     *     **true** means multiple OS accounts are supported;
     *     the value **false** means the opposite.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkMultiOsAccountEnabled(): Promise<boolean>;

    /**
     * Checks whether an OS account is activated. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means the account is activated; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountActivated(localId: number, callback: AsyncCallback<boolean>)
     */
    isOsAccountActived(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether an OS account is activated. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the account is activated; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountActivated(localId: number)
     */
    isOsAccountActived(localId: number): Promise<boolean>;

    /**
     * Checks whether an OS account is activated. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true**
     *     means the account is activated; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountActivated(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether an OS account is activated. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the account is activated; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountActivated(localId: number): Promise<boolean>;

    /**
     * Checks whether an OS account is activated. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the account is activated; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountActivated(localId: int): Promise<boolean>;

    /**
     * Checks whether the specified constraint is enabled for an OS account. This API uses an asynchronous callback
     * to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to check.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true**
     *     means the specified constraint is enabled; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountConstraintEnabled(localId: number, constraint: string, callback: AsyncCallback<boolean>)
     */
    isOsAccountConstraintEnable(localId: number, constraint: string, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the specified constraint is enabled for an OS account. This API uses a promise to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to check.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the specified constraint is enabled; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountConstraintEnabled(localId: number, constraint: string)
     */
    isOsAccountConstraintEnable(localId: number, constraint: string): Promise<boolean>;

    /**
     * Checks whether the specified constraint is enabled for an OS account. This API uses an asynchronous callback
     * to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to check.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means the specified constraint is enabled; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountConstraintEnabled(localId: number, constraint: string, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the specified constraint is enabled for an OS account. This API uses a promise to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to check.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the specified constraint is enabled; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountConstraintEnabled(localId: number, constraint: string): Promise<boolean>;

    /**
     * Checks whether a constraint is enabled for this OS account. This API uses a promise to return the result.
     *
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to check.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the specified constraint is enabled; the value **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountConstraintEnabled(constraint: string): Promise<boolean>;

    /**
     * Checks whether a constraint is enabled for an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to check.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the specified constraint is enabled; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountConstraintEnabled(localId: int, constraint: string): Promise<boolean>;

    /**
     * Checks whether this OS account is a test account. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [checkOsAccountTestable]{@link osAccount.AccountManager.checkOsAccountTestable(callback: AsyncCallback<boolean>)}
     * >  instead.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means the account is a test account; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountTestable(callback: AsyncCallback<boolean>)
     */
    isTestOsAccount(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether this OS account is a test account. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [checkOsAccountTestable]{@link osAccount.AccountManager.checkOsAccountTestable()} instead.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the account is a test account; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountTestable()
     */
    isTestOsAccount(): Promise<boolean>;

    /**
     * Checks whether this OS account is a test account. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means the account is a test account; the value **false** means the opposite;
     *     the default value is **false**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkOsAccountTestable(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether this OS account is a test account. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true**
     *     means the account is a test account; the value **false** means the opposite;
     *     the default value is **false**.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkOsAccountTestable(): Promise<boolean>;

    /**
     * Checks whether an OS account has been verified. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [checkOsAccountVerified]{@link osAccount.AccountManager.checkOsAccountVerified(callback: AsyncCallback<boolean>)}
     * >  instead.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means the OS account has been verified; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountVerified(callback: AsyncCallback<boolean>)
     */
    isOsAccountVerified(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether an OS account has been verified. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value
     *     **true** means the OS account has been verified; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountVerified(localId: number, callback: AsyncCallback<boolean>)
     */
    isOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether an OS account has been verified. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account. If this parameter is not specified,
     *     this API checks whether the current OS account has been verified. The default value is **-1**.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the
     *     OS account has been verified; the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountVerified(localId: number)
     */
    isOsAccountVerified(localId?: number): Promise<boolean>;

    /**
     * Checks whether this OS account is unlocked. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. You are advised to use
     * > [isOsAccountUnlocked]{@link osAccount.AccountManager.isOsAccountUnlocked()} instead.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true**
     *     means the OS account has been verified; the value **false** means the opposite.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.AccountManager.isOsAccountUnlocked()
     */
    checkOsAccountVerified(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether this OS account has been verified. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. You are advised to use
     * > [isOsAccountUnlocked]{@link osAccount.AccountManager.isOsAccountUnlocked()} instead.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the
     *     OS account has been verified; the value **false** means the opposite.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.AccountManager.isOsAccountUnlocked()
     */
    checkOsAccountVerified(): Promise<boolean>;

    /**
     * Checks whether an OS account has been verified. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true**
     *     means the OS account has been verified; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether an OS account has been verified. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account. If this parameter is not specified,
     *     this API checks whether the current OS account has been verified.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the
     *     OS account has been verified; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountVerified(localId: number): Promise<boolean>;

    /**
     * Checks whether this OS account is unlocked. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the OS account has been verified; the value **false** means the opposite.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountUnlocked(): Promise<boolean>;

    /**
     * Checks whether an OS account has been verified. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account. If this parameter is not specified,
     *     this API checks whether the current OS account has been verified.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means
     *     the OS account has been verified; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountUnlocked(localId: int): Promise<boolean>;

    /**
     * Removes an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated on.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    removeOsAccount(localId: int, callback: AsyncCallback<void>): void;

    /**
     * Removes an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    removeOsAccount(localId: int): Promise<void>;

    /**
     * Removes a specified OS account based on the options. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     *     <br>The value should be an integer.
     * @param { RemoveOsAccountOptions } options - Options for removing an OS account.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated on.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 24 dynamic&static
     */
    removeOsAccount(localId: int, options: RemoveOsAccountOptions): Promise<void>;

    /**
     * Sets or removes constraints for an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { Array<string> } constraints -
     *     [Constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to set or remove.
     * @param { boolean } enable - Whether to set or remove constraints. The value **true** means to
     *     set constraints, and **false** means to remove constraints.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraints.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountConstraints(localId: int, constraints: Array<string>, enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets or removes constraints for an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { Array<string> } constraints -
     *     [Constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) to set or remove.
     * @param { boolean } enable - Set or remove constraints. The value **true** means to set constraints,
     *     and **false** means to remove constraints.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraints.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountConstraints(localId: int, constraints: Array<string>, enable: boolean): Promise<void>;

    /**
     * Sets the name of an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } localName - Account name to set. The value cannot exceed 1024 characters.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or localName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountName(localId: int, localName: string, callback: AsyncCallback<void>): void;

    /**
     * Sets the name of an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } localName - Account name to set. The value cannot exceed 1024 characters.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or localName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountName(localId: int, localName: string): Promise<void>;

    /**
     * Obtains the name of the OS account of the caller. This API uses a promise to return the result.
     *
     * @returns { Promise<string> } Promise used to return the OS account name obtained.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 12 dynamic
     * @since 23 static
     */
    getOsAccountName(): Promise<string>;

    /**
     * Obtains the name of an OS account based on its local ID. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @param { int } localId - Local ID of the target OS account.
     * @returns { Promise<string> } Promise used to return the name of the target OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountNameByLocalId(localId: int): Promise<string>;

    /**
     * Obtains the number of OS accounts created. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountCount]{@link osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)} instead.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the number of created OS accounts.
     *     If the operation fails, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)
     */
    getCreatedOsAccountsCount(callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of OS accounts created. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountCount]{@link osAccount.AccountManager.getOsAccountCount()} instead.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<number> } Promise used to return the number of created OS accounts.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountCount()
     */
    getCreatedOsAccountsCount(): Promise<number>;

    /**
     * Obtains the number of OS accounts created. This API uses an asynchronous callback to return the result.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the number of created OS accounts.
     *     If the operation fails, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountCount(callback: AsyncCallback<int>): void;

    /**
     * Obtains the number of OS accounts created. This API uses a promise to return the result.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<int> } Promise used to return the number of created OS accounts.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountCount(): Promise<int>;

    /**
     * Obtains the ID of the OS account to which the current process belongs. This API uses an asynchronous callback
     *  to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalId]{@link osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * > instead.
     *
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdFromProcess(callback: AsyncCallback<number>): void;

    /**
     * Obtains the ID of the OS account to which the current process belongs. This API uses a promise to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalId]{@link osAccount.AccountManager.getOsAccountLocalId()} instead.
     *
     * @returns { Promise<number> } Promise used to return the OS account ID obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalId()
     */
    getOsAccountLocalIdFromProcess(): Promise<number>;

    /**
     * Obtains the ID of the OS account to which the current process belongs. This API uses an asynchronous callback
     *  to return the result.
     *
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalId(callback: AsyncCallback<int>): void;

    /**
     * Obtains the ID of the OS account to which the current process belongs. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<int> } Promise used to return the OS account ID obtained.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalId(): Promise<int>;

    /**
     * Obtains the local IDs of all non-system-level OS accounts. Non-system-level OS accounts are visible to
     * users and are usually used for operations such as login. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @returns { Promise<int[]> } Promise used to return the local IDs of all non-system-level OS accounts.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountLocalIds(): Promise<int[]>;

    /**
     * Obtains the OS account ID based on the process UID. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalIdForUid]{@link osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>)}
     * >  instead.
     *
     * @param { number } uid - Process UID.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **data** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdFromUid(uid: number, callback: AsyncCallback<number>): void;

    /**
     * Obtains the OS account ID based on the process UID. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalIdForUid]{@link osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int)} instead.
     *
     * @param { number } uid - Process UID.
     * @returns { Promise<number> } Promise used to return the OS account ID obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int)
     */
    getOsAccountLocalIdFromUid(uid: number): Promise<number>;

    /**
     * Obtains the OS account ID based on the process UID. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { int } uid - Process UID.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **data** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>): void;

    /**
     * Obtains the OS account ID based on the process UID. This API uses a promise to return the result.
     *
     * @param { int } uid - Process UID.
     * @returns { Promise<int> } Promise used to return the OS account ID obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForUid(uid: int): Promise<int>;

    /**
     * Obtains the OS account ID based on the process UID. The API returns the result synchronously.
     *
     * @param { int } uid - Process UID.
     * @returns { int } OS account ID obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForUidSync(uid: int): int;

    /**
     * Obtains the OS account ID based on the domain account information. This API uses an asynchronous callback to
     * return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalIdForDomain]{@link osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>)}
     * >  instead.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - Domain account information.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<number>): void;

    /**
     * Obtains the OS account ID based on the domain account information. This API uses a promise to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalIdForDomain]{@link osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo)}
     * >  instead.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - Domain account information.
     * @returns { Promise<number> } Promise used to return the ID of the OS account associated
     *     with the domain account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo)
     */
    getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo): Promise<number>;

    /**
     * Obtains the OS account ID based on the domain account information. This API uses an asynchronous callback to
     * return the result.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - Domain account information.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the ID of the OS account associated with
     *     the domain account. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainInfo.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>): void;

    /**
     * Obtains the OS account ID based on the domain account information. This API uses a promise to return the
     * result.
     * This API can be called only by system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - Domain account information.
     * @returns { Promise<int> } Promise used to return the ID of the OS account associated with the domain account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainInfo.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo): Promise<int>;

    /**
     * Queries the maximum number of OS accounts that can be created. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is the maximum number of OS accounts
     *     that can be created. Otherwise, **err** is an error object.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryMaxOsAccountNumber(callback: AsyncCallback<int>): void;

    /**
     * Queries the maximum number of OS accounts that can be created. This API uses a promise to return the result.
     *
     * @returns { Promise<int> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryMaxOsAccountNumber(): Promise<int>;

    /**
     * Queries the maximum number of OS accounts allowed to log in to the system. This API uses a promise to return
     * the result.
     *
     * @returns { Promise<int> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    queryMaxLoggedInOsAccountNumber(): Promise<int>;

    /**
     * Obtains all constraints enabled for an OS account. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null** and **data** is a list of all
     *     [constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) enabled
     *     for the OS account. Otherwise, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountConstraints(localId: number, callback: AsyncCallback<Array<string>>)
     */
    getOsAccountAllConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * Obtains all constraints enabled for an OS account. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @returns { Promise<Array<string>> } Promise used to return all the
     *     [constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) enabled
     *     for the OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountConstraints(localId: number)
     */
    getOsAccountAllConstraints(localId: number): Promise<Array<string>>;

    /**
     * Obtains all constraints enabled for an OS account. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is all
     *     [constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getOsAccountConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * Obtains all constraints enabled for an OS account. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @returns { Promise<Array<string>> } Promise used to return all the
     *     [constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) enabled
     *     for the OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getOsAccountConstraints(localId: number): Promise<Array<string>>;

    /**
     * Obtains all the enabled constraints of an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<Array<string>> } Promise used to return all the enabled
     *     [constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints)
     *     of the OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    getEnabledOsAccountConstraints(localId: int): Promise<Array<string>>;

    /**
     * Queries information about all the OS accounts created. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<Array<OsAccountInfo>> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is a list of all created OS accounts.
     *     Otherwise, **data** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryAllCreatedOsAccounts(callback: AsyncCallback<Array<OsAccountInfo>>): void;

    /**
     * Queries information about all the OS accounts created. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<Array<OsAccountInfo>> } Promise used to return the information about
     *     all the OS accounts created.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryAllCreatedOsAccounts(): Promise<Array<OsAccountInfo>>;

    /**
     * Obtains information about all activated OS accounts. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getActivatedOsAccountLocalIds]{@link osAccount.AccountManager.getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>)}
     * >  instead.
     *
     * @param { AsyncCallback<Array<number>> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is a list of activated OS accounts.
     *     Otherwise, **data** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>)
     */
    queryActivatedOsAccountIds(callback: AsyncCallback<Array<number>>): void;

    /**
     * Obtains information about all activated OS accounts. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getActivatedOsAccountLocalIds]{@link osAccount.AccountManager.getActivatedOsAccountLocalIds()} instead.
     *
     * @returns { Promise<Array<number>> } Promise used to return the information about all activated OS accounts.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getActivatedOsAccountLocalIds()
     */
    queryActivatedOsAccountIds(): Promise<Array<number>>;

    /**
     * Obtains information about all activated OS accounts. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<Array<int>> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is a list of activated OS accounts.
     *     Otherwise, **data** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>): void;

    /**
     * Obtains information about all activated OS accounts. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<int>> } Promise used to return the information about all activated OS accounts.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getActivatedOsAccountLocalIds(): Promise<Array<int>>;

    /**
     * Obtains the ID of the foreground OS account. This API uses a promise to return the result.
     *
     * @returns { Promise<int> } Promise used to return the ID of the foreground OS account.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 15 dynamic
     * @since 23 static
     */
    getForegroundOsAccountLocalId(): Promise<int>;

    /**
     * Obtains the ID of the foreground OS account running on a specified logical display. This API uses a promise
     * to return the result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { long } displayId - Logical display ID.
     * @returns { Promise<int> } Promise used to return the OS account ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300017 - The foreground OS account is not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    getForegroundOsAccountLocalId(displayId: long): Promise<int>;

    /**
     * Obtains the logical display ID of the specified foreground OS account. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<long> } Promise used to return the logical display ID.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300017 - The foreground OS account is not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    getForegroundOsAccountDisplayId(localId: int): Promise<long>;

    /**
     * Creates an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { string } localName - Name of the OS account to create.
     * @param { OsAccountType } type - Type of the OS account to create.
     * @param { AsyncCallback<OsAccountInfo> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the created OS account.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localName or type.
     * @throws { BusinessError } 12300004 - Local name already exists. [since 12]
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    createOsAccount(localName: string, type: OsAccountType, callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * Creates an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { string } localName - Name of the OS account to create.
     * @param { OsAccountType } type - Type of the OS account to create.
     * @param { CreateOsAccountOptions } [options] - Options for creating an OS account.
     *     By default, this parameter is left blank.<br>This parameter is supported since API version 12. [since 12]
     * @returns { Promise<OsAccountInfo> } Promise used to return the information about the created OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localName, type or options.
     * @throws { BusinessError } 12300004 - Local name already exists. [since 12]
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300015 - The short name already exists. [since 12]
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    createOsAccount(localName: string, type: OsAccountType, options?: CreateOsAccountOptions): Promise<OsAccountInfo>;

    /**
     * Creates an OS account and associates it with the specified domain account. This API uses an asynchronous
     * callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { OsAccountType } type - Type of the OS account to create.
     * @param { DomainAccountInfo } domainInfo - Domain account information.
     * @param { AsyncCallback<OsAccountInfo> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the created OS account.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 801 - Capability not supported. [since 12]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or domainInfo.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    createOsAccountForDomain(
      type: OsAccountType,
      domainInfo: DomainAccountInfo,
      callback: AsyncCallback<OsAccountInfo>
    ): void;

    /**
     * Creates an OS account and associates it with the specified domain account. This API uses a promise to return
     * the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { OsAccountType } type - Type of the OS account to create.
     * @param { DomainAccountInfo } domainInfo - Domain account information.
     * @param { CreateOsAccountForDomainOptions } [options] - Optional parameters for creating the account.
     *     By default, this parameter is left blank.<br>This parameter is supported since API version 12. [since 12]
     * @returns { Promise<OsAccountInfo> } Promise used to return the information about the created OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 801 - Capability not supported. [since 12]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type, domainInfo or options.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300015 - The short name already exists. [since 12]
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    createOsAccountForDomain(type: OsAccountType, domainInfo: DomainAccountInfo, options?: CreateOsAccountForDomainOptions): Promise<OsAccountInfo>;

    /**
     * Obtains information about the OS account to which the current process belongs. This API uses an asynchronous
     * callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<OsAccountInfo> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account information obtained.
     *     Otherwise, **data** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>)
     */
    queryCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * Obtains information about the OS account to which the current process belongs. This API uses a promise to
     * return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<OsAccountInfo> } Promise used to return the OS account information obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getCurrentOsAccount()
     */
    queryCurrentOsAccount(): Promise<OsAccountInfo>;

    /**
     * Obtains information about the OS account to which the current process belongs. This API uses an asynchronous
     * callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 9 - 9]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS [since 10]
     * @param { AsyncCallback<OsAccountInfo> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account information obtained.
     *     Otherwise, **data** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * Obtains information about the OS account to which the current process belongs. This API uses a promise to
     * return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. The substitute API is available
     * > only to system applications.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 9 - 9]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS [since 10]
     * @returns { Promise<OsAccountInfo> } Promise used to return the OS account information obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getCurrentOsAccount(): Promise<OsAccountInfo>;

    /**
     * Obtains information about the OS account to which the current process belongs. This API uses a promise to
     * return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS
     * @returns { Promise<OsAccountInfo> } Promise used to return the OS account information obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    queryOsAccount(): Promise<OsAccountInfo>;

    /**
     * Queries information about the OS account of the given ID. This API uses an asynchronous callback to return
     * the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - ID of the target OS account.
     * @param { AsyncCallback<OsAccountInfo> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account information obtained.
     *     Otherwise, **data** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryOsAccountById(localId: int, callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * Queries information about the OS account of the given ID. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<OsAccountInfo> } Promise used to return the OS account information obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryOsAccountById(localId: int): Promise<OsAccountInfo>;

    /**
     * Obtains the domain account information associated with a specified OS account. This API uses a promise to
     * return the result.
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - ID of the target OS account.
     * @returns { Promise<DomainAccountInfo> } Promise used to return the domain account information obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 15 dynamic
     */
    getOsAccountDomainInfo(localId: number): Promise<DomainAccountInfo>;

    /**
     * Obtains the domain account information associated with a specified OS account. This API uses a promise to
     * return the result.
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<DomainAccountInfo | null> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    getOsAccountDomainInfo(localId: int): Promise<DomainAccountInfo | null>;

    /**
     * Obtains the type of the account to which the current process belongs. This API uses an asynchronous callback to
     * return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountType]{@link osAccount.AccountManager.getOsAccountType(callback: AsyncCallback<OsAccountType>)}
     * > instead.
     *
     * @param { AsyncCallback<OsAccountType> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account type obtained.
     *     Otherwise, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountType(callback: AsyncCallback<OsAccountType>)
     */
    getOsAccountTypeFromProcess(callback: AsyncCallback<OsAccountType>): void;

    /**
     * Obtains the type of the account to which the current process belongs. This API uses a promise to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [getOsAccountType]{@link osAccount.AccountManager.getOsAccountType()} instead.
     *
     * @returns { Promise<OsAccountType> } Promise used to return the OS account type obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountType()
     */
    getOsAccountTypeFromProcess(): Promise<OsAccountType>;

    /**
     * Obtains the type of the account to which the current process belongs. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { AsyncCallback<OsAccountType> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account type obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountType(callback: AsyncCallback<OsAccountType>): void;

    /**
     * Obtains the type of the account to which the current process belongs. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<OsAccountType> } Promise used to return the OS account type obtained.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountType(): Promise<OsAccountType>;

    /**
     * Obtains the type of a specified OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<OsAccountType> } Promise used to return the type of the OS account obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getOsAccountType(localId: int): Promise<OsAccountType>;

    /**
     * Sets the type of a specified OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     *     <br>The value should be an integer.
     * @param { OsAccountType } type - Type of the OS account.
     * @param { SetOsAccountTypeOptions } [options] - Options for setting the OS account type. This parameter is
     *     left empty
     *     by default.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper limit.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    setOsAccountType(localId: int, type: OsAccountType, options?: SetOsAccountTypeOptions): Promise<void>;

    /**
     * Obtains the ID of a distributed virtual device. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [queryDistributedVirtualDeviceId]{@link osAccount.AccountManager.queryDistributedVirtualDeviceId(callback: AsyncCallback<string>)}
     * >  instead.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<string> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the distributed virtual
     *     device ID obtained. Otherwise, **data** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.queryDistributedVirtualDeviceId(callback: AsyncCallback<string>)
     */
    getDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;

    /**
     * Obtains the ID of this distributed virtual device. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
     * > [queryDistributedVirtualDeviceId]{@link osAccount.AccountManager.queryDistributedVirtualDeviceId()} instead.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<string> } Promise used to return the distributed virtual device ID obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.queryDistributedVirtualDeviceId()
     */
    getDistributedVirtualDeviceId(): Promise<string>;

    /**
     * Queries the ID of a distributed virtual device. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<string> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the distributed virtual device ID
     *     obtained. Otherwise, **data** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    queryDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;

    /**
     * Queries the ID of this distributed virtual device. This API uses a promise to return the result.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<string> } Promise used to return the distributed virtual device ID obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    queryDistributedVirtualDeviceId(): Promise<string>;

    /**
     * Obtains the profile photo of an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { AsyncCallback<string> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the profile photo information
     *     obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    getOsAccountProfilePhoto(localId: int, callback: AsyncCallback<string>): void;

    /**
     * Obtains the profile photo of an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<string> } Promise used to return the profile photo information obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    getOsAccountProfilePhoto(localId: int): Promise<string>;

    /**
     * Sets a profile photo for an OS account. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } photo - Profile photo information.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or photo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountProfilePhoto(localId: int, photo: string, callback: AsyncCallback<void>): void;

    /**
     * Sets a profile photo for an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } photo - Profile photo information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or photo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountProfilePhoto(localId: int, photo: string): Promise<void>;

    /**
     * Obtains the OS account ID based on the SN. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalIdForSerialNumber]{@link osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>)}
     * >  instead.
     *
     * @param { number } serialNumber - Account SN.
     * @param { AsyncCallback<number> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdBySerialNumber(serialNumber: number, callback: AsyncCallback<number>): void;

    /**
     * Obtains the OS account ID based on the SN. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getOsAccountLocalIdForSerialNumber]{@link osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long)}
     * >  instead.
     *
     * @param { number } serialNumber - Account SN.
     * @returns { Promise<number> } Promise used to return the OS account ID obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long)
     */
    getOsAccountLocalIdBySerialNumber(serialNumber: number): Promise<number>;

    /**
     * Obtains the OS account ID based on the SN. This API uses an asynchronous callback to return the result.
     *
     * @param { long } serialNumber - Account SN.
     * @param { AsyncCallback<int> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the OS account ID obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid serialNumber.
     * @throws { BusinessError } 12300003 - The account indicated by serialNumber does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>): void;

    /**
     * Obtains the OS account ID based on the SN. This API uses a promise to return the result.
     *
     * @param { long } serialNumber - Account SN.
     * @returns { Promise<int> } Promise used to return the OS account ID obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid serialNumber.
     * @throws { BusinessError } 12300003 - The account indicated by serialNumber does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForSerialNumber(serialNumber: long): Promise<int>;

    /**
     * Obtains the SN of an OS account based on the account ID. This API uses an asynchronous callback to return the
     * result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getSerialNumberForOsAccountLocalId]{@link osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>)}
     * >  instead.
     *
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<number> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the SN obtained.
     *     Otherwise, **err** is an error object.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>)
     */
    getSerialNumberByOsAccountLocalId(localId: number, callback: AsyncCallback<number>): void;

    /**
     * Obtains the SN of an OS account based on the account ID. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
     * > [getSerialNumberForOsAccountLocalId]{@link osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int)}
     * >  instead.
     *
     * @param { number } localId - ID of the target OS account.
     * @returns { Promise<number> } Promise used to return the SN obtained.
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int)
     */
    getSerialNumberByOsAccountLocalId(localId: number): Promise<number>;

    /**
     * Obtains the SN of an OS account based on the account ID. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { int } localId - ID of the target OS account.
     * @param { AsyncCallback<long> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the SN obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>): void;

    /**
     * Obtains the SN of an OS account based on the account ID. This API uses a promise to return the result.
     *
     * @param { int } localId - ID of the target OS account.
     * @returns { Promise<long> } Promise used to return the SN obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getSerialNumberForOsAccountLocalId(localId: int): Promise<long>;

    /**
     * Subscribes to the OS account activation states, including the states of the account being activated and the
     * account with activation completed. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { 'activate' | 'activating' } type - Type of the event to subscribe to.
     *     The value **activate** indicates that an OS account is activated, and **activating**
     *     indicates that an OS account is being activated.
     * @param { string } name - Subscription name, which can be customized.
     *     The value cannot be empty or exceed 1024 bytes.
     * @param { Callback<int> } callback - Callback used to return the ID of the OS account
     *     being activated or activated.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     */
    on(type: 'activate' | 'activating', name: string, callback: Callback<int>): void;

    /**
     * Unsubscribes from the OS account activation states, including the states of the account being activated and
     * the account with activation completed. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { 'activate' | 'activating' } type - Type of the event to unsubscribe from. The value
     *     **activate** indicates that an OS account is activated, and
     *     **activating** indicates that an OS account is being activated.
     * @param { string } name - Subscription name, which can be customized. The value cannot be empty or
     *     exceed 1024 bytes, and must be the same as the value passed by **on()**.
     * @param { Callback<int> } callback - Callback to unregister. By default, this parameter is left empty,
     *     which unregisters all callbacks for the OS account activation states.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     */
    off(type: 'activate' | 'activating', name: string, callback?: Callback<int>): void;

    /**
     * Subscribes to the switchover between a foreground OS account and a background OS account in progress.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switching' } type - Event type. The value **switching** indicates that the switchover
     *     between a foreground OS account and a background account is being performed.
     * @param { Callback<OsAccountSwitchEventData> } callback - Callback to be invoked when an OS account is
     *     switching between the foreground and background. The source and target OS account IDs are
     *     subscribed to.<br>Note: Since API version 23, the optional field **displayId** is available,
     *     indicating the ID of the logical display where the switch event occurs.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    on(type: 'switching', callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * Unsubscribes from the switchover between a foreground OS account and a background OS account in progress.
     *  This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switching' } type - Event type. The value **switching** indicates that the switchover
     *     between a foreground OS account and a background account is being performed.
     * @param { Callback<OsAccountSwitchEventData> } [callback] - Callback to unregister.
     *     By default, this parameter is left empty, which unregisters all callbacks for the **switching** event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    off(type: 'switching', callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * Subscribes to the end of a switchover between a foreground OS account and a background OS account. This
     * API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switched' } type - Event type. The value **switched** indicates that the switchover
     *     between a foreground OS account and a background OS account is complete.
     * @param { Callback<OsAccountSwitchEventData> } callback - Callback to be invoked when an OS account is
     *     switched between the foreground and background. The source and target OS account IDs are subscribed to.
     *     <br>Note: Since API version 23, the optional field **displayId** is available, indicating the ID of the
     *     logical display where the switch event occurs.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    on(type: 'switched', callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * Unsubscribes from the end of a switchover between a foreground OS account and a background OS account.
     * This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switched' } type - Event type. The value **switched** indicates that the switchover
     *     between a foreground OS account and a background OS account is complete.
     * @param { Callback<OsAccountSwitchEventData> } [callback] - Callback to unregister. By default, this parameter
     *     is left empty, which unregisters all callbacks for the **switched** event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    off(type: 'switched', callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * Subscribes to the event indicating the completion of an OS account activation.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - Indicates the name of subscriber.
     * @param { Callback<int> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onActivate(name: string, callback: Callback<int>): void;

    /**
     * Subscribes to the event indicating that an OS account is being activated.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - Indicates the name of subscriber.
     * @param { Callback<int> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onActivating(name: string, callback: Callback<int>): void;

    /**
     * Unsubscribes from the event indicating the completion of an OS account activation.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - Indicates the name of subscriber.
     * @param { Callback<int> } [callback] - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offActivate(name: string, callback?: Callback<int>): void;

    /**
     * Unsubscribes from the event indicating that an OS account is being activated.
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - Indicates the name of subscriber.
     * @param { Callback<int> } [callback] - Asynchronous callback interface.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offActivating(name: string, callback?: Callback<int>): void;

    /**
     * Subscribes to the OS account switching event.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } callback - Indicates the callback for getting the event data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onSwitching(callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * Unsubscribes from the OS account switching event.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } [callback] - Indicates the callback for getting the event data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offSwitching(callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * Subscribes to the OS account switched event.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } callback - Indicates the callback for getting the event data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onSwitched(callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * Unsubscribes from the OS account switched event.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } [callback] - Indicates the callback for getting the event data.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offSwitched(callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * Subscribes to one or more constraint change events of the OS account to which the caller belongs. This API
     * uses an asynchronous callback to return the result.
     *
     * @param { string[] } constraints - List of
     *     [constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints)
     *     to be subscribed to.
     * @param { Callback<ConstraintChangeInfo> } callback - Callback used to listen for the constraint change events.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - One or more constraints are invalid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    onConstraintChanged(constraints: string[], callback: Callback<ConstraintChangeInfo>): void;

    /**
     * Unsubscribes from constraint change events associated with the specified callback. If no callback is specified,
     * this API unsubscribes from all subscription records.
     *
     * @param { Callback<ConstraintChangeInfo> } [callback] - Callback for receiving constraint change information.
     *     - Callback used to listen for the constraint change events.<br>The
     *     default value is **undefined**, indicating that all subscription records are unsubscribed.<br>If this
     *     parameter is not **undefined**, the subscription records associated with the callback are unsubscribed.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    offConstraintChanged(callback?: Callback<ConstraintChangeInfo>): void;

    /**
     * Obtains the bundle ID based on the specified UID. This API uses an asynchronous callback to return the result.
     *
     * @param { int } uid - Process UID.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **null** and **data** is the bundle ID obtained. Otherwise, **data** is an error object.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getBundleIdForUid(uid: int, callback: AsyncCallback<int>): void;

    /**
     * Obtains the bundle ID based on the specified UID. This API uses a promise to return the result.
     *
     * @param { int } uid - Process UID.
     * @returns { Promise<int> } Promise used to return the bundle ID obtained.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getBundleIdForUid(uid: int): Promise<int>;

    /**
     * Obtains the bundle ID based on the specified UID. The API returns the result synchronously.
     *
     * @param { int } uid - Process UID.
     * @returns { int } Bundle ID obtained.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    getBundleIdForUidSync(uid: int): int;

    /**
     * Checks whether the current process belongs to the main OS account. This API uses an asynchronous callback to
     * return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If **true** is returned,
     *     the current process belongs to the main OS account. If **false** is returned, the current process
     *     does not belong to the main OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isMainOsAccount(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the current process belongs to the main OS account. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<boolean> } Promise used to return the result. If **true** is returned, the current process
     *     belongs to the main OS account. If **false** is returned, the current process does not belong to
     *     the main OS account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isMainOsAccount(): Promise<boolean>;

    /**
     * Obtains the constraint source information of an OS account. This API uses an asynchronous callback to return
     * the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) whose
     *     source information is to be obtained.
     * @param { AsyncCallback<Array<ConstraintSourceTypeInfo>> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **null** and **data** is the
     *     [constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) source
     *     information obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountConstraintSourceTypes(localId: int, constraint: string, callback: AsyncCallback<Array<ConstraintSourceTypeInfo>>): void;

    /**
     * Obtains the constraint source information of an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { string } constraint -
     *     [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) whose
     *     source information is to be obtained.
     * @returns { Promise<Array<ConstraintSourceTypeInfo>> } Promise used to return the source information of
     *     the specified [constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints).
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountConstraintSourceTypes(localId: int, constraint: string): Promise<Array<ConstraintSourceTypeInfo>>;

    /**
     * Binds a domain account to an OS account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - ID of the target OS account.
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domain account information.
     * @throws { BusinessError } 12300003 - The OS account not found.
     * @throws { BusinessError } 12300008 - Restricted OS account. Possible causes: The OS account cannot be bound.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target OS account or
     *     domain account is being operated.
     * @throws { BusinessError } 12300021 - The OS account is already bound.
     * @throws { BusinessError } 12300022 - The domain account is already bound.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bindDomainAccount(localId: int, domainAccountInfo: DomainAccountInfo): Promise<void>;
  }

  /**
   * Defines the OS account sub-profile manager class.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OsAccountSubProfileManager {
    /**
     * Creates an OS account sub-profile.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - Local ID of the target OS account.
     * @returns { Promise<OsAccountSubProfile> } Promise used to return the created sub-profile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - The OS account not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target OS account is being
     *     operated.
     * @throws { BusinessError } 12300402 - The number of sub-profiles under the OS account has reached limit.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    createOsAccountSubProfile(osAccountLocalId: int): Promise<OsAccountSubProfile>;

    /**
     * Deletes an OS account sub-profile.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - Local ID of the target OS account.
     * @param { int } subProfileId - ID of the sub-profile.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The OS account or sub-profile is being
     *     operated.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @throws { BusinessError } 12300403 - Restricted sub-profile cannot be deleted.
     * @throws { BusinessError } 12300404 - The foreground sub-profile cannot be deleted.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deleteOsAccountSubProfile(osAccountLocalId: int, subProfileId: int): Promise<void>;

    /**
     * Switches to an OS account sub-profile.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - Local ID of the OS account.
     * @param { int } subProfileId - ID of the sub-profile.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The OS account or sub-profile is being
     *     operated.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @throws { BusinessError } 12300403 - Restricted sub-profile cannot be switched to foreground.
     * @throws { BusinessError } 12300405 - The foreground sub-profile bound with a logged-in distributed account
     *     cannot be directly switched to background.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    switchOsAccountSubProfile(osAccountLocalId: int, subProfileId: int): Promise<void>;

    /**
     * Subscribes to OS account sub-profile events.
     *
     * @param { OsAccountSubProfileEvent[] } events - Array of events to be subscribed
     * @param { Callback<OsAccountSubProfileEventData> } callback - Callback invoked when an event occurs.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid event.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onOsAccountSubProfileEvent(
      events: OsAccountSubProfileEvent[],
      callback: Callback<OsAccountSubProfileEventData>): void;

    /**
     * Unsubscribes from OS account sub-profile events.
     *
     * @param { Callback<OsAccountSubProfileEventData> } [callback] - Callback to be unsubscribed.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offOsAccountSubProfileEvent(callback?: Callback<OsAccountSubProfileEventData>): void;

    /**
     * Gets the foreground sub-profile ID of the OS account to which the caller belongs.
     *
     * @returns { Promise<int> } Promise used to return the id of the OS account foreground sub-profile.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountForegroundSubProfileId(): Promise<int>;

    /**
     * Gets the foreground sub-profile ID of a specified OS account.
     *
     * @param { int } osAccountLocalId - Local ID of the OS account.
     * @returns { Promise<int> } Promise used to return the id of the OS account foreground sub-profile.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @throws { BusinessError } 12300401 - The foreground sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountForegroundSubProfileId(osAccountLocalId: int): Promise<int>;

    /**
     * Gets the ID list of sub-profile of the OS account to which the caller belongs.
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @returns { Promise<int[]> } Promise used to return the ID list of sub-profile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfileIds(): Promise<int[]>;

    /**
     * Gets the ID list of sub-profile of a specified OS account.
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @param { int } osAccountLocalId - Local ID of the OS account.
     * @returns { Promise<int[]> } Promise used to return the ID list of sub-profile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfileIds(osAccountLocalId: int): Promise<int[]>;

    /**
     * Gets the sub-profile object information of the OS account to which the caller belongs.
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNTS
     * @param { int } subProfileId - ID of the sub-profile.
     * @returns { Promise<OsAccountSubProfile> } Promise used to return the sub-profile object information.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfile(subProfileId: int): Promise<OsAccountSubProfile>;

    /**
     * Gets the sub-profile object information of the specified OS account.
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - Local ID of the OS account.
     * @param { int } subProfileId - ID of the sub-profile.
     * @returns { Promise<OsAccountSubProfile> } Promise used to return the sub-profile object information.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfile(osAccountLocalId: int, subProfileId: int): Promise<OsAccountSubProfile>;

    /**
     * Obtains the local ID of the OS account to which a sub-profile belongs.
     *
     * @param { int } subProfileId - ID of the sub-profile.
     * @returns { Promise<int> } Promise used to return the local ID of the OS account to which a sub-profile belongs.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountLocalIdForSubProfile(subProfileId: int): Promise<int>;
  }

  /**
   * Definition of an OS account sub-profile.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OsAccountSubProfile {
    /**
     * Identifier of the OS account sub-profile.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    id: int;

    /**
     * Local ID of the OS account to which the sub-profile belongs.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    osAccountLocalId: int;

    /**
     * Position index of the OS account sub-profile, ranging from 0 to the number of sub-profiles minus 1.
     * This index is unique within each OS account and is automatically assigned by the system
     * when the sub-profile is created.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    index: int;

    /**
     * Distributed account information bound to the OS account sub-profile.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    distributedInfo?: distributedAccount.DistributedInfo;
  }

  /**
   * Enumerates the events of an OS account sub-profile.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum OsAccountSubProfileEvent {
    /**
     * CREATED event.
     * Triggered when an OS account sub-profile creation is completed.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CREATED = 0,

    /**
     * DELETED event.
     * Triggered when an OS account sub-profile deletion is completed.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DELETED = 1,

    /**
     * SWITCHING event.
     * Triggered when an OS account sub-profile switch is about to happen.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SWITCHING = 2,

    /**
     * SWITCHED event.
     * Triggered when an OS account sub-profile switch is completed.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SWITCHED = 3
  }

  /**
   * Represents the event data of an OS account sub-profile.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OsAccountSubProfileEventData {
    /**
     * Event that occurred.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    event: OsAccountSubProfileEvent;

    /**
     * OS account local ID.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    osAccountLocalId: int;

    /**
     * OS account sub-profile identifier.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    subProfileId: int;

    /**
     * Previous OS account sub-profile identifier.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    previousSubProfileId?: int;
  }

  /**
   * Represents information about an OS account.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface OsAccountInfo {
    /**
     * ID of the target OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    localId: int;

    /**
     * Name of the OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    localName: string;

    /**
     * Short name of the OS account.
     *
     * This is a system API and is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    shortName?: string;

    /**
     * Type of the OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    type: OsAccountType;

    /**
     * [Constraints](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) of the system
     * account. By default, no value is passed in.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    constraints: Array<string>;

    /**
     * Whether the account has been verified. The value **true** means the specified account has been verified; the
     * value **false** means the opposite.
     *
     * Note: This parameter is supported since API version 7 and deprecated since API version 11. You are advised to use
     *  **isUnlocked** instead.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.OsAccountInfo.isUnlocked
     */
    isVerified: boolean;

    /**
     * Whether the account is unlocked (whether the **el2/** directory is decrypted). The value **true** means the
     * specified account is unlocked; the value **false** means the opposite.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isUnlocked: boolean;

    /**
     * Avatar of the OS account. By default, no value is passed in.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    photo: string;

    /**
     * OS account creation time. The value is a Unix timestamp (in seconds).
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    createTime: long;

    /**
     * Last login time of the OS account. The value is a Unix timestamp (in seconds).
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    lastLoginTime: long;

    /**
     * SN of the OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    serialNumber: long;

    /**
     * Whether the OS account is activated. The value **true** means the specified account is activated; the value
     * **false** means the opposite.
     *
     * Note: This parameter is supported since API version 7 and deprecated since API version 11. You are advised to use
     *  **isActivated** instead.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.OsAccountInfo.isActivated
     */
    isActived: boolean;

    /**
     * Whether the OS account is activated. The value **true** means the specified account is activated; the value
     * **false** means the opposite.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isActivated: boolean;

    /**
     * Whether the OS account is logged in. The value **true** means that the OS account has logged in; the
     * value **false** means the opposite.
     *
     * This is a system API. The default value is **false**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isLoggedIn?: boolean;

    /**
     * Whether the OS account information is complete. The value **true** means the specified account is complete;
     * the value **false** means the opposite.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    isCreateCompleted: boolean;

    /**
     * Distributed account information. By default, no value is passed in.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    distributedInfo: distributedAccount.DistributedInfo;

    /**
     * Domain account information. By default, no value is passed in.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    domainInfo: DomainAccountInfo;
  }

  /**
   * Defines the event that indicates the start or end of a foreground-background OS account switchover.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface OsAccountSwitchEventData {
    /**
     * ID of the source OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    fromAccountId: int;

    /**
     * ID of the target OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    toAccountId: int;

    /**
     * ID of the logical display where the switchover occurs. The default value is **0**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    displayId?: long;
  }

  /**
   * Defines the constraint change information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 dynamic&static
   */
  interface ConstraintChangeInfo {
    /**
     * [Constraint](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#constraints) that has been changed.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    constraint: string;

    /**
     * Enabling state of the changed constraint. The default value is **false**.
     *
     * The value **true** indicates that the target constraint is enabled, and **false** indicates the opposite.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    isEnabled: boolean;
  }

  /**
   * Represents the optional parameter used to create an OS account.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface CreateOsAccountOptions {
    /**
     * Short name of the account (used as the name of the personal folder).
     *
     * **The short name cannot**:
     *
     * 1. Contain any of the following characters: < >| : " * ? / \
     * 2. Contain any of the following: . or ..
     * 3. Exceed 255 characters.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    shortName: string;

    /**
     * Short name of the account (used as the name of the personal folder).
     *
     * **The short name cannot**:
     *
     * 1. Contain any of the following characters: < >| : " * ? / \
     * 2. Contain any of the following: . or ..
     * 3. Exceed 255 characters.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    shortName?: string;

    /**
     * Forbidden list of the preinstalled applications, which cannot be installed on the device. The value is left empty
     *  by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    disallowedPreinstalledBundles?: Array<string>;

    /**
     * Trustlist of the preinstalled applications, which can be installed on the device. The default value is **std::
     * nullopt**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    allowedPreinstalledBundles?: Array<string>;

    /**
     * Token obtained from the authentication management API. The value is left empty by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * Represents a set of optional parameters for creating an OS account bound to the specified domain account. It
   * inherits from [CreateOsAccountOptions]{@link osAccount.CreateOsAccountOptions}.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface CreateOsAccountForDomainOptions extends CreateOsAccountOptions {}

  /**
   * Represents the optional parameter used to remove an OS account.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 24 dynamic&static
   */
  interface RemoveOsAccountOptions {
    /**
     * Token obtained from the authentication management API. The value is left empty by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * Defines the options for setting the OS account type.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 24 dynamic&static
   */
  interface SetOsAccountTypeOptions {
    /**
     * Token obtained from the authentication management API. The value is left empty by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * Represents the domain account information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 8 dynamic
   * @since 23 static
   */
  interface DomainAccountInfo {
    /**
     * Domain name.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * Domain account name.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    accountName: string;

    /**
     * Domain account ID.
     *
     * This is a system API and is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    accountId?: string;

    /**
     * Whether the domain account has been authenticated. The value **true** means that the specified domain account has
     *  been authenticated; the value **false** means the opposite.
     *
     * This is a system API. The default value is **false**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isAuthenticated?: boolean;

    /**
     * Domain account configuration ID, which is an empty string by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    serverConfigId?: string;

    /**
     * Additional information about the domain account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    additionalInfo?: Record<string, Object>;

    /**
     * Additional information about the domain account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 static
     */
    additionalInfo?: Record<string, RecordData>;
  }

  /**
   * Enumerates the OS account types.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  enum OsAccountType {
    /**
     * Administrator account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    ADMIN = 0,

    /**
     * Normal account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    NORMAL = 1,

    /**
     * Guest account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    GUEST = 2,

    /**
     * Privacy account. Only one privacy account is allowed.
     *
     * This is a system API.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVATE = 1024
  }

  /**
   * Defines the OS account authorization manager class.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AuthorizationManager {
    /**
     * Acquires an authorization for a process.
     *
     * @permission ohos.permission.ACQUIRE_LOCAL_ACCOUNT_AUTHORIZATION
     * @param { string } privilege - Target permission. For details, see
     *     [configuration file](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json).
     * @param { AcquireAuthorizationOptions } [options] - Authorization options.
     *     This parameter is left empty by default.
     * @returns { Promise<AcquireAuthorizationResult> } Promise used to return the authorization result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid privilege or options.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    acquireAuthorization(privilege: string, options?: AcquireAuthorizationOptions): Promise<AcquireAuthorizationResult>;

    /**
     * Releases the specified authorization for the current process.
     *
     * @param { string } privilege - Target permission. For details, see
     *     [configuration file](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json).
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid privilege.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    releaseAuthorization(privilege: string): Promise<void>;

    /**
     * Checks whether the current process has specified authorization.
     *
     * @param { string } privilege - Target permission. For details, see
     *     [configuration file](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json).
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that
     *     the current process has specified authorization, and **false** indicates the opposite.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid privilege.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    hasAuthorization(privilege: string): Promise<boolean>;
  }

  /**
   * Defines the options for acquiring the authorization.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AcquireAuthorizationOptions {
    /**
     * Random challenge value, which prevents replay attacks. The value contains a maximum of 32 bytes. The default
     * value is **undefined**.
     *
     * @default undefined
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    challenge?: Uint8Array;

    /**
     * Whether to reuse the previous authorization. The default value is **true**.
     *
     * If the value is **true** and the authorization result is valid, the result will be reused. Otherwise, a new
     * authorization will be executed.
     *
     * @default true
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isReuseNeeded?: boolean;

    /**
     * Whether user interaction is allowed. The default value is **true**.
     *
     * If the value is **true**, the authorization dialog box can be displayed in the interaction context. If the value
     * is **false**, the authorization dialog box cannot be displayed.
     *
     * Note: This option is valid only when the caller is in the foreground. If the caller is in the background, user
     * interaction is not allowed.
     *
     * @default true
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isInteractionAllowed?: boolean;

    /**
     * User interaction context configuration. The default value is **undefined**.
     *
     * - If no context is specified, the authorization dialog box is displayed in modal system mode.
     * - If [UIAbilityContext](../apis-ability-kit/js-apis-inner-application-uiAbilityContext.md) or
     * [UIExtensionContext](../apis-ability-kit/js-apis-inner-application-uiExtensionContext.md) is specified, the
     * authorization dialog box is displayed in modal application mode.
     * - If no valid context is provided, the authorization dialog box cannot be displayed.
     *
     * Note: This parameter is valid only when **isInteractionAllowed** is set to **true**.
     *
     * @default undefined, which means the authorization dialog will be displayed in modal system mode.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    interactionContext?: Context;
  }

  /**
   * Enumerates authorization result codes.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AuthorizationResultCode {
    /**
     * The authorization is successful.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_SUCCESS = 0,

    /**
     * The authorization is canceled.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_CANCELED = 12300301,

    /**
     * The authorization is rejected because user interaction is not allowed.
     *
     * Possible causes:
     *
     * 1. The caller is in the background.
     * 2. The value of **isInteractionAllowed** is **false**.
     * 3. The specified interaction context is invalid.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_INTERACTION_NOT_ALLOWED = 12300302,

    /**
     * The authorization is rejected because the authorization rules are not met, for example, the account type is not
     * an administrator or the device type is not supported.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_DENIED = 12300303,

    /**
     * Authorization service is busy.
     *
     * Possible cause: Another authorization is being processed.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_SERVICE_BUSY = 12300304
  }

  /**
   * Defines the result of the authorization.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AcquireAuthorizationResult {
    /**
     * Authorization result code.
     * If the authorization is successful, AuthorizationResultCode#AUTHORIZATION_SUCCESS is returned.
     * Otherwise, an error code is returned. For details, see AuthorizationResultCode.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    resultCode: AuthorizationResultCode;

    /**
     * Permission associated with the authorization.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    privilege: string;

    /**
     * Whether the authorization result is reused. The default value is **undefined**.
     *
     * **true**: The authorization result is reused. **false**: The authorization result is not reused.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isReused?: boolean;

    /**
     * Validity period of the authorization, in seconds. The default value is **300**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    validityPeriod?: int;

    /**
     * Authorization token. The default value is **undefined**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * Provides APIs for user authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name UserAuth
   * @since 8 dynamic
   * @since 23 static
   */
  class UserAuth {
    /**
     * A constructor used to create an instance for user authentication.
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Obtains this version number.
     *
     * @returns { int } Version number obtained.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * Obtains the available status of the authentication capability corresponding to the specified authentication type
     * and trust level.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { AuthType } authType - Authentication credential type.
     * @param { AuthTrustLevel } authTrustLevel - Trust level of the authentication.
     * @returns { int } Available status of the authentication capability.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType or authTrustLevel.
     * @throws { BusinessError } 12300117 - PIN is expired.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAvailableStatus(authType: AuthType, authTrustLevel: AuthTrustLevel): int;

    /**
     * Obtains the executor property based on the request. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { GetPropertyRequest } request - Request information, including the authentication
     *     credential type and property list.
     * @param { AsyncCallback<ExecutorProperty> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the executor property information
     *     obtained. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getProperty(request: GetPropertyRequest, callback: AsyncCallback<ExecutorProperty>): void;

    /**
     * Obtains the executor property based on the request. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { GetPropertyRequest } request - Request information, including the authentication
     *     credential type and property list.
     * @returns { Promise<ExecutorProperty> } Promise used to return the executor property.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getProperty(request: GetPropertyRequest): Promise<ExecutorProperty>;

    /**
     * Obtains the specified property information of the associated executor based on the credential ID. This API uses a
     *  promise to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } credentialId - Credential ID.
     * @param { Array<GetPropertyType> } keys - Property type array to be queried.
     * @returns { Promise<ExecutorProperty> } Promise used to return the executor attributes.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid keys.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    getPropertyByCredentialId(credentialId: Uint8Array, keys: Array<GetPropertyType>): Promise<ExecutorProperty>;

    /**
     * Sets the property for the initialization algorithm. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { SetPropertyRequest } request - Request information, including the authentication
     *     credential type and the key value to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    setProperty(request: SetPropertyRequest, callback: AsyncCallback<void>): void;

    /**
     * Sets the property for the initialization algorithm. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { SetPropertyRequest } request - Request information, including the authentication
     *     credential type and the key value to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    setProperty(request: SetPropertyRequest): Promise<void>;

    /**
     * Prepares for remote authentication. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { string } remoteNetworkId - Remote network ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid remoteNetworkId.
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300111 - Operation timeout. [since 20]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    prepareRemoteAuth(remoteNetworkId: string): Promise<void>;

    /**
     * Performs authentication of the current user.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } challenge - Challenge value, which is a random number used to improve security.
     * @param { AuthType } authType - Authentication credential type.
     * @param { AuthTrustLevel } authTrustLevel - Trust level of the authentication result.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @returns { Uint8Array } ID of the context for canceling the authentication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge, authType or authTrustLevel.
     * @throws { BusinessError } 12300013 - Network exception. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 20]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300101 - The credential is incorrect.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300105 - The trust level is not supported.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The authentication service does not exist. [since 12]
     * @throws { BusinessError } 12300114 - The authentication service works abnormally. [since 12]
     * @throws { BusinessError } 12300117 - PIN is expired. [since 12]
     * @throws { BusinessError } 12300119 - Multi-factor authentication failed. [since 20]
     * @throws { BusinessError } 12300120 - The credentials are no longer valid. [since 23]
     * @throws { BusinessError } 12300211 - Server unreachable. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    auth(
      challenge: Uint8Array,
      authType: AuthType,
      authTrustLevel: AuthTrustLevel,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * Starts user authentication based on the specified challenge value, authentication type (PIN, facial, or
     * fingerprint authentication), authentication trust level, and optional parameters (such as the account ID and
     * authentication intent).
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } challenge - Challenge value, which is a random number used to prevent
     *     replay attacks and improve security.
     * @param { AuthType } authType - Authentication credential type.
     * @param { AuthTrustLevel } authTrustLevel - Trust level of the authentication result.
     * @param { AuthOptions } options - Optional parameters for the authentication.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @returns { Uint8Array } ID of the context for canceling the authentication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge, authType, authTrustLevel or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 20]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300101 - The credential is incorrect.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300105 - The trust level is not supported.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication timeout.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The authentication service does not exist.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300117 - PIN is expired.
     * @throws { BusinessError } 12300119 - Multi-factor authentication failed. [since 20]
     * @throws { BusinessError } 12300120 - The credentials are no longer valid. [since 23]
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    auth(
      challenge: Uint8Array,
      authType: AuthType,
      authTrustLevel: AuthTrustLevel,
      options: AuthOptions,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * Performs authentication of the specified user. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { int } userId - User ID.
     * @param { Uint8Array } challenge - Challenge value, which is a random number used to improve security.
     * @param { AuthType } authType - Authentication credential type.
     * @param { AuthTrustLevel } authTrustLevel - Trust level of the authentication result.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @returns { Uint8Array } ID of the context for canceling the authentication.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge, authType or authTrustLevel.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300013 - Network exception. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 20]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300101 - The credential is incorrect.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300105 - The trust level is not supported.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication timeout.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The authentication service does not exist. [since 12]
     * @throws { BusinessError } 12300114 - The authentication service works abnormally. [since 12]
     * @throws { BusinessError } 12300117 - PIN is expired. [since 12]
     * @throws { BusinessError } 12300119 - Multi-factor authentication failed. [since 20]
     * @throws { BusinessError } 12300120 - The credentials are no longer valid. [since 23]
     * @throws { BusinessError } 12300211 - Server unreachable. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authUser(
      userId: int,
      challenge: Uint8Array,
      authType: AuthType,
      authTrustLevel: AuthTrustLevel,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * Cancels an authentication.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } contextID - ID of the authentication context. The context ID is dynamically generated.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid contextId.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cancelAuth(contextID: Uint8Array): void;
  }

  /**
   * Provides APIs for PIN authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name PINAuth
   * @since 8 dynamic
   * @since 23 static
   */
  class PINAuth {
    /**
     * Creates a PIN authentication instance.
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Registers a PIN inputer.
     *
     * @permission ohos.permission.ACCESS_PIN_AUTH
     * @param { IInputer } inputer - PIN inputer, which is used to obtain the PIN.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid inputer.
     * @throws { BusinessError } 12300103 - The credential inputer already exists.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    registerInputer(inputer: IInputer): void;

    /**
     * Unregisters this PIN inputer.
     *
     * @permission ohos.permission.ACCESS_PIN_AUTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    unregisterInputer(): void;
  }

  /**
   * Provides APIs for managing credential inputers.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name InputerManager
   * @since 9 dynamic
   * @since 23 static
   */
  class InputerManager {
    /**
     * Registers a credential inputer.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL or ohos.permission.MANAGE_USER_IDM
     * @param { AuthType } authType - Authentication credential type.
     * @param { IInputer } inputer - Credential inputer to register.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType or inputer.
     * @throws { BusinessError } 12300103 - The credential inputer already exists.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static registerInputer(authType: AuthType, inputer: IInputer): void;

    /**
     * Unregisters a credential inputer.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL or ohos.permission.MANAGE_USER_IDM
     * @param { AuthType } authType - Authentication credential type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static unregisterInputer(authType: AuthType): void;
  }

  /**
   * Presents the authentication status information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface AuthStatusInfo {
    /**
     * Number of remaining times.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    remainTimes: int;

    /**
     * Freezing time, in milliseconds.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    freezingTime: int;
  }

  /**
   * Defines the options for obtaining a domain access token.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface GetDomainAccessTokenOptions {
    /**
     * Domain account information.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    domainAccountInfo: DomainAccountInfo;

    /**
     * Token of the domain account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    domainAccountToken: Uint8Array;

    /**
     * Service parameters customized by the service party based on the request protocol.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    businessParams: Record<string, Object>;

    /**
     * Indicates the business parameters.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    businessParams: Record<string, RecordData>;

    /**
     * Unique identifier of the caller.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    callerUid: int;
  }

  /**
   * Defines the options for obtaining domain account information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface GetDomainAccountInfoOptions {
    /**
     * Domain account name.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    accountName: string;

    /**
     * Domain name, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    domain?: string;

    /**
     * ID of the server to which the domain account belongs, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    serverConfigId?: string;
  }

  /**
   * Defines the options for the domain plug-in to obtain the domain account information. The
   * **GetDomainAccountInfoPluginOptions** class inherits from
   * [**GetDomainAccountInfoOptions**]{@link osAccount.GetDomainAccountInfoOptions}.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface GetDomainAccountInfoPluginOptions extends GetDomainAccountInfoOptions {
    /**
     * Unique identifier of the caller.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    callerUid: int;
  }

  /**
   * Authenticates the specified domain account.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information for authentication.
   * @param { Uint8Array } credential - Indicates the credential for authentication.
   * @param { IUserAuthCallback } callback - Indicates the authentication callback.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginAuthFunc = (domainAccountInfo: DomainAccountInfo,
    credential: Uint8Array, callback: IUserAuthCallback) => void;

  /**
   * Authenticates the specified domain account with a popup.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information for authentication.
   * @param { IUserAuthCallback } callback - Indicates the callback for notifying the authentication result.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginAuthWithPopupFunc = (domainAccountInfo: DomainAccountInfo,
    callback: IUserAuthCallback) => void;

  /**
   * Authenticates the specified domain account with an authorization token.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information for authentication.
   * @param { Uint8Array } token - Indicates the authorization token generated when PIN or biometric authentication is
   *     successful.
   * @param { IUserAuthCallback } callback - Indicates the callback for notifying the authentication result.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginAuthWithTokenFunc = (domainAccountInfo: DomainAccountInfo,
    token: Uint8Array, callback: IUserAuthCallback) => void;

  /**
   * Gets the domain account information with the specified options.
   *
   * @param { GetDomainAccountInfoPluginOptions } options - Indicates the options for getting domain account
   *     information.
   * @param { AsyncCallback<DomainAccountInfo> } callback - Indicates the callback for notifying the domain account
   *     information.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginGetAccountInfoFunc = (options: GetDomainAccountInfoPluginOptions,
    callback: AsyncCallback<DomainAccountInfo>) => void;

  /**
   * Gets the domain authentication property for the specified domain account.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information for authentication.
   * @param { AsyncCallback<AuthStatusInfo> } callback - Indicates the callback for notifying the domain authentication
   *     status information.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginGetAuthStatusInfoFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<AuthStatusInfo>) => void;

  /**
   * Binds the specified domain account with an OS account.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information.
   * @param { int } localId - Indicates the local ID of the OS account.
   *     <br>The value should be an integer.
   * @param { AsyncCallback<void> } callback - Indicates the callback for notifying the binding result.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginBindAccountFunc = (domainAccountInfo: DomainAccountInfo,
    localId: int, callback: AsyncCallback<void>) => void;

  /**
   * Unbind the specified domain account.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information.
   * @param { AsyncCallback<void> } callback - Indicates the callback for notifying the unbinding result.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginUnbindAccountFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<void>) => void;

  /**
   * Checks whether the token of specified domain account is valid.
   *
   * @param { DomainAccountInfo } domainAccountInfo - Indicates the domain account information.
   * @param { Uint8Array } token - Indicates the account token.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for notifying the checking result.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginIsAccountTokenValidFunc = (
    domainAccountInfo: DomainAccountInfo,
    token: Uint8Array,
    callback: AsyncCallback<boolean>
  ) => void;

  /**
   * Gets the access token based on the specified options.
   *
   * @param { GetDomainAccessTokenOptions } options - Indicates the options for getting th access token.
   * @param { AsyncCallback<Uint8Array> } callback - Indicates the callback for returning the access token.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginGetAccessTokenFunc = (options: GetDomainAccessTokenOptions,
    callback: AsyncCallback<Uint8Array>) => void;

  /**
   * Provides APIs for domain account authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface DomainPlugin {
    /**
     * Authenticates a domain account.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } credential - Credentials of the domain account.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    auth(domainAccountInfo: DomainAccountInfo, credential: Uint8Array, callback: IUserAuthCallback): void;

    /**
     * Authenticates the specified domain account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    auth: DomainPluginAuthFunc;

    /**
     * Authenticates a domain account in a pop-up window.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    authWithPopup(domainAccountInfo: DomainAccountInfo, callback: IUserAuthCallback): void;

    /**
     * Authenticates the specified domain account with a popup.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    authWithPopup: DomainPluginAuthWithPopupFunc;

    /**
     * Authenticates a domain account by the authorization token.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } token - Authorization token generated when the PIN or
     *     biometric authentication is successful.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    authWithToken(domainAccountInfo: DomainAccountInfo, token: Uint8Array, callback: IUserAuthCallback): void;

    /**
     * Authenticates the specified domain account with an authorization token.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    authWithToken: DomainPluginAuthWithTokenFunc;

    /**
     * Obtains information about a domain account. This API uses an asynchronous callback to return the result.
     *
     * @param { GetDomainAccountInfoPluginOptions } options - Domain account information.
     * @param { AsyncCallback<DomainAccountInfo> } callback - Callback used to return the result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    getAccountInfo(options: GetDomainAccountInfoPluginOptions, callback: AsyncCallback<DomainAccountInfo>): void;

    /**
     * Gets the domain account information with the specified options.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    getAccountInfo: DomainPluginGetAccountInfoFunc;

    /**
     * Obtains the authentication status of a domain account.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { AsyncCallback<AuthStatusInfo> } callback - Callback used to return the result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    getAuthStatusInfo(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<AuthStatusInfo>): void;

    /**
     * Gets the domain authentication property for the specified domain account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    getAuthStatusInfo: DomainPluginGetAuthStatusInfoFunc;

    /**
     * Binds a domain account.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { number } localId - ID of the target OS account.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    bindAccount(domainAccountInfo: DomainAccountInfo, localId: number, callback: AsyncCallback<void>): void;

    /**
     * Binds the specified domain account with an OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    bindAccount: DomainPluginBindAccountFunc;

    /**
     * Unbinds a domain account.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    unbindAccount(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<void>): void;

    /**
     * Unbind the specified domain account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    unbindAccount: DomainPluginUnbindAccountFunc;

    /**
     * Checks whether the specified domain account token is valid.
     *
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } token - Domain account token to check.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     *     The value **true** means that the specified domain account token is valid;
     *     the value **false** means the opposite.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isAccountTokenValid(
      domainAccountInfo: DomainAccountInfo,
      token: Uint8Array,
      callback: AsyncCallback<boolean>
    ): void;

    /**
     * Checks whether the token of specified domain account is valid.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    isAccountTokenValid: DomainPluginIsAccountTokenValidFunc;

    /**
     * Obtains the domain access token based on the specified conditions. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { GetDomainAccessTokenOptions } options - Options specified for obtaining the domain access token.
     * @param { AsyncCallback<Uint8Array> } callback - Callback used to return the result.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    getAccessToken(options: GetDomainAccessTokenOptions, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Gets the access token based on the specified options.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    getAccessToken: DomainPluginGetAccessTokenFunc;
  }

  /**
   * Defines the options for domain account authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 24 dynamic&static
   */
  interface DomainAccountAuthOptions {
    /**
     * Configuration parameters of the domain account authentication server. which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic
     */
    serverParams?: Record<string, Object>;

    /**
     * Indicates the server parameters.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 static
     */
    serverParams?: Record<string, RecordData>;
  }

  /**
   * Provides APIs for domain account management.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 18 dynamic
   * @since 23 static
   */
  class DomainAccountManager {
    /**
     * Registers a domain plug-in.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainPlugin } plugin - Domain plug-in to register.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @throws { BusinessError } 12300201 - The domain plugin has been registered.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static registerPlugin(plugin: DomainPlugin): void;

    /**
     * Unregisters this domain plug-in.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static unregisterPlugin(): void;

    /**
     * Authenticates a domain account.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } credential - Credentials of the domain account.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo or credential.
     * @throws { BusinessError } 12300003 - Domain account does not exist.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static auth(domainAccountInfo: DomainAccountInfo, credential: Uint8Array, callback: IUserAuthCallback): void;

    /**
     * Authenticates a specified domain account. You can specify authentication options, such as server parameters. This
     *  API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } credential - Credentials of the domain account.
     * @param { DomainAccountAuthOptions } options - Options for domain account authentication.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo or credential.
     * @throws { BusinessError } 12300003 - Domain account does not exist.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 24 dynamic&static
     */
    static auth(
      domainAccountInfo: DomainAccountInfo,
      credential: Uint8Array,
      options: DomainAccountAuthOptions,
      callback: IUserAuthCallback): void;

    /**
     * Authenticates a domain account in a pop-up window.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL [since 10 - 10]
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @throws { BusinessError } 201 - Permission denied. [since 10 - 10]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - No domain account is bound.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable. [since 11]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static authWithPopup(callback: IUserAuthCallback): void;

    /**
     * Authenticates a domain account in a pop-up window.
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL [since 10 - 10]
     * @param { int } localId - Local ID of the OS account bound to the domain account.
     * @param { IUserAuthCallback } callback - Callback used to return the authentication result.
     * @throws { BusinessError } 201 - Permission denied. [since 10 - 10]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - No domain account is bound.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable. [since 11]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static authWithPopup(localId: int, callback: IUserAuthCallback): void;

    /**
     * Checks whether a domain account exists. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     *     The value **true** means that the specified domain account exists; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static hasAccount(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether a domain account exists. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @returns { Promise<boolean> } Promise used to return the result.
     *     The value **true** means that the specified domain account exists; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static hasAccount(domainAccountInfo: DomainAccountInfo): Promise<boolean>;

    /**
     * Updates the token of a domain account. An empty token means an invalid token. This API uses an asynchronous
     * callback to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } token - New domain account token.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static updateAccountToken(
      domainAccountInfo: DomainAccountInfo,
      token: Uint8Array,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Updates the token of a domain account. An empty token means an invalid token. This API uses a promise to return
     * the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @param { Uint8Array } token - New domain account token.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static updateAccountToken(domainAccountInfo: DomainAccountInfo, token: Uint8Array): Promise<void>;

    /**
     * Updates information of a domain account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.MANAGE_DOMAIN_ACCOUNTS
     * @param { DomainAccountInfo } oldAccountInfo - Domain account information.
     * @param { DomainAccountInfo } newAccountInfo - New domain account information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - The new account info is invalid.
     * @throws { BusinessError } 12300003 - The old account not found.
     * @throws { BusinessError } 12300004 - The new account already exists.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static updateAccountInfo(oldAccountInfo: DomainAccountInfo, newAccountInfo: DomainAccountInfo): Promise<void>;

    /**
     * Obtains information about a specified domain account. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS
     * @param { GetDomainAccountInfoOptions } options - Domain account information.
     * @param { AsyncCallback<DomainAccountInfo> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static getAccountInfo(options: GetDomainAccountInfoOptions, callback: AsyncCallback<DomainAccountInfo>): void;

    /**
     * Obtains information about a specified domain account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS
     * @param { GetDomainAccountInfoOptions } options - Domain account information.
     * @returns { Promise<DomainAccountInfo> } Promise used to return the domain account information obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static getAccountInfo(options: GetDomainAccountInfoOptions): Promise<DomainAccountInfo>;

    /**
     * Obtains the service access token of a domain account. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { Record<string, Object> } businessParams - Service parameters.
     *     The specific formats vary depending on the domain plug-in.
     * @param { AsyncCallback<Uint8Array> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null**. Otherwise, an error object is returned.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    static getAccessToken(businessParams: Record<string, Object>, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Gets the business access token of the current domain account.
     *
     * @param { Record<string, RecordData> } businessParams - Indicates the business parameters.
     * @param { AsyncCallback<Uint8Array> } callback - Indicates the result callback.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static getAccessToken(businessParams: Record<string, RecordData>, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the service access token of a domain account. This API uses a promise to return the result.
     *
     * @param { Record<string, Object> } businessParams - Service parameters.
     *     The specific formats vary depending on the domain plug-in.
     * @returns { Promise<Uint8Array> } Promise used to return the service access token obtained.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    static getAccessToken(businessParams: Record<string, Object>): Promise<Uint8Array>;

    /**
     * Gets the business access token for the current domain account.
     *
     * @param { Record<string, RecordData> } businessParams - Indicates the business parameters.
     * @returns { Promise<Uint8Array> } The promise returned by the function.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static getAccessToken(businessParams: Record<string, RecordData>): Promise<Uint8Array>;

    /**
     * Checks whether the authentication of a domain account has expired. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - Domain account information.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that
     *     the specified domain account has expired; the value **false** means the opposite.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    static isAuthenticationExpired(domainAccountInfo: DomainAccountInfo): Promise<boolean>;
  }

  /**
   * Represents the configuration of a domain server.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 18 dynamic
   * @since 23 static
   */
  interface DomainServerConfig {
    /**
     * Server configuration parameters.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     */
    parameters: Record<string, Object>;

    /**
     * Server configuration parameters.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    parameters: Record<string, RecordData>;

    /**
     * Server configuration ID.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Domain to which the server belongs.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    domain: string;
  }

  /**
   * Provides APIs for domain server configuration and management.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 18 dynamic
   * @since 23 static
   */
  class DomainServerConfigManager {
    /**
     * Adds domain server configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { Record<string, Object> } parameters - Configuration parameters of the domain server.
     * @returns { Promise<DomainServerConfig> } Promise used to return the configuration of
     *     the newly added domain server.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300215 - The number of server config reaches the upper limit.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     */
    static addServerConfig(parameters: Record<string, Object>): Promise<DomainServerConfig>;

    /**
     * Adds domain server configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { Record<string, RecordData> } parameters - Configuration parameters of the domain server.
     * @returns { Promise<DomainServerConfig> } Promise used to return the configuration of
     *     the newly added domain server.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300215 - The number of server config reaches the upper limit.
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    static addServerConfig(parameters: Record<string, RecordData>): Promise<DomainServerConfig>;

    /**
     * Removes domain server configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - Server configuration ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @throws { BusinessError } 12300214 - Server config has been associated with an account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static removeServerConfig(configId: string): Promise<void>;

    /**
     * Updates the domain server configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - Server configuration ID.
     * @param { Record<string, Object> } parameters - Configuration parameters of the domain server.
     * @returns { Promise<DomainServerConfig> } Promise used to return the updated domain server configuration.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300214 - Server config has been associated with an account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     */
    static updateServerConfig(configId: string, parameters: Record<string, Object>): Promise<DomainServerConfig>;

    /**
     * Updates the domain server configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - Server configuration ID.
     * @param { Record<string, RecordData> } parameters - Configuration parameters of the domain server.
     * @returns { Promise<DomainServerConfig> } Promise used to return the updated domain server configuration.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300214 - Server config has been associated with an account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    static updateServerConfig(configId: string, parameters: Record<string, RecordData>): Promise<DomainServerConfig>;

    /**
     * Obtains the domain server configuration. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - Server configuration ID.
     * @returns { Promise<DomainServerConfig> } Promise used to return the domain server configuration obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static getServerConfig(configId: string): Promise<DomainServerConfig>;

    /**
     * Obtains the configurations of all domain servers. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @returns { Promise<Array<DomainServerConfig>> } Promise used to return the domain server configuration obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static getAllServerConfigs(): Promise<Array<DomainServerConfig>>;

    /**
     * Obtains the server configuration of a domain account. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { DomainAccountInfo } domainAccountInfo - Information of the domain account.
     * @returns { Promise<DomainServerConfig> } Promise used to return the domain server configuration of the account.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static getAccountServerConfig(domainAccountInfo: DomainAccountInfo): Promise<DomainServerConfig>;
  }

  /**
   * Provides APIs for user IDM.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name UserIdentityManager
   * @since 8 dynamic
   * @since 23 static
   */
  class UserIdentityManager {
    /**
     * A **constructor()** used to create an instance for user IDM.
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Opens a session to obtain the challenge value. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { AsyncCallback<Uint8Array> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the challenge value obtained.
     *     Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    openSession(callback: AsyncCallback<Uint8Array>): void;

    /**
     * Opens a session. This API returns a challenge value, which can be used to determine whether the subsequent
     * identity authentication is in this session. This can prevent replay attacks. This API uses a promise to return
     * the result.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { int } [accountId] - OS account ID, which is left blank by default.
     * @returns { Promise<Uint8Array> } Promise used to return the challenge value obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300008 - Restricted account. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    openSession(accountId?: int): Promise<Uint8Array>;

    /**
     * Adds credential information, including the credential type, subtype, and token (if a non-PIN credential is added)
     * .
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { CredentialInfo } credentialInfo - Credential information to add.
     * @param { IIdmCallback } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid credentialInfo, i.e. authType or authSubType.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300008 - Restricted account. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 23]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 23]
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300111 - The operation timeout.
     * @throws { BusinessError } 12300115 - The number of credentials reaches the upper limit.
     * @throws { BusinessError } 12300116 - Credential complexity verification failed. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    addCredential(credentialInfo: CredentialInfo, callback: IIdmCallback): void;

    /**
     * Updates credential information. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { CredentialInfo } credentialInfo - Credential information to add.
     * @param { IIdmCallback } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid credentialInfo, i.e. authType or authSubType.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300116 - Credential complexity verification failed. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    updateCredential(credentialInfo: CredentialInfo, callback: IIdmCallback): void;

    /**
     * Closes this session to terminate IDM.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { int } [accountId] - OS account ID, which is left blank by default.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types. [since 12]
     * @throws { BusinessError } 12300001 - The system service works abnormally. [since 12]
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300008 - Restricted account. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    closeSession(accountId?: int): void;

    /**
     * Cancels an entry based on the challenge value.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { Uint8Array } challenge - Challenge value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cancel(challenge: Uint8Array): void;

    /**
     * Deletes a user with an authentication token. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { Uint8Array } token - Authentication token.
     * @param { IIdmCallback } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    delUser(token: Uint8Array, callback: IIdmCallback): void;

    /**
     * Deletes user credential information.
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { Uint8Array } credentialId - Credential ID.
     * @param { Uint8Array } token - Authentication token.
     * @param { IIdmCallback } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid credentialId.
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    delCred(credentialId: Uint8Array, token: Uint8Array, callback: IIdmCallback): void;

    /**
     * Obtains authentication information. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AsyncCallback<Array<EnrolledCredInfo>> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is information about all registered
     *     credentials of the user. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAuthInfo(callback: AsyncCallback<Array<EnrolledCredInfo>>): void;

    /**
     * Obtains authentication information of the specified type. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType } authType - Authentication credential type.
     * @param { AsyncCallback<Array<EnrolledCredInfo>> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **null** and **data** is the information about
     *     all enrolled credentials of the specified type. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAuthInfo(authType: AuthType, callback: AsyncCallback<Array<EnrolledCredInfo>>): void;

    /**
     * Obtains authentication information. This API uses a promise to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType } authType - Authentication type, which indicates that information about
     *     all authentication types is obtained.
     * @returns { Promise<Array<EnrolledCredInfo>> } Promise used to return the information about
     *     all the enrolled credentials of the specified type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAuthInfo(authType: AuthType): Promise<Array<EnrolledCredInfo>>;

    /**
     * Obtains authentication information. This API uses a promise to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { GetAuthInfoOptions } [options] - Optional parameters for obtaining authentication information.
     *     This parameter is left empty by default, indicating that all enrolled credential information of
     *     the current user is obtained.
     * @returns { Promise<Array<EnrolledCredInfo>> } Promise used to return the information about
     *     all the enrolled credentials of the specified type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getAuthInfo(options?: GetAuthInfoOptions): Promise<Array<EnrolledCredInfo>>;

    /**
     * Obtains the ID of the enrolled credential based on the credential type and account ID (optional). This API uses a
     *  promise to return the result.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType } authType - Credential type.
     * @param { int } [accountId] - OS account ID, which is left blank by default.
     * @returns { Promise<Uint8Array> } Promise used to return the credential ID obtained.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getEnrolledId(authType: AuthType, accountId?: int): Promise<Uint8Array>;

    /**
     * Subscribes to one or more credential change events. This API uses a callback to return the credential change
     * information.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType[] } credentialTypes - Credential types subscribed.
     * @param { Callback<CredentialChangeInfo> } callback - Callback used to listen for the credential change events.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - One or more credential types are invalid.
     * @throws { BusinessError } 12300106 - One or more credential types are not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    onCredentialChanged(credentialTypes: AuthType[], callback: Callback<CredentialChangeInfo>): void;

    /**
     * Unsubscribes from credential change events. If no callback is not specified, this API unsubscribes from all
     * subscription records.
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { Callback<CredentialChangeInfo> } [callback] - Callback used to listen for the credential change events.
     *     The default value is **undefined**, indicating that all subscription records are unregistered.
     *     If the value is not undefined, only the subscription records related to the specified callback are
     *     unregistered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    offCredentialChanged(callback?: Callback<CredentialChangeInfo>): void;
  }

  /**
   * Enumerates the credential change types.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  enum CredentialChangeType {
    /**
     * A credential is added.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    ADD_CREDENTIAL = 1,

    /**
     * A credential is updated.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    UPDATE_CREDENTIAL = 2,

    /**
     * A credential is deleted.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    DELETE_CREDENTIAL = 3
  }

  /**
   * Defines the credential change information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  interface CredentialChangeInfo {
    /**
     * Credential change type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    changeType: CredentialChangeType;

    /**
     * OS account ID.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    accountId: int;

    /**
     * Whether the change is silent. A silent change is automatically initiated by the system in the background.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    isSilent: boolean;

    /**
     * Credential type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    credentialType: AuthType;

    /**
     * Credential ID. An ID is returned when a credential is added or updated. which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    addedCredentialId?: Uint8Array;

    /**
     * Credential ID. An ID is returned when a credential is deleted or updated. which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    deletedCredentialId?: Uint8Array;
  }

  /**
   * Represents a set of optional parameters for
   * [GetAuthInfo]{@link osAccount.UserIdentityManager.getAuthInfo(options?: GetAuthInfoOptions)}.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface GetAuthInfoOptions {
    /**
     * Authentication type, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    authType?: AuthType;

    /**
     * OS account ID, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;
  }

  /**
   * Enumerates the authentication intents.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AuthIntent {
    /**
     * Unlock.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UNLOCK = 1,

    /**
     * Silent authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SILENT_AUTH = 2,

    /**
     * Security question authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    QUESTION_AUTH = 3,

    /**
     * Abandoned PIN authentication. After a user changes the lock screen password, the old PIN is abandoned. If a user
     * forgets the current password, the user can reset the lock screen password after passing the authentication with
     * the abandoned PIN.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ABANDONED_PIN_AUTH = 4
  }

  /**
   * Represents a set of optional parameters for remote authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface RemoteAuthOptions {
    /**
     * Network ID of the credential verifier, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    verifierNetworkId?: string;

    /**
     * Network ID of the credential collector, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    collectorNetworkId?: string;

    /**
     * Token ID of the credential collector, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    collectorTokenId?: int;
  }

  /**
   * Represents a set of optional parameters for
   * [auth]{@link osAccount.UserAuth.auth( challenge: Uint8Array, authType: AuthType, authTrustLevel: AuthTrustLevel, options: AuthOptions, callback: IUserAuthCallback )}.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AuthOptions {
    /**
     * OS account ID, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * Authentication intent, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    authIntent?: AuthIntent;

    /**
     * Remote authentication options, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    remoteAuthOptions?: RemoteAuthOptions;

    /**
     * Indicates the additional information about the authentication options.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    additionalInfo?: string;
  }

  /**
   * Provides callbacks for PIN operations.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IInputData {
    /**
     * Called to notify the caller the data is set.
     *
     * @param { AuthSubType } authSubType - Credential subtype.
     * @param { Uint8Array } data - Data (credential) to set. The data is used for authentication and
     *     operations for adding and modifying credentials.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid pinSubType.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onSetData(authSubType: AuthSubType, data: Uint8Array): void;
  }

  /**
   * Represents a set of optional parameters for
   * [onGetData](docroot://reference/apis-basic-services-kit/js-apis-osAccount-sys.md#ongetdata8).
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface GetInputDataOptions {
    /**
     * Challenge value, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    challenge?: Uint8Array;
  }

  /**
   * Provides callbacks for credential inputers.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IInputer {
    /**
     * Called to notify the caller that data is obtained.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onGetData: (authSubType: AuthSubType, callback: IInputData, options: GetInputDataOptions) => void;
  }

  /**
   * Provides callbacks for user authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IUserAuthCallback {
    /**
     * Called to return the result code and authentication result.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onResult: (result: int, extraInfo: AuthResult) => void;

    /**
     * Called to acquire identity authentication information.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void;
  }

  /**
   * Provides callbacks for IDM.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IIdmCallback {
    /**
     * Called to return the result code and request result information.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onResult: (result: int, extraInfo: RequestResult) => void;

    /**
     * Called to acquire IDM information.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void;
  }

  /**
   * Defines the request for obtaining property information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface GetPropertyRequest {
    /**
     * Authentication credential type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authType: AuthType;

    /**
     * An array of the types of the properties to obtain.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    keys: Array<GetPropertyType>;

    /**
     * OS account ID, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;
  }

  /**
   * Defines the request for setting property information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SetPropertyRequest {
    /**
     * Authentication credential type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authType: AuthType;

    /**
     * Type of the property to set.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    key: SetPropertyType;

    /**
     * Information to set.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    setInfo: Uint8Array;
  }

  /**
   * Defines the executor property.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface ExecutorProperty {
    /**
     * Result.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    result: int;

    /**
     * Authentication credential subtype.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authSubType: AuthSubType;

    /**
     * Number of remaining authentication times, which is **-1** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    remainTimes?: int;

    /**
     * Freezing time, in milliseconds. The default value is **-1**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    freezingTime?: int;

    /**
     * Next freezing time, in milliseconds. The default value is **undefined**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    nextPhaseFreezingTime?: int;

    /**
     * Enrollment progress, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    enrollmentProgress?: string;

    /**
     * Sensor information, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    sensorInfo?: string;

    /**
     * Credential length, which is **undefined** by default. When credentials with indefinite-length attributes such as
     * biometric information are queried, **undefined** is returned.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    credentialLength?: int;
  }

  /**
   * Defines the authentication result information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface AuthResult {
    /**
     * Authentication token, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    token?: Uint8Array;

    /**
     * Number of remaining authentication times, which is **-1** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    remainTimes?: int;

    /**
     * Freezing time, in milliseconds. The default value is **-1**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    freezingTime?: int;

    /**
     * Next freezing time, in milliseconds. The default value is **undefined**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    nextPhaseFreezingTime?: int;

    /**
     * Credential ID, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    credentialId?: Uint8Array;

    /**
     * OS account ID, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * Authentication validity period, in milliseconds. The default value is **undefined**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    pinValidityPeriod?: long;
  }

  /**
   * Defines the credential information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface CredentialInfo {
    /**
     * Authentication credential type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credType: AuthType;

    /**
     * Authentication credential subtype.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credSubType: AuthSubType;

    /**
     * Authentication token, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    token: Uint8Array;

    /**
     * OS account ID, which is **undefined** by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * Additional information about the credential, which is an empty string by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    additionalInfo?: string;
  }

  /**
   * Defines the request result information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface RequestResult {
    /**
     * Credential ID, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credentialId?: Uint8Array;
  }

  /**
   * Defines enrolled credential information.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface EnrolledCredInfo {
    /**
     * Credential ID, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credentialId: Uint8Array;

    /**
     * Authentication credential type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authType: AuthType;

    /**
     * Authentication credential subtype.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authSubType: AuthSubType;

    /**
     * Authentication credential template ID.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    templateId: Uint8Array;

    /**
     * Whether the credential is abandoned. The abandoned credential may be stored as a backup credential for a period
     * of time. The value **true** indicates that the credential is abandoned, and the value **false** indicates the
     * opposite. The default value is **undefined**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isAbandoned?: boolean;

    /**
     * Credential validity period, in milliseconds. The default value is **undefined**.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    validityPeriod?: long;
  }

  /**
   * Enumerates the types of properties to obtain.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum GetPropertyType {
    /**
     * Authentication credential subtype.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    AUTH_SUB_TYPE = 1,

    /**
     * Number of remaining times.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    REMAIN_TIMES = 2,

    /**
     * Freezing time.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FREEZING_TIME = 3,

    /**
     * Enrollment progress, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ENROLLMENT_PROGRESS = 4,

    /**
     * Sensor information, which is left blank by default.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SENSOR_INFO = 5,

    /**
     * Next freezing time.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    NEXT_PHASE_FREEZING_TIME = 6,

    /**
     * Credential length.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CREDENTIAL_LENGTH = 7
  }

  /**
   * Enumerates the types of properties to set.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum SetPropertyType {
    /**
     * Initialization algorithm.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INIT_ALGORITHM = 1
  }

  /**
   * Enumerates the authentication credential types.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthType {
    /**
     * PIN authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN = 1,

    /**
     * Facial authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE = 2,

    /**
     * Fingerprint authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT = 4,

    /**
     * Key recovery type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    RECOVERY_KEY = 8,

    /**
     * Private PIN type.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PRIVATE_PIN = 16,

    /**
     * Companion device authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    COMPANION_DEVICE = 64,

    /**
     * Custom authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CUSTOM = 128,

    /**
     * Domain authentication.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOMAIN = 1024
  }

  /**
   * Enumerates the authentication credential subtypes.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthSubType {
    /**
     * Six-digit PIN.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_SIX = 10000,

    /**
     * Custom PIN.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_NUMBER = 10001,

    /**
     * Custom mixed credentials.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_MIXED = 10002,

    /**
     * 4-digit credential.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PIN_FOUR = 10003,

    /**
     * Pattern credential.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PIN_PATTERN = 10004,

    /**
     * Security question credential.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PIN_QUESTION = 10005,

    /**
     * 2D face credential.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_2D = 20000,

    /**
     * 3D face credential.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_3D = 20001,

    /**
     * Capacitive fingerprint.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_CAPACITIVE = 30000,

    /**
     * Optical fingerprint.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_OPTICAL = 30001,

    /**
     * Ultrasonic fingerprint.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_ULTRASONIC = 30002,

    /**
     * Mixed domain authentication credentials.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOMAIN_MIXED = 10240001
  }

  /**
   * Enumerates the trust levels of the authentication result.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthTrustLevel {
    /**
     * Trust level 1.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL1 = 10000,

    /**
     * Trust level 2.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL2 = 20000,

    /**
     * Trust level 3.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL3 = 30000,

    /**
     * Trust level 4.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL4 = 40000
  }

  /**
   * Enumerates the modules from which information is obtained.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum Module {
    /**
     * Facial authentication module.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH = 1
  }

  /**
   * Enumerates the authentication result codes.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum ResultCode {
    /**
     * The authentication is successful or the authentication feature is supported.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * The authentication executor failed to identify the user.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FAIL = 1,

    /**
     * Other errors.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    GENERAL_ERROR = 2,

    /**
     * The authentication is canceled.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CANCELED = 3,

    /**
     * The authentication timed out.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TIMEOUT = 4,

    /**
     * The authentication credential type is not supported.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_NOT_SUPPORT = 5,

    /**
     * The authentication trust level is not supported.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRUST_LEVEL_NOT_SUPPORT = 6,

    /**
     * The authentication executor is busy. Try again after a few seconds.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    BUSY = 7,

    /**
     * Incorrect parameters are detected.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 8,

    /**
     * The authentication executor is locked.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    LOCKED = 9,

    /**
     * The authentication executor is not enrolled.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NOT_ENROLLED = 10
  }

  /**
   * Enumerates the tip codes for facial authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum FaceTipsCode {
    /**
     * The obtained face image is too bright.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_BRIGHT = 1,

    /**
     * The obtained face image is too dark.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_DARK = 2,

    /**
     * The face is too close to the device.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_CLOSE = 3,

    /**
     * The face is too far away from the device.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_FAR = 4,

    /**
     * Only the upper part of the face is captured because the device is angled too high.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_HIGH = 5,

    /**
     * Only the lower part of the face is captured because the device is angled too low.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_LOW = 6,

    /**
     * Only the right part of the face is captured because the device is angled too much to the right.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_RIGHT = 7,

    /**
     * Only the left part of the face is captured because the device is angled too much to the left.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_LEFT = 8,

    /**
     * The face moves too fast during facial information collection.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_MUCH_MOTION = 9,

    /**
     * The face is not facing the device.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_POOR_GAZE = 10,

    /**
     * No face is detected.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_NOT_DETECTED = 11
  }

  /**
   * Enumerates the tip codes for fingerprint authentication.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum FingerprintTips {
    /**
     * The captured image is clear.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_GOOD = 0,

    /**
     * The fingerprint image has big noise due to dirt on the sensor.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_IMAGER_DIRTY = 1,

    /**
     * Failed to process the fingerprint image due to big noise.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_INSUFFICIENT = 2,

    /**
     * Only part of the fingerprint image is detected.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_PARTIAL = 3,

    /**
     * The fingerprint image is incomplete due to quick motion.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_TOO_FAST = 4,

    /**
     * Failed to read the fingerprint image due to lack of motion.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_TOO_SLOW = 5,

    /**
     * Press your finger.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_FINGER_DOWN = 6,

    /**
     * Lift your finger.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_FINGER_UP = 7
  }

  /**
   * Enumerates the constraint sources.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum ConstraintSourceType {
    /**
     * The constraint does not exist.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_NOT_EXIST = 0,

    /**
     * Constraint from system settings.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_TYPE_BASE = 1,

    /**
     * Constraint from the device owners' settings.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_TYPE_DEVICE_OWNER = 2,

    /**
     * Constraint from the profile owners' settings.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_TYPE_PROFILE_OWNER = 3
  }

  /**
   * Defines the constraint source type.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface ConstraintSourceTypeInfo {
    /**
     * ID of the target OS account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    localId: int;

    /**
     * Type of the constraint source.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    type: ConstraintSourceType;
  }
}

export default osAccount;