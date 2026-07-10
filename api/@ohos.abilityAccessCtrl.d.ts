/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * Program access control provides permission verification and management capabilities for apps, supporting permission
 * status checks before accessing protected resources, runtime authorization requests, settings page authorization
 * guidance, and permission status change monitoring. Permissions are divided into three categories: system_grant
 * (automatically granted by the system), user_grant (requires manual user authorization), and
 * manual_settings (manual setting authorization). Apps must declare the required permissions in the configuration file.
 * For details about the permission management mechanism, see
 * [Application Permission Management Overview](docroot://security/AccessToken/app-permission-mgmt-overview.md).
 *
 * This module is mainly used in the following scenarios:
 *
 * - Before executing a service, verify whether the current app has the permissions required to access protected
 * resources.
 * - When a permission is not granted, bring up the runtime permission dialog box or the permission settings page to
 * request user authorization.
 * - Subscribe to permission status change events of the current app, and adjust the service process in a timely manner
 * after the permission status changes.
 *
 * ###### Core Enum Types
 *
 * - **[GrantStatus]{@link abilityAccessCtrl.GrantStatus}:** Enum for permission authorization status, used to indicate
 * the authorization status of the current permission.
 * - **[SwitchType]{@link abilityAccessCtrl.SwitchType}:** Enum for global switch types, used to indicate the type of
 * system global switch to request.
 * - **[PermissionStateChangeType]{@link abilityAccessCtrl.PermissionStateChangeType}:** Enum for permission state
 * change types, used to indicate changes such as authorization and deauthorization.
 * - **[PermissionStatus]{@link abilityAccessCtrl.PermissionStatus}:** Enum for permission status, used to indicate the
 * current permission status.
 * - **[SelectedResult]{@link abilityAccessCtrl.SelectedResult}:** Enum for the selection result on the settings page
 * authorization, used to indicate the user's selection result in the permission settings dialog box.
 *
 * ###### Core Interface Types
 *
 * - **[PermissionStateChangeInfo]{@link abilityAccessCtrl.PermissionStateChangeInfo}:** Permission state change event
 * object, used to return the change type, app identity, and permission name.
 * - **[PermissionRequestResult]{@link PermissionRequestResult}:** Permission request result object, used to return the
 * list of requested permission names, authorization results, and dialog box display results.
 * - **[Context]{@link Context}:** Context object, used to initiate a permission request or open the permission
 * settings dialog box.
 *
 * ###### Core Class
 *
 * - **[AtManager]{@link abilityAccessCtrl.AtManager}:** Program access control management class, providing
 * capabilities such as permission verification, permission dialog box request, settings page authorization guidance,
 * and permission status monitoring.
 *
 * ![image_abilityAccessCtrl](docroot://reference/apis-ability-kit/figures/accessAccessCtrl.png)
 *
 * @file Application Access Control
 * @kit AbilityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
import type _Context from './application/Context';
import type _PermissionRequestResult from './security/PermissionRequestResult';

/**
 *
 * @syscap SystemCapability.Security.AccessToken
 * @FaAndStageModel
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace abilityAccessCtrl {
  /**
   * Creates a program access control management instance for scenarios such as permission verification, runtime
   * permission request, settings page authorization guidance, and permission status change monitoring. After the call
   * is successful, an AtManager instance is returned, which can be used for subsequent permission management
   * operations.
   *
   * @returns { AtManager } **AtManager** instance obtained.
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  function createAtManager(): AtManager;
  /**
   * Program access control management class, providing capabilities such as permission verification, runtime
   * permission dialog box request, settings page authorization guidance, global switch request, and permission
   * status monitoring. Obtain an instance through [createAtManager]{@link abilityAccessCtrl.createAtManager}.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AtManager {
    /**
     * Verifies whether an app has been granted the specified permission. After the call is successful, the
     * authorization status of the current permission is returned. The developer can decide accordingly whether to
     * directly execute subsequent services, continue to initiate a permission request, or guide the user to go to
     * system settings to modify the authorization status. This API uses a promise to return the result.
     *
     * Applicable to scenarios where a pre-permission check is performed before an app accesses protected resources.
     *
     * > **NOTE**
     * > You are advised to use [checkAccessToken]{@link abilityAccessCtrl.AtManager.checkAccessToken}.
     *
     * @param { int } tokenID - Identity identifier of the target app to be verified. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>
     *     For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     *     <br>If verifying the current app, it can also be obtained through
     *     [bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}.
     * @param { Permissions } permissionName - Name of the permission to be verified. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { Promise<GrantStatus> } Promise used to return the authorization status result.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    verifyAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;
    /**
     * Verifies whether an app has been granted the specified permission. After the call is successful, the
     * authorization status of the current permission is returned, and the developer can decide on subsequent
     * operations accordingly. This API uses a promise to return the result.
     *
     * > **NOTE**
     * > This API is supported since API version 8 and deprecated since API version 9. It is recommended to use
     * > [checkAccessToken]{@link abilityAccessCtrl.AtManager.checkAccessToken} instead.
     *
     * @param { number } tokenID - Identity identifier of the target app to be verified. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>
     *     For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     *     <br>If verifying the current app, it can also be obtained through
     *     [bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}.
     * @param { string } permissionName - Name of the permission to be verified. Passing an invalid value returns error
     *     code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { Promise<GrantStatus> } Promise used to return the authorization status result.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.abilityAccessCtrl.AtManager#checkAccessToken
     */
    verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>;
    /**
     * Verifies whether an app has been granted the specified permission, and synchronously returns the authorization
     * status of the permission. The developer can decide accordingly whether to directly execute subsequent service
     * processes, continue to initiate a permission request, or guide the user to go to system settings to modify the
     * authorization status.
     *
     * Applicable to scenarios where a pre-permission check is performed before an app accesses protected resources
     * such as the camera, microphone, or location.
     *
     * It is recommended to use [checkAccessTokenSync]{@link abilityAccessCtrl.AtManager.checkAccessTokenSync} instead.
     *
     * @param { int } tokenID - Identity identifier of the target app to be verified. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>
     *     For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     *     <br>If verifying the current app, it can also be obtained through
     *     [bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}.
     * @param { Permissions } permissionName - Name of the permission to be verified. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { GrantStatus } Permission grant state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    verifyAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;
    /**
     * Verifies whether an app has been granted the specified permission. After the call is successful, the
     * authorization status of the current permission is returned. The developer can decide accordingly whether to
     * directly execute subsequent services, continue to initiate a permission request, or guide the user to go to
     * system settings to modify the authorization status. This API uses a promise to return the result.
     *
     * Applicable to scenarios where a pre-permission check is performed before an app accesses protected resources
     * such as the camera, microphone, or location.
     *
     * @param { int } tokenID - Identity identifier of the target app to be verified. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>
     *     For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     *     <br>If verifying the current app, it can also be obtained through
     *     [bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}.
     * @param { Permissions } permissionName - Name of the permission to be verified. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { Promise<GrantStatus> } Promise used to return the authorization status result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    checkAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;
    /**
     * Verifies whether an app has been granted the specified permission, and synchronously returns the authorization
     * status of the permission. The developer can decide accordingly whether to directly execute subsequent service
     * processes, continue to initiate a permission request, or guide the user to go to the settings page to modify the
     * authorization status.
     *
     * Compared with [checkAccessToken]{@link abilityAccessCtrl.AtManager.checkAccessToken}, this API returns the
     * authorization status synchronously, making it suitable for permission verification scenarios that do not require
     * asynchronous processing.
     *
     * Applicable to scenarios where a pre-permission check is performed before an app accesses protected resources
     * such as the camera, microphone, or location.
     *
     * @param { int } tokenID - Identity identifier of the target app to be verified. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>
     *     For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     *     <br>If verifying the current app, it can also be obtained through
     *     [bundleManager.getBundleInfoForSelfSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelfSync}.
     * @param { Permissions } permissionName - Name of the permission to be verified. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { GrantStatus } Permission grant state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    checkAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;
    /**
     * Used by <!--RP1-->[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}<!--RP1End--> to bring up a dialog box
     * to request [user authorization](docroot://security/AccessToken/request-user-authorization.md), and returns the
     * authorization result of the permissions requested this time. This API uses an asynchronous callback to return
     * the result.
     *
     * Applicable to scenarios where an app proactively applies for
     * [user_grant](docroot://security/AccessToken/app-permission-mgmt-overview.md#user_grant-user-authorization)
     * permissions from the user before accessing protected resources for the first time.
     *
     * If the user denies authorization, the authorization dialog box cannot be brought up again through this API.
     * The developer can guide the user to go to the system settings interface for manual authorization, or call
     * [requestPermissionOnSetting]{@link abilityAccessCtrl.AtManager.requestPermissionOnSetting} to bring up the
     * permission settings dialog box to guide the user to complete authorization.
     *
     * <!--RP3-->
     *
     * ![requestPermissionsFromUser](docroot://reference/apis-ability-kit/figures/requestPermissionsFromUser.png)
     *
     * <!--RP3End-->
     *
     * @param { Context } context - Context of the <!--RP1-->UIAbility<!--RP1End--> requesting the permission.
     *     <br>If the context of another app, an invalid page, or a non-stage model is passed in, the API may report an
     *     error or fail to display the dialog box.
     * @param { Array<Permissions> } permissionList - List of permission names. It is recommended to pass in only the
     *     sensitive permissions necessary for the current business scenario, avoiding requesting too many permissions at
     *     once.
     *     <br>The minimum length is 1. Value constraint: The permission name can contain a maximum of 256 characters.
     * @param { AsyncCallback<PermissionRequestResult> } requestCallback - Callback function. After the call is
     *     complete, error information is returned through **err**, and the permission request result object is
     *     returned through **data**. The developer can determine whether the user has authorized, whether a dialog box
     *     has been displayed, and the reason for failure based on the permission request result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - (Deprecated in 12) Invalid parameter. The context is invalid when it
     *     does not belong to the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation results.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>, requestCallback: AsyncCallback<PermissionRequestResult>) : void;
    /**
     * Used by <!--RP1-->[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}<!--RP1End--> to bring up a dialog box
     * to request [user authorization](docroot://security/AccessToken/request-user-authorization.md), and returns the
     * authorization result of the permissions requested this time. This API uses a promise to return the result.
     *
     * Applicable to scenarios where an app proactively applies for user_grant permissions from the user before
     * accessing protected resources for the first time.
     *
     * If the user denies authorization, the authorization dialog box cannot be brought up again through this API.
     * The developer can guide the user to go to the system settings interface for manual authorization, or call
     * [requestPermissionOnSetting]{@link abilityAccessCtrl.AtManager.requestPermissionOnSetting} to bring up the
     * permission settings dialog box to guide the user to complete authorization.
     *
     * @param { Context } context - Context of the <!--RP1-->UIAbility<!--RP1End--> requesting the permission. If the
     *     context of another app, an invalid page, or a non-stage model is passed in, the API may report an error or fail
     *     to display the dialog box.
     * @param { Array<Permissions> } permissionList - List of permission names. This array cannot be empty. It is
     *     recommended to pass in only the sensitive permissions necessary for the current business scenario and avoid
     *     requesting too many permissions at once.
     *     <br>The minimum length is 1. Value constraint: The length of a permission name cannot exceed 256 characters.
     * @returns { Promise<PermissionRequestResult> } Promise used to return the permission request result object, which
     *     contains information such as the permission array, the authorization result of each permission, whether to
     *     show a dialog box, and the failure reason.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - (Deprecated in 12) Invalid parameter. The context is invalid when it
     *     does not belong to the application itself.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window or
     *     obtaining the user operation result. [since 11]
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>) : Promise<PermissionRequestResult>;
    /**
     * Pops up a dialog based on the window ID to request user authorization. After the call is successful, the
     * permission request result object is returned. Developers can continue the business process after window-level
     * authorization based on the permission request result. This API uses a promise to return the result.
     *
     * This is applicable to scenarios where a system app needs to explicitly attach the permission request dialog to a
     * specified window.
     *
     * If the user denies authorization, the dialog cannot be pulled up again. Permission can be re-obtained in the
     * following ways: 1. Manually authorize in the system settings. 2. Call
     * [requestPermissionOnSetting]{@link abilityAccessCtrl.AtManager.requestPermissionOnSetting} to pull up the
     * permission settings dialog to guide the user to authorize.
     *
     * @param { Context } context - Context of the UIAbility or UIExtensionAbility requesting the permission. If the
     *     context of another app, an invalid page, or a non-stage model is passed in, the API may report an error or fail
     *     to display the dialog box.
     * @param { int } windowId - ID of the app window. It can be obtained through
     *     [window.findWindow]{@link @ohos.window:window.findWindow}(window name).
     *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}.id. This parameter must
     *     correspond to the current valid window. If a destroyed, invisible, or invalid window ID is passed in,
     *     12100001 will be returned.
     *     <br>The value should be an integer.
     * @param { Array<Permissions> } permissionList - List of permission names. It is recommended that you pass in only
     *     the sensitive permissions that are actually required in the current window scenario.
     *     <br>The minimum length is 1. Value constraint: The length of a permission  name in array cannot exceed 256
     *     characters.
     * @returns { Promise<PermissionRequestResult> } Promise used to return the result of this permission request,
     *     including the permission array, grant result, whether to show a dialog box, and failure reason.
     * @throws { BusinessError } 12100001 - Invalid parameter. windowId is invalid.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the popup window or
     *     obtaining the user operation result.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestPermissionsFromUserWithWindowId(
        context: Context,
        windowId: int,
        permissionList: Array<Permissions>) : Promise<PermissionRequestResult>;
    /**
     * Grants a user_grant permission to an app. After the call is successful, the app obtains the user_grant
     * permission and can access the corresponding protected resources. This API uses a promise to return the result.
     *
     * This API only supports granting permissions of the user_grant type. If you need to grant permissions of the
     * user_grant or manual_settings type, you are advised to use
     * [grantPermission]{@link abilityAccessCtrl.AtManager.grantPermission}.
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to grant. Passing an invalid value returns error
     *     code 12100001.
     *     <br>Value constraint: The permission name cannot exceed 256 characters.
     * @param { int } permissionFlags - Authorization options.
     *     <br>The value should be an integer.
     *     <br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next
     *     time to request user authorization.
     *     <br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.
     *     The user needs to grant the permission in the permission management page of system settings.
     *     <br>- 64: If the user selects to allow only this time, the permission is granted only for this session. The
     *     authorization is revoked when the app switches to the background or exits.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be granted with
     *     the specified permission.
     *     Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    grantUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;
    /**
     * Grants a user_grant permission to an app. This API uses an asynchronous callback to return the result. After the
     * call is successful, the app obtains the user_grant permission and can access the corresponding protected
     * resources.
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to grant. The permission name cannot exceed 256
     *     characters. Passing an invalid value returns error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @param { int } permissionFlags - Authorization options.
     *     <br>The value should be an integer.
     *     <br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next
     *     time to request user authorization.
     *     <br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.
     *     The user needs to grant the permission in system settings.
     *     <br>- 64: If the user selects to allow only this time, the permission is granted only for this session. The
     *     authorization is revoked when the app switches to the background or exits.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the permission grant is
     *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file,
     *     or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be granted with
     *     the specified permission. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    grantUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void;
    /**
     * Revokes a user_grant permission from an app. After the call is successful, the app loses the user_grant
     * permission and cannot access the corresponding protected resources.
     * This API uses a promise to return the result.
     *
     * This API only supports revoking permissions of the user_grant type and does not support controlling whether to
     * terminate the app process. If you need to revoke permissions of the user_grant or manual_settings type, or need
     * to control whether to terminate the app process after revoking the permission, you are advised to use
     * [revokePermission]{@link abilityAccessCtrl.AtManager.revokePermission}.
     *
     * When the permission status changes from "authorized" to "unauthorized", the app process will be terminated.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to be revoked. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @param { int } permissionFlags - Authorization options.
     *     <br>The value should be an integer.
     *     <br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next
     *     time to request user authorization.
     *     <br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.
     *     The user needs to grant the permission in the permission management page of system settings.
     *     <br>- 64: If the user selects to allow only this time, the permission is granted only for this session.
     *     The authorization is revoked when the app switches to the background or exits.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be revoked with
     *     the specified permission. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    revokeUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;
    /**
     * Revokes a user_grant permission from an app. This API uses an asynchronous callback to return the result.
     * After the call is successful, the app loses the user_grant permission and cannot access the corresponding
     * protected resources.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to be revoked. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @param { int } permissionFlags - Authorization options.
     *     <br>The value should be an integer.
     *     <br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed the
     *     next time to request user authorization.
     *     <br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.
     *     The user needs to grant the permission in the permission management page of system settings.
     *     <br>- 64: If the user selects to allow only this time, the permission is granted only for this session.
     *     The permission is revoked after the app switches to the background or exits.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the permission revocation is
     *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName exceeds 256
     *     characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not a user_grant permission.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be revoked with
     *     the specified permission. Either the application is a sandbox or the tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    revokeUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void;
    /**
     * Obtains the flags of a specified permission for a specified app. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or
     *     ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to query. Passing an invalid value returns error
     *     code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { Promise<int> } Promise used to return the queried permission flag value. For details about the
     *     meaning of the flag value, see the description of the grantFlags field in
     *     [PermissionStatusInfo]{@link abilityAccessCtrl.PermissionStatusInfo}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256
     *     characters.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist or is not declared in the
     *     module.json file.
     * @throws { BusinessError } 12100006 - The operation is not allowed. Either the application is a sandbox or the
     *     tokenID is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 8 dynamic
     * @since 23 static
     */
    getPermissionFlags(tokenID: int, permissionName: Permissions): Promise<int>;
    /**
     * Sets the dialog toggle status for a specified permission of the current user. After the call is successful, the
     * dialog toggle status of the permission will be set to the specified value. When the status is CLOSED, no
     * permission dialog will pop up when the app requests the permission. When the status is OPEN, the permission
     * dialog will pop up normally when the app requests the permission. This API uses a promise to return the result.
     *
     * @permission ohos.permission.DISABLE_PERMISSION_DIALOG
     * @param { Permissions } permissionName - Name of the permission for which the dialog box switch status is to be
     *     set. Passing an invalid value returns error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @param { PermissionRequestToggleStatus } status - Toggle state to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, the specified
     *     permission is not a user_grant permission, or the status value is invalid.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common inner error. A database error occurs.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus): Promise<void>;
    /**
     * Obtains the toggle state of a permission. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Permissions } permissionName - Name of the permission whose pop-up switch status is to be queried.
     *     Passing an invalid value returns error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { Promise<PermissionRequestToggleStatus> } Promise used to return the toggle status of the dialog box
     *     for the specified permission.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission specified below.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName exceeds 256 characters, or the
     *     specified permission is not a user_grant permission.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    getPermissionRequestToggleStatus(permissionName: Permissions): Promise<PermissionRequestToggleStatus>;
    /**
     * Obtains the data version number of the current permission management. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<int> } Promise used to return the version number queried.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    getVersion(): Promise<int>;
    /**
     * Obtains the status of the specified permissions. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Array<Permissions> } permissionList - List of permission names for which the permission status is to be
     *     obtained. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 1024 and cannot be empty. Value constraint: The permission name length cannot
     *     exceed 256 characters.
     * @returns { Promise<Array<PermissionStatus>> } Promise used to return the list of queried permission statuses.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0 or the permissionList is empty or
     *     exceeds the size limit.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    getPermissionsStatus(tokenID: int, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>;
    /**
     * Subscribes to changes in the state of specified permissions for the given applications. This API uses an
     * asynchronous callback to return the result.
     *
     * Multiple callbacks can be registered for the specified **tokenIDList** and **permissionList**.
     *
     * If a new subscription overlaps with an existing subscription in terms of the tokenID list and permission list,
     * the same callback cannot be used for subscription.
     *
     * This API is usually used together with [off]{@link abilityAccessCtrl.AtManager.off}.
     * When listening is no longer needed, off should be called to unsubscribe.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - Event type. The value is **'permissionStateChange'**, which indicates
     *     the permission state changes.
     * @param { Array<int> } tokenIDList - List of token IDs to subscribe to. If left empty, it subscribes to permission
     *     status changes of all apps. The app identity can be obtained through the [accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of BundleInfo. Passing an
     *     invalid value returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each token ID in the list must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Array<Permissions> } permissionList - List of permission names to subscribe to. Passing an invalid value
     *     returns error code 12100001.
     *     <br>The maximum length is 1024 and cannot be empty. Value constraint: Each permission name in the list must
     *     be a valid permission name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback used to return the result. Callback for
     *     subscribing to the status change events of the specified tokenID and permission name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The tokenIDList or permissionList
     *     exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     */
    on(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Subscribes to changes in the state of specified permissions for the given applications. This API uses an
     * asynchronous callback to return the result.
     *
     * Multiple callbacks can be registered for the specified **tokenIDList** and **permissionList**.
     *
     * > **NOTE**
     * > If a new subscription overlaps with an existing subscription in terms of the tokenID list and permission list,
     * > the same callback cannot be used for subscription.
     * > This API is usually used together with
     * > [offPermissionStateChange]{@link abilityAccessCtrl.AtManager.offPermissionStateChange}.
     * > When listening is no longer needed, offPermissionStateChange should be called to unsubscribe.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - List of token IDs to subscribe to. If left empty, it subscribes to permission
     *     status changes of all apps. The app identity can be obtained through the [accessTokenId]{@link
     *     ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of BundleInfo. Passing an
     *     invalid value returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each token ID in the list must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Array<Permissions> } permissionList - List of permission names to subscribe to. Passing an invalid value
     *     returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission
     *     name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback used to return the result. Callback for
     *     subscribing to the status change events of the specified tokenID and permission name.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The tokenIDList or permissionList
     *     exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100008 - Out of memory.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Subscribes to permission authorization status change events for a specified permission list of this app,
     * using an asynchronous callback. It can be used in scenarios such as updating the UI or service logic
     * in real time based on permission status, and monitoring user authorization behavior.
     * When monitoring is no longer needed, call [off]{@link abilityAccessCtrl.AtManager.off} to unsubscribe.
     *
     * - When this subscription API is called for multiple times, if the subscribed permission lists are the same but
     * the callbacks are different, the subscription is successful.
     * - When this subscription API is called for multiple times, if the subscribed permission lists contain the same
     * subset and the callbacks are the same, the subscription fails.
     *
     * There are two possible scenarios when the permission status changes from "authorized" to "unauthorized":
     *
     * - User actively revokes: The system will terminate the corresponding app process.
     * - System actively reclaims: The app process will not be terminated. A typical scenario is the one-time
     * authorization of a security component, which is automatically reclaimed by the system after the authorization
     * period ends.
     *
     * This API is usually used in conjunction with [off]{@link abilityAccessCtrl.AtManager.off}.
     * When monitoring is no longer needed, call off to unsubscribe.
     *
     * @param { 'selfPermissionStateChange' } type - Event type. The value is **'selfPermissionStateChange'**, which
     *     indicates the changes in the permission states specific to this application alone.
     * @param { Array<Permissions> } permissionList - List of permission names to subscribe to. Passing an invalid value
     *     returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission
     *     name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback used to return the result. Callback for
     *     subscribing to status change events of the specified permission name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
     *     the size limit; 2. The permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     */
    on(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Subscribes to permission authorization status change events for a specified permission list of this app, using an
     * asynchronous callback. It can be used in scenarios such as updating the UI or service logic in real time based on
     * permission status, and monitoring user authorization behavior. When monitoring is no longer needed, call
     * [offSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.offSelfPermissionStateChange} to unsubscribe.
     *
     * - When this subscription API is called for multiple times, if the subscribed permission lists are the same but
     * the callbacks are different, the subscription is successful.
     * - When this subscription API is called for multiple times, if the subscribed permission lists contain the same
     * subset and the callbacks are the same, the subscription fails.
     *
     * There are two possible scenarios when the permission status changes from "authorized" to "unauthorized":
     *
     * - User actively revokes: The system will terminate the corresponding app process.
     * - System actively reclaims: The app process will not be terminated. A typical scenario is the one-time
     * authorization of a security component, which is automatically reclaimed by the system after the authorization
     * period ends.
     *
     * This API is usually used in conjunction with
     * [offSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.offSelfPermissionStateChange}.
     * When monitoring is no longer needed, call offSelfPermissionStateChange to unsubscribe.
     *
     * @param { Array<Permissions> } permissionList - List of permission names to subscribe to. Passing an invalid value
     *     returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission
     *     name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } callback - Callback used to return the result. Callback for
     *     subscribing to status change events of the specified permission name.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
     *     the size limit; 2. The permissionNames in the list are all invalid.
     * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
     * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 23 static
     */
    onSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Unsubscribes from changes in the state of the specified permissions for the token ID list and permission list.
     * This API uses an asynchronous callback to return the result.
     *
     * When unsubscribing, if no callback is passed in, all listening callbacks that completely match the tokenIDList
     * and permissionList will be unsubscribed in batches.
     *
     * This API is usually used together with [on]{@link abilityAccessCtrl.AtManager.on}
     * to cancel the listening relationship created by on.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { 'permissionStateChange' } type - Event type. The value is **'permissionStateChange'**, which indicates
     *     the permission state changes.
     * @param { Array<int> } tokenIDList - List of token IDs to unsubscribe from. If this parameter is left empty, it
     *     indicates unsubscribing from permission state changes of all apps. This parameter must be consistent with the
     *     input of [on]{@link abilityAccessCtrl.AtManager.on}. The app identity can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each token ID in the list must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to:
     *     [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Array<Permissions> } permissionList - List of permission names to unsubscribe from. If this parameter is
     *     left empty, it indicates unsubscribing from all permission state changes. This parameter must be consistent with
     *     the input of [on]{@link abilityAccessCtrl.AtManager.on}. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission
     *     name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback used to return the object for unsubscribing
     *     from state change events of the specified tokenID and permission name. This callback must be consistent with
     *     the callback registered in [on]{@link abilityAccessCtrl.AtManager.on}.
     *     If this parameter is not passed, all listener callbacks that exactly match tokenIDList and permissionList
     *     will be canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList or permissionList is not in the
     *     listening list.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 9 dynamic
     */
    off(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Unsubscribes from changes in the state of the specified permissions for the token ID list and permission list.
     * This API uses an asynchronous callback to return the result.
     *
     * When unsubscribing, if no callback is passed in, all listening callbacks that completely match the tokenIDList
     * and permissionList will be unsubscribed in batches.
     *
     * > **NOTE**
     * > This API is usually used together with
     * > [onPermissionStateChange]{@link abilityAccessCtrl.AtManager.onPermissionStateChange}
     * > to cancel the listening relationship created by onPermissionStateChange.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - List of token IDs to unsubscribe from. If this parameter is left empty, it
     *     indicates unsubscribing from permission state changes of all apps. This parameter must be consistent with the
     *     input of [onPermissionStateChange]{@link abilityAccessCtrl.AtManager.onPermissionStateChange}. The app
     *     identity can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each token ID in the list must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Array<Permissions> } permissionList - List of permission names to unsubscribe from. If this parameter is
     *     left empty, it indicates unsubscribing from all permission state changes. This parameter must be consistent
     *     with the input of [onPermissionStateChange]{@link abilityAccessCtrl.AtManager.onPermissionStateChange}.
     *     Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid
     *     permission name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback used to return the object for unsubscribing
     *     from state change events of the specified tokenID and permission name. This callback must be consistent with
     *     the callback registered in
     *     [onPermissionStateChange]{@link abilityAccessCtrl.AtManager.onPermissionStateChange}.
     *     If this parameter is not passed, all listener callbacks that exactly match tokenIDList and permissionList
     *     will be canceled.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList or permissionList is
     *     not in the listening list.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Unsubscribes from permission status change events for the specified permission list of itself. After the
     * unsubscription is successful, status change notifications for the specified permission list will no longer be
     * received.
     *
     * This API can be called to unsubscribe in scenarios such as when there is no need to continue monitoring
     * permission changes, when the app exits, or when switching pages.
     *
     * When the callback parameter is not passed in, all callback functions associated with the permissionList will be
     * deleted in batch.
     *
     * This API is usually used in conjunction with [on]{@link abilityAccessCtrl.AtManager.on}
     * to cancel the monitoring relationship created through on.
     *
     * @param { 'selfPermissionStateChange' } type - Type of the unsubscription event, which is fixed as
     *     'selfPermissionStateChange', indicating a permission status change event.
     * @param { Array<Permissions> } permissionList - List of permission names to unsubscribe from. If empty, it
     *     indicates unsubscribing from all permission status changes, and must match the permission list used during
     *     [on]{@link abilityAccessCtrl.AtManager.on} subscription (order insensitive).
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission
     *     name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback function. Callback for unsubscribing from
     *     the status change event of the specified permission names. If this parameter is not passed, all callback
     *     functions associated with permissionList will be deleted in batch.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     */
    off(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Unsubscribes from permission status change events for the specified permission list of itself. After the
     * unsubscription is successful, status change notifications for the specified permission list will no longer be
     * received.
     *
     * This API can be called to unsubscribe in scenarios such as when there is no need to continue monitoring
     * permission changes, when the app exits, or when switching pages.
     *
     * When the callback parameter is not passed in, all callback functions associated with the permissionList will be
     * deleted in batch.
     *
     * This API is usually used in conjunction with
     * [onSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.onSelfPermissionStateChange}
     * to cancel the monitoring relationship created through on.
     *
     * @param { Array<Permissions> } permissionList - List of permission names to unsubscribe from. If empty, it
     *     indicates unsubscribing from all permission status changes, and must match the permission list used during
     *     [onSelfPermissionStateChange]{@link abilityAccessCtrl.AtManager.onSelfPermissionStateChange}
     *     subscription (order insensitive).
     *     <br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission
     *     name, and its length cannot exceed 256 characters.
     * @param { Callback<PermissionStateChangeInfo> } [callback] - Callback function. Callback for unsubscribing from
     *     the status change event of the specified permission names. If this parameter is not passed, all callback
     *     functions associated with permissionList will be deleted in batch.
     * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 23 static
     */
    offSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void;
    /**
     * Used by [UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}/
     * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} to bring up the permission
     * settings dialog box for a second time, and returns an array of authorization statuses.
     * This API uses a promise to return the result.
     *
     * Applicable to scenarios where the user has already denied the permission grant in the first dialog box and needs
     * to continue applying for the permission through the settings page.
     *
     * Before calling this API, the app needs to call
     * [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser} first.
     * If the user has already authorized in the first dialog box, calling this API will not bring up the
     * authorization dialog box.
     *
     * <!--RP4-->
     *
     * ![requestPermissionOnSetting](docroot://reference/apis-ability-kit/figures/requestPermissionOnSetting.png)
     *
     * <!--RP4End-->
     *
     * @param { Context } context - Context of the UIAbility or UIExtensionAbility requesting the permission. If the
     *     context of another app, an invalid page, or a non-stage model is passed in, the API may report an error or
     *     fail to display the pop-up window.
     * @param { Array<Permissions> } permissionList - List of permission names. This array cannot be empty. Only
     *     user_grant permissions that have been declared and for which the user has revoked authorization can be
     *     passed in, and the permissions passed in must belong to the same
     *     [permission group](docroot://security/AccessToken/app-permission-group-list.md).
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { Promise<Array<GrantStatus>> } Promise used to return an array of authorization statuses. Each element
     *     in the array corresponds to the authorization result of the respective permission in permissionList.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself; 2. The permission list contains the permission
     *     that is not declared in the module.json file; 3. The permission list is invalid because the permissions in it
     *     do not belong to the same permission group; 4. The permission list contains one or more system_grant
     *     permissions.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window or
     *     obtaining the user operation result.
     * @throws { BusinessError } 12100010 - The request already exists. [since 12 - 20]
     * @throws { BusinessError } 12100011 - All permissions in the permission list have been granted.
     * @throws { BusinessError } 12100012 - The permission list contains the permission that has not been
     *     revoked by the user.
     * @throws { BusinessError } 12100014 - Unexpected permission. You cannot request this type of permission
     *     from users via a pop-up window. [since 21]
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestPermissionOnSetting(context: Context, permissionList: Array<Permissions>): Promise<Array<GrantStatus>>;
    /**
     * Used by [UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}/
     * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} to bring up the permission
     * settings page. After the call is successful, the permission settings page will be opened. After the user operates
     * on the page, the user's selection result on the settings page will be returned. This API uses a promise to return
     * the result.
     *
     * Applicable to scenarios where
     * [manual_settings](docroot://security/AccessToken/app-permission-mgmt-overview.md#manual_settings-manual-authorization)
     * type permissions cannot be applied for through the normal authorization dialog box and the user must be
     * guided to enter system settings to complete authorization. manual_settings type permissions are permissions that
     * can only be manually enabled by the user in system settings and cannot be directly applied for through the normal
     * authorization dialog box.
     *
     * @param { Context } context - Context of the UIAbility or UIExtensionAbility requesting the permission. If the
     *     context of another app, an invalid page, or a non-stage model is passed in, the API may report an error or
     *     fail to open the settings page.
     * @param { Permissions } permission - Name of the permission for which the settings page needs to be opened. If an
     *     invalid permission or a permission not declared in module.json is passed in, error code 12100001 is returned.
     *     Only permissions of the
     *     [manual_settings](docroot://security/AccessToken/app-permission-mgmt-overview.md#manual_settings-manual-authorization)
     *     type are supported. If a permission of another type is passed in, error code 12100014 is returned.
     *     <br>Value constraint: The permission name cannot exceed 256 characters.
     * @returns { Promise<SelectedResult> } Promise used to return the user's selection result on the settings page.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid
     *     because it does not belong to the application itself; 2. The permission is invalid or not
     *     declared in the module.json file.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window or
     *     obtaining the user operation result.
     * @throws { BusinessError } 12100014 - Unexpected permission. The permission is not a manual_settings
     *     permission.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    openPermissionOnSetting(context: Context, permission: Permissions): Promise<SelectedResult>;
    /**
     * Used by UIAbility/UIExtensionAbility to bring up the global switch settings dialog box. After the call is
     * successful, if the global switch is off, the global switch settings interface will pop up for the user to
     * operate. If the global switch is already on, the dialog box will not be brought up and **true** will be returned.
     * This API uses a promise to return the result.
     *
     * Applicable to scenarios that depend on system-level global switches (such as camera, microphone, and location)
     * being turned on.
     *
     * When an app needs to use functions such as the camera, microphone, or location that require global switch
     * control, if the corresponding global switch is turned off, the app can bring up this dialog box to request the
     * user to turn on the corresponding function. If the current global switch status is on, the dialog box will not
     * be brought up.
     *
     * <!--RP5-->
     *
     * ![requestGlobalSwitch](docroot://reference/apis-ability-kit/figures/requestGlobalSwitch.png)
     *
     * <!--RP5End-->
     *
     * @param { Context } context - Context of the UIAbility or UIExtensionAbility that requests the global switch. If
     *     the context of another app, an invalid page, or a non-stage model is passed in, the API may report an error
     *     or fail to display the dialog box.
     * @param { SwitchType } type - Specifies the type of global switch to request to enable.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates the current global
     *     switch is enabled, and **false** indicates the current global switch is still disabled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid because
     *     it does not belong to the application itself; 2. The type of global switch is not support.
     * @throws { BusinessError } 12100009 - Common inner error. An error occurs when creating the pop-up window
     *     or obtaining user operation result.
     * @throws { BusinessError } 12100013 - The specific global switch is already open.
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestGlobalSwitch(context: Context, type: SwitchType): Promise<boolean>;
    /**
     * Starts the permission settings page for an application. This API uses a promise to return the result.
     *
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    requestPermissionOnApplicationSetting(tokenID: int): Promise<void>;
    /**
     * Queries the permission status of the current app and returns the result synchronously. After the call is
     * successful, the status of the current permission is returned. Unlike
     * [checkAccessToken]{@link abilityAccessCtrl.AtManager.checkAccessToken}, this API does not require passing in the
     * app identity and is only used to query the permission status of the current app itself.
     *
     * Applicable to scenarios such as before determining whether to request a permission, confirming the authorization
     * result after a permission request, or re-querying after monitoring a permission status change.
     *
     * @param { Permissions } permissionName - Name of the permission whose status is to be queried. Passing an invalid
     *     value returns error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @returns { PermissionStatus } Permission status.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName is empty or exceeds 256 characters.
     * @throws { BusinessError } 12100007 - Service exception.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getSelfPermissionStatus(permissionName: Permissions): PermissionStatus;
    /**
     * Grants an app permission. After the call is successful, the specified app obtains the permission and can access
     * the corresponding protected resources. Unlike
     * [grantUserGrantedPermission]{@link abilityAccessCtrl.AtManager.grantUserGrantedPermission},
     * which only supports permissions of the user_grant type, this API supports granting permissions of both the
     * user_grant and manual_settings types. This API uses a promise to return the result.
     *
     * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to grant. The permission name cannot exceed 256
     *     characters. If the limit is exceeded, error code 12100001 is returned.
     * @param { int } permissionFlags - Authorization options.
     *     <br>The value should be an integer.
     *     <br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next
     *     time to request user authorization.
     *     <br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.
     *     The user needs to grant the permission in the permission management page of system settings.
     *     <br>- 64: If the user selects to allow only this time, the permission is granted only for this time. The
     *     authorization is revoked when the app switches to the background or exits.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GRANT_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, the permissionName
     *     exceeds 256 characters or is not declared in the module.json file, or the flags value is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The application specified by the tokenID is not allowed to be
     *     granted with the specified permission. Either the application is a sandbox or the tokenID is from
     *     a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 21 dynamic
     * @since 23 static
     */
    grantPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>;
    /**
     * Revokes an app permission. After the call is successful, the app loses the permission and cannot access the
     * corresponding protected resources. Whether to terminate the app process is determined by the value of the
     * killProcess parameter. This API uses a promise to return the result.
     *
     * When the killProcess parameter is true and the permission status changes from "authorized" to "unauthorized",
     * the app process will be terminated.
     *
     * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
     * @param { int } tokenID - Identity identifier of the target application. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { Permissions } permissionName - Name of the permission to be revoked. Passing an invalid value returns
     *     error code 12100001.
     *     <br>Value constraint: The permission name length cannot exceed 256 characters.
     * @param { int } permissionFlags - Authorization options.
     *     <br>The value should be an integer.
     *     <br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next
     *     time to request user authorization.
     *     <br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.
     *     The user needs to grant the permission in the permission management of system settings.
     *     <br>- 64: If the user selects to allow only this time, the permission is granted only for this session. The
     *     authorization is revoked when the app switches to the background or exits.
     * @param { boolean } [killProcess] - Whether to terminate the app process.
     *     <br>- **true**: Terminate the app process.
     *     <br>- **false**: Do not terminate the app process.
     *     <br>- Default value: **true**. [since 26.0.0]
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied. The interface invoker does not have permission
     *     "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not a system application. The interface invoker is not a system
     *     application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The token ID is 0, the permission name
     *     exceeds 256 characters or is not declared in the module.json file,
     *     or the value of flags is invalid.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100006 - The specified permission is not allowed to be revoked
     *     from the application specified by the tokenID. Either the application is a sandbox or the tokenID
     *     is from a remote device.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100014 - Unexpected permission. The specified permission is not a
     *     user_grant or manual_settings permission.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 21 dynamic
     * @since 23 static
     */
    revokePermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      killProcess?: boolean): Promise<void>;
    /**
     * Queries all apps that have requested the specified permissions and their permission statuses based on the
     * permission list. This API uses a promise to return the result. When the size of the queried data result exceeds
     * 50000 entries, the API directly returns error code 12100015.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<Permissions> } permissionList - List of permission names to query. Passing an invalid value
     *     returns error code 12100001.
     *     <br>The maximum length is 1024 and cannot be empty. Value constraint: The permission name length cannot
     *     exceed 256 characters.
     * @returns { Promise<Array<PermissionStatusInfo>> } Promise used to return the list of queried permission status
     *     information.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The permissionList is empty or exceeds the size
     *     limit.
     * @throws { BusinessError } 12100003 - The specified permission does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100015 - The queried data exceeds the upper limit.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    queryStatusByPermission(
      permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>;
    /**
     * Queries all permission statuses of an app based on its tokenID list. This API uses a promise to return the
     * result. When the size of the queried data result exceeds 50000 entries, the API directly returns error
     * code 12100015.
     *
     * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS
     * @param { Array<int> } tokenIDList - List of app token IDs to query. The app identity can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     *     BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 1024 and cannot be empty. Value constraint: Each token ID in the list must be an
     *     integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @returns { Promise<Array<PermissionStatusInfo>> } Promise used to return the list of queried permission status
     *     information.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have
     *     permission "ohos.permission.GET_SENSITIVE_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The tokenIDList is empty
     *     or exceeds the size limit.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100015 - The queried data exceeds the upper limit.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    queryStatusByTokenID(tokenIDList: Array<int>): Promise<Array<PermissionStatusInfo>>;
    /**
     * Queries whether a CLI (Command Line Interface) command requires a permission dialog. After the call is
     * successful, the permission dialog decision result corresponding to each command is returned. This API uses a
     * promise to return the result.
     *
     * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
     * @param { string } agentID - Agent identifier, used to identify the agent that initiates CLI-related operations.
     *     Passing an invalid value returns error code 12100001.
     *     <br>Value constraint: The length cannot exceed 48 characters.
     * @param { Array<CliInfo> } cliInfoList - List of CLI information to be queried. Each item contains a command and
     *     its sub-command information. It is recommended to pass in the set of commands that will actually be executed
     *     to avoid expanding the decision scope with irrelevant commands. Passing an invalid value returns error
     *     code 12100001.
     *     <br>The maximum length is 99 and cannot be empty.
     * @returns { Promise<PermissionDialogResult> } Promise used to return the permission dialog decision result for
     *     each CLI command, including information such as whether a dialog is needed, the list of unsatisfied
     *     permissions, and the decision status.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.QUERY_TOOL_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The agentID exceeds 48 characters, cliInfoList is empty
     *     or exceeds 99 items, the cliName of an item in cliInfoList is empty or exceeds 256 characters, the subCliName
     *     of an item in cliInfoList exceeds 256 characters, or the CLI command does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common inner error. The account is not logged in, network is not connected
     *     or an internal error occurs when querying CLI permissions or generating auth results.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    getCliPermissionRequestInfo(agentID: string, cliInfoList: Array<CliInfo>): Promise<PermissionDialogResult>;
    /**
     * Queries the CLI permissions and mapped runtime permissions that the CLI commands used by a specified app depend
     * on. After the call is successful, the CLI permission decision status and runtime permission mapping list for
     * each command are returned. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
     * @param { int } hostTokenID - Identity identifier of the app that accesses the CLI command. It can be obtained
     *     through the [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in
     *     ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { string } agentID - Agent identifier, used to identify the agent that initiates CLI-related operations.
     *     Passing an invalid value returns error code 12100001.
     *     <br>Value constraint: The length cannot exceed 48 characters.
     * @param { Array<CliInfo> } cliInfoList - List of CLI information to be queried. Each item contains a command and
     *     its sub-command information. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 99 and cannot be empty.
     * @returns { Promise<CliPermissionsResult> } Promise used to return the CLI permissions that each CLI command
     *     depends on and their corresponding runtime permission mapping information.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The hostTokenID is 0, the agentID exceeds 48
     *     characters, cliInfoList is empty or contains more than 99 items, the cliName of an item in cliInfoList is
     *     empty or exceeds 256 characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLI
     *     command does not exist.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common internal error. An internal error occurs when querying CLI
     *     permissions or runtime permission information.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    getCliPermissions(
      hostTokenID: int,
      agentID: string,
      cliInfoList: Array<CliInfo>): Promise<CliPermissionsResult>;
    /**
     * Generates an authorization result based on the CLI authorization information.
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
     * @param { int } hostTokenID - tokenID of the app that accesses the CLI command. It can be obtained through the
     *     [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo
     *     of BundleInfo. Passing an invalid value returns error code 12100001.
     *     <br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.
     *     <br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @param { string } agentID - Agent identifier, used to identify the agent that initiates CLI-related operations.
     *     Passing an invalid value returns error code 12100001.
     *     <br>Value constraint: The length cannot exceed 48 characters.
     * @param { Array<CliAuthInfo> } authInfoList - List of CLI authorization information. Each item contains CLI
     *     information (main command and sub-command names), a list of permission names to be authorized, and a
     *     corresponding list of authorization results. Passing an invalid value returns error code 12100001.
     *     <br>The maximum length is 99 and cannot be empty.
     * @returns { Promise<ToolAuthResult> } Promise used to return the generated authorization result, including a list
     *     of authorization result strings, which can be used to pass to the CLI tool to execute commands.
     * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission
     *     "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS".
     * @throws { BusinessError } 202 - Not system application. Interface caller is not a system application.
     * @throws { BusinessError } 12100001 - Invalid parameter. The hostTokenID is 0, the agentID exceeds 48
     *     characters, authInfoList is empty or contains more than 99 items, the cliName in cliInfo of an item in
     *     authInfoList is empty or exceeds 256 characters, the subCliName in cliInfo of an item in authInfoList
     *     exceeds 256 characters, a permission name in permissionNames of an item in authInfoList is empty or exceeds
     *     256 characters, or the number of permissionNames does not equal the number of authorizationResults in an item
     *     in authInfoList.
     * @throws { BusinessError } 12100002 - The specified tokenID does not exist.
     * @throws { BusinessError } 12100003 - A permission name in permissionNames of an item in authInfoList does
     *     not exist.
     * @throws { BusinessError } 12100007 - Service exception.
     * @throws { BusinessError } 12100009 - Common internal error. The account is not logged in, network is not
     *     connected or an internal error occurs when generating authorization results.
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    generateCliAuthResult(
      hostTokenID: int,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>;
  }
  /**
   * Enumerates the permission grant states.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum GrantStatus {
    /**
     * The permission is not granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    PERMISSION_DENIED = -1,
    /**
     * The permission is granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED = 0
  }
  /**
   * Enumerates the results of the dialog box for redirection to the settings page.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export enum SelectedResult {
    /**
     * The user chooses not to go to the settings.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    REJECTED = -1,
    /**
     * The user chooses to go to the settings.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    OPENED = 0,
    /**
     * The permission has been granted and no dialog box is displayed.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    GRANTED = 1
  }
  /**
   * Enumerates the operations that trigger permission state changes.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum PermissionStateChangeType {
    /**
     * Operation to revoke a permission.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PERMISSION_REVOKED_OPER = 0,
    /**
     * Operation to grant a permission.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED_OPER = 1
  }
  /**
   * Enumerates the permission toggle states.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @FaAndStageModel
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PermissionRequestToggleStatus {
    /**
     * Indicates that the dialog box for the specified permission is disabled. When an app calls APIs such as
     * [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * to request this permission, no permission dialog box will be displayed.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    CLOSED = 0,
    /**
     * Indicates that the dialog box for the specified permission is enabled. When an app calls APIs such as
     * [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * to request this permission, a permission dialog box will be displayed normally.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    OPEN = 1
  }
  /**
   * Represents the permission state change details.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   * @name PermissionStateChangeInfo
   */
  interface PermissionStateChangeInfo {
    /**
     * Operation that triggers the permission state change.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    change: PermissionStateChangeType;
    /**
     * ID of the subscribed application, which can be obtained through the
     * [accessTokenId]{@link ./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId} field in ApplicationInfo of
     * BundleInfo. <br>For BundleInfo acquisition, please refer to:
     * [bundleManager.getBundleInfoSync]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoSync}.
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    tokenID: int;
    /**
     * Permissions whose authorization state changes. For details about the permissions, see
     * [Application Permissions](docroot://security/AccessToken/app-permissions.md).
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    permissionName: Permissions;
  }
  /**
   * Enumerates the permission states.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @FaAndStageModel
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum PermissionStatus {
    /**
     * The permission is not granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DENIED = -1,
    /**
     * The permission is granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    GRANTED = 0,
    /**
     * Indicates not operated. The app declares a [user authorization permission]{@link permissions:Permissions} but has
     * not yet called the [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser}
     * API to request authorization, or the user has changed the permission status to asking eve
     * this value is returned when querying the permission status.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    NOT_DETERMINED = 1,
    /**
     * The permission is invalid. The application does not
     * [declare permissions](docroot://security/AccessToken/declare-permissions.md) or cannot process the request. For
     * example, if the status of the approximate location permission is **NOT_DETERMINED**, this value will be returned
     * when the status of the precise location permission is queried.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INVALID = 2,
    /**
     * Indicates restricted. <!--RP2-->The app is prohibited from requesting user authorization through the
     * [requestPermissionsFromUser]{@link abilityAccessCtrl.AtManager.requestPermissionsFromUser} API. <!--RP2End-->
     *
     * @syscap SystemCapability.Security.AccessToken
     * @FaAndStageModel
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    RESTRICTED = 3
  }
  /**
   * Enumerates the global switch types.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SwitchType {
    /**
     * Global switch of the camera.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CAMERA = 0,
    /**
     * Global switch of the microphone.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MICROPHONE = 1,
    /**
     * Global switch of the location service.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATION = 2
  }
  /**
   * Indicates the permission status.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PermissionStatusInfo {
    /**
     * Application ID.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    tokenID: int;
    /**
     * Permission name.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    permissionName: Permissions;
    /**
     * Permission authorization status.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    grantStatus: GrantStatus;
    /**
     * Permission flags. The value range is as follows:
     * - 0: The permission is not set by the user.
     * - 1: The permission is set by the user. If the permission is not granted, a permission dialog box can be
     * displayed again to request authorization.
     * - 2: The permission is set by the user. If the permission is not granted, a permission dialog box cannot be
     * displayed again to request authorization. The user needs to grant the permission in system settings.
     * - 4: The permission is set by the system.
     * - 8: The permission is pre-granted by the system and can be revoked.
     * - 16: The permission is set by a security control.
     * - 32: The permission is fixed by a security policy. The user cannot grant or revoke it.
     * - 64: The permission is allowed only when the app is in the foreground during the current lifecycle.
     * - 128: The permission is fixed by an administrator policy. The user cannot grant or revoke it, but the
     * administrator can unfix it.
     * - 256: The permission is unfixed by an administrator policy. The user can grant or revoke it.
     * - 512: The permission is restricted by a user policy.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    grantFlags: int;
    /**
     * Timestamp of the authorization status change. This is an optional field and is returned when the
     * permission status changes.
     * Unit: milliseconds.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    grantTimestamp?: long;
  }
  /**
   * Enumerates the permission decision statuses.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  export enum PermissionDecisionStatus {
    /**
     * Indicates that a permission dialog needs to pop up.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NEED_PERMISSION_DIALOG = 0,
    /**
     * Indicates that no dialog is needed and the permission has been denied by the user.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_DENIED = 1,
    /**
     * Indicates that no dialog is needed and the permission is restricted by the system or policy.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_RESTRICTED = 2,
    /**
     * Indicates that no dialog is needed and the permission has been granted.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_GRANTED = 3,
    /**
     * Indicates that no dialog is needed, but the permission is not declared.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_NOT_DECLARED = 4,
    /**
     * Indicates that no dialog is needed and the CLI permission has been resolved to runtime permissions.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    NO_DIALOG_CLI_PERMISSION_RESOLVED = 5
  }
  /**
   * Represents CLI (Command Line Interface) information.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliInfo {
    /**
     * CLI name. This field cannot be empty and its length cannot exceed 256 characters.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    cliName: string;
    /**
     * CLI sub-command name. This field can be empty, but its length cannot exceed 256 characters.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    subCliName: string;
  }
  /**
   * Represents the permission dialog information of a single command.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface PermissionDialogDetail {
    /**
     * Whether the current CLI command requires a permission dialog. The value **true** indicates that a permission
     * dialog is required, and **false** indicates that no permission dialog is required.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    needPermissionDialog: boolean;
    /**
     * List of permission names that the agent initiating CLI-related operations currently does not satisfy. If the
     * related permissions are not satisfied, the CLI cannot be started, or the started CLI process cannot obtain the
     * corresponding permissions.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    permissionNameList: Array<Permissions>;
    /**
     * List of permission decision statuses.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    statusList: Array<PermissionDecisionStatus>;
    /**
     * Authorization result string.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    authResult: string;
  }
  /**
   * Represents the permission dialog query result.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface PermissionDialogResult {
    /**
     * List of permission dialog information.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    detailList: Array<PermissionDialogDetail>;
  }
  /**
   * Represents the status information of a single CLI permission declared by a CLI command.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliPermissionDetail {
    /**
     * CLI permission required to call the CLI.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    requiredCliPermission: Permissions;
    /**
     * Decision status of the CLI permission declared by the CLI command.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    cliPermissionStatus: PermissionDecisionStatus;
    /**
     * List of runtime permissions mapped from requiredCliPermission.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    usedPermissions: Array<Permissions>;
  }
  /**
   * Represents the permission information of a single CLI command.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliCommandPermissionResult {
    /**
     * List of CLI permission information that the current CLI command depends on.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    requiredCliPermissions: Array<CliPermissionDetail>;
  }
  /**
   * Represents the CLI permission query result.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliPermissionsResult {
    /**
     * List of CLI permission information.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    permList: Array<CliCommandPermissionResult>;
  }
  /**
   * Represents CLI authorization information.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface CliAuthInfo {
    /**
     * CLI information corresponding to the authorization information.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    cliInfo: CliInfo;
    /**
     * List of permission names. Each element cannot be empty and its length cannot exceed 256 characters.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    permissionNames: Array<Permissions>;
    /**
     * List of authorization results, and the array length must be equal to permissionNames.length. The value **true**
     * indicates that the authorization is successful and the CLI command can obtain the corresponding permission. The
     * value **false** indicates that the authorization is denied and the CLI command cannot obtain the corresponding
     * permission.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    authorizationResults: Array<boolean>;
  }
  /**
   * Represents the tool authorization result.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface ToolAuthResult {
    /**
     * List of authorization result strings.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    authResults: Array<string>;
  }
}
export { Permissions };
/**
 * Permission request result object, containing information such as the list of requested permission names, the
 * authorization result of each permission, the dialog box display result, and the failure reason.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
export type PermissionRequestResult = _PermissionRequestResult;
/**
 * Provides the context for the ability or application, which can be used to access application resources.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
export type Context = _Context;

export default abilityAccessCtrl;
