/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit CalendarKit
 */

import { AsyncCallback } from './@ohos.base';
import type Context from './application/Context';

/**
 * This provides calendar data access abilities.
 *
 * @syscap SystemCapability.Applications.CalendarData
 * @atomicservice [since 11]
 * @since 10
 */
declare namespace calendarManager {
  /**
   * Returns an instance of CalendarManager
   *
   * @param { Context } context - Hap context information
   * @returns { CalendarManager } Instance of CalendarManager
   * @syscap SystemCapability.Applications.CalendarData
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 10
   */
  function getCalendarManager(context: Context) : CalendarManager;

   /**
   * Before calling any of the following APIs to manage the calendar, you must use 
   * [getCalendarManager()]{@link calendarManager.getCalendarManager} to obtain a **CalendarManager** object first.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface CalendarManager {
    /**
     * Create calendar instance.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { CalendarAccount } calendarAccount - calendar account to create calendar
     * @returns { Promise<Calendar> } the promise with calendar corresponding to account
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>;

    /**
     * Create calendar instance.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { CalendarAccount } calendarAccount - calendar account to create calendar
     * @param { AsyncCallback<Calendar> } callback - the callback of createCalendar
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

    /**
     * Delete calendar instance.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { Calendar } calendar - calendar to be deleted
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteCalendar(calendar: Calendar): Promise<void>;

    /**
     * Delete calendar instance.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { Calendar } calendar - calendar to be deleted
     * @param { AsyncCallback<void> } callback - the callback of deleteCalendar
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteCalendar(calendar: Calendar, callback: AsyncCallback<void>): void;

    /**
     * Get calendar instance from database.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param { CalendarAccount } [calendarAccount] - specify calendar account to retrieve
     * @returns { Promise<Calendar> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900003 - The specified account was not found. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>;

    /**
     * Get calendar instance from database by specified account.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param { CalendarAccount } calendarAccount - specify calendar account to retrieve
     * @param { AsyncCallback<Calendar> } callback - the callback of getCalendar
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900003 - The specified account was not found. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    getCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

    /**
     * Get default calendar instance from database.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param { AsyncCallback<Calendar> } callback - the callback of getCalendar with default calendar instance
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    getCalendar(callback: AsyncCallback<Calendar>): void;

    /**
     * Get all calendar instance.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @returns { Promise<Calendar[]> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getAllCalendars(): Promise<Calendar[]>;

    /**
     * Get all calendar instance.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param {AsyncCallback<Calendar[]>} callback - the callback of getAllCalendars
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getAllCalendars(callback: AsyncCallback<Calendar[]>): void;

    /**
     * Edits an event on the event creation page, with no event ID specified in **Event**. This API uses a promise to 
     * return the result. Events created using this API can be obtained and modified by the system calendar. Third-party
     * applications can obtain and modify the events after they requested the **READ_WHOLE_CALENDAR** permission and the
     * **WRITE_WHOLE_CALENDAR** permission, respectively.
     *
     * @param { Event } event - **Event** object.
     * @returns { Promise<number> } Promise used to return the event ID. The event ID is the unique identifier of an 
     *     event and is the auto-increment primary key of the database. If the event creation fails, no value is 
     *     returned; if the value is less than **0**, the event creation is canceled; if the value is greater than **0**
     *     , the event creation is successful. The return value cannot be **0**
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    editEvent(event: Event): Promise<number>;
  }

  /**
   * In the following API examples, you need to use 
   * [createCalendar()]{@link calendarManager.CalendarManager.createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>)}
   * or [getCalendar()]{@link calendarManager.CalendarManager.getCalendar(callback: AsyncCallback<Calendar>)} to obtain 
   * a **Calendar** object before calling related APIs.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface Calendar {
    /**
     * Id of the calendar
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    readonly id: number;

    /**
     * Add a single event.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event } event - Indicates the information about a single event.
     * @returns { Promise<number> } The event ID.
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    addEvent(event: Event): Promise<number>;

    /**
     * Add a single event.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event } event - a single event to add.
     * @param { AsyncCallback<number> } callback - callback of addEvent.
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    addEvent(event: Event, callback: AsyncCallback<number>): void;

    /**
     * Add multiple events.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event[] } events - multiple events to add.
     * @returns { Promise<void> } The promise returned by function.
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    addEvents(events: Event[]): Promise<void>;

    /**
     * Add multiple events.
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event[] } events - Indicates the information about multiple events.
     * @param { AsyncCallback<void> } callback - The callback of addEvents
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    addEvents(events: Event[], callback: AsyncCallback<void>): void;

    /**
     * Delete a single event.
     *
     * @param { number } id - Indicates the ID of an event.
     * @returns { Promise<void> } The promise returned by function.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteEvent(id: number): Promise<void>;

    /**
     * Deletes an event with the specified ID. This API uses an asynchronous callback to return the result.
     *
     * @param { number } id - Event ID, which is the unique identifier of an event. If the input event ID is an integer,
     *     the event is created.
     * @param {AsyncCallback<void>} callback - Callback used to return the result.
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 21]
     * @since 10
     */
    deleteEvent(id: number, callback: AsyncCallback<void>): void;

    /**
     * Delete multiple events.
     *
     * @param { number[] } ids - The id array of multiple events.
     * @returns { Promise<void> } The promise returned by function.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteEvents(ids: number[]): Promise<void>;

    /**
     * Deletes a batch of events with the specified IDs. This API uses an asynchronous callback to return the result.
     *
     * @param { number[] } ids - Array of event IDs.
     * @param {AsyncCallback<void>} callback - Callback used to return the result.
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 21]
     * @since 10
     */
    deleteEvents(ids: number[], callback: AsyncCallback<void>): void;

    /**
     * Update a single event.
     *
     * @param { Event } event - Indicates the information about a single event.
     * @returns { Promise<void> } The promise returned by function.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    updateEvent(event: Event): Promise<void>;

    /**
     * Update a single event.
     *
     * @param { Event } event - Indicates the information about a single event.
     * @param { AsyncCallback<void> } callback - The callback of updateEvent.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    updateEvent(event: Event, callback: AsyncCallback<void>): void;

    /**
     * Query events based on filter conditions.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { EventFilter } [eventFilter] - Indicates the filtering conditions of events.
     * @param { (keyof Event)[] } [eventKey] - Expected column to be returned. Default columns are id、
     *     type、title、startTime、endTime、isAllDay、description、timeZone、
     *     location、service、attendee、reminderTime、identifier.
     * @returns { Promise<Event[]> } Information about events that match the filter conditions.
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>;

    /**
     * Query events based on filter conditions.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { EventFilter } eventFilter - Indicates the filtering conditions of events.
     * @param { (keyof Event)[] } eventKey - Expected column to be returned.
     * @param { AsyncCallback<Event[]> } callback - The callback of getEvents.
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>):void;

    /**
     * Query all events with id、type、title、startTime、endTime、isAllDay、description、
     * timeZone、location、service、attendee、reminderTime、identifier from current calendar instance.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { AsyncCallback<Event[]> } callback - The callback of getEvents with all events.
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getEvents(callback: AsyncCallback<Event[]>):void;

    /**
     * Get calendar configure.
     *
     * @returns { CalendarConfig } configure of current calendar.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getConfig(): CalendarConfig;

    /**
     * Set calendar configure.
     *
     * @param { CalendarConfig } config - calendar config to set
     * @returns { Promise<void> } The promise returned by function.
     * @throws { BusinessError } 23900001 – Parameter value error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    setConfig(config: CalendarConfig): Promise<void>;

    /**
     * Sets the calendar configuration information. This API uses an asynchronous callback to return the result.
     *
     * @param { CalendarConfig } config - Calendar configuration information.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 23900001 – Parameter value error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    setConfig(config: CalendarConfig, callback: AsyncCallback<void>): void;

    /**
     * Get calendar account.
     *
     * @returns { CalendarAccount } calendar account of current calendar.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getAccount(): CalendarAccount;

    /**
     * Query event instances based on the conditions.
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { number } start - start time of query range
     * @param { number } end - end time of query range
     * @param { number[] } [ids] - Indicates the IDs of multiple events
     * @param { (keyof Event)[] } [eventKey] - Expected column to be returned
     * @returns { Promise<Event[]> } Information about events that match the condition
     * @throws { BusinessError } 201 - Permission denied. [since 23]
     * @throws { BusinessError } 23900004 - Internal program errors. Possible causes:
     *     <br>1. dataShare database execution error;
     *	   <br>2. null pointer error;
     *     <br>3. Data parsing error. [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>;

    /**
     * Opens the event edit page.
     * @param { number } id - The ID of the event to be edited.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 23900001 - Parameter value error.
     * @throws { BusinessError } 23900005 - This event cannot be edited.
     * @syscap SystemCapability.Applications.CalendarData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    openEventEditPage(id: number): Promise<void>;
  }

  /**
   * Describes the calendar account information.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  interface CalendarAccount {
    /**
     * Name of the calendar
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    readonly name: string;

    /**
     * Account type.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    type: CalendarType;

    /**
     * Account name displayed on the calendar application (defined by users). If this parameter is not specified, the 
     * default value is an empty string with a maximum of 64 characters.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    displayName?: string;
  }

  /**
   * Describes the calendar configuration information.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @since 10
   */

  interface CalendarConfig {
    /**
     * Whether the calendar provides a reminder
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    enableReminder?: boolean;

    /**
     * Color of the calendar
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    color?: number | string;
  }

 /**
   * Describes an **Event** object, including the event title, start time, and end time.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  interface Event {
    /**
     * Event ID. When you call 
     * [addEvent()]{@link calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>)} or 
     * [addEvents()]{@link calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>)} to create
     * an event, this parameter is not required. When you call 
     * [deleteEvent()]{@link calendarManager.Calendar.deleteEvent(id: number, callback: AsyncCallback<void>)} or 
     * [deleteEvents()]{@link calendarManager.Calendar.deleteEvents(ids: number[], callback: AsyncCallback<void>)} to 
     * delete an event, this parameter is required and must be set to an array of integers. If this parameter is set to 
     * an invalid value, an error will be reported.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    id?: number;

    /**
     * Event type.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    type: EventType;

    /**
     * Event title, with a maximum of 5,000 characters. If this parameter is not specified, the default value is an 
     * empty string.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    title?: string;

    /**
     * Event location. If this parameter is not set, the default null value is used.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    location?: Location;

    /**
     * Start time of an event. The value is a 13-digit timestamp. For an all-day event, this field is converted to the 
     * timestamp corresponding to 00:00 of the specified date.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    startTime: number;

    /**
     * End time of an event. The value is a 13-digit timestamp. For an all-day event, this field is converted to the 
     * timestamp corresponding to 24:00 of the specified date.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    endTime: number;

    /**
     * Whether the event is an all-day event. The value **true** means that the event is an all-day event, and **false**
     * means the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    isAllDay?: boolean;

    /**
     * Attendees in a meeting. If this parameter is not set, the default null value is used.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    attendee?: Attendee[];

    /**
     * Time zone of the event, with a maximum of 5,000 characters. If this parameter is not specified or set to an 
     * invalid value, the current time zone is used by default. If a different time zone is required, enter the 
     * corresponding time zone. You can call 
     * [systemDateTime.getTimezone()]{@link @ohos.systemDateTime:systemDateTime.getTimezone(callback: AsyncCallback<string>)}
     * to obtain the current system time zone.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    timeZone?: string;

    /**
     * Reminder time of the event, in minutes. For example, if the value is 5, the reminder occurs 5 minutes before the 
     * event starts. If this parameter is not set, no reminder is set. A negative value indicates the delay time for 
     * sending a notification. For an all-day event, this parameter specifies the time offset in minutes before 9 a.m. 
     * on the event date. A negative value indicates the number of minutes after 9 a.m.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    reminderTime?: number[];

    /**
     * Recurrence rule of an event. The event is a recurring event if this parameter is set; otherwise, the event is a 
     * non-recurring event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    recurrenceRule?: RecurrenceRule;

    /**
     * Event description, with a maximum of 5,000 characters. If this parameter is not specified, the default value is 
     * an empty string.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    description?: string;

    /**
     * <!--RP1-->Event service. If this parameter is not set, no one-click service is available. This function is not supported currently.<!--RP1End-->   
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    service?: EventService;

    /**
     * Unique identifier of the event
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    identifier?: string;

    /**
     * Whether the event is lunar.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    isLunar?: boolean;

    /**
     * Start time of the event instance.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    instanceStartTime?: number;

    /**
     * End time of the event instance.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    instanceEndTime?: number;
  }

  /**
   * Enum for all calendar type.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  enum CalendarType {
    /**
     * Local account.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    LOCAL = 'local',

    /**
     * Email account.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    EMAIL = 'email',

    /**
     * Birthday account.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    BIRTHDAY = 'birthday',

    /**
     * CalDAV account.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    CALDAV = 'caldav',

    /**
     * Subscription account.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SUBSCRIBED = 'subscribed'
  }

  /**
   * Describes the event location.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  interface Location {
    /**
     * Event location. If this parameter is not set, the default null value is used.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    location?: string;

    /**
     * Longitude of the location. The value range is [-180, 180]. The default value is **undefined**. If the value is 
     * out of the range, the map cannot be displayed properly.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    longitude?: number;

    /**
     * Latitude of the location. The value range is [-90, 90]. The default value is **undefined**. If the value is out 
     * of the range, the map cannot be displayed properly.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    latitude?: number;
  }

  /**
   * Provides the abilities to retrive event filter.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @since 10
   */
  class EventFilter {
    /**
     * Filter events by event id.
     *
     * @param {number[]} ids id array to retrieve
     * @returns { EventFilter } Returns the EventFilter with ids.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    static filterById(ids: number[]): EventFilter;

    /**
     * Filter events by event start time and end time.
     *
     * @param { number } start - start time of query range
     * @param { number } end - end time of query range
     * @returns { EventFilter } Returns the EventFilter with time range.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    static filterByTime(start: number, end: number): EventFilter;

    /**
     * Filter events by event title.
     *
     * @param { string } title - event title to query
     * @returns {EventFilter } Returns the EventFilter with title.
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    static filterByTitle(title: string): EventFilter;
  }

  /**
   * Enum for supported events type.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  enum EventType {
    /**
     * Normal event, such as conference or an alarm clock.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    NORMAL = 0,

    /**
     * Important event, such as wedding anniversary, are not recommended for third-party developers. Important events do
     * not support one-click service redirection and custom reminder time.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    IMPORTANT = 1
  }

  /**
   * Describes the recurrence rule of a recurring event.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface RecurrenceRule {
    /**
     * Type of the event recurrence rule.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    recurrenceFrequency: RecurrenceFrequency;

    /**
     * End date of the recurrence period. The value is a 13-digit timestamp. If this parameter is not specified, the 
     * event has no end date.
     * 
     * If **expire**, **count**, and **interval** are set at the same time, the restriction that is reached first 
     * prevails.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    expire?: number;

    /**
     * Repetition count of recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    count?: number;

    /**
     * Repeat interval of recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    interval?: number;

    /**
     * Excluded dates of recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    excludedDates?: number[];

    /**
     * The days of the week associated with the recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    daysOfWeek?: number[];

    /**
     * The days of the month associated with the recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    daysOfMonth?: number[];

    /**
     * The days of the year associated with the recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    daysOfYear?: number[];

    /**
     * The weeks of the month associated with the recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    weeksOfMonth?: number[];

    /**
     * The weeks of the year associated with the recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    weeksOfYear?: number[];

    /**
     * The months of the year associated with the recurrence event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    monthsOfYear?: number[];
  }

  /**
   * Enum for the recurrence type by different period
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  export enum RecurrenceFrequency {
    /**
     * Yearly.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    YEARLY = 0,

    /**
     * Monthly.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    MONTHLY = 1,

    /**
     * Weekly.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    WEEKLY = 2,

    /**
     * Daily.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    DAILY = 3
  }

  /**
   * Describes the attendees in a meeting.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface Attendee {
    /**
     * Name of the attendee, with a maximum of 5,000 characters.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    name: string;

    /**
     * Email address of the attendee, with a maximum of 5,000 characters.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    email: string;

    /**
     * Role of the Attendee.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    role?: AttendeeRole;

    /**
     * Type of the Attendee.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    type?: AttendeeType;

    /**
     * Status of the Attendee.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    status?: AttendeeStatus;
  }

  /**
   * Enum for the attendee role
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice
   * @since 12
   */
  export enum AttendeeRole {
    /**
     * The organizer of a meeting.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    ORGANIZER = 'organizer',

    /**
     * The participant of a meeting.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    PARTICIPANT = 'participant'
  }

  /**
   * Enum for the attendee type
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice
   * @since 18
   */
  export enum AttendeeType {
    /**
     * A mailbox user who is a required attendee to the meeting.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    REQUIRED = 1,

    /**
     * A mailbox user who is an optional attendee to the meeting.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    OPTIONAL = 2,

    /**
     * A resource such as a TV or projector that is scheduled for use in the meeting.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    RESOURCE = 3
  }

  /**
   * Enum for the attendee states
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice
   * @since 18
   */
  export enum AttendeeStatus {
    /**
     * The acceptance status of the participant is unknown.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    UNKNOWN = 0,

    /**
     * The acceptance status of the participant is tentative.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    TENTATIVE = 1,

    /**
     * The acceptance status of the participant is accepted.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    ACCEPTED = 2,

    /**
     * The acceptance status of the participant is declined.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    DECLINED = 3,

    /**
     * The acceptance status of the participant is unresponsive.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    UNRESPONSIVE = 4
  }

  /**
   * Describes the event service.
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface EventService {
    /**
     * Service type.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    type: ServiceType;

    /**
     * Service URI, in the DeepLink format. The URI can then redirect the user to the corresponding third-party 
     * application page. The value is a string with a maximum of 5,000 characters.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    uri: string;

    /**
     * Description of the service, with a maximum of 5,000 characters. If this parameter is not specified, the default 
     * value is an empty string.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    description?: string;
  }

  /**
   * Defines event service type
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  export enum ServiceType {
    /**
     * Join a meeting.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    MEETING = 'Meeting',

    /**
     * Watch a video.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    WATCHING = 'Watching',

    /**
     * Make a payment.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    REPAYMENT = 'Repayment',

    /**
     * Watch live TV.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    LIVE = 'Live',

    /**
     * Go shopping.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SHOPPING = 'Shopping',

    /**
     * View the trip.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    TRIP = 'Trip',

    /**
     * Join class.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    CLASS = 'Class',

    /**
     * Watch a sports event.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SPORTS_EVENTS = 'SportsEvents',

    /**
     * Start exercising.
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SPORTS_EXERCISE = 'SportsExercise'
  }
}

export default calendarManager;