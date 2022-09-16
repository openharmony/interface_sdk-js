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
     * @throws { BusinessError } with 12100001 If the specified tokenID is invalid.
     * @throws { BusinessError } with 12100002 If the specified permissionName is invalid or it is not an user_grant permission.
     * @throws { BusinessError } with 12100017 If the specified successCount or failCount is invalid.
     * @throws { BusinessError } with 12100014 If the specified tokenID does not belong to an application process.
     * @throws { BusinessError } with 12100016 If the specified permission has not been used by the application specified by the tokenID.
     * @throws { BusinessError } with 201 If interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } with 401 If the input parameter is not valid parameter.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function addPermissionUsedRecord(tokenID: number, permissionName: string, successCount: number, failCount: number): Promise<void>;
    function addPermissionUsedRecord(tokenID: number, permissionName: string, successCount: number, failCount: number, callback: AsyncCallback<void>): void;

    /**
     * Queries the access records of sensitive permission.
     * @param request The request of permission used records.
     * @return Return the response of permission used records.
     * @throws { BusinessError } with 12100014 If the specified tokenID does not belong to an application process.
     * @throws { BusinessError } with 12100019 If specfied time or flag is invalid.
     * @throws { BusinessError } with 201 If interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } with 401 If the input parameter is not valid parameter.
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
     * @throws { BusinessError } with 12100001 If the specified tokenID is invalid.
     * @throws { BusinessError } with 12100002 If the specified permissionName is invalid or it is not an user_grant permission.
     * @throws { BusinessError } with 12100006 Repeated calls.
     * @throws { BusinessError } with 12100014 If the specified tokenID does not belong to an application process.
     * @throws { BusinessError } with 201 If interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } with 401 If the input parameter is not valid parameter.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function startUsingPermission(tokenID: number, permissionName: string): Promise<void>;
    function startUsingPermission(tokenID: number, permissionName: string, callback: AsyncCallback<void>): void;

    /**
     * Stop using sensitive permission.
     * @param tokenID The tokenId of specified application.
     * @param permissionName The permission name to be stopped.
     * @throws { BusinessError } with 12100001 If the specified tokenID is invalid.
     * @throws { BusinessError } with 12100002 If the specified permissionName is invalid or it is not an user_grant permission.
     * @throws { BusinessError } with 12100007 The use of the interface does not match with function "startUsingPermission".
     * @throws { BusinessError } with 12100014 If the specified tokenID does not belong to an application process.
     * @throws { BusinessError } with 201 If interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } with 401 If the input parameter is not valid parameter.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function stopUsingPermission(tokenID: number, permissionName: string): Promise<void>;
    function stopUsingPermission(tokenID: number, permissionName: string, callback: AsyncCallback<void>): void;

    /**
     * Subscribes to the change of active state of the specified permission.
     * @param permissionNameLists Indicates the permission lists, which are specified.
     * @throws { BusinessError } with 12100005 If the specified permissionName in the input list is all invalid or the list size has exceeded the limit.
     * @throws { BusinessError } with 12100006 If the interface is called repeatedly.
     * @throws { BusinessError } with 12100008 If the maximum enrollment limit is exceeded.
     * @throws { BusinessError } with 201 If interface caller does not have specified permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } with 401 If the input parameter is not valid parameter.
     * @permission ohos.permission.PERMISSION_USED_STATS.
     * @systemapi
     * @since 9
     */
    function on(type: 'activeStateChange', permissionNameList: Array<string>, callback: Callback<ActiveChangeResponse>): void;

    /**
     * Unsubscribes to the change of active state of the specified permission.
     * @param permissionNameLists Indicates the permission lists, which are specified.
     * @throws { BusinessError } with 12100007 If the use of the interface does not match with function "on".
     * @throws { BusinessError } with 201 If interface caller does not have specified permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } with 401 If the input parameter is not valid parameter.
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