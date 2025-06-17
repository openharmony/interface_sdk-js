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
/**
 * @file
 * @kit AbilityKit
 */
import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
/**
 * @namespace privacyManager
 * @syscap SystemCapability.Security.AccessToken
 * @since 20
 */
declare namespace privacyManager {
    /**
     * Adds an access record of a sensitive permission.
     *
     * @permission ohos.permission.PERMISSION_USED_STATS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission accessed.
     * @param { int } successCount - Number of successful accesses to the permission.
     * @param { int } failCount - Number of failed accesses to the permission.
     * @param { AddPermissionUsedRecordOptions } options - Options to be added.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, the count value is invalid,
     *  or usedType in AddPermissionUsedRecordOptions is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 20
     */
    function addPermissionUsedRecord(tokenID: int, permissionName: Permissions, successCount: int, failCount: int, options?: AddPermissionUsedRecordOptions): Promise<void>;
    /**
     * Adds access record of sensitive permission.
     *
     * @permission ohos.permission.PERMISSION_USED_STATS
     * @param { int } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be added.
     * @param { int } successCount - Access count.
     * @param { int } failCount - Reject count.
     * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
     * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
     * @throws { BusinessError } 12100007 - The service is abnormal.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 20
     */
    function addPermissionUsedRecord(tokenID: int, permissionName: Permissions, successCount: int, failCount: int, callback: AsyncCallback<void>): void;
    /**
     * Enumerates the means by which sensitive resources are accessed.
     *
     * @enum { int } PermissionUsedType
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 20
     */
    enum PermissionUsedType {
        /**
         * Sensitive resources are accessed with the declared permission or permission granted by the user.
         *
         * @syscap SystemCapability.Security.AccessToken
         * @systemapi
         * @since 20
         */
        NORMAL_TYPE = 0,
        /**
         * Sensitive resources are accessed through a picker.
         *
         * @syscap SystemCapability.Security.AccessToken
         * @systemapi
         * @since 20
         */
        PICKER_TYPE = 1,
        /**
         * Sensitive resources are accessed through a security component.
         *
         * @syscap SystemCapability.Security.AccessToken
         * @systemapi
         * @since 20
         */
        SECURITY_COMPONENT_TYPE = 2
    }
    /**
     * Additional information to add.
     *
     * @interface AddPermissionUsedRecordOptions
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 20
     */
    interface AddPermissionUsedRecordOptions {
        /**
         * Used type of the permission accessed.
         *
         * @type { ?PermissionUsedType }
         * @syscap SystemCapability.Security.AccessToken
         * @systemapi
         * @since 20
         */
        usedType?: PermissionUsedType;
    }
}
export default privacyManager;
export { Permissions };
