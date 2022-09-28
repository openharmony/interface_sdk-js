/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { NotificationSubscribeInfo as _NotificationSubscribeInfo } from './notification/notificationSubscribeInfo';
import { NotificationSubscriber as _NotificationSubscriber } from './notification/notificationSubscriber';
import { SubscribeCallbackData as _SubscribeCallbackData } from './notification/notificationSubscriber';
import { EnabledNotificationCallbackData as _EnabledNotificationCallbackData } from './notification/notificationSubscriber';

/**
 * @name notificationSubscribe
 * @since 9
 * @syscap SystemCapability.Notification.Notification
 * @import import notificationSubscribe from '@ohos.notification.subscribe';
 * @permission N/A
 */
declare namespace notificationSubscribe {
  /**
   * subscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * subscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   */
  function subscribe(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo, callback: AsyncCallback<void>): void;

  /**
   * subscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * unsubscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * unsubscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * Sets filter criteria of publishers for subscribing to desired notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   */
  export type NotificationSubscribeInfo = _NotificationSubscribeInfo

  /**
   * Provides methods that will be called back when the subscriber receives a new notification or
   * a notification is canceled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   */
  export type NotificationSubscriber = _NotificationSubscriber

  /**
   * Provides methods that will be called back when the subscriber receives a new notification or
   * a notification is canceled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   */
  export type SubscribeCallbackData = _SubscribeCallbackData

  /**
   * Describes the properties of the application that the permission to send notifications has changed.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi Hide this for inner system use.
   */
  export type EnabledNotificationCallbackData = _EnabledNotificationCallbackData
}

export default notificationSubscribe;
