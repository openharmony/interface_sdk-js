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
 * Manages notifications.
 * <p>Generally, only system applications have permissions on notification subscription and unsubscribe.
 * You can specify the content of a notification to be published and the content is carried by
 * {@link NotificationRequest}. A notification ID is unique in an application and must be specified
 * when using {@link NotificationRequest} to carry the notification content. If a notification
 * with this ID has been published and you need to use this ID to publish another notification,
 * the original notification will be updated. In addition, the notification ID can be used to cancel
 * a notification by calling the {@link #cancel(int)} method.
 *
 * @namespace notification
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.notificationManager and ohos.notificationSubscribe
 */
declare namespace notification {
  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request notification request
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publish
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request notification request
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publish
   */
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request Publishes a notification.
   * @param { number } userId of subscriber receiving the notification
   * @param { AsyncCallback<void> } callback Callback method for publishing notifications.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publish
   */
  function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request Publishes a notification.
   * @param { number } userId of subscriber receiving the notification
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publish
   */
  function publish(request: NotificationRequest, userId: number): Promise<void>;

  /**
   * Cancel a notification with the specified ID.
   *
   * @param { number } id of the notification to cancel, which must be unique in the application.
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancel
   */
  function cancel(id: number, callback: AsyncCallback<void>): void;

  /**
   * Cancel a notification with the specified label and ID.
   *
   * @param { number } id ID of the notification to cancel, which must be unique in the application.
   * @param { string } label Label of the notification to cancel.
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancel
   */
  function cancel(id: number, label: string, callback: AsyncCallback<void>): void;

  /**
   * Cancel a notification with the specified label and ID.
   *
   * @param { number } id ID of the notification to cancel, which must be unique in the application.
   * @param { string } label Label of the notification to cancel.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancel
   */
  function cancel(id: number, label?: string): Promise<void>;

  /**
   * Cancels all notifications of the current application.
   *
   * @param { AsyncCallback<void> } callback The specified callback method.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelAll
   */
  function cancelAll(callback: AsyncCallback<void>): void;

  /**
   * Cancels all notifications of the current application.
   *
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelAll
   */
  function cancelAll(): Promise<void>;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot Indicates the notification slot to be created, which is set by
   *                                  {@link NotificationSlot}.This parameter must be specified.
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot Indicates the notification slot to be created, which is set by
   *                                  {@link NotificationSlot}.This parameter must be specified.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Adds a slot type.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } type Slot type to add.
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Adds a slot type.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } type Slot type to add.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(type: SlotType): Promise<void>;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots Indicates the notification slots to be created, which is set by
   *                                          {@link NotificationSlot}.This parameter must be specified.
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlots
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots Indicates the notification slots to be created, which is set by
   *                                          {@link NotificationSlot}.This parameter must be specified.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlots
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * Obtains a notification slot of the specified slot type.
   *
   * @param { SlotType } slotType Type of the notification slot to obtain.
   * @param { AsyncCallback<NotificationSlot> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlot
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;

  /**
   * Obtains a notification slot of the specified slot type.
   *
   * @param { SlotType } slotType Type of the notification slot to obtain.
   * @returns { Promise<NotificationSlot> } Returns the created {@link NotificationSlot}.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlot
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Obtains all NotificationSlot objects created by the current application.
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback Returns the result of obtaining all notification
   *                                                            channels for this application in the form of callback.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlots
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Obtains all NotificationSlot objects created by the current application.
   *
   * @returns { Promise<Array<NotificationSlot>> } Returns all notification slots of this application.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlots
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * Removes a NotificationSlot of the specified SlotType created by the current application.
   *
   * @param { SlotType } slotType Type of the NotificationSlot to remove.
   * @param { AsyncCallback<void> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeSlot
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Obtains all NotificationSlot objects created by the current application.
   *
   * @param { SlotType } slotType The types of notification channels are currently divided into social communication,
   *                              service reminders, content consulting, and other types
   * @returns { Promise<void> } Returns all notification slots of this application.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlots
   */
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * Removes all NotificationSlot objects created by the current application.
   *
   * @param { AsyncCallback<void> } callback Represents the specified callback method.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeAllSlots
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;

  /**
   * Removes all NotificationSlot objects created by the current application.
   *
   * @returns { Promise<void> } Returns all notification slots of this application.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeAllSlots
   */
  function removeAllSlots(): Promise<void>;

  /**
   * Describes NotificationSlot types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.SlotType
   */
  export enum SlotType {
    /**
     * NotificationSlot of an unknown type.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    UNKNOWN_TYPE = 0,

    /**
     * NotificationSlot for social communication.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * NotificationSlot for service information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    SERVICE_INFORMATION = 2,

    /**
     * NotificationSlot for service information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    CONTENT_INFORMATION = 3,

    /**
     * NotificationSlot for other purposes.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * Describes notification content types.
   *
   * @enum { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.ContentType
   */
  export enum ContentType {
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * Conversation notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    NOTIFICATION_CONTENT_MULTILINE
  }

  /**
   * Indicates the level of the slot
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.SlotLevel
   */
  export enum SlotLevel {
    /**
     * Indicates that the notification function is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    LEVEL_NONE = 0,

    /**
     * Indicates that the notification function is enabled but notification
     * icons are not displayed in the status bar, with no banner or prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    LEVEL_MIN = 1,

    /**
     * Indicates that the notification function is enabled and notification
     * icons are displayed in the status bar, with no banner or prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    LEVEL_LOW = 2,

    /**
     * Indicates that the notification function is enabled and notification
     * icons are displayed in the status bar, with no banner but with a prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    LEVEL_DEFAULT = 3,

    /**
     * Indicates that the notification function is enabled and notification
     * icons are displayed in the status bar, with a banner and a prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     */
    LEVEL_HIGH = 4
  }

  /**
   * subscribe
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber Notification subscription object.
   * @param { AsyncCallback<void> } callback Subscription action callback parameters.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * subscribe
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber Notification subscription object.
   * @param { NotificationSubscribeInfo } info Notification subscription information.
   * @param { AsyncCallback<void> } callback Subscription Action Callback Function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.subscribe
   */
  function subscribe(
    subscriber: NotificationSubscriber,
    info: NotificationSubscribeInfo,
    callback: AsyncCallback<void>
  ): void;

  /**
   * subscribe
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber Notification subscription object.
   * @param { NotificationSubscribeInfo } info Notification subscription information.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * unsubscribe
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber Notification subscription object.
   * @param { AsyncCallback<void> } callback Unsubscribe Action Callback Function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * unsubscribe
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber Subscription action callback parameters.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * enableNotification
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { boolean } enable Enabling state.
   * @param { AsyncCallback<void> } callback Set notification enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * enableNotification
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { boolean } enable Enabling state.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * isNotificationEnabled
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { AsyncCallback<boolean> } callback Get notification enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * isNotificationEnabled
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @returns { Promise<boolean> } Returns the result of obtaining notification enable status in the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * isNotificationEnabled
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback Get notification enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * isNotificationEnabled
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Returns the result of obtaining notification enable status in the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * Checks whether this application has permission to publish notifications under the user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId userId
   * @param { AsyncCallback<boolean> } callback Get notification enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this application has permission to publish notifications under the user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId userId
   * @returns { Promise<boolean> } Returns the result of obtaining notification enable status in the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(userId: number): Promise<boolean>;

  /**
   * displayBadge
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { boolean } enable Enabling state.
   * @param { AsyncCallback<void> } callback Set the corner marker enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * displayBadge
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { boolean } enable Enabling state.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * isBadgeDisplayed
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { AsyncCallback<boolean> } callback Set the corner marker enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * isBadgeDisplayed
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @returns { Promise<boolean> } Returns the result of obtaining notification enable status in the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * setSlotByBundle
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { NotificationSlot } slot Notification channel.
   * @param { AsyncCallback<void> } callback Set notification channel callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * setSlotByBundle
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { NotificationSlot } slot Notification channel.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * getSlotsByBundle
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback Set the corner marker enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * getSlotsByBundle
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @returns { Promise<Array<NotificationSlot>> } Returns the notification channel of the specified application in
   * the form of a promise.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * getSlotNumByBundle
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { AsyncCallback<number> } callback Set the corner marker enable callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void;

  /**
   * getSlotNumByBundle
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @returns { Promise<number> } Returns the number of notification channels for the specified application
   *                              in the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<number>;

  /**
   * remove
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { NotificationKey } notificationKey Notification Key Value
   * @param { RemoveReason } reason Reason for notification deletion.
   * @param { AsyncCallback<void> } callback Delete the specified notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void;

  /**
   * remove
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { NotificationKey } notificationKey Notification Key Value
   * @param { RemoveReason } reason Reason for notification deletion.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>;

  /**
   * remove
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode The unique ID of the notification can be obtained through the input parameter
   * SubscribeCallbackData of the onConsumer callback to obtain the hashCode in its internal NotificationRequest object
   * @param { RemoveReason } reason Reason for notification deletion.
   * @param { AsyncCallback<void> } callback Delete the specified notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * remove
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode Notification unique ID.
   * @param { RemoveReason } reason Reason for notification deletion.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(hashCode: string, reason: RemoveReason): Promise<void>;

  /**
   * removeAll
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { AsyncCallback<void> } callback Delete the specified notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
  function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void;

  /**
   * removeAll
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<void> } callback Delete the specified notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
  function removeAll(callback: AsyncCallback<void>): void;

  /**
   * Remove all notifications under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId userId
   * @param { AsyncCallback<void> } callback Delete the specified notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
  function removeAll(userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove all notifications under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId userId
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
  function removeAll(userId: number): Promise<void>;

  /**
   * removeAll
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead notificationSubscribe.removeAll
   */
  function removeAll(bundle?: BundleOption): Promise<void>;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback Gets the activity notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getAllActiveNotifications
   */
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } Return in the form of Promise to obtain activity notifications.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getAllActiveNotifications
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Obtains the number of all active notifications.
   *
   * @param { AsyncCallback<number> } callback Callback function to obtain the number of undeleted notifications.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getActiveNotificationCount
   */
  function getActiveNotificationCount(callback: AsyncCallback<number>): void;

  /**
   * Obtains the number of all active notifications.
   *
   * @returns { Promise<number> } Returns the number of undeleted notifications for the current application as promise.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getActiveNotificationCount
   */
  function getActiveNotificationCount(): Promise<number>;

  /**
   * Obtains an array of active notifications.
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback Retrieve the callback function for the current
   *                                                               application notification list.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelGroup
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains an array of active notifications.
   *
   * @returns { Promise<Array<NotificationRequest>> } Return to obtain the current application in the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelGroup
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Cancel the notification of a specified group for this application.
   *
   * @param { string } groupName Notification group name, which needs to be specified through the NotificationRequest
   *                             object when publishing notifications.
   * @param { AsyncCallback<void> } callback Cancel the callback function for notifications under the specified group
   * of this application.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelGroup
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Cancel the notification of a specified group for this application.
   *
   * @param { string } groupName Notification group name.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelGroup
   */
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { string } groupName Notification group name.
   * @param { AsyncCallback<void> } callback Delete the specified notification callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Specify the package information for the application.
   * @param { string } groupName Notification group name.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date Disturbance free time option.
   * @param { AsyncCallback<void> } callback Set the undisturbed time callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;

  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date Disturbance free time option.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date Disturbance free time option.
   * @param { number } userId userId
   * @param { AsyncCallback<void> } callback Set the undisturbed time callback function
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date Disturbance free time option.
   * @param { number } userId userId
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number): Promise<void>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback Query the undisturbed time callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDoNotDisturbDate
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Return in the form of Promise to obtain the queried uninterrupted time.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDoNotDisturbDate
   */
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId userId
   * @param { AsyncCallback<DoNotDisturbDate> } callback Query the undisturbed time callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDoNotDisturbDate
   */
  function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId
   * @returns { Promise<DoNotDisturbDate> } Return in the form of Promise to obtain the queried uninterrupted time.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDoNotDisturbDate
   */
  function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback Check if callback function for anti-interference function is supported.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isSupportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Return the result in the form of Promise to obtain whether the anti-interference
   *                               function is supported.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isSupportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(): Promise<boolean>;

  /**
   * Obtains whether the template is supported by the system.
   *
   * @param { string } templateName Name of template to be Obtained
   * @param { AsyncCallback<boolean> } callback callback function
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isSupportTemplate
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the template is supported by the system.
   *
   * @param { string } templateName Name of template to be Obtained
   * @returns { Promise<boolean> } The Promise method returns the result of whether the template exists.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isSupportTemplate
   */
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * Request permission to send notification.
   *
   * @param { AsyncCallback<void> } callback Application Request Notification Enable Callback Function.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.requestEnableNotification
   */
  function requestEnableNotification(callback: AsyncCallback<void>): void;

  /**
   * Request permission to send notification.
   *
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.requestEnableNotification
   */
  function requestEnableNotification(): Promise<void>;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable support or not.
   * @param { AsyncCallback<void> } callback Set whether the device supports callback functions for distributed notifications.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDistributedEnable
   */
  function enableDistributed(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable support or not.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDistributedEnable
   */
  function enableDistributed(enable: boolean): Promise<void>;

  /**
   * Obtains whether the device supports distributed notification.
   *
   * @param { AsyncCallback<boolean> } callback Set whether the device supports callback functions for distributed
   *                                            notifications.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isDistributedEnabled
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the device supports distributed notification.
   *
   * @returns { Promise<boolean> } Returns the result of obtaining whether distributed notifications are supported in
   *                               the form of Promise.
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isDistributedEnabled
   */
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle Package information for the application.
   * @param { boolean } enable support or not.
   * @param { AsyncCallback<void> } callback Does application support callback functions for distributed notifications.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle package of application.
   * @param { boolean } enable support or not.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle package of application.
   * @param { AsyncCallback<boolean> } callback Query whether callback function for distributed notifications
   *                                            is supported.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle package of application.
   * @returns { Promise<boolean> } The Promise method returns the result of whether the specified application supports
   *                               distributed notifications.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback Get notification reminder callback function.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDeviceRemindType
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;

  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } The Promise method returns the result of the notification reminder method.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDeviceRemindType
   */
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   * Describes a BundleOption.
   *
   * @interface BundleOption
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.BundleOption
   */
  export interface BundleOption {
    bundle: string;
    uid?: number;
  }

  /**
   * Describes a NotificationKey, which can be used to identify a notification.
   *
   * @interface NotificationKey
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationKey
   */
  export interface NotificationKey {
    id: number;
    label?: string;
  }

  /**
   * The type of the Do Not Disturb.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DoNotDisturbType
   */
  export enum DoNotDisturbType {
    /**
     * Non do not disturb type notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_NONE = 0,

    /**
     * Execute do not disturb once in the set time period (only watch hours and minutes)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_ONCE = 1,

    /**
     * Execute do not disturb every day with a set time period (only watch hours and minutes)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_DAILY = 2,

    /**
     * Execute in the set time period (specify the time, month, day and hour)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_CLEARLY = 3
  }

  /**
   * Describes a DoNotDisturbDate instance.
   *
   * @interface DoNotDisturbDate
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DoNotDisturbDate
   */
  export interface DoNotDisturbDate {
    /**
     * the type of the Do Not Disturb.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    type: DoNotDisturbType;

    /**
     * the start time of the Do Not Disturb.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    begin: Date;

    /**
     * the end time of the Do Not Disturb.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    end: Date;
  }

  /**
   * The remind type of the notification.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DeviceRemindType
   */
  export enum DeviceRemindType {
    /**
     * The device is not in use, no reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * The device is not in use, remind
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    IDLE_REMIND = 1,

    /**
     * The device is in use, no reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * The device is in use, reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    ACTIVE_REMIND = 3
  }

  /**
   * Notification source type
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.SourceType
   */
  export enum SourceType {
    /**
     * General notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_NORMAL = 0,

    /**
     * Continuous notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_CONTINUOUS = 1,

    /**
     * Scheduled notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     */
    TYPE_TIMER = 2
  }

  /**
   * Reason for remove a notification
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager.RemoveReason
   */
  export enum RemoveReason {
    /**
     * Notification clicked notification on the status bar.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 7
     * @deprecated since 9
     */
    CLICK_REASON_REMOVE = 1,

    /**
     * User dismissal notification  on the status bar
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 7
     * @deprecated since 9
     */
    CANCEL_REASON_REMOVE = 2
  }
}

export default notification;
