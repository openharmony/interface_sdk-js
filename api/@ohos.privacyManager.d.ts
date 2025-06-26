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
/*** if arkts 1.1 */
import { int, long } from '@ohos.base';
/*** endif */

/**
 * @namespace privacyManager
 * @syscap SystemCapability.Security.AccessToken
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace privacyManager {
  /**
   * Adds access record of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be added.
   * @param { int } successCount - Access count.
   * @param { int } failCount - Reject count.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
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
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    options?: AddPermissionUsedRecordOptions
  ): Promise<void>;

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
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Queries the access records of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - The request of permission used records.
   * @returns { Promise<PermissionUsedResponse> } Return the response of permission used records.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The value of flag in request is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function getPermissionUsedRecord(request: PermissionUsedRequest): Promise<PermissionUsedResponse>;

  /**
   * Queries the access records of sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - The request of permission used records.
   * @param { AsyncCallback<PermissionUsedResponse> } callback - Return the response of permission used records.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The value of flag in request is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function getPermissionUsedRecord(
    request: PermissionUsedRequest,
    callback: AsyncCallback<PermissionUsedResponse>
  ): void;

  /**
   * Start using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be started.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *  It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function startUsingPermission(tokenID: number, permissionName: Permissions): Promise<void>;

  /**
   * Start using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be started.
   * @param { number } pid - Pid of the application, default -1.
   * @param { PermissionUsedType } usedType - Used type of the permission accessed, default NORMAL_TYPE.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *  It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18
   */
  function startUsingPermission(
    tokenID: number,
    permissionName: Permissions,
    pid?: number,
    usedType?: PermissionUsedType
  ): Promise<void>;

  /**
   * Start using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be started.
   * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *  It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function startUsingPermission(tokenID: number, permissionName: Permissions, callback: AsyncCallback<void>): void;

  /**
   * Stop using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be stopped.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function stopUsingPermission(tokenID: number, permissionName: Permissions): Promise<void>;

  /**
   * Stop using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be stopped.
   * @param { number } pid - Pid of the application, default -1.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18
   */
  function stopUsingPermission(
    tokenID: number,
    permissionName: Permissions,
    pid?: number
  ): Promise<void>;

  /**
   * Stop using sensitive permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenID - Token ID of the application.
   * @param { Permissions } permissionName - Name of the permission to be stopped.
   * @param { AsyncCallback<void> } callback - Asynchronous callback interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not an user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9
   */
  function stopUsingPermission(tokenID: number, permissionName: Permissions, callback: AsyncCallback<void>): void;

  /**
   * Subscribes to the change of active state of the specified permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - Event type. This parameter cannot change.
   * @param { Array<Permissions> } permissionList - Indicates the permission list, which are specified. This parameter cannot be null or empty.
   * @param { Callback<ActiveChangeResponse> } callback Callback for listening permission change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   * @throws { BusinessError } 12100005 - The registration time has exceeded the limitation.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function on(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>
  ): void;

  /**
   * Unsubscribes to the change of active state of the specified permission.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - Event type. This parameter cannot change.
   * @param { Array<Permissions> } permissionList - Indicates the permission list, which are specified. This parameter cannot be null or empty.
   * @param { Callback<ActiveChangeResponse> } [callback] - Callback for listening permission change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionNames in the list are all invalid, or the list size exceeds 1024 bytes.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function off(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>
  ): void;

  /**
   * Obtains the used type of the permission accessed.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { number } tokenId - Token ID of the application. By default, all token IDs of the device are returned.
   * @param { Permissions } permissionName - Name of the permission to query. By default, all permissions of the device are returned.
   * @returns { Promise<Array<PermissionUsedTypeInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. PermissionName exceeds 256 characters.
   * @throws { BusinessError } 12100002 - The input tokenId does not exist.
   * @throws { BusinessError } 12100003 - The input permissionName does not exist.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 12
   */
  function getPermissionUsedTypeInfos(tokenId?: number, permissionName?: Permissions): Promise<Array<PermissionUsedTypeInfo>>;

  /**
   * Sets the toggle state of permission access records for the current user.
   *
   * @permission ohos.permission.PERMISSION_RECORD_TOGGLE
   * @param { boolean } status - The toggle status to be set.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_RECORD_TOGGLE".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @throws { BusinessError } 12100009 - Common inner error.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18
   */
  function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>;

  /**
   * Obtains the toggle state of permission access records of the current user.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @returns { Promise<boolean> } Return the toggle status.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100007 - The service is abnormal.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18
   */
  function getPermissionUsedRecordToggleStatus(): Promise<boolean>;

  /**
   * Enum for permission for status.
   *
   * @enum { int } PermissionActiveStatus
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PermissionActiveStatus {
    /**
     * permission is not used yet.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PERM_INACTIVE = 0,

    /**
     * permission is used in front_end.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PERM_ACTIVE_IN_FOREGROUND = 1,

    /**
     * permission is used in back_end.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PERM_ACTIVE_IN_BACKGROUND = 2
  }

  /**
   * Indicates the response of permission active status.
   *
   * @interface ActiveChangeResponse
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ActiveChangeResponse {
    /**
     * AccessTokenID which called the interface
     *
     * @type { ?int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    callingTokenId?: int;

    /**
     * AccessTokenID
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    tokenId: int;

    /**
     * The permission name
     *
     * @type { Permissions }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    permissionName: Permissions;

    /**
     * The device id
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    deviceId: string;

    /**
     * The active status name
     *
     * @type { PermissionActiveStatus }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    activeStatus: PermissionActiveStatus;

    /**
     * Used type of the permission accessed.
     *
     * @type { ?PermissionUsedType }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    usedType?: PermissionUsedType;
  }

  /**
   * PermissionUsageFlag.
   *
   * @enum { int } PermissionUsageFlag
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PermissionUsageFlag {
    /**
     * permission used summary
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_PERMISSION_USAGE_SUMMARY = 0,
    /**
     * permission used detail
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    FLAG_PERMISSION_USAGE_DETAIL = 1
  }

  /**
   * Provides request of querying permission used records.
   *
   * @interface PermissionUsedRequest
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PermissionUsedRequest {
    /**
     * AccessTokenID
     *
     * @type { ?int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    tokenId?: int;

    /**
     * Distribute flag
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    isRemote?: boolean;

    /**
     * The device id
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    deviceId?: string;

    /**
     * The bundle name
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    bundleName?: string;

    /**
     * The list of permission name
     *
     * @type { ?Array<Permissions> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    permissionNames?: Array<Permissions>;

    /**
     * The begin time, in milliseconds
     *
     * @type { ?long }
     * @default 0
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    beginTime?: long;

    /**
     * The end time, in milliseconds
     *
     * @type { ?long }
     * @default 0
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    endTime?: long;

    /**
     * The permission usage flag
     *
     * @type { PermissionUsageFlag }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    flag: PermissionUsageFlag;
  }

  /**
   * Provides response of querying permission used records.
   *
   * @interface PermissionUsedResponse
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PermissionUsedResponse {
    /**
     * The begin time, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    beginTime: long;

    /**
     * The end time, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    endTime: long;

    /**
     * The list of permission used records of bundle
     *
     * @type { Array<BundleUsedRecord> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    bundleRecords: Array<BundleUsedRecord>;
  }

  /**
   * BundleUsedRecord.
   *
   * @interface BundleUsedRecord
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface BundleUsedRecord {
    /**
     * AccessTokenID
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    tokenId: int;

    /**
     * Distribute flag
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    isRemote: boolean;

    /**
     * The device id
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    deviceId: string;

    /**
     * The bundle name
     *
     * @type { string }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    bundleName: string;

    /**
     * The list of permission used records
     *
     * @type { Array<PermissionUsedRecord> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    permissionRecords: Array<PermissionUsedRecord>;
  }

  /**
   * PermissionUsedRecord.
   *
   * @interface PermissionUsedRecord
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PermissionUsedRecord {
    /**
     * The permission name
     *
     * @type { Permissions }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    permissionName: Permissions;

    /**
     * The access counts
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    accessCount: int;

    /**
     * The reject counts
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    rejectCount: int;

    /**
     * The last access time, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lastAccessTime: long;

    /**
     * The last reject time, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lastRejectTime: long;

    /**
     * The last access duration, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lastAccessDuration: long;

    /**
     * The list of access records of details
     *
     * @type { Array<UsedRecordDetail> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    accessRecords: Array<UsedRecordDetail>;

    /**
     * The list of reject records of details
     *
     * @type { Array<UsedRecordDetail> }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    rejectRecords: Array<UsedRecordDetail>;
  }

  /**
   * UsedRecordDetail.
   *
   * @interface UsedRecordDetail
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface UsedRecordDetail {
    /**
     * The status
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    status: int;

    /**
     * Indicates the status of lockscreen.
     *
     * @type { ?int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lockScreenStatus?: int;

    /**
     * Timestamp, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    timestamp: long;

    /**
     * The value of successCount or failCount passed in to addPermissionUsedRecord.
     *
     * @type { ?int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    count?: int;

    /**
     * Access duration, in milliseconds
     *
     * @type { long }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    accessDuration: long;

    /**
     * Used type of the permission accessed.
     *
     * @type { ?PermissionUsedType }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    usedType?: PermissionUsedType;
  }

  /**
   * Enumerates the means by which sensitive resources are accessed.
   *
   * @enum { int } PermissionUsedType
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum PermissionUsedType {
    /**
     * Sensitive resources are accessed with the declared permission or permission granted by the user.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    NORMAL_TYPE = 0,

    /**
     * Sensitive resources are accessed through a picker.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    PICKER_TYPE = 1,

    /**
     * Sensitive resources are accessed through a security component.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    SECURITY_COMPONENT_TYPE = 2
  }

  /**
   * Information about the permission used type.
   *
   * @interface PermissionUsedTypeInfo
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface PermissionUsedTypeInfo {
    /**
     * Token ID of the application.
     *
     * @type { int }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    tokenId: int;

    /**
     * Name of the permission accessed.
     *
     * @type { Permissions }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    permissionName: Permissions;

    /**
     * Used type of the permission accessed.
     *
     * @type { PermissionUsedType }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    usedType: PermissionUsedType;
  }

  /**
   * Additional information to add.
   *
   * @interface AddPermissionUsedRecordOptions
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface AddPermissionUsedRecordOptions {
    /**
     * Used type of the permission accessed.
     *
     * @type { ?PermissionUsedType }
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    usedType?: PermissionUsedType;
  }
}

export default privacyManager;
export { Permissions };
