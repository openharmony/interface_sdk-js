/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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
 * @file 系统时间、时区
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * # 支持的系统时区
 * 
 * 支持的系统时区及各时区与0时区相比的偏移量（单位：h）可见下表。
 * 
 * | 时区                           | 偏移量         |
 * | ------------------------------ | --------------------- |
 * | Antarctica/McMurdo             | 12                    |
 * | America/Argentina/Buenos_Aires | -3                    |
 * | Australia/Sydney               | 10                    |
 * | America/Noronha                | -2                    |
 * | America/St_Johns               | -3                    |
 * | Africa/Kinshasa                | 1                     |
 * | America/Santiago               | -3                    |
 * | Asia/Shanghai                  | 8                     |
 * | Asia/Nicosia                   | 3                     |
 * | Europe/Berlin                  | 2                     |
 * | America/Guayaquil              | -5                    |
 * | Europe/Madrid                  | 2                     |
 * | Pacific/Pohnpei                | 11                    |
 * | America/Godthab                | -2                    |
 * | Asia/Jakarta                   | 7                     |
 * | Pacific/Tarawa                 | 12                    |
 * | Asia/Almaty                    | 6                     |
 * | Pacific/Majuro                 | 12                    |
 * | Asia/Ulaanbaatar               | 8                     |
 * | America/Mexico_City            | -5                    |
 * | Asia/Kuala_Lumpur              | 8                     |
 * | Pacific/Auckland               | 12                    |
 * | Pacific/Tahiti                 | -10                   |
 * | Pacific/Port_Moresby           | 10                    |
 * | Asia/Gaza                      | 3                     |
 * | Europe/Lisbon                  | 1                     |
 * | Europe/Moscow                  | 3                     |
 * | Europe/Kiev                    | 3                     |
 * | Pacific/Wake                   | 12                    |
 * | America/New_York               | -4                    |
 * | Asia/Tashkent                  | 5                     |
 */
/**
 * 本模块主要由系统时间和系统时区功能组成。开发者可以设置、获取系统时间及系统时区。
 *
 * @syscap SystemCapability.MiscServices.Time
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.systemDateTime:systemDateTime
 */
declare namespace systemTime {
  /**
   * 设置系统时间，使用callback异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { number } time - 目标时间戳（ms）。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.setTime
   */
  function setTime(time: number, callback: AsyncCallback<void>): void;

  /**
   * 设置系统时间，使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { number } time - 目标时间戳（ms）。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.setTime
   */
  function setTime(time: number): Promise<void>;

  /**
   * 获取自Unix纪元以来经过的时间，使用callback异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数。<br>- true：表示返回结果为纳秒数（ns）。 <br>- false：表示返回结果为毫秒数（ms）。
   * @param { AsyncCallback<number> } callback - 回调函数，返回自Unix纪元以来经过的时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getTime
   */
  function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * 获取自Unix纪元以来经过的时间，使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 回调函数，返回自Unix纪元以来经过的时间（ms）。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getTime
   */
  function getCurrentTime(callback: AsyncCallback<number>): void;

  /**
   * 获取自Unix纪元以来经过的时间，使用Promise异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数，默认值为false。<br/>默认值为false。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数
   *     （ms）。
   * @returns { Promise<number> } Promise对象，返回自Unix纪元以来经过的时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getTime
   */
  function getCurrentTime(isNano?: boolean): Promise<number>;

  /**
   * 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间，不包括深度睡眠时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getUptime
   */
  function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间（ms），不包括深度睡眠时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getUptime
   */
  function getRealActiveTime(callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用Promise异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数，默认值为false。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @returns { Promise<number> } Promise对象，返回自系统启动以来经过的时间，但不包括深度睡眠时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getUptime
   */
  function getRealActiveTime(isNano?: boolean): Promise<number>;

  /**
   * 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间，包括深度睡眠时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getUptime
   */
  function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间（ms），包括深度睡眠时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getUptime
   */
  function getRealTime(callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，包括深度睡眠时间，使用Promise异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数，默认值为false。<br/>默认值为false。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数
   *     （ms）。
   * @returns { Promise<number> } Promise对象，返回自系统启动以来经过的时间，包括深度睡眠时间。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getUptime
   */
  function getRealTime(isNano?: boolean): Promise<number>;

  /**
   * 设置系统日期，使用callback异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { Date } date - 目标日期。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.setDate
   */
  function setDate(date: Date, callback: AsyncCallback<void>): void;

  /**
   * 设置系统日期，使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { Date } date - 目标日期。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.setDate
   */
  function setDate(date: Date): Promise<void>;

  /**
   * 获取当前系统日期，使用callback异步回调。
   *
   * @param { AsyncCallback<Date> } callback - 回调函数，返回当前系统日期。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getDate
   */
  function getDate(callback: AsyncCallback<Date>): void;

  /**
   * 获取当前系统日期，使用Promise异步回调。
   *
   * @returns { Promise<Date> } Promise对象，返回当前系统日期。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getDate
   */
  function getDate(): Promise<Date>;

  /**
   * 设置系统时区，使用callback异步回调。
   *
   * @permission ohos.permission.SET_TIME_ZONE
   * @param { string } timezone - 系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-time.md#支持的系统时区) 。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.setTimezone
   */
  function setTimezone(timezone: string, callback: AsyncCallback<void>): void;

  /**
   * 使用Promise异步回调设置系统时区。
   *
   * @permission ohos.permission.SET_TIME_ZONE
   * @param { string } timezone - 系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-time.md#支持的系统时区) 。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.setTimezone
   */
  function setTimezone(timezone: string): Promise<void>;

  /**
   * 获取系统时区，使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-time.md#支持的系统时区) 。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getTimezone(callback: AsyncCallback<string>)
   */
  function getTimezone(callback: AsyncCallback<string>): void;

  /**
   * 获取系统时区，使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-time.md#支持的系统时区) 。
   * @throws { BusinessError } -1 - Parameter check failed, permission denied, or system error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.systemDateTime:systemDateTime.getTimezone()
   */
  function getTimezone(): Promise<string>;
}

export default systemTime;