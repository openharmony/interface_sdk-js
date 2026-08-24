/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file eSIM卡管理
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * eSIM卡管理模块提供了eSIM卡管理的基础能力，包括获取指定卡槽是否支持eSIM功能，如果支持则允许用户添加单个配置文件。
 *
 * @syscap SystemCapability.Telephony.CoreService.Esim
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace eSIM {
  /**
   * 获取指定卡槽是否支持eSIM功能。
   *
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { boolean } 返回指定卡槽是否支持eSIM功能，如果支持返回true，不支持返回false。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 18 dynamic
   * @since 23 static
   */
  function isSupported(slotId: int): boolean;

  /**
   * 通过该接口拉起下载界面，允许用户添加单个配置文件。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE_OPEN
   * @param { DownloadableProfile } profile - 可下载的配置文件信息。
   * @returns { Promise<boolean> } 以Promise形式返回最终用户添加单个配置文件的结果。返回true为成功，false为失败。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 18 dynamic
   * @since 23 static
   */
  function addProfile(profile: DownloadableProfile): Promise<boolean>;

  /**
   * 获取指定卡槽标识eUICC硬件的EID(Equipment Identifier，Embedded SIM识别码)。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<string> } 返回指定卡槽标识eUICC硬件的EID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getEid(slotId: int): Promise<string>;

  /**
   * 获取指定卡槽操作系统升级的状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<OsuStatus> } Promise对象，返回操作系统升级的状态。<br/> 1. 正在升级。 <br/>   2. 升级失败。<br/>  3. 升级成功。<br/>  4. 当前版本是
   *     最新版本。<br/> 5. 升级服务不可用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getOsuStatus(slotId: int): Promise<OsuStatus>;

  /**
   * 如果指定卡槽的操作系统不是最新的，则执行操作系统升级。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<OsuStatus> } Promise对象，返回操作系统升级的状态。<br/> 1. 正在升级。 <br/>   2. 升级失败。<br/>  3. 升级成功。<br/>  4. 当前版本是
   *     最新版本。<br/> 5. 升级服务不可用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function startOsu(slotId: int): Promise<OsuStatus>;

  /**
   * 填充可下载配置文件的元数据。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { int } portIndex - 插槽的端口索引。
   * @param { DownloadableProfile } profile - 可下载的配置文件信息。
   * @param { boolean } forceDisableProfile - 是否可直接去激活配置文件。true表示切换配置文件时，如果需要去激活当前的配置文件，则可以直接操作。false表示如果需要去激活当前的配置文件，则会
   *     返回错误，并得到用户授权后再继续调用该接口，执行切换配置文件操作。
   * @returns { Promise<GetDownloadableProfileMetadataResult> } Promise对象，返回填充可下载配置文件的元数据。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getDownloadableProfileMetadata(slotId: int, portIndex: int,
                                          profile: DownloadableProfile, forceDisableProfile: boolean): Promise<GetDownloadableProfileMetadataResult>;

  /**
   * 获取可用的可下载配置文件列表。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { int } portIndex - 插槽的端口索引。
   * @param { boolean } forceDisableProfile - 是否可直接去激活配置文件。true表示切换配置文件时，如果需要去激活当前的配置文件，则可以直接操作。false表示如果需要去激活当前的配置文件，则会
   *     返回错误，并得到用户授权后再继续调用该接口，执行切换配置文件操作。
   * @returns { Promise<GetDownloadableProfilesResult> } Promise对象，返回可下载配置文件列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getDownloadableProfiles(slotId: int, portIndex: int,
                                   forceDisableProfile: boolean): Promise<GetDownloadableProfilesResult>;

  /**
   * 下载配置文件。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { int } portIndex - 插槽的端口索引。
   * @param { DownloadableProfile } profile - 可下载的配置文件信息。
   * @param { DownloadConfiguration } configuration - 下载的配置信息。
   * @returns { Promise<DownloadProfileResult> } Promise对象，返回下载配置文件的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function downloadProfile(slotId: int, portIndex: int, profile: DownloadableProfile,
                           configuration: DownloadConfiguration): Promise<DownloadProfileResult>;

  /**
   * 获取配置文件信息列表。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<GetEuiccProfileInfoListResult> } Promise对象，返回配置文件信息列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getEuiccProfileInfoList(slotId: int): Promise<GetEuiccProfileInfoListResult>;

  /**
   * 获取eUICC信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<EuiccInfo> } Promise对象，返回eUicc信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getEuiccInfo(slotId: int): Promise<EuiccInfo>;

  /**
   * 删除配置文件。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { string } iccid - 配置文件的ID。
   * @returns { Promise<ResultCode> } Promise对象，返回删除配置文件的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function deleteProfile(slotId: int, iccid: string): Promise<ResultCode>;

  /**
   * 切换到(启用)给定的配置文件。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { int } portIndex - 插槽的端口索引。
   * @param { string } iccid - 配置文件的ID。
   * @param { boolean } forceDisableProfile - 是否可直接去激活配置文件。true表示切换配置文件时，如果需要去激活当前的配置文件，则可以直接操作。false表示如果需要去激活当前的配置文件，则会
   *     返回错误，并得到用户授权后再继续调用该接口，执行切换配置文件操作。
   * @returns { Promise<ResultCode> } Promise对象，返回切换配置文件的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function switchToProfile(slotId: int, portIndex: int, iccid: string,
                           forceDisableProfile: boolean): Promise<ResultCode>;

  /**
   * 设置给定配置文件的昵称。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { string } iccid - 配置文件的ID。
   * @param { string } nickname - 昵称。
   * @returns { Promise<ResultCode> } Promise对象，返回设置昵称的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setProfileNickname(slotId: int, iccid: string, nickname: string): Promise<ResultCode>;

  /**
   * 清除所有特定配置文件并重置eUICC。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { ResetOption } [options] - 重置状态。
   * @returns { Promise<ResultCode> } Promise对象，返回重置的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function resetMemory(slotId: int, options?:ResetOption): Promise<ResultCode>;

  /**
   * 恢复出厂设置，并保留profiles。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<ResultCode> } Promise对象，返回恢复出厂设置的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function reserveProfilesForFactoryRestore(slotId: int): Promise<ResultCode>;

  /**
   * 设置或更新eUICC中存储的默认SM-DP+地址。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { string } address - 要设置的默认SM-DP+地址。
   * @returns { Promise<ResultCode> } Promise对象，返回设置默认SM-DP+地址的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setDefaultSmdpAddress(slotId: int, address: string): Promise<ResultCode>;

  /**
   * 获取存储在eUICC中的默认SM-DP+地址。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<string> } Promise对象，返回SM-DP+地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getDefaultSmdpAddress(slotId: int): Promise<string>;

  /**
   * 取消会话。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { string } transactionId - 业务ID。
   * @param { CancelReason } cancelReason - 取消会话的原因。
   * @returns { Promise<ResultCode> } Promise对象，返回取消会话的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function cancelSession(slotId: int, transactionId: string, cancelReason: CancelReason): Promise<ResultCode>;

  /**
   * 获取开通eSIM需要的，加密的esim id等信息。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { ContractRequestData } requestData - 用来加密的信息。
   * @returns { Promise<string> } Promise对象，返回TLV(Tag-Length-Value)格式的，加密信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getContractInfo(slotId: int, requestData: ContractRequestData) : Promise<string>;

  /**
   * 获取手机支持的公钥ID信息。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<string> } Promise对象，返回TLV(Tag-Length-Value)格式的，手机支持的公钥ID信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getSupportedPkids(slotId: int) : Promise<string>;

  /**
   * 加密需要的信息。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ContractRequestData {
    /**
      * 公钥。
      *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    publicKey: string;

    /**
      * 随机数。
      *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    nonce: string;

    /**
      * 选择的公钥ID。
      *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    pkid: string;
  }

  /**
   * 访问规则。
   *
   * @interface AccessRule
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18
   */
  /**
   * 访问规则。
   *
   * @interface AccessRule
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 20 dynamic
   * @since 23 static
   */
  export interface AccessRule {
    /**
     * 证书哈希的十六进制字符串。
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18
     */
    /**
     * 证书哈希的十六进制字符串。
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 20 dynamic
     * @since 23 static
     */
    certificateHashHexStr: string;

    /**
     * 规则适用的程序包名称。
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18
     */
    /**
     * 规则适用的程序包名称。
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 20 dynamic
     * @since 23 static
     */
    packageName: string;

    /**
     * 规则的类型。
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18
     */
    /**
     * 规则的类型。
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 20 dynamic
     * @since 23 static
     */
    accessType: int;
  }

  /**
   * 可下载的配置文件。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 18 dynamic
   * @since 23 static
   */
  export interface DownloadableProfile {
    /**
     * 激活码。对于不基于激活码的配置文件，可能为空。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    activationCode: string;

    /**
     * 确认码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    confirmationCode?: string;

    /**
     * 订阅名称。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    carrierName?: string;

    /**
     * 访问规则数组。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    accessRules?: Array<AccessRule>;
  }

  /**
   * 获取可下载配置文件的元数据。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GetDownloadableProfileMetadataResult {
    /**
     * 可下载的配置文件信息。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    downloadableProfile: DownloadableProfile;

    /**
     * 配置文件策略规则类型。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    pprType: int;

    /**
     * 配置文件是否有策略规则。true表示有策略规则，false表示无策略规则。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    pprFlag: boolean;

    /**
     * 配置文件的iccId。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    iccid: string;

    /**
     * 配置文件的服务提供商名称。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    serviceProviderName: string;

    /**
     * 配置文件名称。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileName: string;

    /**
     * 配置文件类。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileClass: ProfileClass;

    /**
     * 可解决的错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    solvableErrors: SolvableErrors;

    /**
     * 操作结果码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;
  }

  /**
   * 获取默认可下载配置文件的列表。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GetDownloadableProfilesResult {
    /**
     * 返回操作结果码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;

    /**
     * 可下载配置文件数组。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    downloadableProfiles: Array<DownloadableProfile>;
  }

  /**
   * 下载配置文件的结果。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface DownloadProfileResult {
    /**
     * 操作结果码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;

    /**
     * 可解决的错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    solvableErrors: SolvableErrors;

    /**
     * 获取卡ID。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    cardId: int;
  }

  /**
   * 获取配置文件信息列表。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GetEuiccProfileInfoListResult {
    /**
     * 返回操作结果码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;

    /**
     * 配置文件数组。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profiles: Array<EuiccProfile>;

    /**
     * eUICC是否可移除。true表示可移除，false表示不可移除。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    isRemovable: boolean;
  }

  /**
   * 获取eUICC芯片/设备的相关信息。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface OperatorId {
    /**
     * 移动国家代码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * 网络代码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    mnc: string;

    /**
     * 组ID级别1。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    gid1: string;

    /**
     * 组ID级别2。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    gid2: string;
  }

  /**
   * 配置文件信息。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface EuiccProfile {
    /**
     * 配置文件的iccId。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    iccid: string;

    /**
     * 昵称。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    nickName: string;

    /**
     * 配置文件的服务提供商名称。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    serviceProviderName: string;

    /**
     * 配置文件名称。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileName: string;

    /**
     * 配置文件的状态。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    state: ProfileState;

    /**
     * 配置文件类。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileClass: ProfileClass;

    /**
     * 配置文件的操作ID。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    operatorId: OperatorId;

    /**
     * 配置文件策略。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    policyRules: PolicyRules;

    /**
     * 配置文件规则。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    accessRules: Array<AccessRule>;
  }

  /**
   * euicc信息。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface EuiccInfo {
    /**
     * 系统版本。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    osVersion: string;
  }

  /**
   * 重置状态。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ResetOption {
    /**
     * 删除所有操作配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    DELETE_OPERATIONAL_PROFILES = 1,

    /**
     * 删除所有字段加载的测试配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    DELETE_FIELD_LOADED_TEST_PROFILES = 1 << 1,

    /**
     * 重置默认SM-DP+地址。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESET_DEFAULT_SMDP_ADDRESS = 1 << 2
  }

  /**
   * 操作系统升级状态。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum OsuStatus {
    /**
     * 升级中。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_IN_PROGRESS = 1,

    /**
     * 升级失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_FAILED = 2,

    /**
     * 升级成功。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_SUCCESSFUL = 3,

    /**
     * 当前为最新版本，无需升级 。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_ALREADY_LATEST = 4,

    /**
     * 升级服务不可用。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_SERVICE_UNAVAILABLE = 5
  }

  /**
   * 结果码。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ResultCode {
    /**
     * 用户必须解决可解决的错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SOLVABLE_ERRORS = -2,

    /**
     * 必须禁用活动配置文件才能执行操作。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_MUST_DISABLE_PROFILE = -1,

    /**
     * 成功。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_OK = 0,

    /**
     * 获取EID失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_GET_EID_FAILED = 201,

    /**
     * 最终用户确认后，激活码将被更改。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ACTIVATION_CODE_CHANGED = 203,

    /**
     * 激活码无效。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ACTIVATION_CODE_INVALID = 204,

    /**
     * SM-DP+服务器地址非法。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SMDP_ADDRESS_INVALID = 205,

    /**
     * 无效的eUICC信息。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_EUICC_INFO_INVALID = 206,

    /**
     * TLS握手失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_TLS_HANDSHAKE_FAILED = 207,

    /**
     * 证书网络连接错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CERTIFICATE_IO_ERROR = 208,

    /**
     * 证书地址无效或响应超时。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CERTIFICATE_RESPONSE_TIMEOUT = 209,

    /**
     * 鉴权失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_AUTHENTICATION_FAILED = 210,

    /**
     * HTTP响应失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_RESPONSE_HTTP_FAILED = 211,

    /**
     * 确认码不正确。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CONFIRMATION_CODE_INCORRECT = 212,

    /**
     * 已达到最大确认码尝试次数。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_EXCEEDED_CONFIRMATION_CODE_TRY_LIMIT = 213,

    /**
     * 服务器上没有可供下载的配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_NO_PROFILE_ON_SERVER = 214,

    /**
     * 事务ID无效。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_TRANSACTION_ID_INVALID = 215,

    /**
     * 服务器地址无效。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SERVER_ADDRESS_INVALID = 216,

    /**
     * 获取BPP失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_GET_BOUND_PROFILE_PACKAGE_FAILED = 217,

    /**
     * 最终用户取消下载。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_USER_CANCEL_DOWNLOAD = 218,

    /**
     * 运营商服务器不可用。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SERVER_UNAVAILABLE = 220,

    /**
     * PPR禁止删除文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PROFILE_NON_DELETE = 223,

    /**
     * 认证响应服务器地址不匹配。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SMDP_ADDRESS_INCORRECT = 226,

    /**
     * 解析服务器身份验证响应错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ANALYZE_AUTHENTICATION_SERVER_RESPONSE_FAILED = 228,

    /**
     * 解析客户端身份验证响应错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ANALYZE_AUTHENTICATION_CLIENT_RESPONSE_FAILED = 229,

    /**
     * 由于匹配ID被拒绝，解析客户端身份验证响应错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ANALYZE_AUTHENTICATION_CLIENT_MATCHING_ID_REFUSED = 231,

    /**
     * 由于配置文件类型中的错误，身份验证已停止。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PROFILE_TYPE_ERROR_AUTHENTICATION_STOPPED = 233,

    /**
     * 运营商服务器拒绝原因码为3.8的错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CARRIER_SERVER_REFUSED_ERRORS = 249,

    /**
     * 证书无效。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CERTIFICATE_INVALID = 251,

    /**
     * 由于内存不足，配置文件安装失败。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_OUT_OF_MEMORY = 263,

    /**
     * PPR规则禁止此操作。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PPR_FORBIDDEN = 268,

    /**
     * 没有可删除的配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_NOTHING_TO_DELETE = 270,

    /**
     * 与PPR约束不匹配。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PPR_NOT_MATCH = 276,

    /**
     * 会话正在进行。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CAT_BUSY = 283,

    /**
     * 此eSIM配置文件已被使用或无效。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PROFILE_EID_INVALID = 284,

    /**
     * 下载超时。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_DOWNLOAD_TIMEOUT = 287,

    /**
     * SGP.22中定义的其他错误。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SGP_22_OTHER = 400
  }

  /**
   * 取消会话的原因。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CancelReason {
    /**
     * 最终用户已拒绝下载。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_END_USER_REJECTION = 0,

    /**
     * 下载已推迟，稍后可以重新启动。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_POSTPONED = 1,

    /**
     * 下载已超时，稍后可以重新启动。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_TIMEOUT = 2,

    /**
     * 由于eUICC上的授权表或其他已安装的配置文件不允许其策略规则，因此无法安装。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_PPR_NOT_ALLOWED = 3
  }

  /**
   * 配置文件状态。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ProfileState {
    /**
     * 未设置配置文件状态。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_STATE_UNSPECIFIED = -1,

    /**
     * 禁用配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_STATE_DISABLED = 0,

    /**
     * 已启用配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_STATE_ENABLED = 1
  }

  /**
   * 配置文件类。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ProfileClass {
    /**
     * 未设置配置文件类。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_UNSPECIFIED = -1,

    /**
     * 测试配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_TEST = 0,

    /**
     * 预加载在eUICC上的配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_PROVISIONING = 1,

    /**
     * 可预加载或下载的操作配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_OPERATIONAL = 2
  }

  /**
   * 配置文件的策略规则。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum PolicyRules {
    /**
     * 启用此配置文件后，将无法禁用。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    POLICY_RULE_DISABLE_NOT_ALLOWED = 1,

    /**
     * 无法删除此配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    POLICY_RULE_DELETE_NOT_ALLOWED = 1 << 1,

    /**
     * 禁用后应删除此配置文件。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    POLICY_RULE_DISABLE_AND_DELETE = 1 << 2
  }

  /**
   * 可解决错误码。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum SolvableErrors {
    /**
     * 下载过程需要用户输入确认码。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    SOLVABLE_ERROR_NEED_CONFIRMATION_CODE = 1 << 0,

    /**
     * 下载过程需要用户同意才能允许配置文件策略规则。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    SOLVABLE_ERROR_NEED_POLICY_RULE = 1 << 1
  }

  /**
   * 下载过程中的属性配置。
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface DownloadConfiguration {
    /**
     * 下载成功后是否启用配置文件。true表示启用，false表示不启用。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    switchAfterDownload: boolean;

    /**
     * 是否可直接去激活配置文件。true表示切换配置文件时，如果需要去激活当前的配置文件，则可以直接操作。false表示如果需要去激活当前的配置文件，则会返回错误，并得到用户授权后再继续调用该接口，执行切换配置文件操作。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    forceDisableProfile: boolean;

    /**
     * 是否得到用户授权。true表示得到用户授权，服务提供商可实施配置文件策略规则；false表示未得到用户授权，不允许实施配置文件策略规则。
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    isPprAllowed: boolean;
  }

  /**
   * 通过该接口获取eUICC硬件的剩余存储空间。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @returns { Promise<int> } Promise对象，返回eUICC硬件的剩余存储空间，以KB为单位。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function getEsimFreeStorage(): Promise<int>;
}

export default eSIM;