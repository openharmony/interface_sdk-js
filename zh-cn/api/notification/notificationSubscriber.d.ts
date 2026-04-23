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
 * @file Provides methods that will be called back when the subscriber receives a new notification or a notification is canceled
 * @kit NotificationKit
 */

import { NotificationRequest } from './notificationRequest';
import { NotificationSortingMap } from './notificationSortingMap';
import type notificationManager from '../@ohos.notificationManager';
/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */
 
/**
 * 提供订阅者接收到新通知、取消通知等的回调方法。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSubscriber {
  /**
   * 新接收到的通知信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onConsume?:(data: SubscribeCallbackData) => void;

  /**
   * 需要取消的通知信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onCancel?:(data: SubscribeCallbackData) => void;

  /**
   * 最新的通知排序列表。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onUpdate?:(data: NotificationSortingMap) => void;

  /**
   * 订阅完成的回调。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onConnect?:() => void;

  /**
   * 取消订阅的回调。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onDisconnect?:() => void;

  /**
   *  服务失联的回调。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  onDestroy?:() => void;

  /**
   * 回调返回免打扰时间选项变更。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSubscriber#onDoNotDisturbChanged
   */
  onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void;

  /**
   * 回调返回免打扰时间选项变更。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void;

  /**
   * 回调返回监听到的应用信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  onEnabledNotificationChanged?:(callbackData: EnabledNotificationCallbackData) => void;

  /**
   * 返回应用通知静默提醒的使能状态变化。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onEnabledSilentReminderChanged?: EnabledSilentReminderChangedCallback;

  /**
   * 返回通知优先级总开关状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  onEnabledPriorityChanged?: (callbackData: EnabledPriorityNotificationCallbackData) => void;
 
  /**
   * 返回应用通知优先级开关状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  onEnabledPriorityByBundleChanged?: (callbackData: EnabledPriorityNotificationByBundleCallbackData) => void;

  /**
   * 回调返回监听到的应用信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  onBadgeChanged?:(data: BadgeNumberCallbackData) => void;

  /**
   * 返回应用角标的使能状态变化。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  onBadgeEnabledChanged?: BadgeEnabledChangedCallback;

  /**
   * 批量删除的通知信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  onBatchCancel?: (data: Array<SubscribeCallbackData>) => void;

  /**
   * 返回携带系统属性值的通知信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  onSystemUpdate?: SystemUpdateCallback;
}

/**
 * 通知回调内容定义。
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface SubscribeCallbackData {
  /**
   * 通知内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly request: NotificationRequest;

  /**
   * 通知排序信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly sortingMap?: NotificationSortingMap;

  /**
   * 删除原因（1:点击通知后删除通知，2:用户删除通知） 。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly reason?: int;

  /**
   * 通知声音。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly sound?: string;

  /**
   * 通知震动。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly vibrationValues?: Array<long>;
}

/**
 * 应用角标使能状态变化。
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
export interface EnabledNotificationCallbackData {
  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly bundle: string;

  /**
   * 应用的uid。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * 应用通知使能状态。
   * - true：允许。
   * - false：禁止。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  readonly enable: boolean;
}

/**
 * 应用通知静默提醒使能状态变化。
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface EnabledSilentReminderCallbackData {
  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly bundle: string;

  /**
   * 应用的uid。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly uid: int;

  /**
   * 应用通知的静默提醒开关状态。
   * - USER_MODIFIED_OFF：用户设置的关闭状态。
   * - USER_MODIFIED_ON：用户设置的开启状态。
   * - SYSTEM_DEFAULT_OFF：用户设置前的初始关闭状态。
   * - SYSTEM_DEFAULT_ON：用户设置前的初始开启状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly enableStatus: notificationManager.SwitchState;
}

/**
 * 通知优先级总开关状态。
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface EnabledPriorityNotificationCallbackData {
  /**
   * 所有通知的优先使能状态。
   * - true：允许设置为优先通知。
   * - true：允许设置为优先通知。	
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly enable: boolean;
}

/**
 * 应用通知优先级开关状态
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 23 dynamic&static
 */
export interface EnabledPriorityNotificationByBundleCallbackData {
  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly bundle: string;

  /**
   * 应用的uid。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly uid: int;

  /**
   * 应用通知的优先使能状态。
   * - DISABLE：不允许设置为优先通知。
   * - ENABLE_BY_INTELLIGENT：允许经智能识别、用户关键词匹配、应用规则匹配等方式设置为优先通知。
   * - ENABLE：应用通知均设置为优先通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly enableStatus: notificationManager.PriorityEnableStatus;
}

/**
 * 应用通知角标数量状态变化的回调函数类型。
 * 
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface BadgeNumberCallbackData {
  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundle: string;

  /**
   * 应用的uid。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * 角标个数。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly badgeNumber: int;

  /**
   * 应用实例键值。从API version 12开始支持，从API version 15开始废弃，建议使用appInstanceKey替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamiconly
   * @deprecated since 15
   * @useinstead BadgeNumberCallbackData#appInstanceKey
   */
  readonly instanceKey?: number;

  /**
   * 应用实例键值。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  readonly appInstanceKey?: string;
}

/**
 * 注册应用角标使能状态变化的回调函数类型。
 * type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 12 dynamic
 */
export interface BadgeEnabledChangedCallback {
  /**
   * 回调返回监听到的角标使能状态信息。
   *
   * @param { EnabledNotificationCallbackData } data
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  (data: EnabledNotificationCallbackData): void;
}

/**
 * type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void
 * 注册应用角标使能状态变化的回调函数类型。
 *
 * @param { EnabledNotificationCallbackData } data - 回调返回监听到的角标使能状态信息。
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void;

/**
 * type SystemUpdateCallback = (data: SubscribeCallbackData) => void
 *
 * @param { SubscribeCallbackData } data - 返回携带系统属性值的通知信息。
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export type SystemUpdateCallback = (data: SubscribeCallbackData) => void;

/**
 * 注册应用通知静默提醒使能状态变化的回调函数类型。
 * type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void
 *
 * @param { EnabledSilentReminderCallbackData } callbackData - 回调返回监听到的静默提醒使能状态信息。
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void;
