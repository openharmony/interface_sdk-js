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
 * @file 网络策略管理
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
import Context from './application/Context';

/**
 * 本模块提供网络策略管理能力，采用防火墙技术对用户使用数据流量进行控制管理。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从 API version 10 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 10 dynamic
 */
declare namespace policy {
  /**
   * 网络类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 10 dynamic
   */
  type NetBearType = connection.NetBearType;

  /**
   * 设置是否允许后台应用访问网络，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed - 是否允许应用后台使用数据。true：允许应用后台使用数据；false：不允许应用后台使用数据。
   * @param { AsyncCallback<void> } callback - 回调函数，成功时，err 为 undefined，失败返回错误码错误信息。
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
   * 设置是否允许后台应用访问网络，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { boolean } isAllowed - 是否允许应用后台使用数据。true：允许应用后台使用数据；false：不允许应用后台使用数据。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 获取当前应用是否允许后台访问网络，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回 true 代表后台策略为允许，失败返回错误码错误信息。
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
   * 获取当前应用是否允许后台访问网络，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<boolean> } Promise 对象。 返回 true 表示后台策略为允许，返回false表示后台策略不允许。
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
   * 获取指定 uid 是否能访问后台网络，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { AsyncCallback<NetBackgroundPolicy> } callback - 回调函数。返回获取结果。
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
   * 获取指定 uid 能否访问后台网络，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @returns { Promise<NetBackgroundPolicy> } 以 Promise 形式返回设定结果。
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
   * 设置对应 uid 应用是否能够访问计量网络的策略，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { NetUidPolicy } policy - 应用对应的策略。
   * @param { AsyncCallback<void> } callback - 回调函数，成功返回空，失败返回错误码错误信息。
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
   * 设置对应 uid 应用是否能够访问计量网络的策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { NetUidPolicy } policy - 应用对应的策略。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 通过应用 uid 获取对应访问网络策略，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { AsyncCallback<NetUidPolicy> } callback - 回调函数。成功返回获取策略结果，失败返回错误码错误信息。
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
   * 通过应用 uid 获取对应访问网络策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @returns { Promise<NetUidPolicy> } 以 Promise 形式返回获取策略结果。失败返回错误码错误信息。
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
   * 通过策略获取跟策略匹配的所有 uid，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy - 应用对应的计量网络下的策略。
   * @param { AsyncCallback<Array<int>> } callback - 回调函数。成功返回应用的 uid 数组，失败返回错误码错误信息。
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
   * 通过策略获取跟策略匹配的所有 uid，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetUidPolicy } policy - app 对应的计量网络下的策略。
   * @returns { Promise<Array<int>> } 以 Promise 形式返回应用的 uid 数组，失败返回错误码错误信息。
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
   * 判断对应 uid 能否访问计量或非计量网络，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { boolean } isMetered - 是否为计量网络。true：是计量网络；false：不是计量网络。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回 true 表示这个 uid 可以访问对应的计量网络。
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
   * 判断对应 uid 能否访问计量或非计量网络，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { boolean } isMetered - 是否为计量网络。true：是计量网络；false：不是计量网络。
   * @returns { Promise<boolean> } Promise 对象。 返回 true 表示这个uid可以访问计量或非计量网络，返回false表示这个uid不可以访问计量或非计量网络。
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
   * 获取对应 uid 能否访问指定的 iface 的网络，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { string } iface - 网络对应的名称 。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回 true 表示这个 uid 可以访问对应 iface 的网络。
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
   * 获取对应 uid 能否访问指定的 iface 的网络，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { string } iface - 网络对应的名称。
   * @returns { Promise<boolean> } Promise 对象。 返回 true 表示对应 uid 能访问指定的 iface 的网络，返回false则表示不能访问。
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
   * 设置计量网络策略，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies - 计量网络策略。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码错误信息。
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
   * 设置计量网络策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<NetQuotaPolicy> } quotaPolicies - 计量网络策略。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 根据指定的SIM卡识别码，恢复所有网络管理相关的策略配置，如UID策略、配额策略、防火墙规则等。
   *
   * @permission ohos.permission.CONNECTIVITY_INTERNAL
   * @param { string } iccid - SIM卡唯一识别码，通常为20位。
   * @returns { Promise<void> } Promise对象。无返回结果。
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
   * 获取计量网络策略，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<NetQuotaPolicy>> } callback - 回调函数。返回获取结果。
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
   * 获取计量网络策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<NetQuotaPolicy>> } 以 Promise 形式返回设定结果。
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
   * 更新提醒策略，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } netType - 网络类型。
   * @param { string } simId - SIM 卡 ID。
   * @param { RemindType } remindType - 提醒类型。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码错误信息。
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
   * 更新提醒策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { NetBearType } netType - 网络类型。
   * @param { string } simId - SIM 卡 ID。
   * @param { RemindType } remindType - 提醒类型。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 设置多个 uid 是否在休眠防火墙的白名单，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - app 唯一标识符。
   * @param { boolean } isAllowed - 是否加入白名单。true：加入白名单；false：没有加入白名单。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码错误信息。
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
   * 设置多个 uid 是否在休眠防火墙的白名单，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - app 唯一标识符。
   * @param { boolean } isAllowed - 是否加入白名单。true：加入白名单；false：没有加入白名单。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 获取休眠模式白名单所包含的 uid，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<int>> } callback - 回调函数。返回获取结果。
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
   * 获取休眠模式白名单所包含的 uid，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<int>> } 以 Promise 形式返回设定结果。
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
   * 设置指定 uid 应用是否在省电防火墙的白名单，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - app 唯一标识符。
   * @param { boolean } isAllowed - 是否加入白名单。true：加入白名单；false：没有加入白名单。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码错误信息。
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
   * 设置指定 uid 应用是否在省电防火墙的白名单，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { Array<int> } uids - app 唯一标识符。
   * @param { boolean } isAllowed - 是否加入白名单。true：加入白名单；false：没有加入白名单。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 获取省电模式白名单所包含的 uid 数组，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { AsyncCallback<Array<int>> } callback - 回调函数。返回获取结果。
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
   * 获取休眠模式白名单所包含的 uid 数组，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<Array<int>> } 以 Promise 形式返回设定结果。
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
   * 重置对应 sim 卡 id 的蜂窝网络、后台网络策略、防火墙策略、应用对应的策略，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId - SIM 卡 ID。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码错误信息。
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
   * 重置对应 sim 卡 id 的蜂窝网络、后台网络策略、防火墙策略、应用对应的策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { string } simId - SIM 卡 ID。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 设置指定 uid 应用能否能访问网络的策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @param { NetworkAccessPolicy } policy - 网络策略。
   * @param { boolean } [isReconfirmed] - 默认false；false 表示需要重确认，应用访问网络会弹框; true 表示不需要重确认，无弹框。
   * @returns { Promise<void> } 以 Promise 形式返回设定结果。成功返回空，失败返回错误码错误信息。
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
   * 获取指定 uid 能否访问网络策略，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { int } uid - app 唯一标识符，取值范围为int32_t范围内的正整数。
   * @returns { Promise<NetworkAccessPolicy> } 以 Promise 形式返回设定结果。
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
   * 获取当前用户下所有应用 app 能否访问网络策略信息，使用 Promise 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @returns { Promise<UidNetworkAccessPolicy> } 以 Promise 形式返回设定结果。
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
   * 查询自身应用的联网策略（是否允许使用蜂窝、Wi-Fi网络上网），可在设备中“设置 > 移动网络 > 流量管理 > 应用联网”中查看。使用Promise异步回调。
   *
   * @returns { Promise<NetAccessPolicy> } Promise对象。返回应用自身联网策略。
   * @throws { BusinessError } 2100002 - Failed to connect to the service.
   * @throws { BusinessError } 2100003 - System internal error, such as nullptr。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getNetAccessPolicy(): Promise<NetAccessPolicy>;

  /**
   * 注册 policy 发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - 订阅的事件类型。'netUidPolicyChange'：注册policy发生改变事件。
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback - Callback used to return the result. It is
   *     called when the network policy changes. [since 10 - 10]
   * @param { Callback<NetUidPolicyInfo> } callback - 回调函数。注册 policy 发生改变时调用。 [since 11]
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
   * 注销 policy 发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidPolicyChange' } type - 注销的事件类型。'netUidPolicyChange'：注销policy发生改变事件。
   * @param { Callback<{ uid: number, policy: NetUidPolicy }> } callback - Callback used to return the result. It is
   *     called when the network policy changes. [since 10 - 10]
   * @param { Callback<NetUidPolicyInfo> } callback - 回调函数。注销 policy 发生改变时调用。 [since 11]
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
   * 注册 rule 发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - 订阅的事件类型。'netUidRuleChange'：注册rule发生改变事件。
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback - Callback used to return the result. It is called
   *     when the rule changes. [since 10 - 10]
   * @param { Callback<NetUidRuleInfo> } callback - 回调函数。注册 rule 发生改变时的调用。 [since 11]
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
   * 注销 rule 发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netUidRuleChange' } type - 注销的事件类型。'netUidRuleChange'：注销rule发生改变事件。
   * @param { Callback<{ uid: number, rule: NetUidRule }> } callback - Callback used to return the result. It is called
   *     when the rule changes. [since 10 - 10]
   * @param { Callback<NetUidRuleInfo> } callback - 回调函数。注销 rule 发生改变时的调用。 [since 11]
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
   * 注册计量 iface 发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netMeteredIfacesChange' } type - 订阅的事件类型。'netMeteredIfacesChange'：注册计量iface发生改变事件。
   * @param { Callback<Array<string>> } callback - 回调函数。注册计量 iface 发生改变时调用。
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
   * 注销计量 iface 发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netMeteredIfacesChange' } type - 注销的事件类型。'netMeteredIfacesChange'：注销计量iface发生改变事件。
   * @param { Callback<Array<string>> } callback - 回调函数。注册计量 iface 发生改变时调用。
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
   * 注册计量网络策略发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netQuotaPolicyChange' } type - 订阅的事件类型。'netQuotaPolicyChange'：注册计量网络策略发生改变事件。
   * @param { Callback<Array<NetQuotaPolicy>> } callback - 回调函数。注册计量网络策略发生改变时调用。
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
   * 注销计量网络策略发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netQuotaPolicyChange' } type - 注销的事件类型。'netQuotaPolicyChange'：注销计量网络策略发生改变事件。
   * @param { Callback<Array<NetQuotaPolicy>> } callback - 回调函数。注册计量网络策略发生改变时调用。
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
   * 注册后台网络策略发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netBackgroundPolicyChange' } type - 订阅的事件类型。'netBackgroundPolicyChange'：注册后台网络策略发生改变事件。
   * @param { Callback<boolean> } callback - 回调函数。注册后台网络策略发生改变时调用。
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
   * 注销后台网络策略发生改变时的回调，使用 callback 异步回调。
   *
   * @permission ohos.permission.MANAGE_NET_STRATEGY
   * @param { 'netBackgroundPolicyChange' } type - 注销的事件类型。'netBackgroundPolicyChange'：注销后台网络策略发生改变事件。
   * @param { Callback<boolean> } callback - 回调函数。注册后台网络策略发生改变时调用。
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
   * 当需要设置当前应用能否使用Wi-Fi/蜂窝联网时，调用该接口可以打开当前应用的联网设置界面，以设置应用的联网权限。使用Promise异步回调。
   *
   * @param { Context } context - Stage模型的应用上下文（仅支持UIAbilityContext和ExtensionContext）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 22 dynamic
   */
  function showAppNetPolicySettings(context: Context): Promise<void>;

  /**
   * 后台网络策略。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetBackgroundPolicy {
    /**
     * 默认值。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_NONE = 0,

    /**
     * 应用在后台可以使用计量网路。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_ENABLE = 1,

    /**
     * 应用在后台不可以使用计量网路。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_DISABLE = 2,

    /**
     * 只有应用指定的列表在后台可以使用计量网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_BACKGROUND_POLICY_TRUSTLIST = 3
  }

  /**
   * 计量网络策略。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface NetQuotaPolicy {
    /**
     * 网络标识，用来确定设置哪一个网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    networkMatchRule: NetworkMatchRule;

    /**
     * 具体的计量网络策略。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    quotaPolicy: QuotaPolicy;
  }

  /**
   * 计量网络策略
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface QuotaPolicy {
    /**
     * 流量限制计量周期。D1、M1、Y1分别代表1天、1个月、1年内流量限制，超出时间则不受限制。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    periodDuration: string;

    /**
     * 发出警告的流量阈值。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    warningBytes: long;

    /**
     * 流量设置的配额。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    limitBytes: long;

    /**
     * 是否为计量网络。true表示是，false表示不是。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    metered: boolean;

    /**
     * 到达流量限制后的动作。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    limitAction: LimitAction;

    /**
     * 最新一次发出警告的时间。默认值：-1。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    lastWarningRemind?: long;

    /**
     * 最新一次配额耗尽的时间。默认值：-1。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    lastLimitRemind?: long;
  }

  /**
   * 网络标识，用来确定设置哪一个网络
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export interface NetworkMatchRule {
    /**
     * 网络类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    netType: NetBearType;

    /**
     * 计量蜂窝网络中配合simId联合使用。
     * 
     * 以太网和wifi网络单独使用。
     * 
     * 用于标记类型。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    identity: string;

    /**
     * 计量蜂窝网络的SIM卡的标识值。
     * 
     * 以太网和wifi网络不会用到。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    simId: string;
  }

  /**
   * 生成网络唯一标识。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface NetUidRuleInfo {
    /**
     * 流量警告的阈值，默认：DATA_USAGE_UNKNOWN。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    uid: int;
    /**
     * 规定一个UID访问计量网络还是非计量网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    rule: NetUidRule;
  }

  /**
   * 注册网络UID策略变化的回调函数。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  export interface NetUidPolicyInfo {
    /**
     * 流量警告的阈值，默认：DATA_USAGE_UNKNOWN。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    uid: int;
    /**
     * UID指定了在后台模式下网络访问的策略。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    policy: NetUidPolicy;
  }

  /**
   * 限制动作。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum LimitAction {
    /**
     * 默认值。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_NONE = -1,

    /**
     * 当配额策略达到限制时，访问被禁用。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_ACCESS_DISABLED = 0,

    /**
     * 当配额策略达到限制时，将警告用户。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    LIMIT_ACTION_ALERT_ONLY = 1
  }

  /**
   * 计量网络规则。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetUidRule {
    /**
     * 默认规则。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_NONE = 0,

    /**
     * 允许前台访问计量网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_METERED_FOREGROUND = 1 << 0,

    /**
     * 允许访问计量网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_METERED = 1 << 1,

    /**
     * 拒绝访问计量网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_REJECT_METERED = 1 << 2,

    /**
     * 允许访问所有网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_ALLOW_ALL = 1 << 5,

    /**
     * 拒绝访问所有网络。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_RULE_REJECT_ALL = 1 << 6
  }

  /**
   * 提醒类型。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum RemindType {
    /**
     * 警告提醒。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    REMIND_TYPE_WARNING = 1,

    /**
     * 限制提醒。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    REMIND_TYPE_LIMIT = 2
  }

  /**
   * 应用对应的网络策略。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  export enum NetUidPolicy {
    /**
     * 默认网络策略。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_NONE = 0,

    /**
     * 应用在后台可以使用计量网路。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_ALLOW_METERED_BACKGROUND = 1 << 0,

    /**
     * 应用在后台不可以使用计量网路。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    NET_POLICY_REJECT_METERED_BACKGROUND = 1 << 1
  }

  /**
   * 应用对应的连接网络的策略。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface NetworkAccessPolicy {
    /**
     * 是否允许应用访问wifi网络。true表示允许，false表示不允许。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    allowWiFi?: boolean;
    /**
     * 是否允许应用访问蜂窝网络。true表示允许，false表示不允许。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    allowCellular?: boolean;
    /**
     * 是否允许应用一直访问wifi网络。true表示允许，false表示不允许。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     */
    alwaysAllowWiFi?: boolean;
    /**
     * 是否允许应用一直访问蜂窝网络。true表示允许，false表示不允许。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     */
    alwaysAllowCellular?: boolean;
  }

  /**
   * 应用联网策略信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export interface NetAccessPolicy {
    /**
     * 是否允许使用Wi-Fi网络上网。
     * 
     * true：允许使用Wi-Fi网络上网。
     * 
     * false： 不允许使用Wi-Fi网络上网。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowWiFi: boolean;
    /**
     * 是否允许使用蜂窝网络上网。
     * 
     * true：允许使用蜂窝网络上网。
     * 
     * false： 不允许使用蜂窝网络上网。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    allowCellular: boolean;
  }

  /**
   * 应用标识以及对应应用连接网络的策略。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  export interface UidNetworkAccessPolicy {
    /**
     * 数据类型为键值对。
     *
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    [uid: string]: NetworkAccessPolicy;
  }
}

export default policy;