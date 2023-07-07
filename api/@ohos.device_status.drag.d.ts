/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';

/**
 * Declares the APIs for dragging management.
 *
 * @since 10
 * @syscap SystemCapability.Msdp.DeviceStatus.Drag
 * @systemapi Hide this for inner system use.
 */
declare namespace drag {
  /**
   * Enumerates the dragging states.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   */
  enum DragState {
    /**
     * Dragging starts.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     */
    MSG_DRAG_STATE_START,

    /**
     * Dragging ends.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     */
    MSG_DRAG_STATE_STOP,

    /**
     * Dragging is canceled.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Drag
     */
    MSG_DRAG_STATE_CANCEL
  }

  /**
   * Listens for dragging state change events.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @param type Indicates the event type.
   * @param callback Indicates the callback to receive the changed dragging state.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function on(type: 'drag', callback: Callback<DragState>): void;

  /**
   * Disables listening for dragging state change events.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Drag
   * @systemapi Hide this for inner system use.
   * @param type Indicates the event type.
   * @param callback Indicates the callback for which listening is disabled. If this parameter is not specified, listening will be disabled for all registered callbacks.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function off(type: 'drag', callback?: Callback<DragState>): void;
}

export default drag;