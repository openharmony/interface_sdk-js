/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { NotificationActionButton as _NotificationActionButton } from './notification/notificationActionButton';
import { NotificationBasicContent as _NotificationBasicContent } from './notification/notificationContent';
import { NotificationContent as _NotificationContent } from './notification/notificationContent';
import { NotificationLongTextContent as _NotificationLongTextContent } from './notification/notificationContent';
import { NotificationMultiLineContent as _NotificationMultiLineContent } from './notification/notificationContent';
import { NotificationPictureContent as _NotificationPictureContent } from './notification/notificationContent';
import { NotificationFlags as  _NotificationFlags} from './notification/notificationFlags';
import { NotificationFlagStatus as _NotificationFlagStatus } from './notification/notificationFlags';
import { NotificationRequest as _NotificationRequest } from './notification/notificationRequest';
import { DistributedOptions as _DistributedOptions } from './notification/notificationRequest';
import { NotificationSlot as _NotificationSlot } from './notification/notificationSlot';
import { NotificationSorting as _NotificationSorting } from './notification/notificationSorting';
import { NotificationSubscribeInfo as _NotificationSubscribeInfo } from './notification/notificationSubscribeInfo';
import { NotificationSubscriber as _NotificationSubscriber } from './notification/notificationSubscriber';
import { SubscribeCallbackData as _SubscribeCallbackData } from './notification/notificationSubscriber';
import { EnabledNotificationCallbackData as _EnabledNotificationCallbackData } from './notification/notificationSubscriber';
import { NotificationTemplate as _NotificationTemplate } from './notification/notificationTemplate';
import { NotificationUserInput as _NotificationUserInput } from './notification/notificationUserInput';

/**
 * Manages notifications.
 *
 * <p>Generally, only system applications have permissions on notification subscription and unsubscription.
 * You can specify the content of a notification to be published and the content is carried by
 * {@link NotificationRequest}. A notification ID is unique in an application and must be specified
 * when using {@link NotificationRequest} to carry the notification content. If a notification
 * with this ID has been published and you need to use this ID to publish another notification,
 * the original notification will be updated. In addition, the notification ID can be used to cancel
 * a notification by calling the {@link #cancel(int)} method.
 *
 * @name notification
 * @since 7
 * @syscap SystemCapability.Notification.Notification
 * @permission N/A
 * @deprecated since 9
 * @useinstead ohos.notificationManager and ohos.notificationSubscribe
 */
declare namespace notification {
  /**
   * Publishes a notification.
   *
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param request notification request
   * @param callback callback function
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publish
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * Publishes a notification to the specified user.
   *
   * @since 8
   * @param Publishes a notification.
   * @param userId of subscriber receiving the notification
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publish
   *
   */
   function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void;
   function publish(request: NotificationRequest, userId: number): Promise<void>;

  /**
   * Publishes a representative notification.
   *
   * @since 9
   * @param request a notification.
   * @param representativeBundle bundle name of the representative
   * @param userId userid of the representative
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.publishAsBundle
   *
   */
    function publishAsBundle(request: NotificationRequest, representativeBundle: string, userId: number, callback: AsyncCallback<void>): void;
    function publishAsBundle(request: NotificationRequest, representativeBundle: string, userId: number): Promise<void>;

  /**
   * Cancels a notification with the specified ID.
   *
   * @param id of the notification to cancel, which must be unique in the application.
   * @param callback callback function
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancel
   */
  function cancel(id: number, callback: AsyncCallback<void>): void;

  /**
   * Cancels a notification with the specified label and ID.
   *
   * @param id ID of the notification to cancel, which must be unique in the application.
   * @param label Label of the notification to cancel.
   * @param callback callback function
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancel
   */
  function cancel(id: number, label: string, callback: AsyncCallback<void>): void;
  function cancel(id: number, label?: string): Promise<void>;

  /**
   * Cancels a representative notification.
   *
   * @since 9
   * @param id ID of the notification to cancel, which must be unique in the application.
   * @param representativeBundle bundle name of the representative
   * @param userId userid of the representative
   * @param callback callback function
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelAsBundle
   */
  function cancelAsBundle(id: number, representativeBundle: string, userId: number, callback: AsyncCallback<void>): void;
  function cancelAsBundle(id: number, representativeBundle: string, userId: number): Promise<void>;

  /**
   * Cancels all notifications of the current application.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelAll
   */
  function cancelAll(callback: AsyncCallback<void>): void;
  function cancelAll(): Promise<void>;

  /**
   * Creates a notification slot.
   *
   * @param slot Indicates the notification slot to be created, which is set by {@link NotificationSlot}.
   * This parameter must be specified.
   * @param callback callback function
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Creates a notification slot.
   *
   * @param slot Indicates the notification slot to be created, which is set by {@link NotificationSlot}.
   * This parameter must be specified.
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Adds a slot type.
   *
   * @param type Slot type to add.
   * @param callback callback function
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlot
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;
  function addSlot(type: SlotType): Promise<void>;

  /**
   * Creates a notification slot.
   *
   * @param slots Indicates the notification slots to be created, which is set by {@link NotificationSlot}.
   * This parameter must be specified.
   * @param callback callback function
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlots
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * Creates a notification slot.
   *
   * @param slots Indicates the notification slots to be created, which is set by {@link NotificationSlot}.
   * This parameter must be specified.
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.addSlots
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * Obtains a notification slot of the specified slot type.
   *
   * @param slotType Type of the notification slot to obtain.
   * @param callback callback function
   * @return Returns the created {@link NotificationSlot}.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlot
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Obtains all NotificationSlot objects created by the current application.
   *
   * @return Returns all notification slots of this application.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlots
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * Removes a NotificationSlot of the specified SlotType created by the current application.
   *
   * @param slotType Type of the NotificationSlot to remove.
   * @param callback callback function
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeSlot
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * Removes all NotificationSlot objects created by the current application.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeAllSlots
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;
  function removeAllSlots(): Promise<void>;

  /**
   * Describes NotificationSlot types.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.SlotType
   */
  export enum SlotType {
    /**
    * NotificationSlot of an unknown type.
    */
    UNKNOWN_TYPE = 0,

    /**
    * NotificationSlot for social communication.
    */
    SOCIAL_COMMUNICATION = 1,

    /**
    * NotificationSlot for service information.
    */
    SERVICE_INFORMATION = 2,

    /**
    * NotificationSlot for service information.
    */
    CONTENT_INFORMATION = 3,

    /**
    * NotificationSlot for other purposes.
    */
    OTHER_TYPES = 0xFFFF,
  }

  /**
   * Describes notification content types.
   *
   * @name ContentType
   * @since 7
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.ContentType
   */
  export enum ContentType {
    /**
    * Normal text notification.
    */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
    * Long text notification.
    */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
    * Picture-attached notification.
    */
    NOTIFICATION_CONTENT_PICTURE,

    /**
    * Conversation notification.
    */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
    * Multi-line text notification.
    */
    NOTIFICATION_CONTENT_MULTILINE,
  }

  /**
   * Indicates the level of the slot
   *
   * @deprecated since 9
   * @useinstead ohos.notificationManager.SlotLevel
   */
  export enum SlotLevel {
    /**
    * Indicates that the notification function is disabled.
    */
    LEVEL_NONE = 0,

    /**
    * Indicates that the notification function is enabled but notification
    * icons are not displayed in the status bar, with no banner or prompt tone.
    */
    LEVEL_MIN = 1,

    /**
    * Indicates that the notification function is enabled and notification
    * icons are displayed in the status bar, with no banner or prompt tone.
    */
    LEVEL_LOW = 2,

    /**
    * Indicates that the notification function is enabled and notification
    * icons are displayed in the status bar, with no banner but with a prompt tone.
    */
    LEVEL_DEFAULT = 3,

    /**
    * Indicates that the notification function is enabled and notification
    * icons are displayed in the status bar, with a banner and a prompt tone.
    */
    LEVEL_HIGH = 4,
  }

  /**
   * subscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * subscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo, callback: AsyncCallback<void>): void;

  /**
   * subscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * unsubscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * unsubscribe
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * enableNotification
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * enableNotification
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * isNotificationEnabled
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * isNotificationEnabled
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * isNotificationEnabled
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * isNotificationEnabled
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * Checks whether this application has permission to publish notifications under the user.
   *
   * since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isNotificationEnabled
   */
  function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void;
  function isNotificationEnabled(userId: number): Promise<boolean>;

  /**
   * displayBadge
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * displayBadge
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * isBadgeDisplayed
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * isBadgeDisplayed
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * setSlotByBundle
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * setSlotByBundle
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * getSlotsByBundle
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * getSlotsByBundle
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * getSlotNumByBundle
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void;

  /**
   * getSlotNumByBundle
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<number>;

  /**
   * remove
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * remove
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>;

  /**
   * remove
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * remove
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.remove
   */
  function remove(hashCode: string, reason: RemoveReason): Promise<void>;

  /**
   * removeAll
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
  function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void;

  /**
   * removeAll
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
  function removeAll(callback: AsyncCallback<void>): void;

  /**
   * Remove all notifications under the specified user.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe.removeAll
   */
   function removeAll(userId: number, callback: AsyncCallback<void>): void;
   function removeAll(userId: number): Promise<void>;

  /**
   * removeAll
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead notificationSubscribe.removeAll
   */
  function removeAll(bundle?: BundleOption): Promise<void>;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getAllActiveNotifications
   */
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getAllActiveNotifications
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Obtains the number of all active notifications.
   *
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getActiveNotificationCount
   */
  function getActiveNotificationCount(callback: AsyncCallback<number>): void;
  function getActiveNotificationCount(): Promise<number>;

  /**
   * Obtains an array of active notifications.
   *
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelGroup
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Cancel the notification of a specified group for this application.
   *
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.cancelGroup
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * Set the Do Not Disturb date.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDoNotDisturbDate
   */
   function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number, callback: AsyncCallback<void>): void;
   function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number): Promise<void>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDoNotDisturbDate
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @since 8
   * @systemapi Hide this for inner system use under the specified user.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDoNotDisturbDate
   */
   function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void;
   function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.supportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;
  function supportDoNotDisturbMode(): Promise<boolean>;

  /**
   * Obtains whether the template is supported by the system.
   *
   * @since 8
   * @param templateName Name of template to be Obtained
   * @param callback callback function
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isSupportTemplate
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * Request permission to send notification.
   *
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.requestEnableNotification
   */
   function requestEnableNotification(callback: AsyncCallback<void>): void;
   function requestEnableNotification(): Promise<void>;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDistributedEnable
   */
  function enableDistributed(enable: boolean, callback: AsyncCallback<void>): void;
  function enableDistributed(enable: boolean): Promise<void>;

  /**
   * Obtains whether the device supports distributed notification.
   *
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isDistributedEnabled
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * Obtains the remind modes of the notification.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.getDeviceRemindType
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   * Set whether the application slot is enabled.
   *
   * @since 9
   * @systemapi Hide this for inner system use.
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @deprecated since 9
   * @useinstead ohos.notificationManager.setNotificationEnableSlot
   */
   function enableNotificationSlot(bundle: BundleOption, type: SlotType, enable: boolean, callback: AsyncCallback<void>): void;
   function enableNotificationSlot(bundle: BundleOption, type: SlotType, enable: boolean): Promise<void>;

  /**
    * Obtains whether the application slot is enabled.
    *
    * @since 9
    * @systemapi Hide this for inner system use.
    * @permission ohos.permission.NOTIFICATION_CONTROLLER
    * @deprecated since 9
    * @useinstead ohos.notificationManager.isNotificationSlotEnabled
    */
   function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType, callback: AsyncCallback<boolean>): void;
   function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType): Promise<boolean>;

  /**
    * Set whether to sync notifications to devices that do not have the app installed.
    *
    * @since 9
    * @systemapi Hide this for inner system use.
    * @permission ohos.permission.NOTIFICATION_CONTROLLER
    * @deprecated since 9
    * @useinstead ohos.notificationManager.setSyncNotificationEnabledWithoutApp
    */
    function setSyncNotificationEnabledWithoutApp(userId: number, enable: boolean, callback: AsyncCallback<void>): void;
    function setSyncNotificationEnabledWithoutApp(userId: number, enable: boolean): Promise<void>;
  
  /**
    * Obtains whether to sync notifications to devices that do not have the app installed.
    *
    * @since 9
    * @systemapi Hide this for inner system use.
    * @permission ohos.permission.NOTIFICATION_CONTROLLER
    * @deprecated since 9
    * @useinstead ohos.notificationManager.getSyncNotificationEnabledWithoutApp
    */
   function getSyncNotificationEnabledWithoutApp(userId: number, callback: AsyncCallback<boolean>): void;
   function getSyncNotificationEnabledWithoutApp(userId: number): Promise<boolean>;

  /**
   * Describes a BundleOption.
   *
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
   * @since 8
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DoNotDisturbType
   */
  export enum DoNotDisturbType {
    /**
     * Non do not disturb type notification
     */
    TYPE_NONE = 0,

    /**
     * Execute do not disturb once in the set time period (only watch hours and minutes)
     */
    TYPE_ONCE = 1,

    /**
     * Execute do not disturb every day with a set time period (only watch hours and minutes)
     */
    TYPE_DAILY = 2,

    /**
     * Execute in the set time period (specify the time, month, day and hour)
     */
    TYPE_CLEARLY = 3,
  }

  /**
   * Describes a DoNotDisturbDate instance.
   *
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DoNotDisturbDate
   */
  export interface DoNotDisturbDate {
    /**
     * the type of the Do Not Disturb.
     *
     * @since 8
     */
    type: DoNotDisturbType;

    /**
     * the start time of the Do Not Disturb.
     *
     * @since 8
     */
    begin: Date;

    /**
     * the end time of the Do Not Disturb.
     *
     * @since 8
     */
    end: Date;
  }

  /**
   * The remind type of the nofication.
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DeviceRemindType
   */
  export enum DeviceRemindType {
    /**
     * The device is not in use, no reminder
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * The device is not in use, remind
     */
    IDLE_REMIND = 1,

    /**
     * The device is in use, no reminder
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * The device is in use, reminder
     */
    ACTIVE_REMIND = 3,
  }

  /**
   * Notification source type
   *
   * @since 8
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.SourceType
   */
  export enum SourceType {
    /**
     * General notification
     */
    TYPE_NORMAL = 0,

    /**
     * Continuous notification
     */
    TYPE_CONTINUOUS = 1,

    /**
     * Scheduled notification
     */
    TYPE_TIMER = 2,
  }

   /**
   * Reason for remove a notification
   *
   * @since 9
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.RemoveReason
   */
  export enum RemoveReason {
    /**
     * Notification clicked notification on the status bar
     */
    CLICK_REASON_REMOVE = 1,

    /**
     * User dismissal notification  on the status bar
     */
    CANCEL_REASON_REMOVE = 2,
  }

  /**
   * Describes an action button displayed in a notification.
   *
   * @since 9
   * @permission N/A
   * @syscap SystemCapability.Notification.Notification
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationActionButton
   */
  export type NotificationActionButton = _NotificationActionButton

  /**
   * Describes a normal text notification.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationBasicContent
   */
  export type NotificationBasicContent = _NotificationBasicContent

  /**
   * Describes notification types.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationContent
   */
  export type NotificationContent = _NotificationContent

  /**
   * Describes a long text notification.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationLongTextContent
   */
  export type NotificationLongTextContent = _NotificationLongTextContent

  /**
   * Describes a multi-line text notification.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationMultiLineContent
   */
  export type NotificationMultiLineContent = _NotificationMultiLineContent

  /**
   * Describes a picture-attached notification.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationPictureContent
   */
  export type NotificationPictureContent = _NotificationPictureContent

  /**
   * Describes a NotificationFlags instance.
   *
   * @since 9
   * @systemapi Hide this for inner system use.
   * @syscap SystemCapability.Notification.Notification
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationFlags
   */
  export type NotificationFlags =  _NotificationFlags

  /**
   * The status of the notification flag.
   *
   * @since 9
   * @systemapi Hide this for inner system use.
   * @syscap SystemCapability.Notification.Notification
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationFlagStatus
   */
  export type NotificationFlagStatus = _NotificationFlagStatus

  /**
   * Defines a NotificationRequest instance.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationRequest
   */
  export type NotificationRequest = _NotificationRequest

  /**
   * Describes distributed options.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.DistributedOptions
   */
  export type DistributedOptions = _DistributedOptions

  /**
   * Describes a NotificationSlot instance.
   *
   * @since 9
   * @permission N/A
   * @syscap SystemCapability.Notification.Notification
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationSlot
   */
  export type NotificationSlot = _NotificationSlot

  /**
   * Provides sorting information about an active notification.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationSorting
   */
  export type NotificationSorting = _NotificationSorting

  /**
   * Sets filter criteria of publishers for subscribing to desired notifications.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead notificationSubscribe.NotificationSubscribeInfo
   */
  export type NotificationSubscribeInfo = _NotificationSubscribeInfo

  /**
   * Provides methods that will be called back when the subscriber receives a new notification or
   * a notification is canceled.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead notificationSubscribe.NotificationSubscriber
   */
  export type NotificationSubscriber = _NotificationSubscriber

  /**
   * Provides methods that will be called back when the subscriber receives a new notification or
   * a notification is canceled.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead notificationSubscribe.SubscribeCallbackData
   */
  export type SubscribeCallbackData = _SubscribeCallbackData

  /**
   * Describes the properties of the application that the permission to send notifications has changed.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @systemapi Hide this for inner system use.
   * @deprecated since 9
   * @useinstead notificationSubscribe.EnabledNotificationCallbackData
   */
  export type EnabledNotificationCallbackData = _EnabledNotificationCallbackData

  /**
   * Describes a NotificationTemplate instance.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationTemplate
   */
  export type NotificationTemplate = _NotificationTemplate

  /**
   * Describes a NotificationUserInput instance.
   *
   * @since 9
   * @syscap SystemCapability.Notification.Notification
   * @permission N/A
   * @deprecated since 9
   * @useinstead ohos.notificationManager.NotificationUserInput
   */
  export type NotificationUserInput = _NotificationUserInput
}

export default notification;
