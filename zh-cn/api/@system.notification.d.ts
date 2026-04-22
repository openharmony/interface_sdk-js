/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * > **说明：**
 * >
 * > - 从API Version 7 开始，该接口不再维护，推荐使用新接口[@ohos.notification (Notification模块)]{@link @ohos.notification:notification}。
 *
 * @file
 * @kit NotificationKit
 */

/**
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 3 dynamiconly
 * @deprecated since 7
 */
export interface ActionResult {
  /**
   * 单击通知后要重定向到的应用程序的Bundle名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   */
  bundleName: string;

  /**
   * 单击通知后要重定向到的应用程序的Ability名称。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   */
  abilityName: string;

  /**
   * 要重定向到的页面的uri。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   */
  uri: string;
}

/**
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 3 dynamiconly
 * @deprecated since 7
 */
export interface ShowNotificationOptions {
  /**
   * 通知标题。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   */
  contentTitle?: string;

  /**
   * 通知内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   */
  contentText?: string;

  /**
   * 通知被点击后触发的行为。
   * 
   * 从API version 7开始不再维护。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   */
  clickAction?: ActionResult;
}

/**
 * 提供通知管理的能力。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 3 dynamiconly
 * @deprecated since 7
 * @useinstead ohos.notification/notification
 */
declare class Notification {
  /**
   * 显示通知。
   *
   * @param { ShowNotificationOptions } [options] - 通知标题。
   * @syscap SystemCapability.Notification.Notification
   * @since 3 dynamiconly
   * @deprecated since 7
   * @useinstead ohos.notification/notification
   */
  static show(options?: ShowNotificationOptions): void;
}

export default Notification;
