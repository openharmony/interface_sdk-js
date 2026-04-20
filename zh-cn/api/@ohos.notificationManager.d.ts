/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import { NotificationActionButton as _NotificationActionButton } from './notification/notificationActionButton';
import { NotificationBasicContent as _NotificationBasicContent } from './notification/notificationContent';
import { NotificationContent as _NotificationContent } from './notification/notificationContent';
import { NotificationLongTextContent as _NotificationLongTextContent } from './notification/notificationContent';
import { NotificationMultiLineContent as _NotificationMultiLineContent } from './notification/notificationContent';
import { NotificationPictureContent as _NotificationPictureContent } from './notification/notificationContent';
import { NotificationSystemLiveViewContent as _NotificationSystemLiveViewContent } from './notification/notificationContent';
import { NotificationCapsule as _NotificationCapsule } from './notification/notificationContent';
import { NotificationButton as _NotificationButton } from './notification/notificationContent';
import { NotificationTime as _NotificationTime } from './notification/notificationContent';
import { NotificationProgress as _NotificationProgress } from './notification/notificationContent';
import { NotificationFlags as _NotificationFlags } from './notification/notificationFlags';
import { NotificationFlagStatus as _NotificationFlagStatus } from './notification/notificationFlags';
import { NotificationRequest as _NotificationRequest } from './notification/notificationRequest';
import { NotificationIconButton as _NotificationIconButton } from './notification/notificationContent';
import { UnifiedGroupInfo as _UnifiedGroupInfo } from './notification/notificationRequest';
import { DistributedOptions as _DistributedOptions } from './notification/notificationRequest';
import { NotificationSlot as _NotificationSlot } from './notification/notificationSlot';
import { NotificationSorting as _NotificationSorting } from './notification/notificationSorting';
import { NotificationTemplate as _NotificationTemplate } from './notification/notificationTemplate';
import { NotificationUserInput as _NotificationUserInput } from './notification/notificationUserInput';
import { TriggerType as _TriggerType } from './notification/notificationRequest';
import { Trigger as _Trigger } from './notification/notificationRequest';
import { NotificationParameters as _NotificationParameters } from './notification/notificationRequest';
import { Geofence as _Geofence } from './notification/notificationRequest';
import { CoordinateSystemType as _CoordinateSystemType } from './notification/notificationRequest';
import { MonitorEvent as _MonitorEvent } from './notification/notificationRequest';
import { GroupInfo as _GroupInfo } from './notification/notificationRequest';

/*** if arkts dynamic */
import { AsyncCallback } from './@ohos.base';
import type { NotificationLiveViewContent as _NotificationLiveViewContent } from './notification/notificationContent';
import type { LiveViewStatus as _LiveViewStatus } from './notification/notificationContent';
import type { LiveViewTypes as _LiveViewTypes } from './notification/notificationContent';
import type { NotificationFilter as _NotificationFilter } from './notification/notificationRequest';
import type { NotificationCheckRequest as _NotificationCheckRequest } from './notification/notificationRequest';
import type UIAbilityContext from './application/UIAbilityContext';
/*** endif */
/*** if arkts static */
import { AsyncCallback, RecordData } from '@ohos.base';
import { NotificationLiveViewContent as _NotificationLiveViewContent } from './notification/notificationContent';
import { LiveViewStatus as _LiveViewStatus } from './notification/notificationContent';
import { LiveViewTypes as _LiveViewTypes } from './notification/notificationContent';
import { NotificationFilter as _NotificationFilter } from './notification/notificationRequest';
import { NotificationCheckRequest as _NotificationCheckRequest } from './notification/notificationRequest';
import type UIAbilityContext from './application/UIAbilityContext';
/*** endif */

/**
 * 本模块提供通知管理的能力，包括发布、更新、取消通知，创建、获取、移除通知渠道，获取发布通知应用的使能状态，获取通知的相关信息等。
 *
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace notificationManager {
  /**
   * 发布通知。使用callback异步回调。
   * 
   * 如果新发布通知与已发布通知的ID和标签都相同，则新通知将取代原有通知。
   *
   * @param { NotificationRequest } request - 设置发布通知的内容和相关配置信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当发布通知成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600007 - The notification does not exist. [since 11]
   * @throws { BusinessError } 1600014 - No permission. [since 11]
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate
   *     configurations. [since 11]
   * @throws { BusinessError } 1600016 - The notification version for this update is too low. [since 11]
   * @throws { BusinessError } 2300007 - Network unreachable. [since 11]
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings. [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * 发布通知。使用Promise异步回调。
   * 
   * 如果新发布通知与已发布通知的ID和标签都相同，则新通知将取代原有通知。
   *
   * @param { NotificationRequest } request - 设置发布通知的内容和相关配置信息。
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600007 - The notification does not exist. [since 11]
   * @throws { BusinessError } 1600014 - No permission. [since 11]
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate
   *     configurations. [since 11]
   * @throws { BusinessError } 1600016 - The notification version for this update is too low. [since 11]
   * @throws { BusinessError } 2300007 - Network unreachable. [since 11]
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings. [since 12]
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * 发布通知给指定的用户。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 17]
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER [since 18]
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { int } userId - 用户ID。
   * @param { AsyncCallback<void> } callback - 被指定的回调方法。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600007 - The notification does not exist. [since 11]
   * @throws { BusinessError } 1600014 - No permission. [since 11]
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate
   *     configurations. [since 11]
   * @throws { BusinessError } 1600016 - The notification version for this update is too low. [since 11]
   * @throws { BusinessError } 2300007 - Network unreachable. [since 11]
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings. [since 18]
   * @throws { BusinessError } 801 - The device does not support geofencing. [since 23]
   * @throws { BusinessError } 1600025 - Geofencing disabled. [since 23]
   * @throws { BusinessError } 1600026 - The location switch is off. [since 23]
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is
   *     off. [since 23]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function publish(request: NotificationRequest, userId: int, callback: AsyncCallback<void>): void;

  /**
   * 发布通知给指定的用户。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 17]
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER [since 18]
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { int } userId - 用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600007 - The notification does not exist. [since 11]
   * @throws { BusinessError } 1600014 - No permission. [since 11]
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate
   *     configurations. [since 11]
   * @throws { BusinessError } 1600016 - The notification version for this update is too low. [since 11]
   * @throws { BusinessError } 2300007 - Network unreachable. [since 11]
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings. [since 18]
   * @throws { BusinessError } 801 - The device does not support geofencing. [since 23]
   * @throws { BusinessError } 1600025 - Geofencing disabled. [since 23]
   * @throws { BusinessError } 1600026 - The location switch is off. [since 23]
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is
   *     off. [since 23]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function publish(request: NotificationRequest, userId: int): Promise<void>;

  /**
   * 发布代理通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { string } representativeBundle - 被代理应用的包名。
   * @param { int } userId - 用户ID。
   * @param { AsyncCallback<void> } callback - 发布代理通知的回调方法。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @throws { BusinessError } 801 - The device does not support geofencing. [since 23]
   * @throws { BusinessError } 1600025 - Geofencing disabled. [since 23]
   * @throws { BusinessError } 1600026 - The location switch is off. [since 23]
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is
   *     off. [since 23]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function publishAsBundle(
    request: NotificationRequest,
    representativeBundle: string,
    userId: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 发布代理通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @param { string } representativeBundle - 被代理应用的包名。
   * @param { int } userId - 用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @throws { BusinessError } 801 - The device does not support geofencing. [since 23]
   * @throws { BusinessError } 1600025 - Geofencing disabled. [since 23]
   * @throws { BusinessError } 1600026 - The location switch is off. [since 23]
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is
   *     off. [since 23]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function publishAsBundle(request: NotificationRequest, representativeBundle: string, userId: int): Promise<void>;

  /**
   * 发布代理通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - 被代理应用的包信息。
   * @param { NotificationRequest } request - 用于设置要发布通知的内容和相关配置信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission
   *     settings.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @throws { BusinessError } 801 - The device does not support geofencing. [since 23]
   * @throws { BusinessError } 1600025 - Geofencing disabled. [since 23]
   * @throws { BusinessError } 1600026 - The location switch is off. [since 23]
   * @throws { BusinessError } 1600027 - The "Awareness & suggestions" switch of the location-based service is
   *     off. [since 23]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function publishAsBundle(representativeBundle: BundleOption, request: NotificationRequest): Promise<void>;

  /**
   * 根据指定的通知ID取消已发布的通知。使用callback异步回调。
   *
   * @param { int } id - 通知ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当取消已发布的通知成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(id: int, callback: AsyncCallback<void>): void;

  /**
   * 根据通知ID和标签取消已发布的通知。使用callback异步回调。
   *
   * @param { int } id - 通知ID。
   * @param { string } label - 通知标签。
   * @param { AsyncCallback<void> } callback - 回调函数。根据通知ID和标签取消已发布的通知成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(id: int, label: string, callback: AsyncCallback<void>): void;

  /**
   * 根据通知ID和标签取消已发布的通知，若标签为空，则取消与指定通知ID匹配的已发布通知。使用Promise异步回调。
   *
   * @param { int } id - 通知ID。
   * @param { string } [label] - 通知标签，默认为空。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(id: int, label?: string): Promise<void>;

  /**
   * 代理取消当前用户其他应用的通知。使用Promise异步回调。
   * 
   * 需要当前应用与其他应用存在代理关系，或者当前应用有ohos.permission.NOTIFICATION_AGENT_CONTROLLER权限。
   *
   * @param { BundleOption } representativeBundle - 应用的包信息。
   * @param { int } id - 通知ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function cancel(representativeBundle: BundleOption, id: int): Promise<void>;

  /**
   * 取消代理通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { int } id - 通知ID。
   * @param { string } representativeBundle - 被代理应用的包名。
   * @param { int } userId - 用户ID。
   * @param { AsyncCallback<void> } callback - 取消代理通知的回调方法。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAsBundle(
    id: int,
    representativeBundle: string,
    userId: int,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 取消代理通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { int } id - 通知ID。
   * @param { string } representativeBundle - 被代理应用的包名。
   * @param { int } userId - 用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAsBundle(id: int, representativeBundle: string, userId: int): Promise<void>;

  /**
   * 取消代理通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - 被代理应用的包信息。
   * @param { int } id - 通知ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function cancelAsBundle(representativeBundle: BundleOption, id: int): Promise<void>;

  /**
   * 取消当前应用所有已发布的通知。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当取消当前应用所有已发布的通知成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAll(callback: AsyncCallback<void>): void;

  /**
   * 取消当前应用所有已发布的通知。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelAll(): Promise<void>;

  /**
   * 创建通知渠道。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - 要创建的通知渠道对象。
   * @param { AsyncCallback<void> } callback - 表示被指定通道的回调方法。
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
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * 创建通知渠道。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - 要创建的通知渠道对象。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * 创建指定类型的通知渠道。使用callback异步回调。
   *
   * @param { SlotType } type - 要创建的通知渠道的类型。
   * @param { AsyncCallback<void> } callback - 回调函数。当创建指定类型的通知渠道成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;

  /**
   * 创建指定类型的通知渠道。使用Promise异步回调。
   *
   * @param { SlotType } type - 要创建的通知渠道的类型。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function addSlot(type: SlotType): Promise<void>;

  /**
   * 创建多个通知渠道。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - 要创建的通知渠道对象数组。数组中的元素个数为0~5。
   * @param { AsyncCallback<void> } callback - 表示被指定通道的回调方法。
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
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * 创建多个通知渠道。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - 要创建的通知渠道对象数组。数组中的元素个数为0~5。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * 获取指定类型的通知渠道。使用callback异步回调。
   *
   * @param { SlotType } slotType - 通知渠道类型，例如社交通信、服务提醒、内容咨询等类型。
   * @param { AsyncCallback<NotificationSlot> } callback - 回调函数。当获取通知渠道成功，err为undefined，data为获取到的NotificationSlot，否则为错误对
   *     象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;

  /**
   * 获取指定类型的通知渠道。使用callback异步回调。
   *
   * @param { SlotType } slotType - 通知渠道类型，例如社交通信、服务提醒、内容咨询等类型。
   * @param { AsyncCallback<NotificationSlot|null> } callback - 回调函数。当获取通知渠道成功，err为undefined，data为获取到的NotificationSlot，否则为错误对
   *     象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot|null>): void;

  /**
   * 获取指定类型的通知渠道。使用Promise异步回调。
   *
   * @param { SlotType } slotType - 通知渠道类型，例如社交通信、服务提醒、内容咨询等类型。
   * @returns { Promise<NotificationSlot> } Promise对象，返回通知渠道对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * 获取指定类型的通知渠道。使用Promise异步回调。
   *
   * @param { SlotType } slotType - 通知渠道类型，例如社交通信、服务提醒、内容咨询等类型。
   * @returns { Promise<NotificationSlot|null> } Promise对象，返回通知渠道对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot|null>;

  /**
   * 获取当前应用的所有通知渠道。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - 回调函数。当获取通知渠道成功，err为undefined，data为获取到的NotificationSlot
   *     数组，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * 获取当前应用的所有通知渠道。使用Promise异步回调。
   *
   * @returns { Promise<Array<NotificationSlot>> } Promise对象，返回通知渠道对象。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * 获取允许通知的应用程序列表。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<BundleOption>> } 返回允许通知的应用程序列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllNotificationEnabledBundles(): Promise<Array<BundleOption>>;

  /**
   * 获取指定用户下允许通知的应用程序列表。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 要获取允许通知的应用程序列表的用户。
   * @returns { Promise<Array<BundleOption>> } 返回允许通知的应用程序列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllNotificationEnabledBundles(userId: int): Promise<Array<BundleOption>>;

  /**
   * 删除当前应用指定类型的通知渠道。使用callback异步回调。
   *
   * @param { SlotType } slotType - 通知渠道类型，例如社交通信、服务提醒、内容咨询等类型。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除指定类型的通知渠道成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;

  /**
   * 删除当前应用指定类型的通知渠道。使用Promise异步回调。
   *
   * @param { SlotType } slotType - 通知渠道类型，例如社交通信、服务提醒、内容咨询等类型。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * 删除当前应用所有通知渠道。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当删除当前应用所有通知渠道成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;

  /**
   * 删除当前应用所有通知渠道。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllSlots(): Promise<void>;

  /**
   * 设定指定应用的通知使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @param { AsyncCallback<void> } callback - 设定通知使能回调函数。
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
  function setNotificationEnable(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设定指定应用的通知使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
  function setNotificationEnable(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * 获取指定应用的通知使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<boolean> } callback - 获取通知使能状态回调函数（true：使能，false：禁止）。
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
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定应用的通知使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<boolean> } 以Promise形式返回获取指定应用的通知使能状态的结果（true：使能，false：禁止）。
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
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * 查询当前应用通知使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 10]
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true，表示允许发布通知；返回false，表示禁止发布通知；调用失败返回错误对象。
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 10]
   * @throws { BusinessError } 202 - Not system application to call the interface. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist. [since 11]
   * @throws { BusinessError } 17700001 - The specified bundle name was not found. [since 11]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 9 - 10]
   * @publicapi [since 11 - 11]
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前应用通知使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 10]
   * @returns { Promise<boolean> } Promise对象。返回true，表示允许发布通知；返回false，表示禁止发布通知。
   * @throws { BusinessError } 201 - Permission denied. [since 9 - 10]
   * @throws { BusinessError } 202 - Not system application to call the interface. [since 9 - 10]
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist. [since 11]
   * @throws { BusinessError } 17700001 - The specified bundle name was not found. [since 11]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 9 - 10]
   * @publicapi [since 11 - 11]
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * 同步查询当前应用通知使能状态。
   *
   * @returns { boolean } 返回查询通知使能状态的结果。返回true，表示允许发布通知；返回false，表示禁止发布通知。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  function isNotificationEnabledSync(): boolean;

  /**
   * 获取指定用户ID下的通知使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 指定的用户ID。
   * @param { AsyncCallback<boolean> } callback - 获取通知使能状态回调函数（true：使能，false：禁止）。
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
  function isNotificationEnabled(userId: int, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定用户下的通知使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 指定的用户ID。
   * @returns { Promise<boolean> } 以Promise形式返回获取通知使能状态的结果（true：使能，false：禁止）。
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
  function isNotificationEnabled(userId: int): Promise<boolean>;

  /**
   * 设定指定应用的角标使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @param { AsyncCallback<void> } callback - 设定角标使能回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设定指定应用的角标使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * 获取指定应用的角标使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<boolean> } callback - 获取角标使能状态回调函数（true：使能，false：禁止）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定应用的角标使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<boolean> } 以Promise形式返回获取指定应用的角标使能状态（true：使能，false：禁止）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * 设置指定应用的通知渠道。使用callback异步回调。
   * 
   * 设置前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationSlot } slot - 通知渠道。
   * @param { AsyncCallback<void> } callback - 设定通知渠道回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * 设置指定应用的通知渠道。使用Promise异步回调。
   * 
   * 设置前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { NotificationSlot } slot - 通知渠道。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * 获取指定应用的所有通知渠道。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - 获取通知渠道回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * 获取指定应用指定类型的通知渠道。使用Promise异步回调。
   * 
   * 获取前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { SlotType } slotType - 渠道类型。
   * @returns { Promise<NotificationSlot> } 以Promise形式返回获取指定应用指定类型的通知渠道。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   */
  function getSlotByBundle(bundle: BundleOption, slotType: SlotType): Promise<NotificationSlot>;

  /**
   * 获取指定应用指定类型的通知渠道。使用Promise异步回调。
   * 
   * 获取前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { SlotType } slotType - 渠道类型。
   * @returns { Promise<NotificationSlot|null> } 以Promise形式返回获取指定应用指定类型的通知渠道。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function getSlotByBundle(bundle: BundleOption, slotType: SlotType): Promise<NotificationSlot|null>;

  /**
   * 获取指定应用的所有通知渠道。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<Array<NotificationSlot>> } 以Promise形式返回获取指定应用的通知渠道。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * 获取指定应用的通知渠道数量。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { AsyncCallback<long> } callback - 获取通知渠道数量回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<long>): void;

  /**
   * 获取指定应用的通知渠道数量。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<long> } 以Promise形式返回获取指定应用的通知渠道数量。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<long>;

  /**
   * 获取当前未删除的所有通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - 获取活动通知回调函数。
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
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * 获取当前未删除的所有通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } 以Promise形式返回获取活动通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * 获取当前应用未删除的通知数。使用callback异步回调。
   *
   * @param { AsyncCallback<long> } callback - 回调函数。当获取当前应用未删除的通知数成功，err为undefined，data为当前应用未删除的通知数，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotificationCount(callback: AsyncCallback<long>): void;

  /**
   * 获取当前应用未删除的通知数。使用Promise异步回调。
   *
   * @returns { Promise<long> } Promise对象，返回当前应用未删除通知数。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotificationCount(): Promise<long>;

  /**
   * 获取当前应用未删除的通知列表。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - 回调函数。当获取未删除的通知列表成功，err为undefined，data为获取到的通知列表，否则为错
   *     误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * 获取当前应用未删除的通知列表。使用Promise异步回调。
   *
   * @returns { Promise<Array<NotificationRequest>> } Promise对象，返回当前应用的通知列表。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * 获取满足条件的普通实况通知信息。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - 查询普通实况窗的过滤条件。
   * @param { AsyncCallback<NotificationRequest> } callback - 获取满足条件的普通实况通知信息的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  function getActiveNotificationByFilter(filter: NotificationFilter, callback: AsyncCallback<NotificationRequest>): void;

  /**
   * 获取满足条件的普通实况通知信息。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - 查询普通实况窗的过滤条件。
   * @param { AsyncCallback<NotificationRequest|null> } callback - 获取满足条件的普通实况通知信息的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function getActiveNotificationByFilter(filter: NotificationFilter, callback: AsyncCallback<NotificationRequest|null>): void;

  /**
   * 获取满足条件的普通实况通知信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - 查询普通实况窗的过滤条件。
   * @returns { Promise<NotificationRequest> } 以Promise形式返回获取的满足条件的普通实况通知信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  function getActiveNotificationByFilter(filter: NotificationFilter): Promise<NotificationRequest>;

  /**
   * 获取满足条件的普通实况通知信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - 查询普通实况窗的过滤条件。
   * @returns { Promise<NotificationRequest|null> } 以Promise形式返回获取的满足条件的普通实况通知信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function getActiveNotificationByFilter(filter: NotificationFilter): Promise<NotificationRequest|null>;

  /**
   * 获取通知[NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}中wantAgent字段的部分信息。使用Promise异
   * 步回调。
   *
   * @param { number } id - 通知ID。
   * @param { string } [label] - 通知标签，默认为空。
   * @returns { Promise<NotificationParameters> } Promise对象，返回wantAgent的部分信息。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic
   */
  function getNotificationParameters(id: number, label?: string): Promise<NotificationParameters>;

  /**
   * 获取通知[NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}中wantAgent字段的部分信息。使用Promise异
   * 步回调。
   *
   * @param { int } id - 通知ID。
   * @param { string } [label] - 通知标签，默认为空。
   * @returns { Promise<NotificationParameters | null> } Promise对象，返回wantAgent的部分信息。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 static
   */
  function getNotificationParameters(id: int, label?: string): Promise<NotificationParameters | null>;

  /**
   * 取消当前应用指定组下的通知。使用callback异步回调。
   *
   * @param { string } groupName - 通知组名称，此名称需要在发布通知时通过
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}对象指定。
   * @param { AsyncCallback<void> } callback - 回调函数。当取消当前应用指定组下的通知成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;

  /**
   * 取消当前应用指定组下的通知。使用Promise异步回调。
   *
   * @param { string } groupName - 通知组名称，此名称需要在发布通知时通过
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}对象指定。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * 删除指定应用的指定组下的通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { string } groupName - 通知组名称。
   * @param { AsyncCallback<void> } callback - 删除指定应用指定组下通知的回调函数。
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
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;

  /**
   * 删除指定应用的指定组下的通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { string } groupName - 通知组名称。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * 设置免打扰时间。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @param { AsyncCallback<void> } callback - 设置免打扰时间回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;

  /**
   * 设置免打扰时间。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * 指定用户设置免打扰时间。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @param { int } userId - 设置免打扰时间的用户ID。
   * @param { AsyncCallback<void> } callback - 设置免打扰时间回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: int, callback: AsyncCallback<void>): void;

  /**
   * 指定用户设置免打扰时间。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - 免打扰时间选项。
   * @param { int } userId - 设置免打扰时间的用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: int): Promise<void>;

  /**
   * 查询免打扰时间。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - 查询免打扰时间回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * 查询免打扰时间。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } 以Promise形式返回获取查询到的免打扰时间。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * 查询指定用户的免打扰时间。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @param { AsyncCallback<DoNotDisturbDate> } callback - 查询免打扰时间回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(userId: int, callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * 查询指定用户的免打扰时间。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @returns { Promise<DoNotDisturbDate> } 以Promise形式返回获取查询到的免打扰时间。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDoNotDisturbDate(userId: int): Promise<DoNotDisturbDate>;

  /**
   * 查询是否支持免打扰功能。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - 查询是否支持免打扰功能回调函数（true：支持，false：不支持）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;

  /**
   * 查询是否支持免打扰功能。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } 以Promise形式返回获取是否支持免打扰功能的结果（true：支持，false：不支持）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportDoNotDisturbMode(): Promise<boolean>;

  /**
   * 在使用[通知模板]{@link ./notification/notificationTemplate:NotificationTemplate}发布通知前，
   * 可以通过该接口查询是否支持对应的通知模板。使用callback异步回调。
   *
   * @param { string } templateName - 模板名称。当前仅支持'downloadTemplate'。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示支持该模板；返回false表示不支持该模板；调用失败返回错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 在使用[通知模板]{@link ./notification/notificationTemplate:NotificationTemplate}发布通知前，
   * 可以通过该接口查询是否支持对应的通知模板。使用Promise异步回调。
   *
   * @param { string } templateName - 模板名称。当前仅支持'downloadTemplate'。
   * @returns { Promise<boolean> } Promise对象。返回true表示支持该模板；返回false表示不支持该模板。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * 当前应用请求通知使能。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 12开始废弃，建议使用有context入参的
   * > [requestEnableNotification]{@link notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当应用请求通知使能成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled. [since 11]
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed. [since 11]
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead requestEnableNotification
   */
  function requestEnableNotification(callback: AsyncCallback<void>): void;

  /**
   * 应用需要获取用户授权才能发送通知。在通知发布前调用该接口，可以拉起通知授权弹窗，让用户选择是否允许发送通知。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 仅当应用界面加载完成后（即调用
   * > [loadContent]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent}成功），方可使用该接口
   * > 。
   * >
   * > - 在使用该接口拉起通知授权弹窗后，如果用户拒绝授权，将无法使用该接口再次拉起弹窗。开发者可以调用
   * > [openNotificationSettingsWithResult]{@link notificationManager.openNotificationSettingsWithResult}二次申请授权，拉起通知管理弹窗
   * > 。
   *
   * @param { UIAbilityContext } context - 通知弹窗绑定Ability的上下文。
   * @param { AsyncCallback<void> } callback - 回调函数。当应用通过弹窗获取用户授权成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled. [since 11]
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed. [since 11]
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>): void;

  /**
   * 当前应用请求通知使能。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 12开始废弃，建议使用有context入参的
   * > [requestEnableNotification]{@link notificationManager.requestEnableNotification(context: UIAbilityContext)}替代。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled. [since 11]
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed. [since 11]
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead requestEnableNotification
   */
  function requestEnableNotification(): Promise<void>;

  /**
   * 应用需要获取用户授权才能发送通知。在通知发布前调用该接口，可以拉起通知授权弹窗，让用户选择是否允许发送通知。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 仅当应用界面加载完成后（即调用
   * > [loadContent]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent}成功），方可使用该接口
   * > 。
   * >
   * > - 在使用该接口拉起通知授权弹窗后，如果用户拒绝授权，将无法使用该接口再次拉起弹窗。开发者可以调用
   * > [openNotificationSettingsWithResult]{@link notificationManager.openNotificationSettingsWithResult}二次申请授权，拉起通知管理弹窗
   * > 。
   *
   * @param { UIAbilityContext } context - 通知弹窗绑定的Ability上下文。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled. [since 11]
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed. [since 11]
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function requestEnableNotification(context: UIAbilityContext): Promise<void>;

  /**
   * 设置设备是否支持分布式通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 是否支持（true：支持，false：不支持）。
   * @param { AsyncCallback<void> } callback - 设置设备是否支持分布式通知的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDistributedEnable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置设备是否支持分布式通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 是否支持（true：支持，false：不支持）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDistributedEnable(enable: boolean): Promise<void>;

  /**
   * 查询设备是否支持跨设备协同通知。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示支持跨设备协同通知；返回false表示不支持跨设备协同通知；调用失败返回错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * 查询设备是否支持跨设备协同通知。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示支持跨设备协同通知；返回false表示不支持跨设备协同通知。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * 设置指定应用是否支持分布式通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { boolean } enable - 指定应用是否支持分布式通知（true：支持，false：不支持）。
   * @param { AsyncCallback<void> } callback - 应用程序是否支持分布式通知的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDistributedEnableByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置指定应用是否支持分布式通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包。
   * @param { boolean } enable - 指定应用是否支持分布式通知（true：支持，false：不支持）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDistributedEnableByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * 设置指定应用是否支持跨设备协同。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { string } deviceType - 设备类型。
   * @param { boolean } enable - 指定应用是否支持跨设备协同（true：支持，false：不支持）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setDistributedEnabledByBundle(bundle: BundleOption, deviceType: string, enable: boolean): Promise<void>;

  /**
   * 根据应用的包获取应用程序是否支持分布式通知。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包。
   * @param { AsyncCallback<boolean> } callback - 查询指定应用是否支持分布式通知的回调函数（true：支持，false：不支持）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定应用是否支持分布式通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包。
   * @returns { Promise<boolean> } Promise方式返回指定应用是否支持分布式通知的结果（true：支持，false：不支持）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * 获取指定应用是否支持跨设备协同。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { string } deviceType - 设备类型。
   * @returns { Promise<boolean> } 以Promise形式返回指定应用是否支持跨设备协同的开关是否开启的结果（true：开启，false：未开启）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, deviceType: string): Promise<boolean>;

  /**
   * 批量设置应用是否支持跨设备协同。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DistributedBundleEnableInfo> } bundleEnableInfos - 需要设置的应用数组。
   * @param { string } deviceType - 设备类型。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDistributedEnableByBundles(bundleEnableInfos: Array<DistributedBundleEnableInfo>, deviceType: string): Promise<void>;

  /**
   * 设置设备是否与其他设备协同智能提醒。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - 设备类型。
   * @param { boolean } enable - 指定应用是否支持设备是否与其他设备协同智能提醒（true：支持，false：不支持）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setSmartReminderEnabled(deviceType: string, enable: boolean): Promise<void>;

  /**
   * 获取设备是否与其他设备协同智能提醒。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - 设备类型。
   * @returns { Promise<boolean> } 以Promise形式返回设备与其他设备协同智能提醒的开关是否开启的结果（true：开启，false：未开启）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function isSmartReminderEnabled(deviceType: string): Promise<boolean>;

  /**
   * 获取通知的提醒方式。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - 获取通知提醒方式的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;

  /**
   * 获取通知的提醒方式。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Promise方式返回获取通知提醒方式的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   * 设置指定应用的指定渠道类型的使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { SlotType } type - 指定渠道类型。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @param { AsyncCallback<void> } callback - 设置渠道使能回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 1600012 - No memory space. [since 11]
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setNotificationEnableSlot(
    bundle: BundleOption,
    type: SlotType,
    enable: boolean,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 设置指定应用的指定渠道类型的使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { SlotType } type - 指定渠道类型。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @param { boolean } isForceControl - 渠道开关是否受通知授权开关影响（false：受影响，true：不受影响）。
   * @param { AsyncCallback<void> } callback - 设置渠道使能回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setNotificationEnableSlot(
    bundle: BundleOption,
    type: SlotType,
    enable: boolean,
    isForceControl: boolean,
    callback: AsyncCallback<void>,
  ): void;

  /**
   * 设置指定应用的指定渠道类型的使能状态。使用promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { SlotType } type - 渠道类型。
   * @param { boolean } enable - 使能状态（true：使能，false：禁止）。
   * @param { boolean } isForceControl - 渠道开关是否受通知总开关影响（false：受总开关影响，true：不受总开关影响）。默认为false。 [since 11]
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 1600012 - No memory space. [since 11]
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setNotificationEnableSlot(bundle: BundleOption, type: SlotType, enable: boolean, isForceControl?: boolean): Promise<void>;

  /**
   * 获取指定应用的指定渠道类型的使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { SlotType } type - 渠道类型。
   * @param { AsyncCallback<boolean> } callback - 获取渠道使能状态回调函数（true：使能，false：禁止）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定应用的指定渠道类型的使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 应用的包信息。
   * @param { SlotType } type - 渠道类型。
   * @returns { Promise<boolean> } 以Promise形式返回指定类型的渠道使能状态（true：使能，false：禁止）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType): Promise<boolean>;

  /**
   * 设置是否将通知同步到未安装应用程序的设备(callback形式)。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @param { boolean } enable - 是否启用（true：使能，false：禁止）。
   * @param { AsyncCallback<void> } callback - 设置是否将通知同步到未安装应用程序的设备的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setSyncNotificationEnabledWithoutApp(userId: int, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置是否将通知同步到未安装应用程序的设备(Promise形式)。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @param { boolean } enable - 是否启用（true：使能，false：禁止）。
   * @returns { Promise<void> } 以Promise形式返回设置是否将通知同步到未安装应用程序的设备的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setSyncNotificationEnabledWithoutApp(userId: int, enable: boolean): Promise<void>;

  /**
   * 获取同步通知到未安装应用程序设备的开关是否开启(callback形式)。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @param { AsyncCallback<boolean> } callback - 获取同步通知到未安装应用程序设备的开关是否开启的回调函数（true：开启，false：未开启）。
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
  function getSyncNotificationEnabledWithoutApp(userId: int, callback: AsyncCallback<boolean>): void;

  /**
   * 获取同步通知到未安装应用程序设备的开关是否开启(Promise形式)。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - 用户ID。
   * @returns { Promise<boolean> } 以Promise形式返回获取同步通知到未安装应用程序设备的开关是否开启的结果（true：开启，false：未开启）。
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
  function getSyncNotificationEnabledWithoutApp(userId: int): Promise<boolean>;

  /**
   * 设定角标个数，在应用的桌面图标上呈现。使用callback异步回调。
   *
   * @param { int } badgeNumber - 角标个数。当角标设定个数取值小于或等于0时，清除角标。取值大于99时，通知角标将显示99+。
   * @param { AsyncCallback<void> } callback - 回调函数。当设定角标个数成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function setBadgeNumber(badgeNumber: int, callback: AsyncCallback<void>): void;

  /**
   * 设定角标个数，在应用的桌面图标上呈现。使用Promise异步回调。
   *
   * @param { int } badgeNumber - 角标个数。当角标设定个数取值小于或等于0时，清除角标。取值大于99时，通知角标将显示99+。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function setBadgeNumber(badgeNumber: int): Promise<void>;

  /**
   * 代理其他应用设定角标个数。使用Promise异步回调。
   *
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { int } badgeNumber - 角标个数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setBadgeNumberByBundle(bundle: BundleOption, badgeNumber: int): Promise<void>;

  /**
   * 注册通知监听回调。通知服务将通知信息回调给校验程序，校验程序返回校验结果决定该通知是否发布，如营销类通知发布频率控制等。
   * 
   * 系统中每个[SlotType]{@link @ohos.notificationManager:notificationManager.SlotType}只允许存在一个注册者。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - 回调函数类型名，固定为'checkNotification'。
   * @param { function } callback - 消息验证函数指针。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'checkNotification', callback: (checkInfo: NotificationCheckInfo) => NotificationCheckResult): void;

  /**
   * 通知监听回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { function } callback - 消息验证函数指针。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function onCheckNotification(callback: (checkInfo: NotificationCheckInfo) => NotificationCheckResult): void;

  /**
   * 注册通知监听回调。通知服务将通知信息回调给校验程序，校验程序返回校验结果决定该通知是否发布，如营销类通知发布频率控制等。使用Promise异步回调。
   * 
   * 系统中每个[SlotType]{@link @ohos.notificationManager:notificationManager.SlotType}只允许存在一个注册者。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - 回调函数类型名，固定为'checkNotification'。
   * @param { NotificationCheckRequest } checkRequest - 通知请求验证内容。
   * @param { function } callback - 消息验证函数指针。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'checkNotification', checkRequest: NotificationCheckRequest,
    callback: (checkInfo: NotificationCheckInfo) => Promise<NotificationCheckResult>): void;

  /**
   * 通知监听回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationCheckRequest } checkRequest - 通知请求验证内容。
   * @param { function } callback - callback - 消息验证函数指针。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function onCheckNotification(checkRequest: NotificationCheckRequest,
    callback: (checkInfo: NotificationCheckInfo) => Promise<NotificationCheckResult>): void;

  /**
   * 取消通知监听回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - 回调函数类型名，固定为'checkNotification'。
   * @param { function } [callback] - 消息验证函数指针。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   */
  function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void;

  /**
   * 通知监听回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { function } [callback] - 消息验证函数指针。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 static
   */
  function offCheckNotification(
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void;

  /**
   * 触发系统实况窗。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { int } notificationId - 通知ID。
   * @param { ButtonOptions } buttonOptions - 按钮信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function triggerSystemLiveView(bundle: BundleOption, notificationId: int, buttonOptions: ButtonOptions): Promise<void>;

  /**
   * 订阅系统实况窗。使用Promise异步回调。
   *
   * @param { SystemLiveViewSubscriber } subscriber - 系统实况窗订阅者。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function subscribeSystemLiveView(subscriber: SystemLiveViewSubscriber): Promise<void>;

  /**
   * 设定指定应用的通知提醒方式开关。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { long } slotFlags - 通知提醒方式开关标识位。<br>- bit0：铃声提示。0表示关闭，1表示开启。 <br>- bit1：锁屏。0表示关闭，1表示开启。 <br>- bit2：横幅。0表示关闭
   *     ，1表示开启。 <br>- bit3：亮屏。0表示关闭，1表示开启。 <br>- bit4：振动。0表示关闭，1表示开启。 <br>- bit5：状态栏通知图标。0表示关闭，1表示开启。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setSlotFlagsByBundle(bundle: BundleOption, slotFlags: long): Promise<void>;

  /**
   * 获取指定应用的通知渠道标识位。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<long> } 以Promise形式返回获取指定应用的通知渠道标识位。
   *     <br>- bit0：铃声提示。0表示关闭，1表示开启。 
   *     <br>- bit1：锁屏。0表示关闭，1表示开启。 
   *     <br>- bit2：横幅。0表示关闭，1表示开启。 
   *     <br>- bit3：亮屏。0表示关闭，1表示开启。 
   *     <br>- bit4：振动。0表示关闭，1表示开启。 
   *     <br>- bit5：状态栏通知图标。0表示关闭，1表示开启。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getSlotFlagsByBundle(bundle: BundleOption): Promise<long>;

  /**
   * 获取应用程序的通知设置。使用Promise异步回调。
   *
   * @returns { Promise<NotificationSetting> } Promise对象，返回此应用程序的通知设置。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  function getNotificationSetting(): Promise<NotificationSetting>;

  /**
   * 添加勿扰模式配置信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - 勿扰模式的配置信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>;

  /**
   * 向指定用户添加勿扰模式配置信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - 勿扰模式的配置信息。
   * @param { int } userId - 添加勿扰模式配置信息的用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>, userId: int): Promise<void>;

  /**
   * 删除勿扰模式配置。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - 勿扰模式的配置信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function removeDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>;

  /**
   * 删除指定用户的勿扰模式配置。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - 勿扰模式的配置信息。
   * @param { int } userId - 删除勿扰模式配置的用户ID。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function removeDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>, userId: int): Promise<void>;

  /**
   * 设置通知的系统附加配置信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { string } key - 附加配置键。目前仅支持`RING_TRUSTLIST_PKG`，表示应用支持使用
   *     [自定义铃声]{@link ./notification/notificationRequest:NotificationRequest}。
   * @param { string } value - 附加配置值。参数示例：[bundleName1,bundleName2]。
   * @returns { Promise<int> } Promise对象，返回0表示设置成功，返回其他值表示设置失败。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setAdditionalConfig(key: string, value: string): Promise<int>;

  /**
   * 设置应用的优先功能配置。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { string } value - 应用的优先功能配置。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setBundlePriorityConfig(bundle: BundleOption, value: string): Promise<void>;

  /**
   * 获取应用的优先功能配置。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<string> } Promise对象，返回包含应用优先功能配置的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function getBundlePriorityConfig(bundle: BundleOption): Promise<string>;

  /**
   * 获取优先通知智能服务使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise对象，返回包含优先通知智能服务使能状态的Promise对象。
   *     <br> - true：优先通知智能服务为打开状态。
   *     <br> - false：优先通知智能服务为关闭状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isPriorityIntelligentEnabled(): Promise<boolean>;

  /**
   * 设置优先通知智能服务使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 优先通知智能服务使能状态。<br> - true：优先通知智能服务为打开状态。<br> - false：优先通知智能服务为关闭状态。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setPriorityIntelligentEnabled(enable: boolean): Promise<void>;

  /**
   * 批量设置应用通知优先级开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, boolean> } switches - 应用通知优先级开关状态的键值对集合。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setPriorityEnabledByBundles(switches: Map<BundleOption, boolean>): Promise<void>;

  /**
   * 批量获取应用通知优先级开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - 应用包信息数组。
   * @returns { Promise<Map<BundleOption, boolean>> } Promise对象，返回应用通知优先级开关状态的键值对集合的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getPriorityEnabledByBundles(bundles: Array<BundleOption>): Promise<Map<BundleOption, boolean>>;

  /**
   * 批量设置应用通知优先策略。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, long> } strategies - 应用通知优先策略的键值对集合。与
   *     [PriorityStrategyStatus]{@link notificationManager.PriorityStrategyStatus}的枚举进行按位或运算得到值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function setPriorityStrategyByBundles(strategies: Map<BundleOption, long>): Promise<void>;

  /**
   * 批量获取应用通知优先策略。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - 应用包信息数组。
   * @returns { Promise<Map<BundleOption, long>> } Promise对象，返回应用通知优先策略的键值对集合的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getPriorityStrategyByBundles(bundles: Array<BundleOption>): Promise<Map<BundleOption, long>>;

  /**
   * 拉起应用的通知设置界面，该页面以半模态形式呈现，可用于设置通知开关、通知提醒方式等。使用Promise异步回调。
   *
   * @param { UIAbilityContext } context - 通知设置页面绑定Ability的上下文。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function openNotificationSettings(context: UIAbilityContext): Promise<void>;

  /**
   * 拉起应用的通知设置界面，该页面以半模态形式呈现，可用于设置通知开关、通知提醒方式等。使用Promise异步回调, 当半模态窗口关闭时返回用户设置的状态。
   *
   * @param { UIAbilityContext } context - 通知设置页面绑定Ability的上下文。
   * @returns { Promise<NotificationSetting> } Promise对象，返回此应用程序的通知设置。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function openNotificationSettingsWithResult(context: UIAbilityContext): Promise<NotificationSetting>;

  /**
   * 查询勿扰模式配置信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { long } id - 勿扰模式编号。
   * @returns { Promise<DoNotDisturbProfile> } Promise对象，返回勿扰模式的配置信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function getDoNotDisturbProfile(id: long): Promise<DoNotDisturbProfile>;

 /**
   * 查询指定用户的勿扰模式配置信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { long } id - 勿扰模式编号。
   * @param { int } userId - 待查询勿扰模式配置信息的用户。
   * @returns { Promise<DoNotDisturbProfile> } Promise对象，返回勿扰模式的配置信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getDoNotDisturbProfile(id: long, userId: int): Promise<DoNotDisturbProfile>;

  /**
   * 将应用包名添加到通知发布权限管控名单，以阻止应用发布通知。支持启用或关闭该功能。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY
   * @param { boolean } disabled - 是否启用通知发布权限管控名单（true：开启，false：关闭）。
   * @param { Array<string> } bundleList - 指定通知发布权限管控名单的应用列表，使用包名代表应用。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function disableNotificationFeature(disabled:boolean, bundleList: Array<string>): Promise<void>;

  /**
   * 将应用包名添加到通知发布权限管控名单，以阻止应用发布通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY
   * @param { boolean } disabled - 表示是否启用通知发布权限管控名单。true表示启用，false表示关闭。
   * @param { Array<string> } bundleList - 指定通知发布权限管控名单的应用列表，使用包名表示应用。
   * @param { int } userId - 表示用户ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function disableNotificationFeature(disabled: boolean, bundleList: Array<string>, userId: int): Promise<void>;

  /**
   * 设置设备配对成功后的状态。当发布通知时，会根据各个设备的状态来确定当前设备的通知提醒方式。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - 设备类型。当前仅支持`headset`（可穿戴式音频设备）、`liteWearable`（轻量级智能穿戴设备）、`wearable`（智能穿戴设备）、`glasses`
   *     （智能眼镜设备）、`current`（本设备）。
   * @param { long } status - 设备状态。<br>- bit0：设备是否正在被使用。0表示未使用，1表示使用中。<br>- bit1：当前设备使用者是否为机主。0表示为非机主，1表示为机主。<br>- bit2：
   *     设备是否处于勿扰模式。0表示处于非勿扰模式，1表示处于勿扰模式。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setTargetDeviceStatus(deviceType: string, status: long): Promise<void>;

  /**
   * 设置指定渠道的通知是否支持通知跨设备协同至指定类型设备。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - 通知渠道类型。
   * @param { string } deviceType - 设备类型。<br>从API version 18开始，支持的设备类型如下：<br>- headset（可穿戴式音频设备）。<br>- liteWearable（轻量级智
   *     能穿戴设备）。<br>- wearable（智能穿戴设备）。<br>从API version 20开始，支持的设备类型如下：<br>- headset（可穿戴式音频设备）。<br>- liteWearable（轻量级智能穿
   *     戴设备）。<br>- wearable（智能穿戴设备）。<br>- current（本设备）。<br>- 2in1（PC设备）。<br>- tablet（平板）。
   * @param { boolean } enabled - 是否开启通知跨设备协同开关。取值为true表示打开，取值为false表示关闭。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setDistributedEnabledBySlot(slot: SlotType, deviceType: string, enabled: boolean): Promise<void>;

  /**
   * 查询指定渠道的通知是否支持通知跨设备协同至指定类型设备。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - 通知渠道类型。
   * @param { string } deviceType - 设备类型。<br>从API version 18开始，支持的设备类型如下：<br>- headset（可穿戴式音频设备）。<br>- liteWearable（轻量级智
   *     能穿戴设备）。<br>- wearable（智能穿戴设备）。<br>从API version 20开始，支持的设备类型如下：<br>- headset（可穿戴式音频设备）。<br>- liteWearable（轻量级智能穿
   *     戴设备）。<br>- wearable（智能穿戴设备）。<br>- current（本设备）。<br>- 2in1（PC设备）。<br>- tablet（平板）。
   * @returns { Promise<boolean> } Promise对象，返回true表示指定渠道的通知支持通知跨设备协同至指定类型设备；返回false表示指定渠道的通知不支持通知跨设备协同至指定类型设备。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isDistributedEnabledBySlot(slot: SlotType, deviceType: string): Promise<boolean>;

  /**
   * 查询设备是否支持跨设备协同通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - 设备类型。当前仅支持以下类型：<br>- headset（可穿戴式音频设备）。<br>- liteWearable（轻量级智能穿戴设备）。<br>- wearable（
   *     智能穿戴设备）。<br>- current（本设备）。<br>- 2in1（PC设备）。<br>- tablet（平板）。
   * @returns { Promise<boolean> } 返回设备是否支持跨设备协同通知的结果，返回true表示支持；返回false表示不支持。Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(deviceType: string): Promise<boolean>;

  /**
   * 设置设备是否支持跨设备协同通知。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 表示指定设备类型是否支持跨设备协同通知。true表示支持，false表示不支持。
   * @param { string } deviceType - 设备类型。当前仅支持以下类型：<br>- headset（可穿戴式音频设备）。<br>- liteWearable（轻量级智能穿戴设备）。<br>- wearable（
   *     智能穿戴设备）。<br>- current（本设备）。<br>- 2in1（PC设备）。<br>- tablet（平板）。
   * @returns { Promise<void> } 无返回结果。Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDistributedEnabled(enable: boolean, deviceType: string): Promise<void>;

  /**
   * 查询支持跨设备协同通知的设备类型。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<string>> } 返回支持跨设备协同通知的设备列表。Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getDistributedDeviceList(): Promise<Array<string>>;

  /**
   * 设置应用通知优先级开关。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { PriorityEnableStatus } enableStatus - 应用通知优先级开关状态。<br> - DISABLE：不允许设置为优先通知。<br> - ENABLE_BY_INTELLIGENT：允
   *     许经智能识别、用户关键词匹配、应用规则匹配等方式设置为优先通知。<br> - ENABLE：应用通知均设置为优先通知。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setPriorityEnabledByBundle(bundle: BundleOption, enableStatus: PriorityEnableStatus): Promise<void>;

  /**
   * 获取应用通知优先级开关状态。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<PriorityEnableStatus> } Promise对象，返回包含应用通知优先级开关状态的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function isPriorityEnabledByBundle(bundle: BundleOption): Promise<PriorityEnableStatus>;

  /**
   * 获取通知优先级总开关状态。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise对象，返回包含通知优先级总开关使能状态的Promise对象。
   *     <br> - true：允许设置为优先通知。
   *     <br> - false：禁止设置为优先通知。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function isPriorityEnabled(): Promise<boolean>;

  /**
   * 设置通知优先级总开关。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - 所有通知的优先使能状态。<br> - true：允许设置为优先通知。<br> - false：禁止设置为优先通知。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setPriorityEnabled(enable: boolean): Promise<void>;

  /**
   * 设置静默提醒的开关状态。使用Promise进行异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { boolean } enabled - 表示是否开启通知静默提醒开关。true表示打开，false表示关闭。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setSilentReminderEnabled(bundle: BundleOption, enabled: boolean): Promise<void>;

  /**
   * 查询静默提醒的开关状态。使用Promise进行异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<SwitchState> } Promise对象，返回指定应用的通知静默提醒开关状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function isSilentReminderEnabled(bundle: BundleOption): Promise<SwitchState>;

  /**
   * 设置应用自定义铃声信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @param { RingtoneInfo } ringtoneInfo - 自定义铃声信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setRingtoneInfoByBundle(bundle: BundleOption, ringtoneInfo: RingtoneInfo): Promise<void>;
 
  /**
   * 获取应用自定义铃声信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - 指定应用的包信息。
   * @returns { Promise<RingtoneInfo> } Promise对象，返回应用自定义铃声信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @throws { BusinessError } 1600024 - The specified bundle has no custom ringtone information.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getRingtoneInfoByBundle(bundle: BundleOption): Promise<RingtoneInfo>;

  /**
   * 批量设置指定应用提醒信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationReminderInfo> } reminderInfos - 设置应用通知提醒信息的列表。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setReminderInfoByBundles(reminderInfos: Array<NotificationReminderInfo>) : Promise<void>;

  /**
   * 批量获取指定应用提醒信息。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - 待获取应用提醒信息的应用包信息数组。
   * @returns { Promise<Array<NotificationReminderInfo>> } Promise对象，返回包含应用提醒信息的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getReminderInfoByBundles(bundles: Array<BundleOption>) : Promise<Array<NotificationReminderInfo>>;

  /**
   * 批量设置指定应用是否显示角标。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, boolean> } badges - 应用包名信息和角标显示状态的列表。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setBadgeDisplayStatusByBundles(badges: Map<BundleOption, boolean>) : Promise<void>;

  /**
   * 批量获取应用角标显示状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - 待获取应用角标显示状态的应用包信息数组。
   * @returns { Promise<Map<BundleOption, boolean>> } Promise对象，返回应用包信息和显示角标状态的键值对集合的Promise对象 。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getBadgeDisplayStatusByBundles(bundles: Array<BundleOption>) : Promise<Map<BundleOption, boolean>>;

  /**
   * 注册应用角标数量查询回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { function } callback - 应用角标数量查询函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function onBadgeNumberQuery(callback: (bundle: BundleOption) => Promise<long>): void;

  /**
   * 取消应用角标数量查询回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function offBadgeNumberQuery(): void;

  /**
   * 获取当前应用角标数量。使用Promise异步回调。
   *
   * @returns { Promise<long> } Promise对象，返回当前应用角标数量。（查询的角标数量与当前应用通知开关，桌面角标开关是否开启无关）
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getBadgeNumber(): Promise<long>;

  /**
   * 设置地理围栏的启用状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enabled - 设置地理围栏开关。true表示开启地理围栏，false表示关闭地理围栏。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  function setGeofenceEnabled(enabled: boolean): Promise<void>;

  /**
   * 检查地理围栏功能是否已启用。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象，返回地理围栏开关状态的Promise对象。返回true表示地理围栏功能已启用，返回false表示地理围栏功能未启用。
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  function isGeofenceEnabled(): Promise<boolean>;

  /**
   * 批量获取指定应用列表的通知统计信息，使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption[] } bundles - 应用的包信息列表。
   * @returns { Promise<BundleNotificationStatistics[]> } Promise对象。返回指定应用列表的通知统计信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  function getNotificationStatisticsByBundle(bundles: BundleOption[]): Promise<BundleNotificationStatistics[]>;

  /**
   * 描述通知相关开关的设置状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum SwitchState {
    /**
     * 表示用户设置的关闭状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    USER_MODIFIED_OFF = 0,

    /**
     * 表示用户设置的开启状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    USER_MODIFIED_ON = 1,

    /**
     * 表示在用户设置前的初始关闭状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_DEFAULT_OFF = 2,

    /**
     * 表示在用户设置前的初始开启状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_DEFAULT_ON = 3,
  }

  /**
   * 描述触发按钮信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ButtonOptions {
    /**
     * 按钮名称。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    buttonName: string;
  }

  /**
   * 系统实况窗订阅者。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SystemLiveViewSubscriber {
    /**
     * 点击按钮的回调。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    onResponse?: (notificationId: int, buttonOptions: ButtonOptions) => void;
  }

  /**
   * 通知校验参数。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NotificationCheckInfo {
    /**
     * Bundle名称。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 通知ID。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    notificationId: int;

    /**
     * 通知标签。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    label?: string;

    /**
     * 通知类型。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    contentType: ContentType;

    /**
     * 通知的user ID。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    creatorUserId: int;

    /**
     * 渠道类型。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    slotType: SlotType;

    /**
     * 实况通知的附加信息。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     */
    extraInfos?: Record<string, Object>;

    /**
     * 实况通知的附加信息。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 static
     */
    extraInfos?: Record<string, RecordData>;
  }

  /**
   * 通知校验结果。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NotificationCheckResult {
    /**
     * 0-display，1-no display。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * 结果信息。
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * 通知提醒方式开关的设置状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  export interface NotificationSetting {
    /**
     * 表示是否开启振动。
     * 
     * - true：开启。
     * - false：关闭。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 20 dynamic
     * @since 23 static
     */
    vibrationEnabled: boolean;

    /**
     * 表示是否开启响铃。
     * 
     * - true：开启。
     * - false：关闭。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 20 dynamic
     * @since 23 static
     */
    soundEnabled: boolean;

    /**
     * 表示是否开启锁屏通知。
     * 
     * 26.0.0
     * 
     * - true：开启。
     * - false：关闭。
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lockScreenEnabled?: boolean;
 	 
    /**
     * 表示是否开启横幅通知。
     * 
     * 26.0.0
     * 
     * - true：开启。
     * - false：关闭。
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bannerEnabled?: boolean;
 	 
    /**
     * 表示是否开启通知角标数字展示。
     * 
     * 26.0.0
     * 
     * - true：开启。
     * - false：关闭。
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    badgeNumberEnabled?: boolean;

    /**
     * 表示应用通知使能状态。
     * 
     * 26.0.0
     * 
     * - true：开启。
     * - false：关闭。
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    notificationEnabled?: boolean;
  }

  /**
   * 通知渠道类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SlotType {
    /**
     * 未知类型。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为LEVEL_MIN。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * 社交通信。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为LEVEL_HIGH。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * 服务提醒。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为LEVEL_HIGH。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_INFORMATION = 2,

    /**
     * 内容资讯。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为LEVEL_MIN。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTENT_INFORMATION = 3,

    /**
     * 实况窗。不支持三方应用直接创建该渠道类型通知，可以由系统代理创建后，三方应用发布同ID的通知来更新指定内容。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为
     * LEVEL_DEFAULT。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LIVE_VIEW = 4,

    /**
     * 客服消息。该类型用于用户与商家之间的客服消息，需由用户主动发起。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为LEVEL_DEFAULT。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CUSTOMER_SERVICE = 5,

    /**
     * 紧急事件。
     * 此接口为系统接口。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EMERGENCY_INFORMATION = 10,

    /**
     * 其他。该类型对应[SlotLevel]{@link notificationManager.SlotLevel}为LEVEL_MIN。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * 通知内容类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ContentType {
    /**
     * 普通文本类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * 长文本类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * 图片类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * 社交类型通知。预留能力，暂未支持。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * 多行文本类型通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_MULTILINE,

    /**
     * 系统实况窗类型通知。不支持三方应用直接创建该类型通知。系统代理创建系统实况窗类型通知后，三方应用可以通过发布相同ID的通知来更新指定内容。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_SYSTEM_LIVE_VIEW,

    /**
     * 普通实况窗类型通知。仅系统应用可用。
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_LIVE_VIEW,
  }

  /**
   * 通知级别。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SlotLevel {
    /**
     * 表示关闭通知功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_NONE = 0,

    /**
     * 表示通知功能已启用，状态栏中不显示通知图标，无横幅，无提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_MIN = 1,

    /**
     * 表示通知功能已启用，状态栏中显示通知图标，无横幅，无提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_LOW = 2,

    /**
     * 表示通知功能已启用，状态栏中显示通知图标，无横幅，有提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_DEFAULT = 3,

    /**
     * 表示通知功能已启用，状态栏中显示通知图标，有横幅，有提示音。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_HIGH = 4
  }

  /**
   * 免打扰设置的时间类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DoNotDisturbType {
    /**
     * 非通知勿扰类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NONE = 0,

    /**
     * 以设置时间段(只看小时和分钟)一次执行勿扰。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ONCE = 1,

    /**
     * 以设置时间段(只看小时和分钟)每天执行勿扰。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DAILY = 2,

    /**
     * 以设置时间段(明确月日时)执行勿扰。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CLEARLY = 3
  }

  /**
   * 免打扰时间选项。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DoNotDisturbDate {
    /**
     * 免打扰设置的时间类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    type: DoNotDisturbType;

    /**
     * 免打扰设置的起点时间。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    begin: Date;

    /**
     * 免打扰设置的终点时间。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    end: Date;
  }

  /**
   * 描述多设备协同的包信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DistributedBundleEnableInfo {
    /**
     * 包名。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 应用程序的UID。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * 是否支持跨设备协同，返回true表示支持，返回false表示不支持，默认为false。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enable?: boolean;
  }

  /**
   * 勿扰模式的配置信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export interface DoNotDisturbProfile {
    /**
     * 勿扰模式编号。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * 勿扰模式名称。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 勿扰模式的信任列表。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    trustlist?: Array<BundleOption>;
  }

  /**
   * 描述自定义铃声信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface RingtoneInfo {
    /**
     * 铃声的类型。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneType: RingtoneType;

    /**
     * 铃声的标题。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneTitle?: string;

    /**
     * 铃声的文件名称。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneFileName?: string;

    /**
     * 铃声的URI。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneUri?: string;
  }

  /**
   * 描述指定应用提醒方式信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface NotificationReminderInfo {
    /**
     * 指定应用的包信息。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundle: BundleOption;

    /**
     * 表示通知提醒方式的标志位。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    reminderFlags: long;

    /**
     * 表示静默提醒开关使能状态（true：使能，false：禁止）。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    silentReminderEnabled: boolean;
  }

  /**
   * 通知提醒方式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DeviceRemindType {
    /**
     * 设备未被使用，无需提醒。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * 提醒设备未被使用。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    IDLE_REMIND = 1,

    /**
     * 设备正在使用，无需提醒。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * 提醒设备正在使用。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE_REMIND = 3
  }

  /**
   * 通知来源类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SourceType {
    /**
     * 一般通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NORMAL = 0,

    /**
     * 连续通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CONTINUOUS = 1,

    /**
     * 计划通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_TIMER = 2
  }

  /**
   * 每个bit位都可以控制通知的提示方式。当notificationControlFlags和下表中枚举值进行按位或操作，则表示关闭其提示方式。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum NotificationControlFlagStatus {
    /**
     * 关闭声音提示功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_SOUND = 1 << 0,

    /**
     * 关闭锁屏提示功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_LOCKSCREEN = 1 << 1,

    /**
     * 关闭横幅提示功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_BANNER = 1 << 2,

    /**
     * 关闭亮屏提示功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_LIGHT_SCREEN = 1 << 3,

    /**
     * 关闭振动提示功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_VIBRATION = 1 << 4,

    /**
     * 关闭状态栏图标提示功能。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_STATUSBAR_ICON = 1 << 5
  }

  /**
   * 描述通知的优先级类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  export enum PriorityNotificationType {
    /**
     * 表示通知优先级类型为默认。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    OTHER = 'OTHER',

    /**
     * 表示通知优先级类型为重要联系人。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    PRIMARY_CONTACT = 'PRIMARY_CONTACT',

    /**
     * 表示通知优先级类型为@我。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    AT_ME = 'AT_ME',

    /**
     * 表示通知优先级类型为加急消息。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    URGENT_MESSAGE = 'URGENT_MESSAGE',

    /**
     * 表示通知优先级类型为日程待办。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    SCHEDULE_REMINDER = 'SCHEDULE_REMINDER',

    /**
     * 表示通知优先级类型为缴费还款。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    PAYMENT_DUE = 'PAYMENT_DUE',

    /**
     * 表示通知优先级类型为动账提醒。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRANSACTION_ALERT = 'TRANSACTION_ALERT',

    /**
     * 表示通知优先级类型为物流进展。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    EXPRESS_PROGRESS = 'EXPRESS_PROGRESS',

    /**
     * 表示通知优先级类型为未接来电。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    MISS_CALL = 'MISS_CALL',

    /**
     * 表示通知优先级类型为出行异常。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRAVEL_ALERT = 'TRAVEL_ALERT',

    /**
     * 表示通知优先级类型为账号安全。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ACCOUNT_ALERT = 'ACCOUNT_ALERT',

    /**
     * 表示通知优先级类型为预约提醒。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    APPOINTMENT_REMINDER = 'APPOINTMENT_REMINDER',

    /**
     * 表示通知优先级类型为交通违规。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRAFFIC_NOTICE = 'TRAFFIC_NOTICE',

    /**
     * 表示通知优先级类型为关键进展通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    KEY_PROGRESS = 'KEY_PROGRESS',

    /**
     * 表示通知优先级类型为重要公共事件。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    PUBLIC_EVENT = 'PUBLIC_EVENT',

    /**
     * 表示通知优先级类型为预警通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    IOT_WARNING = 'IOT_WARNING',

    /**
     * 表示通知优先级类型为用户自定义关键词。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    CUSTOM_KEYWORD = 'CUSTOM_KEYWORD',
  }

  /**
   * 描述应用通知的优先级开关状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export enum PriorityEnableStatus {
    /**
     * 应用通知的优先级开关为关闭状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    DISABLE = 0,

    /**
     * 应用通知的优先级开关为智能识别状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ENABLE_BY_INTELLIGENT = 1,

    /**
     * 应用通知的优先级开关为全部通知状态。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ENABLE = 2,
  }

  /**
   * 描述应用通知的优先策略。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum PriorityStrategyStatus {  
    /**
     * 默认优先策略。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_SYSTEM_DEFAULT = 1 << 0,

    /**
     * 仅优先规则。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_SYSTEM_RULE = 1 << 1,

    /**
     * 仅智能识别。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_INTELLIGENT = 1 << 2,

    /**
     * 仅用户自定义。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_USER_DEFINED = 1 << 3,

    /**
     * 仅应用自定义。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_APPLICATION_DEFINED = 1 << 4,

    /**
     * 全部通知优先。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_ALL_PRIORITY = 1 << 5
  }

  /**
   * 描述自定义铃声类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum RingtoneType {
    /**
     * 表示系统自定义铃声。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_SYSTEM = 0,

    /**
     * 表示本地自定义铃声。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_LOCAL = 1,

    /**
     * 表示在线自定义铃声。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_ONLINE = 2,

    /**
     * 表示非自定义铃声。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_NONE = 3,
  }

  /**
   * 描述指定应用通知统计信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
  export interface BundleNotificationStatistics {
    /**
     * 指定应用的包信息。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    bundle: BundleOption;

    /**
     * 应用最后一次发布通知的时间。数据格式：时间戳。单位：ms。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 dynamic
     */
    lastTime: number;

    /**
     * 应用最后一次发布通知的时间。数据格式：时间戳。单位：ms。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 static
     */
    lastTime: long;

    /**
     * 应用最近7天发布的通知总量。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 dynamic
     */
    recentCount: number;

    /**
     * 应用最近7天发布的通知总量。
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 static
     */
    recentCount: int;
  }

  /**
   * 指定应用的包信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * 通知中显示的操作按钮。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationActionButton = _NotificationActionButton;

  /**
   * 普通文本通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationBasicContent = _NotificationBasicContent;

  /**
   * 通知内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationContent = _NotificationContent;

  /**
   * 长文本通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationLongTextContent = _NotificationLongTextContent;

  /**
   * 描述普通实况通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationLiveViewContent = _NotificationLiveViewContent;

  /**
   * 多行文本通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationMultiLineContent = _NotificationMultiLineContent;

  /**
   * 附有图片的通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationPictureContent = _NotificationPictureContent;

  /**
   * 系统实况窗通知内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationSystemLiveViewContent = _NotificationSystemLiveViewContent;

  /**
   * 描述通知标志位。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationFlags = _NotificationFlags;

  /**
   * 描述通知标志状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationFlagStatus = _NotificationFlagStatus;

  /**
   * 通知请求。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationRequest = _NotificationRequest;

  /**
   * 描述通知智能聚合信息字段。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type UnifiedGroupInfo = _UnifiedGroupInfo;

  /**
   * 描述查询普通实况窗时的筛选条件。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationFilter = _NotificationFilter;

  /**
   * 描述通知的鉴权信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationCheckRequest = _NotificationCheckRequest;

  /**
   * 分布式选项。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type DistributedOptions = _DistributedOptions;

  /**
   * 通知渠道。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSlot = _NotificationSlot;

  /**
   * 描述普通实况通知的状态。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type LiveViewStatus = _LiveViewStatus;

  /**
   * 描述实况通知的类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  export type LiveViewTypes = _LiveViewTypes;

  /**
   * 提供有关活动通知的排序信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSorting = _NotificationSorting;

  /**
   * 通知模板。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationTemplate = _NotificationTemplate;

  /**
   * 保存用户输入的通知消息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationUserInput = _NotificationUserInput;

  /**
   * 通知胶囊。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationCapsule = _NotificationCapsule;

  /**
   * 通知按钮。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationButton = _NotificationButton;

  /**
   * 通知计时信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationTime = _NotificationTime;

  /**
   * 通知进度。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationProgress = _NotificationProgress;

  /**
   * 系统通知按钮。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type NotificationIconButton = _NotificationIconButton;

  /**
   * 触发条件的事件类型的枚举。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type TriggerType = _TriggerType;

  /**
   * 触发条件的具体信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type Trigger = _Trigger;

  /**
   * 描述NotificationRequest中wantAgent的部分信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type NotificationParameters = _NotificationParameters;

  /**
   * 地理围栏的配置信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type Geofence = _Geofence;

  /**
   * 表示地理围栏坐标系类型的枚举。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type CoordinateSystemType = _CoordinateSystemType;

  /**
   * 表示地理围栏的监控事件类型的枚举。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type MonitorEvent = _MonitorEvent;

  /**
   * 组通知定制信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type GroupInfo = _GroupInfo;
}

export default notificationManager;
