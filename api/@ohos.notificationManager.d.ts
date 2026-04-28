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
 * The **NotificationManager** module provides notification management capabilities, covering notifications, 
 * notification slots, notification enabled status, and notification badge status.
 *
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace notificationManager {
  /**
   * Publishes a notification. This API uses an asynchronous callback to return the result.
   * 
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces
   * the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Publishes a notification. This API uses a promise to return the result.
   * 
   * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces
   * the previous one.
   *
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
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
   * Publishes a notification to a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 17]
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER [since 18]
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { int } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Publishes a notification to a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 17]
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER [since 18]
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { int } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Publishes a notification through the reminder agent. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { string } representativeBundle - Bundle name of the application whose notification function is taken over
   *     by the reminder agent.
   * @param { int } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Publishes a notification through the reminder agent. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @param { string } representativeBundle - Bundle name of the application whose notification function is taken over
   *     by the reminder agent.
   * @param { int } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Publishes a notification through the reminder agent. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - Bundle information of the application whose notification function is
   *     taken over by the reminder agent.
   * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.
   *
   * @param { int } id - Notification ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { int } id - Notification ID.
   * @param { string } label - Notification label.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Cancels a notification with the specified ID and optional label. This API uses a promise to return the result.
   *
   * @param { int } id - Notification ID.
   * @param { string } [label] - Notification label. This parameter is left empty by default.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels the notification of other applications of the user. This API uses a promise to return the result.
   * 
   * The current application must have a proxy relationship with another application, or the 
   * **ohos.permission.NOTIFICATION_AGENT_CONTROLLER** permission is granted to the current application.
   *
   * @param { BundleOption } representativeBundle - Bundle information of the application.
   * @param { int } id - Notification ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels a notification published through the reminder agent. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { int } id - Notification ID.
   * @param { string } representativeBundle - Bundle name of the application whose notification function is taken over
   *     by the reminder agent.
   * @param { int } userId - User ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Cancels a notification published through the reminder agent. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { int } id - Notification ID.
   * @param { string } representativeBundle - Bundle name of the application whose notification function is taken over
   *     by the reminder agent.
   * @param { int } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels a notification published through the reminder agent. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - Bundle information of the application whose notification function is
   *     taken over by the reminder agent.
   * @param { int } id - Notification ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels all notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Cancels all notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds a notification slot. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Notification slot to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Adds a notification slot. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Notification slot to add.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } type - Type of the notification slot to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Adds a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } type - Type of the notification slot to add.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds an array of notification slots. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Notification slots to add. The number of elements in the array ranges
   *     from 0 to 5.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Adds an array of notification slots. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Notification slots to add. The number of elements in the array ranges
   *     from 0 to 5.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification,
   *     content consultation, and so on.
   * @param { AsyncCallback<NotificationSlot> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the obtained **NotificationSlot**; otherwise, **err** is
   *     an error object.
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
   * Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification,
   *     content consultation, and so on.
   * @param { AsyncCallback<NotificationSlot|null> } callback - Callback used to return the result. If the operation is
   *     successful, err is undefined
   *     and data is the obtained NotificationSlot; otherwise, err is an error object.
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
   * Obtains a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification,
   *     content consultation, and so on.
   * @returns { Promise<NotificationSlot> } Promise used to return the result.
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
   * Obtains a notification slot of a specified type. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification,
   *     content consultation, and so on.
   * @returns { Promise<NotificationSlot|null> } Promise used to return the result.
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
   * Obtains all notification slots of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - Callback used to return the result. If the operation
   *     is successful, **err** is **undefined** and **data** is the obtained **NotificationSlot** array; otherwise,
   *     **err** is an error object.
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
   * Obtains all notification slots of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<NotificationSlot>> } Promise used to return the result.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * Obtains a list of applications that allow notifications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<BundleOption>> } Returns a list of applications that allow notifications.
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
   * Obtains the list of applications that are allowed to publish notifications by a specified user. This API uses a 
   * promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - Target user.
   * @returns { Promise<Array<BundleOption>> } Returns a list of applications that allow notifications.
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
   * Removes a notification slot of a specified type for this application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification,
   *     content consultation, and so on.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Removes a notification slot of a specified type for this application. This API uses a promise to return the result.
   *
   * @param { SlotType } slotType - Type of a notification slot, such as social communication, service notification,
   *     content consultation, and so on.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Removes all notification slots for this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Removes all notification slots for this application. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function removeAllSlots(): Promise<void>;

  /**
   * Sets whether to enable notification for a specified application. This API uses an asynchronous callback to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets whether to enable notification for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     notification is enabled, and **false** means the opposite.
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
   * Checks whether notification is enabled for the specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the notification is
   *     enabled, and **false** means the opposite.
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
   * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 10]
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     notification can be published; **false** means the opposite. If this API call fails, an error object is
   *     returned.
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
   * Checks whether notification is enabled for the specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER [since 9 - 10]
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the notification is
   *     enabled, and **false** means the opposite.
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
   * Checks whether notification is enabled for the specified application. This API returns the result synchronously.
   *
   * @returns { boolean } Result of the notification enabling status. The value **true** means that the notification is
   *     enabled, and **false** means the opposite.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 12 dynamic
   * @since 23 static
   */
  function isNotificationEnabledSync(): boolean;

  /**
   * Checks whether notification is enabled for a specified user. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     notification is enabled, and **false** means the opposite.
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
   * Checks whether notification is enabled for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the notification is
   *     enabled, and **false** means the opposite.
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
   * Sets whether to enable the notification badge for a specified application. This API uses an asynchronous callback 
   * to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets whether to enable the notification badge for a specified application. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether the notification badge is enabled for a specified application. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     badge is enabled, and **false** means the opposite.
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
   * Checks whether the notification badge is enabled for a specified application. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the badge is enabled
   *     , and **false** means the opposite.
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
   * Sets the notification slot for a specified application. This API uses an asynchronous callback to return the 
   * result.
   * 
   * Before setting a notification slot, create a slot through 
   * [addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationSlot } slot - Notification slot.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the notification slot for a specified application. This API uses a promise to return the result.
   * 
   * Before setting a notification slot, create a slot through 
   * [addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { NotificationSlot } slot - Notification slot.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the notification slots of a specified application. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - Callback used to return the result.
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
   * Obtains a notification slot of a specified application. This API uses a promise to return the result.
   * 
   * Before obtaining the notification slot, create a slot through 
   * [addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } slotType - Notification slot type.
   * @returns { Promise<NotificationSlot> } Promise used to return the result.
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
   * Obtains a notification slot of a specified application. This API uses a promise to return the result.
   *
   * Before obtaining the notification slot, create a slot through 
   * [addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}.
   * 
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } slotType - Notification slot type.
   * @returns { Promise<NotificationSlot|null> } Promise used to return the result.
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
   * Obtains the notification slots of a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<Array<NotificationSlot>> } Promise used to return the result.
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
   * Obtains the number of notification slots of a specified application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { AsyncCallback<long> } callback - Callback used to return the result.
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
   * Obtains the number of notification slots of a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<long> } Promise used to return the result.
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
   * Obtains all active notifications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - Callback used to return the result.
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
   * Obtains all active notifications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } Promise used to return the result.
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
   * Obtains the number of active notifications of this application. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and data is the obtained number of active notifications; otherwise, **err** is an
   *     error object.
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
   * Obtains the number of active notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<long> } Promise used to return the result.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotificationCount(): Promise<long>;

  /**
   * Obtains the active notifications of this application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - Callback used to return the result. If the
   *     operation is successful, **err** is **undefined** and data is the obtained **NotificationRequest** array;
   *     otherwise, **err** is an error object.
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
   * Obtains the active notifications of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<NotificationRequest>> } Promise used to return the result.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Obtains information about the common live view that matches the specified filter criteria. This API uses an 
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - Filter criteria for querying the common live view.
   * @param { AsyncCallback<NotificationRequest> } callback - Callback used to return the result.
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
   * Obtains information about the common live view that matches the specified filter criteria. This API uses an 
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - Filter criteria for querying the common live view.
   * @param { AsyncCallback<NotificationRequest|null> } callback - Callback used to return the result.
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
   * Obtains information about the common live view that matches the specified filter criteria. This API uses a promise 
   * to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - Filter criteria for querying the common live view.
   * @returns { Promise<NotificationRequest> } Promise used to return the result.
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
   * Obtains information about the common live view that matches the specified filter criteria. This API uses a promise 
   * to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - Filter criteria for querying the common live view.
   * @returns { Promise<NotificationRequest|null> } Promise used to return the result.
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
   * Obtains some information about the **wantAgent** field in 
   * [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}. This API uses a promise to 
   * return the result.
   *
   * @param { number } id - Notification ID.
   * @param { string } [label] - Notification label. This parameter is left empty by default.
   * @returns { Promise<NotificationParameters> } Promise used to return some information about **wantAgent**.
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
   * Obtains some information about the **wantAgent** field in 
   * [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}. This API uses a promise to 
   * return the result.
   *
   * @param { int } id - Notification ID.
   * @param { string } [label] - Notification label. This parameter is left empty by default.
   * @returns { Promise<NotificationParameters | null> } Promise used to return some information about **wantAgent**.
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
   * Cancels notifications under a notification group of this application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { string } groupName - Name of the notification group, which is specified through
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} when the notification is
   *     published.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Cancels notifications under a notification group of this application. This API uses a promise to return the result.
   *
   * @param { string } groupName - Name of the notification group, which is specified through
   *     [NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest} when the notification is
   *     published.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Removes notifications under a notification group of the specified application. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } groupName - Name of the notification group.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Removes notifications under a notification group of the specified application. This API uses a promise to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } groupName - Name of the notification group.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the DND time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the DND time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the DND time for a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @param { int } userId - ID of the user for whom you want to set the DND time.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the DND time for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - DND time to set.
   * @param { int } userId - ID of the user for whom you want to set the DND time.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the DND time. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - Callback used to return the result.
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
   * Obtains the DND time. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Promise used to return the result.
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
   * Obtains the DND time of a specified user. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @param { AsyncCallback<DoNotDisturbDate> } callback - Callback used to return the result.
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
   * Obtains the DND time of a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @returns { Promise<DoNotDisturbDate> } Promise used to return the result.
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
   * Checks whether DND mode is supported. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that DND
   *     mode is supported, and **false** means the opposite.
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
   * Checks whether DND mode is supported. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that DND mode is
   *     supported, and **false** means the opposite.
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
   * Checks whether a specified template is supported before using 
   * [NotificationTemplate]{@link ./notification/notificationTemplate:NotificationTemplate} to publish a notification. 
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } templateName - Template name. Currently, only **downloadTemplate** is supported.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the template is supported, and **false** indicates the opposite. If this API call fails, an error object is
   *     returned.
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
   * Checks whether a specified template is supported before using 
   * [NotificationTemplate]{@link ./notification/notificationTemplate:NotificationTemplate} to publish a notification. 
   * This API uses a promise to return the result.
   *
   * @param { string } templateName - Template name. Currently, only **downloadTemplate** is supported.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the specified
   *     template is supported, and **false** means the opposite.
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
   * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 12. You are advised to use
   * [requestEnableNotification]{@link notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)}
   * with context instead.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting 
   * the user to enable notification for your application before publishing a notification. This API uses an 
   * asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be called only after the application UI is loaded (that is, 
   * > [loadContent]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent} is 
   * > successfully called).
   * >
   * > - When an application uses **requestEnableNotification()** to display a dialog box for notification authorization
   * > and the user rejects the authorization, the application cannot use this API to open the dialog box again. However
   * > , it can call [openNotificationSettingsWithResult]{@link notificationManager.openNotificationSettingsWithResult} 
   * > to open the notification management dialog box.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Requests notification to be enabled for this application. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > This API is supported since API version 9 and deprecated since API version 12. You are advised to use
   * [requestEnableNotification]{@link notificationManager.requestEnableNotification(context: UIAbilityContext)}
   * with context instead.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * Requests notification to be enabled for this application. You can call this API to display a dialog box prompting 
   * the user to enable notification for your application before publishing a notification. This API uses a promise to 
   * return the result.
   * 
   * > **NOTE**
   * >
   * > - This API can be called only after the application UI is loaded (that is, 
   * > [loadContent]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent} is 
   * > successfully called).
   * >
   * > - When an application uses **requestEnableNotification()** to display a dialog box for notification authorization
   * > and the user rejects the authorization, the application cannot use this API to open the dialog box again. However
   * > , it can call [openNotificationSettingsWithResult]{@link notificationManager.openNotificationSettingsWithResult} 
   * > to open the notification management dialog box.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets whether to enable distributed notification on this device. This API uses an asynchronous callback to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Whether to enable distributed notification. The value **true** means to enable
   *     distributed notification, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets whether to enable distributed notification on this device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Whether to enable distributed notification. The value **true** means to enable
   *     distributed notification, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether the device supports cross-device notifications. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     cross-device notification is supported; **false** means the opposite. If this API call fails, an error object
   *     is returned.
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
   * Checks whether the device supports cross-device notifications. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the cross-device
   *     notification is supported; **false** means the opposite.
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
   * Sets whether to enable distributed notification for a specified application. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enable - Whether to enable distributed notification. The value **true** means to enable
   *     distributed notification, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets whether to enable distributed notification for a specified application. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle of the application.
   * @param { boolean } enable - Whether to enable distributed notification. The value **true** means to enable
   *     distributed notification, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets whether a specified application enables cross-device collaboration. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } deviceType - Device type.
   * @param { boolean } enable - Whether a specified application enables cross-device collaboration. The value **true**
   *     indicates that the cross-device collaboration is enabled, and the value **false** indicates the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether distributed notification is enabled for a specified application. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle of the application.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that
   *     distributed notification is enabled, and **false** means the opposite.
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
   * Checks whether distributed notification is enabled for a specified application. This API uses a promise to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle of the application.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that distributed
   *     notification is enabled, and **false** means the opposite.
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
   * Obtains whether a specified application enables cross-device collaboration. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } deviceType - Device type.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the cross-device
   *     collaboration is enabled, and the value **false** indicates the opposite.
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
   * Sets whether applications enable cross-device collaboration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DistributedBundleEnableInfo> } bundleEnableInfos - Applications to set.
   * @param { string } deviceType - Device type.
   * @returns { Promise<void> } Promise that returns no result.
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
   * Sets a smart reminder for cross-device collaboration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - Device type.
   * @param { boolean } enable - Indicates whether the specified application supports a smart reminder for cross-device
   *     collaboration (**true**: enabled; **false**: disabled).
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains a smart reminder for cross-device collaboration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - Device type.
   * @returns { Promise<boolean> } Promise used to return the result (**true**: enabled; **false**: disabled).
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
   * Obtains the notification reminder type. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - Callback used to return the result.
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
   * Obtains the notification reminder type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Promise used to return the result.
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
   * Sets the enabled status of a slot type for the specified application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } type - Notification slot type.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the enabled status of a slot type for the specified application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } type - Notification slot type.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @param { boolean } isForceControl - Whether the slot is affected by the notification authorization. The value
   *     **true** means the slot is affected, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the enabled status of a slot type for the specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } type - Notification slot type.
   * @param { boolean } enable - Whether to enable the notification slot type. The value **true** means to enable the
   *     notification slot type, and **false** means the opposite.
   * @param { boolean } isForceControl - Whether the enabled status of the notification slot is subject to the enabled
   *     status of notification. The value **false** means that the enabled status of the notification slot is subject
   *     to the enabled status of notification, and **true** means the opposite. Default value: **false** [since 11]
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether a notification slot type is enabled for the specified application. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } type - Notification slot type.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     notification slot type is enabled, and **false** means the opposite.
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
   * Checks whether a notification slot type is enabled for the specified application. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { SlotType } type - Notification slot type.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the notification
   *     slot type is enabled, and **false** means the opposite.
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
   * Sets whether to enable the notification sync feature for devices where the application is not installed. This API 
   * uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @param { boolean } enable - Whether to enable the notification sync feature. The value **true** means to enable the
   *     feature, and **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets whether to enable the notification sync feature for devices where the application is not installed. This API 
   * uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @param { boolean } enable - Whether to enable the notification sync feature. The value **true** means to enable the
   *     feature, and **false** means the opposite.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains whether the notification sync feature is enabled for devices where the application is not installed. This 
   * API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     notification sync feature is enabled, and **false** means the opposite.
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
   * Obtains whether the notification sync feature is enabled for devices where the application is not installed. This 
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { int } userId - User ID.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the notification
   *     sync feature is enabled, and **false** means the opposite.
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
   * Sets the notification badge number. This API uses an asynchronous callback to return the result.
   *
   * @param { int } badgeNumber - Notification badge number to set. If **badgeNumber** is set to **0**, badges are
   *     cleared; if the value is greater than **99**, **99+** is displayed on the badge.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Sets the notification badge number. This API uses a promise to return the result.
   *
   * @param { int } badgeNumber - Notification badge number to set. If **badgeNumber** is set to **0**, badges are
   *     cleared; if the value is greater than **99**, **99+** is displayed on the badge.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the badge count for other applications. This API uses a promise to return the result.
   *
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { int } badgeNumber - Notification badge number to set.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Subscribes to notification events. The notification service sends the notification information in the callback to 
   * the verification program. The verification program returns the verification result to determine whether to publish 
   * the notification, for example, controlling the publication frequency of marketing notifications.
   * 
   * Each [SlotType]{@link @ohos.notificationManager:notificationManager.SlotType} in the system can have only one 
   * registrant.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Event type. The value is fixed to **'checkNotification'**.
   * @param { function } callback - Pointer to the notification verification function.
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
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { function } callback - callback - The callback of check notifications.
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
   * Subscribes to notification events. The notification service sends the notification information in the callback to 
   * the verification program. The verification program returns the verification result to determine whether to publish 
   * the notification, for example, controlling the publication frequency of marketing notifications. This API uses a 
   * promise to return the result.
   * 
   * Each [SlotType]{@link @ohos.notificationManager:notificationManager.SlotType} in the system can have only one 
   * registrant.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Event type. The value is fixed to **'checkNotification'**.
   * @param { NotificationCheckRequest } checkRequest - Notification verification content.
   * @param { function } callback - Pointer to the notification verification function.
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
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationCheckRequest } checkRequest - Check Request for filter notification request.
   * @param { function } callback - callback - The callback of check notifications.
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
   * Unsubscribes from notification events.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Event type. The value is fixed to **'checkNotification'**.
   * @param { function } [callback] - Pointer to the notification verification function.
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
   * Unsubscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { function } [callback] - callback - The callback of check notifications.
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
   * Triggers a system live view notification. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { int } notificationId - Notification ID.
   * @param { ButtonOptions } buttonOptions - Button information.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Subscribes to the system live view notification. This API uses a promise to return the result.
   *
   * @param { SystemLiveViewSubscriber } subscriber - Subscriber of the system live view notification.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the slot flags for a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { long } slotFlags - Notification slot flags.<br>- Bit 0: sound alert. The value **0** means to disable the
   *     feature, and **1** means the opposite.<br>- Bit 1: locking the screen. The value **0** means to disable the
   *     feature, and **1** means the opposite.<br>- Bit 2: banner. The value **0** means to disable the feature, and
   *     **1** means the opposite.<br>- Bit 3: turning on the screen. The value **0** means to disable the feature, and
   *     **1** means the opposite.<br>- Bit 4: vibration. The value **0** means to disable the feature, and **1** means
   *     the opposite.<br>- Bit 5: notification icon in the status bar. The value **0** means to disable the feature,
   *     and **1** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the notification slot flag of a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<long> } Promise used to return the notification slot flag.
   *     <br>- Bit 0: sound alert. The value **0** means to disable the feature, and **1** means the opposite.
   *     <br>- Bit 1: locking the screen. The value **0** means to disable the feature, and **1** means the opposite.
   *     <br>- Bit 2: banner. The value **0** means to disable the feature, and **1** means the opposite.
   *     <br>- Bit 3: turning on the screen. The value **0** means to disable the feature, and **1** means the opposite.
   *     <br>- Bit 4: vibration. The value **0** means to disable the feature, and **1** means the opposite.
   *     <br>- Bit 5: notification icon in the status bar. The value **0** means to disable the feature, and **1** means the
   *     opposite.
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
   * Obtains the notification settings of an application. This API uses a promise to return the result.
   *
   * @returns { Promise<NotificationSetting> } Promise used to return the result.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  function getNotificationSetting(): Promise<NotificationSetting>;

  /**
   * Adds the Do Not Disturb profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - Do Not Disturb profile.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Adds the Do Not Disturb profile for a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - Do Not Disturb profile.
   * @param { int } userId - ID of the target user.
   * @returns { Promise<void> } Promise that returns no result.
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
   * Deletes the Do Not Disturb profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - Do Not Disturb profile.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Deletes the Do Not Disturb profile of a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - Do Not Disturb profile.
   * @param { int } userId - ID of the target user.
   * @returns { Promise<void> } Promise that returns no result.
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
   * Sets the additional system configuration information of the notification. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { string } key - Additional configuration key. Currently, only **RING_TRUSTLIST_PKG** is supported,
   *     indicating that the application supports
   *     [custom ringtone]{@link ./notification/notificationRequest:NotificationRequest}.
   * @param { string } value - Additional configuration value. Example: [bundleName1,bundleName2].
   * @returns { Promise<int> } Promise used to return the result. **0** indicates successful; other values indicate
   *     failed.
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
   * Sets the priority configuration of an application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { string } value - Priority configuration of an application.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the priority configuration of an application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<string> } Promise used to return the result.
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
   * Obtains whether the intelligent priority notification service is enabled. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise that contains the enabling status of the intelligent priority notification
   *     service.
   *     <br> - **true**: The intelligent priority notification service is enabled.
   *     <br> - **false**: The intelligent priority notification service is disabled.
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
   * Sets the enabling status of the intelligent priority notification service. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Enabling status of the intelligent priority notification service.<br> - **true**: The
   *     intelligent priority notification service is enabled.<br> - **false**: The intelligent priority notification
   *     service is disabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets whether priority notifications are enabled for applications in batches. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, boolean> } switches - Key-value pair set of the application notification priority
   *     enabling status.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains whether priority notifications are enabled for applications in batches. This API uses a promise to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - Array of application bundles.
   * @returns { Promise<Map<BundleOption, boolean>> } Promise used to return the key-value pair set of the application
   *     notification priority enabling status.
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
   * Sets the application priority notification strategies in batches. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, long> } strategies - Key-value pair set of the application notification priority
   *     strategies. This parameter is obtained by performing the bitwise OR operation with the enumeration of
   *     [PriorityStrategyStatus]{@link notificationManager.PriorityStrategyStatus}.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the application priority notification strategies in batches. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - Array of application bundles.
   * @returns { Promise<Map<BundleOption, long>> } Promise used to return the key-value pair set of the application
   *     notification priority strategies.
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
   * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to 
   * set the notification enabling and notification mode. This API uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to 
   * set the notification enabling and notification mode. This API uses a promise to return the result. When the semi-
   * modal window is closed, the user-defined status is returned.
   *
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
   * @returns { Promise<NotificationSetting> } Promise used to return the result.
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
   * Queries the Do Not Disturb profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { long } id - ID of the Do Not Disturb profile.
   * @returns { Promise<DoNotDisturbProfile> } Promise used to return the result.
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
   * Queries the Do Not Disturb profile of a specified user. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { long } id - ID of the Do Not Disturb profile.
   * @param { int } userId - Target user.
   * @returns { Promise<DoNotDisturbProfile> } Promise used to return the result.
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
   * Disables the application from publishing notifications by adding the application bundle name to the permission 
   * control list. This function can be disabled as required.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY
   * @param { boolean } disabled - Whether to enable the permission control list for publishing notifications (**true**:
   *     enabled; **false**: disabled).
   * @param { Array<string> } bundleList - Application list under the permission control list. The bundle name is used
   *     to represent a specific application.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Disables the application from publishing notifications by adding the application bundle name to the permission 
   * control list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY
   * @param { boolean } disabled - Whether to enable the notification permission control list. The value **true**
   *     indicates that the notification permission control list is enabled; **false** indicates the opposite.
   * @param { Array<string> } bundleList - Bundles under the permission control list. The bundle name is used to
   *     represent a specific application.
   * @param { int } userId - User ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the status of a device after it is successfully connected. Device status determines the notification mode of 
   * the current device when a notification is published.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - Device type. Currently, only **headset**, **liteWearable**, **wearable**,
   *     **glasses**, and **current** are supported.
   * @param { long } status - Device status.<br>- Bit 0: whether the device is in use. The value **0** indicates that
   *     the device is available; **1** indicates that the device is in use.<br>- Bit 1: whether the device user is the
   *     owner. The value **0** indicates that the user is not the owner; **1** indicates the opposite.<br>- Bit 2:
   *     whether the device is in the Do Not Disturb mode. The value **0** indicates that the device is not in the Do
   *     Not Disturb mode; **1** indicates the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets whether notifications of a specified slot can be sent to devices of a specified type through cross-device 
   * collaboration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - Types of the notification slot.
   * @param { string } deviceType - Device type.<br>Since API version 18, the following device types are supported:<br>-
   *     **headset**: wearable audio device<br>- **liteWearable**: lite wearable<br>- **wearable**: wearable<br>Since
   *     API version 20, the following device types are supported:<br>- **headset**: wearable audio device<br>-
   *     **liteWearable**: lite wearable<br>- **wearable**: wearable<br>- **current**: current device<br>- **2in1**: PC<
   *     br>- **tablet**: tablet
   * @param { boolean } enabled - Whether to enable cross-device collaboration for notifications. The value **true**
   *     means to enable cross-device collaboration, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Queries whether notifications of a specified slot can be sent to devices of a specified type. This API uses a 
   * promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - Types of the notification slot.
   * @param { string } deviceType - Device type.<br>Since API version 18, the following device types are supported:<br>-
   *     **headset**: wearable audio device<br>- **liteWearable**: lite wearable<br>- **wearable**: wearable<br>Since
   *     API version 20, the following device types are supported:<br>- **headset**: wearable audio device<br>-
   *     **liteWearable**: lite wearable<br>- **wearable**: wearable<br>- **current**: current device<br>- **2in1**: PC<
   *     br>- **tablet**: tablet
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that cross-device
   *     collaboration is supported, and **false** means the opposite.
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
   * Checks whether a device enables cross-device notification. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - Device type. The options are as follows:<br>- **headset**: wearable audio device<br>
   *     - **liteWearable**: lite wearable<br>- **wearable**: wearable<br>- **current**: current device<br>- **2in1**:
   *     PC<br>- **tablet**: tablet
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the cross-device
   *     notification is enabled, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function isDistributedEnabled(deviceType: string): Promise<boolean>;

  /**
   * Sets whether the device of a specified type enables cross-device notification. This API uses a promise to return 
   * the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Whether the device of a specified type enables cross-device notification. The value
   *     **true** indicates that the cross-device notification is enabled, and the value **false** indicates the
   *     opposite.
   * @param { string } deviceType - Device type. The options are as follows:<br>- **headset**: wearable audio device<br>
   *     - **liteWearable**: lite wearable<br>- **wearable**: wearable<br>- **current**: current device<br>- **2in1**:
   *     PC<br>- **tablet**: tablet
   * @returns { Promise<void> } Promise that returns no result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setDistributedEnabled(enable: boolean, deviceType: string): Promise<void>;

  /**
   * Obtains the device types that enable cross-device notification. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<string>> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getDistributedDeviceList(): Promise<Array<string>>;

  /**
   * Sets the enabling status of the priority notification for an application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { PriorityEnableStatus } enableStatus - Whether the priority notification for an application is enabled.<br>
   *     - **DISABLE**: The priority notification is disabled.<br> - **ENABLE_BY_INTELLIGENT**: The priority
   *     notification can be enabled through intelligent recognition, user keyword matching, or application rule
   *     matching.<br> - **ENABLE**: The priority notification is enabled for all applications.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether the priority notification for a specified application is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<PriorityEnableStatus> } Promise used to return the result.
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
   * Checks whether the priority notification is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Promise used to return the result.
   *     <br> - **true**: The priority notification is enabled.
   *     <br> - **false**: The priority notification is disabled.
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
   * Sets the enabling status of the priority notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Whether to enable the priority notification.<br> - **true**: The priority notification
   *     is enabled.<br> - **false**: The priority notification is disabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the enabling status of the silent reminder. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { boolean } enabled - Whether to enable the silent reminder. The value **true** means to enable the silent
   *     reminder, and **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether the silent reminder is enabled. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<SwitchState> } Promise used to return the result.
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
   * Sets the custom ringtone information for an application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @param { RingtoneInfo } ringtoneInfo - Custom ringtone information.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the custom ringtone information of an application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - Bundle information of the application.
   * @returns { Promise<RingtoneInfo> } Promise used to return the result.
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
   * Batch sets reminders for specified applications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationReminderInfo> } reminderInfos - Reminders to be set.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Batch obtains reminders of specified applications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - Bundles whose reminders are to be obtained.
   * @returns { Promise<Array<NotificationReminderInfo>> } Promise used to return the application reminders obtained.
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
   * Batch sets whether to display badges for specified applications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Map<BundleOption, boolean> } badges - List containing bundle names and badge display statuses.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Batch obtains the display statuses of application badges. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<BundleOption> } bundles - Bundles whose badge display statuses are to be obtained.
   * @returns { Promise<Map<BundleOption, boolean>> } Promise used to return the bundles and the badge display statuses
   *     obtained.
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
   * Registers a callback for querying the number of application badges.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { function } callback - Number of target application badges.
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
   * Unregisters the callback for querying the number of application badges.
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
   * Obtains the badge number of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<long> } Promise used to return the badge number. (The value is irrelevant to whether
   *     notifications and home-screen badges of this application are enabled.)
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getBadgeNumber(): Promise<long>;

  /**
   * Sets the enabling state of geofencing. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enabled - Whether geofencing is enabled. The value **true** indicates that geofencing is enabled
   *     , and the value **false** indicates the opposite.
   * @returns { Promise<void> } Promise that returns no result.
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
   * Checks whether geofencing is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that geofencing is
   *     enabled, and the value **false** indicates the opposite.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  function isGeofenceEnabled(): Promise<boolean>;

  /**
   * Obtains notification statistics of a specified list of applications in batches.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption[] } bundles - List of application bundle information.
   * @returns { Promise<BundleNotificationStatistics[]> } Promise used to return the notification statistics
   *     of a specified list of applications.
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
   * Describes the switch state of notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum SwitchState {
    /**
     * Disabled state set by the user.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    USER_MODIFIED_OFF = 0,

    /**
     * Enabled state set by the user.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    USER_MODIFIED_ON = 1,

    /**
     * Initial disabled state before user settings.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_DEFAULT_OFF = 2,

    /**
     * Initial enabled state before user settings.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_DEFAULT_ON = 3,
  }

  /**
   * Provides the button information of the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ButtonOptions {
    /**
     * Button name.
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
   * Subscriber of the system live view notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SystemLiveViewSubscriber {
    /**
     * Callback when the button is touched.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    onResponse?: (notificationId: int, buttonOptions: ButtonOptions) => void;
  }

  /**
   * Describes the parameters of check notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NotificationCheckInfo {
    /**
     * Bundle name.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Notification ID.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    notificationId: int;

    /**
     * Notification label.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    label?: string;

    /**
     * Notification type.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    contentType: ContentType;

    /**
     * User ID of the notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    creatorUserId: int;

    /**
     * Notification slot type.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    slotType: SlotType;

    /**
     * Extra information about the live view.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11 dynamic
     */
    extraInfos?: Record<string, Object>;

    /**
     * Extra information about the live view.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 static
     */
    extraInfos?: Record<string, RecordData>;
  }

  /**
   * Describes the result of check notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface NotificationCheckResult {
    /**
     * Result code.
     * 
     * **0**: display.
     * 
     * **1**: no display.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * Result.
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
   * Describes the setting status of the notification mode switch.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  export interface NotificationSetting {
    /**
     * Whether to enable vibration.
     * 
     * - **true**: enabled.
     * - **false**: disable.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 20 dynamic
     * @since 23 static
     */
    vibrationEnabled: boolean;

    /**
     * Whether to enable ringtone.
     * 
     * - **true**: enabled.
     * - **false**: disable.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 20 dynamic
     * @since 23 static
     */
    soundEnabled: boolean;

    /**
     * Whether to enable lock screen notification. <br>**Model restriction**: This API can be used only in the stage model.
     * <br>**Since**: 26.0.0<br> - **true**: enabled.<br> - **false**: disable.
     * 
     * - **true**: enabled.
     * - **false**: disable.
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lockScreenEnabled?: boolean;
 	 
    /**
     * Whether to enable banner notification.<br>**Model restriction**: This API can be used only in the stage model.
     * <br>**Since**: 26.0.0<br> - **true**: enabled.<br> - **false**: disable.
     * 
     * - **true**: enabled.
     * - **false**: disable.
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bannerEnabled?: boolean;
 	 
    /**
     * Whether to enable the display of notification badges. <br>**Model restriction**:
     * This API can be used only in the stage model.<br>**Since**: 26.0.0<br> - **true**: enabled.<br> - **false**: disable.
     * 
     * - **true**: enabled.
     * - **false**: disable.
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    badgeNumberEnabled?: boolean;

    /**
     * Whether to enable the application notification.<br>**Model restriction**:
     * This API can be used only in the stage model.<br>**Since**: 26.0.0<br> - **true**: enabled.<br> - **false**: disable.
     * 
     * - **true**: enabled.
     * - **false**: disable.
     *
     * @syscap SystemCapability.Notification.Notification
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    notificationEnabled?: boolean;
  }

  /**
   * Enumerates the notification slot types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SlotType {
    /**
     * Unknown type. This type corresponds to [SlotLevel]{@link notificationManager.SlotLevel} being **LEVEL_MIN**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * Notification slot for social communication. This type corresponds to 
     * [SlotLevel]{@link notificationManager.SlotLevel} being **LEVEL_HIGH**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * Notification slot for service information. This type corresponds to 
     * [SlotLevel]{@link notificationManager.SlotLevel} being **LEVEL_HIGH**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_INFORMATION = 2,

    /**
     * Notification slot for content consultation. This type corresponds to 
     * [SlotLevel]{@link notificationManager.SlotLevel} being **LEVEL_MIN**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTENT_INFORMATION = 3,

    /**
     * Live view. A third-party application cannot directly create a notification of this slot type. After the system 
     * proxy creates a system live view, the third-party application publishes a notification with the same ID to update
     * the specified content. This type corresponds to [SlotLevel]{@link notificationManager.SlotLevel} being 
     * **LEVEL_DEFAULT**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LIVE_VIEW = 4,

    /**
     * Notification slot for customer service message. This type is used for messages between users and customer service
     * providers. The messages must be initiated by users. This type corresponds to 
     * [SlotLevel]{@link notificationManager.SlotLevel} being **LEVEL_DEFAULT**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CUSTOMER_SERVICE = 5,

    /**
     * Emergency event. 
     * This is a system API.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EMERGENCY_INFORMATION = 10,

    /**
     * Notification slot for other purposes. This type corresponds to [SlotLevel]{@link notificationManager.SlotLevel} 
     * being **LEVEL_MIN**.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * Enumerates the notification content types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ContentType {
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * Conversation notification. Not supported currently.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_MULTILINE,

    /**
     * Live view notification. A third-party application cannot directly create a notification of this type. After the 
     * system proxy creates a system live view, the third-party application publishes a notification with the same ID to
     * update the specified content.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_SYSTEM_LIVE_VIEW,

    /**
     * Common live view notification. Available only to system applications.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    NOTIFICATION_CONTENT_LIVE_VIEW,
  }

  /**
   * Enumerates the notification level.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SlotLevel {
    /**
     * Notification is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_NONE = 0,

    /**
     * Notification is enabled, but the notification icon is not displayed in the status bar, with no alert tone and 
     * banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_MIN = 1,

    /**
     * Notification is enabled, and the notification icon is displayed in the status bar, with no alert tone and banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_LOW = 2,

    /**
     * Notification is enabled, and the notification icon is displayed in the status bar, with an alert tone but no 
     * banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_DEFAULT = 3,

    /**
     * Notification is enabled, and the notification icon is displayed in the status bar, with an alert tone and banner.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9 dynamic
     * @since 23 static
     */
    LEVEL_HIGH = 4
  }

  /**
   * DND time type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DoNotDisturbType {
    /**
     * Non-DND.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NONE = 0,

    /**
     * One-shot DND at the specified time segment (only considering the hour and minute).
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ONCE = 1,

    /**
     * Daily DND at the specified time segment (only considering the hour and minute).
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DAILY = 2,

    /**
     * DND at the specified time segment (with the hour, day, and month specified).
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CLEARLY = 3
  }

  /**
   * DND time to set.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DoNotDisturbDate {
    /**
     * DND time type.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    type: DoNotDisturbType;

    /**
     * DND start time.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    begin: Date;

    /**
     * DND end time.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    end: Date;
  }

  /**
   * Describes the bundle information of an application that enables cross-device collaboration.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export interface DistributedBundleEnableInfo {
    /**
     * Bundle name.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * Whether the application enables cross-device collaboration. The value **true** indicates that the cross-device 
     * collaboration is enabled, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enable?: boolean;
  }

  /**
   * Do Not Disturb profile.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export interface DoNotDisturbProfile {
    /**
     * ID of the Do Not Disturb profile.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * Name of the Do Not Disturb profile.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Trustlist in Do Not Disturb profile.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    trustlist?: Array<BundleOption>;
  }

  /**
   * Describes the custom ringtone information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface RingtoneInfo {
    /**
     * Type of the ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneType: RingtoneType;

    /**
     * Title of the ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneTitle?: string;

    /**
     * File name of the ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneFileName?: string;

    /**
     * URI of the ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ringtoneUri?: string;
  }

  /**
   * Describes the information about the application reminder.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface NotificationReminderInfo {
    /**
     * Bundle information of the application.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundle: BundleOption;

    /**
     * Reminder flag.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    reminderFlags: long;

    /**
     * Whether the silent reminder is enabled. The value **true** indicates that the silent reminder is enabled, and 
     * the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    silentReminderEnabled: boolean;
  }

  /**
   * The notification reminder type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DeviceRemindType {
    /**
     * The device is not in use. No notification is required.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * The device is not in use.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    IDLE_REMIND = 1,

    /**
     * The device is in use. No notification is required.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * The device is in use.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE_REMIND = 3
  }

  /**
   * Notification source type.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SourceType {
    /**
     * Normal notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NORMAL = 0,

    /**
     * Continuous notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CONTINUOUS = 1,

    /**
     * Timed notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_TIMER = 2
  }

  /**
   * Each bit can control the notification mode. When the bitwise OR operation is performed on 
   * **notificationControlFlags** and the enumerated values in the following table, the notification mode is disabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum NotificationControlFlagStatus {
    /**
     * Disables the sound notification function.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_SOUND = 1 << 0,

    /**
     * Disables the screen lock notification function.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_LOCKSCREEN = 1 << 1,

    /**
     * Disables the banner notification function.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_BANNER = 1 << 2,

    /**
     * Disables the screen-on notification function.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_LIGHT_SCREEN = 1 << 3,

    /**
     * Disables the vibration notification function.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_VIBRATION = 1 << 4,

    /**
     * Disables the icon notification function in the status bar.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NOTIFICATION_STATUS_CLOSE_STATUSBAR_ICON = 1 << 5
  }

  /**
   * Enumerates the priority notification types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  export enum PriorityNotificationType {
    /**
     * Default.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    OTHER = 'OTHER',

    /**
     * Primary contacts.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    PRIMARY_CONTACT = 'PRIMARY_CONTACT',

    /**
     * Message that mentions me.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    AT_ME = 'AT_ME',

    /**
     * Urgent message.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    URGENT_MESSAGE = 'URGENT_MESSAGE',

    /**
     * Schedule reminder.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 23 dynamic&static
     */
    SCHEDULE_REMINDER = 'SCHEDULE_REMINDER',

    /**
     * Payment and repayment.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    PAYMENT_DUE = 'PAYMENT_DUE',

    /**
     * Account balance reminder.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRANSACTION_ALERT = 'TRANSACTION_ALERT',

    /**
     * Express progress.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    EXPRESS_PROGRESS = 'EXPRESS_PROGRESS',

    /**
     * Missed call.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    MISS_CALL = 'MISS_CALL',

    /**
     * Abnormal traveling.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRAVEL_ALERT = 'TRAVEL_ALERT',

    /**
     * Account security.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ACCOUNT_ALERT = 'ACCOUNT_ALERT',

    /**
     * Appointment reminder.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    APPOINTMENT_REMINDER = 'APPOINTMENT_REMINDER',

    /**
     * Traffic violation.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    TRAFFIC_NOTICE = 'TRAFFIC_NOTICE',

    /**
     * Key progress.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    KEY_PROGRESS = 'KEY_PROGRESS',

    /**
     * Important common event.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    PUBLIC_EVENT = 'PUBLIC_EVENT',

    /**
     * IoT warning.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    IOT_WARNING = 'IOT_WARNING',

    /**
     * Custom keyword.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    CUSTOM_KEYWORD = 'CUSTOM_KEYWORD',
  }

  /**
   * Describes the enabling status of the priority notification for an application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export enum PriorityEnableStatus {
    /**
     * The priority notification is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    DISABLE = 0,

    /**
     * The priority notification is enabled by intelligent recognition.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ENABLE_BY_INTELLIGENT = 1,

    /**
     * The priority notification is enabled for all applications.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 23 dynamic&static
     */
    ENABLE = 2,
  }

  /**
   * Describes the application notification strategy.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export enum PriorityStrategyStatus {  
    /**
     * Default priority strategy.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_SYSTEM_DEFAULT = 1 << 0,

    /**
     * Only system rule.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_SYSTEM_RULE = 1 << 1,

    /**
     * Only intelligent recognition.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_INTELLIGENT = 1 << 2,

    /**
     * Only user-defined.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_USER_DEFINED = 1 << 3,

    /**
     * Only application-defined.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_APPLICATION_DEFINED = 1 << 4,

    /**
     * All.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    STATUS_ALL_PRIORITY = 1 << 5
  }

  /**
   * Enumerates the custom ringtone types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum RingtoneType {
    /**
     * System ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_SYSTEM = 0,

    /**
     * Local ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_LOCAL = 1,

    /**
     * Online ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_ONLINE = 2,

    /**
     * Non-custom ringtone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_NONE = 3,
  }

  /**
   * Describes the notification statistics of a specified application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 26.0.0 dynamic&static
   */
 	export interface BundleNotificationStatistics {
 	  /**
     * Bundle information of the application.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 dynamic&static
     */
    bundle: BundleOption;
 	 
    /**
     * Last time when the application sent a notification. Data format: timestamp, in ms.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 dynamic
     */
    lastTime: number;

    /**
     * Last time when the application sent a notification. Data format: timestamp, in ms.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 static
     */
    lastTime: long;
 	 
    /**
     * Total number of notifications released by the application in the last seven days.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 dynamic
     */
    recentCount: number;

    /**
     * Total number of notifications released by the application in the last seven days.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 26.0.0 static
     */
    recentCount: int;
 	}

  /**
   * Describes the bundle information of an application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * Describes the operation button displayed in the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationActionButton = _NotificationActionButton;

  /**
   * Describes the normal text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationBasicContent = _NotificationBasicContent;

  /**
   * Describes the notification content.
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationContent = _NotificationContent;

  /**
   * Describes the long text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationLongTextContent = _NotificationLongTextContent;

  /**
   * Describes the common live view.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationLiveViewContent = _NotificationLiveViewContent;

  /**
   * Describes the multi-line text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationMultiLineContent = _NotificationMultiLineContent;

  /**
   * Describes the picture-attached notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationPictureContent = _NotificationPictureContent;

  /**
   * Describes the system live view notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationSystemLiveViewContent = _NotificationSystemLiveViewContent;

  /**
   * Defines the notification flags.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationFlags = _NotificationFlags;

  /**
   * Enumerates the notification flag states.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationFlagStatus = _NotificationFlagStatus;

  /**
   * Describes the notification request.
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationRequest = _NotificationRequest;

  /**
   * Describes the fields of notification intelligent unification information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type UnifiedGroupInfo = _UnifiedGroupInfo;

  /**
   * Describes the filter criteria for querying the live view.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationFilter = _NotificationFilter;

  /**
   * Describes the notification authentication information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationCheckRequest = _NotificationCheckRequest;

  /**
   * Describes distributed notification options.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type DistributedOptions = _DistributedOptions;

  /**
   * Describes the notification slot.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSlot = _NotificationSlot;

  /**
   * Enumerates the statuses of the common live view.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type LiveViewStatus = _LiveViewStatus;

  /**
   * Enumerates live view types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  export type LiveViewTypes = _LiveViewTypes;

  /**
   * The **NotificationSorting** module provides APIs for defining the sorting information of active notifications.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationSorting = _NotificationSorting;

  /**
   * Describes the notification template.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationTemplate = _NotificationTemplate;

  /**
   * Provides the notification user input.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  export type NotificationUserInput = _NotificationUserInput;

  /**
   * Describes the notification capsule.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationCapsule = _NotificationCapsule;

  /**
   * Describes the notification button.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationButton = _NotificationButton;

  /**
   * Describes the notification timing information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationTime = _NotificationTime;

  /**
   * Describes the notification progress.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  export type NotificationProgress = _NotificationProgress;

  /**
   * System notification button.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 23 dynamic&static
   */
  export type NotificationIconButton = _NotificationIconButton;

  /**
   * Enumerates the trigger types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type TriggerType = _TriggerType;

  /**
   * Defines the details for triggering a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type Trigger = _Trigger;

  /**
   * Defines Notification Parameters to describe the key information of wantAgent in the notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  export type NotificationParameters = _NotificationParameters;

  /**
   * Defines the configuration of a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type Geofence = _Geofence;

  /**
   * Enumerates the coordinate systems of a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type CoordinateSystemType = _CoordinateSystemType;

  /**
   * Enumerates the event types of monitoring a geofence.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type MonitorEvent = _MonitorEvent;

  /**
   * Defines the custom group notification information.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type GroupInfo = _GroupInfo;
}

export default notificationManager;
