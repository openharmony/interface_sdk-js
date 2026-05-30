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
 * @file Sets filter criteria of publishers for subscribing to desired notifications
 * @kit NotificationKit
 */

import type notificationManager from '../@ohos.notificationManager';

/**
 * The **NotificationSubscribeInfo** module provides APIs for defining the information about the publisher for 
 * notification subscription.
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSubscribeInfo {
  /**
   * Bundle names of the applications whose notifications to subscribe to. If this parameter is not specified, the 
   * subscription defaults to notifications from all applications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  bundleNames?: Array<string>;

  /**
   * User ID. If this parameter is not specified, the subscription defaults to notifications from all user IDs.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * Device type. If this parameter is not specified, the subscription defaults to notifications from the current 
   * device. The value is obtained based on [device information]{@link ./../@ohos.deviceInfo:deviceInfo}.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  deviceType?: string;

  /**
   * Types of the notification slots. If this parameter is not specified, the subscription defaults to notifications of 
   * all slot types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  slotTypes?: Array<notificationManager.SlotType>;

  /**
   * Notification filtering range. The default value is **0**. The options are as follows:
   * 
   * - **0**: All notifications are included in the subscription.
   * - **1**: Filter out notifications whose slot type is 
   * [SOCIAL_COMMUNICATION]{@link ./../@ohos.notificationManager:notificationManager.SlotType} and 
   * [userInput]{@link notificationActionButton:NotificationActionButton} is empty.
   * - **2**: Filter out notifications whose slot type is 
   * [SOCIAL_COMMUNICATION]{@link ./../@ohos.notificationManager:notificationManager.SlotType} and 
   * [userInput]{@link notificationActionButton:NotificationActionButton} is not empty.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  filterLimit?: long;

  /**
   * Configuration for voice content subscription options.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  voiceContentOptions?: VoiceContentOptions;

  /**
   * Live notification image configuration item.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  pictureOptions?: PictureOptions;

  /**
   * Whether to enable notification classification. The value **true** means to enable the
   * notification classification, and **false** means the opposite.
   * Default value: Default value: false.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enableClassification?: boolean;
 
  /**
   * Whether to enable silent replay on subscribe. The value **true** means to enable the
   * silent replay on subscribe, and **false** means the opposite.
   * Default value: Default value: false.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  needSilentReplayOnSubscribe?: boolean;
}

/**
 * Describes the voice content options for notification subscriptions.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface VoiceContentOptions {
  /**
   * Whether to enable voice content generation for subscribed notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enabled?: boolean;
}

/**
 * Describes Live notification image configuration item.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface PictureOptions {
  /**
   * Subscribes to parse the image information in the extraInfo of
   * [NotificationLiveViewContent]{@link ./notification/notificationContent:NotificationLiveViewContent} for live view
   * notifications. The input parameter is the key of the image filename in extraInfo that needs to be parsed into
   * PixelMap format. When an application publishes a live view notification, the parsed image information is called
   * back to the subscriber via
   * [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume}, and the parsed image
   * information is stored in the pictureInfo of NotificationLiveViewContent.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  preparseLiveViewPicList?: string[];
}
