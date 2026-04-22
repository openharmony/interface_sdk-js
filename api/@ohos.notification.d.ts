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

import { AsyncCallback } from './@ohos.base';
import { NotificationActionButton } from './notification/notificationActionButton';
import { NotificationBasicContent } from './notification/notificationContent';
import { NotificationContent } from './notification/notificationContent';
import { NotificationLongTextContent } from './notification/notificationContent';
import { NotificationMultiLineContent } from './notification/notificationContent';
import { NotificationPictureContent } from './notification/notificationContent';
import { NotificationFlags } from './notification/notificationFlags';
import { NotificationFlagStatus } from './notification/notificationFlags';
import { NotificationRequest } from './notification/notificationRequest';
import { DistributedOptions } from './notification/notificationRequest';
import { NotificationSlot } from './notification/notificationSlot';
import { NotificationSorting } from './notification/notificationSorting';
import { NotificationSubscribeInfo } from './notification/notificationSubscribeInfo';
import { NotificationSubscriber } from './notification/notificationSubscriber';
import { SubscribeCallbackData } from './notification/notificationSubscriber';
import { EnabledNotificationCallbackData } from './notification/notificationSubscriber';
import { NotificationTemplate } from './notification/notificationTemplate';
import { NotificationUserInput } from './notification/notificationUserInput';

/**
 * The **Notification** module provides notification management capabilities, covering notifications, notification slots
 * , notification subscription, notification enabled status, and notification badge status.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module are deprecated since API version 9. You are advised to use 
 * > [@ohos.notificationManager]{@link @ohos.notificationManager:notificationManager} instead.
 * >
 * > Notification subscription and unsubscription APIs are available only to system applications.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.notificationManager:notificationManager
 */
declare namespace notification {
  /**
   * Publishes a notification. This API uses an asynchronous callback to return the result.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification. This API uses a promise to return the result.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * Publishes a notification to a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { number } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification to a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { number } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest, userId: number): Promise<void>;

  /**
   * Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.
   *
   * @param { number } id - Notification ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancel
   */
  function cancel(id: number, callback: AsyncCallback<void>): void;

  /**
   * Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { number } id - Notification ID.
   * @param { string } label - Notification label.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancel
   */
  function cancel(id: number, label: string, callback: AsyncCallback<void>): void;

  /**
   * Cancels a notification with the specified ID and optional label. This API uses a promise to return the result.
   *
   * @param { number } id - Notification ID.
   * @param { string } [label] - Notification label. This parameter is left empty by default.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancel
   */
  function cancel(id: number, label?: string): Promise<void>;

  /**
   * Cancels all notifications. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelAll
   */
  function cancelAll(callback: AsyncCallback<void>): void;

  /**
   * Cancels all notifications. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelAll
   */
  function cancelAll(): Promise<void>;

  /**
   * Adds a notification slot. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Notification slot to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Adds a notification slot. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Notification slot to add.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Adds a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } type - Type of the notification slot to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Adds a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } type - Type of the notification slot to add.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(type: SlotType): Promise<void>;

  /**
   * Adds an array of notification slots. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Notification slots to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlots
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * Adds an array of notification slots. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Notification slots to add.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlots
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of the notification slot, which can be used for social communication, service
   *     information, content consultation, and other purposes.
   * @param { AsyncCallback<NotificationSlot> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlot
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;

  /**
   * Obtains a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of the notification slot, which can be used for social communication, service
   *     information, content consultation, and other purposes.
   * @returns { Promise<NotificationSlot> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlot
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Obtains all notification slots. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlots
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Obtains all notification slots of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<NotificationSlot>> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlots
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * Removes a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of the notification slot, which can be used for social communication, service
   *     information, content consultation, and other purposes.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeSlot
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Removes a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of the notification slot, which can be used for social communication, service
   *     information, content consultation, and other purposes.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeSlot
   */
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * Removes all notification slots. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeAllSlots
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;

  /**
   * Removes all notification slots. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeAllSlots
   */
  function removeAllSlots(): Promise<void>;

  /**
   * Enumerates the notification slot types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#SlotType
   */
  export enum SlotType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#UNKNOWN_TYPE
     */
    UNKNOWN_TYPE = 0,

    /**
     * Notification slot for social communication.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#SOCIAL_COMMUNICATION
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * Notification slot for service information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#SERVICE_INFORMATION
     */
    SERVICE_INFORMATION = 2,

    /**
     * Notification slot for content consultation.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#CONTENT_INFORMATION
     */
    CONTENT_INFORMATION = 3,

    /**
     * Notification slot for other purposes.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#OTHER_TYPES
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * Enumerates the notification content types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager.SlotType#ContentType
   */
  export enum ContentType {
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_BASIC_TEXT
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_LONG_TEXT
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_PICTURE
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * Conversation notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_CONVERSATION
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_MULTILINE
     */
    NOTIFICATION_CONTENT_MULTILINE
  }

  /**
   * Enumerates the notification level.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#SlotLevel
   */
  export enum SlotLevel {
    /**
     * The notification function is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_NONE
     */
    LEVEL_NONE = 0,

    /**
     * The notification function is enabled, but the notification icon is not displayed in the status bar, with no 
     * banner or alert tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_MIN
     */
    LEVEL_MIN = 1,

    /**
     * The notification function is enabled, and the notification icon is displayed in the status bar, with no banner or
     * alert tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_LOW
     */
    LEVEL_LOW = 2,

    /**
     * The notification feature is enabled, and the notification icon is displayed in the status bar, with an alert tone
     * but no banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_DEFAULT
     */
    LEVEL_DEFAULT = 3,

    /**
     * The notification feature is enabled, and the notification icon is displayed in the status bar, with an alert tone
     * and banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_HIGH
     */
    LEVEL_HIGH = 4
  }

  /**
   * Subscribes to notifications of all applications under this user.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - Notification subscriber.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * Subscribes to a notification with the subscription information specified.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - Notification subscriber.
   * @param { NotificationSubscribeInfo } info - Notification subscription information.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#subscribe
   */
  function subscribe(
    subscriber: NotificationSubscriber,
    info: NotificationSubscribeInfo,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Subscribes to a notification with the subscription information specified.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - Notification subscriber.
   * @param { NotificationSubscribeInfo } [info] - Notification subscription information.
   * This parameter is left empty by default.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * Unsubscribes from a notification. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - Notification subscriber.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * Unsubscribes from a notification. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - Notification subscriber.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * Sets whether to enable notification for a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable notification for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Checks whether notification is enabled for a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether notification is enabled for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * Checks whether notification is enabled for this application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether notification is enabled for this application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * Checks whether notification is enabled for a specified user.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - User ID.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * The value **true** means that the notification is enabled, and **false** means the opposite.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether notification is enabled for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - User ID.
   * @returns { Promise<boolean> } Promise used to return the result.
   * The value **true** means that the notification is enabled, and **false** means the opposite.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(userId: number): Promise<boolean>;

  /**
   * Sets whether to enable the notification badge for a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable the notification badge for a specified application.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Checks whether the notification badge is enabled for a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the notification badge is enabled for a specified application.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * Sets the notification slot for a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationSlot } slot - Notification slot.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Sets the notification slot for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationSlot } slot - Notification slot.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * Obtains the notification slots of a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Obtains the notification slots of a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<Array<NotificationSlot>> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * Obtains the number of notification slots of a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void;

  /**
   * Obtains the number of notification slots of a specified application. This API uses a promise to return the result.

   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<number> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<number>;

  /**
   * Removes a notification for a specified bundle. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationKey } notificationKey - Notification key.
   * @param { RemoveReason } reason - Reason for deleting a notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Removes a notification for a specified bundle. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationKey } notificationKey - Notification key.
   * @param { RemoveReason } reason - Reason for deleting a notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>;

  /**
   * Removes a notification for a specified bundle. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - Unique notification ID. It is the value of **hashCode**
   * in the [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} object of
   * [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData} used in the
   * [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume} callback.
   * @param { RemoveReason } reason - Reason for deleting a notification.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * Removes a notification for a specified bundle. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - Unique notification ID.
   * @param { RemoveReason } reason - Reason for deleting a notification.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(hashCode: string, reason: RemoveReason): Promise<void>;

  /**
   * Removes all notifications for a specified application. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void;

  /**
   * Removes all notifications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(callback: AsyncCallback<void>): void;

  /**
   * Removes all notifications for a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(userId: number, callback: AsyncCallback<void>): void;

  /**
   * Removes all notifications for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(userId: number): Promise<void>;

  /**
   * Removes all notifications for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } [bundle] - Bundle information of the application.
   * By default, this parameter is left empty, indicating that all notifications will be removed.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(bundle?: BundleOption): Promise<void>;

  /**
   * Obtains all active notifications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getAllActiveNotifications
   */
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains all active notifications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getAllActiveNotifications
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Obtains the number of active notifications of this application. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotificationCount
   */
  function getActiveNotificationCount(callback: AsyncCallback<number>): void;

  /**
   * Obtains the number of active notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<number> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotificationCount
   */
  function getActiveNotificationCount(): Promise<number>;

  /**
   * Obtains active notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotifications
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains active notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<NotificationRequest>> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotifications
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Cancels notifications under a notification group of this application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { string } groupName - Name of the notification group, which is specified through
   *     [NotificationRequest]{@link notification.requestEnableNotification(callback: AsyncCallback<void>)} when the
   *     notification is published.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelGroup
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Cancels notifications under a notification group of this application. This API uses a promise to return the result.
   *
   * @param { string } groupName - Name of the notification group.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelGroup
   */
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * Removes notifications under a notification group of a specified application.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } groupName - Name of the notification group.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Removes notifications under a notification group of a specified application.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } groupName - Name of the notification group.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * Sets the DND time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;

  /**
   * Sets the DND time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * Sets the DND time for a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @param { number } userId - ID of the user for whom you want to set the DND time.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the DND time for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @param { number } userId - ID of the user for whom you want to set the DND time.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number): Promise<void>;

  /**
   * Obtains the DND time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the DND time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * Obtains the DND time of a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - User ID.
   * @param { AsyncCallback<DoNotDisturbDate> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the DND time of a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - User ID.
   * @returns { Promise<DoNotDisturbDate> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>;

  /**
   * Checks whether DND mode is supported. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether DND mode is supported. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(): Promise<boolean>;

  /**
   * Checks whether a specified template is supported before using
   * [NotificationTemplate](@link ./notification/notificationTemplate:NotificationTemplate) to publish a notification.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } templateName - Template name. Currently, only **downloadTemplate** is supported.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportTemplate
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified template is supported before using
   * [NotificationTemplate](@link ./notification/notificationTemplate:NotificationTemplate) to publish a notification.
   * This API uses a promise to return the result.
   *
   * @param { string } templateName - Template name. Currently, only **downloadTemplate** is supported.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportTemplate
   */
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#requestEnableNotification
   */
  function requestEnableNotification(callback: AsyncCallback<void>): void;

  /**
   * Requests notification to be enabled for this application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#requestEnableNotification
   */
  function requestEnableNotification(): Promise<void>;

  /**
   * Sets whether this device supports distributed notifications.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Whether the device supports distributed notifications.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnable
   */
  function enableDistributed(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether this device supports distributed notifications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Whether the device supports distributed notifications.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnable
   */
  function enableDistributed(enable: boolean): Promise<void>;

  /**
   * Checks whether this device supports distributed notifications. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabled
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this device supports distributed notifications. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabled
   */
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * Sets whether a specified application supports distributed notifications.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether the device supports distributed notifications.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether a specified application supports distributed notifications.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Application bundle.
   * @param { boolean } enable - Whether the device supports distributed notifications.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports distributed notifications based on the bundle.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Application bundle.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified application supports distributed notifications.
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Application bundle.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * Obtains the notification reminder type. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - Callback used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDeviceRemindType
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;

  /**
   * Obtains the notification reminder type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Promise used to return the result.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDeviceRemindType
   */
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   *
   * > **NOTE**
   * > This API is supported since API version 7 and deprecated since API version 9.
   * You are advised to use [notificationManager.BundleOption]{@link ./notification/NotificationCommonDef:BundleOption} instead.
   * 
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead .ohos.notificationManager/notificationManager#BundleOption
   */
  export interface BundleOption {
    /**
     * Bundle information of the application.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#BundleOption
     */
    bundle: string;

    /**
     * User ID. The default value is 0.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#BundleOption
     */
    uid?: number;
  }

  /**
   * > **NOTE**
   * > This API is supported since API version 7 and deprecated since API version 9. <!--Del-->You are advised to use 
   * > [notificationManager.NotificationKey]{@link @ohos.notificationSubscribe:notificationSubscribe.NotificationKey}.<!
   * > --DelEnd-->
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#NotificationKey
   */
  export interface NotificationKey {
    /**
     * Notification ID.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#NotificationKey
     */
    id: number;

    /**
     * Notification label.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#NotificationKey
     */
    label?: string;
  }

  /**
   * > **NOTE**<br>
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [notificationManager.DoNotDisturbType]{@link @ohos.notificationManager:notificationManager.DoNotDisturbType} instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#DoNotDisturbType
   */
  export enum DoNotDisturbType {
    /**
     * Non-DND.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_NONE
     */
    TYPE_NONE = 0,

    /**
     * One-shot DND at the specified time segment (only considering the hour and minute).
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_ONCE
     */
    TYPE_ONCE = 1,

    /**
     * Daily DND at the specified time segment (only considering the hour and minute).
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_DAILY
     */
    TYPE_DAILY = 2,

    /**
     * DND at the specified time segment (considering the year, month, day, hour, and minute).
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_CLEARLY
     */
    TYPE_CLEARLY = 3
  }

  /**
   * > **NOTE**<br>
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > [notificationManager.DoNotDisturbDate]{@link @ohos.notificationManager:notificationManager.DoNotDisturbDate} instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#DoNotDisturbDate
   */
  export interface DoNotDisturbDate {
    /**
     * DND time type.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbDate#type
     */
    type: DoNotDisturbType;

    /**
     * DND start time.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbDate#begin
     */
    begin: Date;

    /**
     * DND end time.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbDate#end
     */
    end: Date;
  }

  /**
   * > **NOTE**<br>
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > notificationManager.DeviceRemindType instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#DeviceRemindType
   */
  export enum DeviceRemindType {
    /**
     * The device is not in use. No notification is required.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#IDLE_DONOT_REMIND
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * The device is not in use.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#IDLE_REMIND
     */
    IDLE_REMIND = 1,

    /**
     * The device is in use. No notification is required.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#ACTIVE_DONOT_REMIND
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * The device is in use.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#ACTIVE_REMIND
     */
    ACTIVE_REMIND = 3
  }

  /**
   * > **NOTE**<br>
   * > This API is supported since API version 8 and deprecated since API version 9. You are advised to use
   * > notificationManager.SourceType instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#SourceType
   */
  export enum SourceType {
    /**
     * Normal notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SourceType#TYPE_NORMAL
     */
    TYPE_NORMAL = 0,

    /**
     * Continuous notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SourceType#TYPE_CONTINUOUS
     */
    TYPE_CONTINUOUS = 1,

    /**
     * Timed notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SourceType#TYPE_TIMER
     */
    TYPE_TIMER = 2
  }

  /**
   * > **NOTE**<br>
   * > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
   * > notificationManager.RemoveReason instead.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#RemoveReason
   */
  export enum RemoveReason {
    /**
     * The notification is removed after a click on it.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationSubscribe/notificationSubscribe.RemoveReason#CLICK_REASON_REMOVE
     */
    CLICK_REASON_REMOVE = 1,

    /**
     * The notification is removed by the user.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationSubscribe/notificationSubscribe.RemoveReason#CANCEL_REASON_REMOVE
     */
    CANCEL_REASON_REMOVE = 2
  }
}

export default notification;
