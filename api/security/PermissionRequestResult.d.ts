/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * PermissionRequestResult is the result object of a permission request. Developers need to first create an atManager
 * instance, and then call the requestPermissionsFromUser method to request permissions. This method returns a
 * PermissionRequestResult object, through which developers can determine the permission request result based on its
 * properties. For details about the overall permission request process and atManager, see
 * [@ohos.abilityAccessCtrl (Application Access Control)]{@link @ohos.abilityAccessCtrl}.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class PermissionRequestResult {
  /**
   * Array of permissions to be requested this time. **Atomic service API:** Starting from API version 11, this API
   * supports use in atomic services.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  permissions: Array<string>;

  /**
   * Authorization result corresponding to each requested permission.
   *
   * - -1: Not authorized. Starting from API version 12, you can combine this with dialogShownResults to further
   * determine the reason: if dialogShownResults is true, it means the user explicitly denied the request this time; if
   * false, it means the current state does not require a dialog to be shown, and the user usually needs to go to system
   * settings to make changes.
   * - 0: Authorized, the application can continue to access protected resources associated with this permission.
   * - 2: Invalid request, usually indicating that the permission is not declared, the permission name is invalid, or
   * the special request conditions for this permission are not met. Developers should check the permission name, the
   * permission declaration in module.json, and the request conditions for the corresponding permission.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  authResults: Array<int>;

  /**
   * Indicates whether an authorization dialog was actually shown for each permission during this request process.
   *
   * - true: The system has shown the authorization dialog.
   * - false: The system did not show a dialog, usually because the current permission state, permission type, or system
   * policy does not allow proceeding with the dialog authorization path.
   *
   * When authResults is -1, combining it with this field can further distinguish between "rejected by the user this
   * time" and "dialog is no longer shown currently". If this field is not returned, it means this result does not
   * include the authorization dialog display status.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  dialogShownResults?: Array<boolean>;

  /**
   * Reason code corresponding to each permission request. Mainly used to explain the specific reasons for authorization
   * failure, invalid request, or inability to show a dialog. If this field is not returned, it means this result does
   * not include reason codes.
   *
   * - 0: This request is valid.
   * - 1: Invalid permission name, please check the permission name format and value.
   * - 2: Permission not declared, please declare this permission in module.json.
   * - 3: The request conditions for the corresponding permission are not met, for example, some location permissions
   * require additional prerequisites. Currently only applies to location permissions, including
   * [ohos.permission.LOCATION](docroot://security/AccessToken/permissions-for-all-user.md#ohospermissionlocation) and
   * [ohos.permission.APPROXIMATELY_LOCATION](docroot://security/AccessToken/permissions-for-all-user.md#ohospermissionapproximately_location).
   * - 4: The user has not agreed to the privacy statement, please guide the user to agree to the privacy statement
   * before requesting permissions.
   * - 5: This permission does not support requesting via permission dialog; the request method may be restricted or
   * controlled by system policy. Please use the authorization method supported by this permission.
   * - 6: This permission is of the
   * [manual_settings](docroot://security/AccessToken/app-permission-mgmt-overview.md#manual_settings-manual-authorization)
   * type and can only be authorized through the settings page. This reason code is supported starting from API version
   * 21.
   * - 12: Service exception, please try again later.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  errorReasons?: Array<int>;
}

export default PermissionRequestResult;