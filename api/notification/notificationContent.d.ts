/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file The NotificationContent module provides APIs for defining the notification content.
 * @kit NotificationKit
 */

import image from '../@ohos.multimedia.image';
import { Resource } from '../global/resource';
import type notificationManager from '../@ohos.notificationManager';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
import { WantAgent } from '../@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * Describes the icon types.
 *
 * @syscap SystemCapability.Notification.Notification
 * @unionmember { Resource } Image resource.
 * @unionmember { image.PixelMap } Image.
 * @systemapi
 * @since 18 dynamic
 * @since 23 static
 */
type IconType = Resource | image.PixelMap;

/**
 * Describes the normal text notification.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationBasicContent {
  /**
   * Notification title. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  title: string;

  /**
   * Notification content. It cannot be empty or exceed 3,072 bytes. Excess content will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  text: string;

  /**
   * Additional information of the notification. It cannot exceed 3,072 bytes. Excess content will be truncated. This 
   * parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  additionalText?: string;

  /**
   * Picture displayed on the lock screen. This parameter is left empty by default. Currently, only the live view 
   * notification is supported. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through
   * [getPixelBytesNumber]{@link @ohos.multimedia.image:image.PixelMap.getPixelBytesNumber}). The recommended icon size 
   * is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  lockscreenPicture?: image.PixelMap;

  /**
   * Structured notification. Currently, only service reminder messages can be displayed in structured format in the 
   * notification center. This parameter is left empty by default. (The size of key or value cannot exceed 512 bytes; 
   * otherwise, the excess part will be truncated. Only a maximum of three pairs of structured data are supported.)
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  structuredText?: Map<string, string>;
}

/**
 * Describes the long text notification. This API is inherited from 
 * [NotificationBasicContent]{@link NotificationBasicContent}.
 * 
 * > **NOTE**
 * >
 * > The display effect depends on the device capability and notification center UI style.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
  /**
   * Long text of the notification. It cannot be empty or exceed 3,072 bytes. Excess content will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longText: string;

  /**
   * Brief text of the notification. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1,024 bytes. Excess content will be 
   * truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  expandedTitle: string;
}

/**
 * Enumerates the statuses of the common live view.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export enum LiveViewStatus {
  /**
   * The live view is created.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_CREATE = 0,
  /**
   * The live view is updated in incremental mode.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_INCREMENTAL_UPDATE = 1,
  /**
   * The live view is ended.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_END = 2,
  /**
   * The live view is updated in full mode.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  LIVE_VIEW_FULL_UPDATE = 3,
  /**
   * The live view is created by condition.
   * 
   * This API can be used only in the stage model.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  LIVE_VIEW_PENDING_CREATE = 4,
  /**
   * The live view is terminated by condition.
   * 
   * This API can be used only in the stage model.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  LIVE_VIEW_PENDING_END = 6
}

/**
 * Enumerates live view types.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 18 dynamic
 * @since 23 static
 */
export enum LiveViewTypes {
  /**
   * Real-time activity (progress).
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  LIVE_VIEW_ACTIVITY = 0,
  /**
   * Instant task.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  LIVE_VIEW_INSTANT = 1,
  /**
   * Long-term task.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  LIVE_VIEW_LONG_TERM = 2
}

/**
 * Describes the common live view.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationLiveViewContent extends NotificationBasicContent {
  /**
   * Notification status.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  status: LiveViewStatus;

  /**
   * If the version number stored in the database is not **0xffffffff**, the version number needs to be verified when 
   * the live view is updated or ended to ensure that the current version number is greater than the version number 
   * stored in the database. The default value is **0xffffffff**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  version?: int;

  /**
   * Extra information of the live view. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  extraInfo?: Record<string, Object>;

  /**
   * Extra information of the live view. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * Extra image information of the live view. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  pictureInfo?: Record<string, Array<image.PixelMap>>;

  /**
   * Whether the live view is updated only locally. The default value is **false**.
   * 
   * - **true**: Yes.
   * - **false**: No.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  isLocalUpdateOnly?: boolean;

  /**
   * Redirection by tapping in the auxiliary area. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extensionWantAgent?: WantAgent;
}

/**
 * Describes the multi-line text notification. This API is inherited from 
 * [NotificationBasicContent]{@link NotificationBasicContent}.
 * 
 * > **NOTE**
 * >
 * > - When the multi-line text notification and another notification form a group notification, the group notification 
 * > is displayed as a [normal text notification]{@link NotificationBasicContent} by default. After the group 
 * > notification is expanded, the value of **longTitle** is used as the title, and the value of **lines** is used as 
 * > the multi-line text content.
 * 
 * When the multi-line text notification is displayed independently, the value of **longTitle** is used as the title, 
 * and the value of **lines** is used as the multi-line text content.
 * 
 * > - The display effect depends on the device capability and notification center UI style.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
  /**
   * Brief text of the notification. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1,024 bytes. Excess content will be 
   * truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longTitle: string;

  /**
   * Multi-line text of a notification. A maximum of three lines are supported, and each line cannot exceed 1,024 bytes.
   * Excess content will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lines: Array<string>;

  /**
   * **wantAgent**s triggered when a line of text in the multi-line text is tapped. The text in different lines 
   * corresponds to different **wantAgent**s. The maximum number of lines configured for this field is equal to the 
   * value of [lines]{@link ./notification/notificationContent:NotificationMultiLineContent}. This parameter is left 
   * empty by default.
   * 
   * This is a system API.
   * 
   * ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  lineWantAgents?: Array<WantAgent>;
}

/**
 * Describes the picture-attached notification. This API is inherited from 
 * [NotificationBasicContent]{@link NotificationBasicContent}.
 * 
 * > **NOTE**
 * >
 * > The display effect depends on the device capability and notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationPictureContent extends NotificationBasicContent {
  /**
   * Brief text of the notification. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * Title of the notification in the expanded state. It cannot be empty or exceed 1,024 bytes. Excess content will be 
   * truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  expandedTitle: string;

  /**
   * Picture content of the notification. The total pixel data size of the image cannot exceed 2 MB.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  picture: image.PixelMap;
}

/**
 * Describes the system live view notification. A third-party application cannot directly create a notification of this 
 * type. After the system proxy creates a system live view, the third-party application releases a notification with the
 * same ID to update the specified content. This API is inherited from 
 * [NotificationBasicContent]{@link NotificationBasicContent}.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationSystemLiveViewContent extends NotificationBasicContent {
  /**
   * Type code, which identifies the type of the service that invokes the API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  typeCode: int;

  /**
   * Capsule of the notification. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  capsule?: NotificationCapsule;

  /**
   * Button in the notification. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  button?: NotificationButton;

  /**
   * Live view buttons (a maximum of three buttons are supported). This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  cardButtons?: Array<NotificationIconButton>;

  /**
   * Time of the notification. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  time?: NotificationTime;

  /**
   * Progress of the notification. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  progress?: NotificationProgress;

  /**
   * Live view types. The default value is **LIVE_VIEW_ACTIVITY**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  liveViewType?: LiveViewTypes;
}

/**
 * Describe the notification capsule.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationCapsule {
  /**
   * Title of the capsule, with a maximum of 200 bytes. Excess part will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * Icon of the capsule.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  icon?: image.PixelMap;

  /**
   * Background color of the capsule.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  backgroundColor?: string;

  /**
   * Extended text of the capsule. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  content?: string;

  /**
   * Display duration of the notification capsule of an instant task, in seconds. The default value is **0**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  time?: int;

  /**
   * Buttons of the notification capsule of an instant task. A maximum of two buttons are supported. This parameter is 
   * left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  capsuleButtons?: Array<NotificationIconButton>;
}

/**
 * Describes the information of a system notification button.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 18 dynamic
 * @since 23 static
 */
export interface NotificationIconButton {

  /**
   * Button ID, which is used to distinguish multiple buttons of the same notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Background image of a button.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  iconResource: IconType;

  /**
   * Text displayed on the button. This parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  text?: string;

  /**
   * Whether to hide the notification panel when the button is tapped. The default value is **false**.
   * 
   * - **true**: Yes.
   * - **false**: No.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  hidePanel?: boolean;
}

/**
 * Describes the notification button.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationButton {
  /**
   * Button names. A maximum of three names are supported.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  names?: Array<string>;

  /**
   * Button icons. A maximum of three icons are supported.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  icons?: Array<image.PixelMap>;

  /**
   * Button icon resources. A maximum of three icon resources are supported.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  iconsResource?: Array<Resource>;
}

/**
 * Describes the notification timing information.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationTime {
  /**
   * Start time, in milliseconds.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  initialTime?: int;

  /**
   * Whether to count down. The default value is **false**.
   * 
   * - **true**: Yes.
   * - **false**: No.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isCountDown?: boolean;

  /**
   * Whether to pause the progress. The default value is **false**.
   * 
   * - **true**: Yes.
   * - **false**: No.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isPaused?: boolean;

  /**
   * Whether the time is displayed in the title. The default value is **false**.
   * 
   * - **true**: Yes.
   * - **false**: No.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isInTitle?: boolean;
}

/**
 * Describes the notification progress.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationProgress {
  /**
   * Maximum progress value.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  maxValue?: int;

  /**
   * Current progress value.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  currentValue?: int;

  /**
   * Whether to show the progress in percentage. The default value is **false**.
   * 
   * - **true**: Yes.
   * - **false**: No.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isPercentage?: boolean;
}

/**
 * Describes the notification contents.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationContent {
  /**
   * Notification content type.
   * 
   * This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use 
   * **notificationContentType** instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationContent#notificationContentType
   */
  contentType?: notification.ContentType;

  /**
   * Notification content type.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationContentType?: notificationManager.ContentType;

  /**
   * Normal text.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  normal?: NotificationBasicContent;

  /**
   * Long text.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longText?: NotificationLongTextContent;

  /**
   * Multi-line text.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  multiLine?: NotificationMultiLineContent;

  /**
   * Picture-attached.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  picture?: NotificationPictureContent;

  /**
   * System live view. A third-party application cannot directly create a notification of this type. After the system 
   * proxy creates a system live view, the third-party application releases a notification with the same ID to update 
   * the specified content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  systemLiveView?: NotificationSystemLiveViewContent;

  /**
   * Common live view.
   * 
   * This is a system API.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  liveView?: NotificationLiveViewContent;
}
