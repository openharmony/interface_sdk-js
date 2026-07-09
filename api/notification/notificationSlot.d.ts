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
 * @file Description of the notification channel
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
   * Channel type.
   * 
   * This attribute is supported since API version 7 and deprecated since API version 11. It is recommended to use
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
   * Description of the notification channel. The size cannot exceed 243 bytes, and the excess part will be
   * truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  desc?: string;

  /**
   * Whether to display the badge. The default value is **true**.
   *
   * - **true**: Display the badge.
   * - **false**: Do not display the badge.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeFlag?: boolean;

  /**
   * Whether to bypass Do Not Disturb mode in the system. The default value is **false**.
   *
   * - **true**: Bypass Do Not Disturb mode, and notifications will still be alerted in Do Not Disturb mode.
   * - **false**: Do not bypass Do Not Disturb mode, and notifications will not be alerted in Do Not Disturb mode.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  bypassDnd?: boolean;

  /**
   * Mode for displaying the notification on the lock screen. This is a reserved capability and is not supported
   * currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lockscreenVisibility?: int;

  /**
   * Whether to enable vibration. The default value is **false**.
   *
   * - **true**: yes.
   * - **false**: no.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationEnabled?: boolean;

  /**
   * File name of the custom ringtone for notifications from this channel. The file is placed in the
   * **resources/rawfile** directory, and formats such as M4A, AAC, MP3, OGG, WAV, FLAC, and AMR are supported. The
   * size cannot exceed 243 bytes, and the excess part will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * Whether to enable the light. The default value is **false**.
   *
   * - **true**: yes.
   * - **false**: no.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightEnabled?: boolean;

  /**
   * Indicator color of the notification. This is a reserved capability and is not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightColor?: int;

  /**
   * Vibration mode of the notification. This is a reserved capability and is not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationValues?: Array<long>;

  /**
   * Whether to allow notifications to be published from this notification channel.
   *
   * - **true**: yes.
   * - **false**: no.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled?: boolean;

  /**
   * Reminder mode of the notification.
   *
   * - Bit 0: sound alert. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 1: locking the screen. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 2: banner. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 3: turning on the screen. The value **0** means to enable the feature, and **1** means the opposite.
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
