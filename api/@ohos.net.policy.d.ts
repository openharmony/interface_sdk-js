/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file Network Policy Management
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
import Context from './application/Context';

/**
 * The **policy** module provides APIs for managing network policies, which allow you to use firewall technology to
 * control and manage the data traffic used.
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10 dynamic
 */
declare namespace policy {
  /**
   * Defines the network type.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  type NetBearType = connection.NetBearType;

  /**
   * Sets whether background applications are allowed to access the network. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed - Whether background applications are allowed to use mobile data. The value **true**
   *     indicates that background applications are allowed to use mobile data, and the value **false** indicates the
   *     opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setBackgroundAllowed(isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether background applications are allowed to access the network. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed - Whether background applications are allowed to use mobile data. The value **true**
   *     indicates that background applications are allowed to use mobile data, and the value **false** indicates the
   *     opposite.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setBackgroundAllowed(isAllowed: boolean): Promise<void>;

  /**
   * Checks whether the current application is allowed to access the network in the background. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     the value **true** is returned, indicating that the application is allowed to access the network when running
   *     at the background. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isBackgroundAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current application is allowed to access the network in the background. This API uses a promise
   * to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the background
   *     policy is allowed, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isBackgroundAllowed(): Promise<boolean>;

  /**
   * Checks whether the specified UID can access the background network. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { AsyncCallback<NetBackgroundPolicy> } callback - Callback used to return the result.  .
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getBackgroundPolicyByUid(uid: int, callback: AsyncCallback<NetBackgroundPolicy>): void;

  /**
   * Obtains whether the UID can access the network of the background. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @returns { Promise<NetBackgroundPolicy> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getBackgroundPolicyByUid(uid: int): Promise<NetBackgroundPolicy>;

  /**
   * Sets the metered network access policy for the application specified by a given UID. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { NetUidPolicy } policy - Network access policy for the application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     value is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPolicyByUid(uid: int, policy: NetUidPolicy, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the application with the corresponding UID can access the metering network. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { NetUidPolicy } policy - Network access policy for the application.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPolicyByUid(uid: int, policy: NetUidPolicy): Promise<void>;

  /**
   * Obtains the network access policy for the application specified by a given UID. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { AsyncCallback<NetUidPolicy> } callback - Callback used to return the result. If the operation is
   *     successful, the policy result is returned. If the operation fails, an error code is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPolicyByUid(uid: int, callback: AsyncCallback<NetUidPolicy>): void;

  /**
   * Obtains the network access policy by app UID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @returns { Promise<NetUidPolicy> } Promise used to return the result. If the operation fails, an error message is
   *     returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPolicyByUid(uid: int): Promise<NetUidPolicy>;

  /**
   * Obtains all UIDs that match the specified network policy. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy - Network policy for the application.
   * @param { AsyncCallback<Array<int>> } callback - Callback used to return the result. If the operation is successful,
   *     the UID array of the application is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getUidsByPolicy(policy: NetUidPolicy, callback: AsyncCallback<Array<int>>): void;

  /**
   * Obtains all UIDs that match the policy by policy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy - Network policy for the application.
   * @returns { Promise<Array<int>> } Promise used to return the result. If the operation is successful, the operation
   *     result is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getUidsByPolicy(policy: NetUidPolicy): Promise<Array<int>>;

  /**
   * Checks whether the application specified by a given UID is allowed to access a metered network. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { boolean } isMetered - Whether the network is a metered network. The value **true** indicates that the
   *     network is a metered network, and the value **false** indicates the opposite.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     application is allowed to access metered networks, and the value **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: int, isMetered: boolean, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the application specified by a given UID is allowed to access a metered network. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { boolean } isMetered - Whether the network is a metered network. The value **true** indicates that the
   *     network is a metered network, and the value **false** indicates the opposite.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the UID can
   *     access the metering or non-metering network, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: int, isMetered: boolean): Promise<boolean>;

  /**
   * Obtains whether the network of the specified iface can be accessed by the corresponding UID. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { string } iface - Name of the target network.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     application is allowed to access the specified network, and the value **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: int, iface: string, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the UID can access the network of the specified iface. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { string } iface - Name of the target network.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the application is
   *     allowed to access the specified network, and the value **false** means the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function isUidNetAllowed(uid: int, iface: string): Promise<boolean>;

  /**
   * Sets the metering network policy. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies - Defines the quota policy for the specified network.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     value is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setNetQuotaPolicies(quotaPolicies: Array<NetQuotaPolicy>, callback: AsyncCallback<void>): void;

  /**
   * Sets the metering network policy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies - Defines the quota policy for the specified network.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setNetQuotaPolicies(quotaPolicies: Array<NetQuotaPolicy>): Promise<void>;

  /**
   * Reset the specified network management policy.
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iccid - Indicates the specified SIM that is valid when netType is cellular.
   *     <br>Value range:(0, 1024]
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hidethisfor inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function restoreAllPolicies(iccid: string): Promise<void>;

  /**
   * Obtains the metering network policy. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<NetQuotaPolicy>> } callback - Callback used to return the result.  .
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getNetQuotaPolicies(callback: AsyncCallback<Array<NetQuotaPolicy>>): void;

  /**
   * Obtains the metering network policy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<NetQuotaPolicy>> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getNetQuotaPolicies(): Promise<Array<NetQuotaPolicy>>;

  /**
   * Updates a reminder policy. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } netType - Network type.
   * @param { string } simId - SIM card ID.
   * @param { RemindType } remindType - Enumerates the reminder types.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     value is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType, callback: AsyncCallback<void>): void;

  /**
   * Updates a reminder policy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } netType - Network type.
   * @param { string } simId - SIM card ID.
   * @param { RemindType } remindType - Enumerates the reminder types.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType): Promise<void>;

  /**
   * Adds applications specified by given UIDs to the device idle allowlist. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - Unique ID of the application.
   * @param { boolean } isAllowed - Whether to add the application to the allowlist. The value **true** means to add the
   *     application to the allowlist, and the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     value is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setDeviceIdleTrustlist(uids: Array<int>, isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether multiple UIDs are in the whitelist of the sleep firewall. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - Unique ID of the application.
   * @param { boolean } isAllowed - Whether to add the application to the allowlist. The value **true** means to add the
   *     application to the allowlist, and the value **false** means the opposite.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setDeviceIdleTrustlist(uids: Array<int>, isAllowed: boolean): Promise<void>;

  /**
   * Obtains the UID of applications that are on the device idle allowlist. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<int>> } callback - Callback used to return the result.  .
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getDeviceIdleTrustlist(callback: AsyncCallback<Array<int>>): void;

  /**
   * Obtains the UID of applications that are on the device idle allowlist. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<int>> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getDeviceIdleTrustlist(): Promise<Array<int>>;

  /**
   * Sets whether the app with the specified UID is in the whitelist of the power saving firewall. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - Unique ID of the application.
   * @param { boolean } isAllowed - Whether to add the application to the allowlist. The value **true** means to add the
   *     application to the allowlist, and the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     value is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPowerSaveTrustlist(uids: Array<int>, isAllowed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the app with the specified UID is in the whitelist of the power saving firewall. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - Unique ID of the application.
   * @param { boolean } isAllowed - Whether to add the application to the allowlist. The value **true** means to add the
   *     application to the allowlist, and the value **false** means the opposite.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function setPowerSaveTrustlist(uids: Array<int>, isAllowed: boolean): Promise<void>;

  /**
   * Obtains the UID array of applications that are on the power saving allowlist. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<int>> } callback - Callback used to return the result.  .
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPowerSaveTrustlist(callback: AsyncCallback<Array<int>>): void;

  /**
   * Obtains the UID array of applications that are on the device idle allowlist. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<int>> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function getPowerSaveTrustlist(): Promise<Array<int>>;

  /**
   * Restores all the policies (cellular network, background network, firewall, and application-specific network
   * policies) for the specified SIM card. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId - SIM card ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     value is returned. If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function resetPolicies(simId: string, callback: AsyncCallback<void>): void;

  /**
   * Resets the cellular network, background network policy, firewall policy, and app policy corresponding to the SIM
   * card ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId - SIM card ID.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function resetPolicies(simId: string): Promise<void>;

  /**
   * Sets whether the application with the specified UID can access the network. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @param { NetworkAccessPolicy } policy - Network policy.
   * @param { boolean } [isReconfirmed] - Whether reconfirmation is required. The value **true** indicates that
   *     reconfirmation is not required and no dialog box is displayed. The value **false** indicates that
   *     reconfirmation is required and a dialog box is displayed when the application accesses the network. The default
   *     value is **false**.
   * @returns { Promise<void> } Promise used to return the result. If the operation is successful, no value is returned.
   *     If the operation fails, an error message is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function setNetworkAccessPolicy(uid: int, policy: NetworkAccessPolicy, isReconfirmed?: boolean): Promise<void>;

  /**
   * Obtains whether the application with the specified UID can access the network. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - Unique app ID, which is a positive integer within the int32_t range.
   * @returns { Promise<NetworkAccessPolicy> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getNetworkAccessPolicy(uid: int): Promise<NetworkAccessPolicy>;

  /**
   * Obtains the network access policy of all applications under the current user. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<UidNetworkAccessPolicy> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function getNetworkAccessPolicy(): Promise<UidNetworkAccessPolicy>;

  /**
   * Queries the network access policy of an application (whether cellular or Wi-Fi network access is allowed). You can
   * check the policy by choosing **Settings** > **Mobile network** > **Manage data usage** > **Network access**. This
   * API uses a promise to return the result.
   *
   * @returns { Promise<NetAccessPolicy> } Promise used to return the network access policy of the application.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error, such as nullptr。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getNetAccessPolicy(): Promise<NetAccessPolicy>;

  /**
   * Registers the callback when the **policy** changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - Event type.<br/> The value **netUidPolicyChange** indicates a policy change
   *     event.
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback - Callback used to return the result. It is
   *     called when the network policy changes. [since 10 - 10]
   * @param { Callback<NetUidPolicyInfo> } callback - Callback used to return the result. It is called when the network
   *     policy changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netUidPolicyChange', callback: Callback<NetUidPolicyInfo>): void;

  /**
   * Unsubscribes from **policy** changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - Event type. The value **netUidPolicyChange** indicates a policy change
   *     event.
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback - Callback used to return the result. It is
   *     called when the network policy changes. [since 10 - 10]
   * @param { Callback<NetUidPolicyInfo> } callback - Callback used to return the result. It is called when the network
   *     policy changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netUidPolicyChange', callback?: Callback<NetUidPolicyInfo>): void;

  /**
   * Registers the callback when the **rule** changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - Event type.<br/> The value **netUidRuleChange** indicates a rule change event.
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback - Callback used to return the result. It is called
   *     when the rule changes. [since 10 - 10]
   * @param { Callback<NetUidRuleInfo> } callback - Callback used to return the result. It is called when the rule
   *     changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netUidRuleChange', callback: Callback<NetUidRuleInfo>): void;

  /**
   * Unsubscribes from **rule** changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - Event type. The value **netUidRuleChange** indicates a rule change event.
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback - Callback used to return the result. It is called
   *     when the rule changes. [since 10 - 10]
   * @param { Callback<NetUidRuleInfo> } callback - Callback used to return the result. It is called when the rule
   *     changes. [since 11]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netUidRuleChange', callback?: Callback<NetUidRuleInfo>): void;

  /**
   * Registers the callback when the **iface** changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netMeteredIfacesChange' } type - Event type.<br/> The value **netMeteredIfacesChange** indicates a
   *     metered **iface** change event.
   * @param { Callback<Array<string>> } callback - Callback used to return the result. It is called when the registered
   *     metered **iface** changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netMeteredIfacesChange', callback: Callback<Array<string>>): void;

  /**
   * Unsubscribes from the changes of the metering interface. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netMeteredIfacesChange' } type - Event type. The value **netMeteredIfacesChange** indicates a metered
   *     **iface** change event.
   * @param { Callback<Array<string>> } callback - Callback used to return the result. It is called when the registered
   *     metered **iface** changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netMeteredIfacesChange', callback?: Callback<Array<string>>): void;

  /**
   * Registers the callback for network quota policy changes. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netQuotaPolicyChange' } type - Event type.<br/> The value **netQuotaPolicyChange** indicates a network
   *     quota policy change event.
   * @param { Callback<Array<NetQuotaPolicy>> } callback - Callback used to return the result. It is called when the
   *     registered network quota policy changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netQuotaPolicyChange', callback: Callback<Array<NetQuotaPolicy>>): void;

  /**
   * Unsubscribes from the changes of the metering network policy. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netQuotaPolicyChange' } type - Event type. The value **netQuotaPolicyChange** indicates a network quota
   *     policy change event.
   * @param { Callback<Array<NetQuotaPolicy>> } callback - Callback used to return the result. It is called when the
   *     registered network quota policy changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netQuotaPolicyChange', callback?: Callback<Array<NetQuotaPolicy>>): void;

  /**
   * Registers the callback for background network policy changes. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netBackgroundPolicyChange' } type - Event type.<br/> The value **netBackgroundPolicyChange** indicates a
   *     background network policy change event.
   * @param { Callback<boolean> } callback - Callback used to return the result. It is called when the registered
   *     background network policy changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'netBackgroundPolicyChange', callback: Callback<boolean>): void;

  /**
   * Unsubscribes from background network policy changes. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netBackgroundPolicyChange' } type - Event type. The value **netBackgroundPolicyChange** indicates a
   *     background network policy change event.
   * @param { Callback<boolean> } callback - Callback used to return the result. It is called when the registered
   *     background network policy changes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2100001 - Invalid parameter value.
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'netBackgroundPolicyChange', callback?: Callback<boolean>): void;

  /**
   * Sets whether the current application can connect to the Wi-Fi or cellular network. You can call this API to open
   * the network access settings page of the current application and set the network access permission of the
   * application. This API uses a promise to return the result.
   *
   * @param { Context } context - Application context of the stage model. (Only **UIAbilityContext** and
   *     **ExtensionContext** are supported.)
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 22 dynamic
   */
  function showAppNetPolicySettings(context: Context): Promise<void>;

  /**
   * Enumerates the background network policies.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetBackgroundPolicy {
    /**
     * No background network policy is specified. This is the default value.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_NONE = 0,

    /**
     * Background applications are allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_ENABLE = 1,

    /**
     * Applications running in the background are not allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_DISABLE = 2,

    /**
     * Only applications on the allowlist are allowed to access metered networks when they are running in the
     * background.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_TRUSTLIST = 3
  }

  /**
   * Defines the quota policy for the specified network.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface NetQuotaPolicy {
    /**
     * Network for which the quota policy is set.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    networkMatchRule: NetworkMatchRule;

    /**
     * Network quota policy.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    quotaPolicy: QuotaPolicy;
  }

  /**
   * Defines the network quota policy.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface QuotaPolicy {
    /**
     * Metering period for the quota limit. **D1**, **M1**, and **Y1** indicate one day, one month, and one year,
     * respectively. If the specified metering period is exceeded, the quota is not limited.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    periodDuration: string;

    /**
     * Data volume threshold for generating an alarm.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    warningBytes: long;

    /**
     * Data volume quota.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    limitBytes: long;

    /**
     * Whether the network is a metered network. The value **true** indicates that the network is a metered network, and
     * the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    metered: boolean;

    /**
     * Action to take when the data volume quota is reached.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    limitAction: LimitAction;

    /**
     * Last time when an alarm was generated. Default value: **-1**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    lastWarningRemind?: long;

    /**
     * Last time when the quota was exhausted. Default value: **-1**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    lastLimitRemind?: long;
  }

  /**
   * Defines the network for which the quota policy is set.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface NetworkMatchRule {
    /**
     * Network type.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    netType: NetBearType;

    /**
     * ID of the SIM card on the metered cellular network.
     *
     * It is used for Ethernet and Wi-Fi networks.
     *
     * It is used together with **iccid**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    identity: string;

    /**
     * Identifier of the SIM card on the metered cellular network.
     *
     * It is not used for Ethernet and Wi-Fi networks.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    simId: string;
  }

  /**
   * Defines a unique network ID.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface NetUidRuleInfo {
    /**
     * Traffic alarm threshold. The default value is **DATA_USAGE_UNKNOWN**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    uid: int;
    /**
     * Rule that specifies whether the application specified by a given UID is allowed to access a metered or non-
     * metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    rule: NetUidRule;
  }

  /**
   * Defines the network policy information for an application.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface NetUidPolicyInfo {
    /**
     * Traffic alarm threshold. The default value is **DATA_USAGE_UNKNOWN**.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    uid: int;
    /**
     * Policy that specifies whether the application specified by a given UID is allowed to access the network when
     * running in the background.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    policy: NetUidPolicy;
  }

  /**
   * Enumerates the actions that can be taken when the data volume quota is reached.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum LimitAction {
    /**
     * No action is taken. This is the default value.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_NONE = -1,

    /**
     * Internet access is disabled.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_ACCESS_DISABLED = 0,

    /**
     * An alarm is generated when the quota limit is reached.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_ALERT_ONLY = 1
  }

  /**
   * Enumerates the metered network rules.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetUidRule {
    /**
     * Default rule.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_NONE = 0,

    /**
     * Applications running in the foreground are allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_METERED_FOREGROUND = 1 << 0,

    /**
     * Applications are allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_METERED = 1 << 1,

    /**
     * Applications are not allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_REJECT_METERED = 1 << 2,

    /**
     * Applications are allowed to access all networks (metered or non-metered).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_ALL = 1 << 5,

    /**
     * Applications are not allowed to access any networks (metered or non-metered).
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_REJECT_ALL = 1 << 6
  }

  /**
   * Enumerates the reminder types.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum RemindType {
    /**
     * Warning.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    REMIND_TYPE_WARNING = 1,

    /**
     * Limit.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    REMIND_TYPE_LIMIT = 2
  }

  /**
   * Enumerates network access policies for the application.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetUidPolicy {
    /**
     * Default network policy.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_NONE = 0,

    /**
     * Background applications are allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_ALLOW_METERED_BACKGROUND = 1 << 0,

    /**
     * Applications running in the background are not allowed to access a metered network.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_REJECT_METERED_BACKGROUND = 1 << 1
  }

  /**
   * Network access policy.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface NetworkAccessPolicy {
    /**
     * Whether the application is allowed to access the Wi-Fi network. The value **true** indicates that the application
     * is allowed to access the Wi-Fi network, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    allowWiFi?: boolean;
    /**
     * Whether the application is allowed to access the cellular network. The value **true** indicates that the
     * application is allowed to access the cellular network, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    allowCellular?: boolean;
    /**
     * Whether the application is always allowed to access the Wi-Fi network. The value **true** indicates that the
     * application is always allowed to access the Wi-Fi network, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     */
    alwaysAllowWiFi?: boolean;
    /**
     * Whether the application is always allowed to access the cellular network. The value **true** indicates that the
     * application is always allowed to access the cellular network, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     */
    alwaysAllowCellular?: boolean;
  }

  /**
   * Defines the network access policy information.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface NetAccessPolicy {
    /**
     * Whether to allow Internet access over Wi-Fi.
     *
     * **true**: yes;
     *
     * **false**: no.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowWiFi: boolean;
    /**
     * Whether to allow Internet access over the cellular network.
     *
     * **true**: yes.
     *
     * **false**: no.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowCellular: boolean;
  }

  /**
   * Defines the network policy for an application with the specified UID.
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface UidNetworkAccessPolicy {
    /**
     * Network policy. The data type is key-value pair.
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    [uid: string]: NetworkAccessPolicy;
  }
}

export default policy;
