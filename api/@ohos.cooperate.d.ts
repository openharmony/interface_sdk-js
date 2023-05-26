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

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';

/**
 * Implements screen hopping operation management.
 *
 * @since 10
 * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
 * @systemapi Hide this for inner system use.
 */
declare namespace cooperate {
  /**
   * Enumerates screen hopping message notifications.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   */
  enum CooperateMsg {
    /**
     * Preparing for screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_PREPARE = 0,

    /**
     * Canceling the preparation for screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_UNPREPARE = 1,

    /**
     * Starting screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_ACTIVATE = 2,

    /**
     * Success in starting screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_ACTIVATE_SUCCESS = 3,

    /**
     * Failure to start screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_ACTIVATE_FAIL = 4,

    /**
     * Success in stopping screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_DEACTIVATE_SUCCESS = 5,

    /**
     * Failure to stop screen hopping.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_DEACTIVATE_FAIL = 6,

    /**
     * Inter-device session disconnected.
     *
     * @since 10
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     */
    COOPERATE_SESSION_DISCONNECTED = 7,
  }

  /**
   * Prepares for screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param callback Asynchronous callback used to return the operation result.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function prepare(callback: AsyncCallback<void>): void;

  /**
   * Prepares for screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function prepare(): Promise<void>;

  /**
   * Cancels the preparation for screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param callback Asynchronous callback used to return the operation result.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function unprepare(callback: AsyncCallback<void>): void;

  /**
   * Cancels the preparation for screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function unprepare(): Promise<void>;

  /**
   * Starts screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param targetNetworkId Descriptor of the target device for screen hopping.
   * @param inputDeviceId Identifier of the input device for screen hopping.
   * @param callback Asynchronous callback used to return the operation result.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 20900001 - Operation failed.
   */
  function activate(targetNetworkId: string, inputDeviceId: number, callback: AsyncCallback<void>): void;

  /**
   * Starts screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param targetNetworkId Descriptor of the target device for screen hopping.
   * @param inputDeviceId Identifier of the input device for screen hopping.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 20900001 - Operation failed.
   */
  function activate(targetNetworkId: string, inputDeviceId: number): Promise<void>;

  /**
   * Stops screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param callback Asynchronous callback used to return the operation result.
   * @param isUnchained Whether the cross-device link is unchained.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function deactivate(isUnchained: boolean, callback: AsyncCallback<void>): void;

  /**
   * Stops screen hopping.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param isUnchained Whether the cross-device link is unchained.
   */
  function deactivate(isUnchained: boolean): Promise<void>;

  /**
   * Obtains the screen hopping status.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param networkId Descriptor of the target device for screen hopping.
   * @param callback Asynchronous callback used to return the screen hopping status.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function getCrossingSwitchState(networkId: string, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the status of the screen hopping switch.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param networkId Descriptor of the target device for screen hopping.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function getCrossingSwitchState(networkId: string): Promise<boolean>;

  /**
   * Enables listening for screen hopping status change events.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param type Change type.
   * @param callback Asynchronous callback used to return the screen hopping status change event.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function on(type: 'cooperate', callback: Callback<{ networkId: string, msg: CooperateMsg }>): void;

  /**
   * Disables listening for screen hopping status change events.
   *
   * @since 10
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @param type Change type.
   * @param callback Callback for which listening is disabled. If this parameter is not specified, listening will be disabled for all registered callbacks.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function off(type: 'cooperate', callback?: Callback<void>): void;
}

export default cooperate;