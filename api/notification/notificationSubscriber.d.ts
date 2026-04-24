/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @file Provides methods that will be called back when the subscriber receives a new notification or a notification is canceled
 * @kit NotificationKit
 */

import { NotificationRequest } from './notificationRequest';
import { NotificationSortingMap } from './notificationSortingMap';
import type notificationManager from '../@ohos.notificationManager';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */

/**
 * Provides callback methods for subscribers to receive and cancel notifications.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSubscriber {
  /**
   * Information about the notification received.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onConsume?:(data: SubscribeCallbackData) => void;

  /**
   * Information about the notification to cancel.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onCancel?:(data: SubscribeCallbackData) => void;

  /**
   * Latest notification sorting list.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onUpdate?:(data: NotificationSortingMap) => void;

  /**
   * Callback invoked when subscription is complete.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onConnect?:() => void;

  /**
   * Callback invoked when unsubscription is complete.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onDisconnect?:() => void;

  /**
   * Callback to be invoked when the service is disconnected.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onDestroy?:() => void;

  /**
   * Callback used to return DND time setting updates.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSubscriber#onDoNotDisturbChanged
   */
  onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void;

  /**
   * Callback used to return DND time setting updates.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void;

  /**
   * Callback used to return the listened application information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void;

  /**
   * Returns the changes of the enabling state of the application's silent reminder.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback;

  /**
   * Callback used to return the result.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void;
 
  /**
   * Callback used to return the result.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void;

  /**
   * Callback used to return the listened application information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  onBadgeChanged?:(data: BadgeNumberCallbackData) => void;

  /**
   * Returns the changes of the enabling state of the application's badge.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  onBadgeEnabledChanged?: BadgeEnabledChangedCallback;

  /**
   * Notification information of batch deletion.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  onBatchCancel?: (data: Array<SubscribeCallbackData>) => void;

  /**
   * Returns notification information containing the system property value.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onSystemUpdate?: SystemUpdateCallback;
}

/**
 * Defines the SystemUpdateCallback callback.
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface SubscribeCallbackData {
  /**
   * Notification content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly request: NotificationRequest;

  /**
   * Notification sorting information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly sortingMap?: NotificationSortingMap;

  /**
   * Reason for deletion. The options are as follows:
   * **1**: The notification is deleted after being clicked.
   * **2**: The notification is deleted by the user.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly reason?: int;

  /**
   * Sound used for notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly sound?: string;

  /**
   * Vibration used for notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly vibrationValues?: Array<long>;
}

/**
 * Defines a callback function to listen for the enabling state changes of the application badge.
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface EnabledNotificationCallbackData {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly bundle: string;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * Whether the application notification is enabled.
   * - **true**: enabled.
   * - **false**: disabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly enable: boolean;
}

/**
 * Defines a callback function to listen for the enabling state changes of the application's silent reminder.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface EnabledSilentReminderCallbackData {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly bundle: string;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly uid: int;

  /**
   * Enabling state of the application's silent reminder.
   * - **USER_MODIFIED_OFF**: disabled state set by the user.
   * - **USER_MODIFIED_ON**: enabled state set by the user.
   * - **SYSTEM_DEFAULT_OFF**: initial disabled state before user setting.
   * - **SYSTEM_DEFAULT_ON**: initial enabled state before user setting.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly enableStatus: notificationManager.SwitchState;
}

/**
 * Callback used to return the result.
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface EnabledPriorityNotificationCallbackData {
  /**
   * Whether the priority notification is enabled.
   * - **true**: The priority notification is enabled.
   * - **false**: The priority notification is disabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly enable: boolean;
}

/**
 * Describes the switch state to Restrict notification capability.
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface EnabledPriorityNotificationByBundleCallbackData {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly bundle: string;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly uid: int;

  /**
   * Whether the priority notification for an application is enabled.
   * - **DISABLE**: The priority notification is disabled.
   * - **ENABLE_BY_INTELLIGENT**: The priority notification can be enabled through intelligent recognition,
   * user keyword matching, or application rule matching.
   * - **ENABLE**: The priority notification is enabled for all applications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly enableStatus: notificationManager.PriorityEnableStatus;
}

/**
 * Describes the badge number of the application has changed.
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface BadgeNumberCallbackData {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundle: string;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * Number of notifications displayed on the application icon.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly badgeNumber: int;

  /**
   * Key value of an application instance. This parameter is supported since API version 12 and
   * deprecated since API version 15.You are advised to use **appInstanceKey** instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamiconly
   * @deprecated since 15
   * @useinstead BadgeNumberCallbackData#appInstanceKey
   */
  readonly instanceKey?: number;

  /**
   * Key value of an application instance.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  readonly appInstanceKey?: string;
}

/**
 * Defines a callback function to listen for the enabling state changes of the application badge.
 * type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 12 dynamic
 */
export interface BadgeEnabledChangedCallback {
  /**
   * Callback used to return the listened badge enabling state.
   *
   * @param { EnabledNotificationCallbackData } data
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  (data: EnabledNotificationCallbackData): void;
}

/**
 * Defines a callback function to listen for the enabling state changes of the application badge.
 * type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void
 *
 * @param { EnabledNotificationCallbackData } data - Callback used to return the listened badge enabling state.
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void;

/**
 * Defines the SystemUpdateCallback callback.
 * type SystemUpdateCallback = (data: SubscribeCallbackData) => void
 *
 * @param { SubscribeCallbackData } data -Notification information that carries the system property value.
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export type SystemUpdateCallback = (data: SubscribeCallbackData) => void;

/**
 * Defines a callback function to listen for the enabling state changes of the application's silent reminder.
 * type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void
 *
 * @param { EnabledSilentReminderCallbackData } callbackData -
 *     Callback used to return the listened silent reminder enabling state.
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void;
