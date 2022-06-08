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

import distributedAccount from './@ohos.account.distributedAccount'
import {AsyncCallback} from "./basic";

/**
 * This module provides the capability to manage os accounts.
 *
 * @since 7
 * @syscap SystemCapability.Account.OsAccount
 */
declare namespace osAccount {
    /**
     * Obtains the AccountManager instance.
     * @since 7
     * @syscap SystemCapability.Account.OsAccount
     * @return Returns the instance of the AccountManager.
     */
    function getAccountManager(): AccountManager;

    /**
     * Provides abilities for you to manage and perform operations on your OS accounts.
     * @name AccountManager
     * @since 7
     * @syscap SystemCapability.Account.OsAccount
     */
    interface AccountManager {
        /**
         * Checks whether the function of supporting multiple OS accounts is enabled.
         *
         * @since 7
         * @return Returns {@code true} if this function is enabled; returns {@code false} otherwise.
         */
        isMultiOsAccountEnable(callback: AsyncCallback<boolean>): void;
        isMultiOsAccountEnable(): Promise<boolean>;

        /**
         * Checks whether an OS account is activated based on its local ID.
         *
         * @since 7
         * @param localId Indicates the local ID of the OS account.
         * @return Returns {@code true} if the OS account is activated; returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
         */
        isOsAccountActived(localId: number, callback: AsyncCallback<boolean>): void;
        isOsAccountActived(localId: number): Promise<boolean>;

        /**
         * Checks whether a constraint has been enabled for an OS account based on its local ID.
         *
         * @since 7
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
         * @return Returns {@code true} if this OS account is a test OS account; returns {@code false} otherwise.
         */
        isTestOsAccount(callback: AsyncCallback<boolean>): void;
        isTestOsAccount(): Promise<boolean>;

        /**
         * Checks whether this OS account has been verified.
         *
         * @since 7
         * @return Returns {@code true} if the OS account has been verified successfully;
         *         returns {@code false} otherwise.
         */
        isOsAccountVerified(callback: AsyncCallback<boolean>): void;

        /**
         * Checks whether an OS account has been verified based on its local ID.
         *
         * @since 7
         * @param localId Indicates the local ID of the OS account.
         * @return Returns {@code true} if the OS account has been verified successfully;
         *         returns {@code false} otherwise.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
         */
        isOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;
        isOsAccountVerified(localId?: number): Promise<boolean>;

        /**
         * Obtains the number of all OS accounts created on a device.
         *
         * @since 7
         * @return Returns the number of created OS accounts.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getCreatedOsAccountsCount(callback: AsyncCallback<number>): void;
        getCreatedOsAccountsCount(): Promise<number>;

        /**
         * Obtains the local ID of an OS account from the current process UID.
         *
         * @since 7
         * @return Returns the local ID of the OS account.
         */
        getOsAccountLocalIdFromProcess(callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromProcess(): Promise<number>;

        /**
         * Queries the local ID of an OS account from the process UID.
         *
         * @since 7
         * @param uid Indicates the process UID.
         * @return Returns the local ID of the OS account.
         */
        getOsAccountLocalIdFromUid(uid: number, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromUid(uid: number): Promise<number>;

        /**
         * Queries the local ID of an OS account which is bound to the specified domain account
         *
         * @since 8
         * @param domainInfo Indicates the domain account info.
         * @return Returns the local ID of the OS account.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo): Promise<number>;

        /**
         * Obtains all constraints of an OS account based on its local ID.
         *
         * @since 7
         * @param localId Indicates the local ID of the OS account.
         * @return Returns a list of constraints.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        getOsAccountAllConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;
        getOsAccountAllConstraints(localId: number): Promise<Array<string>>;

        /**
         * Queries the id list of all activated OS accounts.
         *
         * @since 8
         * @return Returns a id list of OS accounts.
         */
        queryActivatedOsAccountIds(callback: AsyncCallback<Array<number>>): void;
        queryActivatedOsAccountIds(): Promise<Array<number>>;

        /**
         * Queries information about the current OS account.
         *
         * @since 7
         * @return Returns information about the current OS account; returns {@code null} if the query fails.
         * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS.
         */
        queryCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;
        queryCurrentOsAccount(): Promise<OsAccountInfo>;

        /**
         * Obtains the type of this OS account from the current process.
         *
         * @since 7
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
         * @return Returns the DVID if obtained; returns an empty string if no OHOS account has logged in.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
         */
        getDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;
        getDistributedVirtualDeviceId(): Promise<string>;

        /**
         * Obtain localId according to serial number
         *
         * @since 8
         * @param serialNumber Indicates serial number.
         * @return localId.
         */
        getOsAccountLocalIdBySerialNumber(serialNumber: number, callback: AsyncCallback<number>): void;
        getOsAccountLocalIdBySerialNumber(serialNumber: number): Promise<number>;

        /**
         * Obtain serial number according to localId.
         *
         * @since 8
         * @param localId Indicates the local ID of the OS account.
         * @return serial number.
         */
        getSerialNumberByOsAccountLocalId(localId: number, callback: AsyncCallback<number>): void;
        getSerialNumberByOsAccountLocalId(localId: number): Promise<number>;
    }

    /**
     * Provides information about OS accounts, including the local ID, local name, and type of an OS account.
     * @name OsAccountInfo
     * @since 7
     * @syscap SystemCapability.Account.OsAccount
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
         * Os account is activated or not.
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
     * @syscap SystemCapability.Account.OsAccount
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