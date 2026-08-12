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
 * @file 电话服务状态监听
 * @kit TelephonyKit
 */

import type { Callback } from './@ohos.base';
import type radio from './@ohos.telephony.radio';
import type data from './@ohos.telephony.data';
import type call from './@ohos.telephony.call';
import type sim from './@ohos.telephony.sim';

/**
 * 本模块提供订阅管理功能，可以订阅/取消订阅的事件包括：网络状态变化、信号状态变化、通话状态变化、蜂窝数据链路连接状态、蜂窝数据业务的上下行数据流状态、SIM状态变化。
 *
 * @syscap SystemCapability.Telephony.StateRegistry
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace observer {
  /**
   * 网络注册状态。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type NetworkState = radio.NetworkState;

  /**
   * 网络信号强度信息对象。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type SignalInformation = radio.SignalInformation;

  /**
   * Describes current cell information.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  type CellInformation = radio.CellInformation;

  /**
   * 描述蜂窝数据链路连接状态。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type DataConnectState = data.DataConnectState;

  /**
   * 无线接入技术。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type RatType = radio.RadioTechnology;

  /**
   * 描述蜂窝数据流类型。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type DataFlowType = data.DataFlowType;

  /**
   * 通话状态码。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type CallState = call.CallState;

  /**
   * 卡类型。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type CardType = sim.CardType;

  /**
   * SIM卡状态。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   * @since 23 static
   */
  type SimState = sim.SimState;

  /**
   * 通话状态码。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   * @since 23 static
   */
  type TelCallState = call.TelCallState;

  /**
   * 运营商通话状态码。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 dynamic&static
   */
  type CCallState = call.CCallState;

  /**
   * Callback when the network state corresponding to the default sim card is updated.
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  type NetworkSearchRealTimeResult = radio.NetworkSearchRealTimeResult;

  /**
   * 订阅网络状态变化事件，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - 网络状态变化事件，参数固定为'networkStateChange'。
   * @param { Callback<NetworkState> } callback - 回调函数，返回网络状态对象。参考radio的
   *     [NetworkState]{@link @ohos.telephony.radio:radio.NetworkState}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'networkStateChange', callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<NetworkState> } callback - Indicates the callback for
   *     getting an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onNetworkStateChange(callback: Callback<NetworkState>): void;

  /**
   * 订阅指定卡槽位的网络状态变化事件，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { 'networkStateChange' } type - 网络状态变化事件，参数固定为'networkStateChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<NetworkState> } callback - 回调函数，返回网络状态对象。参考radio的
   *     [NetworkState]{@link @ohos.telephony.radio:radio.NetworkState}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'networkStateChange', options: ObserverOptions, callback: Callback<NetworkState>): void;

  /**
   * Callback when the network state corresponding to the monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<NetworkState> } callback - Indicates the callback for getting
   *     an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onNetworkStateChange(options: ObserverOptions, callback: Callback<NetworkState>): void;

  /**
   * 取消订阅网络状态变化事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'networkStateChange' } type - 网络状态变化事件，参数固定为'networkStateChange'。
   * @param { Callback<NetworkState> } callback - 回调函数，返回网络状态对象。参考radio的
   *     [NetworkState]{@link @ohos.telephony.radio:radio.NetworkState}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function off(type: 'networkStateChange', callback?: Callback<NetworkState>): void;

  /**
   * Cancel callback when the network state is updated.
   *
   * @param { Callback<NetworkState> } [callback] - Indicates the callback for getting
   *     an instance of the {@code NetworkState} class.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offNetworkStateChange(callback?: Callback<NetworkState>): void;

  /**
   * 订阅信号状态变化事件，使用callback方式作为异步方法。
   *
   * @param { 'signalInfoChange' } type - 信号状态变化事件，参数固定为'signalInfoChange'。
   * @param { Callback<Array<SignalInformation>> } callback - 回调函数，返回信号强度对象。参考radio的
   *     [SignalInformation]{@link @ohos.telephony.radio:radio.SignalInformation}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'signalInfoChange', callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to the default sim card is updated.
   *
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSignalInfoChange(callback: Callback<Array<SignalInformation>>): void;

  /**
   * 订阅指定卡槽位的信号状态变化事件，使用callback方式作为异步方法。
   *
   * @param { 'signalInfoChange' } type - 信号状态变化事件，参数固定为'signalInfoChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<Array<SignalInformation>> } callback - 回调函数，返回信号强度对象。参考radio的
   *     [SignalInformation]{@link @ohos.telephony.radio:radio.SignalInformation}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'signalInfoChange', options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void;

  /**
   * Callback when the signal strength corresponding to a monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<SignalInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link SignalInformation}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSignalInfoChange(options: ObserverOptions, callback: Callback<Array<SignalInformation>>): void;

  /**
   * 取消订阅信号状态变化事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'signalInfoChange' } type - 信号状态变化事件，参数固定为'signalInfoChange'。
   * @param { Callback<Array<SignalInformation>> } callback - 回调函数，返回信号强度对象。参考radio的
   *     [SignalInformation]{@link @ohos.telephony.radio:radio.SignalInformation}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function off(type: 'signalInfoChange', callback?: Callback<Array<SignalInformation>>): void;

  /**
   * Cancel callback when the signal strength is updated.
   *
   * @param { Callback<Array<SignalInformation>> } [callback] - Indicates the callback to unsubscribe from
   *     the signalInfoChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offSignalInfoChange(callback?: Callback<Array<SignalInformation>>): void;

  /**
   * 订阅小区信息变化事件，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - 小区信息变化事件，固定为'cellInfoChange'。
   * @param { Callback<Array<CellInformation>> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to the default sim card is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCellInfoChange(callback: Callback<Array<CellInformation>>): void;

  /**
   * 订阅指定卡槽位的小区信息变化事件，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cellInfoChange' } type - 小区信息变化事件，固定为'cellInfoChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<Array<CellInformation>> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void;

  /**
   * Callback when the cell information corresponding to a monitored {@code slotId} is updated.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<Array<CellInformation>> } callback - Indicates the callback for getting
   *     an array of instances of the classes derived from {@link CellInformation}.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCellInfoChange(options: ObserverOptions, callback: Callback<Array<CellInformation>>): void;

  /**
   * 取消订阅小区信息变化事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'cellInfoChange' } type - 小区信息变化事件，固定为'cellInfoChange'。
   * @param { Callback<Array<CellInformation>> } callback - 以callback形式异步返回结果。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'cellInfoChange', callback?: Callback<Array<CellInformation>>): void;

  /**
   * Cancel callback when the cell information is updated.
   *
   * @param { Callback<Array<CellInformation>> } [callback] - Indicates the callback to unsubscribe from
   *     the cellInfoChange event.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offCellInfoChange(callback?: Callback<Array<CellInformation>>): void;

  /**
   * 订阅蜂窝数据链路连接状态，使用callback方式作为异步方法。
   *
   * @param { 'cellularDataConnectionStateChange' } type - 蜂窝数据链路连接状态事件，参数固定为'cellularDataConnectionStateChange'。
   * @param { Callback<DataConnectionStateInfo> } callback - 回调函数，返回蜂窝数据链路连接状态信息对象。参考data的
   *     [DataConnectState]{@link @ohos.telephony.data:data.DataConnectState}，radio的
   *     [RadioTechnology]{@link @ohos.telephony.radio:radio.RadioTechnology}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataConnectionStateChange', callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the default sim card is updated.
   *
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   *     getting the cellular data link connection state, and networkType Indicates the radio access technology
   *     for cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataConnectionStateChange(callback: Callback<DataConnectionStateInfo>): void;

  /**
   * 订阅指定卡槽位的蜂窝数据链路连接状态，使用callback方式作为异步方法。
   *
   * @param { 'cellularDataConnectionStateChange' } type - 蜂窝数据链路连接状态事件，参数固定为'cellularDataConnectionStateChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<DataConnectionStateInfo> } callback - 回调函数，返回蜂窝数据链路连接状态信息对象。参考data的
   *     [DataConnectState]{@link @ohos.telephony.data:data.DataConnectState}，radio的
   *     [RadioTechnology]{@link @ohos.telephony.radio:radio.RadioTechnology}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataConnectionStateChange', options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void;

  /**
   * Callback when the cellular data link connection state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataConnectionStateInfo> } callback - Indicates the callback for
   *     getting the cellular data link connection state, and networkType Indicates the radio access technology for
   *     cellular data services.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataConnectionStateChange(options: ObserverOptions,
              callback: Callback<DataConnectionStateInfo>): void;

  /**
   * 移除订阅蜂窝数据链路连接状态，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'cellularDataConnectionStateChange' } type - 蜂窝数据链路连接状态事件，参数固定为'cellularDataConnectionStateChange'。
   * @param { Callback<DataConnectionStateInfo> } callback - 回调函数，返回蜂窝数据链路连接状态信息对象。参考data的
   *     [DataConnectState]{@link @ohos.telephony.data:data.DataConnectState}，radio的
   *     [RadioTechnology]{@link @ohos.telephony.radio:radio.RadioTechnology}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function off(type: 'cellularDataConnectionStateChange', callback?: Callback<DataConnectionStateInfo>): void;

  /**
   * Cancel callback when the cellular data link connection state is updated.
   *
   * @param { Callback<DataConnectionStateInfo> } [callback] - Indicates the callback to unsubscribe
   *     from the cellularDataConnectionStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCellularDataConnectionStateChange(callback?: Callback<DataConnectionStateInfo>): void;

  /**
   * 订阅蜂窝数据业务的上下行数据流状态，使用callback方式作为异步方法。
   *
   * @param { 'cellularDataFlowChange' } type - 蜂窝数据业务的上下行数据流状态事件，参数固定为'cellularDataFlowChange'。
   * @param { Callback<DataFlowType> } callback - 回调函数，返回数据流状态对象。参考data的
   *     [DataFlowType]{@link @ohos.telephony.data:data.DataFlowType}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataFlowChange', callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the default sim card is updated.
   *
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataFlowChange(callback: Callback<DataFlowType>): void;

  /**
   * 订阅指定卡槽位的蜂窝数据业务的上下行数据流状态，使用callback方式作为异步方法。
   *
   * @param { 'cellularDataFlowChange' } type - 蜂窝数据业务的上下行数据流状态事件，参数固定为'cellularDataFlowChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<DataFlowType> } callback - 回调函数，返回数据流状态对象。参考data的
   *     [DataFlowType]{@link @ohos.telephony.data:data.DataFlowType}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'cellularDataFlowChange', options: ObserverOptions, callback: Callback<DataFlowType>): void;

  /**
   * Callback when the uplink and downlink data flow state of cellular data services
   * corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<DataFlowType> } callback - Indicates the callback for getting the cellular data flow state.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCellularDataFlowChange(options: ObserverOptions, callback: Callback<DataFlowType>): void;

  /**
   * 移除订阅蜂窝数据业务的上下行数据流状态，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'cellularDataFlowChange' } type - 蜂窝数据业务的上下行数据流状态事件，参数固定为'cellularDataFlowChange'。
   * @param { Callback<DataFlowType> } callback - 回调函数，返回数据流状态对象。参考data的
   *     [DataFlowType]{@link @ohos.telephony.data:data.DataFlowType}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function off(type: 'cellularDataFlowChange', callback?: Callback<DataFlowType>): void;

  /**
   * Cancel callback when the uplink and downlink data flow state of cellular data services is updated.
   *
   * @param { Callback<DataFlowType> } [callback] - Indicates the callback to unsubscribe from
   *     the cellularDataFlowChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCellularDataFlowChange(callback?: Callback<DataFlowType>): void;

  /**
   * 订阅通话状态变化事件，使用callback方式作为异步方法。
   *
   * @param { 'callStateChange' } type - 通话状态变化事件，参数固定为'callStateChange'。
   * @param { Callback<CallStateInfo> } callback - 回调函数，返回通话状态信息对象。<br/>应用可获取到CallStateInfo。<br/>其中，三方应用仅能获取state通话状态。
   *     number受系统权限管控，仅面向系统应用开放。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'callStateChange', callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the default sim card is updated.
   *
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   *     getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChange(callback: Callback<CallStateInfo>): void;

  /**
   * 订阅通话状态变化事件，使用callback方式作为异步方法。
   *
   * @param { 'callStateChange' } type - 通话状态变化事件，参数固定为'callStateChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<CallStateInfo> } callback - 回调函数，返回通话状态信息对象。<br/>应用可获取到CallStateInfo。<br/>其中，三方应用仅能获取state通话状态。
   *     number受系统权限管控，仅面向系统应用开放。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function on(type: 'callStateChange', options: ObserverOptions, callback: Callback<CallStateInfo>): void;

  /**
   * Callback when the call state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<CallStateInfo> } callback - Indicates the callback for
   *     getting the call state and the called number.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChange(options: ObserverOptions, callback: Callback<CallStateInfo>): void;

  /**
   * 取消订阅通话状态变化事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'callStateChange' } type - 通话状态变化事件，参数固定为'callStateChange'。
   * @param { Callback<CallStateInfo> } callback - 回调函数，返回通话状态信息对象。参考call的
   *     [CallState]{@link @ohos.telephony.call:call.CallState}。<br />number：电话号码。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 6 dynamic
   */
  function off(type: 'callStateChange', callback?: Callback<CallStateInfo>): void;

  /**
   * Cancel callback when the call state is updated.
   *
   * @param { Callback<CallStateInfo> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCallStateChange(callback?: Callback<CallStateInfo>): void;

  /**
   * 订阅通话状态变化拓展事件，使用callback方式作为异步方法。
   *
   * @param { 'callStateChangeEx' } type - 通话状态变化事件，参数固定为'callStateChangeEx'。
   * @param { Callback<TelCallState> } callback - 回调函数，返回通话状态对象。<br/>应用可获取到TelCallState。<br/>
   * @param { ObserverOptions } [options] - 电话相关事件订阅参数可选项。
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   */
  function on(type: 'callStateChangeEx', callback: Callback<TelCallState>, options?: ObserverOptions): void;

  /**
   * Callback when the telCall state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { Callback<TelCallState> } callback - Indicates the callback for
   *     getting the telCall state.
   * @param { ObserverOptions } [options] - Indicates the options for observer.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onCallStateChangeEx(callback: Callback<TelCallState>, options?: ObserverOptions): void;

  /**
   * 取消订阅通话状态变化拓展事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'callStateChangeEx' } type - 通话状态变化事件，参数固定为'callStateChange'。
   * @param { Callback<TelCallState> } [callback] - 回调函数，返回通话状态对象。参考call的
   *     [TelCallState]{@link @ohos.telephony.call:call.TelCallState}。<br />
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 21 dynamic
   */
  function off(type: 'callStateChangeEx', callback?: Callback<TelCallState>): void;

  /**
   * Cancel callback when the telCall state is updated.
   *
   * @param { Callback<TelCallState> } [callback] - Indicates the callback to
   *     unsubscribe from the callStateChangeEx event.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offCallStateChangeEx(callback?: Callback<TelCallState>): void;

  /**
   * 三方应用监听运营商通话状态并获取通话号码，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { Callback<CCallStateInfo> } callback - 回调函数，返回通话状态信息对象。<br/>应用可获取到CCallState。<br/>
   * @param { ObserverOptions } [options] - 电话相关事件订阅参数可选项。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function onCCallStateChange(callback: Callback<CCallStateInfo>, options?: ObserverOptions): void;

  /**
   * 取消三方应用监听运营商通话状态并获取通话号码，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { Callback<CCallStateInfo> } [callback] - 回调函数，返回通话状态信息对象。<br/>应用可获取到CCallState。<br/>
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8800001 - Invalid parameter value.
   * @throws { BusinessError } 8800002 - Service connection failed.
   * @throws { BusinessError } 8800003 - System internal error.
   * @throws { BusinessError } 8800999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function offCCallStateChange(callback?: Callback<CCallStateInfo>): void;

  /**
   * 订阅sim状态更改事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 此接口不包含sim卡的激活状态，具体请参见[sim.isSimActive]{@link @ohos.telephony.sim:sim.isSimActive}接口。
   *
   * @param { 'simStateChange' } type - sim状态更改事件，参数固定为'simStateChange'。
   * @param { Callback<SimStateData> } callback - 回调函数，返回卡状态数据对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'simStateChange', callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the default sim card is updated.
   *
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   *     including state Indicates the sim state, and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSimStateChange(callback: Callback<SimStateData>): void;

  /**
   * 订阅指定卡槽位的sim状态更改事件，使用callback方式作为异步方法。
   *
   * @param { 'simStateChange' } type - sim状态更改事件，参数固定为'simStateChange'。
   * @param { ObserverOptions } options - 电话相关事件订阅参数可选项。
   * @param { Callback<SimStateData> } callback - 回调函数，返回卡状态数据对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function on(type: 'simStateChange', options: ObserverOptions, callback: Callback<SimStateData>): void;

  /**
   * Callback when the sim state corresponding to the monitored {@code slotId} is updated.
   *
   * @param { ObserverOptions } options - Indicates the options for observer.
   * @param { Callback<SimStateData> } callback - Indicates the callback for getting the SimStateData object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onSimStateChange(options: ObserverOptions, callback: Callback<SimStateData>): void;

  /**
     * 订阅5A网络状态变化事件，使用callback异步回调。
     *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<boolean> } callback - 回调函数。返回true表示5A状态为使能态；返回false表示5A状态为非使能态。
   * @param { ObserverOptions } [options] - 电话相关事件订阅参数可选项，指定事件订阅的卡槽ID，默认为当前默认数据卡槽ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onCommunicationStateChange(callback: Callback<boolean>, options?: ObserverOptions): void;

  /**
     * 取消订阅5A网络状态变化事件，使用callback异步回调。
     *
   * @permission ohos.permission.GET_NETWORK_INFO
   * @param { Callback<boolean> } callback - 回调函数。返回true表示5A状态为使能态；返回false表示5A状态为非使能态。
   * @param { ObserverOptions } [options] - 电话相关事件订阅参数可选项，指定事件订阅的卡槽ID，默认为当前默认数据卡槽ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offCommunicationStateChange(callback: Callback<boolean>, options?: ObserverOptions): void;

  /**
   * 移除订阅sim状态更改事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'simStateChange' } type - sim状态更改事件，参数固定为'simStateChange'。
   * @param { Callback<SimStateData> } callback - 回调函数，返回卡状态数据对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   */
  function off(type: 'simStateChange', callback?: Callback<SimStateData>): void;

  /**
   * Cancel callback when the sim state is updated.
   *
   * @param { Callback<SimStateData> } [callback] - Indicates the callback to unsubscribe from the simStateChange event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offSimStateChange(callback?: Callback<SimStateData>): void;

  /**
   * 订阅卡帐户变化事件，使用callback方式作为异步方法。
   *
   * @param { 'iccAccountInfoChange' } type - 卡帐户变化事件，参数固定为'iccAccountInfoChange'。
   * @param { Callback<void> } callback - 回调函数。当卡账户改变成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 10 dynamic
   */
  function on(type: 'iccAccountInfoChange', callback: Callback<void>): void;

  /**
   * Receives an ICC account change. This callback is invoked when the ICC account updates
   * and the observer is added to monitor the updates.
   *
   * @param { Callback<void> } callback - including state Indicates the ICC account information,
   *     and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function onIccAccountInfoChange(callback: Callback<void>): void;

  /**
   * 移除订阅卡帐户变化事件，使用callback方式作为异步方法。
   * 
   * > **说明：**
   * >
   * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
   *
   * @param { 'iccAccountInfoChange' } type - 卡帐户变化事件，参数固定为'iccAccountInfoChange'。
   * @param { Callback<void> } callback - 回调函数。当卡账户改变成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 10 dynamic
   */
  function off(type: 'iccAccountInfoChange', callback?: Callback<void>): void;

  /**
   * Cancel to receive an ICC account change.
   *
   * @param { Callback<void> } [callback] - including state Indicates the ICC account information,
   *     and reason Indicates the cause of the change.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 static
   */
  function offIccAccountInfoChange(callback?: Callback<void>): void;

  /**
   * SIM卡类型和状态。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimStateData {
    /**
     * SIM卡类型。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 7 dynamic
     * @since 23 static
     */
    type: CardType;

    /**
     * SIM卡状态。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 7 dynamic
     * @since 23 static
     */
    state: SimState;

    /**
     * SIM卡锁类型。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    reason: LockReason;
  }

  /**
   * 通话状态相关信息。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CallStateInfo {
    /**
     * 通话类型。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    state: CallState;

    /**
     * 电话号码。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     */
    number: string;

    /**
     * Indicates call number.
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 static
     */
    teleNumber: string;
  }

  /**
   * 通话状态相关信息。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 23 dynamic&static
   */
  export interface CCallStateInfo {
    /**
     * 通话类型。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 dynamic&static
     */
    state: CCallState;

    /**
     * 电话号码。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 23 dynamic&static
     */
    teleNumber: string;
  }

  /**
   * 数据连接状态相关信息。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DataConnectionStateInfo {
    /**
     * 数据连接状态。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    state: DataConnectState;

    /**
     * 网络类型。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    network: RatType;
  }

  /**
   * 电话相关事件订阅参数可选项。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ObserverOptions {
    /**
     * 卡槽ID。
     * 
     * - 0：卡槽1。
     * - 1：卡槽2。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 11 dynamic
     * @since 23 static
     */
    slotId: int;
  }

  /**
   * SIM卡锁类型。
   *
   * @syscap SystemCapability.Telephony.StateRegistry
   * @since 8 dynamic
   * @since 23 static
   */
  export enum LockReason {
    /**
     * 无锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_NONE = 0,

    /**
     * PIN锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN = 1,

    /**
     * PUK锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PUK = 2,

    /**
     * 网络PIN锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PN_PIN = 3,

    /**
     * 网络PUK锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PN_PUK = 4,

    /**
     * 子网PIN锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PU_PIN = 5,

    /**
     * 子网PUK锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PU_PUK = 6,

    /**
     * 服务提供商PIN锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PP_PIN = 7,

    /**
     * 服务提供商PUK锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PP_PUK = 8,

    /**
     * 组织PIN锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PC_PIN = 9,

    /**
     * 组织PUK锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PC_PUK = 10,

    /**
     * SIM PIN锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_SIM_PIN = 11,

    /**
     * SIM PUK锁。
     *
     * @syscap SystemCapability.Telephony.StateRegistry
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_SIM_PUK = 12
  }

  /**
   * SIM卡激活状态变化的监听，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { Callback< boolean> } callback - 回调函数，返回SIM卡是否激活。<br/>- true：激活。<br/>- false：未激活。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function onGetSimActiveState(slotId: int, callback: Callback<boolean>): void;

  /**
   * 取消SIM卡激活状态变化的监听，使用callback方式作为异步方法。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { Callback<boolean> } [callback] - 回调函数，返回SIM卡是否激活。<br/>- true：激活。<br/>- false：未激活。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.StateRegistry
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function offGetSimActiveState(callback?: Callback<boolean>): void;
}

export default observer;