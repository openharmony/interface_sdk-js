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
 * ###### Core Enum Types
 *
 * - **[PermissionUsageFlag]{@link privacyManager.PermissionUsageFlag}:** Enum for querying permission usage records,
 * used to specify querying summary data or detailed data.
 * - **[PermissionActiveStatus]{@link privacyManager.PermissionActiveStatus}:** Enum for permission usage status change
 * types, used to indicate unused, foreground use, or background use status.
 * - **[PermissionUsedType]{@link privacyManager.PermissionUsedType}:** Enum for sensitive permission usage types, used
 * to indicate the use of sensitive permissions through normal authorization, Picker, or security components.
 *
 * ###### Core Interface Types
 *
 * - **[PermissionUsedRequest]{@link privacyManager.PermissionUsedRequest}:** Permission usage record query request
 * object, used to specify the query application, permission, time range, and query method.
 * - **[PermissionUsedResponse]{@link privacyManager.PermissionUsedResponse}:** Permission usage record query response
 * object, used to return the query time range and a collection of application-level records.
 * - **[BundleUsedRecord]{@link privacyManager.BundleUsedRecord}:** Application or device-level permission usage record
 * object, used to return the permission access records of a specific application or remote device.
 * - **[PermissionUsedRecord]{@link privacyManager.PermissionUsedRecord}:** Access record object for a single
 * permission, used to return the number of accesses, number of denials, last access time, and detailed records.
 * - **[UsedRecordDetail]{@link privacyManager.UsedRecordDetail}:** Single access record detail object, used to return
 * information such as access status, timestamp, access duration, and usage type.
 * - **[ActiveChangeResponse]{@link privacyManager.ActiveChangeResponse}:** Permission usage status change event
 * object, to return details of permission active status changes.
 * - **[PermissionUsedTypeInfo]{@link privacyManager.PermissionUsedTypeInfo}:** Permission usage type information
 * object, used to return the usage type when an application accesses a sensitive permission.
 * - **[AddPermissionUsedRecordOptions]{@link privacyManager.AddPermissionUsedRecordOptions}:** Optional parameter
 * object for adding a permission usage record, used to specify the sensitive permission usage type and extension
 * identity.
 * - **[PermissionUsingOptions]{@link privacyManager.PermissionUsingOptions}:** Optional parameter object for
 * permission usage, used to specify the extension identity.
 *
 * ###### Core Function Types
 *
 * - **[addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord}:** Adds a permission usage record.
 * - **[getPermissionUsedRecord]{@link privacyManager.getPermissionUsedRecord}:** Queries permission usage records.
 * - **[setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus}:** Sets the
 * permission usage record toggle status.
 * - **[getPermissionUsedRecordToggleStatus]{@link privacyManager.getPermissionUsedRecordToggleStatus}:** Queries the
 * permission usage record toggle status.
 * - **[startUsingPermission]{@link privacyManager.startUsingPermission}:** Marks the start of using a sensitive
 * permission.
 * - **[stopUsingPermission]{@link privacyManager.stopUsingPermission}:** Marks the stop of using a sensitive
 * permission.
 * - **[checkPermissionInUse]{@link privacyManager.checkPermissionInUse}:** Checks whether a specified permission is
 * currently being used.
 * - **[on]{@link privacyManager.on}:** Subscribes to permission usage status change events.
 * - **[off]{@link privacyManager.off}:** Unsubscribes from permission usage status change events.
 * - **[getPermissionUsedTypeInfos]{@link privacyManager.getPermissionUsedTypeInfos}:** Queries sensitive permission
 * access type information.
 *
 * ###### Core Class
 *
 * - **privacyManager:** Provides the core class for privacy management.
 *
 * ![image_privacyManager](docroot://reference/apis-ability-kit/figures/privacyManager.png)
 *
 * @file Privacy Management
 * @kit AbilityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';

/**
 * This module primarily provides privacy management APIs such as permission usage records, supporting system
 * applications in recording, querying, listening to, and controlling the usage of sensitive permissions. A permission
 * usage record describes when a sensitive permission was used, how it was used, whether it is currently in use, and
 * whether these usage records are allowed to be recorded or queried.
 *
 * This module is mainly used in the following scenarios:
 *
 * - Adding/querying the sensitive permission access records of a specified application.
 * - Subscribing to permission usage status change events, sensing changes in permission usage from unused to
 * foreground use and background use, and linking with business logic.
 * - Controlling the permission access record toggle for the current user.
 * - Querying whether a certain permission is currently being used.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace privacyManager {
  /**
   * When an application protected by a permission is called by another service or application, this API can be used to
   * add a permission usage record. It is recommended to call this API after accessing a sensitive permission, so that
   * the system records the corresponding sensitive permission access event. This API uses a promise to return the
   * result.
   *
   * The permission usage record includes the application identity of the caller, the name of the application permission,
   * and the number of successful and failed accesses to this application by the caller.
   *
   * > **NOTE**
   * > The permission usage record is controlled by the toggle status set by [setPermissionUsedRecordToggleStatus]{@link
   *  privacyManager.setPermissionUsedRecordToggleStatus}. When the toggle is off, calling this API will not generate a
   * permission usage record.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to be recorded. Passing an invalid value returns
   *     error code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { int } successCount - Number of successful accesses. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: The value must be a non-negative integer.
   * @param { int } failCount - Number of failed accesses. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: The value must be a non-negative integer.
   * @param { AddPermissionUsedRecordOptions } [options] - Optional parameter for adding a permission usage record, used
   *     to specify the sensitive permission usage type and extension identity. Pass this parameter when you need to
   *     distinguish the permission access method (such as access via Picker or security control) or identify the
   *     caller's extension identity. [since 12]
   *     <br>Default value: Please refer to [AddPermissionUsedRecordOptions]{@link
   *     privacyManager.AddPermissionUsedRecordOptions} for the default values of each property in the structure.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the count value is invalid, usedType in AddPermissionUsedRecordOptions is invalid,
   *     or the enhancedIdentity in AddPermissionUsedRecordOptions exceeds 48 characters.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    options?: AddPermissionUsedRecordOptions
  ): Promise<void>;

  /**
   * When an application protected by a permission is called by another service or application, this API can be used to
   * add a permission usage record. It is recommended to call this API after accessing a sensitive permission, so that
   * the system records the corresponding sensitive permission access event. This API uses an asynchronous callback to
   * return the result.
   *
   * The permission usage record includes the application identity of the caller, the name of the application
   * permission used, and the number of successful and failed accesses to this application by the caller.
   *
   * The permission usage record is controlled by the toggle status set by
   * [setPermissionUsedRecordToggleStatus]{@link privacyManager.setPermissionUsedRecordToggleStatus}. When the toggle
   * is off, calling this API will not generate a permission usage record.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
   *     BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to be recorded. Passing an invalid value returns
   *     error code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { int } successCount - Number of successful accesses. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: The value must be a non-negative integer.
   * @param { int } failCount - Number of failed accesses. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: The value must be a non-negative integer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the count value is invalid.
   * @throws { BusinessError } 12100002 - The specified tokenID does not exist or refer to an application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Obtains historical permission usage records, which can be used in permission auditing or security monitoring
   * scenarios, such as checking an application's usage of sensitive permissions within a specified time period.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - Request for querying permission usage records.
   * @returns { Promise<PermissionUsedResponse> } Promise used to return the queried permission usage record.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The value of flag, begin, or end in request is invalid.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getPermissionUsedRecord(request: PermissionUsedRequest): Promise<PermissionUsedResponse>;

  /**
   * Obtains historical permission usage records, which can be used in permission auditing or security monitoring
   * scenarios, such as checking an application's usage of sensitive permissions within a specified time period.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { PermissionUsedRequest } request - Request for querying permission usage records.
   * @param { AsyncCallback<PermissionUsedResponse> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and data is the permission usage record is obtained. Otherwise,
   *     **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The value of flag, begin, or end in request is invalid.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getPermissionUsedRecord(
    request: PermissionUsedRequest,
    callback: AsyncCallback<PermissionUsedResponse>): void;

  /**
   * A system application can call this API to report the application's permission usage status in the foreground or
   * background to the system. The privacy service notifies all subscribers of this permission usage status change event
   *  (refer to [on]{@link privacyManager.on} for the subscription method). This API uses a promise to return the
   * result.
   *
   * After starting to use a permission, [stopUsingPermission]{@link privacyManager.stopUsingPermission} must be called
   * to stop using the permission when the usage ends.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to be used. Passing an invalid value returns error
   *     code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName
   *     exceeds 256 characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100002 - (Deprecated in 12) The specified tokenID does not exist or refer to an
   *     application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   */
  function startUsingPermission(tokenID: int, permissionName: Permissions): Promise<void>;

  /**
   * A system application can call this API to report the application's permission usage status in the foreground or
   * background to the system. The privacy service notifies all subscribers of this permission usage status change event
   *  (refer to [on]{@link privacyManager.on} for the subscription method). This API uses a promise to return the
   * result.
   *
   * After starting to use a permission, [stopUsingPermission]{@link privacyManager.stopUsingPermission} must be called
   * to stop using the permission when the usage ends.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to be used. Passing an invalid value returns error
   *     code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { int } [pid] - Process PID of the caller, used to manage the permission usage status based on the process
   *     lifecycle. Pass this parameter when you need to precisely control the permission usage status of a specific
   *     process (for example, automatically stopping permission usage when the process exits). It must be the same as
   *     the pid passed to [stopUsingPermission]{@link privacyManager.stopUsingPermission}.
   *     <br>The value should be an integer. Default value: -1, indicating no response based on the process lifecycle.
   * @param { PermissionUsedType } [usedType] - Access mode for the sensitive permission.
   *     <br>Default value: NORMAL_TYPE.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the type of the specified tokenID is not of the application type, or usedType is invalid.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function startUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int,
    usedType?: PermissionUsedType
  ): Promise<void>;

  /**
   * A system application can call this API to report the application's permission usage status in the foreground or
   * background to the system. The privacy service notifies all subscribers of this permission usage status change event
   *  (refer to [on]{@link privacyManager.on} for the subscription method). This API uses a promise to return the
   * result.
   *
   * After starting to use a permission, [stopUsingPermission]{@link privacyManager.stopUsingPermission} must be called
   * to stop using the permission when the usage ends.
   *
   * When a pid is passed in, the pid must be the same as the pid passed into
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission}. If the pairing relationship is not satisfied,
   * error code 12100004 is returned.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to be used. Passing an invalid value returns error
   *     code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { int } [pid] - Process PID of the caller, used to manage the permission usage status based on the process
   *     lifecycle. Pass this parameter when you need to precisely control the permission usage status of a specific
   *     process (for example, automatically stopping permission usage when the process exits). It must be the same as
   *     the pid passed to [stopUsingPermission]{@link privacyManager.stopUsingPermission}.
   *     <br>The value should be an integer. Default value: -1, indicating no response based on the process lifecycle.
   * @param { PermissionUsedType } [usedType] - Access mode for the sensitive permission.
   *     <br>Default value: NORMAL_TYPE.
   * @param { PermissionUsingOptions } [options] - Optional parameter for permission usage, used to specify the
   *     extension identity. This parameter is passed in when the caller's extension identity information needs to be
   *     identified.
   *     <br>Default value: Please refer to [PermissionUsingOptions]{@link privacyManager.PermissionUsingOptions} for
   *     the default values of each property in the structure.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the type of the specified tokenID is not of the application type, usedType is invalid,
   *     or the enhancedIdentity in PermissionUsingOptions exceeds 48 characters.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function startUsingPermission(
     tokenID: int,
     permissionName: Permissions,
     pid?: int,
     usedType?: PermissionUsedType,
     options?: PermissionUsingOptions
   ): Promise<void>;

  /**
   * A system application can call this API to report the application's permission usage status in the foreground or
   * background to the system. The privacy service notifies all subscribers of this permission usage status change event
   *  (refer to [on]{@link privacyManager.on} for the subscription method). This API uses an asynchronous callback to
   * return the result.
   *
   * After starting to use a permission, [stopUsingPermission]{@link privacyManager.stopUsingPermission} must be called
   * to stop using the permission when the usage ends.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to be used. Passing an invalid value returns error
   *     code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100002 - (Deprecated in 12) The specified tokenID does not exist or refer to an
   *     application process.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   *     It means the application specified by the tokenID has been using the specified permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function startUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    callback: AsyncCallback<void>
  ): void;

  /**
   * A system application calls this API to mark that the specified permission is no longer in use. After a successful
   * call, the privacy service notifies all subscribers of this permission usage status change event of this status
   * change. It is suitable for notifying the system that permission usage has ended when an application completes a
   * sensitive operation or exits the foreground. This API uses a promise to return the result.
   *
   * This API must be used in conjunction with [startUsingPermission]{@link privacyManager.startUsingPermission}.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to stop using. Passing an invalid value returns
   *     error code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   */
  function stopUsingPermission(tokenID: int, permissionName: Permissions): Promise<void>;

  /**
   * A system application calls this API to mark that the specified permission is no longer in use. After a successful
   * call, the privacy service notifies all subscribers of this permission usage status change event of this status
   * change. It is suitable for notifying the system that permission usage has ended when an application completes a
   * sensitive operation or exits the foreground. This API uses an asynchronous callback to return the result.
   *
   * This API must be used in conjunction with [startUsingPermission]{@link privacyManager.startUsingPermission}.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to stop using. Passing an invalid value returns
   *     error code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function stopUsingPermission(tokenID: int, permissionName: Permissions, callback: AsyncCallback<void>): void;

  /**
   * A system application calls this API to mark that the specified permission is no longer in use. After a successful
   * call, the privacy service notifies all subscribers of this permission usage status change event of this status
   * change. It is suitable for notifying the system that permission usage has ended when an application completes a
   * sensitive operation or exits the foreground. This API uses a promise to return the result.
   *
   * The PID must be the same as the PID passed in [startUsingPermission]{@link privacyManager.startUsingPermission}.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to stop using. Passing an invalid value returns
   *     error code 12100001.
   * @param { int } [pid] - Process ID of the caller, which must be the same as the pid passed in
   *     [startUsingPermission]{@link privacyManager.startUsingPermission}. Failure to meet the matching relationship
   *     may cause the API call to fail (error code 12100004).
   *     <br>The value should be an integer. Default value: -1, indicating no response based on the process lifecycle.
   * @param { PermissionUsingOptions } [options] - Optional parameter for permission usage, used to specify the
   *     extension identity. This parameter is passed in when the caller's extension identity information needs to be
   *     identified.
   *     <br>Default value: Please refer to [PermissionUsingOptions]{@link privacyManager.PermissionUsingOptions} for
   *     the default values of each property in the structure.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds
   *     256 characters, the type of the specified tokenID is not of the application type, or the enhancedIdentity
   *     in PermissionUsingOptions exceeds 48 characters.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function stopUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int,
    options?: PermissionUsingOptions
  ): Promise<void>;

  /**
   * Subscribes to permission usage status change events for a specified permission list. Permission usage status
   * changes are triggered by calls to [startUsingPermission]{@link privacyManager.startUsingPermission} and
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission}. After a successful subscription, when the
   * permission usage status changes, the callback function is triggered, returning an
   * [ActiveChangeResponse]{@link privacyManager.ActiveChangeResponse} object containing details of the permission
   * usage status change. This API uses an asynchronous callback to return the result.
   *
   * Multiple callback functions are allowed to be subscribed for the same permissionList.
   *
   * > **NOTE**
   * > It is not allowed to subscribe the same callback function using two permissionLists that have an intersection.
   * > That is, if two permissionLists contain the same permission name, the same callback function cannot be used for
   * subscription.
   * > This API is typically used in conjunction with [off]{@link privacyManager.off}.
   * > When listening is no longer needed, off should be called to unsubscribe.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - Event type. The value is **'activeStateChange'**, which indicates the
   *     permission usage change.
   * @param { Array<Permissions> } permissionList - List of subscribed permission names. An empty value indicates
   *     subscription to the usage status changes of all permissions.
   *     Passing an invalid value returns error code 12100001.
   *     <br>Value constraint: The array length cannot exceed 1024.
   * @param { Callback<ActiveChangeResponse> } callback - Callback used to return the object of subscribing to state
   *     changes of the specified permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList exceeds the size limit, or the
   *     permissionNames in the list are all invalid.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>): void;

  /**
   * Subscribes to permission usage status change events for a specified permission list. Permission usage status
   * changes are triggered by calls to [startUsingPermission]{@link privacyManager.startUsingPermission} and
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission}. After a successful subscription, when the
   * permission usage status changes, the callback function is triggered, returning an
   * [ActiveChangeResponse]{@link privacyManager.ActiveChangeResponse} object containing details of the permission
   * usage status change. This API uses an asynchronous callback to return the result.
   *
   * Multiple callback functions are allowed to be subscribed for the same permissionList.
   *
   * > **NOTE**
   * > It is not allowed to subscribe the same callback function using two permissionLists that have an intersection.
   * > That is, if two permissionLists contain the same permission name, the same callback function cannot be used for
   * subscription.
   * > This API is typically used in conjunction with [offActiveStateChange]{@link privacyManager.offActiveStateChange}.
   *  When listening is no longer needed, offActiveStateChange should be called to unsubscribe.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { Array<Permissions> } permissionList - List of subscribed permission names. An empty value indicates
   *     subscription to the usage status changes of all permissions.
   *     Passing an invalid value returns error code 12100001.
   *     <br>Value constraint: The array length cannot exceed 1024.
   * @param { Callback<ActiveChangeResponse> } callback - Callback used to return the event object for the subscribed
   *     permission state change.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList exceeds the size limit,
   *     or the permissionNames in the list are all invalid.
   * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
   * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 23 static
   */
  function onActiveStateChange(
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>): void;

  /**
   * Unsubscribes from permission usage status change events for a specified permission list. After a successful
   * unsubscription, status change notifications for the specified permission list will no longer be received.
   *
   * When unsubscribing, if no callback function is passed in, all callback functions under the permissionList are
   * deleted in batch.
   *
   * > **NOTE**
   * > This API is typically used in conjunction with [on]{@link privacyManager.on} to cancel the listening relationship
   *  created by on.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { 'activeStateChange' } type - Event type. The value is **'activeStateChange'**, which indicates the
   *     permission usage change.
   * @param { Array<Permissions> } permissionList - List of permission names to unsubscribe from. If empty, unsubscribes
   *     from all permission status changes. Must be consistent with the input of on.
   *     <br>Value constraint: The array length cannot exceed 1024.
   * @param { Callback<ActiveChangeResponse> } [callback] - Callback used to return the object for unsubscribing from
   *     the status change event of the specified tokenId and permission names. Must be consistent with the callback
   *     passed to on. If this parameter is not provided, all callback functions under permissionList will be deleted in
   *     batch. <br>Value constraint: The array length cannot exceed 1024.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is not in the listening list.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   */
  function off(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>): void;

  /**
   * Unsubscribes from permission usage status change events for a specified permission list. After a successful
   * unsubscription, status change notifications for the specified permission list will no longer be received.
   *
   * When unsubscribing, if no callback function is passed in, all callback functions under the permissionList are
   * deleted in batch.
   *
   * > **NOTE**
   * > This API is typically used in conjunction with [onActiveStateChange]{@link privacyManager.onActiveStateChange} to
   *  cancel the listening relationship created by onActiveStateChange.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { Array<Permissions> } permissionList - List of permission names to unsubscribe from. If empty, unsubscribes
   *     from all permission status changes. Must be consistent with the input of on.
   *     <br>Value constraint: The array length cannot exceed 1024.
   * @param { Callback<ActiveChangeResponse> } [callback] - Callback used to return the object for unsubscribing from
   *     the status change event of the specified tokenId and permission names. Must be consistent with the callback
   *     passed to onActiveStateChange. If this parameter is not provided, all callback functions under permissionList
   *     will be deleted in batch.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is not in the listening list.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 23 static
   */
  function offActiveStateChange(
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>): void;

  /**
   * Obtains information about how a sensitive permission is used by an application.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int | null } [tokenId] - Application identity identifier for accessing sensitive permissions. It can be
   *     obtained through the [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId}
   *     field of ApplicationInfo. Pass a specific tokenId when querying the access type information of sensitive
   *     permissions for a particular app; 0 or null indicates querying the access type information of sensitive
   *     permissions for all apps. Starting from API version 20, the null type is newly supported.
   *     <br>Default value: 0.
   * @param { Permissions } [permissionName] - Name of the sensitive permission being accessed. Pass a specific
   *     permission name when querying the access type information of a particular sensitive permission; empty
   *     indicates querying the access type information of all sensitive permissions. Passing an invalid value returns
   *     error code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters. Default value: Empty string.
   * @returns { Promise<Array<PermissionUsedTypeInfo>> } Promise used to return the list of permission access type
   *     information.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. PermissionName exceeds 256 characters.
   * @throws { BusinessError } 12100002 - The input tokenId does not exist.
   * @throws { BusinessError } 12100003 - The input permissionName does not exist.
   * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getPermissionUsedTypeInfos(
    tokenId?: int | null,
    permissionName?: Permissions): Promise<Array<PermissionUsedTypeInfo>>;

  /**
   * Enumerates the types of permission usage status changes. It is used to describe the change type of permission
   * usage status, returned in the callback of subscribing to permission usage status change events (via
   * [on('activeStateChange')]{@link privacyManager.on}), helping system applications sense the status switch of a
   * permission from unused to foreground use and background use.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum PermissionActiveStatus {
    /**
     * The permission is not used.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PERM_INACTIVE = 0,

    /**
     * The permission is being used by an application running in the foreground.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PERM_ACTIVE_IN_FOREGROUND = 1,

    /**
     * The permission is being used by an application running in the background.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PERM_ACTIVE_IN_BACKGROUND = 2
  }

  /**
   * Defines the detailed permission usage information.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface ActiveChangeResponse {
    /**
     * Identity of the caller application. This field is invalid when **activeStatus** is **INACTIVE**.
     *
     * Default value: **0**.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    callingTokenId?: int;

    /**
     * Token ID of the application whose permission usage changes are subscribed to.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    tokenId: int;

    /**
     * Name of the permission whose usage status has changed.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    permissionName: Permissions;

    /**
     * ID of the device where the permission usage status change occurred.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Permission usage status.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    activeStatus: PermissionActiveStatus;

    /**
     * Sensitive permission usage type. This value is invalid when activeStatus is INACTIVE.
     *
     * Default value: NORMAL_TYPE.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    usedType?: PermissionUsedType;
    /**
     * Extension identity, used to identify additional identity information of the caller. This field is returned
     * when it is necessary to distinguish permission usage records from different call sources within the same
     * application.
     * The maximum length is 48. Default value: Empty string.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }

  /**
   * Enumerates the modes for querying the permission usage records.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum PermissionUsageFlag {
    /**
     * Query the permission usage summary.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    FLAG_PERMISSION_USAGE_SUMMARY = 0,
    /**
     * Query detailed permission usage records.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    FLAG_PERMISSION_USAGE_DETAIL = 1
  }

  /**
   * Represents the request for querying permission usage records.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface PermissionUsedRequest {
    /**
     * Identity identifier of the target application. It can be obtained through the
     * [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field of ApplicationInfo.
     *
     * Default value: **0**, queries all applications.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    tokenId?: int;

    /**
     * Used to specify whether to query remote devices. The value **false** means to query the permission usage records
     * of the local device, and **true** means to query the records of remote devices.
     *
     * Default value: **false**.
     *
     * @default false
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    isRemote?: boolean;

    /**
     * ID of the device where the target application is located.
     *
     * Default value: local device ID.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId?: string;

    /**
     * Bundle name of the target application.
     *
     * Default value: queries all applications.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * Set of permissions to query.
     * Default value: Empty string. Means querying usage records of all permissions.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    permissionNames?: Array<Permissions>;

    /**
     * Start time of the query.
     * Unit: milliseconds. Default value: **0**, indicating no limit on the start time.
     *
     * @default 0
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    beginTime?: long;

    /**
     * End time of the query. It must not be earlier than beginTime; otherwise, error code 12100001 is returned.
     * Unit: milliseconds. Default value: **0**, indicating no limit on the end time.
     *
     * @default 0
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    endTime?: long;

    /**
     * Used to specify the query mode. When set to **FLAG_PERMISSION_USAGE_SUMMARY**, summary information is returned;
     * when set to **FLAG_PERMISSION_USAGE_DETAIL**, detailed records are returned.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    flag: PermissionUsageFlag;
  }

  /**
   * Represents the access records of all applications or devices.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface PermissionUsedResponse {
    /**
     * Start time of the query.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    beginTime: long;

    /**
     * End time of the query.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    endTime: long;

    /**
     * Each element represents the permission access record under an application dimension. Developers can further
     * traverse permissionRecords to obtain specific permission usage details.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    bundleRecords: Array<BundleUsedRecord>;
  }

  /**
   * Represents the access records of an application or device.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleUsedRecord {
    /**
     * Application identity identifier for using the permission. This field is invalid in distributed scenarios; the
     * source device must be identified using deviceId and deviceName.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    tokenId: int;

    /**
     * Whether it is an access record in a distributed scenario. false indicates a local application record, and true
     * indicates a permission usage record on a remote device.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    isRemote: boolean;

    /**
     * ID of the device where the application using the permission is located. Mainly used to identify the source of a
     * remote device in distributed scenarios; this field can usually be ignored in local scenarios.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Bundle name of the application using the permission. In local scenarios, it can be used to directly locate the
     * target application; this field is invalid in distributed scenarios.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Collection of permission usage records under the current application or device. Each element corresponds to a
     * specific permission, allowing further viewing of access count, rejection count, last access time, and detailed
     * records.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    permissionRecords: Array<PermissionUsedRecord>;
    /**
     * Name of the device where the application using the permission is located, used only in distributed scenarios.
     * It can be used to display a more understandable device identifier in the UI.
     * Default value: Empty string.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 24 dynamic&static
     */
    deviceName?: string;
  }

  /**
   * Represents the access records of a permission.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface PermissionUsedRecord {
    /**
     * Permission name, used to identify the sensitive permission corresponding to the current statistical record.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    permissionName: Permissions;
    /**
     * Total number of accesses for this permission, indicating the cumulative number of successful uses of this
     * permission within the query time window.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    accessCount: int;
    /**
     * Total number of rejections for this permission, indicating the cumulative number of failed or denied permission
     * accesses within the query time window.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rejectCount: int;
    /**
     * Last time when the permission was accessed.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    lastAccessTime: long;
    /**
     * Last time when the access to the permission was rejected.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    lastRejectTime: long;

    /**
     * Last access duration.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    lastAccessDuration: long;

    /**
     * Access record collection, effective only when flag is FLAG_PERMISSION_USAGE_DETAIL.
     *
     * Default value: Query the last 10 successful access records.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    accessRecords: Array<UsedRecordDetail>;

    /**
     * Rejection record collection, effective only when flag is FLAG_PERMISSION_USAGE_DETAIL.
     *
     * Default value: Query the last 10 failed or rejected records.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rejectRecords: Array<UsedRecordDetail>;
    /**
     * Extension identity, with a maximum length of 48 characters.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }

  /**
   * Represents the details of a single access record.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface UsedRecordDetail {
    /**
     * Access status. 0 indicates stopped usage, 1 indicates foreground usage, and 2 indicates background usage.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * Lock screen status at the time of access.
     *
     * - 1: Indicates permission usage in a non-lock-screen scenario.
     * - 2: Indicates permission usage in a lock-screen scenario.
     *
     * Default value: 1.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lockScreenStatus?: int;

    /**
     * Access timestamp.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Number of accesses. In accessRecords, it indicates the number of successful accesses; in rejectRecords, it
     * indicates the number of failures or rejections.
     *
     * Default value: 0.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    count?: int;

    /**
     * Access duration.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    accessDuration: long;
    /**
     * Sensitive permission access method.
     *
     * Default value: NORMAL_TYPE.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    usedType?: PermissionUsedType;
  }

  /**
   * Enumerates the means for using a sensitive permission.
   *
   * | Name                   | Value| Description             |
   * | ----------------------- | -- | ---------------- |
   * | NORMAL_TYPE             | 0  | The sensitive permission is used after authorization through a dialog box or a system settings page.  |
   * | PICKER_TYPE             | 1  | Indicates that a sensitive permission is used through a PICKER service, but this method does not grant the permission. |
   * | SECURITY_COMPONENT_TYPE | 2  | Indicates that a sensitive permission is used through security component authorization. A security component is a system-provided authorization component; after the user taps it, the application can temporarily obtain the corresponding permission. |
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PermissionUsedType {
    /**
     * Sensitive resources are accessed with the declared permission or permission granted by the user.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL_TYPE = 0,

    /**
     * Sensitive resources are accessed through a picker.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PICKER_TYPE = 1,

    /**
     * Sensitive resources are accessed through a security component.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SECURITY_COMPONENT_TYPE = 2
  }

  /**
   * Represents detailed information about the use of a permission.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface PermissionUsedTypeInfo {
    /**
     * Token ID of the application that accesses the sensitive permission.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    tokenId: int;

    /**
     * Name of the sensitive permission accessed.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    permissionName: Permissions;

    /**
     * Usage type of the sensitive permission.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    usedType: PermissionUsedType;
  }

  /**
   * Represents the options for adding a permission usage record.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AddPermissionUsedRecordOptions {
    /**
     * Sensitive permission usage type.
     *
     * Default value: NORMAL_TYPE.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    usedType?: PermissionUsedType;
    /**
     * Extension identity, used to identify additional identity information of the caller. This field is passed in when
     * it is necessary to distinguish permission usage records from different call sources under the same application.
     * The length does not exceed 48 characters. Passing an excessively long value when calling
     * [addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord} will return error code 12100001.
     * The maximum length is 48. Default value: empty string.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }

  /**
   * Represents the optional parameter set for using a permission.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PermissionUsingOptions {
    /**
     * Extension identity, used to identify additional identity information of the caller. This field is passed in when
     * it is necessary to distinguish permission usage records from different call sources within the same application.
     * The length must not exceed 48 characters. Passing an excessively long value when calling
     * [startUsingPermission]{@link privacyManager.startUsingPermission} or
     * [stopUsingPermission]{@link privacyManager.stopUsingPermission} will return error code 12100001.
     *
     * Default value: empty string.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enhancedIdentity?: string;
  }
  /**
   * A system application can call this API to obtain the current user's permission usage record toggle status, for
   * example, to display the current toggle setting status on the permission management interface. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the switch
   *     status value of the current user is on, and **false** indicates that the switch status value of
   *     the current user is off.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getPermissionUsedRecordToggleStatus(): Promise<boolean>;

  /**
   * A system application calls this API to mark that the specified permission is no longer in use. After a successful
   * call, the privacy service notifies all subscribers of this permission usage status change event of this status
   * change. It is suitable for notifying the system that permission usage has ended when an application completes a
   * sensitive operation or exits the foreground. This API uses a promise to return the result.
   *
   * The pid must be the same as the pid passed into [startUsingPermission]{@link privacyManager.startUsingPermission}.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
   *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
   *     of BundleInfo. Passing an invalid value returns error code 12100001.
   *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
   *     <br>For BundleInfo acquisition, please refer to:
   *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
   * @param { Permissions } permissionName - Name of the permission to stop using. Passing an invalid value returns
   *     error code 12100001.
   *     <br>Value constraint: The permission name length cannot exceed 256 characters.
   * @param { int } [pid] - Process PID of the caller. Must be the same as the pid passed to
   *     [startUsingPermission]{@link privacyManager.startUsingPermission}. A mismatch may cause the API call to fail
   *     (error code 12100004).
   *     <br>The value should be an integer. Default value: -1, indicating no response based on process lifecycle.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
   *     characters, or the type of the specified tokenID is not of the application type.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100004 - The API is not used in pair with 'startUsingPermission'.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100008 - Out of memory.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function stopUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int
  ): Promise<void>;

  /**
   * Sets whether to record the permission usage of this user. Sets the permission usage record switch for this user.
   * This API uses a promise to return the result.
   *
   * When **status** is **true**, the [addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord} API can
   * add usage records normally; when **status** is **false**, the
   * [addPermissionUsedRecord]{@link privacyManager.addPermissionUsedRecord} API does not generate permission usage
   * records, and deletes the current user's historical records.
   *
   * @permission ohos.permission.PERMISSION_RECORD_TOGGLE
   * @param { boolean } status - Setting of the permission usage record switch. The value **true** means the switch is
   *     toggled on; the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_RECORD_TOGGLE".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system app.
   * @throws { BusinessError } 12100007 - Service exception.
   * @throws { BusinessError } 12100009 - Common inner error. Possible causes: 1. Database error. 2. Failed to query
   *     all applications under the user.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>;
  /**
   * Queries whether a specified sensitive permission is currently being used. It can be used in scenarios such as
   * displaying the real-time permission usage status on the permission management interface. The judgment is based on
   * whether there is currently an active call that has been marked as started by
   * [startUsingPermission]{@link privacyManager.startUsingPermission} and has not yet been marked as stopped by
   * [stopUsingPermission]{@link privacyManager.stopUsingPermission}.
   *
   * @permission ohos.permission.PERMISSION_USED_STATS
   * @param { Permissions } permissionName - Name of the permission to query. The permission name cannot be empty and
   *     its length cannot exceed 256 characters. An invalid value returns error code 12100001.
   * @returns { boolean } Whether the specified sensitive permission is in use. true: The specified sensitive permission
   *     is in use. false: The specified sensitive permission is not in use.
   * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
   *     "ohos.permission.PERMISSION_USED_STATS".
   * @throws { BusinessError } 202 - Not system app. Interface caller is not a system application.
   * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName is empty or exceeds 256 characters.
   * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
   * @throws { BusinessError } 12100007 - Service exception.
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function checkPermissionInUse(permissionName: Permissions): boolean;
}
export { Permissions };

export default privacyManager;
