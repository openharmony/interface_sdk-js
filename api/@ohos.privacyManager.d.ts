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

import {AsyncCallback, Callback} from './basic'

/**
 * @syscap SystemCapability.Security.AccessToken
 */
 declare namespace privacyManager {
    /**
     * Adds access record of sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be added.
     * @param successCount Access count.
     * @param failCount Reject account.
     * @return Returns 0 if the method is called successfully, returns -1 otherwise.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function addPermissionUsedRecord(tokenID: number, permissionName: string, successCount: number, failCount: number): Promise<number>;
    function addPermissionUsedRecord(tokenID: number, permissionName: string, successCount: number, failCount: number, callback: AsyncCallback<number>): void;

    /**
     * Queries the access records of sensitive permission.
     * @param request The request of permission used records.
     * @return Return the response of permission used records.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function getPermissionUsedRecords(request: PermissionUsedRequest): Promise<PermissionUsedResponse>;
    function getPermissionUsedRecords(request: PermissionUsedRequest, callback: AsyncCallback<PermissionUsedResponse>): void;

    /**
     * Start using sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be started.
     * @return Returns 0 if the method is called successfully, returns -1 otherwise.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function startUsingPermission(tokenID: number, permissionName: string): Promise<number>;
    function startUsingPermission(tokenID: number, permissionName: string, callback: AsyncCallback<number>): void;

    /**
     * Stop using sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be stopped.
     * @return Returns 0 if the method is called successfully, returns -1 otherwise.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function stopUsingPermission(tokenID: number, permissionName: string): Promise<number>;
    function stopUsingPermission(tokenID: number, permissionName: string, callback: AsyncCallback<number>): void;

    /**
     * Subscribes to the change of  active state of the specified permission.
     * @param permissionNameLists Indicated the permission lists, which are specified.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function on(type: 'activeStateChange', permissionNameList: Array<string>, callback: Callback<ActiveChangeResponse>): void;

    /**
     * Unsubscribes from .
     * @param permissionNameLists Indicated the permission lists, which are specified.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function off(type: 'activeStateChange', permissionNameList: Array<string>, callback?: Callback<ActiveChangeResponse>): void;

    /**
     * Enum for permission for status.
     * @systemapi
     * @since 9
     */
     enum PermissionActiveStatus {
        /**
         * permission is not used yet.
         */
        PERM_INACTIVE = 0,

        /**
         * permission is used in front_end.
         */
        PERM_ACTIVE_IN_FOREGROUND = 1,

        /**
         * permission is used in back_end.
         */
        PERM_ACTIVE_IN_BACKGROUND = 2,
    }

    /**
     * Indicates the response of permission active status.
     * @systemapi
     * @since 9
     */
    interface ActiveChangeResponse {
        /**
         * AccessTokenID
         */
        tokenId: number;

        /**
        * The permission name
        */
        permissionName: string;
    
        /**
        * The device id
        */
        deviceId: string;
        /**
        * The active status name
        */
        activeStatus: PermissionActiveStatus;
    }

    /**
     * PermissionUsageFlag.
     * @systemapi
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
     * @systemapi
     * @since 9
     */
    interface PermissionUsedRequest {
        /**
         * AccessTokenID
         */
        tokenId: number;

        /**
         * Distribute flag
         */
        isRemote: boolean;

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
        permissionNames: Array<string>;

        /**
         * The begin time, in milliseconds
         */
        beginTime: number;

        /**
         * The end time, in milliseconds
         */
        endTime: number;

        /**
         * The permission usage flag
         */
        flag: PermissionUsageFlag;
    }

    /**
     * Provides response of querying permission used records.
     * @systemapi
     * @since 9
     */
    interface PermissionUsedResponse {
        /**
         * The begin time, in milliseconds
         */
        beginTime: number;

        /**
         * The end time, in milliseconds
         */
        endTime: number;

        /**
         * The list of permision used records of bundle
         */ 
        bundleRecords: Array<BundleUsedRecord>;
    }

    /**
     * BundleUsedRecord.
     * @systemapi
     * @since 9
     */
     interface BundleUsedRecord {
        /**
         * AccessTokenID
         */
        tokenId: number;

        /**
          * Distribute flag
          */
        isRemote: boolean;

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
     * @systemapi
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
         * The last access time, in milliseconds
         */
        lastAccessTime: number;

        /**
         * The last reject time, in milliseconds
         */
        lastRejectTime: number;

        /**
         * The last access duration, in milliseconds
         */
        lastAccessDuration: number;

         /**
         * The list of access records of details
         */
        accessRecords: Array<UsedRecordDetail>;

        /**
         * The list of reject records of details
         */
        rejectRecords: Array<UsedRecordDetail>;
    }

    /**
     * UsedRecordDetail.
     * @systemapi
     * @since 9
     */
    interface UsedRecordDetail {
        /**
         * The status
         */
        status: number;

        /**
         * Timestamp, in milliseconds
         */
        timestamp: number;

        /**
         * Access duration, in milliseconds
         */
        accessDuration: number;
    }
}

export default privacyManager;