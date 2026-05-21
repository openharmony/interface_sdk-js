/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @file System Timer
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import { WantAgent } from './@ohos.app.ability.wantAgent';

/**
 * The **systemTimer** module provides system timer features. You can use the APIs of this module to implement the alarm
 * clock and other timer services.
 *
 * @syscap SystemCapability.MiscServices.Time
 * @systemapi Hide this for inner system use.
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace systemTimer {
  /**
   * CPU time type. (The start time of the timer cannot be later than the current system time.)
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_REALTIME: int;

  /**
   * Wakeup type. (If the wakeup type is not set, the system does not wake up until it exits the sleep state.)
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_WAKEUP: int;

  /**
   * Exact type. (If the system time is changed, the offset may be 1s at most.)
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_EXACT: int;

  /**
   * Idle timer type (supported only for system services).
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_IDLE: int;

  /**
   * Creates a timer. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > This API must be used together with 
   * > [systemTimer.destroyTimer]{@link systemTimer.destroyTimer(timer: long, callback: AsyncCallback<void>)}. Otherwise
   * > , memory leakage occurs.
   *
   * @param { TimerOptions } options - Timer initialization options, including the timer type, whether the timer is a
   *     repeating timer, interval, and **WantAgent** options.
   * @param { AsyncCallback<long> } callback - Callback used to return the timer ID.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function createTimer(options: TimerOptions, callback: AsyncCallback<long>): void;

  /**
   * Creates a timer. This API uses a promise to return the timer ID.
   * 
   * > **NOTE**
   * >
   * > This API must be used together with 
   * > [systemTimer.destroyTimer]{@link systemTimer.destroyTimer(timer: long, callback: AsyncCallback<void>)}. Otherwise
   * > , memory leakage occurs.
   *
   * @param { TimerOptions } options - Timer initialization options, including the timer type, whether the timer is a
   *     repeating timer, interval, and **WantAgent** options.
   * @returns { Promise<long> } Promise used to return the timer ID.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter type.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function createTimer(options: TimerOptions): Promise<long>;

  /**
   * Starts a timer. This API uses an asynchronous callback to return the result.
   *
   * @param { long } timer - ID of the timer.
   * @param { long } triggerTime - Time when the timer is triggered, in milliseconds.<br>If **TIMER_TYPE_REALTIME** is
   *     set as the timer type, the value of **triggerTime** is the system startup time, which can be obtained by
   *     calling [systemDateTime.getUptime(STARTUP)]{@link @ohos.systemDateTime:systemDateTime.getUptime}.<br>If
   *     **TIMER_TYPE_REALTIME** is not set, the value of **triggerTime** is the wall time, which can be obtained by
   *     calling [systemDateTime.getTime()]{@link @ohos.systemDateTime:systemDateTime.getTime}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function startTimer(timer: long, triggerTime: long, callback: AsyncCallback<void>): void;

  /**
   * Starts a timer. This API uses a promise to return the result.
   *
   * @param { long } timer - ID of the timer.
   * @param { long } triggerTime - Time when the timer is triggered, in milliseconds.<br>If **TIMER_TYPE_REALTIME** is
   *     set as the timer type, the value of **triggerTime** is the system startup time, which can be obtained by
   *     calling [systemDateTime.getUptime(STARTUP)]{@link @ohos.systemDateTime:systemDateTime.getUptime}.<br>If
   *     **TIMER_TYPE_REALTIME** is not set, the value of **triggerTime** is the wall time, which can be obtained by
   *     calling [systemDateTime.getTime()]{@link @ohos.systemDateTime:systemDateTime.getTime}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function startTimer(timer: long, triggerTime: long): Promise<void>;

  /**
   * Stops the timer. This API uses an asynchronous callback to return the result.
   *
   * @param { long } timer - ID of the timer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function stopTimer(timer: long, callback: AsyncCallback<void>): void;

  /**
   * Stops a timer. This API uses a promise to return the result.
   *
   * @param { long } timer - ID of the timer.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function stopTimer(timer: long): Promise<void>;

  /**
   * Destroys a timer. This API uses an asynchronous callback to return the result.
   *
   * @param { long } timer - ID of the timer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function destroyTimer(timer: long, callback: AsyncCallback<void>): void;

  /**
   * Destroys a timer. This API uses a promise to return the result.
   *
   * @param { long } timer - ID of the timer.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameter types.
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function destroyTimer(timer: long): Promise<void>;

  /**
   * Defines the initialization options for the system timer.
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  interface TimerOptions {
    /**
     * Timer types. Use pipe (|) symbol
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    type: int;

    /**
     * Whether the timer is a repeating timer. The value **true** means that the timer is a repeating timer, and 
     * **false** means that the timer is a one-shot timer.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    repeat: boolean;

    /**
     * Interval between two consecutive timers, in milliseconds.
     * 
     * For a repeating timer, the minimum value of **interval** is 1s and the maximum value is 365 days. It is 
     * recommended that the value be greater than or equal to 5000 ms.
     * 
     * For a one-shot timer, the value is **0**.
     * 
     * Default value: **0**.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    interval?: long;

    /**
     * **WantAgent** object of the notification to be sent when the timer expires. (An application **MainAbility** can 
     * be started, but not a **ServiceAbility**.)
     * 
     * The default value is empty.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * Callback to be executed by the user.
     * 
     * The default value is empty.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callback?: () => void;

    /**
     * Whether the timer is restored after the device is restarted.
     * 
     * The value **true** means that the timer is restored after the restart, and the value **false** means the 
     * opposite.
     * 
     * This parameter can be set to **true** only for timers that are not of the **TIMER_TYPE_REALTIME** type and have 
     * **wantAgent** configured.
     * 
     * The default value is **false**.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    autoRestore?: boolean;

    /**
     * Timer name, with a maximum length of 64 bytes.
     * 
     * A UID cannot contain two timers with the same name. If a timer with the same name as an existing timer is created
     * , the existing timer is destroyed.
     * 
     * The default value is an empty string.
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    name?: string;
  }
}

export default systemTimer;