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
 * @file System Time and Time Zone
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * # Supported System Time Zones
 * 
 * The following table lists the supported system time zones and the respective offset (unit: h) between each time zone 
 * and time zone 0.
 * 
 * | Time Zone                          | Offset        |
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
 * # Supported System Time Zones
 * 
 * For details about the supported system time zones, see API 
 * [I18n.SystemLocaleManager.getTimeZoneCityItemArray()]{@link @ohos.i18n:i18n.SystemLocaleManager.getTimeZoneCityItemArray}
 * .
 */
/**
 * The **systemTime** module provides system time and time zone features. You can obtain the system time and time zone 
 * by using the following APIs.
 *
 * @syscap SystemCapability.MiscServices.Time
 * @crossplatform [since 18]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace systemDateTime {
  /**
   * Sets the system time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TIME
   * @param { long } time - Timestamp to set, in milliseconds.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 26.0.0]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTime(time: long, callback: AsyncCallback<void>): void;
  /**
   * Sets the system time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TIME
   * @param { long } time - Timestamp to set, in milliseconds.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 26.0.0]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTime(time: long): Promise<void>;

  /**
   * Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } isNano - Whether the time to return is in nanoseconds.<br>- **true**: The result is in
   *     nanoseconds.<br>- **false**: The result is in milliseconds.
   * @param { AsyncCallback<number> } callback - Callback used to return the time elapsed since the Unix epoch.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getTime
   */
  function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * Obtains the time elapsed since the Unix epoch. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the time elapsed since the Unix epoch, in
   *     milliseconds.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getTime
   */
  function getCurrentTime(callback: AsyncCallback<number>): void;

  /**
   * Obtains the time elapsed since the Unix epoch. This API uses a promise to return the result.
   *
   * @param { boolean } isNano - Whether the time to return is in nanoseconds. The default value is **false**.<br>-
   *     **true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds.
   * @returns { Promise<number> } Promise used to return the timestamp that has elapsed since the Unix epoch.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getTime
   */
  function getCurrentTime(isNano?: boolean): Promise<number>;

  /**
   * Obtains the time elapsed since the Unix epoch. This API returns the result synchronously.
   *
   * @param { boolean } [ isNanoseconds ] - Whether the time to return is in nanoseconds.<br>- **true**: The result is
   *     in nanoseconds.<br>- **false**: The result is in milliseconds.<br>The default value is **false**.
   * @returns { long } Time elapsed since the Unix epoch.
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  function getTime(isNanoseconds?: boolean): long;

  /**
   * Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { boolean } isNano - Whether the time to return is in nanoseconds.<br>- **true**: The result is in
   *     nanoseconds.<br>- **false**: The result is in milliseconds.
   * @param { AsyncCallback<number> } callback - Callback used to return the time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealActiveTime(callback: AsyncCallback<number>): void;

  /**
   * Obtains the time elapsed since system startup, excluding the deep sleep time. This API uses a promise to return the
   * result.
   *
   * @param { boolean } [isNano] - Whether the time to return is in nanoseconds. The default value is **false**.<br>-
   *     **true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds.
   * @returns { Promise<number> } Promise used to return the time elapsed since system startup, excluding the deep sleep
   *     time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealActiveTime(isNano?: boolean): Promise<number>;

  /**
   * Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { boolean } isNano - Whether the time to return is in nanoseconds.<br>- **true**: The result is in
   *     nanoseconds.<br>- **false**: The result is in milliseconds.
   * @param { AsyncCallback<number> } callback - Callback used to return the time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void;

  /**
   * Obtains the time elapsed since system startup, including the deep sleep time. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealTime(callback: AsyncCallback<number>): void;

  /**
   * Obtains the time elapsed since system startup, including the deep sleep time. This API uses a promise to return the
   * result.
   *
   * @param { boolean } [isNano] - Whether the time to return is in nanoseconds. The default value is **false**.<br>-
   *     **true**: The result is in nanoseconds.<br>- **false**: The result is in milliseconds.
   * @returns { Promise<number> } Promise used to return the time elapsed since system startup, including the deep sleep
   *     time.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead systemDateTime.getUptime
   */
  function getRealTime(isNano?: boolean): Promise<number>;

  /**
   * Enumerates the types of time to obtain.
   *
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  enum TimeType {
    /**
     * Number of milliseconds elapsed since system startup, including the deep sleep time.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @crossplatform [since 18]
     * @since 10 dynamic
     * @since 23 static
     */
    STARTUP = 0,

    /**
     * Number of milliseconds elapsed since system startup, excluding the deep sleep time.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @crossplatform [since 18]
     * @since 10 dynamic
     * @since 23 static
     */
    ACTIVE = 1
  }

  /**
   * Obtains the time elapsed since system startup. This API returns the result synchronously.
   *
   * @param { TimeType } timeType - Type of the time to be obtained. The value can only be `STARTUP` or `ACTIVE`.
   * @param { boolean } [ isNanoseconds ] - Whether the time to return is in nanoseconds.<br>- **true**: The result is
   *     in nanoseconds.<br>- **false**: The result is in milliseconds.<br>The default value is **false**.
   * @returns { long } Time elapsed since system startup.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed. This error code was added due to missing issues. [since 12]
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  function getUptime(timeType: TimeType, isNanoseconds?: boolean): long;

  /**
   * Sets the system date. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TIME
   * @param { Date } date - Target date. The value must be greater than 0.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead systemDateTime.setTime(time: long, callback: AsyncCallback<void>)
   */
  function setDate(date: Date, callback: AsyncCallback<void>): void;

  /**
   * Sets the system date. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TIME
   * @param { Date } date - Target date. The value must be greater than 0.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead systemDateTime.setTime(time: long, callback: AsyncCallback<void>)
   */
  function setDate(date: Date): Promise<void>;

  /**
   * Obtains the current system date. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Date> } callback - Callback used to return the current system date.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. System error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead new Date()
   */
  function getDate(callback: AsyncCallback<Date>): void;

  /**
   * Obtains the current system date. This API uses a promise to return the result.
   *
   * @returns { Promise<Date> } Promise used to return the current system date.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. System error.
   * @syscap SystemCapability.MiscServices.Time
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead new Date()
   */
  function getDate(): Promise<Date>;

  /**
   * Sets the system time zone. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TIME_ZONE
   * @param { string } timezone - System time zone to set. For details, see
   *     [Supported System Time Zones](docroot://reference/apis-basic-services-kit/js-apis-system-date-time-sys.md#supported-system-time-zones)
   *     .
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 26.0.0]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTimezone(timezone: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the system time zone. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TIME_ZONE
   * @param { string } timezone - System time zone to set. For details, see
   *     [Supported System Time Zones](docroot://reference/apis-basic-services-kit/js-apis-system-date-time-sys.md#supported-system-time-zones)
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 26.0.0]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 9 dynamic
   * @since 23 static
   */
  function setTimezone(timezone: string): Promise<void>;

  /**
   * Obtains the system time zone. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } callback - Callback used to return the system time zone. For details, see
   *     [Supported System Time Zones](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#supported-system-time-zones)
   *     .
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTimezone(callback: AsyncCallback<string>): void;

  /**
   * Obtains the system time zone. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the system time zone. For details, see
   *     [Supported System Time Zones](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#supported-system-time-zones)
   *     .
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTimezone(): Promise<string>;

  /**
   * Obtains the system time zone in synchronous mode.
   *
   * @returns { string } System time zone. For details, see
   *     [Supported System Time Zones](docroot://reference/apis-basic-services-kit/js-apis-date-time.md#supported-system-time-zones)
   *     .
   * @syscap SystemCapability.MiscServices.Time
   * @crossplatform [since 18]
   * @since 10 dynamic
   * @since 23 static
   */
  function getTimezoneSync(): string;

  /**
   * Updates the NTP time from the NTP server This API returns the result asynchronously. In this way, the NTP time is 
   * updated from the NTP server only once within one hour.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13000001 - Network connection error or OS error.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 14 dynamic
   * @since 23 static
   */
  function updateNtpTime(): Promise<void>;

  /**
   * Obtains the actual time calculated based on the last updated NTP time. This API returns the result synchronously.
   *
   * @returns { long } Unix epoch time (ms) calculated based on the last updated NTP time.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13000002 - updateNtpTime() is not called successfully.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use
   * @since 14 dynamic
   * @since 23 static
   */
  function getNtpTime(): long;

  /**
   * Obtains the switch status of the automatic time setting. This API returns the result synchronously.
   *
   * @returns { boolean } Switch status of the automatic time setting.
   *     <br>- **true**: The automatic time setting is on.
   *     <br>- **false**: The automatic time setting is off.
   * @throws { BusinessError } 13000001 - Network connection error or OS error. Possible causes: 1.System memory is
   *     insufficient; 2.Calls the underlying system interface failed.
   * @syscap SystemCapability.MiscServices.Time
   * @since 21 dynamic
   * @since 23 static
   */
  function getAutoTimeStatus(): boolean;

  /**
   * Sets the status of the automatic time setting. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TIME
   * @param { boolean } status - Whether to enable the automatic time setting.<br>- **true**: Enable the automatic time
   *     setting.<br>- **false**: Disable the automatic time setting.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 13000001 - Network connection error or OS error. Possible causes:
   *     1. System memory is insufficient;
   *     2. Calls the underlying system interface failed.
   * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
   *     1. The operation is restricted by the OS-account constraint.
   *     2. The required privilege for the operation has not been granted. [since 26.0.0]
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setAutoTimeStatus(status: boolean): Promise<void>;
}

export default systemDateTime;
