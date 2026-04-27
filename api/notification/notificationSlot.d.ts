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
 * @file The NotificationSlot module provides APIs for defining the notification slot.
 * @kit NotificationKit
 */

/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */
/*** if arkts dynamic&static */
import type notificationManager from '../@ohos.notificationManager';
/*** endif */

/**
 * The **NotificationSlot** module provides APIs for defining the notification slots. The notification reminder modes 
 * vary according to notification slots.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSlot {
  /**
   * Notification slot type.
   * 
   * This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use 
   * **notificationType** instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSlot#notificationType
   */
  type?: notification.SlotType;

  /**
   * Notification slot type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationType?: notificationManager.SlotType;

  /**
   * Notification level.
   * 
   * This attribute is supported since API version 7 and deprecated since API version 20. You are advised to use 
   * **notificationLevel** instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 20
   * @useinstead NotificationSlot#notificationLevel
   */
  level?: notification.SlotLevel;

  /**
   * Notification level.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  notificationLevel?: notificationManager.SlotLevel;

  /**
   * Notification slot description. The value contains a maximum of 243 bytes. Excess part will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  desc?: string;

  /**
   * Whether to display the badge.
   * 
   * - **true**: Yes.
   * - **false**: No. The default value is **true**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeFlag?: boolean;

  /**
   * Whether to bypass DND mode in the system.
   * 
   * - **true**: Yes.
   * - **false**: No. The default value is **false**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  bypassDnd?: boolean;

  /**
   * Mode for displaying the notification on the lock screen. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lockscreenVisibility?: int;

  /**
   * Whether to enable vibration for the notification.
   * 
   * - **true**: Yes.
   * - **false**: No. The default value is **false**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationEnabled?: boolean;

  /**
   * Name of the custom ringtone file for notifications. This file is stored in the **resources/rawfile** directory and 
   * supports formats such as M4A, AAC, MP3, OGG, WAV, FLAC, and AMR. The value contains a maximum of 243 bytes. Excess 
   * part will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * Whether the indicator blinks for the notification.
   * 
   * - **true**: Yes.
   * - **false**: No. The default value is **false**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightEnabled?: boolean;

  /**
   * Indicator color of the notification. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightColor?: int;

  /**
   * Vibration mode of the notification. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationValues?: Array<long>;

  /**
   * Whether the notification is enabled.
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled?: boolean;

  /**
   * Reminder mode of the notification.
   * 
   * This is a system API.
   * 
   * - Bit 0: sound alert. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 1: locking the screen. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 2: banner. The value **0** means to enable the feature, and **1** means the opposite.
   * - BIt 3: turning on the screen. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 4: vibration. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 5: notification icon in the status bar. The value **0** means to enable the feature, and **1** means the 
   * opposite.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly reminderMode?: int;

  /**
   * Authorization status.
   * 
   * This is a system API.
   * 
   * - **0**: means the feature is authorized.
   * - **1**: means the feature is to be authorized.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly authorizedStatus?: int;
}
