/*
 * Copyright (C) 2021-2024 Huawei Device Co., Ltd.
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
 * @file 蜂窝数据
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';
import Context from './application/Context';

/**
 * 蜂窝数据提供了移动数据管理能力，包括获取默认移动数据的SIM卡、获取蜂窝数据业务的上下行数据流状态、蜂窝数据业务链路连接状态，以及检查蜂窝数据业务和漫游是否启用等。
 *
 * @syscap SystemCapability.Telephony.CellularData
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace data {
  /**
   * 获取默认移动数据的SIM卡，使用callback方式作为异步方法。
   *
   * @param { AsyncCallback<int> } callback - 以callback形式异步返回结果。<br />- 0：卡槽1。 <br />- 1：卡槽2。<br />- 2：esim和天际通场景下，默认移动数
   *     据的slotId为2。
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSlotId(callback: AsyncCallback<int>): void;

  /**
   * 获取默认移动数据的SIM卡，使用Promise方式作为异步方法。
   *
   * @returns { Promise<int> } 以Promise形式返回获取默认移动数据的SIM卡。<br />- 0：卡槽1。 <br />- 1：卡槽2。<br />- 2：esim和天际通场景下，默认移动数据的
   *     slotId为2。
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSlotId(): Promise<int>;

  /**
   * 获取默认移动数据的SIM卡。
   *
   * @returns { int } 获取默认移动数据的SIM卡。<br />- 0：卡槽1。 <br />- 1：卡槽2。<br />- 2：esim和天际通场景下，默认移动数据的slotId为2。
   * @syscap SystemCapability.Telephony.CellularData
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSlotIdSync(): int;

  /**
   * 设置默认移动数据的SIM卡，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID。<br/>- 0：卡槽1。 <br/>- 1：卡槽2。
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultCellularDataSlotId(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * 设置默认移动数据的SIM卡，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID。<br/>- 0：卡槽1。 <br/>- 1：卡槽2。
   * @returns { Promise<void> } 以Promise形式异步返回设置结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultCellularDataSlotId(slotId: int): Promise<void>;

  /**
   * 获取蜂窝网络的数据流类型（对应信号栏旁边的上下行箭头），使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO [since 22]
   * @param { AsyncCallback<DataFlowType> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied. [since 22]
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void;

  /**
   * 获取蜂窝网络的数据流类型（对应信号栏旁边的上下行箭头），使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO [since 22]
   * @returns { Promise<DataFlowType> } 以Promise形式返回蜂窝网络的数据流类型（对应信号栏旁边的上下行箭头）。
   * @throws { BusinessError } 201 - Permission denied. [since 22]
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getCellularDataFlowType(): Promise<DataFlowType>;

  /**
   * 获取蜂窝数据业务的连接状态，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO [since 22]
   * @param { AsyncCallback<DataConnectState> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied. [since 22]
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getCellularDataState(callback: AsyncCallback<DataConnectState>): void;

  /**
   * 获取蜂窝数据业务的连接状态，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO [since 22]
   * @returns { Promise<DataConnectState> } 以Promise形式返回获取PS域的连接状态。
   * @throws { BusinessError } 201 - Permission denied. [since 22]
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function getCellularDataState(): Promise<DataConnectState>;

  /**
   * 检查蜂窝数据业务是否启用，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { AsyncCallback<boolean> } callback - 以callback形式异步返回结果。<br />true：蜂窝数据业务已启用。<br />false：蜂窝数据业务已禁用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * 检查蜂窝数据业务是否启用，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<boolean> } 以Promise形式返回检查蜂窝数据业务是否启用。<br />true：蜂窝数据业务已启用。<br />false：蜂窝数据业务已禁用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataEnabled(): Promise<boolean>;

  /**
   * 检查蜂窝数据业务是否启用，调用此API返回结果。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { boolean } 用来返回检查蜂窝数据业务是否启用。<br />true：蜂窝数据业务已启用。<br />false：蜂窝数据业务已禁用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 12 dynamic
   * @since 23 static
   */
  function isCellularDataEnabledSync(): boolean;

  /**
   * 启用蜂窝数据服务，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularData(callback: AsyncCallback<void>): void;

  /**
   * 启用蜂窝数据服务，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } 以Promise形式返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularData(): Promise<void>;

  /**
   * 禁用蜂窝数据服务，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularData(callback: AsyncCallback<void>): void;

  /**
   * 禁用蜂窝数据服务，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } 以Promise形式返回禁用结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularData(): Promise<void>;

  /**
   * 检查蜂窝数据业务是否启用漫游，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - 卡槽ID。<br />- 0：卡槽1。<br />- 1：卡槽2。
   * @param { AsyncCallback<boolean> } callback - 以callback形式异步返回结果。<br />true：蜂窝数据业务已启用漫游。<br />false：蜂窝数据业务已禁用漫游。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataRoamingEnabled(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * 检查蜂窝数据业务是否启用漫游，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - 卡槽ID。<br />- 0：卡槽1。<br />- 1：卡槽2。
   * @returns { Promise<boolean> } 以Promise形式返回检查蜂窝数据业务是否启用漫游。<br />true：蜂窝数据业务已启用漫游。<br />false：蜂窝数据业务已禁用漫游。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  function isCellularDataRoamingEnabled(slotId: int): Promise<boolean>;

  /**
   * 检查蜂窝数据业务是否启用漫游，调用此API返回结果。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { int } slotId - 卡槽ID。<br />- 0：卡槽1。<br />- 1：卡槽2。
   * @returns { boolean } 用来返回检查蜂窝数据业务是否启用漫游。<br />true：蜂窝数据业务已启用漫游。<br />false：蜂窝数据业务已禁用漫游。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 12 dynamic
   * @since 23 static
   */
  function isCellularDataRoamingEnabledSync(slotId: int): boolean;

  /**
   * 启用蜂窝数据漫游，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。 <br/>- 1：卡槽2。
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularDataRoaming(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * 启用蜂窝数据漫游，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。 <br/>- 1：卡槽2。
   * @returns { Promise<void> } 以Promise形式返回启用结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function enableCellularDataRoaming(slotId: int): Promise<void>;

  /**
   * 禁用蜂窝数据漫游，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。 <br/>- 1：卡槽2。
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularDataRoaming(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * 禁用蜂窝数据漫游，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。 <br/>- 1：卡槽2。
   * @returns { Promise<void> } 以Promise形式返回禁用结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CellularData
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function disableCellularDataRoaming(slotId: int): Promise<void>;

  /**
   * 获取默认移动数据的SIM卡ID。
   *
   * @returns { int } 获取默认移动数据的SIM卡ID。<br/>与SIM卡绑定，从1开始递增。<br/>- 0：无SIM卡。<br/>- 9999：esim场景下，默认移动数据的SIM卡ID为9999。<br/>- 9
   *     9999：天际通场景下，默认移动数据的SIM卡ID为99999。
   * @syscap SystemCapability.Telephony.CellularData
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultCellularDataSimId(): int;

  /**
   * 异步获取默认移动数据的SIM卡的APN（access point name，接入点名称）信息。
   *
   * @permission ohos.permission.MANAGE_APN_SETTING
   * @returns { Promise<Array<ApnInfo>> } Promise对象，返回默认移动数据的SIM卡的APN信息列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  function queryAllApns(): Promise<Array<ApnInfo>>;

  /**
   * 异步获取默认移动数据SIM卡对应的处于激活状态的数据业务APN（access point name，接入点名称）name信息，若不处于激活状态，返回为空字符串。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @returns { Promise<string> } Promise对象，返回默认移动数据SIM卡对应的处于激活状态的数据业务APN name信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 20 dynamic
   * @since 23 static
   */
  function getActiveApnName(): Promise<string>;

  /**
   * 异步获取传入的ApnInfo对应的ApnId信息。
   *
   * @permission ohos.permission.MANAGE_APN_SETTING
   * @param { ApnInfo } apnInfo - 要查询的APN参数。
   * @returns { Promise<Array<int>> } Promise对象，返回传入的ApnInfo对应的ApnId信息列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  function queryApnIds(apnInfo: ApnInfo): Promise<Array<int>>;

  /**
   * 异步设置apnId对应的APN为首选APN。
   * 
   * > 注意:
   * >
   * > 如果传入的apnId为无效的apnId，切回运营商默认配置的优选Apn。
   *
   * @permission ohos.permission.MANAGE_APN_SETTING
   * @param { int } apnId - 要设置的apnId，可以通过[queryApnIds]{@link data.queryApnIds}查询。
   * @returns { Promise<boolean> } Promise对象，返回设置的结果，在未插卡时会返回false。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  function setPreferredApn(apnId: int): Promise<boolean>;

  /**
   * 打开当前默认移动数据卡对应的APN配置界面。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 该接口仅支持查看和选择当前已添加的通用APN，不支持新建或修改。
   * >
   * > - 若未插入SIM卡或设备不支持APN配置，将无法打开该配置界面。
   *
   * @param { Context } context - Stage模型的应用上下文（仅支持UIAbilityContext和ExtensionContext）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Telephony.CellularData
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function showSystemApnSettings(context: Context): Promise<void>;

  /**
   * APN信息。
   *
   * @syscap SystemCapability.Telephony.CellularData
   * @since 16 dynamic
   * @since 23 static
   */
  interface ApnInfo {
    /**
     * APN名称。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    apnName: string;
    /**
     * APN。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    apn: string;
    /**
     * Sim卡的mcc。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    mcc: string;
    /**
     * Sim卡的mnc。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    mnc: string;
    /**
     * 用户名。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    user?: string;
    /**
     * APN类型。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    type?: string;
    /**
     * 代理地址。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    proxy?: string;
    /**
     * 彩信代理。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 16 dynamic
     * @since 23 static
     */
    mmsproxy?: string;
  }

  /**
   * 描述蜂窝数据流类型。
   *
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DataFlowType {
    /**
     * 表示没有上行或下行数据。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_NONE = 0,

    /**
     * 表示只有下行数据。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_DOWN = 1,

    /**
     * 表示只有上行数据。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_UP = 2,

    /**
     * 表示有上下行数据。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_UP_DOWN = 3,

    /**
     * 表示没有上下行数据，底层链路处于休眠状态。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_FLOW_TYPE_DORMANT = 4
  }

  /**
   * 描述蜂窝数据链路连接状态。
   *
   * @syscap SystemCapability.Telephony.CellularData
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DataConnectState {
    /**
     * 表示蜂窝数据链路未知。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_UNKNOWN = -1,

    /**
     * 表示蜂窝数据链路断开。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_DISCONNECTED = 0,

    /**
     * 表示正在连接蜂窝数据链路。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_CONNECTING = 1,

    /**
     * 表示蜂窝数据链路已连接。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_CONNECTED = 2,

    /**
     * 表示蜂窝数据链路被挂起。
     *
     * @syscap SystemCapability.Telephony.CellularData
     * @since 7 dynamic
     * @since 23 static
     */
    DATA_STATE_SUSPENDED = 3
  }
}

export default data;