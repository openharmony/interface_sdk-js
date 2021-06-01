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

import {AsyncCallback} from './basic'

/**
 * Defines distributed account functions and interfaces.
 *
 * @name distributedAccount
 * @since 5
 * @syscap SystemCapability.Account.OsAccount
 * @devices phone
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 */
declare namespace distributedAccount {
    /**
     * Get the ability of the distributed account.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @devices phone
     * @param NA
     * @return Ability to manage operations of distributed account.
     */
    function getDistributedAccountAbility(): DistributedAccountAbility;

    interface DistributedAccountAbility {
        /**
         * Queries the distributed information of the current OS account.
         *
         * @syscap SystemCapability.Account.OsAccount
         * @devices phone
         * @param NA
         * @return The distributed information of the current OS account.
         */
        queryOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void;

        queryOsAccountDistributedInfo(): Promise<DistributedInfo>;

        /**
         * Updates the distributed information of the OS account.
         *
         * @syscap SystemCapability.Account.OsAccount
         * @devices phone
         * @param accountInfo Indicates the information of the OS account used for a distributed system.
         * @return Returns {@code true} if the distributed information of the account is updated;
         *         returns {@code false} otherwise.
         */
        updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<boolean>): void;

        updateOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<boolean>;
    }

    interface DistributedInfo {
        /**
         * The name in the distributed information of the OS account.
         */
        name: string;

        /**
         * The ID in the distributed information of the OS account.
         */
        id: string;

        /**
         * The event string in the distributed information of the OS account.
         */
        event: string;

        /**
         * The scalable data in the distributed information of the OS account.
         */
        scalableData?: object;
    }
}

export default distributedAccount;