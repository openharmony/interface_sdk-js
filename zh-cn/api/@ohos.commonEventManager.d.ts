/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { CommonEventData as _CommonEventData } from './commonEvent/commonEventData';
import { CommonEventSubscriber as _CommonEventSubscriber } from './commonEvent/commonEventSubscriber';
import { CommonEventSubscribeInfo as _CommonEventSubscribeInfo } from './commonEvent/commonEventSubscribeInfo';
import { CommonEventPublishData as _CommonEventPublishData } from './commonEvent/commonEventPublishData';

/**
 * 本模块提供了公共事件相关的能力，包括发布公共事件、订阅公共事件、以及退订公共事件。
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace commonEventManager {
  /**
   * 发布公共事件。使用callback异步回调。
   *
   * @param { string } event - 表示要发送的公共事件。详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   * @param { AsyncCallback<void> } callback - 回调函数。当公共事件发布成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @throws { BusinessError } 1500003 - The common event sending frequency too high. [since 20]
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function publish(event: string, callback: AsyncCallback<void>): void;

  /**
   * 发布公共事件。使用callback异步回调。
   *
   * @param { string } event - 表示要发布的公共事件。详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   * @param { CommonEventPublishData } options - 表示发布公共事件的属性。
   * @param { AsyncCallback<void> } callback - 回调函数。当公共事件发布成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @throws { BusinessError } 1500003 - The common event sending frequency too high. [since 20]
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void;

  /**
   * 向指定用户发布公共事件。使用callback异步回调。
   *
   * @param { string } event - 表示要发送的公共事件。详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   * @param { int } userId - 表示指定向该用户ID发送此公共事件。
   * @param { AsyncCallback<void> } callback - 回调函数。当公共事件发布成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @throws { BusinessError } 1500003 - The common event sending frequency too high. [since 20]
   * @throws { BusinessError } 1500006 - Invalid userId. [since 21]
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function publishAsUser(event: string, userId: int, callback: AsyncCallback<void>): void;

  /**
   * 向指定用户发布公共事件并指定发布信息。使用callback异步回调。
   *
   * @param { string } event - 表示要发布的公共事件。详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   * @param { int } userId - 表示指定向该用户ID发送此公共事件。
   * @param { CommonEventPublishData } options - 表示发布公共事件的属性。
   * @param { AsyncCallback<void> } callback - 回调函数。当公共事件发布成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @throws { BusinessError } 1500003 - The common event sending frequency too high. [since 20]
   * @throws { BusinessError } 1500006 - Invalid userId. [since 21]
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function publishAsUser(
    event: string,
    userId: int,
    options: CommonEventPublishData,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 创建订阅者。使用callback异步回调。
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - 表示订阅信息。
   * @param { AsyncCallback<CommonEventSubscriber> } callback - 回调函数。当公共事件订阅者创建成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createSubscriber(
    subscribeInfo: CommonEventSubscribeInfo,
    callback: AsyncCallback<CommonEventSubscriber>
  ): void;

  /**
   * 创建订阅者。使用Promise异步回调。
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - 表示订阅信息。
   * @returns { Promise<CommonEventSubscriber> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise<CommonEventSubscriber>;

  /**
   * createSubscriber的同步接口。
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - 表示订阅信息。
   * @returns { CommonEventSubscriber } Promise used to return the subscriber object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function createSubscriberSync(subscribeInfo: CommonEventSubscribeInfo): CommonEventSubscriber;

  /**
   * 订阅公共事件。使用callback异步回调。
   *
   * @param { CommonEventSubscriber } subscriber - 表示订阅者对象。
   * @param { AsyncCallback<CommonEventData> } callback - 回调函数。当公共事件订阅成功后，事件触发时执行的回调函数；否则订阅失败时，err为错误对象。
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500010 - The count of subscriber exceed system specification. [since 20]
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback<CommonEventData>): void;

  /**
   * 订阅公共事件，并返回订阅成功或失败信息。使用Promise异步回调。
   *
   * @param { CommonEventSubscriber } subscriber - 表示订阅者对象。
   * @param { Callback<CommonEventData> } callback - 表示接收公共事件数据的回调函数。
   * @returns { Promise<void> } A promise that indicates whether the subscription was successful.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @throws { BusinessError } 1500010 - The count of subscriber exceed system specification.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function subscribeToEvent(subscriber: CommonEventSubscriber, callback: Callback<CommonEventData>): Promise<void>;

  /**
   * 取消订阅公共事件。使用callback异步回调。
   *
   * @param { CommonEventSubscriber } subscriber - 表示订阅者对象。
   * @param { AsyncCallback<void> } [callback] - 回调函数。当取消公共事件订阅成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - capability not supported
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function unsubscribe(subscriber: CommonEventSubscriber, callback?: AsyncCallback<void>): void;

  /**
   * 移除粘性公共事件。使用callback异步回调。
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - 表示被移除的粘性公共事件。详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   * @param { AsyncCallback<void> } callback - 回调函数。当移除粘性事件成功，err为undefined，否则为错误对象。。
   * @throws { BusinessError } 201 - The application dose not have permission to call the interface
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500004 - A third-party application cannot send system common events.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function removeStickyCommonEvent(event: string, callback: AsyncCallback<void>): void;

  /**
   * 移除粘性公共事件。使用Promise异步回调。
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - 表示被移除的粘性公共事件。详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The application dose not have permission to call the interface
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500004 - A third-party application cannot send system common events.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function removeStickyCommonEvent(event: string): Promise<void>;

  /**
   * 为当前应用设置静态订阅事件使能或去使能状态。使用callback异步回调。
   *
   * @param { boolean } enable - 表示静态订阅事件使能状态。 true:使能 false：去使能。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置静态订阅事件使能状态成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 为当前应用设置静态订阅事件使能或去使能状态。使用Promise异步回调。
   *
   * @param { boolean } enable - 表示静态订阅事件使能状态。 true:使能 false：去使能。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  function setStaticSubscriberState(enable: boolean): Promise<void>;

  /**
   * 为当前应用设置静态订阅事件的使能状态，并且记录事件名称。使用Promise异步回调。
   *
   * @param { boolean } enable - 表示静态订阅事件使能状态。 true：使能 false：去使能。
   * @param { Array<string> } events - 表示记录事件名称。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 12 dynamic
   */
  function setStaticSubscriberState(enable: boolean, events?: Array<string>): Promise<void>;

  /**
   * 为当前应用设置静态订阅事件的使能状态，并且记录事件名称。使用Promise异步回调。
   *
   * @param { boolean } enable - 表示静态订阅事件使能状态。 true：使能 false：去使能。
   * @param { Array<string> } events - 表示记录事件名称。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - not system app
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1500007 - Failed to send the message to the common event service.
   * @throws { BusinessError } 1500008 - Failed to initialize the common event service.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 23 static
   */
  function setStaticSubscriberState(enable: boolean, events: Array<string>): Promise<void>;

  /**
   * 系统公共事件是指由系统服务或系统应用发布的事件，订阅这些公共事件需要特定的权限、使用相应的值，详见[系统定义的公共事件]{@link @ohos.commonEventManager:commonEventManager}。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum Support {
    /**
     * 表示用户已完成引导并加载系统。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVER_STARTUP_COMPLETED权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BOOT_COMPLETED = 'usual.event.BOOT_COMPLETED',

    /**
     * （预留事件，暂未支持）提示用户已完成引导，系统已加载，但屏幕仍锁定。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_LOCKED_BOOT_COMPLETED = 'usual.event.LOCKED_BOOT_COMPLETED',

    /**
     * 表示设备正在关闭并将继续最终关闭的公共事件的操作。
     * 
     * 当设备正在关闭并将继续最终关闭时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SHUTDOWN = 'usual.event.SHUTDOWN',

    /**
     * 表示电池充电状态、电平和其他信息发生变化的公共事件的动作。
     * 
     * 当电池电量、电池温度、电池健康状态、设备连接的充电器类型、充电器最大电流、充电器最大电压、电池充电状态、充电次数、
     * 电池的总容量、电池剩余容量、电池的技术型号、电池的充电类型变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BATTERY_CHANGED = 'usual.event.BATTERY_CHANGED',

    /**
     * 表示电池电量低的普通事件的动作。
     * 
     * 当电池电量低于设备设置的低电量百分比值时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BATTERY_LOW = 'usual.event.BATTERY_LOW',

    /**
     * 表示电池退出低电量状态的公共事件的动作。
     * 
     * 当电池电量从低电量等级变化到电池电量高于低电量等级时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BATTERY_OKAY = 'usual.event.BATTERY_OKAY',

    /**
     * 设备连接到外部电源的公共事件的动作。
     * 
     * 当设备连接到外部可识别的充电器类型充电时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_POWER_CONNECTED = 'usual.event.POWER_CONNECTED',

    /**
     * 设备与外部电源断开的公共事件的动作。
     * 
     * 当设备与外部电源断开时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_POWER_DISCONNECTED = 'usual.event.POWER_DISCONNECTED',

    /**
     * 表示由电源服务发起的设备灭屏完成的普通事件的动作。
     * 
     * 当由电源服务发起的设备灭屏完成时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_OFF = 'usual.event.SCREEN_OFF',

    /**
     * 表示由电源服务发起的设备亮屏完成的普通事件的动作。
     * 
     * 当由电源服务发起的设备亮屏完成时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_ON = 'usual.event.SCREEN_ON',

    /**
     * 表示设备热状态的公共事件的动作。
     * 
     * 当设备热等级变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_THERMAL_LEVEL_CHANGED = 'usual.event.THERMAL_LEVEL_CHANGED',

    /**
     * 表示设备即将进入强制睡眠模式的公共事件的动作。
     * 
     * 当设备即将进入强制睡眠模式时，将会触发事件通知服务发布该系统公共事件。所有订阅者必须在1秒钟内处理该事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ENTER_FORCE_SLEEP = 'usual.event.ENTER_FORCE_SLEEP',

    /**
     * 表示设备退出强制睡眠模式的公共事件的动作。
     * 
     * 当设备退出强制睡眠模式时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXIT_FORCE_SLEEP = 'usual.event.EXIT_FORCE_SLEEP',

    /**
     * 表示设备即将进入休眠模式的公共事件的动作。
     * 
     * 当设备即将进入休眠模式时，将会触发事件通知服务发布该系统公共事件。所有订阅者必须在1秒钟内处理该事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ENTER_HIBERNATE = 'usual.event.ENTER_HIBERNATE',

    /**
     * 表示设备退出休眠模式的公共事件的动作。
     * 
     * 当设备退出休眠模式时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXIT_HIBERNATE = 'usual.event.EXIT_HIBERNATE',

    /**
     * 用户解锁设备的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstand commonEventManager.Support#COMMON_EVENT_SCREEN_UNLOCKED
     */
    COMMON_EVENT_USER_PRESENT = 'usual.event.USER_PRESENT',

    /**
     * 表示系统时间更改的公共事件的动作。
     * 
     * 当以整分钟为单位的系统时间更改时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_TIME_TICK = 'usual.event.TIME_TICK',

    /**
     * 设置系统时间的公共事件的动作。
     * 
     * 当设置系统时间时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_TIME_CHANGED = 'usual.event.TIME_CHANGED',

    /**
     * （预留事件，暂未支持）表示系统日期已更改的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DATE_CHANGED = 'usual.event.DATE_CHANGED',

    /**
     * 表示系统时区更改的公共事件的动作。
     * 
     * 当系统时区更改时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_TIMEZONE_CHANGED = 'usual.event.TIMEZONE_CHANGED',

    /**
     * （预留事件，暂未支持）表示用户关闭临时系统对话框的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CLOSE_SYSTEM_DIALOGS = 'usual.event.CLOSE_SYSTEM_DIALOGS',

    /**
     * 表示设备上已安装新应用包的公共事件的动作。
     * 
     * 在设备上指定用户下安装了新的应用程序，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_ADDED = 'usual.event.PACKAGE_ADDED',

    /**
     * （预留事件，暂未支持）表示设备上安装了新版本的应用程序包并替换了旧版本的动作。数据包含包的名称。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_REPLACED = 'usual.event.PACKAGE_REPLACED',

    /**
     * （预留事件，暂未支持）表示设备上安装了新版本的应用程序包并替换了旧版本的应用程序包的动作，不包含额外的数据,
     * 只发送给被替换的应用程序。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MY_PACKAGE_REPLACED = 'usual.event.MY_PACKAGE_REPLACED',

    /**
     * 表示现有的应用程序包从设备中移除的事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_REMOVED = 'usual.event.PACKAGE_REMOVED',

    /**
     * 表示现有的应用程序包从设备中移除的事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BUNDLE_REMOVED = 'usual.event.BUNDLE_REMOVED',

    /**
     * 表示现有的应用程序包从设备上完全删除的事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_FULLY_REMOVED = 'usual.event.PACKAGE_FULLY_REMOVED',

    /**
     * 表示应用包已更改的公共事件的动作（例如，包中的组件已启用或禁用）。
     * 
     * 在设备上安装的应用程序包更新或者包的组件被禁用使能，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_CHANGED = 'usual.event.PACKAGE_CHANGED',

    /**
     * 表示用户重启应用包并终止其所有进程。
     * 
     * 在设备上指定用户重启应用包并终止其所有进程，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_RESTARTED = 'usual.event.PACKAGE_RESTARTED',

    /**
     * 表示用户清除应用包数据。
     * 
     * 在设备上指定用户清除应用包数据，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_DATA_CLEARED = 'usual.event.PACKAGE_DATA_CLEARED',

    /**
     * 表示用户清除应用包缓存数据的公共事件的动作。
     * 
     * 对设备上安装的应用程序包清除缓存时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_CACHE_CLEARED = 'usual.event.PACKAGE_CACHE_CLEARED',

    /**
     * 表示包已经被挂起。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGES_SUSPENDED = 'usual.event.PACKAGES_SUSPENDED',

    /**
     * （预留事件，暂未支持）表示包已经被解除挂起。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGES_UNSUSPENDED = 'usual.event.PACKAGES_UNSUSPENDED',

    /**
     * 发送到已被系统挂起的包。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MY_PACKAGE_SUSPENDED = 'usual.event.MY_PACKAGE_SUSPENDED',

    /**
     * 发送到已被系统解除挂起的包。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MY_PACKAGE_UNSUSPENDED = 'usual.event.MY_PACKAGE_UNSUSPENDED',

    /**
     * （预留事件，暂未支持）表示用户ID已从系统中删除的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_UID_REMOVED = 'usual.event.UID_REMOVED',

    /**
     * （预留事件，暂未支持）应用程序在安装后首次启动。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_FIRST_LAUNCH = 'usual.event.PACKAGE_FIRST_LAUNCH',

    /**
     * （预留事件，暂未支持）当一个包需要被验证时，由系统包验证者发送。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION = 'usual.event.PACKAGE_NEEDS_VERIFICATION',

    /**
     * （预留事件，暂未支持）当一个包被验证时，由系统包验证者发送。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_VERIFIED = 'usual.event.PACKAGE_VERIFIED',

    /**
     * （预留事件，暂未支持）表示安装在外部存储上的应用程序对系统可用的公共事件的操作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_AVAILABLE',

    /**
     * （预留事件，暂未支持）表示安装在外部存储上的应用程序对系统不可用的公共事件的操作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_UNAVAILABLE',

    /**
     * （预留事件，暂未支持）表示设备状态（例如，方向和区域设置）已更改的公共事件的操作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CONFIGURATION_CHANGED = 'usual.event.CONFIGURATION_CHANGED',

    /**
     * 设置系统语言的公共事件的动作。
     * 
     * 当设置系统语言时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_LOCALE_CHANGED = 'usual.event.LOCALE_CHANGED',

    /**
     * 通知用户低内存状态并且应该启动包管理。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MANAGE_PACKAGE_STORAGE = 'usual.event.MANAGE_PACKAGE_STORAGE',

    /**
     * （预留事件，暂未支持）表示系统处于驾驶模式的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DRIVE_MODE = 'common.event.DRIVE_MODE',

    /**
     * （预留事件，暂未支持）表示系统处于HOME模式的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_HOME_MODE = 'common.event.HOME_MODE',

    /**
     * （预留事件，暂未支持）表示系统处于办公模式的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_OFFICE_MODE = 'common.event.OFFICE_MODE',

    /**
     * （预留事件，暂未支持）表示用户已启动的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STARTED = 'usual.event.USER_STARTED',

    /**
     * （预留事件，暂未支持）表示用户已被带到后台的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_BACKGROUND = 'usual.event.USER_BACKGROUND',

    /**
     * （预留事件，暂未支持）表示用户已被带到前台的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_FOREGROUND = 'usual.event.USER_FOREGROUND',

    /**
     * 表示用户切换完成的公共事件的动作。
     * 
     * 在API version 21之前，需要申请ohos.permission.MANAGE_LOCAL_ACCOUNTS权限；从API version 21开始，需要申请
     * ohos.permission.MANAGE_LOCAL_ACCOUNTS或ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_SWITCHED = 'usual.event.USER_SWITCHED',

    /**
     * （预留事件，暂未支持）表示要启动用户的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STARTING = 'usual.event.USER_STARTING',

    /**
     * 表示设备重启后解锁时，当前用户的凭据加密存储已解锁的公共事件的动作。
     * 
     * 切换到带有锁屏密码的用户，并且首次解锁会发出触发事件通知服务发布该系统公共事件，事件携带标识该用户的系统账号ID。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_UNLOCKED = 'usual.event.USER_UNLOCKED',

    /**
     * 表示用户即将被锁定的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_LOCKING = 'usual.event.USER_LOCKING',

    /**
     * 表示用户锁定完成的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_LOCKED = 'usual.event.USER_LOCKED',

    /**
     * （预留事件，暂未支持）表示要停止用户的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STOPPING = 'usual.event.USER_STOPPING',

    /**
     * （预留事件，暂未支持）表示用户已停止的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STOPPED = 'usual.event.USER_STOPPED',

    /**
     * 表示分布式账号登录成功的动作。
     * 
     * 分布式账号登录成功时会触发事件通知服务发布该系统公共事件，事件携带系统账号ID。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN = 'common.event.DISTRIBUTED_ACCOUNT_LOGIN',

    /**
     * 表示分布式账号登出成功的动作。
     * 
     * 分布式账号登出时会触发事件通知服务发布该系统公共事件，事件携带系统账号ID。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT = 'common.event.DISTRIBUTED_ACCOUNT_LOGOUT',

    /**
     * 表示分布式账号token令牌无效的动作。
     * 
     * 分布式账号的token令牌无效时会触发事件通知服务发布该系统公共事件，事件携带系统账号ID。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_TOKEN_INVALID = 'common.event.DISTRIBUTED_ACCOUNT_TOKEN_INVALID',

    /**
     * 表示分布式账号注销的动作。
     * 
     * 分布式账号注销成功会时触发事件通知服务发布该系统公共事件，事件携带系统账号ID。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOFF = 'common.event.DISTRIBUTED_ACCOUNT_LOGOFF',

    /**
     * Wi-Fi状态变化。
     * 
     * 当Wi-Fi状态发生变化时（如启用、禁用Wi-Fi），将会触发事件通知服务发布该系统公共事件。状态值：
     * 0：WLAN正在关闭，1：WLAN已关闭，2：WLAN正在打开，3：WLAN已启动。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_POWER_STATE = 'usual.event.wifi.POWER_STATE',

    /**
     * 表示Wi-Fi接入点已被扫描并证明可用的动作。
     * 
     * 当Wi-Fi接入点已被扫描并证明可用，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.LOCATION权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_SCAN_FINISHED = 'usual.event.wifi.SCAN_FINISHED',

    /**
     * 表示Wi-Fi信号强度（RSSI）改变。
     * 
     * 当Wi-Fi信号强度（RSSI）发生变化，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_RSSI_VALUE = 'usual.event.wifi.RSSI_VALUE',

    /**
     * Wi-Fi连接状态发生改变。
     * 
     * 当Wi-Fi连接状态发生变化，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_CONN_STATE = 'usual.event.wifi.CONN_STATE',

    /**
     * 表示Wi-Fi热点状态变化。
     * 
     * 当Wi-Fi热点状态发生变化，将会触发事件通知服务发布该系统公共事件。状态值：
     * 2：AP正在打开，3：AP已启动，4：AP正在关闭，5：AP已关闭。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_HOTSPOT_STATE = 'usual.event.wifi.HOTSPOT_STATE',

    /**
     * 表示客户端已断开与当前设备Wi-Fi热点的连接。
     * 
     * 当客户端已断开与当前设备Wi-Fi热点的连接，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_AP_STA_JOIN = 'usual.event.wifi.WIFI_HS_STA_JOIN',

    /**
     * 表示客户端已断开与当前设备Wi-Fi热点的连接。
     * 
     * 当客户端已断开与当前设备Wi-Fi热点的连接，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_AP_STA_LEAVE = 'usual.event.wifi.WIFI_HS_STA_LEAVE',

    /**
     * 表示MPLink（增强Wi-Fi功能）状态已更改。
     * 
     * 当MPLink（增强Wi-Fi功能）状态发生变化，将会触发事件通知服务发布该系统公共事件（暂不支持）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE = 'usual.event.wifi.mplink.STATE_CHANGE',

    /**
     * 表示Wi-Fi P2P连接状态改变。
     * 
     * 当Wi-Fi P2P连接状态发生变化，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO和ohos.permission.LOCATION权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_CONN_STATE = 'usual.event.wifi.p2p.CONN_STATE_CHANGE',

    /**
     * 表示Wi-Fi P2P状态变化。
     * 
     * 当Wi-Fi P2P状态发生变化，将会触发事件通知服务发布该系统公共事件。状态值：
     * 2：P2P正在打开，3：P2P已启动，4：P2P正在关闭，5：P2P已关闭。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_STATE_CHANGED = 'usual.event.wifi.p2p.STATE_CHANGE',

    /**
     * 表示Wi-Fi P2P对等体状态变化。
     * 
     * 当Wi-Fi P2P对等体状态变化，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED = 'usual.event.wifi.p2p.DEVICES_CHANGE',

    /**
     * 表示Wi-Fi P2P发现状态变化。
     * 
     * 当Wi-Fi P2P发现状态变化，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED = 'usual.event.wifi.p2p.PEER_DISCOVERY_STATE_CHANGE',

    /**
     * 表示Wi-Fi P2P当前设备状态变化。
     * 
     * 当Wi-Fi P2P当前设备状态变化，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED = 'usual.event.wifi.p2p.CURRENT_DEVICE_CHANGE',

    /**
     * 表示Wi-Fi P2P群组信息已更改。
     * 
     * 当Wi-Fi P2P群组信息发生变化，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED = 'usual.event.wifi.p2p.GROUP_STATE_CHANGED',

    /**
     * （预留事件，暂未支持）蓝牙免提通信连接状态公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.handsfree.ag.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示连接到蓝牙免提的设备处于活动状态的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE =
        'usual.event.bluetooth.handsfree.ag.CURRENT_DEVICE_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙A2DP连接状态已更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE =
        'usual.event.bluetooth.handsfree.ag.AUDIO_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）蓝牙A2DP连接状态公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsource.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示使用蓝牙A2DP连接的设备处于活动状态的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE =
        'usual.event.bluetooth.a2dpsource.CURRENT_DEVICE_UPDATE',

    /**
     * （预留事件，暂未支持）蓝牙A2DP播放状态改变的普通事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsource.PLAYING_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙A2DP的AVRCP连接状态已更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙A2DP音频编解码状态更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE =
        'usual.event.bluetooth.a2dpsource.CODEC_VALUE_UPDATE',

    /**
     * （预留事件，暂未支持）表示发现远程蓝牙设备的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.LOCATION和ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED =
        'usual.event.bluetooth.remotedevice.DISCOVERED',

    /**
     * （预留事件，暂未支持）表示远程蓝牙设备的蓝牙类别已更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE =
        'usual.event.bluetooth.remotedevice.CLASS_VALUE_UPDATE',

    /**
     * （预留事件，暂未支持）表示已与远程蓝牙设备建立低级别（ACL）连接的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED =
        'usual.event.bluetooth.remotedevice.ACL_CONNECTED',

    /**
     * （预留事件，暂未支持）表示低级别（ACL）连接已从远程蓝牙设备断开的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED =
        'usual.event.bluetooth.remotedevice.ACL_DISCONNECTED',

    /**
     * （预留事件，暂未支持）表示远程蓝牙设备的友好名称首次被检索或自上次检索以来被更改的公共事件的操作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE =
        'usual.event.bluetooth.remotedevice.NAME_UPDATE',

    /**
     * （预留事件，暂未支持）远程蓝牙设备连接状态更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE =
        'usual.event.bluetooth.remotedevice.PAIR_STATE',

    /**
     * （预留事件，暂未支持）表示远程蓝牙设备的电池电量首次被检索或自上次检索以来被更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE =
        'usual.event.bluetooth.remotedevice.BATTERY_VALUE_UPDATE',

    /**
     * （预留事件，暂未支持）远程蓝牙设备SDP状态公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT =
        'usual.event.bluetooth.remotedevice.SDP_RESULT',

    /**
     * （预留事件，暂未支持）远程蓝牙设备UUID连接状态公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE =
        'usual.event.bluetooth.remotedevice.UUID_VALUE',

    /**
     * （预留事件，暂未支持）表示远程蓝牙设备配对请求的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.DISCOVER_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ =
        'usual.event.bluetooth.remotedevice.PAIRING_REQ',

    /**
     * （预留事件，暂未支持）取消蓝牙配对的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL =
        'usual.event.bluetooth.remotedevice.PAIRING_CANCEL',

    /**
     * （预留事件，暂未支持）表示远程蓝牙设备连接请求的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ =
        'usual.event.bluetooth.remotedevice.CONNECT_REQ',

    /**
     * （预留事件，暂未支持）表示远程蓝牙设备连接请求响应的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY =
        'usual.event.bluetooth.remotedevice.CONNECT_REPLY',

    /**
     * （预留事件，暂未支持）表示取消与远程蓝牙设备的连接的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL =
        'usual.event.bluetooth.remotedevice.CONNECT_CANCEL',

    /**
     * （预留事件，暂未支持）表示蓝牙免提连接状态已更改的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.handsfreeunit.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙免提音频状态已更改的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE =
        'usual.event.bluetooth.handsfreeunit.AUDIO_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙免提音频网关状态已更改的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT =
        'usual.event.bluetooth.handsfreeunit.AG_COMMON_EVENT',

    /**
     * （预留事件，暂未支持）表示蓝牙免提呼叫状态已更改的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE =
        'usual.event.bluetooth.handsfreeunit.AG_CALL_STATE_UPDATE',

    /**
     * 表示蓝牙适配器状态已更改的公共事件的操作，例如蓝牙已打开或关闭。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE =
        'usual.event.bluetooth.host.STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示用户允许扫描蓝牙请求的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE =
        'usual.event.bluetooth.host.REQ_DISCOVERABLE',

    /**
     * （预留事件，暂未支持）表示用户打开蓝牙请求的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE = 'usual.event.bluetooth.host.REQ_ENABLE',

    /**
     * （预留事件，暂未支持）表示用户关闭蓝牙请求的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE =
        'usual.event.bluetooth.host.REQ_DISABLE',

    /**
     * （预留事件，暂未支持）设备蓝牙扫描模式更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE =
        'usual.event.bluetooth.host.SCAN_MODE_UPDATE',

    /**
     * 表示蓝牙扫描模式变化的公共事件的操作。
     * 
     * 当蓝牙扫描模式变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 dynamic&static
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_CHANGE =
        'usual.event.bluetooth.host.SCAN_MODE_CHANGE',

    /**
     * 设备上已启动蓝牙扫描的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED =
        'usual.event.bluetooth.host.DISCOVERY_STARTED',

    /**
     * 设备上蓝牙扫描完成的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED =
        'usual.event.bluetooth.host.DISCOVERY_FINISHED',

    /**
     * 指示设备蓝牙适配器名称已更改的公共事件的操作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE =
        'usual.event.bluetooth.host.NAME_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙A2DP连接状态已更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsink.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）蓝牙A2DP播放状态改变的普通事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsink.PLAYING_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）表示蓝牙A2DP宿的音频状态已更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsink.AUDIO_STATE_UPDATE',

    /**
     * 指示设备NFC状态已更改的公共事件的操作。
     * 
     * 指示设备NFC状态更改时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED = 'usual.event.nfc.action.ADAPTER_STATE_CHANGED',

    /**
     * 检测到NFC场强进入的公共事件。
     * 
     * 当检测到NFC场强进入时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED = 'usual.event.nfc.action.RF_FIELD_ON_DETECTED',

    /**
     * 检测到NFC场强离开的公共事件。
     * 
     * 当检测到NFC场强离开时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED = 'usual.event.nfc.action.RF_FIELD_OFF_DETECTED',

    /**
     * 表示系统停止为电池充电的公共事件的动作。
     * 
     * 当系统停止为电池充电时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISCHARGING = 'usual.event.DISCHARGING',

    /**
     * 表示系统开始为电池充电的公共事件的动作。
     * 
     * 当系统开始为电池充电时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CHARGING = 'usual.event.CHARGING',

    /**
     * 表示系统充电类型改变的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CHARGE_TYPE_CHANGED = 'usual.event.CHARGE_TYPE_CHANGED',

    /**
     * 表示设备上待机状态变化，触发公共事件发布动作。
     * 
     * 如果用户一段时间没有使用设备且屏幕已经关闭情况下，系统延迟后台应用程序CPU和网络访问，将会触发公共事件服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED = 'usual.event.DEVICE_IDLE_MODE_CHANGED',

    /**
     * 表示设备进入充电空闲模式的公共事件的动作。
     * 
     * 当设备处于空闲、正在充电并且温升可接受的一种状态时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CHARGE_IDLE_MODE_CHANGED = 'usual.event.CHARGE_IDLE_MODE_CHANGED',

    /**
     * 表示待机状态下解除资源使用限制的豁免名单出现变化，触发公共事件发布动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DEVICE_IDLE_EXEMPTION_LIST_UPDATED = 'usual.event.DEVICE_IDLE_EXEMPTION_LIST_UPDATED',

    /**
     * 表示系统节能模式更改的公共事件的动作。
     * 
     * 当系统节能模式更改时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_POWER_SAVE_MODE_CHANGED = 'usual.event.POWER_SAVE_MODE_CHANGED',

    /**
     * 表示用户已添加到系统中的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_ADDED = 'usual.event.USER_ADDED',

    /**
     * 表示用户已从系统中删除的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_REMOVED = 'usual.event.USER_REMOVED',

    /**
     * （预留事件，暂未支持）表示有某个能力已被添加的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.LISTEN_BUNDLE_CHANGE权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ABILITY_ADDED = 'common.event.ABILITY_ADDED',

    /**
     * （预留事件，暂未支持）表示已删除某个能力的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.LISTEN_BUNDLE_CHANGE权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ABILITY_REMOVED = 'common.event.ABILITY_REMOVED',

    /**
     * （预留事件，暂未支持）表示已更新某个能力的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.LISTEN_BUNDLE_CHANGE权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ABILITY_UPDATED = 'common.event.ABILITY_UPDATED',

    /**
     * （预留事件，暂未支持）表示系统定位模式已更改的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_LOCATION_MODE_STATE_CHANGED = 'usual.event.location.MODE_STATE_CHANGED',

    /**
     * （预留事件，暂未支持）表示车辆的车载信息娱乐（IVI）系统正在休眠的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_SLEEP = 'common.event.IVI_SLEEP',

    /**
     * （预留事件，暂未支持）表示IVI已休眠，并通知应用程序停止播放的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_PAUSE = 'common.event.IVI_PAUSE',

    /**
     * （预留事件，暂未支持）表示第三方应用暂停当前工作的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_STANDBY = 'common.event.IVI_STANDBY',

    /**
     * （预留事件，暂未支持）表示第三方应用保存其最后一个模式的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_LASTMODE_SAVE = 'common.event.IVI_LASTMODE_SAVE',

    /**
     * （预留事件，暂未支持）表示车辆电源系统电压异常的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_VOLTAGE_ABNORMAL = 'common.event.IVI_VOLTAGE_ABNORMAL',

    /**
     * （预留事件，暂未支持）表示IVI温度过高的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_HIGH_TEMPERATURE = 'common.event.IVI_HIGH_TEMPERATURE',

    /**
     * （预留事件，暂未支持）表示IVI温度极高的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_EXTREME_TEMPERATURE = 'common.event.IVI_EXTREME_TEMPERATURE',

    /**
     * （预留事件，暂未支持）表示车载系统具有极端温度的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL = 'common.event.IVI_TEMPERATURE_ABNORMAL',

    /**
     * （预留事件，暂未支持）表示车辆电源系统电压恢复正常的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_VOLTAGE_RECOVERY = 'common.event.IVI_VOLTAGE_RECOVERY',

    /**
     * （预留事件，暂未支持）表示车载系统温度恢复正常的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_TEMPERATURE_RECOVERY = 'common.event.IVI_TEMPERATURE_RECOVERY',

    /**
     * （预留事件，暂未支持）表示电池服务处于活动状态的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_ACTIVE = 'common.event.IVI_ACTIVE',

    /**
     * 表示USB设备状态发生变化。
     * 
     * 当USB断开或者连接时状态发生变化，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_STATE = 'usual.event.hardware.usb.action.USB_STATE',

    /**
     * 提示用户设备的USB端口状态发生改变。
     * 
     * 当USB的端口状态发生变化，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_PORT_CHANGED = 'usual.event.hardware.usb.action.USB_PORT_CHANGED',

    /**
     * 当用户设备作为USB主机时，提示USB设备已挂载。
     * 
     * 当USB连接时状态发生变化，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_DEVICE_ATTACHED = 'usual.event.hardware.usb.action.USB_DEVICE_ATTACHED',

    /**
     * 当用户设备作为USB主机时，提示USB设备被卸载。
     * 
     * 当USB断开时状态发生变化，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_DEVICE_DETACHED = 'usual.event.hardware.usb.action.USB_DEVICE_DETACHED',

    /**
     * 表示已连接USB配件的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_ACCESSORY_ATTACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_ATTACHED',

    /**
     * 表示USB配件被卸载的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_ACCESSORY_DETACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_DETACHED',

    /**
     * （预留事件，暂未支持）外部存储设备状态变更为移除时发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_REMOVED = 'usual.event.data.DISK_REMOVED',

    /**
     * （预留事件，暂未支持）外部存储设备状态变更为卸载时发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_UNMOUNTED = 'usual.event.data.DISK_UNMOUNTED',

    /**
     * （预留事件，暂未支持）外部存储设备状态变更为挂载时发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_MOUNTED = 'usual.event.data.DISK_MOUNTED',

    /**
     * （预留事件，暂未支持）外部存储设备状态变更为挂载状态下移除时发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_BAD_REMOVAL = 'usual.event.data.DISK_BAD_REMOVAL',

    /**
     * （预留事件，暂未支持）外部存储设备状态变更为插卡情况下无法挂载时发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_UNMOUNTABLE = 'usual.event.data.DISK_UNMOUNTABLE',

    /**
     * （预留事件，暂未支持）用户已表示希望删除外部存储介质时发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_EJECT = 'usual.event.data.DISK_EJECT',

    /**
     * 表示外部存储设备正常移除的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_REMOVED = 'usual.event.data.VOLUME_REMOVED',

    /**
     * 表示外部存储设备状态变更为卸载的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_UNMOUNTED = 'usual.event.data.VOLUME_UNMOUNTED',

    /**
     * 表示外部存储设备状态变更为挂载的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_MOUNTED = 'usual.event.data.VOLUME_MOUNTED',

    /**
     * 表示外部存储设备异常移除的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_BAD_REMOVAL = 'usual.event.data.VOLUME_BAD_REMOVAL',

    /**
     * 表示外部存储设备即将被弹出的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_EJECT = 'usual.event.data.VOLUME_EJECT',

    /**
     * （预留事件，暂未支持）表示账户可见更改的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_APP_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED = 'usual.event.data.VISIBLE_ACCOUNTS_UPDATED',

    /**
     * （预留事件，暂未支持）删除账户的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ACCOUNT_DELETED = 'usual.event.data.ACCOUNT_DELETED',

    /**
     * （预留事件，暂未支持）表示foundation已准备好的公共事件的动作。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVER_STARTUP_COMPLETED权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_FOUNDATION_READY = 'common.event.FOUNDATION_READY',

    /**
     * 在应用安装后首次启动时，事件通知服务将触发并发布系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.INSTALL_BUNDLE权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COMMON_EVENT_APP_FIRST_LAUNCH = 'usual.event.APP_FIRST_LAUNCH',

    /**
     * 指示飞行模式状态变化。
     * 
     * 在开启或者关闭系统飞行模式状态后，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_AIRPLANE_MODE_CHANGED = 'usual.event.AIRPLANE_MODE',

    /**
     * 表示分屏行为的公共事件。
     * 
     * 启动最近任务窗口、创建或销毁分屏条，都会触发通知服务发布这个系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SPLIT_SCREEN = 'common.event.SPLIT_SCREEN',

    /**
     * 表示通知渠道或通知开关发生变化。
     * 
     * 通知设置里修改应用的渠道参数、渠道开关，或者开启、关闭通知使能开关时，都会触发通知服务发布这个系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.NOTIFICATION_CONTROLLER权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SLOT_CHANGE = 'usual.event.SLOT_CHANGE',

    /**
     * 表示spn显示信息已更新的公共事件的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SPN_INFO_CHANGED = 'usual.event.SPN_INFO_CHANGED',

    /**
     * 表示快速修复应用。
     * 
     * 在设备上指定用户快速修复应用，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_QUICK_FIX_APPLY_RESULT = 'usual.event.QUICK_FIX_APPLY_RESULT',

    /**
     * 表示撤销快速修复。
     * 
     * 在设备上撤销快速修复时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_QUICK_FIX_REVOKE_RESULT = 'usual.event.QUICK_FIX_REVOKE_RESULT',

    /**
     * 表示用户信息已更新。
     * 
     * 分布式账号信息变更、系统账号头像信息变更、系统账号名称变更将会触发事件通知服务发布该系统公共事件，事件携带系统账号ID。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_INFO_UPDATED = 'usual.event.USER_INFO_UPDATED',

    /**
     * 指示网络Http代理配置信息更新。
     * 
     * 在系统全局代理或者各类网络（以太网、Wi-Fi、蜂窝等）Http代理配置信息发生变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_HTTP_PROXY_CHANGE = 'usual.event.HTTP_PROXY_CHANGE',

    /**
     * 提示SIM卡状态更新。
     * 
     * 在设备上面的SIM卡状态发生变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_STATE_CHANGED = 'usual.event.SIM_STATE_CHANGED',

    /**
     * 提示短信接收完成。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVE_SMS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_RECEIVE_COMPLETED = 'usual.event.SMS_RECEIVE_COMPLETED',

    /**
     * 提示紧急小区广播短信接收完成。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVE_SMS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_EMERGENCY_CB_RECEIVE_COMPLETED = 'usual.event.SMS_EMERGENCY_CB_RECEIVE_COMPLETED',

    /**
     * 提示小区广播短信接收完成。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVE_SMS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_CB_RECEIVE_COMPLETED = 'usual.event.SMS_CB_RECEIVE_COMPLETED',

    /**
     * （预留事件，暂未支持）提示STK命令。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_COMMAND = 'usual.event.STK_COMMAND',

    /**
     * （预留事件，暂未支持）提示STK会话结束。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_SESSION_END = 'usual.event.STK_SESSION_END',

    /**
     * （预留事件，暂未支持）提示STK卡状态已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_CARD_STATE_CHANGED = 'usual.event.STK_CARD_STATE_CHANGED',

    /**
     * （预留事件，暂未支持）提示STK ALPHA标识符。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_ALPHA_IDENTIFIER = 'usual.event.STK_ALPHA_IDENTIFIER',

    /**
     * （预留事件，暂未支持）提示服务信息短信接收完成。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVE_SMS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_WAPPUSH_RECEIVE_COMPLETED = 'usual.event.SMS_WAPPUSH_RECEIVE_COMPLETED',

    /**
     * 提示运营商配置已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_OPERATOR_CONFIG_CHANGED = 'usual.event.OPERATOR_CONFIG_CHANGED',

    /**
     * 提示SIM卡默认短信主卡已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_SMS_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_SMS_SUBSCRIPTION_CHANGED',

    /**
     * 提示SIM卡默认数据主卡已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_DATA_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_DATA_SUBSCRIPTION_CHANGED',

    /**
     * 提示SIM卡默认主卡已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_MAIN_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_MAIN_SUBSCRIPTION_CHANGED',

    /**
     * 提示设置SIM卡默认主卡的动作，其状态更新为执行中或已完成。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SET_PRIMARY_SLOT_STATUS = 'usual.event.SET_PRIMARY_SLOT_STATUS',

    /**
     * 提示SIM卡默认主卡的漫游状态已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PRIMARY_SLOT_ROAMING = 'usual.event.PRIMARY_SLOT_ROAMING',

    /**
     * 提示SIM卡默认语音主卡已更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_VOICE_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_VOICE_SUBSCRIPTION_CHANGED',

    /**
     * 提示呼叫状态更新。
     * 
     * 在设备呼叫状态更新时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_TELEPHONY_STATE权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CALL_STATE_CHANGED = 'usual.event.CALL_STATE_CHANGED',

    /**
     * 提示蜂窝数据状态更新。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CELLULAR_DATA_STATE_CHANGED = 'usual.event.CELLULAR_DATA_STATE_CHANGED',

    /**
     * 提示网络状态更新。
     * 
     * 在设备网络状态更新时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NETWORK_STATE_CHANGED = 'usual.event.NETWORK_STATE_CHANGED',

    /**
     * 提示信号信息更新。
     * 
     * 在设备信号信息更新时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIGNAL_INFO_CHANGED = 'usual.event.SIGNAL_INFO_CHANGED',

    /**
     * 提示未接来电。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_TELEPHONY_STATE权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_INCOMING_CALL_MISSED = 'usual.event.INCOMING_CALL_MISSED',

    /**
     * 提示设备modem上下电状态变化。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_RADIO_STATE_CHANGE = 'usual.event.RADIO_STATE_CHANGE',

    /**
     * 表示域账号状态发生变化。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DOMAIN_ACCOUNT_STATUS_CHANGED = 'usual.event.DOMAIN_ACCOUNT_STATUS_CHANGED',

    /**
     * 表示屏幕解锁的公共事件。
     * 
     * 当锁屏解锁时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_UNLOCKED = 'usual.event.SCREEN_UNLOCKED',

    /**
     * 表示屏幕锁定的公共事件。
     * 
     * 当锁屏锁定时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_LOCKED = 'usual.event.SCREEN_LOCKED',

    /**
     * 指示网络连接状态变化。
     * 
     * 各类网络（以太网、Wi-Fi、蜂窝等）在发生连接状态状态变化时（断开、断开中、连接中、已连接等），
     * 将会触发事件通知服务发布该系统公共事件。枚举值：2：连接中，3：已连接，4：正在断开，5：已断开。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CONNECTIVITY_CHANGE = 'usual.event.CONNECTIVITY_CHANGE',

    /**
     * 提示暗码发送成功。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SPECIAL_CODE = 'common.event.SPECIAL_CODE',

    /**
     * 提示音频质量发生变化。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_AUDIO_QUALITY_CHANGE = 'usual.event.AUDIO_QUALITY_CHANGE',

    /**
     * 表示蓝牙HFP AG连接状态变化的公共事件的操作。
     * 
     * 当蓝牙HFP AG连接状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_CHANGE =
        'usual.event.bluetooth.handsfree.ag.CONNECT_STATE_CHANGE',

    /**
     * 表示隐私签署结果的公共事件。
     * 
     * 隐私弹框场景下，用户点击同意，会发送此事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PRIVACY_STATE_CHANGED = 'usual.event.PRIVACY_STATE_CHANGED',

    /**
     * 当一个包被验证时，由系统包验证者发送。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_INSTALLATION_STARTED = 'usual.event.PACKAGE_INSTALLATION_STARTED',

    /**
     * 表示应用程序的动态图标发生变化的公共事件。
     * 
     * 在设备上已安装的应用程序的动态图标发生变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DYNAMIC_ICON_CHANGED = 'usual.event.DYNAMIC_ICON_CHANGED',

    /**
     * 表示用户开启未成年人模式。
     * 
     * 在设备上开启未成年人模式，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MINORSMODE_ON = 'usual.event.MINORSMODE_ON',

    /**
     * 表示用户关闭未成年人模式。
     * 
     * 在设备上关闭未成年人模式，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MINORSMODE_OFF = 'usual.event.MINORSMODE_OFF',

    /**
     * 表示包管理资源数据刷新的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_BUNDLE_RESOURCES权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BUNDLE_RESOURCES_CHANGED = 'usual.event.BUNDLE_RESOURCES_CHANGED',

    /**
     * 表示datashare服务可用。
     * 
     * datashare服务启动完成后，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DATA_SHARE_READY = 'usual.event.DATA_SHARE_READY',

    /**
     * 表示vpn连接状态的公共事件。
     * 
     * 当vpn连接或者断开时会发送此公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VPN_CONNECTION_STATUS_CHANGED = 'usual.event.VPN_CONNECTION_STATUS_CHANGED',

    /**
     * 表示某个应用开始恢复的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.START_RESTORE_NOTIFICATION权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    COMMON_EVENT_RESTORE_START = 'usual.event.RESTORE_START',

    /**
     * 表示蓝牙A2DP Source连接状态变化的公共事件的操作。
     * 
     * 当蓝牙A2DP Source连接状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_CHANGE =
        'usual.event.bluetooth.a2dpsource.CONNECT_STATE_CHANGE',

    /**
     * 表示蓝牙AVRCP连接状态变化的公共事件的操作。
     * 
     * 当蓝牙AVRCP连接状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_CHANGE =
        'usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_CHANGE',

    /**
     * 表示蓝牙媒体编解码器变化的公共事件的操作。
     * 
     * 当蓝牙媒体编解码器变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_CHANGE =
        'usual.event.bluetooth.a2dpsource.CODEC_VALUE_CHANGE',

    /**
     * 表示蓝牙媒体A2DP播放状态变化的公共事件的操作。
     * 
     * 当蓝牙媒体A2DP播放状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAY_STATE_CHANGE =
        'usual.event.bluetooth.a2dpsource.PLAY_STATE_CHANGE',

    /**
     * 表示蓝牙SCO状态变化的公共事件的操作。
     * 
     * 当蓝牙SCO状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COMMON_EVENT_BLUETOOTH_SCO_CONNECT_STATE_CHANGE = 
        'usual.event.bluetooth.SCO_CONNECT_STATE_CHANGE',

    /**
     * 表示蓝牙远程设备ACL连接状态变化的公共事件的操作。
     * 
     * 当蓝牙远程设备ACL连接状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE = 
        'usual.event.bluetooth.remotedevice.ACL_STATE_CHANGE',

    /**
     * 表示蓝牙配对状态变化的公共事件的操作。
     * 
     * 当蓝牙配对状态变化时，将会触发事件通知服务发布该系统公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE_CHANGE =
        'usual.event.bluetooth.remotedevice.PAIR_STATE_CHANGE',

    /**
     * 表示浏览器托管策略已更改。
     * 
     * 当浏览器托管策略发生变化，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MANAGED_BROWSER_POLICY_CHANGED = 'usual.event.MANAGED_BROWSER_POLICY_CHANGED',

    /**
     * 表示文件默认打开应用发生变更的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.CHANGE_DEFAULT_APPLICATION权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DEFAULT_APPLICATION_CHANGED = 'usual.event.DEFAULT_APPLICATION_CHANGED',

    /**
     * 表示应用快捷方式发生变化的公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_SHORTCUTS权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SHORTCUT_CHANGED = 'usual.event.SHORTCUT_CHANGED',

    /**
     * 进入Kiosk模式时，事件通知服务将触发并发布系统公共事件。此事件仅由系统发送。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_KIOSK_MODE_ON = 'usual.event.KIOSK_MODE_ON',

    /**
     * 退出Kiosk模式时，事件通知服务将触发并发布系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_KIOSK_MODE_OFF = 'usual.event.KIOSK_MODE_OFF',

    /**
     * 表示设备的配置目录层级与系统参数发生变化的公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CUSTOM_CONFIG_POLICY_UPDATED = 'usual.event.CUSTOM_CONFIG_POLICY_UPDATED',

    /**
     * 表示设备漫游区域发生变化的公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CUSTOM_ROAMING_REGION_UPDATED = 'usual.event.CUSTOM_ROAMING_REGION_UPDATED',

    /**
     * 表示系统中发生了屏幕共享事件。这是一个受保护的公共事件，只能由系统发送。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVE_SMS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_SHARE = 'usual.event.SCREEN_SHARE',

    /**
     * 表示某个应用结束恢复的公共事件。
     * 
     * 当数据迁移相关应用拉起备份恢复框架进行恢复任务，某个应用恢复结束后会发送此公共事件。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.RESTORE_END_NOTIFICATION权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 23 dynamic&static
     */
    COMMON_EVENT_RESTORE_END = 'usual.event.RESTORE_END',

    /**
     * 提示云盘同步根已更新。
     * 
     * 要订阅此事件，您的应用必须具备ohos.permission.ACCESS_CLOUD_DISK_INFO权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CLOUD_DISK_STATE_CHANGED = 'usual.event.CLOUD_DISK_STATE_CHANGED',

    /**
     * 表示可感知支架开合的设备，例如具有支架的平板电脑。
     * 
     * 其支架开合状态变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 dynamic&static
     */
    COMMON_EVENT_TABLET_MODE_CHANGED = 'usual.event.TABLET_MODE_CHANGED',

    /**
     * 表示可感知开合盖子的设备，例如具有开合盖子的笔记本电脑。
     * 
     * 其开合盖状态变化时，将会触发事件通知服务发布该系统公共事件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 dynamic&static
     */
    COMMON_EVENT_LID_STATE_CHANGED = 'usual.event.LID_STATE_CHANGED'
  }

  /**
   * 表示公共事件的数据。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type CommonEventData = _CommonEventData;

  /**
   * 描述公共事件的订阅者。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type CommonEventSubscriber = _CommonEventSubscriber;

  /**
   * 描述公共事件的订阅信息。
   *
   * @typedef { _CommonEventSubscribeInfo } CommonEventSubscribeInfo
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  export type CommonEventSubscribeInfo = _CommonEventSubscribeInfo;

  /**
   * 描述公共事件内容和属性。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type CommonEventPublishData = _CommonEventPublishData;
}

export default commonEventManager;