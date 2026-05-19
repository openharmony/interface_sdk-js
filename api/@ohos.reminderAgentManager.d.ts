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
 * @file Agent-powered Reminder
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
 * The **reminderAgentManager** module provides APIs related to agent-powered reminders. When your application is frozen
 * or exits, the application's scheduled notification capability will be taken over by a system service running in the 
 * background. You can use the APIs to create scheduled reminders for countdown timers, calendar events, and alarm 
 * clocks. For details, see [Agent-powered Reminder](docroot://task-management/agent-powered-reminder.md).
 *
 * @syscap SystemCapability.Notification.ReminderAgent
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace reminderAgentManager {
  /**
   * Publishes a reminder. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > This API can be called only after the 
   * > [notificationManager.requestEnableNotification]{@link @ohos.notificationManager:notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)}
   * > permission is obtained.
   * >
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - Request used for publishing the reminder.
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   *     After the agent-powered reminder is
   *     published, **err** is **undefined**, and **data** is the ID of the published reminder. Otherwise, **err** is an
   *     error object.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700001 - Notification is not enabled.
   * @throws { BusinessError } 1700002 - The number of reminders exceeds the limit.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>): void;

  /**
   * Publishes a reminder. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > This API can be called only after the 
   * > [notificationManager.requestEnableNotification]{@link @ohos.notificationManager:notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)}
   * > permission is obtained.
   * >
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { ReminderRequest } reminderReq - Request used for publishing the reminder.
   * @returns { Promise<int> } Promise used to return the published reminder ID.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700001 - Notification is not enabled.
   * @throws { BusinessError } 1700002 - The number of reminders exceeds the limit.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function publishReminder(reminderReq: ReminderRequest): Promise<int>;

  /**
   * Cancels a reminder published. This API uses an asynchronous callback to return the result.
   *
   * @param { int } reminderId - ID of the agent-powered reminder to be canceled.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     API is called.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   *     If all the reminders are canceled,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelReminder(reminderId: int, callback: AsyncCallback<void>): void;

  /**
   * Cancels a reminder published. This API uses a promise to return the result.
   *
   * @param { int } reminderId - ID of the agent-powered reminder to be canceled.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     API is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelReminder(reminderId: int): Promise<void>;

  /**
   * Cancels the notification card displayed in the notification center with the agent reminder data retained. For
   * example, for a daily repeating reminder, calling this API removes the card from the notification center, but the
   * reminder will be triggered again the next day according to its schedule.
   *
   * @param { int } reminderId - ID of the agent-powered reminder to be canceled.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback:
   *     AsyncCallback<int>)}
   *     API is called
   *     <br>The value range is all integers.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 23 dynamic&static
   */
  function cancelReminderOnDisplay(reminderId: int): Promise<void>;

  /**
   * Obtains all [valid (not yet expired) reminders](docroot://task-management/agent-powered-reminder.md#constraints) 
   * set by the current application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<ReminderRequest>> } callback - Callback used to return the result.
   *     If the agent-powered reminder is queried, **err** is **undefined**, and **data** contains all valid (not yet
   *     expired) reminders set by the current application. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function getValidReminders(callback: AsyncCallback<Array<ReminderRequest>>): void;

  /**
   * Obtains all [valid (not yet expired) reminders](docroot://task-management/agent-powered-reminder.md#constraints) 
   * set by the current application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<ReminderRequest>> } Promise used to return all the valid reminders.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function getValidReminders(): Promise<Array<ReminderRequest>>;

  /**
   * Cancels all reminders set by the current application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   *     If all the reminders are canceled,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAllReminders(callback: AsyncCallback<void>): void;

  /**
   * Cancels all reminders set by the current application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700004 - The bundle name does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAllReminders(): Promise<void>;

  /**
   * Updates the agent-powered reminder with the specified ID. This API uses a promise to return the result. Only 
   * [valid (not yet expired) reminders](docroot://task-management/agent-powered-reminder.md#constraints) that are not 
   * displayed in the notification panel can be updated.
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { int } reminderId - ID of the agent-powered reminder to be updated.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     API is called.
   * @param { ReminderRequest } reminderReq - Request instance used to set detailed information such as the reminder
   *     type and ringing duration.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 20 dynamic
   * @since 23 static
   */
  function updateReminder(reminderId: int, reminderReq: ReminderRequest): Promise<void>;

  /**
   * Adds a notification slot. This API uses an asynchronous callback to return the result.
   *
   * @param { NotificationSlot } slot - Notification slot instance. Only the **notificationType** property can be set.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   *     If the notification slot is added,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function addNotificationSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Adds a notification slot. This API uses a promise to return the result.
   *
   * @param { NotificationSlot } slot - Notification slot instance. Only the **notificationType** property can be set.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function addNotificationSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Removes a specified notification slot. This API uses an asynchronous callback to return the result.
   *
   * @param { notification.SlotType } slotType - Type of the notification slot.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   *     If the notification slot is removed,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function removeNotificationSlot(slotType: notification.SlotType, callback: AsyncCallback<void>): void;

  /**
   * Removes a specified notification slot. This API uses a promise to return the result.
   *
   * @param { notification.SlotType } slotType - Type of the notification slot.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  function removeNotificationSlot(slotType: notification.SlotType): Promise<void>;
  
  /**
   * Adds a non-reminder date for a recurring calendar reminder with a specific ID. For example, configure a daily 
   * reminder to skip notifications on Tuesdays. This API uses a promise to return the result.
   *
   * @param { int } reminderId - ID of the agent-powered reminder to be added.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     API is called.
   * @param { Date } date - Non-reminder date.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function addExcludeDate(reminderId: int, date: Date): Promise<void>;
  
  /**
   * Deletes all non-reminder dates for a recurring calendar reminder with a specific ID. This API uses a promise to 
   * return the result.
   *
   * @param { int } reminderId - ID of the agent-powered reminder to be removed.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     API is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function deleteExcludeDates(reminderId: int): Promise<void>;
  
  /**
   * Obtains all non-reminder dates for a recurring calendar reminder with a specific ID. This API uses a promise to 
   * return the result.
   *
   * @param { int } reminderId - ID of the agent-powered reminder to be queried.
   *     The reminder ID is returned when the
   *     [publishReminder]{@link reminderAgentManager.publishReminder(reminderReq: ReminderRequest, callback: AsyncCallback<int>)}
   *     API is called.
   * @returns { Promise<Array<Date>> } Promise used to return all the non-reminder dates.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 1700003 - The reminder does not exist.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function getExcludeDates(reminderId: int): Promise<Array<Date>>;

  /**
   * Obtains all [valid (not yet expired) reminders](docroot://task-management/agent-powered-reminder.md#constraints) 
   * set by the current application. This API uses a promise to return the result. To call this API, you need to request
   * the ohos.permission.PUBLISH_AGENT_REMINDER permission.
   *
   * @returns { Promise<Array<ReminderInfo>> } Promise used to return all the valid reminders.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllValidReminders(): Promise<Array<ReminderInfo>>;

  /**
   * Subscribes to agent-powered reminder state changes. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PUBLISH_AGENT_REMINDER
   * @param { Callback<Array<ReminderState>> } callback - Callback used to return the agent-powered reminder state.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function subscribeReminderState(callback: Callback<Array<ReminderState>>): Promise<void>;

  /**
   * Unsubscribes from agent-powered reminder state changes. This API uses a promise to return the result.
   *
   * @param { Callback<Array<ReminderState>> } [callback] - Callback used to return the result. If the **callback**
   *     parameter is not passed, all subscriptions are canceled.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1700007 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unsubscribeReminderState(callback?: Callback<Array<ReminderState>>): Promise<void>;

  /**
   * Enumerates the types of buttons displayed for a reminder.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ActionButtonType {
    /**
     * Button for closing the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_CLOSE = 0,

    /**
     * Button for snoozing the reminder, with the frequency and timing configured via **snoozeTimes** and 
     * **timeInterval** in the [ReminderRequest]{@link reminderAgentManager.ReminderRequest} struct.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_SNOOZE = 1,

    /**
     * Custom button.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ACTION_BUTTON_TYPE_CUSTOM = 2
  }

  /**
   * Enumerates the reminder types.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ReminderType {
    /**
     * Countdown reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_TIMER = 0,

    /**
     * Calendar reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_CALENDAR = 1,

    /**
     * Alarm reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    REMINDER_TYPE_ALARM = 2
  }

  /**
   * Enumerates the audio playback channels for the custom prompt tone.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 20 dynamic
   * @since 23 static
   */
  export enum RingChannel {
    /**
     * Alarm channel.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    RING_CHANNEL_ALARM = 0,

    /**
     * Media channel.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    RING_CHANNEL_MEDIA = 1,

    /**
     * Notification slot.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 23 dynamic&static
     */
    RING_CHANNEL_NOTIFICATION = 2
  }

  /**
   * Time zone type.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum TimeZoneType {  
    /**
     * Default. It is the same as version 25 and earlier versions.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DEFAULT = 0,

    /**
     * Fixed time zone, follows UTC time.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FIXED_TIME_ZONE = 1,

    /**
     * Follow the system's current time zone.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_TIME_ZONE = 2
  }

  /**
   * Describes the button displayed for a reminder.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ActionButton {
    /**
     * Text on the button.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * Resource ID of the title. This parameter is used to read the title information after the system language is 
     * switched.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    titleResource?: string;

    /**
     * Button type.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    type: ActionButtonType;

    /**
     * Information about the ability that is displayed after the button is clicked.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * The application database will be updated after a click on the button.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataShareUpdate?: DataShareUpdate;
  }

  /**
   * Defines the information about the redirected-to ability.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface WantAgent {
    /**
     * Name of the target package.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    pkgName: string;

    /**
     * Name of the target ability.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * URI of the target ability.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * Parameters to be transferred to the target.
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
   * Defines the parameter information used to update the database.
   * 
   * The data provider needs to set the ID, read/write permissions, and basic information of the table to be shared 
   * under **proxyData** in the **module.json5** file. For details about the configuration method, see 
   * [Data Provider Application Development](docroot://database/share-data-by-silent-access-sys.md#data-provider-application-development)
   * .
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface DataShareUpdate {
    /**
     * URI of the data, which is the unique identifier for cross-application data access.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Filter criteria. Currently, only **equalTo** is supported.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    equalTo: Record<string, double | string | boolean>;

    /**
     * New data.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    value: ValuesBucket;
  }

  /**
   * Describes the information about the ability that is started automatically and displayed in full-screen mode when a 
   * reminder is displayed in the notification center. This API is reserved.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface MaxScreenWantAgent {
    /**
     * Name of the target package. (If the device is in use, only a notification banner is displayed.)
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    pkgName: string;

    /**
     * Name of the target ability. (If the device is in use, only a notification banner is displayed.)
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;
  }

  /**
   * Notification request proxy.
   *
   * @interface NotificationRequestProxy
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface NotificationRequestProxy {
    /**
     * Unique ID carried in a notification sent by an app, which is used for notification deduplication.
     * If an app publishes notifications with the same appMessageId locally or on the cloud,
     * the device displays only one message.
     * Repeated notifications received later will be silenced and deduplicated, and will not be displayed or notified.
     * The deduplication flag is valid only within 24 hours after the notification is published.
     * After 24 hours or the device is restarted,
     * the deduplication flag becomes invalid.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appMessageId?: string;
	
    /**
     * Whether to send a notification only once when the notification is published or updated.
     * - true: A notification is sent only when the notification is published for the first time. For subsequent update,
     *         the notification mode is changed to LEVEL_MIN.
     * - false (default): A notification is sent based on the configured notification mode.
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isAlertOnce?: boolean;
  }

  /**
   * Defines the request for publishing a reminder.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequest {
    /**
     * Type of the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    reminderType: ReminderType;

    /**
     * Buttons displayed for the reminder notification.
     * 
     * For third-party applications, a maximum of two buttons are supported.
     * 
     * For system applications, a maximum of three buttons are supported in API version 10 and later versions, and a 
     * maximum of two buttons are supported in versions earlier than API version 10.
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
     * Information about the ability that is redirected to when the reminder is clicked.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * Information about the ability that is started automatically and displayed in full-screen mode when the reminder 
     * arrives. If the device is in use, only a notification banner is displayed.
     * 
     * This API is reserved.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    maxScreenWantAgent?: MaxScreenWantAgent;

    /**
     * Ringing duration.
     * 
     * The value ranges from 0 to1800, in seconds. The default value is **1**.
     * 
     * If the value is **0**, the system notification tone is used.
     * 
     * If the value is greater than 0 and [ReminderRequest.customRingUri]{@link reminderAgentManager.ReminderRequest} is
     * set, the reminder rings on the specified channel 
     * [ReminderRequest.ringChannel]{@link reminderAgentManager.ReminderRequest}. Otherwise, the custom notification 
     * tone of the agent-powered reminder is used.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    ringDuration?: long;

    /**
     * Audio channel of the custom prompt tone. The default channel is the alarm channel.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 20 dynamic
     * @since 23 static
     */
    ringChannel?: RingChannel;

    /**
     * Number of reminder snooze times. The default value is **0**. (It is not applicable to countdown reminders.)
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    snoozeTimes?: int;

    /**
     * Reminder snooze interval,
     * 
     * in seconds. The minimum value is 30s. (It is not applicable to countdown reminders.)
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval?: long;

    /**
     * Reminder title.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * Resource ID of the reminder title, which can be obtained through $r(*resource-name*).id.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    titleResourceId?: int;
  
    /**
     * Reminder content.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    content?: string;

    /**
     * Resource ID of the reminder content, which can be obtained through $r(*resource-name*).id.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    contentResourceId?: int;
  
    /**
     * Content to be displayed after the reminder expires.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    expiredContent?: string;

    /**
     * Resource ID of the content to be displayed after the reminder expires, which can be obtained through $r(*resource
     * -name*).id.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    expiredContentResourceId?: int;
  
    /**
     * Content to be displayed when the reminder is snoozing. (It is not applicable to countdown reminders.)
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    snoozeContent?: string;

    /**
     * Resource ID of the content to be displayed when the reminder is snoozing, which can be obtained through $r(
     * *resource-name*).id.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 18 dynamic
     * @since 23 static
     */
    snoozeContentResourceId?: int;
  
    /**
     * Notification ID used by the reminder. You must pass in a notification ID. If there are reminders with the same 
     * notification ID, the later one will overwrite the earlier one. The default value is **0**.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    notificationId?: int;

    /**
     * Group ID used for the reminder. If "Don't ask again" or similar information is selected for the reminder, other 
     * reminders with the same group ID are also canceled.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    groupId?: string;

    /**
     * Type of the slot used by the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    slotType?: notification.SlotType;

    /**
     * Whether the reminder is automatically cleared. The default value is **true**. For details, see 
     * [NotificationRequest.tapDismissed](docroot://reference/apis-notification-kit/js-apis-inner-notification-notificationRequest.md#notificationrequest-1)
     * .
     * 
     * - **true** (default): The reminder is automatically cleared after the notification or button is tapped.
     * - **false**: The reminder is retained after the notification or button is tapped.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     * @since 23 static
     */
    tapDismissed?: boolean;

    /**
     * Time when the notification is automatically cleared.
     * 
     * The data format is timestamp, in milliseconds. For details, please refer to 
     * [NotificationRequest.autoDeletedTime](docroot://reference/apis-notification-kit/js-apis-inner-notification-notificationRequest.md#notificationrequest-1)
     * .
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 10 dynamic
     * @since 23 static
     */
    autoDeletedTime?: long;

    /**
     * Type of the slot used by the snoozed reminder. (It is not applicable to countdown reminders.)
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    snoozeSlotType?: notification.SlotType;

    /**
     * URI of the custom prompt tone. The prompt tone file must be stored in the **resources/rawfile** directory and 
     * supports formats such as M4A, AAC, MP3, OGG, WAV, FLAC, and AMR.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    customRingUri?: string;

    /**
     * Whether notifications are not displayed in all scenarios across devices. The default value is **false**. For
     * details, see
     * [NotificationRequest.notDistributed](docroot://reference/apis-notification-kit/js-apis-inner-notification-notificationRequest-sys.md#notificationrequest)
     * .
     * - **true**: Notifications are displayed only on the local device.
     * - **false**: Notifications are displayed on all collaborative devices.
     *
     * @default false
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi
     * @since 23 dynamic&static
     */
    notDistributed?: boolean;

    /**
     * Whether notifications are forcibly displayed in all scenarios across devices. The default value is **false**. For
     * details, see
     * [NotificationRequest.forceDistributed](docroot://reference/apis-notification-kit/js-apis-inner-notification-notificationRequest-sys.md#notificationrequest)
     * .
     * - **true**: Notifications are displayed on all collaboration devices.
     * - **false**: Notifications are displayed on the applications that are on the collaborative management list.
     *
     * @default false
     * @syscap SystemCapability.Notification.ReminderAgent
     * @systemapi
     * @since 23 dynamic&static
     */
    forceDistributed?: boolean;

    /**
     * Time zone type.
     * Default value: DEFAULT.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fixedTimeZone?: TimeZoneType;

    /**
     * Notification request proxy.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    notificationRequestProxy?: NotificationRequestProxy;
  }

  /**
   * ReminderRequestCalendar extends ReminderRequest
   * 
   * Defines a reminder for a calendar event.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestCalendar extends ReminderRequest {
    /**
     * Reminder time.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    dateTime: LocalDateTime;

    /**
     * Month in which the reminder repeats. The value range is [1, 12]. This parameter is left empty by default. This 
     * parameter must be used together with **repeatDays**.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    repeatMonths?: Array<int>;

    /**
     * Day in which the reminder repeats. The value range is [1, 31]. This parameter is left empty by default. This 
     * parameter must be used together with **repeatMonths**.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    repeatDays?: Array<int>;

    /**
     * Days of a week when the reminder repeats. The value ranges from 1 to 7, corresponding to the data from Monday to 
     * Sunday. This parameter is left empty by default.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 11 dynamic
     * @since 23 static
     */
    daysOfWeek?: Array<int>;

    /**
     * End time of the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    endDateTime?: LocalDateTime;

    /**
     * Custom reminder, which specifies the ServiceExtensionAbility to start.
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
   * Defines a reminder for an alarm.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestAlarm extends ReminderRequest {
    /**
     * Hour portion of the reminder time. The value range is [0, 23].
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    hour: int;

    /**
     * Minute portion of the reminder time. The value range is [0, 59].
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    minute: int;

    /**
     * Days of a week when the reminder repeats. The value ranges from 1 to 7, corresponding to the data from Monday to 
     * Sunday. This parameter is left empty by default.
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
   * Defines a reminder for a scheduled timer.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface ReminderRequestTimer extends ReminderRequest {
    /**
     * Number of seconds in the countdown timer.
     * 
     * Unit: s
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    triggerTimeInSeconds: long;

    /**
     * The repeat interval.
     * Unit: s.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    repeatInterval?: long;

    /**
     * The repeat count.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    repeatCount?: int;
  }

  /**
   * Defines the reminder information.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReminderInfo {
    /**
     * Reminder ID.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    reminderId: int;

    /**
     * Request used for publishing the reminder.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 12 dynamic
     * @since 23 static
     */
    reminderReq: ReminderRequest;
  }

  /**
   * Defines the time information for a calendar reminder.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @since 9 dynamic
   * @since 23 static
   */
  interface LocalDateTime {
    /**
     * Year.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    year: int;

    /**
     * Month. The value ranges from 1 to 12.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    month: int;

    /**
     * Day. The value ranges from 1 to 31.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    day: int;

    /**
     * Hour. The value ranges from 0 to 23.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    hour: int;

    /**
     * Minute. The value ranges from 0 to 59.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    minute: int;

    /**
     * Second. The value ranges from 0 to 59.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @since 9 dynamic
     * @since 23 static
     */
    second?: int;
  }

  /**
   * Defines the agent-powered reminder state information, for which notifications are triggered in the following 
   * scenarios:
   * 
   * 1. When a user taps a button on an agent-powered reminder notification,
   * a notification specifying the tapped button type is sent to the application if it is running.
   * If the application is not running, the notification will not be received.
   * 2. Since the above scenario cannot guarantee that the application receives the notification,
   * all callbacks associated with user-tapped button types under the application are returned to the application
   * when it registers a new callback function. State information is retained for a maximum of 30 days.
   * Cached state information is cleared when the application registers a new callback function or has not registered
   * any callback function for more than 30 days.
   *
   * @syscap SystemCapability.Notification.ReminderAgent
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ReminderState {
    /**
     * Reminder ID.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    reminderId: int;

    /**
     * Button type.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    buttonType: ActionButtonType;

    /**
     * Whether a message is sent repeatedly.
     * 
     * - **false**: The message is sent for the first time. Applicable scenarios: The application is running when the 
     * user taps a button on the agent-powered reminder notification; the application is not running when the user taps 
     * the button, and the application registers a new callback function afterward.
     * - **true**: The message is sent repeatedly. Applicable scenario: The application is running and registers a new 
     * callback function after the user taps a button on the agent-powered reminder notification.
     *
     * @syscap SystemCapability.Notification.ReminderAgent
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isMessageResent: boolean;
  }
}
export default reminderAgentManager;
