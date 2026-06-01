/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
import notification from './@ohos.notificationManager';
import { NotificationSlot } from './notification/notificationSlot';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */
import type { Callback } from './@ohos.base';

/**
 * 本模块提供后台代理提醒的能力，即当应用被冻结或应用退出时，定时提醒功能将被系统服务代理。开发者可以调用本模块接口创建定时提醒，提醒类型支持倒计时、日历、闹钟三种。开发指导请参考
 * [代理提醒开发指南](docroot://task-management/agent-powered-reminder.md)。
 *
 * @syscap SystemCapability.Notification.ReminderAgent
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace reminderAgentManager {
  /**
   * 发布后台代理提醒。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 该接口需要申请通知弹窗权限
   * > [notificationManager.requestEnableNotification]{@link @ohos.notificationManager:notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)}
   * > 后调用。
   * >
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - 需要发布的代理提醒实例。
   * @param { AsyncCallback<int> } callback - 回调函数。
   *     当代理提醒发布成功，err为undefined，data为当前发布提醒的id；否则为错误对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700001 - Notification is not enabled.
   * @throws { BusinessError } 1700002 - The number of reminders exceeds the limit.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>): void;

  /**
   * 发布后台代理提醒。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 该接口需要申请通知弹窗权限
   * > [notificationManager.requestEnableNotification]{@link @ohos.notificationManager:notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)}
   * > 后调用。
   * >
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - 需要发布的代理提醒实例。
   * @returns { Promise<int> } Promise对象，返回当前发布提醒的id。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700001 - Notification is not enabled.
   * @throws { BusinessError } 1700002 - The number of reminders exceeds the limit.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function publishReminder(reminderReq: ReminderRequest): Promise<int>;

  /**
   * 取消指定id的代理提醒。使用callback异步回调。
   *
   * @param { int } reminderId - 需要取消的代理提醒的id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当取消代理提醒成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelReminder(reminderId: int, callback: AsyncCallback<void>): void;

  /**
   * 取消指定id的代理提醒。使用Promise异步回调。
   *
   * @param { int } reminderId - 需要取消的代理提醒的id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelReminder(reminderId: int): Promise<void>;

  /**
   * 取消当前通知中心内显示的通知卡片，不取消代理提醒数据。例如：每天重复的提醒，该提醒正在通知中心内显示，该接口将通知从通知中心内取消，并且会按照设定的周期，在第二天再次提醒。
   *
   * @param { int } reminderId - 需要取消的代理提醒的id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 23 dynamic&static
   */
  function cancelReminderOnDisplay(reminderId: int): Promise<void>;

  /**
   * 获取当前应用设置的所有[有效（未过期）的代理提醒](docroot://task-management/agent-powered-reminder.md#约束与限制)。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<ReminderRequest>> } callback - 回调函数。
   *     当查询代理提醒成功，err为undefined，data为当前应用设置的所有有效（未过期）的代理提醒；否则为错误对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>): void;

  /**
   * 获取当前应用设置的所有[有效（未过期）的代理提醒](docroot://task-management/agent-powered-reminder.md#约束与限制)。使用Promise异步回调。
   *
   * @returns { Promise<Array<ReminderRequest>> } Promise对象，返回当前应用设置的所有有效（未过期）的代理提醒。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function getValidReminders(): Promise<Array<ReminderRequest>>;

  /**
   * 取消当前应用设置的所有代理提醒。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当取消代理提醒成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAllReminders(callback: AsyncCallback<void>): void;

  /**
   * 取消当前应用设置的所有代理提醒。使用Promise异步回调。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAllReminders(): Promise<void>;

  /**
   * 更新指定id的代理提醒，使用Promise异步回调。仅[有效（未过期）](docroot://task-management/agent-powered-reminder.md#约束与限制)、未显示在通知中心的代理提醒支持更新。
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { int } reminderId - 需要更新的代理提醒的id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @param { ReminderRequest } reminderReq - 代理提醒对象实例，用于设置提醒类型、响铃时长等具体信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 20 dynamic
   * @since 23 static
   */
  function updateReminder(reminderId: int, reminderReq: ReminderRequest): Promise<void>;

  /**
   * 添加通知渠道。使用callback异步回调。
   *
   * @param { NotificationSlot } slot - 通知渠道实例，仅支持设置其notificationType属性。
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当添加NotificationSlot成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * 添加通知渠道。使用Promise异步回调。
   *
   * @param { NotificationSlot } slot - 通知渠道实例，仅支持设置其notificationType属性。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function addNotificationSlot(slot: NotificationSlot): Promise<void>;

  /**
   * 删除指定的通知渠道类型，使用callback异步回调。
   *
   * @param { notification.SlotType } slotType - 通知渠道类型。
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当删除成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void;

  /**
   * 删除指定的通知渠道类型，使用Promise异步回调。
   *
   * @param { notification.SlotType } slotType - 通知渠道类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function removeNotificationSlot(slotType: notification.SlotType): Promise<void>;
  
  /**
   * 为指定id的周期性的日历提醒，添加不提醒日期（如每天提醒的日历，设置周二不提醒）。使用Promise异步回调。
   *
   * @param { int } reminderId - 需要添加不提醒日期的代理提醒id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @param { Date } date - 不提醒的日期。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function addExcludeDate(reminderId: int, date: Date): Promise<void>;
  
  /**
   * 为指定id的周期性的日历提醒，删除设置的所有不提醒日期。使用Promise异步回调。
   *
   * @param { int } reminderId - 需要删除不提醒日期的代理提醒id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function deleteExcludeDates(reminderId: int): Promise<void>;
  
  /**
   * 为指定id的周期性的日历提醒，查询设置的所有不提醒日期。使用Promise异步回调。
   *
   * @param { int } reminderId - 需要查询不提醒日期的代理提醒id。
   *     代理提醒id会在
   *     [发布代理提醒]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     时作为返回值返回。
   * @returns { Promise<Array<Date>> } Promise对象。返回特定日历设置的所有不提醒日期。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function getExcludeDates(reminderId: int): Promise<Array<Date>>;

  /**
   * 获取当前应用设置的所有[有效（未过期）的代理提醒](docroot://task-management/agent-powered-reminder.md#约束与限制)。使用Promise异步回调。
   * 该接口调用需要申请ohos.permission.PUBLISH_AGENT_REMINDER权限。
   *
   * @returns { Promise<Array<ReminderInfo>> } Promise对象，返回当前应用设置的所有有效（未过期）的代理提醒。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllValidReminders(): Promise<Array<ReminderInfo>>;

  /**
   * 订阅代理提醒状态。使用Promise异步回调。
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { Callback<Array<ReminderState>> } callback - 回调函数，返回代理提醒状态信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function subscribeReminderState(callback: Callback<Array<ReminderState>>): Promise<void>;

  /**
   * 取消订阅代理提醒状态。使用Promise异步回调。
   *
   * @param { Callback<Array<ReminderState>> } [callback] - 回调函数。如果不传参数callback，则取消所有订阅。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unsubscribeReminderState(callback?: Callback<Array<ReminderState>>): Promise<void>;

  /**
   * 提醒上的按钮的类型。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ActionButtonType {
    /**
     * 表示关闭提醒的按钮。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_CLOSE = 0,

    /**
     * 表示延时提醒的按钮，提醒次数和间隔通过[ReminderRequest]{@link reminderAgentManager.ReminderRequest}中snoozeTimes和timeInterval设置。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_SNOOZE = 1,

    /**
     * 表示自定义的按钮。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_CUSTOM = 2
  }

  /**
   * 提醒的类型。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ReminderType {
    /**
     * 表示提醒类型：倒计时。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_TIMER = 0,

    /**
     * 表示提醒类型：日历。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_CALENDAR = 1,

    /**
     * 表示提醒类型：闹钟。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_ALARM = 2
  }

  /**
   * 自定义提示音的音频播放通道。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 20 dynamic
   * @since 23 static
   */
  export enum RingChannel {
    /**
     * 闹钟通道。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    RING_CHANNEL_ALARM = 0,

    /**
     * 媒体通道。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    RING_CHANNEL_MEDIA = 1,

    /**
     * 通知通道。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 dynamic&static
     */
    RING_CHANNEL_NOTIFICATION = 2
  }

  /**
   * 弹出的提醒中按钮的类型和标题。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ActionButton {
    /**
     * 按钮显示的标题。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * 标题的资源ID，用于切换系统语言后读取对应标题信息。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    titleResource?: string;

    /**
     * 按钮的类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    type: ActionButtonType;

    /**
     * 点击按钮跳转的ability信息。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * 点击按钮将更新应用数据库。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataShareUpdate?: DataShareUpdate;
  }

  /**
   * 跳转目标的ability信息。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface WantAgent {
    /**
     * 指明跳转目标的包名。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    pkgName: string;

    /**
     * 指明跳转目标的ability名称。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 指明跳转目标的uri信息。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * 需要传递到目标的参数。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * The description of the WantParams object in an Want
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 static
     */
    parameters?: RecordData;
  }

  /**
   * 更新数据库需要的参数信息。
   * 
   * 数据提供方需要在module.json5中的proxyData节点定义要共享的表的标识，读写权限和基本信息。配置方式请见
   * [数据提供方应用的开发](docroot://database/share-data-by-silent-access-sys.md#数据提供方应用的开发)。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface DataShareUpdate {
    /**
     * 数据使用的URI，是跨应用数据访问的唯一标识。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 指示筛选条件，当前仅支持通过等于筛选。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    equalTo: Record<string, double | string | boolean>;

    /**
     * 指示要更新的数据。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    value: ValuesBucket;
  }

  /**
   * 通知中心弹出提醒时，全屏显示自动拉起目标的ability信息。该接口为预留接口，暂不支持使用。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface MaxScreenWantAgent {
    /**
     * 指明提醒到达时自动拉起的目标包名（如果设备在使用中，则只弹出通知横幅框）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    pkgName: string;

    /**
     * 指明提醒到达时自动拉起的目标ability名（如果设备在使用中，则只弹出通知横幅框）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;
  }

  /**
   * 代理提醒对象，用于设置提醒类型、响铃时长等具体信息。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequest {
    /**
     * 指明代理提醒类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    reminderType: ReminderType;

    /**
     * 弹出的提醒通知中显示的按钮。
     * 
     * 针对三方应用：最多支持两个按钮。
     * 
     * 针对系统应用：从API version 10开始最多支持三个按钮，API version 10之前的版本最多支持两个按钮。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     */
    actionButton?: [ActionButton?, ActionButton?, ActionButton?];

    /**
     * Action button displayed on the reminder notification.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 static
     */
    actionButton?: Array<ActionButton>;

    /**
     * 点击通知后需要跳转的目标ability信息。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * 提醒到达时，全屏显示自动拉起目标的ability信息。如果设备正在使用中，则弹出一个通知横幅框。 
     * 
     * 说明：该接口为预留接口，暂不支持使用。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    maxScreenWantAgent?: MaxScreenWantAgent;

    /**
     * 指明响铃时长。
     * 
     * 单位：s，默认1s，范围：[0, 1800]。
     * 
     * 值为0时：跟随系统设置中的通知铃声。 
     * 
     * 值大于0时：如果设置了[ReminderRequest.customRingUri]{@link reminderAgentManager.ReminderRequest}，则在指定的通道
     * [ReminderRequest.ringChannel]{@link reminderAgentManager.ReminderRequest}上响铃。否则使用代理提醒默认的自定义提示音。
     * 
     * 响铃同时会触发振动，从API版本26.0.0开始，支持长振动，振动时长与响铃时长一致。API版本26.0.0之前版本，响铃时会快速振动一次。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ringDuration?: long;

    /**
     * 指明自定义提示音的音频播放通道，默认为闹钟通道。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    ringChannel?: RingChannel;

    /**
     * 指明延时提醒次数，默认0次（不适用于倒计时提醒类型）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    snoozeTimes?: int;

    /**
     * 执行延时提醒间隔。
     * 
     * 单位：s，最少30s（不适用于倒计时提醒类型）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval?: long;

    /**
     * 指明提醒标题。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * 指明提醒标题的资源ID，通过`$r(资源名称).id`方法获取。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    titleResourceId?: int;
  
    /**
     * 指明提醒内容。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    content?: string;

    /**
     * 指明提醒内容的资源ID，通过`$r(资源名称).id`方法获取。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    contentResourceId?: int;
  
    /**
     * 指明提醒过期后需要显示的内容。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    expiredContent?: string;

    /**
     * 指明提醒过期后内容的资源ID，通过`$r(资源名称).id`方法获取。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    expiredContentResourceId?: int;
  
    /**
     * 指明延时提醒时需要显示的内容（不适用于倒计时提醒类型）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    snoozeContent?: string;

    /**
     * 指明延时提醒内容的资源ID，通过`$r(资源名称).id`方法获取。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    snoozeContentResourceId?: int;
  
    /**
     * 指明提醒使用的通知的id号，需开发者传入，相同id号的提醒会覆盖，默认值为0。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    notificationId?: int;

    /**
     * 指明提醒使用相同的组id。相同组id中，一个提醒被点击不在提醒后，组内其他提醒也会被取消。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    groupId?: string;

    /**
     * 指明提醒的通道渠道类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    slotType?: notification.SlotType;

    /**
     * 通知是否自动清除，默认值为true，具体请参考
     * [NotificationRequest.tapDismissed]{@link ./notification/notificationRequest:NotificationRequest.tapDismissed}
     * 
     * - true：点击通知消息或通知按钮后，自动删除当前通知。
     * - false：点击通知消息或通知按钮后，保留当前通知。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     * @since 23 static
     */
    tapDismissed?: boolean;

    /**
     * 自动清除的时间。
     * 
     * 数据格式：时间戳，单位：ms，具体请参考
     * [NotificationRequest.autoDeletedTime]{@link ./notification/notificationRequest:NotificationRequest.autoDeletedTime}
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     * @since 23 static
     */
    autoDeletedTime?: long;

    /**
     * 指明延时提醒的通道渠道类型（不适用于倒计时提醒类型）。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    snoozeSlotType?: notification.SlotType;

    /**
     * 指明自定义提示音的uri，提示音文件必须放在resources/rawfile目录下，支持m4a、aac、mp3、ogg、wav、flac、amr等格式。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    customRingUri?: string;

    /**
     * 通知是否不进行全场景跨设备协同显示，默认为false。具体请参考
     * [NotificationRequest.notDistributed]{@link ./notification/notificationRequest:NotificationRequest.notDistributed}
     * 
     * - 设置为true时：通知仅在本设备上显示。
     * - 设置为false时：通知将在所有协同设备上显示。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @default false
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi
     * @since 23 dynamic&static
     */
    notDistributed?: boolean;

    /**
     * 通知是否强制进行全场景跨设备协同显示，默认为false。具体请参考
     * [NotificationRequest.forceDistributed]{@link ./notification/notificationRequest:NotificationRequest.forceDistributed}
     * 
     * - 设置为true时：通知将在所有协同设备上显示。
     * - 设置为false时：通知将按照协同管控名单显示。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @default false
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi
     * @since 23 dynamic&static
     */
    forceDistributed?: boolean;
  }

  /**
   * ReminderRequestCalendar extends ReminderRequest
   * 
   * 日历实例对象，用于设置提醒的时间。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestCalendar extends ReminderRequest {
    /**
     * 指明提醒的目标时间。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    dateTime: LocalDateTime;

    /**
     * 指明重复提醒的月份，范围：[1, 12]，默认为空。需和repeatDays一起使用。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    repeatMonths?: Array<int>;

    /**
     * 指明重复提醒的日期，范围：[1, 31]，默认为空。需和repeatMonths一起使用。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    repeatDays?: Array<int>;

    /**
     * 指明每周哪几天需要重复提醒。范围为周一到周日，对应数字为1到7，默认为空。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    daysOfWeek?: Array<int>;

    /**
     * 指明提醒的结束时间。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    endDateTime?: LocalDateTime;

    /**
     * 自定义重复日程，指明需要拉起的 Service Extension。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    rruleWantAgent?: WantAgent;
  }

  /**
   * ReminderRequestAlarm extends ReminderRequest
   * 
   * 闹钟实例对象，用于设置提醒的时间。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestAlarm extends ReminderRequest {
    /**
     * 指明提醒的目标时刻，范围：[0, 23]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    hour: int;

    /**
     * 指明提醒的目标分钟，范围：[0, 59]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    minute: int;

    /**
     * 指明每周哪几天需要重复提醒。范围为周一到周日，对应数字为1到7，默认为空。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    daysOfWeek?: Array<int>;
  }

  /**
   * ReminderRequestTimer extends ReminderRequest
   * 
   * 倒计时实例对象，用于设置提醒的时间。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestTimer extends ReminderRequest {
    /**
     * 指明倒计时的秒数。
     * 
     * 单位：s
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    triggerTimeInSeconds: long;

    /**
     * 重复周期，无默认值，未赋值时，无重复周期。需和repeatCount一起使用。
     * 
     * 单位：s，范围：[86400, +∞)。超出范围返回错误码401。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    repeatInterval?: long;

    /**
     * 重复次数，默认值为0，无限次重复。需和repeatInterval一起使用。
     * 
     * 范围：[0, +∞)。超出范围返回错误码401。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    repeatCount?: int;
  }

  /**
   * 代理提醒信息，包含 ReminderRequest 和 ReminderId。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReminderInfo {
    /**
     * 发布提醒后返回的id。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    reminderId: int;

    /**
     * 代理提醒对象。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    reminderReq: ReminderRequest;
  }

  /**
   * 用于日历类提醒设置时指定时间信息。
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface LocalDateTime {
    /**
     * 年
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    year: int;

    /**
     * 月，取值范围是[1, 12]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    month: int;

    /**
     * 日，取值范围是[1, 31]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    day: int;

    /**
     * 时，取值范围是[0, 23]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    hour: int;

    /**
     * 分，取值范围是[0, 59]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    minute: int;

    /**
     * 秒，取值范围是[0, 59]。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    second?: int;
  }

  /**
   * 代理提醒状态信息。状态信息会在如下两种情况发送通知：
   * 
   * 1. 用户点击代理提醒的通知按钮时，如果应用进程存在，则会发送用户点击的按钮类型的通知给应用。
   * 如果应用未运行，则无法收到通知。
   * 2. 由于第1点不能保证应用可以收到通知，因此应用注册新的回调函数时，会将该应用下所有用户点击的按钮类型回调给应用。
   * 状态信息最多保存30天，应用注册新的回调函数时或者超过30天未注册回调函数，会删除缓存的状态信息。
   *
   * @syscap SystemCapability.Notification.ReminderAgent 
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ReminderState {
    /**
     * 发布提醒后返回的id。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reminderId: int;

    /**
     * 按钮类型。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttonType: ActionButtonType;

    /**
     * 信息是否为重复发送。
     * 
     * - false：信息首次发送。具体场景包括：用户点击代理提醒的通知按钮时，应用进程存在；用户点击代理提醒的通知按钮时，应用未运行，后续应用注册新的回调函数。
     * - true：信息重复发送，具体场景为：应用进程存在，用户点击代理提醒的通知按钮后，应用注册新的回调函数。
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isMessageResent: boolean;
  }
}
export default reminderAgentManager;