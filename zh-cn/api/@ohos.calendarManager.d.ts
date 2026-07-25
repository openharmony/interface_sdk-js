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
 * 本模块提供日历与日程管理能力，包括日历和日程的创建、删除、修改、查询等。
 *
 * @syscap SystemCapability.Applications.CalendarData
 * @atomicservice [since 11]
 * @since 10
 */
declare namespace calendarManager {
  /**
   * 根据上下文获取CalendarManager对象，用于管理日历。
   *
   * @param { Context } context - 应用上下文Context。
   * @returns { CalendarManager } 返回创建的CalendarManager对象。
   * @syscap SystemCapability.Applications.CalendarData
   * @StageModelOnly
   * @atomicservice [since 11]
   * @since 10
   */
  function getCalendarManager(context: Context) : CalendarManager;

   /**
   * 下列API示例中需先通过[getCalendarManager()]{@link calendarManager.getCalendarManager}方法获取CalendarManager对象，再通过此对象调用对应方法，进行
   * Calendar的创建、删除、修改、查询等操作。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface CalendarManager {
    /**
     * 根据日历账户信息，创建一个Calendar对象，使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { CalendarAccount } calendarAccount - 日历账户信息。
     * @returns { Promise<Calendar> } Promise对象，返回创建的Calendar对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因:
     *     <br>1. 必填参数为空；
     *     <br>2. 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    createCalendar(calendarAccount: CalendarAccount): Promise<Calendar>;

    /**
     * 根据日历账户信息，创建一个Calendar对象，使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { CalendarAccount } calendarAccount - 日历账户信息。
     * @param { AsyncCallback<Calendar> } callback - 回调函数，当创建账户成功时，err为undefined，data为创建成功的Calendar；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因:
     *     <br>1. 必填参数为空；
     *     <br>2. 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

    /**
     * 删除指定Calendar对象，使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { Calendar } calendar - 即将删除的Calendar对象。无法删除默认账户。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因:
     *     <br>1. 必填参数为空；
     *     <br>2. 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteCalendar(calendar: Calendar): Promise<void>;

    /**
     * 删除指定Calendar对象，使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR
     * @param { Calendar } calendar - 即将删除的Calendar对象。无法删除默认账户。
     * @param { AsyncCallback<void> } callback - 回调函数，当删除账户成功时，err为undefined；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因:
     *     <br>1. 必填参数为空；
     *     <br>2. 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteCalendar(calendar: Calendar, callback: AsyncCallback<void>): void;

    /**
     * 获取默认Calendar对象或者指定Calendar对象，使用Promise异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param { CalendarAccount } [calendarAccount] - 指定日历账户信息，用来获取指定Calendar对象，不填时，表示获取默认Calendar对象。
     * @returns { Promise<Calendar> } Promise对象，返回查询到的Calendar对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因: 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900003 - 未找到指定的账户。 [since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    getCalendar(calendarAccount?: CalendarAccount): Promise<Calendar>;

    /**
     * 获取指定Calendar对象，使用callback异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param { CalendarAccount } calendarAccount - 指定日历账户信息。
     * @param { AsyncCallback<Calendar> } callback - 回调函数，当查询账户成功时，err为undefined，data为查询到的Calendar；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因: 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900003 - 未找到指定的账户。 [since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    getCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>): void;

    /**
     * 获取默认Calendar对象，默认Calendar是日历存储首次运行时创建的，若创建Event时不关注其Calendar归属，则无须通过createCalendar()创建Calendar，直接使用默认Calendar，使用callback异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param { AsyncCallback<Calendar> } callback - 回调函数，当查询账户成功时，err为undefined，data为查询到的Calendar；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因:
     *     <br>1. 必填参数为空；
     *     <br>2. 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    getCalendar(callback: AsyncCallback<Calendar>): void;

    /**
     * 获取当前应用所有创建的Calendar对象以及默认Calendar对象，使用Promise异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @returns { Promise<Calendar[]> } Promise对象，返回查询到的Calendar对象数组。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因: 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getAllCalendars(): Promise<Calendar[]>;

    /**
     * 获取当前应用所有创建的Calendar对象以及默认Calendar对象，使用callback异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR
     * @param {AsyncCallback<Calendar[]>} callback - 回调函数，当查询账户成功时，err为undefined，data为查询到的Calendar数组；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。
     * @throws { BusinessError } 401 - 参数检查失败，可能原因:
     *     <br>1. 必填参数为空；
     *     <br>2. 参数类型不正确。
     * @throws { BusinessError } 801 - 该设备不支持此API。
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getAllCalendars(callback: AsyncCallback<Calendar[]>): void;

    /**
     * 通过跳转到日程创建页面创建单个日程，入参Event不填日程id，不支持设置instanceStartTime、instanceEndTime、identifier、attendee、service、isLunar和timeZone属性，也不支持添加重要日程。使用Promise异步回调。
     * 使用该接口创建的日程，系统日历可以进行查询和修改，申请到READ_WHOLE_CALENDAR权限的三方应用可以查询，申请到WRITE_WHOLE_CALENDAR权限的三方应用可以修改。
     *
     * @param { Event } event - Event对象。
     * @returns { Promise<number> } Promise对象，返回日程的id，日程id是日程的唯一标识符，是数据库的自增主键。创建失败时没有返回值；当返回值小于0时代表用户取消创建；当返回值大于0时代表日程创建
     *     成功；没有等于0的情况。
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    editEvent(event: Event): Promise<number>;
  }

  /**
   * 下列API示例中需先通过
   * [createCalendar()]{@link calendarManager.CalendarManager.createCalendar(calendarAccount: CalendarAccount, callback: AsyncCallback<Calendar>)}
   * 、[getCalendar()]{@link calendarManager.CalendarManager.getCalendar(callback: AsyncCallback<Calendar>)}中任一方法获取
   * Calendar对象，再通过此对象调用对应方法，对该Calendar下的日程进行创建、删除、修改、查询等操作。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface Calendar {
    /**
     * 日历账户id，日历账户id是日历账户的唯一标识符，是数据库的自增主键，小于0代表日历账户创建失败，大于0代表日历账户创建成功，没有等于0的情况。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    readonly id: number;

    /**
     * 创建日程，入参Event不填日程id、instanceStartTime和instanceEndTime，使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event } event - Event对象。
     * @returns { Promise<number> } Promise对象，返回日程的id，id大于0。
     * @throws { BusinessError } 201 - 权限校验失败。 [since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    addEvent(event: Event): Promise<number>;

    /**
     * 创建日程，入参Event不填日程id、instanceStartTime和instanceEndTime，使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event } event - Event对象。
     * @param { AsyncCallback<number> } callback - 回调函数，当添加日程成功时，err为undefined，data为日程id；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。 [since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    addEvent(event: Event, callback: AsyncCallback<number>): void;

    /**
     * 批量创建日程，入参Event不填日程id、instanceStartTime和instanceEndTime，使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event[] } events - Event对象数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - 权限校验失败。 [since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    addEvents(events: Event[]): Promise<void>;

    /**
     * 批量创建日程，入参Event不填日程id、instanceStartTime和instanceEndTime，使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_CALENDAR or ohos.permission.WRITE_WHOLE_CALENDAR [since 23]
     * @param { Event[] } events - Event对象数组。
     * @param { AsyncCallback<void> } callback - 回调函数，当添加日程成功时，err为undefined；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。 [since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    addEvents(events: Event[], callback: AsyncCallback<void>): void;

    /**
     * 删除指定id的日程，使用Promise异步回调。
     *
     * @param { number } id - 日程id。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteEvent(id: number): Promise<void>;

    /**
     * 删除指定id的日程，使用callback异步回调。
     *
     * @param { number } id - 日程id，传入的日程id为整数，表示已创建日程的id，是日程的唯一标识符。
     * @param {AsyncCallback<void>} callback - 回调函数，当删除日程成功时，err为undefined；否则为错误对象。
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 21]
     * @since 10
     */
    deleteEvent(id: number, callback: AsyncCallback<void>): void;

    /**
     * 根据日程id，批量删除日程，使用Promise异步回调。
     *
     * @param { number[] } ids - 日程id数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    deleteEvents(ids: number[]): Promise<void>;

    /**
     * 根据日程id，批量删除日程，使用callback异步回调。
     *
     * @param { number[] } ids - 日程id数组。
     * @param {AsyncCallback<void>} callback - 回调函数，当删除多个日程成功时，err为undefined；否则为错误对象。
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 21]
     * @since 10
     */
    deleteEvents(ids: number[], callback: AsyncCallback<void>): void;

    /**
     * 更新日程，入参Event需要填写被修改日程的id，使用Promise异步回调。
     *
     * @param { Event } event - Event对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    updateEvent(event: Event): Promise<void>;

    /**
     * 更新日程，入参Event需要填写被修改日程的id，使用callback异步回调。
     *
     * @param { Event } event - Event对象。
     * @param { AsyncCallback<void> } callback - 回调函数，当更新日程成功时，err为undefined；否则为错误对象。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    updateEvent(event: Event, callback: AsyncCallback<void>): void;

    /**
     * 获取Calendar下符合查询条件的Event，使用Promise异步回调。只有一个入参时，参数必须为查询条件，对应参数类型为EventFilter。当没有入参时，
     * 可查询指定日历账户下的所有日程。
     * 
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { EventFilter } [eventFilter] - 查询条件。
     * @param { (keyof Event)[] } [eventKey] - 查询字段。API version 20之前，不填时默认查询字段包括id、type、title、startTime、endTime、isAllDay、
     * description、timeZone、location、service、attendee、reminderTime；从API version 20开始，不填时默认查询字段包括id、type、title、startTime、
     * endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime、identifier。若查询字段为空，则不返回该字段。
     * @returns { Promise<Event[]> } Promise对象，返回的是Event对象数组。
     * @throws { BusinessError } 201 - 权限校验失败。[since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getEvents(eventFilter?: EventFilter, eventKey?: (keyof Event)[]): Promise<Event[]>;

    /**
     * 获取Calendar下符合查询条件的Event，使用callback异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { EventFilter } eventFilter - 查询条件。
     * @param { (keyof Event)[] } eventKey - 查询字段。
     * @param { AsyncCallback<Event[]> } callback - 回调函数，当查询日程成功时，err为undefined，data为查询到的Event数组；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。[since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getEvents(eventFilter: EventFilter, eventKey: (keyof Event)[], callback: AsyncCallback<Event[]>):void;

    /**
	 * 查询当前日历下所有日程，使用callback异步回调。
     * API version 20之前，默认查询字段包括id、type、title、startTime、endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime。
	 * 从API version 20开始，默认查询字段包括id、type、title、startTime、endTime、isAllDay、description、timeZone、location、service、attendee、reminderTime、identifier。
	 * 若查询字段为空，则不返回该字段。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { AsyncCallback<Event[]> } callback - 回调函数，当查询日程成功时，err为undefined，data为查询到的Event数组；否则为错误对象。
     * @throws { BusinessError } 201 - 权限校验失败。[since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getEvents(callback: AsyncCallback<Event[]>):void;

    /**
     * 获取日历配置信息。
     *
     * @returns { CalendarConfig } 日历配置信息。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getConfig(): CalendarConfig;

    /**
     * 设置日历配置信息，使用Promise异步回调。
     *
     * @param { CalendarConfig } config - 日历配置信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 23900001 – 参数值错误。[since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    setConfig(config: CalendarConfig): Promise<void>;

    /**
     * 设置日历配置信息，使用callback异步回调。
     *
     * @param { CalendarConfig } config - 日历配置信息。
     * @param { AsyncCallback<void> } callback - 回调函数，当设置Config成功时，err为undefined；否则为错误对象。
     * @throws { BusinessError } 23900001 – 参数值错误。[since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    setConfig(config: CalendarConfig, callback: AsyncCallback<void>): void;

    /**
     * 获取日历账户信息。
     *
     * @returns { CalendarAccount } 日历账户信息。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    getAccount(): CalendarAccount;

    /**
     * 获取Calendar下符合查询条件的日程实例，使用Promise异步回调。
     *
     * @permission ohos.permission.READ_CALENDAR or ohos.permission.READ_WHOLE_CALENDAR [since 23]
     * @param { number } start - 日程开始时间，类型为13位时间戳。
     * @param { number } end - 日程结束时间，类型为13位时间戳。
     * @param { number[] } [ids] - 需要查询的日程id数组，可为空数组或undefined。
     * @param { (keyof Event)[] } [eventKey] - 所有查询日程的字段。不填时，默认查询字段为：id、title、startTime、endTime、instanceStartTime、instanceEndTime、
	 * isAllDay、description、timeZone、location、service。若查询字段为空，则不返回该字段。
     * @returns { Promise<Event[]> } Promise对象，返回的是Event对象数组。
     * @throws { BusinessError } 201 - 权限校验失败。[since 23]
     * @throws { BusinessError } 23900004 - 内部程序错误，可能原因:
     *     <br>1. dataShare数据库执行错误；
     *	   <br>2. 空指针错误；
     *     <br>3. 数据解析错误。 [since 23]
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    queryEventInstances(start: number, end: number, ids?: number[], eventKey?: (keyof Event)[]): Promise<Event[]>;
	
	/**
     * Opens the event edit page.
     * @param { number } id - 传入的日程id为整数，表示日历中已存在的日程id，是日程的唯一标识符。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 23900001 - 参数值错误。
     * @throws { BusinessError } 23900005 - 该日程不支持编辑。
     * @syscap SystemCapability.Applications.CalendarData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    openEventEditPage(id: number): Promise<void>;
  }

  /**
   * 日历账户信息。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  interface CalendarAccount {
    /**
     * 账户名称（面向开发者），长度建议为[0,5000]字符。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    readonly name: string;

    /**
     * 账户类型。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    type: CalendarType;

    /**
     * 账户显示在日历应用上的名称（面向用户）。不填时，默认为空字符串，长度限制为[0,64]字符，长度超限制会导致日历应用上账户名显示不全，被截断。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    displayName?: string;
  }

  /**
   * 日历配置信息。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @since 10
   */

  interface CalendarConfig {
    /**
     * 是否打开Calendar下所有Event提醒能力。当取值为true时，该Calendar下所有Event具备提醒能力；当取值为false时，不具备提醒能力，默认具备提醒能力。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    enableReminder?: boolean;

    /**
     * 设置Calendar颜色。值为number时取值范围为0x000000至0xFFFFFF或0x00000000至0xFFFFFFFF，值为string时长度为7或9，如'#FFFFFF'，'#FFFFFFFFF'。
     * 不设置时默认值为0xFF0A59F7，输入undefined或错误值时抛异常。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    color?: number | string;
  }

 /**
   * 日程对象，包含日程标题、开始时间、结束时间等信息。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  interface Event {
    /**
     * 日程id。当调用[addEvent()]{@link calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>)}、
     * [addEvents()]{@link calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>)}创建日程时，不填写此
     * 参数；当调用[deleteEvent()]{@link calendarManager.Calendar.deleteEvent(id: number, callback: AsyncCallback<void>)}、
     * [deleteEvents()]{@link calendarManager.Calendar.deleteEvents(ids: number[], callback: AsyncCallback<void>)}删除日程时，
     * 日程id数组，日程id需为整数，传入其他非法入参会报错。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    id?: number;

    /**
     * 日程类型。   
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    type: EventType;

    /**
     * 日程标题。长度建议为[0,5000]字符，不填时，默认为空字符串。 
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    title?: string;

    /**
     * 日程地点。不填时，默认为undefined。   
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    location?: Location;

    /**
     * 日程开始时间，需要13位时间戳。全天日程时，该字段转换为传入日期00:00对应的时间戳。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    startTime: number;

    /**
     * 日程结束时间，需要13位时间戳。全天日程时，该字段转换为传入日期24:00对应的时间戳。       * 
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    endTime: number;

    /**
     * 是否为全天日程。当取值为true时，说明为全天日程；当取值为false时，说明不是全天日程，默认为非全天日程。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    isAllDay?: boolean;

    /**
     * 会议日程参与者。不填时，默认为null。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    attendee?: Attendee[];

    /**
     * 日程时区。日程时区。长度建议为[0,5000]字符，不填或异常值时，默认为当前所在时区，当需要创建与当前不一样的时区时，可填入对应的时区。可通过
     * [systemDateTime.getTimezone()]{@link @ohos.systemDateTime:systemDateTime.getTimezone(callback: AsyncCallback<string>)}
     * 获取当前系统时区。 
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    timeZone?: string;

    /**
     * 日程提醒时间，单位为分钟。填写x分钟，即距开始时间提前x分钟提醒，不填时，默认为不提醒。为负值时表示延期多长时间提醒。全天日程时此字段表示上午9:00前x分钟提醒，可取负值，负值表示上午9:00后多长时间提醒。 
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    reminderTime?: number[];

    /**
     * 日程重复规则，设置了此字段的日程为重复日程。不填时，默认为非重复日程。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    recurrenceRule?: RecurrenceRule;

    /**
     * 日程描述。长度建议为[0,5000]字符，不填时，默认为空字符串。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    description?: string;

    /**
     * <!--RP1-->日程服务。不填时，默认没有一键服务。暂不支持此功能。<!--RP1End-->   
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    service?: EventService;

    /**
     * 写入方可指定日程唯一标识。长度建议为[0,5000]字符，不填时，默认为null。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    identifier?: string;

    /**
     * 是否为农历日程。当取值为true时，说明为农历日程；当取值为false时，说明不是农历日程，默认为非农历日程。
     * 
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    isLunar?: boolean;

    /**
     * 日程实例开始时间，需要13位时间戳。当调用[addEvent()]{@link calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>)}、
     * [addEvents()]{@link calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>)}创建日程时，不填写此参数。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    instanceStartTime?: number;

    /**
     * 日程实例结束时间，需要13位时间戳。当调用[addEvent()]{@link calendarManager.Calendar.addEvent(event: Event, callback: AsyncCallback<number>)}、
     * [addEvents()]{@link calendarManager.Calendar.addEvents(events: Event[], callback: AsyncCallback<void>)}创建日程时，不填写此参数。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    instanceEndTime?: number;
  }

  /**
   * 账户类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  enum CalendarType {
    /**
     * 本地账户。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    LOCAL = 'local',

    /**
     * 邮箱账户。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    EMAIL = 'email',

    /**
     * 生日账户。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    BIRTHDAY = 'birthday',

    /**
     * 支持CalDAV协议账户。CalDAV是一种基于WebDAV的互联网开放协议，用于在多设备间同步、共享和管理日历、事件和任务数据。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    CALDAV = 'caldav',

    /**
     * 订阅账户。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SUBSCRIBED = 'subscribed'
  }

  /**
   * 日程地点。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  interface Location {
    /**
     * 日程地点。不填时，默认为undefined。   
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    location?: string;

    /**
     * 地点经度。取值范围[-180, 180]，默认为undefined。超过取值范围地图将无法正常显示。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    longitude?: number;

    /**
     * 地点纬度。取值范围[-90, 90]，默认为undefined。超过取值范围地图将无法正常显示。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    latitude?: number;
  }

  /**
   * 日程过滤器，查询日程时进行筛选过滤，获取符合条件的日程。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @since 10
   */
  class EventFilter {
    /**
     * 根据日程id过滤日程。
     *
     * @param {number[]} ids - 日程id数组，日程id需为整数。
     * @returns { EventFilter } 返回日程过滤器对象。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    static filterById(ids: number[]): EventFilter;

    /**
     * 根据日程时间过滤日程。
     *
     * @param { number } start - 开始时间。格式为13位时间戳。
     * @param { number } end - 结束时间。格式为13位时间戳。
     * @returns { EventFilter } 返回日程过滤器对象。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    static filterByTime(start: number, end: number): EventFilter;

    /**
     * 根据日程标题过滤日程，该条件为模糊匹配。
     *
     * @param { string } title - 日程标题。长度建议为[0,5000]字符。
     * @returns {EventFilter } 返回日程过滤器对象。
     * @syscap SystemCapability.Applications.CalendarData
     * @since 10
     */
    static filterByTitle(title: string): EventFilter;
  }

  /**
   * 日程类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  enum EventType {
    /**
     * 普通日程，例如会议，闹钟等日常提醒的日程。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    NORMAL = 0,

    /**
     * 重要日程，例如结婚纪念日等具有重要意义的日期，不推荐三方开发者使用，重要日程类型不支持一键服务跳转功能及无法自定义提醒时间。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    IMPORTANT = 1
  }

  /**
   * 重复日程重复规则。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface RecurrenceRule {
    /**
     * 日程重复规则类型。  
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    recurrenceFrequency: RecurrenceFrequency;

    /**
     * 重复周期截止日。格式为13位时间戳，不填时则日程无截止日期。   
     * 
     * 当expire与count和interval同时设置时，以先到达的限制条件及效果为准。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    expire?: number;

    /**
     * 重复日程的重复次数，取值为非负整数，浮点数输入将向下取整，不填时默认为0，表示不会限定重复次数，会一直重复。取值为负时，效果等同于取值为0。
     * 当count与interval和expire同时设置时，以先到达的限制条件及效果为准。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    count?: number;

    /**
     * 重复日程的重复周期，取值为非负整数，浮点数输入将向下取整。
     * 不填时默认为0，当取值为0、1或负值时，表示日程每天/周/月/年重复一次。
     * 当interval与count和expire同时设置时，以先到达的限制条件及效果为准。
     * 此属性与recurrenceFrequency重复规则相关，不同的重复规则下，表示的重复周期不同，以interval取2为例，分为以下几种情况：
     * 每天重复时：表示日程每两天重复一次。
     * 每周重复时：表示日程每两周重复一次。
     * 每月重复时：表示日程每两月重复一次。
     * 每年重复时：表示日程每两年重复一次。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    interval?: number;

    /**
     * 重复日程的排除日期，参数取值为时间戳格式，不填时，默认为空，表示没有排除的日期，0或负数为无效值，与空值效果相同。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    excludedDates?: number[];

    /**
     * 按照一周第几天重复。不填时，默认为空，表示没有一周第几天重复的规则。范围为[1, 7]，对应周一到周日，其他值为无效值，与空值效果相同。该字段数组与其相关字段数组为一一对应关系，
     * 如weeksOfMonth为[1, 2, 3]，daysOfWeek为[1, 2, 3]，则表示按照每月的第一周的周一，第二周的周二，第三周的周三进行重复。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    daysOfWeek?: number[];

    /**
     * 按照一个月第几天重复。不填时，默认为空，表示没有一个月第几天重复的规则。范围为[1, 31]，[1, 31]对应1到31号，其他值为无效值，与空值效果相同。若当月没有29号、30号或31号，
     * 则29、30、31也为无效值。该字段数组与其相关字段数组为一一对应关系，如monthsOfYear为[1, 2, 3]，daysOfMonth为[1, 2, 3]，则表示按照一月一号，二月二号，三月三号进行重复。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    daysOfMonth?: number[];

    /**
     * 按照一年第几天重复。不填时，默认为空，表示没有一年第几天重复的规则。范围为[1, 366]，[1, 366]表示一年的1到366天，其他值为无效值，与空值效果相同。若当年没有366天，366也为无效值。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    daysOfYear?: number[];

    /**
     * 按照一个月第几周重复。不填时，默认为空，表示没有一个月第几周重复的规则。范围为[1, 5]，[1, 5]为每月的第1到第5周，其他值为无效值，与空值效果相同。若当月没有第五周，5也为无效值。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    weeksOfMonth?: number[];

    /**
     * 按照一年中第几周重复。不填时，默认为空，表示没有一年第几周重复的规则。范围为[1, 53]，[1, 53]为每年的第1到第53周，其他值为无效值，与空值效果相同。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    weeksOfYear?: number[];

    /**
     * 按照一年中第几个月重复。不填时，默认为空，表示没有一年第几个月重复的规则。范围为[1, 12]，[1, 12]为每年的1到12月，其他值为无效值，与空值效果相同。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    monthsOfYear?: number[];
  }

  /**
   * 日程重复规则类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  export enum RecurrenceFrequency {
    /**
     * 每年重复。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    YEARLY = 0,

    /**
     * 每月重复。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    MONTHLY = 1,

    /**
     * 每周重复。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    WEEKLY = 2,

    /**
     * 每天重复。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    DAILY = 3
  }

  /**
   * 会议日程参与者。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface Attendee {
    /**
     * 会议日程参与者的姓名。长度建议为[0,5000]字符。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    name: string;

    /**
     * 会议日程参与者的邮箱，邮箱格式为“用户名@域名.后缀”，用户名部分只能包含字母、数字、下划线“_”、点 “.”、连字符 “-”。不能以点 “.” 开头或结尾。 不能连续出现两个点（即“..”）。长度建议为[0,5000]字符。   
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    email: string;

    /**
     * 会议日程参与者的角色，不填时默认为空。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    role?: AttendeeRole;

    /**
     * 会议日程参与者的类型，不填时默认为空。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    type?: AttendeeType;

    /**
     * 会议日程参与者的状态，不填时默认为空。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    status?: AttendeeStatus;
  }

  /**
   * 会议日程参与者角色类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice
   * @since 12
   */
  export enum AttendeeRole {
    /**
     * 会议组织者。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    ORGANIZER = 'organizer',

    /**
     * 会议参与者。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 12
     */
    PARTICIPANT = 'participant'
  }

  /**
   * 会议日程参与者受邀类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice
   * @since 18
   */
  export enum AttendeeType {
    /**
     * 会议日程主送者。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    REQUIRED = 1,

    /**
     * 会议日程抄送者。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    OPTIONAL = 2,

    /**
     * 会议中使用的资源（电视或投影仪等）。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    RESOURCE = 3
  }

  /**
   * 会议日程参与者状态类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice
   * @since 18
   */
  export enum AttendeeStatus {
    /**
     * 参与者状态未知。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    UNKNOWN = 0,

    /**
     * 参与者状态暂定。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    TENTATIVE = 1,

    /**
     * 参与者已接受。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    ACCEPTED = 2,

    /**
     * 参与者已拒绝。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    DECLINED = 3,

    /**
     * 参与者未响应。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice
     * @since 18
     */
    UNRESPONSIVE = 4
  }

  /**
   * 日程服务。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */

  export interface EventService {
    /**
     * 服务类型。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    type: ServiceType;

    /**
     * 服务的uri，格式为DeepLink类型。可以跳转到三方应用相应界面。长度建议为[0,5000]字符。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    uri: string;

    /**
     * 服务辅助描述。长度建议为[0,5000]字符，不填时，默认为空字符串。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    description?: string;
  }

  /**
   * 日程服务类型枚举。
   *
   * @syscap SystemCapability.Applications.CalendarData
   * @atomicservice [since 11]
   * @since 10
   */
  export enum ServiceType {
    /**
     * 一键入会。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    MEETING = 'Meeting',

    /**
     * 一键追剧。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    WATCHING = 'Watching',

    /**
     * 一键还款。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    REPAYMENT = 'Repayment',

    /**
     * 一键直播。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    LIVE = 'Live',

    /**
     * 一键购物。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SHOPPING = 'Shopping',

    /**
     * 一键查看。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    TRIP = 'Trip',

    /**
     * 一键上课。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    CLASS = 'Class',

    /**
     * 一键看赛事。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SPORTS_EVENTS = 'SportsEvents',

    /**
     * 一键运动。
     *
     * @syscap SystemCapability.Applications.CalendarData
     * @atomicservice [since 11]
     * @since 10
     */
    SPORTS_EXERCISE = 'SportsExercise'
  }
}

export default calendarManager;
