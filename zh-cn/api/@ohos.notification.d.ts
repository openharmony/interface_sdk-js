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
 * 本模块提供通知管理的能力，包括发布、取消发布通知，创建、获取、移除通知通道，订阅、取消订阅通知，获取通知的使能状态、角标使能状态，获取通知的相关信息等。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[@ohos.notificationManager]{@link @ohos.notificationManager:notificationManager}替代。
 * >
 * > 通知订阅和取消订阅仅对系统应用开放。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.notificationManager/notificationManager and ohos.notificationSubscribe/notificationSubscribe
 */
declare namespace notification {
  /**
   * 发布通知（callback形式）。
   *
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { AsyncCallback<void> } callback - 发布通知的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * 发布通知（Promise形式）。
   *
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * 发布通知给指定的用户。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { number } userId - 用户ID。
   * @param { AsyncCallback<void> } callback - 被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 发布通知给指定的用户。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { number } userId - 用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#publish
   */
  function publish(request: NotificationRequest, userId: number): Promise<void>;

  /**
   * 取消与指定通知ID相匹配的已发布通知（callback形式）。
   *
   * @param { number } id - 通知ID。
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancel
   */
  function cancel(id: number, callback: AsyncCallback<void>): void;

  /**
   * 通过通知ID和通知标签取消已发布的通知（callback形式）。
   *
   * @param { number } id - 通知ID。
   * @param { string } label - 通知标签。
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancel
   */
  function cancel(id: number, label: string, callback: AsyncCallback<void>): void;

  /**
   * 取消与指定通知ID相匹配的已发布通知，label可以指定也可以不指定（Promise形式）。
   *
   * @param { number } id - 通知ID。
   * @param { string } [label] - 通知标签，默认为空。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancel
   */
  function cancel(id: number, label?: string): Promise<void>;

  /**
   * 取消所有已发布的通知（callback形式）。
   *
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelAll
   */
  function cancelAll(callback: AsyncCallback<void>): void;

  /**
   * 取消所有已发布的通知（Promise形式）。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelAll
   */
  function cancelAll(): Promise<void>;

  /**
   * 创建通知渠道。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - 要创建的通知渠道对象。
   * @param { AsyncCallback<void> } callback - 表示被指定通道的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * 创建通知渠道。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - 要创建的通知渠道对象。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * 创建指定类型的通知通道（callback形式）。
   *
   * @param { SlotType } type - 要创建的通知通道的类型。
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;

  /**
   * 创建指定类型的通知通道（Promise形式）。
   *
   * @param { SlotType } type - 要创建的通知通道的类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlot
   */
  function addSlot(type: SlotType): Promise<void>;

  /**
   * 创建多个通知渠道。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - 要创建的通知渠道对象数组。数组中的元素个数为0~5。
   * @param { AsyncCallback<void> } callback - 表示被指定通道的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlots
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * 创建多个通知渠道。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - 要创建的通知渠道对象数组。数组中的元素个数为0~5。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#addSlots
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * 获取一个指定类型的通知通道（callback形式）。
   *
   * @param { SlotType } slotType - 通知渠道类型，目前分为社交通信、服务提醒、内容咨询和其他类型。
   * @param { AsyncCallback<NotificationSlot> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlot
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;

  /**
   * 获取一个指定类型的通知通道（Promise形式）。
   *
   * @param { SlotType } slotType - 通知渠道类型，目前分为社交通信、服务提醒、内容咨询和其他类型。
   * @returns { Promise<NotificationSlot> } 以Promise形式返回获取一个通知通道。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlot
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * 获取此应用程序的所有通知通道（callback形式）。
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - 以callback形式返回获取此应用程序的所有通知通道的结果。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlots
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * 获取此应用程序的所有通知通道（Promise形式）。
   *
   * @returns { Promise<Array<NotificationSlot>> } 以Promise形式返回获取此应用程序的所有通知通道的结果。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlots
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * 删除指定类型的通知通道（callback形式）。
   *
   * @param { SlotType } slotType - 通知渠道类型,目前分为社交通信、服务提醒、内容咨询和其他类型。
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeSlot
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;

  /**
   * 删除指定类型的通知通道（Promise形式）。
   *
   * @param { SlotType } slotType - 通知渠道类型,目前分为社交通信、服务提醒、内容咨询和其他类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeSlot
   */
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * 删除所有通知通道（callback形式）。
   *
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeAllSlots
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;

  /**
   * 删除所有通知通道（Promise形式）。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeAllSlots
   */
  function removeAllSlots(): Promise<void>;

  /**
   * 通知渠道类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#SlotType
   */
  export enum SlotType {
    /**
     * 未知类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#UNKNOWN_TYPE
     */
    UNKNOWN_TYPE = 0,

    /**
     * 社交类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#SOCIAL_COMMUNICATION
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * 服务类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#SERVICE_INFORMATION
     */
    SERVICE_INFORMATION = 2,

    /**
     * 内容类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#CONTENT_INFORMATION
     */
    CONTENT_INFORMATION = 3,

    /**
     * 其他类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotType#OTHER_TYPES
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * 通知内容类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#ContentType
   */
  export enum ContentType {
    /**
     * 普通类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_BASIC_TEXT
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * 长文本类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_LONG_TEXT
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * 图片类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_PICTURE
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * 社交类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_CONVERSATION
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * 多行文本类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.ContentType#NOTIFICATION_CONTENT_MULTILINE
     */
    NOTIFICATION_CONTENT_MULTILINE
  }

  /**
   * 通知级别。
   * 
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#SlotLevel
   */
  export enum SlotLevel {
    /**
     * 表示关闭通知功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_NONE
     */
    LEVEL_NONE = 0,

    /**
     * 表示通知功能已启用，但状态栏中不显示通知图标，且没有横幅或提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_MIN
     */
    LEVEL_MIN = 1,

    /**
     * 表示通知功能已启用，且状态栏中显示通知图标，但没有横幅或提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_LOW
     */
    LEVEL_LOW = 2,

    /**
     * 表示通知功能已启用，状态栏中显示通知图标，没有横幅但有提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_DEFAULT
     */
    LEVEL_DEFAULT = 3,

    /**
     * 表示通知功能已启用，状态栏中显示通知图标，有横幅和提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SlotLevel#LEVEL_HIGH
     */
    LEVEL_HIGH = 4
  }

  /**
   * 订阅当前用户下所有应用的通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { AsyncCallback<void> } callback - 订阅动作回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * 订阅通知并指定订阅信息。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { NotificationSubscribeInfo } info - 通知订阅信息。
   * @param { AsyncCallback<void> } callback - 订阅动作回调函数。
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
   * 订阅通知并指定订阅信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { NotificationSubscribeInfo } [info] - 通知订阅信息，
   * 默认为空（当为空时，表示订阅当前用户下所有应用的通知，否则表示订阅通知并指定订阅信息）。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#subscribe
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * 取消订阅（callbcak形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { AsyncCallback<void> } callback - 取消订阅动作回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * 取消订阅（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#unsubscribe
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * 设定指定应用的通知使能状态（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态。
   * @param { AsyncCallback<void> } callback - 设定通知使能回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设定指定应用的通知使能状态（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setNotificationEnable
   */
  function enableNotification(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * 获取指定应用的通知使能状态（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<boolean> } callback - 获取通知使能状态回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定应用的通知使能状态（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<boolean> } 以Promise形式返回获取指定应用的通知使能状态的结果。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * 获取通知使能状态（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - 获取通知使能状态回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * 获取通知使能状态（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } 以Promise形式返回获取通知使能状态的结果。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * 获取指定用户ID下的通知使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - 指定的用户ID。
   * @param { AsyncCallback<boolean> } callback - 获取通知使能状态回调函数（true：使能，false：禁止）。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定用户下的通知使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - 指定的用户ID。
   * @returns { Promise<boolean> } 以Promise形式返回获取通知使能状态的结果（true：使能，false：禁止）。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isNotificationEnabled
   */
  function isNotificationEnabled(userId: number): Promise<boolean>;

  /**
   * 设定指定应用的角标使能状态（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态。
   * @param { AsyncCallback<void> } callback - 设定角标使能回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设定指定应用的角标使能状态（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#displayBadge
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * 获取指定应用的角标使能状态（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<boolean> } callback - 获取角标使能状态回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定应用的角标使能状态（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<boolean> } 以Promise形式返回获取指定应用的角标使能状态。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isBadgeDisplayed
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * 设定指定应用的通知通道（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationSlot } slot - 通知通道。
   * @param { AsyncCallback<void> } callback - 设定通知通道回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * 设定指定应用的通知通道（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationSlot } slot - 通知通道。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setSlotByBundle
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * 获取指定应用的所有通知通道（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - 获取通知通道回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * 获取指定应用的所有通知通道（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<Array<NotificationSlot>> } 以Promise形式返回获取指定应用的通知通道。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotsByBundle
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * 获取指定应用的通知通道数量（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<number> } callback - 获取通知通道数量回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void;

  /**
   * 获取指定应用的通知通道数量（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<number> } 以Promise形式返回获取指定应用的通知通道数量。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getSlotNumByBundle
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<number>;

  /**
   * 删除指定通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationKey } notificationKey - 通知键值。
   * @param { RemoveReason } reason - 通知删除原因。
   * @param { AsyncCallback<void> } callback - 删除指定通知回调函数。
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
   * 删除指定通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationKey } notificationKey - 通知键值。
   * @param { RemoveReason } reason - 通知删除原因。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>;

  /**
   * 删除指定通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - 通知唯一ID。可以通过[onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume}
   * 回调的入参[SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData}获取其内部
   * [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}对象中的hashCode。

   * @param { RemoveReason } reason - 通知删除原因。
   * @param { AsyncCallback<void> } callback - 删除指定通知回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * 删除指定通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - 通知唯一ID。
   * @param { RemoveReason } reason - 通知删除原因。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#remove
   */
  function remove(hashCode: string, reason: RemoveReason): Promise<void>;

  /**
   * 删除指定应用的所有通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<void> } callback - 删除指定应用的所有通知回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void;

  /**
   * 删除所有通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<void> } callback - 删除所有通知回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(callback: AsyncCallback<void>): void;

  /**
   * 删除指定用户下的所有通知（callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - 用户ID。
   * @param { AsyncCallback<void> } callback - 删除指定用户所有通知回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(userId: number, callback: AsyncCallback<void>): void;

  /**
   * 删除指定用户下的所有通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - 用户ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(userId: number): Promise<void>;

  /**
   * 删除指定应用的所有通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } [bundle] - 指定应用的包信息。默认为空，表示删除所有通知。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#removeAll
   */
  function removeAll(bundle?: BundleOption): Promise<void>;

  /**
   * 获取当前未删除的所有通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - 获取活动通知回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getAllActiveNotifications
   */
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * 获取当前未删除的所有通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } 以Promise形式返回获取活动通知。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getAllActiveNotifications
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * 获取当前应用未删除的通知数（Callback形式）。
   *
   * @param { AsyncCallback<number> } callback - 获取未删除通知数回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotificationCount
   */
  function getActiveNotificationCount(callback: AsyncCallback<number>): void;

  /**
   * 获取当前应用未删除的通知数（Promise形式）。
   *
   * @returns { Promise<number> } 以Promise形式返回获取当前应用未删除通知数。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotificationCount
   */
  function getActiveNotificationCount(): Promise<number>;

  /**
   * 获取当前应用未删除的通知列表（Callback形式）。
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - 获取当前应用通知列表回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotifications
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * 获取当前应用未删除的通知列表（Promise形式）。
   *
   * @returns { Promise<Array<NotificationRequest>> } 以Promise形式返回获取当前应用通知列表。
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getActiveNotifications
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * 取消本应用指定组下的通知（Callback形式）。
   *
   * @param { string } groupName - 通知组名称，此名称需要在发布通知时通过
   *     [NotificationRequest]{@link notification.requestEnableNotification(callback: AsyncCallback<void>)}对象指定。
   * @param { AsyncCallback<void> } callback - 取消本应用指定组下通知的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelGroup
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;

  /**
   * 取消本应用指定组下的通知（Promise形式）。
   *
   * @param { string } groupName - 通知组名称。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#cancelGroup
   */
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * 删除指定应用的指定组下的通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { string } groupName - 通知组名称。
   * @param { AsyncCallback<void> } callback - 删除指定应用指定组下通知的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;

  /**
   * 删除指定应用的指定组下的通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { string } groupName - 通知组名称。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#removeGroupByBundle
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * 设置免打扰时间（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @param { AsyncCallback<void> } callback - 设置免打扰时间回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;

  /**
   * 设置免打扰时间（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * 指定用户设置免打扰时间（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @param { number } userId - 设置免打扰时间的用户ID。
   * @param { AsyncCallback<void> } callback - 设置免打扰时间回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 指定用户设置免打扰时间（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @param { number } userId - 设置免打扰时间的用户ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDoNotDisturbDate
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number): Promise<void>;

  /**
   * 查询免打扰时间（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - 查询免打扰时间回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * 查询免打扰时间（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } 以Promise形式返回查询到的免打扰时间。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * 查询指定用户的免打扰时间（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - 用户ID。
   * @param { AsyncCallback<DoNotDisturbDate> } callback - 查询免打扰时间回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * 查询指定用户的免打扰时间（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - 用户ID。
   * @returns { Promise<DoNotDisturbDate> } 以Promise形式返回查询到的免打扰时间。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDoNotDisturbDate
   */
  function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>;

  /**
   * 查询是否支持免打扰功能（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - 查询是否支持免打扰功能回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;

  /**
   * 查询是否支持免打扰功能（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } 以Promise形式返回获取是否支持免打扰功能的结果。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportDoNotDisturbMode
   */
  function supportDoNotDisturbMode(): Promise<boolean>;

  /**
   * 在使用[通知模板]{@link ./notification/notificationTemplate:NotificationTemplate}发布通知前，
   * 可以通过该接口查询是否支持对应的通知模板。使用callback异步回调。
   *
   * @param { string } templateName - 模板名称。当前仅支持'downloadTemplate'。
   * @param { AsyncCallback<boolean> } callback - 查询模板是否存在的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportTemplate
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 在使用[通知模板]{@link ./notification/notificationTemplate:NotificationTemplate}发布通知前，
   * 可以通过该接口查询是否支持对应的通知模板。使用Promise异步回调。
   *
   * @param { string } templateName - 模板名称。当前仅支持'downloadTemplate'。
   * @returns { Promise<boolean> } Promise方式返回模板是否存在的结果。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isSupportTemplate
   */
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * 应用请求通知使能（Callback形式）。
   *
   * @param { AsyncCallback<void> } callback - 应用请求通知使能的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#requestEnableNotification
   */
  function requestEnableNotification(callback: AsyncCallback<void>): void;

  /**
   * 应用请求通知使能（Promise形式）。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#requestEnableNotification
   */
  function requestEnableNotification(): Promise<void>;

  /**
   * 设置设备是否支持分布式通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 是否支持。
   * @param { AsyncCallback<void> } callback - 设置设备是否支持分布式通知的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnable
   */
  function enableDistributed(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置设备是否支持分布式通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 是否支持。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnable
   */
  function enableDistributed(enable: boolean): Promise<void>;

  /**
   * 查询设备是否支持分布式通知（Callback形式）。
   *
   * @param { AsyncCallback<boolean> } callback - 设备是否支持分布式通知的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabled
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * 查询设备是否支持分布式通知（Promise形式）。
   *
   * @returns { Promise<boolean> } Promise方式返回设备是否支持分布式通知的结果。
   * @syscap SystemCapability.Notification.Notification
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabled
   */
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * 设置指定应用是否支持分布式通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { boolean } enable - 是否支持。
   * @param { AsyncCallback<void> } callback - 应用程序是否支持分布式通知的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置指定应用是否支持分布式通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包。
   * @param { boolean } enable - 是否支持。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#setDistributedEnableByBundle
   */
  function enableDistributedByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * 根据应用的包获取应用程序是否支持分布式通知（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包。
   * @param { AsyncCallback<boolean> } callback - 查询指定应用是否支持分布式通知的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定应用是否支持分布式通知（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包。
   * @returns { Promise<boolean> } Promise方式返回指定应用是否支持分布式通知的结果。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#isDistributedEnabledByBundle
   */
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * 获取通知的提醒方式（Callback形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - 获取通知提醒方式的回调函数。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDeviceRemindType
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;

  /**
   * 获取通知的提醒方式（Promise形式）。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Promise方式返回获取通知提醒方式的结果。
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#getDeviceRemindType
   */
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [notificationManager.BundleOption]{@link ./notification/NotificationCommonDef:BundleOption}替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead ./notification/NotificationCommonDef:BundleOption
   */
  export interface BundleOption {
    /**
     * 应用的包信息。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#BundleOption
     */
    bundle: string;

    /**
     * 用户ID，默认为0。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#BundleOption
     */
    uid?: number;
  }

  /**
   * > **说明：**
   * > 从 API version 7开始支持，从API version 9开始废弃。<!--Del-->建议使用
   * > [notificationManager.NotificationKey]{@link @ohos.notificationSubscribe:notificationSubscribe.NotificationKey}替代。
   * > <!--DelEnd-->
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.notificationSubscribe:notificationSubscribe.NotificationKey
   */
  export interface NotificationKey {
    /**
     * 通知ID。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#NotificationKey
     */
    id: number;

    /**
     * 通知标签。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager#NotificationKey
     */
    label?: string;
  }

  /**
   * 免打扰设置的时间类型。
   * > **说明：**
   * > 从 API version 8开始支持，从API version 9开始废弃。建议使用
   * [notificationManager.DoNotDisturbType]{@link @ohos.notificationManager:notificationManager.DoNotDisturbType}替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#DoNotDisturbType
   */
  export enum DoNotDisturbType {
    /**
     * 非通知勿扰类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_NONE
     */
    TYPE_NONE = 0,

    /**
     * 以设置时间段(只看小时和分钟)一次执行勿扰。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_ONCE
     */
    TYPE_ONCE = 1,

    /**
     * 以设置时间段(只看小时和分钟)每天执行勿扰。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbType#TYPE_DAILY
     */
    TYPE_DAILY = 2,

    /**
     * 以设置时间段(明确年月日时分)执行勿扰。
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
   * 免打扰时间。
   * > **说明：**
   * > 从 API version 8开始支持，从API version 9开始废弃。建议使用
   * [notificationManager.DoNotDisturbDate]{@link @ohos.notificationManager:notificationManager.DoNotDisturbDate}替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#DoNotDisturbDate
   */
  export interface DoNotDisturbDate {
    /**
     * 免打扰设置的时间类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbDate#type
     */
    type: DoNotDisturbType;

    /**
     * 免打扰设置的起点时间。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DoNotDisturbDate#begin
     */
    begin: Date;

    /**
     * 免打扰设置的终点时间。
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
   * 通知的提醒方式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#DeviceRemindType
   */
  export enum DeviceRemindType {
    /**
     * 设备未被使用，无需提醒。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#IDLE_DONOT_REMIND
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * 提醒设备未被使用。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#IDLE_REMIND
     */
    IDLE_REMIND = 1,

    /**
     * 设备正在使用，无需提醒。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.DeviceRemindType#ACTIVE_DONOT_REMIND
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * 提醒设备正在使用。
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
   * 通知来源类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.notificationManager/notificationManager#SourceType
   */
  export enum SourceType {
    /**
     * 一般通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SourceType#TYPE_NORMAL
     */
    TYPE_NORMAL = 0,

    /**
     * 连续通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.notificationManager/notificationManager.SourceType#TYPE_CONTINUOUS
     */
    TYPE_CONTINUOUS = 1,

    /**
     * 计划通知。
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
   * 通知删除原因。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.notificationSubscribe/notificationSubscribe#RemoveReason
   */
  export enum RemoveReason {
    /**
     * 点击通知后删除通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.notificationSubscribe/notificationSubscribe.RemoveReason#CLICK_REASON_REMOVE
     */
    CLICK_REASON_REMOVE = 1,

    /**
     * 用户删除通知。
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
