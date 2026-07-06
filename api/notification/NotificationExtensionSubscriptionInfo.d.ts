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
 * @file Describes a notification extension subscription info
 * @kit NotificationKit
 */

import type notificationExtensionSubscription from '../@ohos.notificationExtensionSubscription';

/**
 * The **NotificationExtensionSubscriptionInfo** module describes the information about notification extension 
 * subscription.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface NotificationExtensionSubscriptionInfo {
  /**
   * MAC address, which is a unique identifier of the device. Example: 11:22:33:AA:BB:FF
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  addr: string;

  /**
   * Subscription type, including Bluetooth.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  type: notificationExtensionSubscription.SubscribeType;
}
