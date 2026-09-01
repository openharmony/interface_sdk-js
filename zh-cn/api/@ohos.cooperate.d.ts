/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';

/**
 * 键鼠穿越功能模块，提供两台或多台设备组网协同后键鼠共享能力，实现键鼠输入设备的跨设备协同操作。
 *
 * > **说明**
 * >
 * > - 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
 * @systemapi Hide this for inner system use.
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace cooperate {
  /**
   * 键鼠穿越的消息通知。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead CooperateState
   */
  enum CooperateMsg {
    /**
     * 表示准备键鼠穿越。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_PREPARE
     */
    COOPERATE_PREPARE = 0,

    /**
     * 表示取消键鼠穿越准备。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_UNPREPARE
     */
    COOPERATE_UNPREPARE = 1,

    /**
     * 表示启动键鼠穿越。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_ACTIVATE
     */
    COOPERATE_ACTIVATE = 2,

    /**
     * 表示键鼠穿越启动成功。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_ACTIVATE_SUCCESS
     */
    COOPERATE_ACTIVATE_SUCCESS = 3,

    /**
     * 表示键鼠穿越启动失败。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_ACTIVATE_FAILURE
     */
    COOPERATE_ACTIVATE_FAIL = 4,

    /**
     * 表示键鼠穿越停止成功。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_DEACTIVATE_SUCCESS
     */
    COOPERATE_DEACTIVATE_SUCCESS = 5,

    /**
     * 表示键鼠穿越停止失败。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_DEACTIVATE_FAILURE
     */
    COOPERATE_DEACTIVATE_FAIL = 6,

    /**
     * 表示键鼠穿越会话断开。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_SESSION_DISCONNECTED
     */
    COOPERATE_SESSION_DISCONNECTED = 7
  }

  /**
   * 键鼠穿越状态的枚举。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  enum CooperateState {
    /**
     * 表示准备键鼠穿越。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_PREPARE = 0,

    /**
     * 表示取消键鼠穿越准备。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_UNPREPARE = 1,

    /**
     * 表示启动键鼠穿越。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_ACTIVATE = 2,

    /**
     * 表示键鼠穿越启动成功。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_ACTIVATE_SUCCESS = 3,

    /**
     * 表示键鼠穿越无法启动。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_ACTIVATE_FAILURE = 4,

    /**
     * 表示键鼠穿越停止成功。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_DEACTIVATE_SUCCESS = 5,

    /**
     * 表示键鼠穿越无法停止。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_DEACTIVATE_FAILURE = 6,

    /**
     * 表示键鼠穿越会话断开。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_SESSION_DISCONNECTED = 7
  }

  /**
   * 键鼠穿越的消息。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface CooperateMessage {
    /**
     * 键鼠穿越目标设备描述符。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    networkId: string;

    /**
     * 键鼠穿越的状态。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    state: CooperateState;
  }

  /**
   * 键鼠穿越的位置。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface MouseLocation {
    /**
     * 鼠标指针位于屏幕的X坐标上的位置。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayX: int;

    /**
     * 鼠标指针位于屏幕的Y坐标上的位置。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayY: int;

    /**
     * 屏幕宽度，单位：px。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayWidth: int;

    /**
     * 屏幕高度，单位：px。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayHeight: int;
  }

  /**
   * 准备键鼠穿越，使用Callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数，准备键鼠穿越成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead prepareCooperate(callback: AsyncCallback<void>)
   */
  function prepare(callback: AsyncCallback<void>): void;

  /**
   * 准备键鼠穿越，使用Promise异步方式返回结果。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error.Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead prepareCooperate()
   */
  function prepare(): Promise<void>;

  /**
   * 准备键鼠穿越，使用Callback异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { AsyncCallback<void> } callback - 回调函数，准备键鼠穿越成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed. [dynamiconly]
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function prepareCooperate(callback: AsyncCallback<void>): void;

  /**
   * 准备键鼠穿越，使用Promise异步方式返回结果。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed. [dynamiconly]
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function prepareCooperate(): Promise<void>;

  /**
   * 取消键鼠穿越准备，使用Callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数，取消键鼠穿越准备成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead unprepareCooperate(callback: AsyncCallback<void>)
   */
  function unprepare(callback: AsyncCallback<void>): void;

  /**
   * 取消键鼠穿越准备，使用Promise异步回调。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead unprepareCooperate()
   */
  function unprepare(): Promise<void>;

  /**
   * 取消键鼠穿越准备，使用Callback异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { AsyncCallback<void> } callback - 回调函数，取消键鼠穿越准备成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed. [dynamiconly]
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function unprepareCooperate(callback: AsyncCallback<void>): void;

  /**
   * 取消键鼠穿越准备，使用Promise异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function unprepareCooperate(): Promise<void>;

  /**
   * 启动键鼠穿越，使用Callback异步回调。
   *
   * @param { string } targetNetworkId - 键鼠穿越目标设备描述符。
   * @param { number } inputDeviceId - 待穿越输入设备标识符。
   * @param { AsyncCallback<void> } callback - 回调函数，键鼠穿越启动成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 20900001 - Service exception. Possible causes:
   *     <br>1. A system error, such as null pointer, container-related exception, or IPC exception.
   *     <br>2. N-API invocation exception or invalid N-API status.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead activateCooperate(targetNetworkId: string, inputDeviceId: int, callback: AsyncCallback<void>)
   */
  function activate(targetNetworkId: string, inputDeviceId: number, callback: AsyncCallback<void>): void;

  /**
   * 启动键鼠穿越，使用Promise异步回调。
   *
   * @param { string } targetNetworkId - 键鼠穿越目标设备描述符。
   * @param { number }inputDeviceId - Identifier of the input device for screen hopping.
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 20900001 - Service exception. Possible causes:
   *     <br>1. A system error, such as null pointer, container-related exception, or IPC exception.
   *     <br>2. N-API invocation exception or invalid N-API status.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead activateCooperate(targetNetworkId: string, inputDeviceId: int)
   */
  function activate(targetNetworkId: string, inputDeviceId: number): Promise<void>;

  /**
   * 启动键鼠穿越，使用Callback异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } targetNetworkId - 键鼠穿越目标设备描述符。
   * @param { int } inputDeviceId - 待穿越输入设备标识符。
   * @param { AsyncCallback<void> } callback - 回调函数，键鼠穿越启动成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 20900001 - Service exception. Possible causes:
   *     <br>1. A system error, such as null pointer, container-related exception, or IPC exception.
   *     <br>2. N-API invocation exception or invalid N-API status.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function activateCooperate(targetNetworkId: string, inputDeviceId: int, callback: AsyncCallback<void>): void;

  /**
   * 启动键鼠穿越，使用Promise异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } targetNetworkId - 键鼠穿越目标设备描述符。
   * @param { int }inputDeviceId - Identifier of the input device for screen hopping.
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 20900001 - Service exception. Possible causes:
   *     <br>1. A system error, such as null pointer, container-related exception, or IPC exception.
   *     <br>2. N-API invocation exception or invalid N-API status.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function activateCooperate(targetNetworkId: string, inputDeviceId: int): Promise<void>;

  /**
   * 停止键鼠穿越，使用Callback异步回调。
   *
   * @param { boolean } isUnchained - 是否关闭跨设备链路。<br> true表示关闭跨设备链路，false表示不关闭。
   * @param { AsyncCallback<void> } callback - 回调函数，键鼠穿越停止成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead deactivateCooperate(isUnchained: boolean, callback: AsyncCallback<void>)
   */
  function deactivate(isUnchained: boolean, callback: AsyncCallback<void>): void;

  /**
   * 停止键鼠穿越，使用Promise异步回调。
   *
   * @param { boolean } isUnchained - 是否关闭跨设备链路。<br> true表示关闭跨设备链路，false表示不关闭。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead deactivateCooperate(isUnchained: boolean)
   */
  function deactivate(isUnchained: boolean): Promise<void>;

  /**
   * 停止键鼠穿越，使用Callback异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { boolean } isUnchained - 是否关闭跨设备链路。 true表示关闭跨设备链路，false表示不关闭。
   * @param { AsyncCallback<void> } callback - 回调函数，键鼠穿越停止成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed. [dynamiconly]
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function deactivateCooperate(isUnchained: boolean, callback: AsyncCallback<void>): void;

  /**
   * 停止键鼠穿越，使用Promise异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { boolean } isUnchained - 是否关闭跨设备链路。 true表示关闭跨设备链路，false表示不关闭。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function deactivateCooperate(isUnchained: boolean): Promise<void>;

  /**
   * 获取目标设备键鼠穿越开关的状态，使用Callback异步回调。
   *
   * @param { string } networkId - 键鼠穿越目标设备描述符。
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回true表示目标设备键鼠穿越的开关开启，
   *     返回false表示开关未开启。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead getCooperateSwitchState(networkId: string, callback: AsyncCallback<boolean>)
   */
  function getCrossingSwitchState(networkId: string, callback: AsyncCallback<boolean>): void;

  /**
   * 获取目标设备键鼠穿越开关的状态，使用Promise异步方式返回结果。
   *
   * @param { string } networkId - 键鼠穿越目标设备描述符。
   * @returns { Promise<boolean> } Promise对象，返回true表示目标设备键鼠穿越的开关开启，返回false表示开关未开启。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead getCooperateSwitchState(networkId: string)
   */
  function getCrossingSwitchState(networkId: string): Promise<boolean>;

  /**
   * 获取目标设备键鼠穿越开关的状态，使用Callback异步回调。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } networkId - 键鼠穿越目标设备描述符。
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回true表示目标设备键鼠穿越的开关开启，
   *     返回false表示开关未开启。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCooperateSwitchState(networkId: string, callback: AsyncCallback<boolean>): void;

  /**
   * 获取目标设备键鼠穿越开关的状态，使用Promise异步方式返回结果。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } networkId - 键鼠穿越目标设备描述符。
   * @returns { Promise<boolean> } Promise对象，返回true表示目标设备键鼠穿越的开关开启，返回false表示开关未开启。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCooperateSwitchState(networkId: string): Promise<boolean>;

  /**
   * 注册监听键鼠穿越状态。
   *
   * @param { 'cooperate' } type - 监听类型，取值为'cooperate'
   * @param { Callback<{ networkId: string, msg: CooperateMsg }> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead on(type: 'cooperateMessage', callback: Callback<CooperateMessage>)
   */
  function on(type: 'cooperate', callback: Callback<{ networkId: string, msg: CooperateMsg }>): void;

  /**
   * 取消监听键鼠穿越状态。
   *
   * @param { 'cooperate' } type - 监听类型，取值为'cooperate'。
   * @param { Callback<void> } callback - 需要取消注册的回调函数，若无此参数，则取消当前应用注册的所有回调函数。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead off(type: 'cooperateMessage', callback?: Callback<CooperateMessage>)
   */
  function off(type: 'cooperate', callback?: Callback<void>): void;

  /**
   * 注册监听键鼠穿越状态。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMessage' } type - 监听类型，取值为'cooperateMessage'
   * @param { Callback<CooperateMessage> } callback - 回调函数，异步返回键鼠穿越状态消息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'cooperateMessage', callback: Callback<CooperateMessage>): void;

  /**
   * 取消监听键鼠穿越状态。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMessage' } type - 监听类型，取值为'cooperate'。
   * @param { Callback<CooperateMessage> } [callback] - 需要取消注册的回调函数，若无此参数，
   *     则取消当前应用注册的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'cooperateMessage', callback?: Callback<CooperateMessage>): void;

  /**
   * 注册监听指定设备鼠标光标位置。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMouse' } type - 监听类型，取值为'cooperateMouse'
   * @param { string } networkId - 目标设备描述符
   * @param { Callback<MouseLocation> } callback - 回调函数，异步返回指定监听设备鼠标光标位置信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2.Incorrect parameter types.
   *     <br>3.Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function on(type: 'cooperateMouse', networkId: string, callback: Callback<MouseLocation>): void;

  /**
   * 取消监听指定设备鼠标光标位置。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMouse' } type - 监听类型，取值为'cooperateMouse'。
   * @param { string } networkId - 目标设备描述符
   * @param { Callback<MouseLocation> } [callback] - 需要取消注册的回调函数，若无此参数，
   *     则取消当前应用注册的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   */
  function off(type: 'cooperateMouse', networkId: string, callback?: Callback<MouseLocation>): void;

  /**
   * Enables listening for screen hopping status change events.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { Callback<CooperateMessage> } callback - Asynchronous callback used to
   *     <br> return the screen hopping status change event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCooperateMessage(callback: Callback<CooperateMessage>): void;

  /**
   * Disables listening for screen hopping status change events.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { Callback<CooperateMessage> } [callback] - Callback for which listening
   *     <br> is disabled. If this parameter is not specified, listening will be disabled for all registered callbacks.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     <br> verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offCooperateMessage(callback?: Callback<CooperateMessage>): void;

  /**
   * Enables listening for mouse pointer position information on the specified device for cooperation.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } networkId - Specified device.
   * @param { Callback<MouseLocation> } callback - Callback for receiving reported events.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onCooperateMouseEvent(networkId: string, callback: Callback<MouseLocation>): void;

  /**
   * Disables listening for mouse pointer position information on the specified device for cooperation.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } networkId - Specified device.
   * @param { Callback<MouseLocation> } [callback] - Callback for receiving reported events.
   *     <br> If no callback is specified, listening will be disabled for all **cooperateMouse**.
   *     <br> events of the device specified by **networkId**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offCooperateMouseEvent(networkId: string, callback?: Callback<MouseLocation>): void;

  /**
   * 启动键鼠穿越，使用选项开始屏幕跳转。
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } targetNetworkId - 键鼠穿越目标设备描述符。
   * @param { int } inputDeviceId - 发起穿越操作的输入设备ID。
   * @param { CooperateOptions } cooperateOptions - 穿越可选控制参数，用于控制穿出点具体位置等。不设置此参数时，本接口能力
   *     与[cooperate.activateCooperate]{@link cooperate.activateCooperate(targetNetworkId: string, inputDeviceId: int)}
   *     相同。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 20900001 - Service exception. Possible causes:
   *     <br>1. A system error, such as null pointer, container-related exception, or IPC exception.
   *     <br>2. N-API invocation exception or invalid N-API status.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function activateCooperateWithOptions(targetNetworkId: string, inputDeviceId: int,
    cooperateOptions?: CooperateOptions
  ): Promise<void>;

  /**
   * 键鼠穿越可选控制参数，控制穿出点位置。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface CooperateOptions {

    /**
     * 鼠标X坐标位置。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayX: int;

    /**
     * 对端设备屏幕标识。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayId: long;

    /**
     * 鼠标Y坐标位置。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayY: int;
  }
}

export default cooperate;