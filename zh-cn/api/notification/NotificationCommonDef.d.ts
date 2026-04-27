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
 * 描述应用的包信息。
 *
 * @file Some common definitions
 * @kit NotificationKit
 */

/**
 * 描述BundleOption信息，即应用的包信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 9 dynamic
 * @since 23 static
 */
export interface BundleOption {
  /**
   * 应用程序的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  bundle: string;

  /**
   * 应用程序的UID。从[ApplicationInfo](@link ./bundleManager/ApplicationInfo::ApplicationInfo)获取，默认为0。
   * 应用分身<!--Del-->或车机<!--DelEnd-->场景下，此参数为必填项。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  uid?: int;
}

/**
 * 描述已授权的包信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface GrantedBundleInfo {
  /**
   * 应用程序的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 应用包的分身索引标识，仅在分身应用中生效。从[ApplicationInfo](@link ./bundleManager/ApplicationInfo::ApplicationInfo)中appIndex获取。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * 标识应用的名称。从[ApplicationInfo](@link ./bundleManager/ApplicationInfo::ApplicationInfo)中label获取。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appName?: string;
}

/**
 * 描述用户授权的设置信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface UserGrantSetting {
  /**
   * “允许获取本机通知”的开关状态。 true：表示功能已启用；false：表示功能未启用。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly userGrantEnabled: boolean;

  /**
   * “已获取的本机通知”通知开关开启的应用列表。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly grantedBundleInfos?: Array<GrantedBundleInfo>;
}
