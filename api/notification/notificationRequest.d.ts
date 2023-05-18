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

import notification from '../@ohos.notification';
import image from '../@ohos.multimedia.image';
import { WantAgent } from '../@ohos.wantAgent';
import { NotificationContent } from './notificationContent';
import { NotificationActionButton } from './notificationActionButton';
import { NotificationTemplate } from './notificationTemplate';
import { NotificationFlags } from './notificationFlags';

/**
 * Defines a NotificationRequest instance.
 *
 * @typedef NotificationRequest
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationRequest {
  /**
   * Notification content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  content: NotificationContent;

  /**
   * Notification ID.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  id?: number;

  /**
   * Notification slot type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  slotType?: notification.SlotType;

  /**
   * Whether the notification is an ongoing notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  isOngoing?: boolean;

  /**
   * Whether the notification can be removed.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  isUnremovable?: boolean;

  /**
   * Time when the notification is sent.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  deliveryTime?: number;

  /**
   * Whether the notification is automatically cleared.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  tapDismissed?: boolean;

  /**
   * Time when the notification is automatically cleared.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  autoDeletedTime?: number;

  /**
   * WantAgent instance to which the notification will be redirected after being clicked.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  wantAgent?: WantAgent;

  /**
   * Extended parameter.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  extraInfo?: { [key: string]: any };

  /**
   * Background color of the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  color?: number;

  /**
   * Whether the notification background color can be enabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  colorEnabled?: boolean;

  /**
   * Whether the notification triggers an alert only once.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  isAlertOnce?: boolean;

  /**
   * Whether to display the stopwatch.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  isStopwatch?: boolean;

  /**
   * Whether to display the countdown time.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  isCountDown?: boolean;

  /**
   * Whether the notification is displayed as a floating icon.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  isFloatingIcon?: boolean;

  /**
   * Notification label.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  label?: string;

  /**
   * Notification badge type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  badgeIconStyle?: number;

  /**
   * Whether to display the time when the notification is delivered.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  showDeliveryTime?: boolean;

  /**
   * Buttons in the notification. Up to two buttons are allowed.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  actionButtons?: Array<NotificationActionButton>;

  /**
   * Small notification icon.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  smallIcon?: image.PixelMap;

  /**
   * Large notification icon.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  largeIcon?: image.PixelMap;

  /**
   * The group information for this notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  groupName?: string;

  /**
   * Read-only name of the package for which a notification is created.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  readonly creatorBundleName?: string;

  /**
   * Read-only UID of the notification creator.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  readonly creatorUid?: number;

  /**
   * Read-only PID of the notification creator.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  readonly creatorPid?: number;

  /**
   * Read-only UserId of the notification creator.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  readonly creatorUserId?: number;

  /**
   * Obtains the classification of this notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  classification?: string;

  /**
   * Obtains the unique hash code of a notification in the current application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  readonly hashCode?: string;

  /**
   * Whether the notification can be remove.
   *
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly isRemoveAllowed?: boolean;

  /**
   * Notification source. enum SourceType
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly source?: number;

  /**
   * Obtains the template of this notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  template?: NotificationTemplate;

  /**
   * The options to distributed notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  distributedOption?: DistributedOptions;

  /**
   * The device ID of the notification source.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly deviceId?: string;

  /**
   * Obtains the set of identifiers for the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  readonly notificationFlags?: NotificationFlags;

  /**
   * WantAgent instance to which the notification will be redirected when removing notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  removalWantAgent?: WantAgent;

  /**
   * Number of notifications displayed on the app icon.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  badgeNumber?: number;
}

/**
 * Describes distributed options.
 *
 * @typedef DistributedOptions
 * @syscap SystemCapability.Notification.Notification
 * @since 8
 */
export interface DistributedOptions {
  /**
   * Obtains whether is the distributed notification.
   *
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  isDistributed?: boolean;

  /**
   * Obtains the types of devices to which the notification can be synchronized.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  supportDisplayDevices?: Array<string>;

  /**
   * Obtains the devices on which notifications can be open.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  supportOperateDevices?: Array<string>;

  /**
   * Obtains the remind mode of the notification. enum DeviceRemindType.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly remindType?: number;
}
