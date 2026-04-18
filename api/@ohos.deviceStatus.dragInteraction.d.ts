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
 * The **dragInteraction** module provides the APIs to enable and disable listening for dragging status changes.
 *
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Msdp.DeviceStatus.Drag
 * @systemapi Hide this for inner system use.
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace dragInteraction {
  /**
   * Enumerates dragging states.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum DragState {
    /**
     * Dragging is started.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    MSG_DRAG_STATE_START = 1,

    /**
     * Dragging is ended.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    MSG_DRAG_STATE_STOP = 2,

    /**
     * Dragging is canceled.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    MSG_DRAG_STATE_CANCEL = 3
  }

  /**
   * Defines the data summary of the dragged object.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface Summary {
    /**
     * Type of the dragged object.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataType: string;

    /**
     * Data length of the dragged object.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    dataSize: int;
  }

  /**
   * Enables listening for dragging status changes.
   *
   * @param { 'drag' } type - Event type. This field has a fixed value of **drag**.
   * @param { Callback<DragState> } callback - Callback used to return the dragging status.
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
   * Disables listening for dragging status changes.
   *
   * @param { 'drag' } type - Event type. This field has a fixed value of **drag**.
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
   * Obtains the data summary of all dragged objects.
   *
   * @returns { Array<Summary> } Data summary of all dragged objects, including their type and data length.
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getDataSummary(): Array<Summary>;

  /**
   * Sets the global drag-and-drop switch.
   *
   * @param { boolean } enabled - State of the drag-and-drop switch.<br>**false**: disabled; **true**: enabled.
   * @throws {BusinessError} 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setDragSwitchState(enabled: boolean): void;

  /**
   * Sets the drag-and-drop switch for a specific application.
   *
   * @param { boolean } enabled - State of the drag-and-drop switch.<br>**false**: disabled; **true**: enabled.
   * @param { string } bundleName - Bundle name of a specified application. The value range is (0, 128].
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