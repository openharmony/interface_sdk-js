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
 * @kit ArkUI
 */

import { Callback } from './@ohos.base';

/**
 * 拖拽功能模块，提供注册和取消拖拽状态监听的能力。
 *
 * > **说明：**
 * >
 * > - 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.Msdp.DeviceStatus.Drag
 * @systemapi Hide this for inner system use.
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace dragInteraction {
  /**
   * 拖拽状态。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum DragState {
    /**
     * 表示开始拖拽。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    MSG_DRAG_STATE_START = 1,

    /**
     * 表示结束拖拽。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    MSG_DRAG_STATE_STOP = 2,

    /**
     * 表示取消拖拽。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    MSG_DRAG_STATE_CANCEL = 3
  }

  /**
   * 拖拽对象的数据摘要。
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface Summary {
    /**
     * 拖拽对象类型。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataType: string;

    /**
     * 拖拽对象数据长度。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataSize: int;
  }

  /**
   * 注册监听拖拽状态。
   *
   * @param { 'drag' } type - 监听类型，固定取值为 'drag'。
   * @param { Callback<DragState> } callback - 回调函数，异步返回拖拽状态消息。
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2.Incorrect parameter types.3.Parameter verification failed.
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   *     [since 12]
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'drag', callback: Callback<DragState>): void;

  /**
   * Listens for dragging state change events.
   *
   * @param { Callback<DragState> } callback Indicates the callback to receive the changed dragging state.
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onDragStateChange(callback: Callback<DragState>): void;

  /**
   * 取消监听拖拽状态。
   *
   * @param { 'drag' } type - 监听类型，固定取值为 'drag'。
   * @param { Callback<DragState> }callback - Callback to be unregistered. If this parameter is not specified, all
   *     callbacks registered by the current application will be unregistered.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2.Incorrect parameter types.3.Parameter verification failed.
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   *     [since 12]
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'drag', callback?: Callback<DragState>): void;

  /**
   * Disables listening for dragging state change events.
   *
   * @param { Callback<DragState> } [callback] - Indicates the callback for which listening is disabled. If this
   *     <br> parameter is not specified, listening will be disabled for all registered callbacks.
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offDragStateChange(callback?: Callback<DragState>): void;

  /**
   * 获取所有拖拽对象的摘要。
   *
   * @returns { Array<Summary> } 所有拖拽对象的数据摘要，包含拖拽对象的类型和数据长度。
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getDataSummary(): Array<Summary>;

  /**
   * 控制统一拖拽功能总开关。
   *
   * @param { boolean } enabled - 设置开关状态。<br>false：关闭，true：开启。
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setDragSwitchState(enabled: boolean): void;

  /**
   * 控制统一拖拽适配应用开关。
   *
   * @param { boolean } enabled - 设置开关状态。<br>false：关闭，true：开启。
   * @param { string } bundleName - 设置指定应用包名。长度取值范围（0, 128]。
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2.Incorrect parameter types.3.Parameter verification failed.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setAppDragSwitchState(enabled: boolean, bundleName: string): void;
}

export default dragInteraction;