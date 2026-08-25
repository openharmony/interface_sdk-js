/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file 蓝牙baseProfile模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';

/**
 * 本模块提供不同的蓝牙技术协议的基础公共方法，为A2DP、HFP、PAN等蓝牙Profile提供连接状态查询、连接状态订阅与取消订阅等公共能力，适用于需要在应用中统一管理多种蓝牙Profile连接状态的场景。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @crossplatform [since 13]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace baseProfile {
  /**
   * 本端和对端蓝牙设备间的Profile连接状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  type ProfileConnectionState = constant.ProfileConnectionState;

  /**
   * 枚举，表示Profile的连接策略。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ConnectionStrategy {
    /**
     * 当设备未配对时的默认连接策略。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    CONNECTION_STRATEGY_UNSUPPORTED = 0,
    /**
     * 设备允许接受或发起配对时的连接策略。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    CONNECTION_STRATEGY_ALLOWED = 1,
    /**
     * 设备不允许接受或发起配对时的连接策略。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    CONNECTION_STRATEGY_FORBIDDEN = 2
  }

  /**
   * 枚举，Profile断开连接的原因。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 12 dynamic
   * @since 23 static
   */
  enum DisconnectCause {
    /**
     * 用户主动断开连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 12 dynamic
     * @since 23 static
     */
    USER_DISCONNECT = 0,
    /**
     * 连接请求需从键盘侧发起。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    CONNECT_FROM_KEYBOARD = 1,
    /**
     * 连接请求需从鼠标侧发起。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    CONNECT_FROM_MOUSE = 2,
    /**
     * 连接请求需从车机侧发起。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    CONNECT_FROM_CAR = 3,
    /**
     * 当前连接数量超过上限。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TOO_MANY_CONNECTED_DEVICES = 4,
    /**
     * 内部错误。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    CONNECT_FAIL_INTERNAL = 5
  }

  /**
   * 本端和对端蓝牙设备间Profile连接状态变化参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface StateChangeParam {
    /**
     * 对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * Profile连接状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    state: ProfileConnectionState;

    /**
     * Profile断开连接的原因。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 12 dynamic
     * @since 23 static
     */
    cause: DisconnectCause;

    /**
     * 当前对端设备对应的PAN角色。仅PAN Profile连接状态发生变化时返回该字段，非PAN场景下该字段不存在。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    role?: PanRole;
  }

  /**
   * 枚举，PAN的不同角色。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  enum PanRole {
    /**
     * NAP角色。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    ROLE_PANNAP = 0,
    /**
     * PANU角色。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    ROLE_PANU = 1
  }

  /**
   * 基础Profile接口定义，提供订阅和获取连接状态等公共能力。如：[A2dpSourceProfile]{@link @ohos.bluetooth.a2dp:a2dp.A2dpSourceProfile}、
   * [HandsFreeAudioGatewayProfile]{@link @ohos.bluetooth.hfp:hfp.HandsFreeAudioGatewayProfile}等Profile类型都继承于该类。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface BaseProfile {
    /**
     * 设置该设备Profile的连接策略。使用Promise异步回调。例如：在蓝牙设备管理中，需要限制或允许特定设备自动发起或接受配对连接时，可调用此接口设置相应的连接策略。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { ConnectionStrategy } strategy - Profile的连接策略。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    setConnectionStrategy(deviceId: string, strategy: ConnectionStrategy): Promise<void>;

    /**
     * 设置该设备Profile的连接策略。使用Callback异步回调。例如：在蓝牙设备管理中，需要限制或允许特定设备自动发起或接受配对连接时，可调用此接口设置相应的连接策略。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { ConnectionStrategy } strategy - Profile的连接策略。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    setConnectionStrategy(deviceId: string, strategy: ConnectionStrategy, callback: AsyncCallback<void>): void;

    /**
     * 获取该Profile的连接策略。使用Callback异步回调。例如：在蓝牙设备管理中，需要查询当前设备的连接策略以展示策略状态或决定后续连接操作时调用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<ConnectionStrategy> } callback - 回调函数。当获取策略成功，err为undefined，data为获取到的连接策略，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    getConnectionStrategy(deviceId: string, callback: AsyncCallback<ConnectionStrategy>): void;

    /**
     * 获取该Profile的连接策略。使用Promise异步回调。例如：在蓝牙设备管理中，需要查询当前设备的连接策略以展示策略状态或决定后续连接操作时调用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 表示配对的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<ConnectionStrategy> } 返回Promise对象，包含获取到的连接策略。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    getConnectionStrategy(deviceId: string): Promise<ConnectionStrategy>;

    /**
     * 获取和本端设备间已连接Profile的对端设备列表。例如，在蓝牙音频播放应用中，可通过该方法获取当前已连接的A2DP音频设备列表以进行设备展示或管理。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @returns { Array<string> } 返回已连接Profile的对端设备列表。
     *     基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
     *     已配对的地址不会变更。
     *     若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。
     *     若取消配对，蓝牙子系统会根据该地址的实际使用情况，决策后续变更时机；若其他应用正在使用该地址，则不会立刻变更。
     *     若要持久化保存该地址，可使用[access.addPersistentDeviceId]{@link @ohos.bluetooth.access:access.addPersistentDeviceId}方法。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    getConnectedDevices(): Array<string>;

    /**
     * 获取和对端设备间Profile的连接状态。例如，在蓝牙应用中判断设备是否已连接，以决定是否可以发起数据传输或更新设备连接状态显示。
     * 
     * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取Profile连接状态。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { ProfileConnectionState } 返回Profile的连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    getConnectionState(deviceId: string): ProfileConnectionState;

    /**
     * 订阅Profile的连接状态变化事件。使用Callback异步回调。例如，在蓝牙音频应用中，当耳机连接或断开时实时更新播放界面状态或提示用户。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 10 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'connectionStateChange' } type - 事件回调类型，支持的事件为'connectionStateChange'，表示Profile连接状态变化事件。
     *     当Profile连接状态变化时，触发该事件。
     * @param { Callback<StateChangeParam> } callback - 指定订阅的回调函数，会携带Profile连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     */
    on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;

    /**
     * 订阅Profile的连接状态变化事件。使用Callback异步回调。例如，在蓝牙音频应用中，当耳机连接或断开时实时更新播放界面状态或提示用户。
     * 在 API 26.0.0 及以上版本中，如果应用使用 ohos.permission.GET_BLUETOOTH_PEERS_MAC 权限，则对端设备地址的类型为真实类型。
     * 否则，对端设备地址的类型为虚拟类型。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH [since 23 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and
     *     ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { Callback<StateChangeParam> } callback - 指定订阅的回调函数，表示Profile连接状态变化事件。
     *     当Profile连接状态变化时，触发该事件。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 23]
     * @since 23 static
     */
    onConnectionStateChange(callback: Callback<StateChangeParam>): void;

    /**
     * 取消订阅Profile的连接状态变化事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { 'connectionStateChange' } type - 事件回调类型，支持的事件为'connectionStateChange'，表示Profile连接状态变化事件。
     * @param { Callback<StateChangeParam> } callback - 指定取消订阅的回调函数。
     *     若传参，则需与[on('connectionStateChange')]{@link baseProfile.BaseProfile.on(type: 'connectionStateChange', callback: Callback<StateChangeParam>)}
     *     中的回调函数一致，此时取消订阅该回调函数；若传入的回调与已订阅的回调不一致，则无法取消对应订阅；
     *     若无传参，则取消订阅该type对应的所有回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform [since 13]
     * @since 10 dynamic
     */
    off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;

    /**
     * 取消订阅Profile的连接状态变化事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<StateChangeParam> } [callback] - 指定取消订阅的回调函数。
     *     若传参，则需与[onConnectionStateChange]{@link baseProfile.BaseProfile.onConnectionStateChange(callback: Callback<StateChangeParam>)}
     *     中的回调函数一致，此时取消订阅该回调函数；若传入的回调与已订阅的回调不一致，则无法取消对应订阅；
     *     若无传参，则取消订阅该type对应的所有回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    offConnectionStateChange(callback?: Callback<StateChangeParam>): void;
  }
}

export default baseProfile;