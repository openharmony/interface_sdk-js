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
 * @file 系统定时器
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import { WantAgent } from './@ohos.app.ability.wantAgent';

/**
 * 本模块主要由系统定时器功能组成。开发者可以使用定时功能实现定时服务，如闹钟等。
 *
 * @syscap SystemCapability.MiscServices.Time
 * @systemapi Hide this for inner system use.
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace systemTimer {
  /**
   * 系统启动时间定时器（定时器启动时间不能晚于当前设置的系统时间）。
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_REALTIME: int;

  /**
   * 唤醒定时器（如果未配置为唤醒定时器，则系统处于休眠状态下不会触发，直到退出休眠状态）。
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_WAKEUP: int;

  /**
   * 精准定时器（系统时间修改的情况下，可能会出现最多1s的前后偏移误差）。
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_EXACT: int;

  /**
   * IDLE模式定时器（仅支持系统服务配置，不支持应用配置）。
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  const TIMER_TYPE_IDLE: int;

  /**
   * 创建定时器，使用callback异步回调。
   * 
   * > **注意：**
   * >
   * > 需与[systemTimer.destroyTimer]{@link systemTimer.destroyTimer(timer: long, callback: AsyncCallback<void>)}结合使用，否则会造
   * > 成内存泄漏
   *
   * @param { TimerOptions } options - 创建系统定时器的初始化选项，包括定时器类型、是否循环触发、间隔时间、WantAgent通知机制等。
   * @param { AsyncCallback<long> } callback - 回调函数，返回定时器的ID。
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
   * 创建定时器，使用Promise异步回调返回定时器的ID。
   * 
   * > **注意：**
   * >
   * > 需与[systemTimer.destroyTimer]{@link systemTimer.destroyTimer(timer: long, callback: AsyncCallback<void>)}结合使用，否则会造
   * > 成内存泄漏
   *
   * @param { TimerOptions } options - 创建系统定时器的初始化选项，包括定时器类型、是否循环触发、间隔时间、WantAgent通知机制等。
   * @returns { Promise<long> } Promise对象，返回定时器的ID。
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
  function createTimer(options: TimerOptions): Promise<long>;

  /**
   * 开启定时器，使用callback异步回调。
   *
   * @param { long } timer - 定时器的ID。
   * @param { long } triggerTime - 定时器的触发时间，单位：毫秒。<br/>若定时器类型包含了TIMER_TYPE_REALTIME，该triggerTime应为系统启动时间，建议通过
   *     [systemDateTime.getUptime(STARTUP)]{@link @ohos.systemDateTime:systemDateTime.getUptime}获取；<br/>若定时器类型不包含
   *     TIMER_TYPE_REALTIME，该triggerTime应为墙上时间，建议通过
   *     [systemDateTime.getTime()]{@link @ohos.systemDateTime:systemDateTime.getTime}获取。
   * @param { AsyncCallback<void> } callback - 回调函数。
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
   * 开启定时器，使用Promise进行异步回调。
   *
   * @param { long } timer - 定时器的ID。
   * @param { long } triggerTime - 定时器的触发时间，单位：毫秒。<br/>若定时器类型包含了TIMER_TYPE_REALTIME，该triggerTime应为系统启动时间，建议通过
   *     [systemDateTime.getUptime(STARTUP)]{@link @ohos.systemDateTime:systemDateTime.getUptime}获取；<br/>若定时器类型不包含
   *     TIMER_TYPE_REALTIME，该triggerTime应为墙上时间，建议通过
   *     [systemDateTime.getTime()]{@link @ohos.systemDateTime:systemDateTime.getTime}获取。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 该方法停止定时器，并使用callback进行异步回调。
   *
   * @param { long } timer - 定时器的ID。
   * @param { AsyncCallback<void> } callback - 回调函数。
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
   * 此方法用于停止定时器，并使用Promise异步回调。
   *
   * @param { long } timer - 定时器的ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 销毁定时器，使用callback异步回调。
   *
   * @param { long } timer - 定时器的ID。
   * @param { AsyncCallback<void> } callback - 回调函数。
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
   * 销毁定时器，使用Promise进行异步回调。
   *
   * @param { long } timer - 定时器的ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 创建系统定时器的初始化选项。
   *
   * @syscap SystemCapability.MiscServices.Time
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  interface TimerOptions {
    /**
     * 定时器类型，可以使用 '|' 多选。
     * 
     * 取值为1，表示为系统启动时间定时器（定时器启动时间不能晚于当前设置的系统时间）；
     * 
     * 取值为2，表示为唤醒定时器；
     * 
     * 取值为4，表示为精准定时器（APP被冻结时，定时器也会被冻结，并且定时器受统一心跳管控，因此即使是精准定时器也不能确保在指定时间点触发）；
     * 
     * 取值为8，表示为IDLE模式定时器（仅支持系统服务配置，不支持应用配置）。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    type: int;

    /**
     * 是否为循环定时器。true表示循环定时器，false表示单次定时器。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    repeat: boolean;

    /**
     * 定时器时间间隔，单位：毫秒。
     * 
     * 如果是循环定时器，interval值最小为1s，最大为365天，建议interval值不小于5000毫秒；
     * 
     * 单次定时器interval值为0。
     * 
     * 默认值为0。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    interval?: long;

    /**
     * 设置通知的WantAgent，定时器到期后通知（支持拉起应用MainAbility，不支持拉起ServiceAbility）。
     * 
     * 默认值为空。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    wantAgent?: WantAgent;

    /**
     * 用户需要执行的回调函数。
     * 
     * 默认值为空。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callback?: () => void;

    /**
     * 是否在设备重启后恢复。
     * 
     * true为重启后恢复，false为重启后不恢复。
     * 
     * 仅支持非`TIMER_TYPE_REALTIME`类型且配置了wantAgent的定时器配置为true。
     * 
     * 默认值为false。
     *
     * @syscap SystemCapability.MiscServices.Time
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    autoRestore?: boolean;

    /**
     * 定时器名称，长度不超过64字节。
     * 
     * 同一个UID中不可以同时存在两个同名定时器。如果创建了一个和之前已创建的定时器名字相同的定时器，先创建的定时器会被销毁。
     * 
     * 默认值为空字符串。
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