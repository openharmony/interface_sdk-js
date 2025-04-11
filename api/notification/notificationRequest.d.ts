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
 * @file Information carried when a notification is sent
 * @kit NotificationKit
 */

import image from '../@ohos.multimedia.image';
import type notificationManager from '../@ohos.notificationManager';
import type notificationSubscribe from '../@ohos.notificationSubscribe';
import { NotificationContent } from './notificationContent';
import { NotificationActionButton } from './notificationActionButton';
import { NotificationTemplate } from './notificationTemplate';
import { NotificationFlags } from './notificationFlags';
/*** if arkts 1.1 */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
import type { BundleOption } from './NotificationCommonDef';
/*** endif */
/*** if arkts 1.2 */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { BundleOption } from './NotificationCommonDef';
/*** endif */

/**
 * Defines a NotificationRequest instance.
 *
 * @typedef NotificationRequest
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Defines a NotificationRequest instance.
 *
 * @typedef NotificationRequest
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationRequest {
  /**
   * Notification content.
   *
   * @type { NotificationContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Notification content.
   *
   * @type { NotificationContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  content: NotificationContent;

  /**
   * Notification ID.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Notification ID.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  id?: number;

  /**
   * Globally unique notification message ID defined by application.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  appMessageId?: string;

  /**
   * Notification slot type.
   *
   * @type { ?notification.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 11
   * @useinstead NotificationRequest#notificationSlotType
   */
  slotType?: notification.SlotType;

  /**
   * Notification slot type.
   *
   * @type { ?notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  notificationSlotType?: notificationManager.SlotType;

  /**
   * Whether the notification is an ongoing notification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether the notification is an ongoing notification.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOngoing?: boolean;

  /**
   * Whether the notification can be removed.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isUnremovable?: boolean;

  /**
   * Whether the notification can only be updated.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  updateOnly?: boolean;

  /**
   * Time when the notification is sent.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Time when the notification is sent.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  deliveryTime?: number;

  /**
   * Whether the notification is automatically cleared.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether the notification is automatically cleared.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  tapDismissed?: boolean;

  /**
   * Time when the notification is automatically cleared.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Time when the notification is automatically cleared.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  autoDeletedTime?: number;

  /**
   * WantAgent instance to which the notification will be redirected after being clicked.
   *
   * @type { ?WantAgent }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  wantAgent?: WantAgent;

  /**
   * Extended parameter.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  extraInfo?: { [key: string]: any };

  /**
   * Extended parameter.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @since 20
   * @arkts 1.2
   */
  extraInfo?: Record<string, Object>;

  /**
   * Background color of the notification.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  color?: number;

  /**
   * Whether the notification background color can be enabled.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  colorEnabled?: boolean;

  /**
   * Whether the notification triggers an alert only once.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether the notification triggers an alert only once.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isAlertOnce?: boolean;

  /**
   * Whether to display the stopwatch.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStopwatch?: boolean;

  /**
   * Whether to display the countdown time.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isCountDown?: boolean;

  /**
   * Whether the notification is displayed as a floating icon.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isFloatingIcon?: boolean;

  /**
   * Notification label.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  label?: string;

  /**
   * Notification badge type.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  badgeIconStyle?: number;

  /**
   * Whether to display the time when the notification is delivered.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Whether to display the time when the notification is delivered.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  showDeliveryTime?: boolean;

  /**
   * Buttons in the notification. Up to two buttons are allowed.
   *
   * @type { ?Array<NotificationActionButton> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  actionButtons?: Array<NotificationActionButton>;

  /**
   * Small notification icon.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  smallIcon?: image.PixelMap;

  /**
   * Large notification icon.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  largeIcon?: image.PixelMap;

  /**
   * Overlay notification icon.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  overlayIcon?: image.PixelMap;

  /**
   * The group information for this notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   */
  /**
   * The group information for this notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  groupName?: string;

  /**
   * Read-only name of the package for which a notification is created.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly creatorBundleName?: string;

  /**
   * Read-only UID of the notification creator.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly creatorUid?: number;

  /**
   * Read-only PID of the notification creator.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly creatorPid?: number;

  /**
   * Read-only UserId of the notification creator.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly creatorUserId?: number;

  /**
   * Application instance key.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   * @deprecated since 15
   * @useinstead NotificationRequest#appInstanceKey
   */
  readonly creatorInstanceKey?: number;

  /**
   * Obtain the prompt tone resource path of the notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  sound?: string;

  /**
   * Obtains the classification of this notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  classification?: string;

  /**
   * Obtains the unique hash code of a notification in the current application.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly hashCode?: string;

  /**
   * Whether the notification can be remove.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  /**
   * Whether the notification can be remove.
   *
   * @permission ohos.permission.SET_UNREMOVABLE_NOTIFICATION
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isRemoveAllowed?: boolean;

  /**
   * Notification source. enum SourceType
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly source?: number;

  /**
   * Obtains the template of this notification.
   *
   * @type { ?NotificationTemplate }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  template?: NotificationTemplate;

  /**
   * The options to distributed notification.
   *
   * @type { ?DistributedOptions }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  distributedOption?: DistributedOptions;

  /**
   * The device ID of the notification source.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly deviceId?: string;

  /**
   * Obtains the set of identifiers for the notification.
   *
   * @type { ?NotificationFlags }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly notificationFlags?: NotificationFlags;

  /**
   * WantAgent instance to which the notification will be redirected when removing notification.
   *
   * @type { ?WantAgent }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  removalWantAgent?: WantAgent;

  /**
   * Number of notifications displayed on the app icon.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Number of notifications displayed on the app icon.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  badgeNumber?: number;

  /**
   * Whether the notification need to be agent display.
   *
   * @type { ?BundleOption }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  representativeBundle?: BundleOption;
  
  /**
   * Proxy identity of creation notification.
   * 
   * @type { ?BundleOption }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly agentBundle?: BundleOption;

  /**
   * Unified aggregation of information across applications.
   *
   * @type { ?UnifiedGroupInfo }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  unifiedGroupInfo?: UnifiedGroupInfo;

  /**
   * Notification control flags.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  notificationControlFlags?: number;

  /**
   * Application instance key.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'15', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly appInstanceKey?: string;

  /**
   * Force distributed forwarding flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  forceDistributed?: boolean;

  /**
   * Distributed forwarding flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  notDistributed?: boolean;
}

/**
 * Describes distributed options.
 *
 * @typedef DistributedOptions
 * @syscap SystemCapability.Notification.Notification
 * @since arkts {'1.1':'8', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface DistributedOptions {
  /**
   * Obtains whether is the distributed notification.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isDistributed?: boolean;

  /**
   * Obtains the types of devices to which the notification can be synchronized.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  supportDisplayDevices?: Array<string>;

  /**
   * Obtains the devices on which notifications can be open.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  supportOperateDevices?: Array<string>;

  /**
   * Obtains the remind mode of the notification. enum DeviceRemindType.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly remindType?: number;
}

/**
 * Describes notification filter.
 *
 * @typedef NotificationFilter
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationFilter {
  /**
   * BundleOption of the notification.
   *
   * @type { BundleOption }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  bundle: BundleOption;

  /**
   * Indicates the label and id of the notification.
   *
   * @type { notificationSubscribe.NotificationKey }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  notificationKey: notificationSubscribe.NotificationKey;

  /**
   * Indicates the additional information filter keys list.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  extraInfoKeys?: Array<string>;
}

/**
 * Describes notification check information.
 *
 * @typedef NotificationCheckRequest
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationCheckRequest {
  /**
   * The notification content type.
   *
   * @type { notificationManager.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentType: notificationManager.ContentType;

  /**
   * Type of the notification slot..
   *
   * @type { notificationManager.SlotType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  slotType: notificationManager.SlotType;

  /**
   * Additional information of the notification.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  extraInfoKeys: Array<string>;
}

/**
 * Unified aggregation of information across applications.
 *
 * @typedef UnifiedGroupInfo
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface UnifiedGroupInfo {
  /**
   * The key is aggregated across applications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  key?: string;

  /**
   * The title is aggregated across applications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  title?: string;

  /**
   * The content is aggregated across applications.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  content?: string;

  /**
   * Aggregation scenario name.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  sceneName?: string;

  /**
   * Other information is aggregated across applications.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  extraInfo?: { [key: string]: any };

  /**
   * Other information is aggregated across applications.
   *
   * @type { ?object }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20
   * @arkts 1.2
   */
  extraInfo?: Record<string, Object>;
}
