/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import distributedAccount from './@ohos.account.distributedAccount'
import {AsyncCallback} from "./basic";

declare namespace osAccount {
    /**
     * Obtains the AccountManager instance.
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     * @return Returns the instance of the AccountManager.
     */
    function getAccountManager(): AccountManager;

    /**
     * Provides abilities for you to manage and perform operations on your OS accounts.
     * @name AccountManager
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     */
    interface AccountManager {
        /**
         * Activates a specified OS account.
         * <p>
         * If multiple OS accounts are available, you can call this method to enable a specific OS account
         * to run in the foreground. Then, the OS account originally running in the foreground will be
         * switched to the background.
         * </p>
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return void.
         * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION.
         * @systemapi Hide this for inner system use.
         */
        activateOsAccount(localId: number, callback: AsyncCallback<void>): void;
        activateOsAccount(localId: number): Promise<void>;

        /**
         * Checks whether the function of supporting multiple OS accounts is enabled.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns {@code true} if this function is enabled; returns {@code false} otherwise.
         */
        isMultiOsAccountEnable(callback: AsyncCallback<boolean>): void;
        isMultiOsAccountEnable(): Promise<boolean>;

        /**
         * Checks whether an OS account is actived based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns {@code true} if the OS account is actived; returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS/ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
         */
        isOsAccountActived(localId: number, callback: AsyncCallback<boolean>): void;
        isOsAccountActived(localId: number): Promise<boolean>;

        /**
         * Checks whether a constraint has been enabled for an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @param constraint Indicates the constraint to check. The value can be:
         *        <ul>
         *        <li>{@code constraint.wifi.set} - Indicates the constraint on configuring the Wi-Fi access point.
         *        </li>
         *        <li>{@code constraint.sms.use} - Indicates the constraint on sending and receiving short messages.
         *        </li>
         *        <li>{@code constraint.calls.outgoing} - Indicates the constraint on making calls.</li>
         *        <li>{@code constraint.unknown.sources.install} - Indicates the constraint on installing applications
         *        from unknown sources.</li>
         *        </ul>
         * @return Returns {@code true} if the constraint has been enabled for the OS account;
         *         returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        isOsAccountConstraintEnable(localId: number, constraint: string, callback: AsyncCallback<boolean>): void;
        isOsAccountConstraintEnable(localId: number, constraint: string): Promise<boolean>;

        /**
         * Checks whether this OS account is a test OS account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns {@code true} if this OS account is a test OS account; returns {@code false} otherwise.
         */
        isTestOsAccount(callback: AsyncCallback<boolean>): void;
        isTestOsAccount(): Promise<boolean>;

        /**
         * Checks whether this OS account has been verified.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns {@code true} if the OS account has been verified successfully;
         *         returns {@code false} otherwise.
         */
        isOsAccountVerified(callback: AsyncCallback<boolean>): void;

        /**
         * Checks whether an OS account has been verified based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns {@code true} if the OS account has been verified successfully;
         *         returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS/ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
         */
        isOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;
        isOsAccountVerified(localId?: number): Promise<boolean>;

        /**
         * Removes an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return void.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         * @systemapi Hide this for inner system use.
         */
        removeOsAccount(localId: number, callback: AsyncCallback<void>): void;
        removeOsAccount(localId: number): Promise<void>;

        /**
         * Sets constraints for an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @param constraints Indicates the constraints to set for the OS account. The value can be:
         *        <ul>
         *        <li>{@code constraint.wifi.set} - Indicates the constraint on configuring the Wi-Fi access point.
         *        </li>
         *        <li>{@code constraint.sms.use} - Indicates the constraint on sending and receiving short messages.
         *        </li>
         *        <li>{@code constraint.calls.outgoing} - Indicates the constraint on making calls.</li>
         *        <li>{@code constraint.unknown.sources.install} - Indicates the constraint on installing applications
         *        from unknown sources.</li>
         *        </ul>
         * @param enable Specifies whether to enable the constraint.
         * @return void.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         * @systemapi Hide this for inner system use.
         */
        setOsAccountConstraints(localId: number, constraints: Array<string>, enable: boolean,
                                callback: AsyncCallback<void>): void;
        setOsAccountConstraints(localId: number, constraints: Array<string>, enable: boolean): Promise<void>;

        /**
         * Sets the local name for an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @param localName Indicates the local name to set for the OS account.
         * @return void.
         * @systemapi Hide this for inner system use.
         */
        setOsAccountName(localId: number, localName: string, callback: AsyncCallback<void>): void;
        setOsAccountName(localId: number, localName: string): Promise<void>;

        /**
         * Obtains the number of all OS accounts created on a device.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the number of created OS accounts.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getCreatedOsAccountsCount(callback: AsyncCallback<number>): void;
        getCreatedOsAccountsCount(): Promise<number>;

        /**
         * Obtains the local ID of an OS account from the current process UID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the local ID of the OS account.
         */
        getOsAccountLocalIdFromProcess(callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromProcess(): Promise<number>;

        /**
         * Queries the local ID of an OS account from the process UID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param uid Indicates the process UID.
         * @return Returns the local ID of the OS account.
         */
        getOsAccountLocalIdFromUid(uid: number, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromUid(uid: number): Promise<number>;

        /**
         * Queries the local ID of an OS account which is bound to the specified domain account
         *
         * @since 8
         * @devices phone, tablet, tv, wearable, car
         * @param domainInfo Indicates the domain account info.
         * @return Returns the local ID of the OS account.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo): Promise<number>;

        /**
         * Queries the maximum number of OS accounts that can be created on a device.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the maximum number of OS accounts that can be created.
         * @systemapi Hide this for inner system use.
         */
        queryMaxOsAccountNumber(callback: AsyncCallback<number>): void;
        queryMaxOsAccountNumber(): Promise<number>;

        /**
         * Obtains all constraints of an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns a list of constraints.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getOsAccountAllConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;
        getOsAccountAllConstraints(localId: number): Promise<Array<string>>;

        /**
         * Queries the list of all the OS accounts that have been created in the system.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns a list of OS accounts.
         * @systemapi Hide this for inner system use.
         */
        queryAllCreatedOsAccounts(callback: AsyncCallback<Array<OsAccountInfo>>): void;
        queryAllCreatedOsAccounts(): Promise<Array<OsAccountInfo>>;

        /**
         * Queries the id list of all activated OS accounts.
         *
         * @since 8
         * @return Returns a id list of OS accounts.
         */
        queryActivatedOsAccountIds(callback: AsyncCallback<Array<number>>): void;
        queryActivatedOsAccountIds(): Promise<Array<number>>;

        /**
         * Creates an OS account using the local name and account type.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localName Indicates the local name of the OS account to create.
         * @param type Indicates the type of the OS account to create.
         *        {@link OsAccountType} specifies the account types available in the system.
         * @return Returns information about the created OS account; returns {@code null} if the creation fails.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         * @systemapi Hide this for inner system use.
         */
        createOsAccount(localName: string, type: OsAccountType, callback: AsyncCallback<OsAccountInfo>): void;
        createOsAccount(localName: string, type: OsAccountType): Promise<OsAccountInfo>;

        /**
         * Creates an OS account using the account type and domain account info
         *
         * @since 8
         * @devices phone, tablet, tv, wearable, car
         * @param type Indicates the type of the OS account to create.
         *        {@link OsAccountType} specifies the account types available in the system.
         * @param domainInfo Indicates the domain account info.
         * @return Returns information about the created OS account; returns {@code null} if the creation fails.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         * @systemapi Hide this for inner system use.
         */
        createOsAccountForDomain(type: OsAccountType, domainInfo: DomainAccountInfo, callback: AsyncCallback<OsAccountInfo>): void;
        createOsAccountForDomain(type: OsAccountType, domainInfo: DomainAccountInfo): Promise<OsAccountInfo>;

        /**
         * Queries information about the current OS account.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns information about the current OS account; returns {@code null} if the query fails.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        queryCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;
        queryCurrentOsAccount(): Promise<OsAccountInfo>;

        /**
         * Queries OS account information based on the local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns the OS account information; returns {@code null} if the query fails.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS/ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION.
         * @systemapi Hide this for inner system use.
         */
        queryOsAccountById(localId: number, callback: AsyncCallback<OsAccountInfo>): void;
        queryOsAccountById(localId: number): Promise<OsAccountInfo>;

        /**
         * Obtains the type of this OS account from the current process.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the OS account type. The value can be {@link OsAccountType#ADMIN},
         *         {@link OsAccountType#NORMAL}, and {@link OsAccountType#GUEST}.
         */
        getOsAccountTypeFromProcess(callback: AsyncCallback<OsAccountType>): void;
        getOsAccountTypeFromProcess(): Promise<OsAccountType>;

        /**
         * Obtains the distributed virtual device ID (DVID).
         * <p>
         * If the same OHOS account has logged in to multiple devices, these devices constitute a super device
         * through the distributed networking. On the networked devices, you can call this method to obtain the DVIDs.
         * The same application running on different devices obtains the same DVID, whereas different applications
         * obtain different DVIDs.
         * <p>
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @return Returns the DVID if obtained; returns an empty string if no OHOS account has logged in.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC.
         */
        getDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;
        getDistributedVirtualDeviceId(): Promise<string>;

        /**
         * Obtains the profile photo of an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return Returns the profile photo if obtained;
         *         returns {@code null} if the profile photo fails to be obtained.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         * @systemapi Hide this for inner system use.
         */
        getOsAccountProfilePhoto(localId: number, callback: AsyncCallback<string>): void;
        getOsAccountProfilePhoto(localId: number): Promise<string>;

        /**
         * Sets the profile photo for an OS account based on its local ID.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @param photo Indicates the profile photo to set for the OS account.
         * @return void.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         * @systemapi Hide this for inner system use.
         */
        setOsAccountProfilePhoto(localId: number, photo: string, callback: AsyncCallback<void>): void;
        setOsAccountProfilePhoto(localId: number, photo: string): Promise<void>;

        /**
         * Obtain localId according to serial number
         *
         * @since 8
         * @devices phone, tablet, tv, wearable, car
         * @param serialNumber Indicates serial number.
         * @return localId.
         */
        getOsAccountLocalIdBySerialNumber(serialNumber: number, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdBySerialNumber(serialNumber: number): Promise<number>;

        /**
         * Obtain serial number according to localId.
         *
         * @since 8
         * @devices phone, tablet, tv, wearable, car
         * @param localId Indicates the local ID of the OS account.
         * @return serial number.
         */
        getSerialNumberByOsAccountLocalId(localId: number, callback: AsyncCallback<number>): void;
        getSerialNumberByOsAccountLocalId(localId: number): Promise<number>;

        /**
         * Subscribes to the change events of OS accounts.
         * <p>
         * When user change the account, the subscriber will receive a notification
         * about the account change event.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param type Event type.
         * @param name Indicates the name of subscriber.
         * @return void.
         * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
         * @systemapi Hide this for inner system use.
         */
        on(type: 'activate' | 'activating', name: string, callback: Callback<number>): void;

        /**
         * Unsubscribes from account events.
         *
         * @since 7
         * @devices phone, tablet, tv, wearable, car
         * @param type Event type.
         * @param name Indicates the name of subscriber.
         * @return void.
         * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
         * @systemapi Hide this for inner system use.
         */
        off(type: 'activate' | 'activating', name: string, callback?: Callback<number>): void;
    }

    /**
     * Provides information about OS accounts, including the local ID, local name, and type of an OS account.
     * @name OsAccountInfo
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     */
    interface OsAccountInfo {
        /**
         * The local ID of an OS account.
         * @since 7
         */
        localId: number;

        /**
         * The local name of an OS account.
         * @since 7
         */
        localName: string;

        /**
         * Include: ADMIN, Normal, GUEST.
         * @since 7
         */
        type: OsAccountType;

        /**
         * Account constraints information.
         * @since 7
         */
        constraints: Array<string>;

        /**
         * The account is verified or not.
         * @since 8
         */
        isVerified: boolean;

        /**
         * OS account photo.
         * @since 8
         */
        photo: string;

        /**
         * Os account create time.
         * @since 8
         */
        createTime: number;

        /**
         * The last time to log in.
         * @since 8
         */
        lastLoginTime: number;

        /**
         * Os account serial number.
         * @since 8
         */
        serialNumber: number;

        /**
         * Os account is actived or not.
         * @since 8
         */
        isActived: boolean;

        /**
         * Os account create completed or not.
         * @since 8
         */
        isCreateCompleted: boolean;

        /**
         * Distributed account info.
         * @since 7
         */
        distributedInfo: distributedAccount.DistributedInfo;

         /**
          * Domain account info.
          * @since 8
          */
         domainInfo: DomainAccountInfo;
    }

    interface DomainAccountInfo {
        /**
        * The domain name
        * @since 8
        */
        domain: string;

        /**
        * The account name in the domain
        * @since 8
        */
        accountName: string;
    }

    /**
     * Enumerates OS account types.
     * @name OsAccountType
     * @since 7
     * @sysCap SystemCapability.Account.OsAccount
     * @devices phone, tablet, tv, wearable, car
     */
    enum OsAccountType {
        /**
         * Indicates the administrator account, which has the permission to manage other OS accounts.
         */
        ADMIN = 0,

        /**
         * Indicates a normal account, which has access to common functions of OS accounts.
         */
        NORMAL,

        /**
         * Indicates a guest account, which is used to temporarily access the device and may be deleted at any time.
         */
        GUEST
    }
}

export default osAccount;