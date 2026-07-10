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
 * The **NotificationContent** defines the content structure of a notification and provides content description API
 * of multiple notification types. When an application needs to publish a notification, it can select the
 * corresponding content type API to construct the notification content based on the display requirements (such as
 * plain text, long text, multi-line text, picture, or live view).
 *
 * @file Some notification types and content
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
 * Describes the basic text notification, which is used to display the title and body content. It serves as the
 * basic content structure for other notification types. Other notification types (such as long text, multi-line
 * text, picture, and live view) inherit this API and extend their own specific fields on this basis.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationBasicContent {
  /**
   * Notification title, displayed at the top of the notification. It cannot be an empty string. The size does not
   * exceed 1024 bytes, and the excess part will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  title: string;

  /**
   * Notification body content, displayed below the title. It cannot be an empty string. The size does not exceed
   * 3072 bytes, and the excess part will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  text: string;

  /**
   * Additional notification content, which supplements the notification content and is not displayed in the
   * notification center. It defaults to empty. The size does not exceed 3072 bytes, and the excess part will be
   * truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  additionalText?: string;

  /**
   * Picture displayed on the lock screen. This parameter is left empty by default. Currently, only the live view
   * notification is supported. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained
   * through getPixelBytesNumber). The recommended icon size is 128 x 128 pixels. The display effect depends on
   * the device capability and notification center UI style.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  lockscreenPicture?: image.PixelMap;

  /**
   * Structured notification. Currently, only service reminder messages can be displayed in structured format in the
   * notification center. This parameter is left empty by default. (The size of key or value cannot exceed 512
   * bytes; otherwise, the excess part will be truncated. Only a maximum of three pairs of structured data are
   * supported.)
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  structuredText?: Map<string, string>;
}

/**
 * Describes the long text notification. This API is inherited from NotificationBasicContent.
 *
 * > **NOTE**
 * >
 * > - When this notification type forms a group notification with other notifications, its display effect defaults
 * > to the collapsed state, and the displayed title and body are the **title** and **text** inherited from
 * > NotificationBasicContent. When this notification type is displayed alone and does not form a group notification
 * > with other notifications, its display effect defaults to the expanded state, where the displayed title is the
 * > expanded title **expandedTitle**, and the displayed body content is the long text **longText**.
 * >
 * > - When a user taps a group notification to view the notification details, the display effect of this
 * > notification changes to the expanded state.
 * >
 * > - The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
  /**
   * Full long text content displayed after the notification is expanded. It cannot be an empty string. The size
   * does not exceed 3072 bytes, and the excess part will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longText: string;

  /**
   * Notification summary content, which is a summary of the notification content and is not displayed in the
   * notification center. It cannot be an empty string. The size does not exceed 1024 bytes, and the excess part
   * will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * Title when the notification is expanded. It cannot be an empty string. The size does not exceed 1024 bytes,
   * and the excess part will be truncated.
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
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  LIVE_VIEW_PENDING_CREATE = 4,
  /**
   * The live view is terminated by condition.
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
 * Describes the multi-line text notification. This API is inherited from NotificationBasicContent.
 *
 * > **NOTE**
 * >
 * > - When this notification type forms a group notification with other notifications, its display effect defaults
 * > to the collapsed state, and the displayed title and body are the **title** and **text** inherited from
 * > NotificationBasicContent. When this notification type is displayed alone and does not form a group notification
 * > with other notifications, its display effect defaults to the expanded state, where the displayed title is the
 * > expanded title **longTitle**, and the multi-line text content **lines** is displayed as the body.
 * >
 * > - When a user taps a group notification to view the notification details, the display effect of this
 * > notification changes to the expanded state.
 * >
 * > - The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @crossplatform [since 12]
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
  /**
   * Notification summary content, which is a summary of the notification content and is not displayed in the
   * notification center. It cannot be an empty string. The size does not exceed 1024 bytes, and the excess part
   * will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * Title when the notification is expanded. It cannot be an empty string. The size does not exceed 1024 bytes,
   * and the excess part will be truncated.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longTitle: string;

  /**
   * List of multi-line text displayed after the notification is expanded. Each line is displayed as an independent
   * entry and supports up to three lines. Each line size does not exceed 1024 bytes, excess part will be truncated.
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
   * value of lines. This parameter is left empty by default.
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
 * Describes the picture-attached notification. This API is inherited from NotificationBasicContent.
 *
 * > **NOTE**
 * >
 * > - When this notification type forms a group notification with other notifications, its display effect defaults
 * > to the collapsed state, and the displayed title and body are the **title** and **text** inherited from
 * > NotificationBasicContent. When this notification type is displayed alone and does not form a group notification
 * > with other notifications, its display effect defaults to the expanded state, where the displayed title is the
 * > expanded title **expandedTitle**, and the displayed body is the **text** inherited from
 * > NotificationBasicContent and the picture content **picture** of this type.
 * >
 * > - When a user taps a group notification to view the notification details, the display effect of this
 * > notification changes to the expanded state.
 * >
 * > - The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationPictureContent extends NotificationBasicContent {
  /**
   * Notification summary content, which is a summary of the notification content and is not displayed in the
   * notification center. It cannot be an empty string. The size does not exceed 1024 bytes, and the excess part
   * will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  briefText: string;

  /**
   * Title when the notification is expanded. It cannot be an empty string. The size does not exceed 1024 bytes,
   * and the excess part will be truncated.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  expandedTitle: string;

  /**
   * Picture content displayed after the notification is expanded. The total bytes of the image pixels cannot exceed
   * 2 MB.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  picture: image.PixelMap;
}

/**
 * Describes the system live view notification content, which is used to display real-time status information in
 * the live view. Third-party applications are not supported to directly create this notification type. After the
 * system proxy creates a system live view notification, a third-party application can publish a notification with
 * the same ID to update the specified content. This API is inherited from NotificationBasicContent.
 *
 * > **NOTE**
 * >
 * > The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationSystemLiveViewContent extends NotificationBasicContent {
  /**
   * Type identifier for marking the caller's service type, which is used to distinguish different live view service
   * scenarios.
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
 * Describes the notification capsule, which is used to display the capsule form in the live view.
 *
 * > **NOTE**
 * >
 * > The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationCapsule {
  /**
   * Capsule title. The size does not exceed 202 bytes, and the excess part will be truncated. The value defaults to
   * empty.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  title?: string;

  /**
   * Capsule icon. The total bytes of the icon pixel does not exceed 192 KB (the total bytes of the icon pixel is
   * obtained through getPixelBytesNumber). It is recommended that the icon pixel dimensions be 128 x 128.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  icon?: image.PixelMap;

  /**
   * Capsule background color. Colors in rgb, rgba, or argb format are supported. Example of rgb format color:
   * **#ffffff**, **rgb(255, 100, 255)**. Example of rgba format color: **rgba(255, 100, 255, 0.5)**. Example of
   * argb format color: **#ff000000**. The size does not exceed 202 bytes, and the excess part will be truncated.
   * The value defaults to empty.
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
   * Display duration of the notification capsule of an instant task. The default value is **0**. Unit: second.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  time?: int;

  /**
   * Buttons of the notification capsule of an instant task. A maximum of two buttons are supported. This parameter
   * is left empty by default.
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
   * Button identifier, used to distinguish multiple different buttons for the same notification. The string length
   * cannot exceed 202 bytes, and the exceeding part will be truncated. It cannot be an empty string.
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
   * Text displayed on the button, which defaults to empty. The string length cannot exceed 202 bytes, and the
   * exceeding part will be truncated.
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
 * Describes the notification button, which is used to display an interactive button in the live view.
 *
 * > **NOTE**
 * >
 * > The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationButton {
  /**
   * List of button names. Each name corresponds to the text displayed on a notification button. A maximum of 3
   * buttons is supported. The size of each name does not exceed 202 bytes, and the excess part will be truncated.
   * The value defaults to empty.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  names?: Array<string>;

  /**
   * List of button icons, corresponding one-to-one with **names**, with each icon displayed on its corresponding
   * button. A maximum of 3 icons is supported. The total bytes of icon pixels does not exceed 192 KB (the total
   * bytes of icon pixels is obtained through getPixelBytesNumber). It is recommended that the icon pixel dimensions
   * be 128 x 128. The value defaults to empty. This parameter is mutually exclusive with **iconsResource**; only
   * one of them can be used.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  icons?: Array<image.PixelMap>;

  /**
   * List of button icon resources, corresponding one-to-one with **names** via Resource references. A maximum of 3
   * resources is supported. The value defaults to empty. This parameter is mutually exclusive with **icons**; only
   * one of them can be used.
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
 * > **NOTE**
 * >
 * > The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationTime {
  /**
   * Initial time for the timer, used to set the starting point of the timer in the Live View. The value range is
   * all non-negative integers. The default value is **0**. Unit: millisecond.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  initialTime?: int;

  /**
   * Whether it is countdown mode. The default value is **false**.
   *
   * - **true**: The time is displayed decreasing from initialTime.
   * - **false**: The time is displayed increasing from initialTime.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isCountDown?: boolean;

  /**
   * Whether the timer is paused. The default value is **false**.
   *
   * - **true**: The timer is paused at the current value.
   * - **false**: The timer runs normally.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isPaused?: boolean;

  /**
   * Whether the time information is displayed in the notification title. The default value is **false**.
   *
   * - **true**: The timer information will be embedded in the title area.
   * - **false**: The timer information is displayed in a separate area.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  isInTitle?: boolean;
}

/**
 * Describes the notification progress, which is used to display progress bar information in the live view.
 *
 * > **NOTE**
 * >
 * > The actual display effect depends on the device capabilities and the notification center UI style.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 11 dynamic
 * @since 23 static
 */
export interface NotificationProgress {
  /**
   * Maximum value of the progress. The value range is all non-negative integers.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  maxValue?: int;

  /**
   * Current value of the progress. The value range is all non-negative integers.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  currentValue?: int;

  /**
   * Whether to display the progress as a percentage. The value defaults to **false**.
   *
   * - **true**: The progress is displayed as a percentage.
   * - **false**: The progress is displayed as an absolute value.
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
   * Notification content type, used to specify the content layout type of the notification, which determines the
   * display style of the notification in the notification center. It must be used together with the corresponding
   * notification content object. For example, when this parameter is set to **NOTIFICATION_CONTENT_BASIC_TEXT**, the
   * **normal** field must be specified at the same time.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationContentType?: notificationManager.ContentType;

  /**
   * Basic notification content. This parameter is used when **notificationContentType** is
   * **NOTIFICATION_CONTENT_BASIC_TEXT**. The notification displays the title and body in a plain text style.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  normal?: NotificationBasicContent;

  /**
   * Long text notification content. This parameter is used when **notificationContentType** is
   * **NOTIFICATION_CONTENT_LONG_TEXT**. The complete long text content can be displayed after the notification is
   * expanded.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  longText?: NotificationLongTextContent;

  /**
   * Multi-line notification content. This parameter is used when **notificationContentType** is
   * **NOTIFICATION_CONTENT_MULTILINE**. The notification is displayed in a multi-line list style after expansion.
   *
   * @crossplatform [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  multiLine?: NotificationMultiLineContent;

  /**
   * Picture notification content. This parameter is used when **notificationContentType** is
   * **NOTIFICATION_CONTENT_PICTURE**. The picture can be displayed after the notification is expanded.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  picture?: NotificationPictureContent;

  /**
   * System live view notification content. Third-party applications are not supported to directly create this type
   * of notification. After a system agent creates a system live view notification, a third-party application can
   * publish a notification with the same ID to update the specified content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  systemLiveView?: NotificationSystemLiveViewContent;

  /**
   * Common live view.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  liveView?: NotificationLiveViewContent;
}
