/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit NotificationKit
 */

import { AsyncCallback } from './@ohos.base';
import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import { NotificationSubscribeInfo as _NotificationSubscribeInfo } from './notification/notificationSubscribeInfo';
import { NotificationSubscriber as _NotificationSubscriber } from './notification/notificationSubscriber';
import { SubscribeCallbackData as _SubscribeCallbackData } from './notification/notificationSubscriber';
import { EnabledNotificationCallbackData as _EnabledNotificationCallbackData } from './notification/notificationSubscriber';
import { EnabledSilentReminderCallbackData as _EnabledSilentReminderCallbackData } from './notification/notificationSubscriber';
import { EnabledSilentReminderChangedCallback as _EnabledSilentReminderChangedCallback } from './notification/notificationSubscriber';
import { EnabledPriorityNotificationCallbackData as _EnabledPriorityNotificationCallbackData } from './notification/notificationSubscriber';
import { EnabledPriorityNotificationByBundleCallbackData as _EnabledPriorityNotificationByBundleCallbackData } from './notification/notificationSubscriber';
/*** if arkts dynamic */
import type { BadgeNumberCallbackData as _BadgeNumberCallbackData } from './notification/notificationSubscriber';
/*** endif */
/*** if arkts static */
import type { BadgeNumberCallbackData as _BadgeNumberCallbackData } from './notification/notificationSubscriber';
/*** endif */

/**
 * 本模块提供通知订阅、取消订阅、通知移除等，一般情况下，只有系统应用具有这些操作权限。
 * 
 * > **说明：**
 * >
 * > 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace notificationSubscribe {
  /**
   * 通知键值。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NotificationKey {
    /**
     * 通知ID。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 通知标签，默认为空。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    label?: string;
  }

  /**
   * 通知删除原因。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum RemoveReason {
    /**
     * 点击通知后删除通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CLICK_REASON_REMOVE = 1,

    /**
     * 用户删除通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CANCEL_REASON_REMOVE = 2
  }

  /**
   * 订阅当前用户下所有应用的通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { AsyncCallback<void> } callback - 订阅动作回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead subscribeNotification
   */
  function subscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * 订阅本应用的通知并指定订阅信息。使用Promise异步回调。
   *
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function subscribeSelf(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * 订阅通知并指定订阅信息。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { NotificationSubscribeInfo } info - 通知订阅信息。
   * @param { AsyncCallback<void> } callback - 订阅动作回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead subscribeNotification
   */
  function subscribe(
    subscriber: NotificationSubscriber,
    info: NotificationSubscribeInfo,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 订阅通知并指定订阅信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { NotificationSubscribeInfo } [info] - 通知订阅信息，默认为空（当为空时，表示订阅当前用户下所有应用的通知，否则表示订阅通知并指定订阅信息）。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead subscribeNotification
   */
  function subscribe(subscriber: NotificationSubscriber, info?: NotificationSubscribeInfo): Promise<void>;

  /**
   * 订阅通知；订阅后，通过订阅者中的回调函数接收新消息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_SYSTEM_SUBSCRIBER
   * @param { NotificationSubscriber } subscriber - 通知订阅者。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function subscribeNotification(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * 订阅通知；订阅后，通过订阅者中的回调函数接收新消息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_SYSTEM_SUBSCRIBER
   * @param { NotificationSubscriber } subscriber - 通知订阅者。
   * @param { NotificationSubscribeInfo } info - 通知订阅信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function subscribeNotification(subscriber: NotificationSubscriber, info: NotificationSubscribeInfo): Promise<void>;

  /**
   * 取消订阅。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 19]
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @param { AsyncCallback<void> } callback - 取消订阅动作回调函数。
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 19]
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unsubscribe(subscriber: NotificationSubscriber, callback: AsyncCallback<void>): void;

  /**
   * 取消订阅。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 19]
   * @param { NotificationSubscriber } subscriber - 通知订阅对象。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 19]
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unsubscribe(subscriber: NotificationSubscriber): Promise<void>;

  /**
   * 根据应用的包信息和通知键值，删除指定通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationKey } notificationKey - 通知键值。
   * @param { RemoveReason } reason - 通知删除原因。
   * @param { AsyncCallback<void> } callback - 删除指定通知回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(
    bundle: BundleOption,
    notificationKey: NotificationKey,
    reason: RemoveReason,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 根据应用的包信息和通知键值，删除指定通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationKey } notificationKey - 通知键值。
   * @param { RemoveReason } reason - 通知删除原因。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(bundle: BundleOption, notificationKey: NotificationKey, reason: RemoveReason): Promise<void>;

  /**
   * 通过通知的唯一ID，删除指定通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - 通知唯一ID。可以通过
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume}回调的入参
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData}获取其内部
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}对象中的hashCode。
   * @param { RemoveReason } reason - 通知删除原因。
   * @param { AsyncCallback<void> } callback - 删除指定通知回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(hashCode: string, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * 批量删除指定通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<String> } hashCodes - 通知唯一ID数组集合。可以通过
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume}回调的入参
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData}获取其内部
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}对象中的hashCode。
   * @param { RemoveReason } reason - 通知删除原因。
   * @param { AsyncCallback<void> } callback - 删除指定通知回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function remove(hashCodes: Array<String>, reason: RemoveReason, callback: AsyncCallback<void>): void;

  /**
   * 通过通知的唯一ID，删除指定通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashCode - 通知唯一ID。可以通过
   *     [onConsume]{@link ./notification/notificationSubscriber:NotificationSubscriber.onConsume}回调的入参
   *     [SubscribeCallbackData]{@link ./notification/notificationSubscriber:SubscribeCallbackData}获取其内部
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}对象中的hashCode。
   * @param { RemoveReason } reason - 通知删除原因。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function remove(hashCode: string, reason: RemoveReason): Promise<void>;

  /**
   * 批量删除指定通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<String> } hashCodes - 通知唯一ID数组集合。
   * @param { RemoveReason } reason - 通知删除原因。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function remove(hashCodes: Array<String>, reason: RemoveReason): Promise<void>;

  /**
   * 删除指定应用的所有通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<void> } callback - 删除指定应用的所有通知回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(bundle: BundleOption, callback: AsyncCallback<void>): void;

  /**
   * 删除所有通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<void> } callback - 删除所有通知回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(callback: AsyncCallback<void>): void;

  /**
   * 删除指定用户下的所有通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @param { AsyncCallback<void> } callback - 删除指定用户所有通知回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(userId: int, callback: AsyncCallback<void>): void;

  /**
   * 删除指定用户下的所有通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(userId: int): Promise<void>;

  /**
   * 删除指定应用的所有通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } [bundle] - 指定应用的包信息。默认为空，表示删除所有通知。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAll(bundle?: BundleOption): Promise<void>;

  /**
   * 触发指定通知的跨设备协同操作（例如通知跨设备点击跳转、通知跨设备快捷回复等）。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } hashcode - 通知唯一ID。
   * @param { OperationInfo } [operationInfo] - 跨设备协同操作信息，默认为空。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600021 - Distributed operation timed out.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function distributeOperation(hashcode: string, operationInfo?: OperationInfo): Promise<void>;

  /**
   * 跨设备协同操作信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  export interface OperationInfo {
    /**
     * 描述通知中显示的操作按钮（与通知
     * [NotificationActionButton]{@link ./notification/notificationActionButton:NotificationActionButton}中title字段保持一致）。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    actionName?: string;

    /**
     * 用户输入（用于通知跨设备快捷回复场景传递用户输入，与通知
     * [NotificationUserInput]{@link ./notification/notificationUserInput:NotificationUserInput}中inputKey字段保持一致）。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    userInput?: string;

    /**
     * 用户点击操作类型。
     * 
     * - 0：用户点击非实况通知本体。
     * - 1：用户点击非实况通知按钮。
     * - 32：用户点击实况通知本体。
     * - 33：用户点击实况通知辅助区
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    operationType?: int;

    /**
     * 用户点击的非实况通知按钮序号或实况通知辅助区序号。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    buttonIndex?: int;
  }

  /**
   * 描述BundleOption信息，即应用的包信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * 通知发布者的信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSubscribeInfo = _NotificationSubscribeInfo;

  /**
   * 作为订阅通知接口subscribe的入参，提供订阅者接收到新通知、取消通知等的回调方法。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSubscriber = _NotificationSubscriber;

  /**
   * 携带系统属性值的通知信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type SubscribeCallbackData = _SubscribeCallbackData;

  /**
   * 回调返回监听到的应用信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type EnabledNotificationCallbackData = _EnabledNotificationCallbackData;

  /**
   * 回调返回监听到的静默提醒使能状态信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type EnabledSilentReminderCallbackData = _EnabledSilentReminderCallbackData;

  /**
   * 注册应用通知静默提醒使能状态变化的回调函数类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type EnabledSilentReminderChangedCallback = _EnabledSilentReminderChangedCallback;

  /**
   * 返回通知优先级总开关状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type EnabledPriorityNotificationCallbackData = _EnabledPriorityNotificationCallbackData;

  /**
   * 返回应用通知优先级开关状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type EnabledPriorityNotificationByBundleCallbackData = _EnabledPriorityNotificationByBundleCallbackData;

  /**
   * 回调返回监听到的应用信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type BadgeNumberCallbackData = _BadgeNumberCallbackData;
}

export default notificationSubscribe;
