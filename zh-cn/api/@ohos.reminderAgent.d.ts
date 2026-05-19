/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @file 后台代理提醒
 * @kit BackgroundTasksKit
 */

import { AsyncCallback } from './@ohos.base';
import notification from './@ohos.notification';
import { NotificationSlot } from './notification/notificationSlot';

/**
 * 本模块提供后台代理提醒的能力。
 * 
 * 开发应用时，开发者可以调用相关接口创建定时提醒，包括倒计时、日历、闹钟这三类提醒类型。使用后台代理提醒能力后，应用被冻结或退出后，计时和弹出提醒的功能将被后台系统服务代理。
 * 
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃，建议使用
 * > [@ohos.reminderAgentManager (后台代理提醒)]{@link @ohos.reminderAgentManager:reminderAgentManager}替代。
 *
 * @syscap SystemCapability.Notification.ReminderAgent
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.reminderAgentManager:reminderAgentManager
 */
declare namespace reminderAgent {
  /**
   * 发布一个后台代理提醒，使用回调的方式实现异步调用，该方法需要申请通知弹窗权限
   * [Notification.requestEnableNotification]{@link @ohos.notification:notification.requestEnableNotification(callback: AsyncCallback<void>)}
   * 后才能调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.publishReminder]{@link @ohos.reminderAgentManager:reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   * > 替代。
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - 需要发布的提醒实例。
   * @param { AsyncCallback<number> } callback - 异步回调，返回当前发布的提醒的id。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)
   */
  function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<number>): void;

  /**
   * 发布一个后台代理提醒，使用Promise方式实现异步调用，该方法需要申请通知弹窗权限
   * [Notification.requestEnableNotification]{@link @ohos.notification:notification.requestEnableNotification(callback: AsyncCallback<void>)}
   * 后才能调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.publishReminder]{@link @ohos.reminderAgentManager:reminderAgentManager.publishReminder(reminderReq: ReminderRequest)}
   * > 替代。
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq Indicates the reminder instance to publish.
   * @returns { Promise<number> } reminder id.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.publishReminder(reminderReq: ReminderRequest)
   */
  function publishReminder(reminderReq: ReminderRequest): Promise<number>;

  /**
   * 取消指定id的提醒，使用回调的方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.cancelReminder]{@link @ohos.reminderAgentManager:reminderAgentManager.cancelReminder(reminderId: int, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { number } reminderId - 目标reminder的id号。
   * @param { AsyncCallback<void> } callback - 异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.cancelReminder(reminderId: int, callback: AsyncCallback<void>)
   */
  function cancelReminder(reminderId: number, callback: AsyncCallback<void>): void;

  /**
   * 取消指定id的提醒，使用Promise方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.cancelReminder]{@link @ohos.reminderAgentManager:reminderAgentManager.cancelReminder(reminderId: int)}
   * > 替代。
   *
   * @param { number } reminderId - 目标reminder的id号。
   * @returns { Promise<void> } Promise类型异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.cancelReminder(reminderId: int)
   */
  function cancelReminder(reminderId: number): Promise<void>;

  /**
   * 获取当前应用已设置的所有有效（未过期）的提醒，使用回调的方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.getValidReminders]{@link @ohos.reminderAgentManager:reminderAgentManager.getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>)}
   * > 替代。
   *
   * @param { AsyncCallback<Array<ReminderRequest>> } callback - 异步回调，返回当前应用已设置的所有有效（未过期）的提醒。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>)
   */
  function getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>): void;

  /**
   * 获取当前应用已设置的所有有效（未过期）的提醒，使用Promise方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.getValidReminders]{@link @ohos.reminderAgentManager:reminderAgentManager.getValidReminders()}
   * > 替代。
   *
   * @returns { Promise<Array<ReminderRequest>> } 返回当前应用已设置的所有有效（未过期）的提醒。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.getValidReminders()
   */
  function getValidReminders(): Promise<Array<ReminderRequest>>;

  /**
   * 取消当前应用所有的提醒，使用回调的方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.cancelAllReminders]{@link @ohos.reminderAgentManager:reminderAgentManager.cancelAllReminders(callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { AsyncCallback<void> } callback - 异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.cancelAllReminders(callback: AsyncCallback<void>)
   */
  function cancelAllReminders(callback: AsyncCallback<void>): void;

  /**
   * 取消当前应用所有的提醒，使用Promise方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.cancelAllReminders]{@link @ohos.reminderAgentManager:reminderAgentManager.cancelAllReminders()}
   * > 替代。
   *
   * @returns { Promise<void> } Promise类型异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.cancelAllReminders()
   */
  function cancelAllReminders(): Promise<void>;

  /**
   * 添加一个NotificationSlot，使用回调的方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.addNotificationSlot]{@link @ohos.reminderAgentManager:reminderAgentManager.addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { NotificationSlot } slot - notification.slot实例，仅支持设置其type属性。
   * @param { AsyncCallback<void> } callback - 异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>)
   */
  function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * 添加一个NotificationSlot，使用Promise方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.addNotificationSlot]{@link @ohos.reminderAgentManager:reminderAgentManager.addNotificationSlot(slot: NotificationSlot)}
   * > 替代。
   *
   * @param { NotificationSlot } slot - notification.slot实例，仅支持设置其type属性。
   * @returns { Promise<void> } Promise类型异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.addNotificationSlot(slot: NotificationSlot)
   */
  function addNotificationSlot(slot: NotificationSlot): Promise<void>;

  /**
   * 删除目标NotificationSlot，使用callback方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.removeNotificationSlot]{@link @ohos.reminderAgentManager:reminderAgentManager.removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { notification.SlotType } slotType - 目标notification.slot的类型。
   * @param { AsyncCallback<void> } callback - 异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>)
   */
  function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void;

  /**
   * 删除目标NotificationSlot，使用Promise方式实现异步调用。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.removeNotificationSlot]{@link @ohos.reminderAgentManager:reminderAgentManager.removeNotificationSlot(slotType: notification.SlotType)}
   * > 替代。
   *
   * @param { notification.SlotType } slotType - 目标notification.slot的类型。
   * @returns { Promise<void> } Promise类型异步回调。
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.removeNotificationSlot(slotType: notification.SlotType)
   */
  function removeNotificationSlot(slotType: notification.SlotType): Promise<void>;

  /**
   * 按钮的类型。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ActionButtonType]{@link @ohos.reminderAgentManager:reminderAgentManager.ActionButtonType}替代
   * > 。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ActionButtonType
   */
  export enum ActionButtonType {
    /**
     * 表示关闭提醒的按钮。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_CLOSE
     */
    ACTION_BUTTON_TYPE_CLOSE = 0,

    /**
     * 表示延迟提醒的按钮。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_SNOOZE
     */
    ACTION_BUTTON_TYPE_SNOOZE = 1
  }

  /**
   * 提醒的类型。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ReminderType]{@link @ohos.reminderAgentManager:reminderAgentManager.ReminderType}替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ReminderType
   */
  export enum ReminderType {
    /**
     * 表示提醒类型：倒计时。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderType.REMINDER_TYPE_TIMER
     */
    REMINDER_TYPE_TIMER = 0,

    /**
     * 表示提醒类型：日历。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderType.REMINDER_TYPE_CALENDAR
     */
    REMINDER_TYPE_CALENDAR = 1,

    /**
     * 表示提醒类型：闹钟。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderType.REMINDER_TYPE_ALARM
     */
    REMINDER_TYPE_ALARM = 2
  }

  /**
   * 用于设置弹出的提醒通知信息上显示的按钮类型和标题。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ActionButton]{@link @ohos.reminderAgentManager:reminderAgentManager.ActionButtonType}替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ActionButtonType
   */
  interface ActionButton {
    /**
     * 按钮显示的标题。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ActionButton.title
     */
    title: string;

    /**
     * 按钮的类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ActionButton.type
     */
    type: ActionButtonType;
  }

  /**
   * 点击提醒通知后跳转的目标ability信息。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.WantAgent]{@link @ohos.reminderAgentManager:reminderAgentManager.WantAgent}替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.WantAgent
   */
  interface WantAgent {
    /**
     * 指明点击提醒通知栏后跳转的目标HAP名。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.WantAgent.pkgName
     */
    pkgName: string;

    /**
     * 指明点击提醒通知栏后跳转的目标ability名称。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.WantAgent.abilityName
     */
    abilityName: string;
  }

  /**
   * 全屏显示提醒到达时自动拉起的目标ability信息，该接口预留。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.MaxScreenWantAgent]{@link @ohos.reminderAgentManager:reminderAgentManager.MaxScreenWantAgent}
   * > 替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.MaxScreenWantAgent
   */
  interface MaxScreenWantAgent {
    /**
     * 指明提醒到达时自动拉起的目标HAP名（如果设备在使用中，则只弹出通知横幅框）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.MaxScreenWantAgent.pkgName
     */
    pkgName: string;

    /**
     * 指明提醒到达时自动拉起的目标ability名（如果设备在使用中，则只弹出通知横幅框）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.MaxScreenWantAgent.abilityName
     */
    abilityName: string;
  }

  /**
   * 提醒实例对象，用于设置提醒类型、响铃时长等具体信息。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ReminderRequest]{@link @ohos.reminderAgentManager:reminderAgentManager.ReminderRequest}替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ReminderRequest
   */
  interface ReminderRequest {
    /**
     * 指明提醒类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.reminderType
     */
    reminderType: ReminderType;

    /**
     * 弹出的提醒通知栏中显示的按钮（参数可选，支持0/1/2个按钮）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.actionButton
     */
    actionButton?: [ActionButton?, ActionButton?];

    /**
     * 点击通知后需要跳转的目标ability信息。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.wantAgent
     */
    wantAgent?: WantAgent;

    /**
     * 提醒到达时跳转的目标包。如果设备正在使用中，则弹出一个通知框。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.maxScreenWantAgent
     */
    maxScreenWantAgent?: MaxScreenWantAgent;

    /**
     * 指明响铃时长（单位：秒），默认1秒。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.ringDuration
     */
    ringDuration?: number;

    /**
     * 指明延迟提醒次数，默认0次。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.snoozeTimes
     */
    snoozeTimes?: number;

    /**
     * 执行延迟提醒间隔（单位：秒），默认0秒。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.timeInterval
     */
    timeInterval?: number;

    /**
     * 指明提醒标题。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.title
     */
    title?: string;

    /**
     * 指明提醒内容。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.content
     */
    content?: string;

    /**
     * 指明提醒过期后需要显示的内容。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.expiredContent
     */
    expiredContent?: string;

    /**
     * 指明延迟提醒时需要显示的内容。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.snoozeContent
     */
    snoozeContent?: string;

    /**
     * 指明提醒使用的通知的id号，相同id号的提醒会覆盖。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.notificationId
     */
    notificationId?: number;

    /**
     * 指明提醒的slot类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequest.slotType
     */
    slotType?: notification.SlotType;
  }

  /**
   * 日历实例对象，用于设置提醒的时间。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ReminderRequestCalendar]{@link @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestCalendar}
   * > 替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestCalendar
   */
  interface ReminderRequestCalendar extends ReminderRequest {
    /**
     * 指明提醒的目标时间。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestCalendar.dateTime
     */
    dateTime: LocalDateTime;

    /**
     * 指明重复提醒的月份。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestCalendar.repeatMonths
     */
    repeatMonths?: Array<number>;

    /**
     * 指明重复提醒的日期。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestCalendar.repeatDays
     */
    repeatDays?: Array<number>;
  }

  /**
   * 闹钟实例对象，用于设置提醒的时间。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ReminderRequestAlarm]{@link @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestAlarm}
   * > 替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestAlarm
   */
  interface ReminderRequestAlarm extends ReminderRequest {
    /**
     * 指明提醒的目标时刻。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestAlarm.hour
     */
    hour: number;

    /**
     * 指明提醒的目标分钟。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestAlarm.minute
     */
    minute: number;

    /**
     * 指明每周哪几天需要重复提醒。范围为周一到周末，对应数字为1到7。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestAlarm.daysOfWeek
     */
    daysOfWeek?: Array<number>;
  }

  /**
   * 倒计时实例对象，用于设置提醒的时间。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.ReminderRequestTimer]{@link @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestTimer}
   * > 替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.ReminderRequestTimer
   */
  interface ReminderRequestTimer extends ReminderRequest {
    /**
     * 指明倒计时的秒数。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.triggerTimeInSeconds
     */
    triggerTimeInSeconds: number;
  }

  /**
   * 用于日历类提醒设置时指定时间信息。
   * 
   * > **说明：**
   * > > 从 API version 7开始支持，从API version 9开始废弃。建议使用
   * > [reminderAgentManager.LocalDateTime]{@link @ohos.reminderAgentManager:reminderAgentManager.LocalDateTime}替代。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.reminderAgentManager:reminderAgentManager.LocalDateTime
   */
  interface LocalDateTime {
    /**
     * 年
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.year
     */
    year: number;

    /**
     * 月
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.month
     */
    month: number;

    /**
     * 日
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.day
     */
    day: number;

    /**
     * 时
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.hour
     */
    hour: number;

    /**
     * 分
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.minute
     */
    minute: number;

    /**
     * 秒
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead reminderAgentManager.ReminderRequestTimer.second
     */
    second?: number;
  }
}
export default reminderAgent;