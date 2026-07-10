'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { ResourceColor, Dimension, Component } from '@ohos.arkui.component';

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
 * @struct { UserAuthIcon }
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct UserAuthIcon {
  /**
   * User authentication parameters.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  authParam: userAuth.AuthParam;

  /**
   * Parameters on the user authentication page.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  widgetParam: userAuth.WidgetParam;

  /**
   * Height of the icon. The aspect ratio is 1:1. The default value is **64fp**. Percentage strings are not supported.
   *
   * @default 64fp
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  iconHeight?: Dimension;

  /**
   * Color of the icon. The default value is **$r('sys.color.ohos_id_color_activated')**.
   *
   * @default $r('sys.color.ohos_id_color_activated')
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  iconColor?: ResourceColor;

  /**
   * Callback used to return the user authentication result.<br>The application must request
   * the `ohos.permission.ACCESS_BIOMETRIC` permission.
   * Otherwise, it will only display the icon and cannot start the identity authentication components.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAuthResult: userAuth.AuthCallbackOnResultFunc;

  /**
   * Callback to be invoked when the icon is tapped.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  onIconClick?: ClickCallbackFunc;

  /**
   * The method to build the component.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

/**
 * Callback after user clicks.
 *
 * @typedef { function } ClickCallbackFunc
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @stagemodelonly
 * @since 23 staticonly
 */
type ClickCallbackFunc = () => void;