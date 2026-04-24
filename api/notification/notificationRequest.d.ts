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
/*** if arkts dynamic */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
import type { BundleOption } from './NotificationCommonDef';
/*** endif */
/*** if arkts static */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { BundleOption } from './NotificationCommonDef';
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * Describes part of the **wantAgent** information about in [NotificationRequest]{@link NotificationRequest}.
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface NotificationParameters {
  /**
   * **action** field passed in **want** when **wantAgent** is created. For details, see 
   * [action]{@link @ohos.app.ability.Want:Want}.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  wantAction?:string;

  /**
   * **uri** field passed in **want** when **wantAgent** is created. For details, see 
   * [uri]{@link @ohos.app.ability.Want:Want}.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  wantUri?:string;

  /**
   * **parameters** field passed in **want** when **wantAgent** is created. For details, see 
   * [parameters]{@link @ohos.app.ability.Want:Want}.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic
   */
  wantParameters?:Record<string, Object>;

  /**
   * **parameters** field passed in **want** when **wantAgent** is created. For details, see 
   * [parameters]{@link @ohos.app.ability.Want:Want}.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 static
   */
  wantParameters?:Record<string, RecordData>;
}

/**
 * Enumerates the event types of monitoring a geofence.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum MonitorEvent {
  /**
   * Entering a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  MONITOR_TYPE_ENTRY = 1,

  /**
   * Exiting a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  MONITOR_TYPE_LEAVE = 2
}

/**
 * Enumerates the coordinate systems of a geofence.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum CoordinateSystemType {
  /**
   * WGS84.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  COORDINATE_TYPE_WGS84 = 1,

  /**
   * GCJ02.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  COORDINATE_TYPE_GCJ02 = 2
}

/**
 * Enumerates the trigger types.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export enum TriggerType {
  /**
   * Geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  TRIGGER_TYPE_GEOFENCE = 1
}

/**
 * Defines the configuration of a geofence.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface Geofence {
  /**
   * Longitude of the geofence center. The value ranges from -180 to 180.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  longitude:double;

  /**
   * Latitude of the geofence center. The value ranges from -90 to 90.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  latitude:double;

  /**
   * Geofence radius, in meters. The value ranges from 200 to 2000.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  radius:double;

  /**
   * Delay time from geofence entry to event trigger, in seconds. 
   * The value ranges from 0 to 300. The default value is **0**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  delayTime?:int;

  /**
   * Coordinate system type of the center point.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  coordinateSystemType:CoordinateSystemType;

  /**
   * Event type for monitoring a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  monitorEvent:MonitorEvent;
}

/**
 * Defines the details for triggering a geofence.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface Trigger {
  /**
   * Trigger type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  type:TriggerType;

  /**
   * Details about a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  condition:Geofence;
  
  /**
   * Display time of a live view, in seconds. The value ranges from 15 to 1800. The default value is **900**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  displayTime?:int;
}

/**
 * The **NotificationRequest** module provides APIs for defining the notification request.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationRequest {
  /**
   * Notification content.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  content: NotificationContent;

  /**
   * Condition object. This parameter is left empty by default.<br>**System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  trigger?:Trigger;

  /**
   * Notification ID. The default value is **0**. If a notification with the same ID exists, the notification is 
   * updated. If no notification with the same ID exists, a new notification is created.
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 7 - 11]
   * @type { ?int } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  id?: int;

  /**
   * Notification priority type. The default value is **OTHER**. If this parameter is set, the notification is pinned on
   * the top and displayed in a highlighted manner in the notification center. <!--RP2--><!--RP2End-->The actual display
   * effect depends on the device capability and notification center UI style.
   * 
   * This API can be used only in the stage model.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  priorityNotificationType?: notificationManager.PriorityNotificationType;

  /**
   * Unique ID carried in a notification sent by an application, which is used for notification deduplication. If an 
   * application publishes notifications with the same **appMessageId** locally or on the cloud, the device displays 
   * only one message. Repeated notifications received later will be silenced and deduplicated, and will not be 
   * displayed or notified. The deduplication flag is valid only within 24 hours after the notification is published. 
   * After 24 hours or the device is restarted, the deduplication flag becomes invalid.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  appMessageId?: string;

  /**
   * Notification slot type. The default value is **OTHER_TYPES**.
   * 
   * This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use 
   * **notificationSlotType** instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationRequest#notificationSlotType
   */
  slotType?: notification.SlotType;

  /**
   * Notification slot type. The default value is **OTHER_TYPES**. The notification reminder mode varies depending on 
   * the notification slot type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationSlotType?: notificationManager.SlotType;

  /**
   * Not supported currently.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isOngoing?: boolean;

  /**
   * Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isUnremovable?: boolean;

  /**
   * Whether to update notifications only. The default value is **false**.
   * 
   * - **true**: If a notification with the same ID exists, the notification is updated. If no notification with the 
   * same ID exists, the update fails and no new notification is created.
   * - **false**: If a notification with the same ID exists, the notification is updated. If no notification with the 
   * same ID exists, a new notification is created.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 18 dynamic
   * @since 23 static
   */
  updateOnly?: boolean;

  /**
   * Time when the notification is sent. This API is automatically generated by the system.
   * 
   * Data format: timestamp,
   * 
   * in milliseconds.
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 7 - 11]
   * @type { ?long } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  deliveryTime?: long;

  /**
   * Whether the notification is automatically cleared when the notification carries **wantAgent** or **actionButtons**.
   * This parameter is valid only when the notification carries **wantAgent** or **actionButtons**. The default value is
   * **true**.
   * 
   * - **true**: The current notification is automatically cleared after the notification or button is tapped.
   * - **false**: The current notification is retained after the notification or button is tapped.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  tapDismissed?: boolean;

  /**
   * Scheduled time for clearing a notification. If this parameter is set, the notification will be automatically 
   * cleared after the specified time. The default value is **0**.
   * 
   * Data format: timestamp,
   * 
   * in milliseconds.
   * 
   * For example, if a notification is to be cleared after being displayed for 3 seconds (3000 ms), you can set 
   * **new Date().getTime() + 3000** to meet this requirement.
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 7 - 11]
   * @type { ?long } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  autoDeletedTime?: long;

  /**
   * Behavior intent of an application, which is triggered when a notification is clicked. This parameter is left empty 
   * by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  wantAgent?: WantAgent;

  /**
   * Extended parameters, used to provide custom services for applications. This parameter is left blank by default.
   * 
   * The key value is assigned by the system. Manual modification does not take effect. The system automatically changes
   * the value to the actual value during data transmission.
   * 
   * - **ohos.notificationManager.wantUri**: **uri** field in the [Want]{@link @ohos.app.ability.Want:Want} object, 
   * which is passed to the application when the user taps a notification. This field can be obtained via the 
   * [getActiveNotifications]{@link @ohos.notification:notification.getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>)}
   * API call.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * Extended parameters, used to provide custom services for applications. This parameter is left blank by default.
   * 
   * The key value is assigned by the system. Manual modification does not take effect. The system automatically changes
   * the value to the actual value during data transmission.
   * 
   * - **ohos.notificationManager.wantUri**: **uri** field in the [Want]{@link @ohos.app.ability.Want:Want} object, 
   * which is passed to the application when the user taps a notification. This field can be obtained via the 
   * [getActiveNotifications]{@link @ohos.notification:notification.getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>)}
   * API call.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * Extended parameters customized for the system applications to publish notifications.
   * This parameter is left empty by default.
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   */
  extendInfo?: Record<string, Object>;

  /**
   * Extended parameters customized for the system applications to publish notifications.
   * This parameter is left empty by default.
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extendInfo?: Record<string, RecordData>;

  /**
   * Background color of the notification. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  color?: long;

  /**
   * Whether the notification background color can be enabled. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  colorEnabled?: boolean;

  /**
   * Whether to send a notification only once when the notification is published or updated. The default value is 
   * **false**.
   * 
   * - **true**: A notification is sent only when the notification is published for the first time. For subsequent 
   * update, the notification mode is changed to 
   * [LEVEL_LOW]{@link @ohos.notificationManager:notificationManager.SlotLevel}.
   * - **false**: A notification is sent based on the configured notification mode.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isAlertOnce?: boolean;

  /**
   * Whether to display the stopwatch. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isStopwatch?: boolean;

  /**
   * Whether to display the countdown time. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isCountDown?: boolean;

  /**
   * Whether the notification is displayed as a floating icon in the status bar. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  isFloatingIcon?: boolean;

  /**
   * Notification label. This parameter is left empty by default.
   * 
   * The **label** field can be used independently, or used together with ID as a notification identifier. ID is 
   * preferentially used.
   * 
   * If the label is not empty when a notification is published, you need to specify the label when updating or deleting
   * the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  label?: string;

  /**
   * Notification badge type. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeIconStyle?: int;

  /**
   * Whether to display the time when the notification is delivered. Not supported currently.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  showDeliveryTime?: boolean;

  /**
   * Notification button. This parameter is left empty by default. A notification can contain a maximum of two buttons. 
   * Since API version 16, a notification can contain a maximum of three buttons for wearables.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  actionButtons?: Array<NotificationActionButton>;

  /**
   * Small notification icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot 
   * exceed 192 KB (which is obtained through 
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}). The recommended icon size 
   * is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  smallIcon?: image.PixelMap;

  /**
   * Large notification icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot 
   * exceed 192 KB (which is obtained through 
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}). The recommended icon size 
   * is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  largeIcon?: image.PixelMap;

  /**
   * Notification overlay icon. This parameter is left empty by default. The total number of the icon pixel bytes cannot
   * exceed 192 KB (which is obtained through 
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}).
   * 
   * This API takes effect only when [notificationSlotType]{@link NotificationRequest} is set to 
   * **SOCIAL_COMMUNICATION**. The recommended icon size is 128 × 128 pixels. The display effect depends on the device 
   * capability and notification center UI style.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */  
  overlayIcon?: image.PixelMap;

  /**
   * Group to which a notification belongs. If the group names of different notifications are the same, these 
   * notifications are displayed in a group. This parameter is left blank by default.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  groupName?: string;

  /**
   * Name of the application that creates the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorBundleName?: string;

  /**
   * UID of the application that creates the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorUid?: int;

  /**
   * PID used for creating the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly creatorPid?: int;

  /**
   * ID of the user who creates the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  readonly creatorUserId?: int;

  /**
   * Creator instance key.
   * This parameter is supported since API version 12 and deprecated since API version 15. You are advised to use **appInstanceKey** instead.
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamiconly
   * @deprecated since 15
   * @useinstead NotificationRequest#appInstanceKey
   */
  readonly creatorInstanceKey?: number;

  /**
   * Path of the custom application notification ringtone resource. By default, this parameter is left empty. The 
   * following two types of audio resources are supported:
   * 
   * - Resource file: Audio file preconfigured in the application. It must be stored in the **resources/rawfile** 
   * directory. To use the resource file, directly pass the file name.
   * - Sandbox file: Audio file downloaded from the network or generated by the user. It must be stored in the **files**
   * directory or its subdirectory in the EL1 area of the 
   * [sandbox file directory](docroot://file-management/app-sandbox-directory.md#application-sandbox-directory-and-application-sandbox-path)
   * . The input format is **uri::{fileUri}**, where **fileUri** is the path obtained through 
   * [getUriFromPath]{@link @ohos.file.fileuri:fileUri.getUriFromPath}. For example, if an application transfers the 
   * downloaded audio resource demo.mp3 to the sandbox file directory /data/storage/el1/base/files/, the path 
   * obtained through **getUriFromPath** is **file://{bundleName}/data/storage/el1/base/files/demo.mp3**. You can use 
   * this path to release a notification to play the audio resource downloaded by the application.
   * 
   * Supported formats: M4A, AAC, MP3, OGG, WAV, FLAC, and AMR.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * Notification category.
   * **System API**: This is a system API. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  classification?: string;

  /**
   * Unique ID of the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  readonly hashCode?: string;

  /**
   * Whether the notification can be removed. If a notification is not removable, it will not be deleted when the user touches the delete button below the notification, and it also cannot be deleted by swiping left on the notification and touching the delete button. The default value is **true**.<br> - **true**: The notification can be removed.
   * - **false**: The notification cannot be removed.
   * **System API**: This is a system API.
   * **Required permissions**: ohos.permission.SET_UNREMOVABLE_NOTIFICATION
   *
   * @permission ohos.permission.SET_UNREMOVABLE_NOTIFICATION [since 11]
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  
  isRemoveAllowed?: boolean;

  /**
   * Notification source.
   * **System API**: This is a system API. Not supported currently. 
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly source?: int;

  /**
   * Notification template. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  template?: NotificationTemplate;

  /**
   * Distributed notification options. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  distributedOption?: DistributedOptions;

  /**
   * Device ID of the notification source.
   * **System API**: This is a system API. Not supported currently.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly deviceId?: string;

  /**
   * Notification flags to be set or obtained. This parameter is left empty by default. This parameter is writable since
   * API version 23. You can set this parameter to reduce the notification reminder modes.
   *
   * @readonly [since 8 - 22]
   * @syscap SystemCapability.Notification.Notification
   * @FaAndStageModel
   * @since 8 dynamic
   * @since 23 static
   */
  notificationFlags?: NotificationFlags;

  /**
   * Behavior intent of an application, which is triggered when a notification is removed. This parameter is left empty 
   * by default.
   * 
   * Currently, redirection to UIAbility is not supported. Only common events can be published (that is, the 
   * **actionType** field of [WantAgentInfo]{@link ./wantAgent/wantAgentInfo:WantAgentInfo} is set to **4**).
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  removalWantAgent?: WantAgent;

  /**
   * Number of notifications displayed on the application icon. The value is accumulated. The default value is **0**.
   * 
   * If the value of **badgeNumber** is less than or equal to 0, the badge number is not displayed;
   * 
   * if the value is greater than 99, **99+** is displayed on the badge.
   * 
   * For example, if an application publishes three notifications, and `badgeNumber` is set to **2**, **0**, and **3** 
   * in sequence, the application displays **2**, **2**, and **5** accordingly.
   *
   * @crossplatform [since 12]
   * @type { ?number } [since 9 - 11]
   * @type { ?long } [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  badgeNumber?: long;

  /**
   * Information about the proxied bundle. This parameter is left empty by default.
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  representativeBundle?: BundleOption;

  /**
   * Information about the agent bundle for creating notifications. This parameter is left empty by default.
   * This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly agentBundle?: BundleOption;

  /**
   * Intelligent notification unification information. This parameter is left empty by default.
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  unifiedGroupInfo?: UnifiedGroupInfo;

  /**
   * Notification mode control. The default value is **0**.
   * This API can be used to reduce the notification modes of the current notification. This parameter is obtained by performing the bitwise OR operation with the enumeration of [NotificationControlFlagStatus](@link @ohos.notificationManager:notificationManager.NotificationControlFlagStatus).
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  notificationControlFlags?: long;

  /**
   * Application instance key. This parameter is left empty by default.
   * This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  readonly appInstanceKey?: string;

  /**
   * Whether notifications are forcibly displayed in all scenario across devices. The default value is **false**.
   * **NOTE**
   * This field takes effect only when the application is in the cross-device collaborative management list and **notDistributed** is set to **false**. Check whether the **collaborationFilter** field in the **notification_config.json** file contains the UID or bundle name of the application. For details about the file configuration path, see the **NOTIFICATION_CONFIG_FILE** property in [notification_config_parse.h](https://gitcode.com/openharmony/notification_distributed_notification_service/blob/master/services/ans/include/notification_config_parse.h). If yes, the application is on the cross-device collaborative management list.
   * - **true**: Notifications are displayed on all collaboration devices.
   * - **false**: Notifications are displayed on the applications that are on the collaborative management list.
   * **System API**: This is a system API.
   *
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  forceDistributed?: boolean;

  /**
   * Whether notifications are not displayed in all scenarios across devices. The default value is **false**.
   * **NOTE**
   * field takes effect.
   * - **true**: Notifications are displayed only on the local device.
   * - **false**: Notifications are displayed on all collaboration devices.
   * **System API**: This is a system API.
   *
   * @default false
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  notDistributed?: boolean;

  /**
   * Custom group notification information. This parameter is left empty by default.
   * **Model restriction**: This API can be used only in the stage model.
   * **Since**: 26.0.0
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  groupInfo?: GroupInfo;
}

/**
 * Describes options for cross-device notifications. Not supported currently.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface DistributedOptions {
  /**
   * Whether cross-device notifications are supported. The default value is **true**.
   * 
   * - **true**: cross-device notifications are supported.
   * - **false**: cross-device notifications are not supported.
   *
   * @default true
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  isDistributed?: boolean;

  /**
   * List of the devices to which the notification can be synchronized.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  supportDisplayDevices?: Array<string>;

  /**
   * List of the devices on which the notification can be opened.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  supportOperateDevices?: Array<string>;

  /**
   * Notification reminder type.
   * **System API**: This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly remindType?: int;
}

/**
 * Describes the filter criteria for querying the live view.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationFilter {
  /**
   * Bundle information of the live view.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  bundle: BundleOption;

  /**
   * Notification information, including the notification ID and label.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  notificationKey: notificationSubscribe.NotificationKey;

  /**
   * List of extra keys. If this parameter is left empty, all extra information is included.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  extraInfoKeys?: Array<string>;
}

/**
 * Describes the notification authentication information.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationCheckRequest {
  /**
   * Notification type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  contentType: notificationManager.ContentType;

  /**
   * Notification slot type. 
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  slotType: notificationManager.SlotType;

  /**
   * Extra information about the live view.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  extraInfoKeys: Array<string>;
}

/**
 * Describes the fields of notification intelligent unification information.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface UnifiedGroupInfo {
  /**
   * Unified group ID.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  key?: string;

  /**
   * Unified group title.  
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * Unified group summary.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  content?: string;

  /**
   * Name of a unification scene.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  sceneName?: string;

  /**
   * Other unification information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * Other unification information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;
}

/**
 * Defines the group notification information.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface GroupInfo {
  /**
   * Whether to use the **smallIcon** field in 
   * [NotificationRequest](@link ./notification/notificationRequest:NotificationRequest) as the group icon displayed
   * after notifications are grouped. Whether to use the **smallIcon** field as the group icon when the notification
   * is the latest one in the notification group and the **smallIcon** field is passed. The default value is **false**.
   * - **true**: yes.
   * - **false**: no.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  isGroupIcon?: boolean;
 	 
  /**
   * Group title displayed after notifications are grouped. 
   * This parameter is valid only when the notification is the latest one in the notification group.
   * This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  groupTitle?: string;
}
