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
 * The **CommonEventManager** module provides common event capabilities to publish, subscribe to, and unsubscribe from
 * common events.
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace commonEventManager {
  /**
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see
   *     [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Publishes a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see
   *     [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   * @param { CommonEventPublishData } options - Properties of the common event to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Publishes a common event to a specified user. This API uses an asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see
   *     [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   * @param { int } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Publishes a common event to a specified user and specifies the information to be published. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { string } event - Name of the common event to publish. For details, see
   *     [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   * @param { int } userId - User ID.
   * @param { CommonEventPublishData } options - Properties of the common event to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Creates a subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
   * @param { AsyncCallback<CommonEventSubscriber> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Creates a subscriber. This API uses a promise to return the result.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
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
   * Creates a subscriber. The API returns the result synchronously.
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - Subscriber information.
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
   * Subscribes to a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<CommonEventData> } callback - Callback triggered if the operation is successful; otherwise,
   *     **err** is an error object.
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
   * Subscribes to a common event. This API uses a promise to return the result, indicating subscription success or
   * failure.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { Callback<CommonEventData> } callback - Callback to be invoked when a common event is subscribed to.
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
   * Unsubscribes from a common event. This API uses an asynchronous callback to return the result.
   *
   * @param { CommonEventSubscriber } subscriber - Subscriber object.
   * @param { AsyncCallback<void> } [callback] - Callback to unregister. If the operation is successful, **err** is
   *     **undefined**; otherwise, **err** is an error object.
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
   * Removes a sticky common event. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - Sticky common event to remove. For details, see
   *     [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Removes a sticky common event. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - Sticky common event to remove. For details, see
   *     [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables static subscription for an application. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { boolean } enable - Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Enables or disables static subscription for an application. This API uses a promise to return the result.
   *
   * @param { boolean } enable - Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables the static subscription event for the current application and records the event name. This API
   * uses a promise to return the result.
   *
   * @param { boolean } enable - Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled.
   * @param { Array<string> } events - Name of a recorded event.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables the static subscription event for the current application and records the event name. This API
   * uses a promise to return the result.
   *
   * @param { boolean } enable - Whether static subscription is enabled.<br> **true**: enabled.<br>**false**: disabled.
   * @param { Array<string> } events - Name of a recorded event.
   * @returns { Promise<void> } Promise that returns no value.
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
   * System common events refer to events released by system services or system applications. Subscribing to these
   * common events requires specific permissions and values. For details, see
   * [System Common Events]{@link @ohos.commonEventManager:commonEventManager}.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum Support {
    /**
     * Indicates that the boot is complete and the system is loaded.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVER_STARTUP_COMPLETED
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BOOT_COMPLETED = 'usual.event.BOOT_COMPLETED',

    /**
     * (Reserved, not supported yet) Indicates that the guidance is complete and the system is loaded, but the screen is
     * still locked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_LOCKED_BOOT_COMPLETED = 'usual.event.LOCKED_BOOT_COMPLETED',

    /**
     * Indicates that the device is being shut down and the final shutdown will proceed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SHUTDOWN = 'usual.event.SHUTDOWN',

    /**
     * Indicates that the charging state, level, and other information about the battery have changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BATTERY_CHANGED = 'usual.event.BATTERY_CHANGED',

    /**
     * Indicates that the battery level is low.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BATTERY_LOW = 'usual.event.BATTERY_LOW',

    /**
     * Indicates that the battery level is normal.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BATTERY_OKAY = 'usual.event.BATTERY_OKAY',

    /**
     * Indicates that the device is connected to an external power supply.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_POWER_CONNECTED = 'usual.event.POWER_CONNECTED',

    /**
     * Indicates that the device is disconnected from the external power supply.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_POWER_DISCONNECTED = 'usual.event.POWER_DISCONNECTED',

    /**
     * Indicates that a device screen-off initiated by the power service is complete.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_OFF = 'usual.event.SCREEN_OFF',

    /**
     * Indicates that a device screen-on initiated by the power service is complete.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_ON = 'usual.event.SCREEN_ON',

    /**
     * Indicates that the device's thermal level has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_THERMAL_LEVEL_CHANGED = 'usual.event.THERMAL_LEVEL_CHANGED',

    /**
     * Indicates that the device is about to enter the forced sleep mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ENTER_FORCE_SLEEP = 'usual.event.ENTER_FORCE_SLEEP',

    /**
     * Indicates that the device exits the forced sleep mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXIT_FORCE_SLEEP = 'usual.event.EXIT_FORCE_SLEEP',

    /**
     * Indicates that the device is about to enter the hibernation mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ENTER_HIBERNATE = 'usual.event.ENTER_HIBERNATE',

    /**
     * Indicates that the device exits the hibernation mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXIT_HIBERNATE = 'usual.event.EXIT_HIBERNATE',

    /**
     * Indicates the action of a common event that the user unlocks the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstand commonEventManager.Support#COMMON_EVENT_SCREEN_UNLOCKED
     */
    COMMON_EVENT_USER_PRESENT = 'usual.event.USER_PRESENT',

    /**
     * Indicates that the system time has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_TIME_TICK = 'usual.event.TIME_TICK',

    /**
     * Indicates that the system time is set.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_TIME_CHANGED = 'usual.event.TIME_CHANGED',

    /**
     * (Reserved, not supported yet) Indicates that the system time has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DATE_CHANGED = 'usual.event.DATE_CHANGED',

    /**
     * Indicates that the system time zone has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_TIMEZONE_CHANGED = 'usual.event.TIMEZONE_CHANGED',

    /**
     * (Reserved, not supported yet) Indicates that a user closes a temporary system dialog box.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CLOSE_SYSTEM_DIALOGS = 'usual.event.CLOSE_SYSTEM_DIALOGS',

    /**
     * Indicates that a new application package has been installed on the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_ADDED = 'usual.event.PACKAGE_ADDED',

    /**
     * (Reserved, not supported yet) Indicates the action of a common event that a new version of an installed
     * application package has replaced the previous one on the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_REPLACED = 'usual.event.PACKAGE_REPLACED',

    /**
     * (Reserved, not supported yet) Indicates the action of a common event that a new version of an installed
     * application package has replaced the previous one on the device. This event does not contain additional data and
     * is sent only to the replaced application.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MY_PACKAGE_REPLACED = 'usual.event.MY_PACKAGE_REPLACED',

    /**
     * Indicates that an installed bundle has been uninstalled from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_REMOVED = 'usual.event.PACKAGE_REMOVED',

    /**
     * Indicates that an installed bundle has been uninstalled from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BUNDLE_REMOVED = 'usual.event.BUNDLE_REMOVED',

    /**
     * Indicates that an installed application has been completely uninstalled from the device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_FULLY_REMOVED = 'usual.event.PACKAGE_FULLY_REMOVED',

    /**
     * Indicates that an application package has been changed (for example, an ability in the package has been enabled
     * or disabled).
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_CHANGED = 'usual.event.PACKAGE_CHANGED',

    /**
     * Indicates that the user has restarted the application package and killed all its processes.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_RESTARTED = 'usual.event.PACKAGE_RESTARTED',

    /**
     * Indicates that the user has cleared the application package data.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_DATA_CLEARED = 'usual.event.PACKAGE_DATA_CLEARED',

    /**
     * Indicates that the user cleared the application package cache.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_CACHE_CLEARED = 'usual.event.PACKAGE_CACHE_CLEARED',

    /**
     * Indicates that application packages have been suspended.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGES_SUSPENDED = 'usual.event.PACKAGES_SUSPENDED',

    /**
     * (Reserved, not supported yet) Indicates that the package has been unsuspended.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGES_UNSUSPENDED = 'usual.event.PACKAGES_UNSUSPENDED',

    /**
     * Indicates that application packages have been suspended by the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MY_PACKAGE_SUSPENDED = 'usual.event.MY_PACKAGE_SUSPENDED',

    /**
     * Indicates that application packages have been unsuspended by the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MY_PACKAGE_UNSUSPENDED = 'usual.event.MY_PACKAGE_UNSUSPENDED',

    /**
     * (Reserved, not supported yet) Indicates that a user ID has been removed from the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_UID_REMOVED = 'usual.event.UID_REMOVED',

    /**
     * (Reserved, not supported yet) Indicates an initial start of an application after installation.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_FIRST_LAUNCH = 'usual.event.PACKAGE_FIRST_LAUNCH',

    /**
     * (Reserved, not supported yet) Indicates that a package is sent by the system verifier when the package needs
     * verification.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION = 'usual.event.PACKAGE_NEEDS_VERIFICATION',

    /**
     * (Reserved, not supported yet) Indicates that a package is sent by the system verifier when the package is
     * verified.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_VERIFIED = 'usual.event.PACKAGE_VERIFIED',

    /**
     * (Reserved, not supported yet) Indicates that applications installed on the external storage become available for
     * the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_AVAILABLE',

    /**
     * (Reserved, not supported yet) Indicates that applications installed on the external storage become unavailable
     * for the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_UNAVAILABLE',

    /**
     * (Reserved, not supported yet) Indicates that the device state (for example, orientation and locale) has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CONFIGURATION_CHANGED = 'usual.event.CONFIGURATION_CHANGED',

    /**
     * Indicates that the system language is set.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_LOCALE_CHANGED = 'usual.event.LOCALE_CHANGED',

    /**
     * Notifies the low memory state and package management should be started.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MANAGE_PACKAGE_STORAGE = 'usual.event.MANAGE_PACKAGE_STORAGE',

    /**
     * (Reserved, not supported yet) Indicates that the system is in driving mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DRIVE_MODE = 'common.event.DRIVE_MODE',

    /**
     * (Reserved, not supported yet) Indicates that the system is in home mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_HOME_MODE = 'common.event.HOME_MODE',

    /**
     * (Reserved, not supported yet) Indicates that the system is in office mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_OFFICE_MODE = 'common.event.OFFICE_MODE',

    /**
     * (Reserved, not supported yet) Indicates that the user has been started.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STARTED = 'usual.event.USER_STARTED',

    /**
     * (Reserved, not supported yet) Indicates that the user has been brought to the background.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_BACKGROUND = 'usual.event.USER_BACKGROUND',

    /**
     * (Reserved, not supported yet) Indicates that the user has been brought to the foreground.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_FOREGROUND = 'usual.event.USER_FOREGROUND',

    /**
     * Indicates that a user switchover is complete.
     *
     * To subscribe to this common event, your application must have the ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * permission (before API version 21); or ohos.permission.MANAGE_LOCAL_ACCOUNTS or
     * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission (since API version 21). (This permission is available
     * only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_SWITCHED = 'usual.event.USER_SWITCHED',

    /**
     * (Reserved, not supported yet) Indicates that the user is going to be started.
     *
     * To subscribe to this common event, your application must have the
     * **ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS** permission. (This permission is available only for system
     * applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STARTING = 'usual.event.USER_STARTING',

    /**
     * Indicates that the credential-encrypted storage has been unlocked for the current user after the device is
     * restarted.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_UNLOCKED = 'usual.event.USER_UNLOCKED',

    /**
     * Indicates that a user is about to be locked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_LOCKING = 'usual.event.USER_LOCKING',

    /**
     * Indicates that a user is locked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_LOCKED = 'usual.event.USER_LOCKED',

    /**
     * (Reserved, not supported yet) Indicates that the user is going to be stopped.
     *
     * To subscribe to this common event, your application must have the
     * **ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS** permission. (This permission is available only for system
     * applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STOPPING = 'usual.event.USER_STOPPING',

    /**
     * (Reserved, not supported yet) Indicates that the user has been stopped.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_STOPPED = 'usual.event.USER_STOPPED',

    /**
     * Indicates a successful login from a distributed account.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN = 'common.event.DISTRIBUTED_ACCOUNT_LOGIN',

    /**
     * Indicates a successful logout from a distributed account.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT = 'common.event.DISTRIBUTED_ACCOUNT_LOGOUT',

    /**
     * Indicates that the token of a distributed account is invalid.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_TOKEN_INVALID = 'common.event.DISTRIBUTED_ACCOUNT_TOKEN_INVALID',

    /**
     * Indicates that a distributed account is deregistered.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOFF = 'common.event.DISTRIBUTED_ACCOUNT_LOGOFF',

    /**
     * Indicates that the Wi-Fi state changes.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_POWER_STATE = 'usual.event.wifi.POWER_STATE',

    /**
     * Indicates that a Wi-Fi access point is detected and proven to be available.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.LOCATION** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_SCAN_FINISHED = 'usual.event.wifi.SCAN_FINISHED',

    /**
     * Indicates that the Wi-Fi signal strength (RSSI) has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_RSSI_VALUE = 'usual.event.wifi.RSSI_VALUE',

    /**
     * Indicates that the Wi-Fi connection state has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_CONN_STATE = 'usual.event.wifi.CONN_STATE',

    /**
     * Indicates that the Wi-Fi hotspot state has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_HOTSPOT_STATE = 'usual.event.wifi.HOTSPOT_STATE',

    /**
     * Indicates that the client is disconnected from the Wi-Fi hotspot of the current device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_AP_STA_JOIN = 'usual.event.wifi.WIFI_HS_STA_JOIN',

    /**
     * Indicates that the client is disconnected from the Wi-Fi hotspot of the current device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_AP_STA_LEAVE = 'usual.event.wifi.WIFI_HS_STA_LEAVE',

    /**
     * Indicates that the state of MPLINK (an enhanced Wi-Fi feature) has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE = 'usual.event.wifi.mplink.STATE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P connection state has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** and
     * **ohos.permission.LOCATION** permissions.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_CONN_STATE = 'usual.event.wifi.p2p.CONN_STATE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P state has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_STATE_CHANGED = 'usual.event.wifi.p2p.STATE_CHANGE',

    /**
     * Indicates that the state of the Wi-Fi P2P peer device has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED = 'usual.event.wifi.p2p.DEVICES_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P discovery state has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED = 'usual.event.wifi.p2p.PEER_DISCOVERY_STATE_CHANGE',

    /**
     * Indicates that the state of the Wi-Fi P2P local device has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED = 'usual.event.wifi.p2p.CURRENT_DEVICE_CHANGE',

    /**
     * Indicates that the Wi-Fi P2P group information has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_WIFI_INFO** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED = 'usual.event.wifi.p2p.GROUP_STATE_CHANGED',

    /**
     * (Reserved, not supported yet) Indicates the common event about the connection state of Bluetooth handsfree
     * communication.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.handsfree.ag.CONNECT_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the device connected to the Bluetooth handsfree is active.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE =
        'usual.event.bluetooth.handsfree.ag.CURRENT_DEVICE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the connection state of Bluetooth A2DP has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE =
        'usual.event.bluetooth.handsfree.ag.AUDIO_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates the common event about the connection state of Bluetooth A2DP.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsource.CONNECT_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the device connected using Bluetooth A2DP is active.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE =
        'usual.event.bluetooth.a2dpsource.CURRENT_DEVICE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the playing state of Bluetooth A2DP has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsource.PLAYING_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the AVRCP connection state of Bluetooth A2DP has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the audio codec state of Bluetooth A2DP has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE =
        'usual.event.bluetooth.a2dpsource.CODEC_VALUE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that a remote Bluetooth device is discovered.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.LOCATION** and
     * **ohos.permission.USE_BLUETOOTH** permissions.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED =
        'usual.event.bluetooth.remotedevice.DISCOVERED',

    /**
     * (Reserved, not supported yet) Indicates that the Bluetooth class of a remote Bluetooth device has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE =
        'usual.event.bluetooth.remotedevice.CLASS_VALUE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that a low-ACL connection has been established with a remote Bluetooth
     * device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED =
        'usual.event.bluetooth.remotedevice.ACL_CONNECTED',

    /**
     * (Reserved, not supported yet) Indicates that a low-ACL connection has been disconnected from a remote Bluetooth
     * device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED =
        'usual.event.bluetooth.remotedevice.ACL_DISCONNECTED',

    /**
     * (Reserved, not supported yet) Indicates that the friendly name of a remote Bluetooth device is retrieved for the
     * first time or has changed since the last retrieval.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE =
        'usual.event.bluetooth.remotedevice.NAME_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the connection state of a remote Bluetooth device has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE_CHANGE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE =
        'usual.event.bluetooth.remotedevice.PAIR_STATE',

    /**
     * (Reserved, not supported yet) Indicates that the battery level of a remote Bluetooth device is retrieved for the
     * first time or has changed since the last retrieval.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE =
        'usual.event.bluetooth.remotedevice.BATTERY_VALUE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates the common event about the SDP state of a remote Bluetooth device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT =
        'usual.event.bluetooth.remotedevice.SDP_RESULT',

    /**
     * Indicates the action of a common event about the UUID connection state of a remote Bluetooth device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE =
        'usual.event.bluetooth.remotedevice.UUID_VALUE',

    /**
     * (Reserved, not supported yet) Indicates the common event about the pairing request from a remote Bluetooth
     * device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.DISCOVER_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ =
        'usual.event.bluetooth.remotedevice.PAIRING_REQ',

    /**
     * (Reserved, not supported yet) Indicates that Bluetooth pairing is canceled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL =
        'usual.event.bluetooth.remotedevice.PAIRING_CANCEL',

    /**
     * (Reserved, not supported yet) Indicates the common event about the connection request from a remote Bluetooth
     * device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ =
        'usual.event.bluetooth.remotedevice.CONNECT_REQ',

    /**
     * (Reserved, not supported yet) Indicates the common event about the response to the connection request from a
     * remote Bluetooth device.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY =
        'usual.event.bluetooth.remotedevice.CONNECT_REPLY',

    /**
     * (Reserved, not supported yet) Indicates that the connection to a remote Bluetooth device has been canceled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL =
        'usual.event.bluetooth.remotedevice.CONNECT_CANCEL',

    /**
     * (Reserved, not supported yet) Indicates that the connection state of a Bluetooth handsfree has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.handsfreeunit.CONNECT_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the audio state of a Bluetooth handsfree has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE =
        'usual.event.bluetooth.handsfreeunit.AUDIO_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the audio gateway state of a Bluetooth handsfree has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT =
        'usual.event.bluetooth.handsfreeunit.AG_COMMON_EVENT',

    /**
     * (Reserved, not supported yet) Indicates that the calling state of a Bluetooth handsfree has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE =
        'usual.event.bluetooth.handsfreeunit.AG_CALL_STATE_UPDATE',

    /**
     * Indicates that the state of a Bluetooth adapter has been changed, for example, Bluetooth has been enabled or
     * disabled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE =
        'usual.event.bluetooth.host.STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates the common event about the request for the user to allow Bluetooth device
     * scanning.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE =
        'usual.event.bluetooth.host.REQ_DISCOVERABLE',

    /**
     * (Reserved, not supported yet) Indicates the common event about the request for the user to enable Bluetooth.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE = 'usual.event.bluetooth.host.REQ_ENABLE',

    /**
     * (Reserved, not supported yet) Indicates the common event about the request for the user to disable Bluetooth.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE =
        'usual.event.bluetooth.host.REQ_DISABLE',

    /**
     * (Reserved, not supported yet) Indicates that the Bluetooth scanning mode of a device has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE =
        'usual.event.bluetooth.host.SCAN_MODE_UPDATE',

    /**
     * Indicates that the Bluetooth scanning mode changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 dynamic&static
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_CHANGE =
        'usual.event.bluetooth.host.SCAN_MODE_CHANGE',

    /**
     * Indicates that the Bluetooth scanning has been started on the device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED =
        'usual.event.bluetooth.host.DISCOVERY_STARTED',

    /**
     * Indicates that the Bluetooth scanning is finished on the device.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED =
        'usual.event.bluetooth.host.DISCOVERY_FINISHED',

    /**
     * Indicates that the Bluetooth adapter name of the device has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE =
        'usual.event.bluetooth.host.NAME_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the connection state of Bluetooth A2DP has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsink.CONNECT_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the playing state of Bluetooth A2DP has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsink.PLAYING_STATE_UPDATE',

    /**
     * (Reserved, not supported yet) Indicates that the audio state of Bluetooth A2DP Sink has changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.USE_BLUETOOTH** permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamiconly
     * @deprecated since 20
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE =
        'usual.event.bluetooth.a2dpsink.AUDIO_STATE_UPDATE',

    /**
     * Indicates that the state of the device NFC adapter has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED = 'usual.event.nfc.action.ADAPTER_STATE_CHANGED',

    /**
     * Indicates that the NFC RF field is on.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED = 'usual.event.nfc.action.RF_FIELD_ON_DETECTED',

    /**
     * Indicates that the NFC RF field is off.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED = 'usual.event.nfc.action.RF_FIELD_OFF_DETECTED',

    /**
     * Indicates that the system stops charging the battery.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISCHARGING = 'usual.event.DISCHARGING',

    /**
     * Indicates that the system starts charging the battery.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CHARGING = 'usual.event.CHARGING',

    /**
     * Indicates that the system charging type has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CHARGE_TYPE_CHANGED = 'usual.event.CHARGE_TYPE_CHANGED',

    /**
     * Indicates that the system idle mode has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED = 'usual.event.DEVICE_IDLE_MODE_CHANGED',

    /**
     * Indicates that the device enters the charging idle mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CHARGE_IDLE_MODE_CHANGED = 'usual.event.CHARGE_IDLE_MODE_CHANGED',

    /**
     * Indicates that the exemption list for resource usage restrictions has been updated in idle mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DEVICE_IDLE_EXEMPTION_LIST_UPDATED = 'usual.event.DEVICE_IDLE_EXEMPTION_LIST_UPDATED',

    /**
     * Indicates that the system power-saving mode has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_POWER_SAVE_MODE_CHANGED = 'usual.event.POWER_SAVE_MODE_CHANGED',

    /**
     * Indicates that a user has been added to the system.
     *
     * To subscribe to this common event, your application must have the ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_ADDED = 'usual.event.USER_ADDED',

    /**
     * Indicates that a user has been removed from the system.
     *
     * To subscribe to this common event, your application must have the ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_REMOVED = 'usual.event.USER_REMOVED',

    /**
     * (Reserved, not supported yet) Indicates that an ability has been added.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.LISTEN_BUNDLE_CHANGE**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ABILITY_ADDED = 'common.event.ABILITY_ADDED',

    /**
     * (Reserved, not supported yet) Indicates that an ability has been removed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.LISTEN_BUNDLE_CHANGE**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ABILITY_REMOVED = 'common.event.ABILITY_REMOVED',

    /**
     * (Reserved, not supported yet) Indicates that an ability has been updated.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.LISTEN_BUNDLE_CHANGE**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ABILITY_UPDATED = 'common.event.ABILITY_UPDATED',

    /**
     * (Reserved, not supported yet) Indicates that the location mode of the system has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_LOCATION_MODE_STATE_CHANGED = 'usual.event.location.MODE_STATE_CHANGED',

    /**
     * (Reserved, not supported yet) Indicates that the in-vehicle infotainment (IVI) system of a vehicle is sleeping.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_SLEEP = 'common.event.IVI_SLEEP',

    /**
     * (Reserved, not supported yet) Indicates that the IVI system of a vehicle has entered sleep mode and the playing
     * application is instructed to stop playback.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_PAUSE = 'common.event.IVI_PAUSE',

    /**
     * (Reserved, not supported yet) Indicates that a third-party application is instructed to pause the current work.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_STANDBY = 'common.event.IVI_STANDBY',

    /**
     * (Reserved, not supported yet) Indicates that a third-party application is instructed to save its last mode.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_LASTMODE_SAVE = 'common.event.IVI_LASTMODE_SAVE',

    /**
     * (Reserved, not supported yet) Indicates that the voltage of the vehicle's power system is abnormal.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_VOLTAGE_ABNORMAL = 'common.event.IVI_VOLTAGE_ABNORMAL',

    /**
     * (Reserved, not supported yet) Indicates that the temperature of the IVI system is high.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_HIGH_TEMPERATURE = 'common.event.IVI_HIGH_TEMPERATURE',

    /**
     * (Reserved, not supported yet) Indicates that the temperature of the IVI system is extremely high.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_EXTREME_TEMPERATURE = 'common.event.IVI_EXTREME_TEMPERATURE',

    /**
     * (Reserved, not supported yet) Indicates that the IVI system has an extreme temperature.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL = 'common.event.IVI_TEMPERATURE_ABNORMAL',

    /**
     * (Reserved, not supported yet) Indicates that the voltage of the vehicle's power system is restored to normal.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_VOLTAGE_RECOVERY = 'common.event.IVI_VOLTAGE_RECOVERY',

    /**
     * (Reserved, not supported yet) Indicates that the temperature of the IVI system is restored to normal.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_TEMPERATURE_RECOVERY = 'common.event.IVI_TEMPERATURE_RECOVERY',

    /**
     * (Reserved, not supported yet) Indicates that the battery service is active.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_IVI_ACTIVE = 'common.event.IVI_ACTIVE',

    /**
     * Indicates that the USB device state has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_STATE = 'usual.event.hardware.usb.action.USB_STATE',

    /**
     * Indicates that the USB port state of the device has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_PORT_CHANGED = 'usual.event.hardware.usb.action.USB_PORT_CHANGED',

    /**
     * Indicates that a USB device has been attached to the device functioning as a USB host.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_DEVICE_ATTACHED = 'usual.event.hardware.usb.action.USB_DEVICE_ATTACHED',

    /**
     * Indicates that a USB device has been detached from the device functioning as a USB host.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_DEVICE_DETACHED = 'usual.event.hardware.usb.action.USB_DEVICE_DETACHED',

    /**
     * Indicates that a USB accessory has been attached.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_ACCESSORY_ATTACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_ATTACHED',

    /**
     * Indicates that a USB accessory has been detached.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USB_ACCESSORY_DETACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_DETACHED',

    /**
     * (Reserved, not supported yet) Indicates that an external storage device was removed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.STORAGE_MANAGER** permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_REMOVED = 'usual.event.data.DISK_REMOVED',

    /**
     * (Reserved, not supported yet) Indicates that an external storage device was unmounted.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.STORAGE_MANAGER** permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_UNMOUNTED = 'usual.event.data.DISK_UNMOUNTED',

    /**
     * (Reserved, not supported yet) Indicates that an external storage device was mounted.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.STORAGE_MANAGER** permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_MOUNTED = 'usual.event.data.DISK_MOUNTED',

    /**
     * (Reserved, not supported yet) Indicates that an external storage device was removed without being unmounted.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.STORAGE_MANAGER** permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_BAD_REMOVAL = 'usual.event.data.DISK_BAD_REMOVAL',

    /**
     * (Reserved, not supported yet) Indicates that an external storage device becomes unmountable.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.STORAGE_MANAGER** permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_UNMOUNTABLE = 'usual.event.data.DISK_UNMOUNTABLE',

    /**
     * (Reserved, not supported yet) Indicates that an external storage device was ejected.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.STORAGE_MANAGER** permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DISK_EJECT = 'usual.event.data.DISK_EJECT',

    /**
     * Indicates that an external storage device was removed.
     *
     * To subscribe to this common event, your application must have the ohos.permission.STORAGE_MANAGER permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_REMOVED = 'usual.event.data.VOLUME_REMOVED',

    /**
     * Indicates that an external storage device was unmounted.
     *
     * To subscribe to this common event, your application must have the ohos.permission.STORAGE_MANAGER permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_UNMOUNTED = 'usual.event.data.VOLUME_UNMOUNTED',

    /**
     * Indicates that an external storage device was mounted.
     *
     * To subscribe to this common event, your application must have the ohos.permission.STORAGE_MANAGER permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_MOUNTED = 'usual.event.data.VOLUME_MOUNTED',

    /**
     * Indicates that an external storage device was removed without being unmounted.
     *
     * To subscribe to this common event, your application must have the ohos.permission.STORAGE_MANAGER permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_BAD_REMOVAL = 'usual.event.data.VOLUME_BAD_REMOVAL',

    /**
     * Indicates that an external storage device is about to be ejected.
     *
     * To subscribe to this common event, your application must have the ohos.permission.STORAGE_MANAGER permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VOLUME_EJECT = 'usual.event.data.VOLUME_EJECT',

    /**
     * (Reserved, not supported yet) Indicates that the account visibility changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_APP_ACCOUNTS**
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED = 'usual.event.data.VISIBLE_ACCOUNTS_UPDATED',

    /**
     * (Reserved, not supported yet) Indicates that the account was deleted.
     *
     * To subscribe to this common event, your application must have the
     * **ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS** permission. (This permission is available only for system
     * applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_ACCOUNT_DELETED = 'usual.event.data.ACCOUNT_DELETED',

    /**
     * (Reserved, not supported yet) Indicates that the foundation is ready.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.RECEIVER_STARTUP_COMPLETED**
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_FOUNDATION_READY = 'common.event.FOUNDATION_READY',

    /**
     * Indicates that a common event is published when the application is launched for the first time after installation.
     * This common event is published when the UIAbility is started for the first time after installation.
     * This is a protected common event, which can be sent only by the system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COMMON_EVENT_APP_FIRST_LAUNCH = 'usual.event.APP_FIRST_LAUNCH',

    /**
     * Indicates that the airplane mode state has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_AIRPLANE_MODE_CHANGED = 'usual.event.AIRPLANE_MODE',

    /**
     * Indicates a screen splitting action.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SPLIT_SCREEN = 'common.event.SPLIT_SCREEN',

    /**
     * Indicates that the notification slot or notification switch settings have changed.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.NOTIFICATION_CONTROLLER**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SLOT_CHANGE = 'usual.event.SLOT_CHANGE',

    /**
     * Indicates that the SPN information had changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SPN_INFO_CHANGED = 'usual.event.SPN_INFO_CHANGED',

    /**
     * Indicates the result of applying a quick fix to the application.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_QUICK_FIX_APPLY_RESULT = 'usual.event.QUICK_FIX_APPLY_RESULT',

    /**
     * Indicates the result of revoking a quick fix to the application.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_QUICK_FIX_REVOKE_RESULT = 'usual.event.QUICK_FIX_REVOKE_RESULT',

    /**
     * Indicates that the user information has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 9 dynamic
     * @since 23 static
     */
    COMMON_EVENT_USER_INFO_UPDATED = 'usual.event.USER_INFO_UPDATED',

    /**
     * Indicates that the HTTP proxy configuration has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_HTTP_PROXY_CHANGE = 'usual.event.HTTP_PROXY_CHANGE',

    /**
     * Indicates that the SIM card status has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_STATE_CHANGED = 'usual.event.SIM_STATE_CHANGED',

    /**
     * Indicates that an SMS message is received.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission. (This
     * permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_RECEIVE_COMPLETED = 'usual.event.SMS_RECEIVE_COMPLETED',

    /**
     * Indicates that an emergency cell broadcast message is received.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission. (This
     * permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_EMERGENCY_CB_RECEIVE_COMPLETED = 'usual.event.SMS_EMERGENCY_CB_RECEIVE_COMPLETED',

    /**
     * Indicates that a cell broadcast message is received.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission. (This
     * permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_CB_RECEIVE_COMPLETED = 'usual.event.SMS_CB_RECEIVE_COMPLETED',

    /**
     * (Reserved, not supported yet) Indicates that an STK command is sent.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_COMMAND = 'usual.event.STK_COMMAND',

    /**
     * (Reserved, not supported yet) Indicates that an STK session has ended.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_SESSION_END = 'usual.event.STK_SESSION_END',

    /**
     * (Reserved, not supported yet) Indicates that the STK card state has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_CARD_STATE_CHANGED = 'usual.event.STK_CARD_STATE_CHANGED',

    /**
     * (Reserved, not supported yet) Indicates that an STK Alpha identifier is sent.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_STK_ALPHA_IDENTIFIER = 'usual.event.STK_ALPHA_IDENTIFIER',

    /**
     * (Reserved, not supported yet) Indicates that a WAP push message is received.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission. (This
     * permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SMS_WAPPUSH_RECEIVE_COMPLETED = 'usual.event.SMS_WAPPUSH_RECEIVE_COMPLETED',

    /**
     * Indicates that the carrier configuration has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_OPERATOR_CONFIG_CHANGED = 'usual.event.OPERATOR_CONFIG_CHANGED',

    /**
     * Indicates that the default primary SIM card for the SMS service has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_SMS_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_SMS_SUBSCRIPTION_CHANGED',

    /**
     * Indicates that the default primary SIM card for the data service has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_DATA_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_DATA_SUBSCRIPTION_CHANGED',

    /**
     * Indicates that the default primary SIM card of the device has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_MAIN_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_MAIN_SUBSCRIPTION_CHANGED',

    /**
     * Indicates that the status of the action for setting the primary SIM card changes.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SET_PRIMARY_SLOT_STATUS = 'usual.event.SET_PRIMARY_SLOT_STATUS',

    /**
     * Indicates that the roaming status of the default primary SIM card is updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PRIMARY_SLOT_ROAMING = 'usual.event.PRIMARY_SLOT_ROAMING',

    /**
     * Indicates that the default primary SIM card for the voice service has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_VOICE_SUBSCRIPTION_CHANGED = 'usual.event.SIM.DEFAULT_VOICE_SUBSCRIPTION_CHANGED',

    /**
     * Indicates that the call state has been updated.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.GET_TELEPHONY_STATE**
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CALL_STATE_CHANGED = 'usual.event.CALL_STATE_CHANGED',

    /**
     * Indicates that the cellular data state has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CELLULAR_DATA_STATE_CHANGED = 'usual.event.CELLULAR_DATA_STATE_CHANGED',

    /**
     * Indicates that the network state has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_NETWORK_STATE_CHANGED = 'usual.event.NETWORK_STATE_CHANGED',

    /**
     * Indicates that the signal information has been updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SIGNAL_INFO_CHANGED = 'usual.event.SIGNAL_INFO_CHANGED',

    /**
     * Indicates that an incoming call is missed.
     *
     * To subscribe to this common event, your application must have the ohos.permission.GET_TELEPHONY_STATE permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_INCOMING_CALL_MISSED = 'usual.event.INCOMING_CALL_MISSED',

    /**
     * Indicates that the radio state of the device modem has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_RADIO_STATE_CHANGE = 'usual.event.RADIO_STATE_CHANGE',

    /**
     * Indicates that the status of the domain account status changes.
     *
     * To subscribe to this common event, your application must have the ohos.permission.GET_LOCAL_ACCOUNTS permission.
     * (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DOMAIN_ACCOUNT_STATUS_CHANGED = 'usual.event.DOMAIN_ACCOUNT_STATUS_CHANGED',

    /**
     * Indicates that the screen has been unlocked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_UNLOCKED = 'usual.event.SCREEN_UNLOCKED',

    /**
     * Indicates that the screen has been locked.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_LOCKED = 'usual.event.SCREEN_LOCKED',

    /**
     * Indicates that the network connection state has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CONNECTIVITY_CHANGE = 'usual.event.CONNECTIVITY_CHANGE',

    /**
     * Indicates that a secret code is sent successfully.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SPECIAL_CODE = 'common.event.SPECIAL_CODE',

    /**
     * Indicates that the audio quality has changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    COMMON_EVENT_AUDIO_QUALITY_CHANGE = 'usual.event.AUDIO_QUALITY_CHANGE',

    /**
     * Indicates that the Bluetooth HFP AG connection state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_CHANGE =
        'usual.event.bluetooth.handsfree.ag.CONNECT_STATE_CHANGE',

    /**
     * Indicates the privacy state has been changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PRIVACY_STATE_CHANGED = 'usual.event.PRIVACY_STATE_CHANGED',

    /**
     * Indicates that a package is sent by the system verifier when the package is verified.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_PACKAGE_INSTALLATION_STARTED = 'usual.event.PACKAGE_INSTALLATION_STARTED',

    /**
     * Indicates a common event that an application's dynamic icon has changed.
     *
     * When the dynamic icon of an installed application changes, the event notification service publishes this system
     * common event.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DYNAMIC_ICON_CHANGED = 'usual.event.DYNAMIC_ICON_CHANGED',

    /**
     * Indicates that the minor mode is enabled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MINORSMODE_ON = 'usual.event.MINORSMODE_ON',

    /**
     * Indicates that the minor mode is disabled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MINORSMODE_OFF = 'usual.event.MINORSMODE_OFF',

    /**
     * Indicates that the bundle management resource data has updated.
     *
     * To subscribe to this common event, your application must have the ohos.permission.GET_BUNDLE_RESOURCES
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BUNDLE_RESOURCES_CHANGED = 'usual.event.BUNDLE_RESOURCES_CHANGED',

    /**
     * Indicates that the DataShare service is available.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DATA_SHARE_READY = 'usual.event.DATA_SHARE_READY',

    /**
     * This common event means that vpn connection status has been changed.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COMMON_EVENT_VPN_CONNECTION_STATUS_CHANGED = 'usual.event.VPN_CONNECTION_STATUS_CHANGED',

    /**
     * Indicates that an application starts to be restored.
     *
     * To subscribe to this common event, your application must have the ohos.permission.START_RESTORE_NOTIFICATION
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    COMMON_EVENT_RESTORE_START = 'usual.event.RESTORE_START',

    /**
     * Indicates that the Bluetooth A2DP source connection state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_CHANGE =
        'usual.event.bluetooth.a2dpsource.CONNECT_STATE_CHANGE',

    /**
     * Indicates that the Bluetooth AVRCP connection state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_CHANGE =
        'usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_CHANGE',

    /**
     * Indicates that the Bluetooth media codec changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_CHANGE =
        'usual.event.bluetooth.a2dpsource.CODEC_VALUE_CHANGE',

    /**
     * Indicates that the Bluetooth A2DP playback state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAY_STATE_CHANGE =
        'usual.event.bluetooth.a2dpsource.PLAY_STATE_CHANGE',

    /**
     * Indicates that the Bluetooth SCO state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COMMON_EVENT_BLUETOOTH_SCO_CONNECT_STATE_CHANGE = 
        'usual.event.bluetooth.SCO_CONNECT_STATE_CHANGE',

    /**
     * Indicates that the Bluetooth ACL connection state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_STATE_CHANGE = 
        'usual.event.bluetooth.remotedevice.ACL_STATE_CHANGE',

    /**
     * Indicates that the Bluetooth pairing state changes.
     *
     * To subscribe to this common event, your application must have the **ohos.permission.ACCESS_BLUETOOTH**
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE_CHANGE =
        'usual.event.bluetooth.remotedevice.PAIR_STATE_CHANGE',

    /**
     * Indicates that the browser hosting policy has been changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 15 dynamic
     * @since 23 static
     */
    COMMON_EVENT_MANAGED_BROWSER_POLICY_CHANGED = 'usual.event.MANAGED_BROWSER_POLICY_CHANGED',

    /**
     * Indicates that the default application for opening a file has changed.
     *
     * To subscribe to this common event, your application must have the ohos.permission.CHANGE_DEFAULT_APPLICATION
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    COMMON_EVENT_DEFAULT_APPLICATION_CHANGED = 'usual.event.DEFAULT_APPLICATION_CHANGED',

    /**
     * Indicates that the application shortcut has changed.
     *
     * To subscribe to this common event, your application must have the ohos.permission.MANAGE_SHORTCUTS permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SHORTCUT_CHANGED = 'usual.event.SHORTCUT_CHANGED',

    /**
     * Indicates that the kiosk mode is enabled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_KIOSK_MODE_ON = 'usual.event.KIOSK_MODE_ON',

    /**
     * Indicates that the kiosk mode is disabled.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_KIOSK_MODE_OFF = 'usual.event.KIOSK_MODE_OFF',

    /**
     * Indicates that the configuration directory level and system parameters of a device are updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CUSTOM_CONFIG_POLICY_UPDATED = 'usual.event.CUSTOM_CONFIG_POLICY_UPDATED',

    /**
     * Indicates that the roaming area of a device is updated.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CUSTOM_ROAMING_REGION_UPDATED = 'usual.event.CUSTOM_ROAMING_REGION_UPDATED',

    /**
     * Indicates that a screen sharing event has occurred in the system.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission. (This
     * permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COMMON_EVENT_SCREEN_SHARE = 'usual.event.SCREEN_SHARE',

    /**
     * Indicates a common event that an application has completed restoration.
     *
     * When a data migration¨Crelated application invokes the backup and restore framework to perform a restore task,
     * this event is published after the application finishes restoring.
     *
     * To subscribe to this common event, your application must have the ohos.permission.RESTORE_END_NOTIFICATION
     * permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 23 dynamic&static
     */
    COMMON_EVENT_RESTORE_END = 'usual.event.RESTORE_END',

    /**
     * Indicates that the sync root of the cloud disk has been updated.
     *
     * To subscribe to this common event, your application must have the ohos.permission.ACCESS_CLOUD_DISK_INFO
     * permission. (This permission is available only for system applications.)
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    COMMON_EVENT_CLOUD_DISK_STATE_CHANGED = 'usual.event.CLOUD_DISK_STATE_CHANGED',

    /**
     * Indicates that the tablet mode of a device (such as a tablet with bracket) has been changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 dynamic&static
     */
    COMMON_EVENT_TABLET_MODE_CHANGED = 'usual.event.TABLET_MODE_CHANGED',

    /**
     * This common event indicates that specific volumes on the device have been decrypted.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMMON_EVENT_VOLUME_DECRYPTED = 'usual.event.VOLUME_DECRYPTED',

    /**
     * This common event indicates that specific volumes on the device have been encrypted.
     * This is a protected common event that can only be sent by system.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMMON_EVENT_VOLUME_ENCRYPTED = 'usual.event.VOLUME_ENCRYPTED',

    /**
     * This common event indicates that specific volumes on the device have had their encryption policy set.
     * This is a protected common event that can only be sent by system.
     * To subscribe to this protected common event, your application must have
     * the ohos.permission.QUERY_VOLUME_ENCRYPTION_STATUS permission.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMMON_EVENT_VOLUME_ENCRYPTION_POLICY_SET = 'usual.event.VOLUME_ENCRYPTION_POLICY_SET',

    /**
     * Indicates that the lid state of a device (such as a laptop) has been changed.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 dynamic&static
     */
    COMMON_EVENT_LID_STATE_CHANGED = 'usual.event.LID_STATE_CHANGED'
  }

  /**
   * Describes the data of a common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type CommonEventData = _CommonEventData;

  /**
   * Describes the subscriber of a common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type CommonEventSubscriber = _CommonEventSubscriber;

  /**
   * Describes the information of the subscriber
   *
   * @typedef { _CommonEventSubscribeInfo } CommonEventSubscribeInfo
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  export type CommonEventSubscribeInfo = _CommonEventSubscribeInfo;

  /**
   * Describes the content and properties of a common event.
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