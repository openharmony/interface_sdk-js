/*
 * Copyright (c) 2024-2026 Huawei Device Co., Ltd.
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
 * @file Embedded User Authentication Icons
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * The **userAuthIcon** module is a UI component module of the OpenHarmony user identity and access management (UserIAM)
 * system. It provides an out-of-the-box authentication icon component (**UserAuthIcon**). This component is used to
 * display the face authentication or fingerprint authentication icon on the application UI. It supports custom icon
 * colors and dimensions, and can directly launch the system authentication dialog box component when the icon is
 * tapped.
 *
 * This module applies to the following scenarios:
 *
 * - Quickly integrating the face or fingerprint authentication entry into the application UI.
 * - Displaying biometric authentication icons in a unified style.
 * - Tapping the icon to trigger the system-level authentication process.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export default struct UserAuthIcon {
  /**
   * User authentication parameters. The parameters include the **challenge** value, authentication type (**authType**
   * ), and authentication trust level (**authTrustLevel**). The challenge value is used to prevent replay attacks.
   * The authentication type specifies the available authentication methods (such as face, fingerprint, and PIN). The
   * authentication trust level determines the security strength of the authentication.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  authParam: userAuth.AuthParam;

  /**
   * Parameters on the user authentication page. The parameters include the authentication screen title (**title**)
   * and navigation button text (**navigationButtonText**), which are used to customize the content displayed in the
   * authentication dialog box.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  widgetParam: userAuth.WidgetParam;

  /**
   * Icon height. It is used to set the height of the authentication icon. The aspect ratio is 1:1 (that is, the
   * height is the same as the width). The default value is **64fp**, and percentage strings are not supported. You
   * are advised to select a proper size based on the UI layout.
   *
   * @default 64fp
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  iconHeight?: Dimension;

  /**
   * Icon color. It is used to set the color of the authentication icon. Multiple formats are supported, such as color
   * values and resource references. By default, the system accent color is used. You can customize the color based on
   * the application theme, for example, using **Color.Blue** or **$r('app.color.primary')**.
   *
   * @default $r('sys.color.ohos_id_color_activated')
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  iconColor?: ResourceColor;

  /**
   * Result callback. This callback is triggered after a user completes authentication. The callback parameters
   * include the authentication result code (**result**), authentication token (**token**), and authentication type (
   * **authType**). Your application needs to process the authentication result in this callback. For example, if the
   * authentication is successful, your application can obtain the token for subsequent security operations. If the
   * authentication fails, your application can prompt the user to try again.
   *
   * Note:The application must request the **ohos.permission.ACCESS_BIOMETRIC** permission. Otherwise, it will only
   * display the icon and cannot start the authentication component.
   *
   * @param { userAuth.UserAuthResult } result - Authentication result information.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAuthResult: (result: userAuth.UserAuthResult) => void;

  /**
   * Icon click callback. This callback is triggered when a user taps the authentication icon. You can use this
   * callback to prepare for the tap or record user behavior logs. If this callback is not set, the authentication
   * process is directly triggered after the icon is tapped.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onIconClick?: () => void;
}