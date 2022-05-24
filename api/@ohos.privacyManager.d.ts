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

import {AsyncCallback} from './basic'

/**
 * @syscap SystemCapability.Security.AccessToken
 */
 declare namespace privacyManager {
    /**
     * Add access record of sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be added.
     * @param successCount Access count.
     * @param failCount Reject account.
     * @return NA.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi hid this for inner system use
     * @since 9
     */
    function addPermissionUsedRecord(tokenID: number, permissionName: string, successCount: number, failCount: number): Promise<void>;
    function addPermissionUsedRecord(tokenID: number, permissionName: string, successCount: number, failCount: number, callback: AsyncCallback<void>): void;

    /**
     * Start using sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be started.
     * @return NA.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi hid this for inner system use
     * @since 9
     */
    function startUsingPermission(tokenID: number, permissionName: string): Promise<number>;
    function startUsingPermission(tokenID: number, permissionName: string, callback: AsyncCallback<number>): void;

    /**
     * Stop using sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be stopped.
     * @return NA.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi hid this for inner system use
     * @since 9
     */
    function stopUsingPermission(tokenID: number, permissionName: string): Promise<number>;
    function stopUsingPermission(tokenID: number, permissionName: string, callback: AsyncCallback<number>): void;

    /**
     * Queries the access records of sensitive permission.
     * @param request The request of permission used records.
     * @return Return the reponse of permission used records.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi hid this for inner system use
     * @since 9
     */
    function getPermissionUsedRecords(request: PermissionUsedRequest): Promise<PermissionUsedResponse>;
    function getPermissionUsedRecords(request: PermissionUsedRequest, callback: AsyncCallback<PermissionUsedResponse>): void;

    /**
     * PermissionUsageFlag.
     * @since 9
     */
    enum PermissionUsageFlag {
        /**
         * permission used summary
         */
        FLAG_PERMISSION_USAGE_SUMMARY = 0,
        /**
         * permission used detail
         */
        FLAG_PERMISSION_USAGE_DETAIL = 1,
    }

    /**
     * Provides request of querying permission used records.
     * @since 9
     */
    interface PermissionUsedRequest {
        /**
         * The device id
         */
        deviceId: string;

        /**
         * The bundle name
         */
        bundleName: string;

        /**
         * The list of permision name
         */ 
        permNames: Array<string>;

        /**
         * The begin time
         */
        beginTimeMillis: number;

        /**
         * The end time
         */
        endTimeMillis: number;

        /**
         * The permission usage flag
         */
        flag: PermissionUsageFlag;
    }

    /**
     * Provides response of querying permission used records.
     * @since 9
     */
    interface PermissionUsedResponse {
        /**
         * The begin time 
         */
        beginTimeMillis: number;

        /**
         * The end time
         */
        endTimeMillis: number;

        /**
         * The list of permision used records of bundle
         */ 
        bundleRecords: Array<BundleUsedRecord>;
    }

    /**
     * BundleUsedRecord.
     * @since 9
     */
     interface BundleUsedRecord {
        /**
         * The device id 
         */
        deviceId: string;

        /**
         * The bundle name 
         */
        bundleName: string;

        /**
         * The list of permission used records
         */ 
        permissionRecords: Array<PermissionUsedRecord>;
    }

    /**
     * PermissionUsedRecord.
     * @since 9
     */
    interface PermissionUsedRecord {
        /**
        * The permission name 
        */
        permissionName: string;

        /**
         * The access counts
         */
        accessCount: number;

        /**
         * The reject counts
         */
        rejectCount: number;

        /**
         * The last access time
         */
        lastAccessTime: number;

        /**
         * The last reject time
         */
        lastRejectTime: number;

        /**
         * The last access duration
         */
        lastAccessDuration: number;

         /**
         * The list of access timestamp records
         */
        accessRecords: Array<UsedRecordDetail>;

        /**
         * The list of reject timestamp records
         */
        rejectRecords: Array<UsedRecordDetail>;
    }

    /**
     * UsedRecordDetail.
     * @since 9
     */
    interface UsedRecordDetail {
        /**
         * The status
         */
        status: number;

        /**
         * Access/reject timestamp
         */
        timestamp: number;

        /**
         * Access duration
         */
        accessDuration: number;
    }
}

export default privacyManager;