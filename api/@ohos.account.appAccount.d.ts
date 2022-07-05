/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import {AsyncCallback} from "./basic";
import Want from "./@ohos.application.want";
import rpc from "./@ohos.rpc"

/**
 * This module provides the capability to manage application accounts.
 *
 * @since 7
 * @syscap SystemCapability.Account.AppAccount
 */
declare namespace appAccount {
    /**
     * Obtains the AppAccountManager instance.
     * @since 7
     * @syscap SystemCapability.Account.AppAccount
     * @return Returns the instance of the AppAccountManager.
     */
    function createAppAccountManager(): AppAccountManager;

    /**
     * Provides methods for managing application accounts.
     * @name AppAccountManager
     * @since 7
     * @syscap SystemCapability.Account.AppAccount
     */
    interface AppAccountManager {
        /**
         * Adds the account name and extra information of this application to the account management service.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 7
         * @param name Indicates the name of the application account to add.
         * @param extraInfo Indicates the extra information of the application account to add.
         *        The extra information cannot be sensitive information of the application account.
         * @return void.
         */
        addAccount(name: string, callback: AsyncCallback<void>): void;
        addAccount(name: string, extraInfo: string, callback: AsyncCallback<void>): void;
        addAccount(name: string, extraInfo?: string): Promise<void>;

        /**
         * Adds an application account of a specified owner implicitly.
         *
         * @since 8
         * @param owner Indicates the account owner of your application or third-party applications.
         * @param authType Indicates the authentication type.
         * @param options Indicates the authenticator-specific options for the request.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        addAccountImplicitly(owner: string, authType: string, options: {[key: string]: any}, callback: AuthenticatorCallback): void;

        /**
         * Deletes an application account from the account management service.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 7
         * @param name Indicates the name of the application account to delete.
         * @return void.
         */
        deleteAccount(name: string, callback: AsyncCallback<void>): void;
        deleteAccount(name: string): Promise<void>;

        /**
         * Disables a third-party application with the specified bundle name from
         * accessing the given application account.
         *
         * @since 7
         * @param name Indicates the name of the application account to disable access from
         *        the third-party application.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @return void.
         */
        disableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void;
        disableAppAccess(name: string, bundleName: string): Promise<void>;

        /**
         * Enables a third-party application with the specified bundle name to access the given application
         * account for data query and listening.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @return void.
         */
        enableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void;
        enableAppAccess(name: string, bundleName: string): Promise<void>;

        /**
         * Checks whether a third-party application with the specified bundle name is allowed to access
         * the given application account for data query and listening.
         *
         * @since 9
         * @param name Indicates the name of the application account.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @return void.
         */
        checkAppAccess(name: string, bundleName: string, callback: AsyncCallback<boolean>): void;
        checkAppAccess(name: string, bundleName: string): Promise<boolean>;

        /**
         * Checks whether a specified application account allows application data synchronization.
         * <p>
         * If the same OHOS account has logged in to multiple devices, these devices constitute a super device
         * through the distributed networking. On the networked devices, you can call this method to check
         * whether application data can be synchronized.
         * <p>
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @return Returns {@code true} if application data synchronization is allowed; returns {@code false} otherwise.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         */
        checkAppAccountSyncEnable(name: string, callback: AsyncCallback<boolean>): void;
        checkAppAccountSyncEnable(name: string): Promise<boolean>;

        /**
         * Sets the credential for this application account.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param credentialType Indicates the type of the credential to set.
         * @param credential Indicates the credential to set.
         * @return void.
         */
        setAccountCredential(name: string, credentialType: string, credential: string,
                             callback: AsyncCallback<void>): void;
        setAccountCredential(name: string, credentialType: string, credential: string): Promise<void>;

        /**
         * Sets extra information for this application account.
         * <p>
         * You can call this method when you forget the extra information of your application account or
         * need to modify the extra information.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param extraInfo Indicates the extra information to set.
         * @return void.
         */
        setAccountExtraInfo(name: string, extraInfo: string, callback: AsyncCallback<void>): void;
        setAccountExtraInfo(name: string, extraInfo: string): Promise<void>;

        /**
         * Sets whether a specified application account allows application data synchronization.
         * <p>
         * If the same OHOS account has logged in to multiple devices, these devices constitute a super device
         * through the distributed networking. On the networked devices, you can call this method to set whether to
         * allow cross-device data synchronization. If synchronization is allowed, application data can be synchronized
         * among these devices in the event of any changes related to the application account.
         * If synchronization is not allowed, the application data is stored only on the local device.
         * <p>
         * <b>Application account-related changes</b>: adding or deleting an application account, setting extra
         * information (such as updating a token), and setting data associated with this application account
         * <p>
         * <b>Application data that can be synchronized</b>: application account name, token,
         * and data associated with this application account
         * <p>
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param isEnable Specifies whether to allow application data synchronization.
         * @return void.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         */
        setAppAccountSyncEnable(name: string, isEnable: boolean, callback: AsyncCallback<void>): void;
        setAppAccountSyncEnable(name: string, isEnable: boolean): Promise<void>;

        /**
         * Sets data associated with this application account.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param key Indicates the key of the data to set. The key can be customized.
         * @param value Indicates the value of the data to set.
         * @return void.
         */
        setAssociatedData(name: string, key: string, value: string, callback: AsyncCallback<void>): void;
        setAssociatedData(name: string, key: string, value: string): Promise<void>;

        /**
         * Obtains information about all accessible accounts.
         * <p>
         * This method applies to the following accounts:
         * <ul>
         * <li>Accounts of this application.</li>
         * <li>Accounts of third-party applications. To obtain such information,
         * your application must have gained authorization from the third-party applications.</li>
         * </ul>
         *
         * @since 7
         * @return Returns a list of application accounts.
         * @permission ohos.permission.GET_ALL_APP_ACCOUNTS.
         */
        getAllAccessibleAccounts(callback: AsyncCallback<Array<AppAccountInfo>>): void;
        getAllAccessibleAccounts(): Promise<Array<AppAccountInfo>>;

        /**
         * Obtains information about all accounts of a specified account owner.
         * <p>
         * This method applies to the following accounts:
         * <ul>
         * <li>Accounts of this application.</li>
         * <li>Accounts of third-party applications. To obtain such information,
         * your application must have gained authorization from the third-party applications.</li>
         * </ul>
         *
         * @since 7
         * @param owner Indicates the account owner of your application or third-party applications.
         * @return Returns a list of application accounts.
         * @permission ohos.permission.GET_ALL_APP_ACCOUNTS.
         */
        getAllAccounts(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>): void;
        getAllAccounts(owner: string): Promise<Array<AppAccountInfo>>;

        /**
         * Obtains the credential of this application account.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param credentialType Indicates the type of the credential to obtain.
         * @return Returns the credential of the application account.
         */
        getAccountCredential(name: string, credentialType: string, callback: AsyncCallback<string>): void;
        getAccountCredential(name: string, credentialType: string): Promise<string>;

        /**
         * Obtains extra information of this application account.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @return Returns the extra information of the account; returns {@code null} in other scenarios,
         *         for example, if the account does not exist.
         */
        getAccountExtraInfo(name: string, callback: AsyncCallback<string>): void;
        getAccountExtraInfo(name: string): Promise<string>;

        /**
         * Obtains data associated with this application account.
         *
         * @since 7
         * @param name Indicates the name of the application account.
         * @param key Indicates the key of the data to obtain.
         * @return Returns the associated data of the application account.
         */
        getAssociatedData(name: string, key: string, callback: AsyncCallback<string>): void;
        getAssociatedData(name: string, key: string): Promise<string>;

        /**
         * Subscribes to the change events of accounts of the specified owners.
         * <p>
         * When the account owner updates the account, the subscriber will receive a notification
         * about the account change event.
         *
         * @since 7
         * @param owners Indicates the account owners, which are specified
         *        by {@link AppAccount#AppAccount(String name, String owner)}.
         * @return void
         */
        on(type: 'change', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>): void;

        /**
         * Unsubscribes from account events.
         *
         * @since 7
         * @return void
         */
        off(type: 'change', callback?: Callback<Array<AppAccountInfo>>): void;

        /**
         * Authenticates an application account to get an oauth token.
         *
         * @since 8
         * @param name Indicates the account name of your application or third-party applications.
         * @param owner Indicates the account owner of your application or third-party applications.
         * @param authType Indicates the authentication type.
         * @param options Indicates the authenticator-specific options for the request.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        authenticate(name: string, owner: string, authType: string, options: {[key: string]: any}, callback: AuthenticatorCallback): void;

        /**
         * Gets an oauth token with the specified authentication type from a particular application account.
         *
         * @since 8
         * @param name Indicates the account name of your application or third-party applications.
         * @param owner Indicates the account owner of your application or third-party applications.
         * @param authType Indicates the authentication type.
         * @return Returns an oauth token.
         */
        getOAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>): void;
        getOAuthToken(name: string, owner: string, authType: string): Promise<string>;

        /**
         * Sets an oauth token with the specified authentication type for a particular account.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 8
         * @param name Indicates the account name of your application.
         * @param authType Indicates the authentication type.
         * @param token Indicates the oauth token.
         * @return void.
         */
        setOAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>): void;
        setOAuthToken(name: string, authType: string, token: string): Promise<void>;

        /**
         * Deletes an oauth token for the specified application account.
         * <p>
         * Only tokens visible to the caller application can be deleted.
         *
         * @since 8
         * @param name Indicates the account name of your application or third-party applications.
         * @param owner Indicates the account owner of your application or third-party applications.
         * @param authType Indicates the authentication type.
         * @param token Indicates the oauth token.
         * @return void.
         */
        deleteOAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>): void;
        deleteOAuthToken(name: string, owner: string, authType: string, token: string): Promise<void>;

        /**
         * Sets the oauth token visibility of the specified authentication type to a third-party application.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 8
         * @param name Indicates the account name of your application.
         * @param authType Indicates the authentication type.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @param isVisible Indicates the bool value of visibility.
         * @return void.
         */
        setOAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void>): void;
        setOAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean): Promise<void>;

        /**
         * Checks the oauth token visibility of the specified authentication type for a third-party application.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 8
         * @param name Indicates the account name of your application or third-party applications.
         * @param authType Indicates the authentication type.
         * @param bundleName Indicates the bundle name of the third-party application.
         * @return Returns the bool value of visibility.
         */
        checkOAuthTokenVisibility(name: string, authType: string, bundleName: string, callback: AsyncCallback<boolean>): void;
        checkOAuthTokenVisibility(name: string, authType: string, bundleName: string): Promise<boolean>;

        /**
         * Gets all oauth tokens visible to the caller application.
         *
         * @since 8
         * @param name Indicates the account name of your application or third-party applications.
         * @param owner Indicates the account owner of your application or third-party applications.
         * @return Returns a list of oauth tokens visible to the caller application.
         */
        getAllOAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<OAuthTokenInfo>>): void;
        getAllOAuthTokens(name: string, owner: string): Promise<Array<OAuthTokenInfo>>;

        /**
         * Gets the open authorization list with a specified authentication type for a paticular application account.
         * <p>
         * Only the owner of the application account has the permission to call this method.
         *
         * @since 8
         * @param name Indicates the account name of your application.
         * @param authType Indicates the authentication type.
         * @return Returns the open authorization list of the specified authentication type.
         */
        getOAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>): void;
        getOAuthList(name: string, authType: string): Promise<Array<string>>;

        /**
         * Gets the authenticator callback with the specified session id.
         * <p>
         * Only the owner of the authenticator has the permission to call this method.
         *
         * @since 8
         * @param sessionId Indicates the id of a authentication session.
         * @return Returns the authenticator callback related to the session id.
         */
        getAuthenticatorCallback(sessionId: string, callback: AsyncCallback<AuthenticatorCallback>): void;
        getAuthenticatorCallback(sessionId: string): Promise<AuthenticatorCallback>;

        /**
         * Gets the authenticator information of an application account.
         *
         * @since 8
         * @param owner Indicates the account owner of your application or third-party applications.
         * @return Returns the authenticator information of the application account.
         */
        getAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>): void;
        getAuthenticatorInfo(owner: string): Promise<AuthenticatorInfo>;

        /**
         * Checks whether a paticular account has all specified labels.
         *
         * @since 9
         * @param name Indicates the account name.
         * @param owner Indicates the account owner.
         * @param labels Indicates an array of labels to check.
         * @return boolean
         */
        checkAccountLabels(name: string, owner: string, labels: Array<string>, callback: AsyncCallback<boolean>): void;
        checkAccountLabels(name: string, owner: string, labels: Array<string>): Promise<boolean>;

        /**
         * Deletes the credential of the specified application account.
         *
         * @since 9
         * @param name Indicates the account name.
         * @param credentialType Indicates the type of the credential to delete.
         * @return void.
         */
        deleteAccountCredential(name: string, credentialType: string, callback: AsyncCallback<void>): void;
        deleteAccountCredential(name: string, credentialType: string): Promise<void>;

        /**
         * Selects a list of accounts that satisfied with the specified options.
         *
         * @since 9
         * @param options Indicates the options for selecting account.
         * @return Returns a list of accounts.
         */
        selectAccountsByOptions(options: SelectAccountsOptions, callback: AsyncCallback<Array<AppAccountInfo>>);
        selectAccountsByOptions(options: SelectAccountsOptions): Promise<Array<AppAccountInfo>>;

        /**
         * Verifies the credential to ensure the user is the owner of the specified account.
         *
         * @since 9
         * @param name Indicates the account name.
         * @param owner Indicates the account owner.
         * @param options Indicates the options for verifying credential.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        verifyCredential(name: string, owner: string, callback: AuthenticatorCallback): void;
        verifyCredential(name: string, owner: string, options: VerifyCredentialOptions, callback: AuthenticatorCallback): void;

        /**
         * Sets properties for the specified account authenticator.
         * <p>
         * If the authenticator supports setting its properties, 
         * the caller will normally be redirected to an Ability specified by Want for property setting.
         *
         * @since 9
         * @param owner Indicates the owner of authenticator.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        setAuthenticatorProperties(owner: string, callback: AuthenticatorCallback): void;
        setAuthenticatorProperties(owner: string, options: SetPropertiesOptions, callback: AuthenticatorCallback): void;
    }

    /**
     * Provides basic information of an application account, including the account owner and name.
     * @name AppAccountInfo
     * @since 7
     * @syscap SystemCapability.Account.AppAccount
     */
    interface AppAccountInfo {
        /**
         * The owner an application account.
         */
        owner: string;

        /**
         * The name an application account.
         */
        name: string;
    }

    /**
     * Provides basic information of an oauth token, including the authentication type and token value.
     * @name OAuthTokenInfo
     * @since 8
     * @syscap SystemCapability.Account.AppAccount
     */
    interface OAuthTokenInfo {
        /**
         * The authentication type.
         *
         * @since 8
         */
        authType: string;

        /**
         * The token value.
         *
         * @since 8
         */
        token: string;

        /**
         * The account to which the token belongs.
         *
         * @since 9
         */
        account?: AppAccountInfo;
    }   

    /**
     * Provides basic information of an authenticator, including the authenticator owner, icon id and label id.
     * @name AuthenticatorInfo
     * @since 8
     * @syscap SystemCapability.Account.AppAccount
     */
    interface AuthenticatorInfo {
        /**
         * The owner of an authenticator.
         */
        owner: string;

        /**
         * The icon id of an authenticator.
         */
        iconId: number;

        /**
         * The label id of an authenticator.
         */
        labelId: number;
    }

    /**
     * Provides the available options for selecting accounts.
     * @name SelectAccountsOptions
     * @since 9
     * @syscap SystemCapability.Account.AppAccount
     */
    interface SelectAccountsOptions {
        /**
         * The list of accounts allowed to be selected.
         */
        allowedAccounts?: Array<AppAccountInfo>,

        /**
         * The list of account owners, whose accounts allowed to be selected.
         */
        allowedOwners?: Array<string>,

        /**
         * The labels required for the selected accounts.
         */
        requiredLabels?: Array<string>
    }

    /**
     * Provides the available options for verifying credential.
     * @name VerifyCredentialOptions
     * @since 9
     * @syscap SystemCapability.Account.AppAccount
     */
    interface VerifyCredentialOptions {
        /**
         * The credentail type to be verified.
         */
        credentialType?: string,

        /**
         * The credential to be verified.
         */
        credential?: string,

        /**
         * The authenticator-specific parameters.
         */
        parameters?: {[key:string]: Object}
    }

    /**
     * Provides the available options for setting properties.
     * @name SetPropertiesOptions
     * @since 9
     * @syscap SystemCapability.Account.AppAccount
     */
     interface SetPropertiesOptions {
        /**
         * The properties to be set.
         */
        properties?: {[key: string]: Object},

        /**
         * The authenticator-specific parameters.
         */
        parameters?: {[key: string]: Object}
    }

    /**
     * Provides constants definition.
     * @name Constants
     * @since 8
     * @syscap SystemCapability.Account.AppAccount
     */
    enum Constants {
        /**
         * Indicates the action for adding account implicitly.
         *
         * @since 8
         */
        ACTION_ADD_ACCOUNT_IMPLICITLY = "addAccountImplicitly",

        /**
         * Indicates the action for authenticating.
         *
         * @since 8
         */
        ACTION_AUTHENTICATE = "authenticate",

        /**
         * Indicates the key of name.
         *
         * @since 8
         */
        KEY_NAME = "name",

        /**
         * Indicates the key of owner.
         *
         * @since 8
         */
        KEY_OWNER = "owner",

        /**
         * Indicates the key of token.
         *
         * @since 8
         */
        KEY_TOKEN = "token",

        /**
         * Indicates the key of action.
         *
         * @since 8
         */
        KEY_ACTION = "action",

        /**
         * Indicates the key of authentiaction type.
         *
         * @since 8
         */
        KEY_AUTH_TYPE = "authType",

        /**
         * Indicates the key of session id.
         *
         * @since 8
         */
        KEY_SESSION_ID = "sessionId",

        /**
         * Indicates the key of caller pid.
         *
         * @since 8
         */
        KEY_CALLER_PID = "callerPid",

        /**
         * Indicates the key of caller uid.
         *
         * @since 8
         */
        KEY_CALLER_UID = "callerUid",

        /**
         * Indicates the key of caller bundle name.
         *
         * @since 8
         */
        KEY_CALLER_BUNDLE_NAME = "callerBundleName",

        /**
         * Indicates the key of required labels.
         *
         * @since 9
         */
        KEY_REQUIRED_LABELS = "requiredLabels",

        /**
         * Indicates the key of boolean result.
         *
         * @since 9
         */
        KEY_BOOLEAN_RESULT = "booleanResult"
    }

    /**
     * Provides result code definition.
     * @name ResultCode
     * @since 8
     * @syscap SystemCapability.Account.AppAccount
     */
    enum ResultCode {
        SUCCESS = 0,
        ERROR_ACCOUNT_NOT_EXIST = 10001,
        ERROR_APP_ACCOUNT_SERVICE_EXCEPTION = 10002,
        ERROR_INVALID_PASSWORD = 10003,
        ERROR_INVALID_REQUEST = 10004,
        ERROR_INVALID_RESPONSE = 10005,
        ERROR_NETWORK_EXCEPTION = 10006,
        ERROR_OAUTH_AUTHENTICATOR_NOT_EXIST = 10007,
        ERROR_OAUTH_CANCELED = 10008,
        ERROR_OAUTH_LIST_TOO_LARGE = 10009,
        ERROR_OAUTH_SERVICE_BUSY = 10010,
        ERROR_OAUTH_SERVICE_EXCEPTION = 10011,
        ERROR_OAUTH_SESSION_NOT_EXIST = 10012,
        ERROR_OAUTH_TIMEOUT = 10013,
        ERROR_OAUTH_TOKEN_NOT_EXIST = 10014,
        ERROR_OAUTH_TOKEN_TOO_MANY = 10015,
        ERROR_OAUTH_UNSUPPORT_ACTION = 10016,
        ERROR_OAUTH_UNSUPPORT_AUTH_TYPE = 10017,
        ERROR_PERMISSION_DENIED = 10018
    }

    /**
     * Provides methods for authenticator callback.
     * @name AuthenticatorCallback
     * @since 8
     * @syscap SystemCapability.Account.AppAccount
     */
    interface AuthenticatorCallback {
        /**
         * Notifies the client of the authentication result.
         *
         * @since 8
         * @param code Indicates the result code.
         * @param result Indicates the authentication result.
         * @return void.
         */
        onResult: (code: number, result: {[key: string]: any}) => void;

        /**
         * Notifies the client that the authentication request need to be redirected.
         *
         * @since 8
         * @param request Indicates the request information to be redirected.
         * @return void.
         */
        onRequestRedirected: (request: Want) => void;

        /**
         * Notifies the client that the request is continued.
         *
         * @since 9
         * @return void.
         */
        onRequestContinued?: () => void;
    }

    /**
     * Provides methods for authenticator.
     * @name Authenticator
     * @since 8
     * @syscap SystemCapability.Account.AppAccount
     */
    class Authenticator {
        /**
         * Adds an application account of a specified owner implicitly.
         *
         * @since 8
         * @param authType Indicates the authentication type.
         * @param callerBundleName Indicates the caller bundle name.
         * @param options Indicates the authenticator-specific options for the request.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        addAccountImplicitly(authType: string, callerBundleName: string, options: {[key: string]: any}, callback: AuthenticatorCallback): void;

        /**
         * Authenticates an application account to get an oauth token.
         *
         * @since 8
         * @param name Indicates the account name.
         * @param authType Indicates the authentication type.
         * @param callerBundleName Indicates the caller bundle name.
         * @param options Indicates the authenticator-specific options for the request.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        authenticate(name: string, authType: string, callerBundleName: string, options: {[key: string]: any}, callback: AuthenticatorCallback): void;

        /**
         * Verifies the credential to ensure the user is the owner of the specified application account.
         * <p>
         * The credential can be provided in the options, otherwise an Ability will normally be returned,
         * which can be started by the caller to further verify credential.
         *
         * @since 9
         * @param name Indicates the name of the application account.
         * @param options Indicates the options for verifying credential.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        verifyCredential(name: string, options: VerifyCredentialOptions, callback: AuthenticatorCallback): void;

        /**
         * Sets properties for the authenticator.
         *
         * @since 9
         * @param options Indicates the options for setting properties.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        setProperties(options: SetPropertiesOptions, callback: AuthenticatorCallback): void;

        /**
         * Checks whether a paticular account has all specified labels.
         *
         * @since 9
         * @param name Indicates the account name.
         * @param labels Indicates an array of labels to check.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        checkAccountLabels(name: string, labels: Array<string>, callback: AuthenticatorCallback): void;

        /**
         * Checks whether the specified account can be removed.
         *
         * @since 9
         * @param name Indicates the account name.
         * @param callback Indicates the authenticator callback.
         * @return void.
         */
        isAccountRemovable(name: string, callback: AuthenticatorCallback): void;

        /**
         * Gets the remote object of the authenticator for remote procedure call.
         *
         * @since 9
         * @return Returns a remote object.
         */
        getRemoteObject(): rpc.RemoteObject;
    }
}

export default appAccount;