/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS;
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from "./basic";

/**
 * Distributed input management module for interface calls with distributed capabilities.
 * 
 * @since 9
 * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
 * @import import distributedInput from '@ohos.multimodalInput.distributedInput',
 */
declare namespace distributedInput {
  enum InputSource {
    /**
     * mouse
     */
    MOUSE = 0,

    /**
     * keyboard
     */
    KEYBOARD = 1,

    /**
     * touch screen
     */
    TOUCH_SCREEN = 2,

    /**
     * touch pad
     */
    TOUCH_PAD = 3,
  }

  /**
   * Example Query the input capability of a distributed device.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId Represents the ID of the device that queries the distributed input capability.
   * @return -
   */
  function getRemoteInputAbility(deviceId: number, callback: AsyncCallback<Array<InputSource>>): void;
  function getRemoteInputAbility(deviceId: number): Promise<Array<InputSource>>;

  /**
   * Prepare for distribution.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId Indicates the ID of the device to be distributed.
   * @return -
   */
  function prepareRemoteInput(deviceId: number, callback: AsyncCallback<void>): void;
  function prepareRemoteInput(deviceId: number): Promise<void>;

  /**
   * Cancel ready distributed.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId Indicates the ID of the device to be distributed.
   * @return -
   */
  function unprepareRemoteInput(deviceId: number, callback: AsyncCallback<void>): void;
  function unprepareRemoteInput(deviceId: number): Promise<void>;

  /**
   * Start distributed.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId Represents the ID of the device that started the distribution.
   * @return -
   */
  function startRemoteInput(deviceId: number, inputSources: Array<InputSource>, callback: AsyncCallback<void>): void;
  function startRemoteInput(deviceId: number, inputSources: Array<InputSource>): Promise<void>;

  /**
   * Stop distribution.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId Indicates the ID of the device that stopped distribution.
   * @return -
   */
  function stopRemoteInput(deviceId: number, inputSources: Array<InputSource>, callback: AsyncCallback<void>): void;
  function stopRemoteInput(deviceId: number, inputSources: Array<InputSource>): Promise<void>;
}

export default distributedInput;