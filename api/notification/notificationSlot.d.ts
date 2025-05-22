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

/*** if arkts 1.1 */
import notification from '../@ohos.notification';
/*** endif */
/*** if arkts 1.1&1.2 */
import type notificationManager from '../@ohos.notificationManager';
/*** endif */


/**
 * Describes a NotificationSlot instance.
 *
 * @typedef NotificationSlot
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'7', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationSlot {
  /**
   * Obtains the type of a notification slot.
   *
   * @type { ?notification.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 11
   * @useinstead NotificationSlot#notificationType
   */
  type?: notification.SlotType;

  /**
   * Notification slot type.
   *
   * @type { ?notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  notificationType?: notificationManager.SlotType;

  /**
   * Obtains the level of a notification slot
   *
   * @type { ?notification.SlotLevel }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 20
   * @useinstead NotificationSlot#notificationLevel
   */
  level?: notification.SlotLevel;

  /**
   * SlotLevel is used to regulate the display behavior and alert mechanisms of notifications.
   * Each value of SlotLevel determines whether the system displays notification icons in the status bar,
   * shows banners, or plays prompt tones.
   *
   * @type { ?notificationManager.SlotLevel }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   */
    notificationLevel?: notificationManager.SlotLevel;

  /**
   * Obtains the description of a notification slot.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  desc?: string;

  /**
   * Obtains the application icon badge status of a notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  badgeFlag?: boolean;

  /**
   * Obtains whether DND mode is bypassed for a notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  bypassDnd?: boolean;

  /**
   * Whether and how to display notifications on the lock screen.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  lockscreenVisibility?: number;

  /**
   * Obtains the vibration status of the notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  vibrationEnabled?: boolean;

  /**
   * Obtains the prompt tone of the notification slot.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  sound?: string;

  /**
   * Obtains whether the notification light is enabled in a notification slot.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  lightEnabled?: boolean;

  /**
   * Obtains the color of the notification light in a notification slot.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  lightColor?: number;

  /**
   * Obtains the vibration style of notifications in this notification slot.
   *
   * @type { ?Array<number> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  vibrationValues?: Array<number>;

  /**
   * Read-only enabled status in this notification slot.
   *
   * @type { ?boolean }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly enabled?: boolean;

  /**
   * Obtains the notification reminder mode of the current notification entry.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly reminderMode?: number;

  /**
   * Obtains channel information is authorized by the user.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly authorizedStatus?: number;
}
