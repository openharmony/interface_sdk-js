
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

import type notificationManager from '../@ohos.notificationManager';
import { NotificationExtensionContent } from './NotificationExtensionContent';

/**
 * The **NotificationInfo** module describes the notification information delivered to the 
 * [onReceiveMessage]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility#onReceiveMessage}
 * callback of ExtensionAbility for notification subscriptions.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface NotificationInfo {
  /**
   * Unique identifier of the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly hashCode: string;

  /**
   * Notification slot type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly notificationSlotType: notificationManager.SlotType;

  /**
   * Notification content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly content: NotificationExtensionContent;
  
  /**
   * Name of the bundle that creates the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Name of the application that creates the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appName?: string;

  /**
   * Timestamp (in milliseconds) when the notification is published.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly deliveryTime?: long;

  /**
   * Notification group name, which is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly groupName?: string;

  /**
   * Index of the application clone that creates the notification. It takes effect only for application clones.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}
