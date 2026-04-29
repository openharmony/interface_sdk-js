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
 * @file
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * **userAuthIcon** provides user identity authentication icons used on the application UI. With **userAuthIcon**, you
 * can:
 *
 * 1. Easily integrate the facial authentication and fingerprint authentication icons into your applications.
 *
 * 2. Customize the color and size of the icons. The icon style cannot be changed.
 *
 * 3. Start the facial or fingerprint authentication pop-up component once the icon is tapped.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export default struct UserAuthIcon {
  /**
   * User authentication parameters.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  authParam: userAuth.AuthParam;

  /**
   * Parameters on the user authentication page.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  widgetParam: userAuth.WidgetParam;

  /**
   * Height of the icon. The aspect ratio is 1:1. The default value is **64fp**. Percentage strings are not supported.
   *
   * @default 64fp
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  iconHeight?: Dimension;

  /**
   * Color of the icon. The default value is **$r('sys.color.ohos_id_color_activated')**.
   *
   * @default $r('sys.color.ohos_id_color_activated')
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  iconColor?: ResourceColor;

  /**
   * Callback used to return the user authentication result.<br>The application must request the `ohos.permission.ACCESS_BIOMETRIC` permission.
   * Otherwise, it will only display the icon and cannot start the identity authentication components.
   *
   * @param { userAuth.UserAuthResult } result - Authentication result information.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAuthResult: (result: userAuth.UserAuthResult) => void;

  /**
   * Callback to be invoked when the icon is tapped.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onIconClick?: () => void;
}