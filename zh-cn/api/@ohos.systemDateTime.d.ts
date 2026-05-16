/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * 支持的系统时区及各时区与0时区相比的偏移量(单位：h)可见下表。
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
 * # 支持的系统时区
 * 
 * 支持的系统时区参考接口
 * [I18n.SystemLocaleManager.getTimeZoneCityItemArray()]{@link @ohos.i18n:i18n.SystemLocaleManager.getTimeZoneCityItemArray}
 * 。
 */
/**
 * 本模块主要由系统时间和系统时区功能组成。开发者可以获取系统时间及系统时区。
 *
 * @syscap SystemCapability.MiscServices.Time
 * @crossplatform [since 18]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace systemDateTime {
  /**
   * 设置系统时间，使用callback异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { long } time - 目标时间戳(ms)。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 24]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTime(time: long, callback: AsyncCallback<void>): void;
  /**
   * 设置系统时间，使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { long } time - 目标时间戳(ms)。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 24]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTime(time: long): Promise<void>;

  /**
   * 获取自Unix纪元以来经过的时间，使用callback异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数。<br>- true：表示返回结果为纳秒数（ns）。 <br>- false：表示返回结果为毫秒数（ms）。
   * @param { AsyncCallback<number> } callback - 回调函数，返回自Unix纪元以来经过的时间戳。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getTime
   */
  function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * 获取自Unix纪元以来经过的时间，使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 回调函数，返回自Unix纪元以来经过的时间戳（ms）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getTime
   */
  function getCurrentTime(callback: AsyncCallback<number>): void;

  /**
   * 获取自Unix纪元以来经过的时间，使用Promise异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数,默认值为false。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @returns { Promise<number> } Promise对象，返回自Unix纪元以来经过的时间戳。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getTime
   */
  function getCurrentTime(isNano?: boolean): Promise<number>;

  /**
   * 使用同步方式获取自Unix纪元以来到当前系统时间所经过的时间。
   *
   * @param { boolean } [ isNanoseconds ] - 返回结果是否为纳秒数。<br>- true：表示返回结果为纳秒数（ns）。 <br>- false：表示返回结果为毫秒数（ms）。<br>默认值为
   *     false。
   * @returns { long } 自Unix纪元以来到当前系统时间所经过的时间。
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  function getTime(isNanoseconds?: boolean): long;

  /**
   * 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间，但不包括深度睡眠时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间（ms），但不包括深度睡眠时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealActiveTime(callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，不包括深度睡眠时间，使用Promise异步回调。
   *
   * @param { boolean } [isNano] - 返回结果是否为纳秒数,默认值为false。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @returns { Promise<number> } Promise对象，返回自系统启动以来经过的时间，但不包括深度睡眠时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealActiveTime(isNano?: boolean): Promise<number>;

  /**
   * 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。
   *
   * @param { boolean } isNano - 返回结果是否为纳秒数。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间，包括深度睡眠时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，包括深度睡眠时间，使用callback异步回调。
   *
   * @param { AsyncCallback<number> } callback - 回调函数，返回自系统启动以来经过的时间（ms），包括深度睡眠时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealTime(callback: AsyncCallback<number>): void;

  /**
   * 获取自系统启动以来经过的时间，包括深度睡眠时间，使用Promise异步回调。
   *
   * @param { boolean } [isNano] - 返回结果是否为纳秒数,默认值为false。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。
   * @returns { Promise<number> } Promise对象，返回自系统启动以来经过的时间，包括深度睡眠时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealTime(isNano?: boolean): Promise<number>;

  /**
   * 定义获取时间的枚举类型。
   *
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  enum TimeType {
    /**
     * 自系统启动以来经过的毫秒数，包括深度睡眠时间。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @crossplatform [since 18]
     * @since 10 dynamic
     * @since 23 static
     */
    STARTUP = 0,

    /**
     * 自系统启动以来经过的毫秒数，不包括深度睡眠时间。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @crossplatform [since 18]
     * @since 10 dynamic
     * @since 23 static
     */
    ACTIVE = 1
  }

  /**
   * 使用同步方式获取自系统启动以来经过的时间。
   *
   * @param { TimeType } timeType - 获取时间的类型，仅能为`STARTUP`或者`ACTIVE`。
   * @param { boolean } [ isNanoseconds ] - 返回结果是否为纳秒数。<br/>- true：表示返回结果为纳秒数（ns）。 <br/>- false：表示返回结果为毫秒数（ms）。<br>默认值为
   *     false。
   * @returns { long } 自系统启动以来经过的时间。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed. This error code was added due to missing
   *     issues. [since 12]
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  function getUptime(timeType: TimeType, isNanoseconds?: boolean): long;

  /**
   * 设置系统日期，使用callback异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { Date } date - 目标日期，且必须>0。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed;
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead systemDateTime.setTime(time: long, callback: AsyncCallback<void>)
   */
  function setDate(date: Date, callback: AsyncCallback<void>): void;

  /**
   * 设置系统日期，使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { Date } date - 目标日期，且必须>0。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed;
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead systemDateTime.setTime(time: long, callback: AsyncCallback<void>)
   */
  function setDate(date: Date): Promise<void>;

  /**
   * 获取当前系统日期，使用callback异步回调。
   *
   * @param { AsyncCallback<Date> } callback - 回调函数，返回当前系统日期。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. System error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead new Date()
   */
  function getDate(callback: AsyncCallback<Date>): void;

  /**
   * 获取当前系统日期，使用Promise异步回调。
   *
   * @returns { Promise<Date> } Promise对象，返回当前系统日期。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. System error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead new Date()
   */
  function getDate(): Promise<Date>;

  /**
   * 设置系统时区，使用callback异步回调。
   *
   * @permission ohos.permission.SET_TIME_ZONE
   * @param { string } timezone - 系统时区。 具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-date-time-sys.md#支持的系统时区) 。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 24]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTimezone(timezone: string, callback: AsyncCallback<void>): void;

  /**
   * 设置系统时区，使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TIME_ZONE
   * @param { string } timezone - 系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-system-date-time-sys.md#支持的系统时区) 。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 24]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTimezone(timezone: string): Promise<void>;

  /**
   * 获取系统时区，使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#支持的系统时区)。
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTimezone(callback: AsyncCallback<string>): void;

  /**
   * 获取系统时区，使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回系统时区。具体可见
   *     [支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#支持的系统时区)。
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTimezone(): Promise<string>;

  /**
   * 获取系统时区，使用同步方式。
   *
   * @returns { string } 返回系统时区。具体可见[支持的系统时区](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#支持的系统时区)。
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  function getTimezoneSync(): string;

  /**
   * 使用异步方式从NTP服务器更新NTP时间。该方法一小时内只会从NTP服务器更新一次NTP时间。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13000001 - Network connection error or OS error.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 14 dynamic
   * @since 23 static
   */
  function updateNtpTime(): Promise<void>;

  /**
   * 使用同步方式获取基于上次更新的NTP时间所计算出的真实时间。
   *
   * @returns { long } 基于上次更新的NTP时间所计算出的Unix纪元时间(ms)。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13000002 - updateNtpTime() is not called successfully.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 14 dynamic
   * @since 23 static
   */
  function getNtpTime(): long;

  /**
   * 获取自动设置时间开关状态，使用同步方式。
   *
   * @returns { boolean } 返回自动设置时间开关状态。<br/>- true：表示自动设置时间开关状态为打开。 <br/>- false：表示自动设置时间开关状态为关闭。
   * @throws { BusinessError } 13000001 - Network connection error or OS error. Possible causes: 1.System memory is
   *     insufficient; 2.Calls the underlying system interface failed.
   * @syscap SystemCapability.MiscServices.Time
   * @since 21 dynamic
   * @since 23 static
   */
  function getAutoTimeStatus(): boolean;

  /**
   * 设置自动设置时间开关状态，使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TIME
   * @param { boolean } status - 设置自动设置时间开关状态。<br/>- true：表示打开自动设置时间开关。 <br/>- false：表示关闭自动设置时间开关。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13000001 - Network connection error or OS error. Possible causes:
   *     1. System memory is insufficient;
   *     2. Calls the underlying system interface failed.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 24]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setAutoTimeStatus(status: boolean): Promise<void>;
}

export default systemDateTime;