/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file The NotificationCommonDef module provides APIs for describing the BundleOption information, that is, the bundle information of a specified application.
 * @kit NotificationKit
 */

/**
 * Describes the bundle information of an application.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundleOption {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  bundle: string;

  /**
   * UID of the application, which is obtained from [ApplicationInfo](@link ./bundleManager/ApplicationInfo::ApplicationInfo). The default value is **0**. This parameter is mandatory in application clone<!--Del--> or telematics device<!--DelEnd--> scenarios.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  uid?: int;
}

/**
 * Describes the authorized bundle information.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface GrantedBundleInfo {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Index of an application clone, which takes effect only for application clones.
   * The value is obtained from the **appIndex** of 
   * [ApplicationInfo](@link ./bundleManager/ApplicationInfo::ApplicationInfo).
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Application name, which is obtained from the **label** of 
   * [ApplicationInfo](@link ./bundleManager/ApplicationInfo::ApplicationInfo).
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appName?: string;
}

/**
 * Describes the user authorization settings.
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface UserGrantSetting {
  /**
   * Whether the **Allow access to notifications on this device** switch is toggled on. true: **yes**; false: **no**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly userGrantEnabled: boolean;

  /**
   * List of apps for which the **Allow access to notifications on this device** switch is toggled on.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly grantedBundleInfos?: Array<GrantedBundleInfo>;
}
