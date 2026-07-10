/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit NotificationKit
 */

import type NotificationSubscriberExtensionContext from './@ohos.application.NotificationSubscriberExtensionContext';
import { NotificationInfo } from './notification/NotificationInfo'

/**
 * NotificationSubscriberExtensionAbility is the base class for notification subscription extensions, providing the core
 * functionality for subscribing to notifications.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 22 dynamic
 * @since 23 static
 */
declare class NotificationSubscriberExtensionAbility {
  /**
   * Context for the NotificationSubscriberExtensionAbility.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  context: NotificationSubscriberExtensionContext;
 
  /**
   * Called when the notification subscription extension is destroyed.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * Called when a notification is received.
   *
   * @param { NotificationInfo } notificationInfo - Notification information delivered to the
   *     [onReceiveMessage]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility.onReceiveMessage}
   *     callback of ExtensionAbility for notification subscriptions.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onReceiveMessage(notificationInfo: NotificationInfo): void;

  /**
   * Called when notifications are canceled.
   *
   * @param { Array<string> } hashCodes - Array of hash codes representing the notifications to be canceled.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onCancelMessages(hashCodes: Array<string>): void;
}

export default NotificationSubscriberExtensionAbility;
