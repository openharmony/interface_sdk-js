/*
* Copyright (c) 2022-2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file 键鼠穿越
 * @kit InputKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * 键鼠穿越功能模块，提供两台或多台设备组网协同后键鼠共享能力，实现键鼠输入设备的跨设备协同操作。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Cooperator
 * @since 9 dynamiconly
 * @deprecated since 23
 * @useinstead ohos.cooperate/cooperate
 */
declare namespace inputDeviceCooperate {

  /**
   * 键鼠穿越事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use.
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate.CooperateState
   */
  enum EventMsg {

    /**
     * 键鼠穿越消息，表示键鼠穿越开始。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead ohos.cooperate/cooperate.CooperateState#COOPERATE_ACTIVATE
     */
    MSG_COOPERATE_INFO_START = 200,

    /**
     * 键鼠穿越消息，表示键鼠穿越成功。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead ohos.cooperate/cooperate.CooperateState#COOPERATE_ACTIVATE_SUCCESS
     */
    MSG_COOPERATE_INFO_SUCCESS = 201,

    /**
     * 键鼠穿越消息，表示键鼠穿越失败。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead ohos.cooperate/cooperate.CooperateState#COOPERATE_ACTIVATE_FAILURE
     */
    MSG_COOPERATE_INFO_FAIL = 202,

    /**
     * 键鼠穿越状态，表示键鼠穿越状态开启。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead ohos.cooperate/cooperate.CooperateState#COOPERATE_PREPARE
     */
    MSG_COOPERATE_STATE_ON = 500,

    /**
     * 键鼠穿越状态，表示键鼠穿越状态关闭。
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead ohos.cooperate/cooperate.CooperateState#COOPERATE_UNPREPARE
     */
    MSG_COOPERATE_STATE_OFF = 501
  }

  /**
   * 开启、关闭键鼠穿越，使用callback异步回调。
   *
   * @param { boolean } enable - 键鼠穿越使能状态。
   * @param { AsyncCallback<void> } callback - 回调函数。当开启键鼠穿越成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#prepareCooperate
   */
  function enable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 开启、关闭键鼠穿越，使用Promise异步回调。
   *
   * @param { boolean } enable - 键鼠穿越使能状态。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#prepareCooperate
   */
  function enable(enable: boolean): Promise<void>;

  /**
   * 启动键鼠穿越，使用callback异步回调。
   *
   * @param { string } sinkDeviceDescriptor - 键鼠穿越目标设备描述符。
   * @param { number } srcInputDeviceId - 键鼠穿越待穿越外设标识符。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动键鼠穿越成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#activateCooperate
   */
  function start(sinkDeviceDescriptor: string, srcInputDeviceId: number, callback: AsyncCallback<void>): void;

  /**
   * 启动键鼠穿越，使用Promise异步回调。
   *
   * @param { string } sinkDeviceDescriptor - 键鼠穿越目标设备描述符。
   * @param { number } srcInputDeviceId - 键鼠穿越待穿越外设标识符。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#activateCooperate
   */
  function start(sinkDeviceDescriptor: string, srcInputDeviceId: number): Promise<void>;

  /**
   * 停止键鼠穿越，使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当停止键鼠穿越成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#deactivateCooperate
   */
  function stop(callback: AsyncCallback<void>): void;

  /**
   * 停止键鼠穿越，使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#deactivateCooperate
   */
  function stop(): Promise<void>;

  /**
   * 获取键鼠穿越开关的状态，使用callback异步回调。
   *
   * @param {string} deviceDescriptor - 键鼠穿越目标设备描述符。
   * @param {AsyncCallback<{ state: boolean }>} callback - 回调函数。当获取键鼠穿越开关状态成功，err为undefined，data为键鼠穿越开关状态（true表示打开，false
   * 表示关闭）；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#getCooperateSwitchState
   */
  function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void;

  /**
   * 获取键鼠穿越开关的状态，使用Promise异步回调。
   *
   * @param { string } deviceDescriptor - 键鼠穿越目标设备描述符。
   * @returns { Promise<{ state: boolean }> } Promise对象，返回键鼠穿越开关状态。true表示键鼠穿越开关打开，false表示键鼠穿越开关关闭。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#getCooperateSwitchState
   */
  function getState(deviceDescriptor: string): Promise<{ state: boolean }>;

  /**
   * 注册监听键鼠穿越状态，使用callback异步回调。
   *
   * @param { 'cooperation' } type - 注册类型，取值'cooperation'。
   * @param { AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }> } callback - 回调函数。当接收键鼠穿越事件成功，err为
   * undefined，data为键鼠穿越事件信息；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#on
   */
  function on(type: 'cooperation', callback: AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }>): void;

  /**
   * 关闭监听键鼠穿越状态，使用callback异步回调。
   *
   * @param { 'cooperation' } type - 注册类型，取值'cooperation'。
   * @param { AsyncCallback<void> } [callback] - 回调函数。当取消注册成功，err为undefined，否则为错误对象。若无此参数，则取消当前应用注册的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.cooperate/cooperate#off
   */
  function off(type: 'cooperation', callback?: AsyncCallback<void>): void;
}

export default inputDeviceCooperate;