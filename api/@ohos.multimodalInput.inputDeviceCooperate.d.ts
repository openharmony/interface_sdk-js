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
 * @file
 * @kit InputKit
 */

import { AsyncCallback } from "./@ohos.base";

/**
 * The inputDeviceCooperate module implements screen hopping for two or more networked devices to share the keyboard and mouse for collaborative operations.
 * 
 * @namespace inputDeviceCooperate
 * @syscap SystemCapability.MultimodalInput.Input.Cooperator
 * @since 9 dynamic
 * @since 20 static
 */


declare namespace inputDeviceCooperate {
  /**
   * Enumerates screen hopping event.
   * 
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 20 static
   */
  enum EventMsg {
    /**
     * Screen hopping starts.
     * 
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 20 static
    */
    MSG_COOPERATE_INFO_START = 200,

    /**
     * Screen hopping succeeds.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 20 static
    */
    MSG_COOPERATE_INFO_SUCCESS = 201,

    /**
     * Screen hopping fails.
     * 
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 20 static
    */
    MSG_COOPERATE_INFO_FAIL = 202,

    /**
     * Screen hopping is enabled.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 20 static
    */
    MSG_COOPERATE_STATE_ON = 500,

    /**
     * Screen hopping is disabled.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 20 static
    */
    MSG_COOPERATE_STATE_OFF = 501,
  }

  /**
   * Represents the status of the mouse traversal switch.
   *
   * @interface TraversalSwitchStatus
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 20 staticonly
   */
  interface TraversalSwitchStatus {
    /**
     * Indicates status of the mouse traversal switch.
     *
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 20 staticonly
     */
    state: boolean;
  }

  /**
   * Represents the data received in the mouse traversal event callback.
   *
   * @interface CooperationCallbackData
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 20 staticonly
   */
  interface CooperationCallbackData {
    /**
     * Descriptor of the device involved in the mouse traversal event.
     *
     * @type { string }
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 20 staticonly
     */
    deviceDescriptor: string;

    /**
     * Details of the cooperation event message.
     *
     * @type { EventMsg }
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 20 staticonly
     */
    eventMsg: EventMsg;
  }

  /**
   * Specifies whether to enable screen hopping.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { boolean } enable Whether to enable screen hopping.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Specifies whether to enable screen hopping.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { boolean } enable Whether to enable screen hopping.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 20 static
   */
  function enable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Specifies whether to enable screen hopping.
   * This API uses a promise to return the result.
   * 
   * @param enable Whether to enable screen hopping.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Specifies whether to enable screen hopping.
   * This API uses a promise to return the result.
   * 
   * @param enable Whether to enable screen hopping.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 20 static
   */
  function enable(enable: boolean): Promise<void>;

  /**
   * Starts screen hopping.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { string } sinkDeviceDescriptor Descriptor of the target device for screen hopping.
   * @param { number } srcInputDeviceId ID of the target device for screen hopping.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Starts screen hopping.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { string } sinkDeviceDescriptor Descriptor of the target device for screen hopping.
   * @param { int } srcInputDeviceId ID of the target device for screen hopping.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 20 static
   */
  function start(sinkDeviceDescriptor: string, srcInputDeviceId: int, callback: AsyncCallback<void>): void;

  /**
   * Starts screen hopping.
   * This API uses a promise to return the result.
   * 
   * @param { string } sinkDeviceDescriptor Descriptor of the target device for screen hopping.
   * @param { number } srcInputDeviceId ID of the target device for screen hopping.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use 
   * @since 9
  */
  /**
   * Starts screen hopping.
   * This API uses a promise to return the result.
   * 
   * @param { string } sinkDeviceDescriptor Descriptor of the target device for screen hopping.
   * @param { int } srcInputDeviceId ID of the target device for screen hopping.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use 
   * @since 12 dynamic
   * @since 20 static
  */
  function start(sinkDeviceDescriptor: string, srcInputDeviceId: int): Promise<void>;

  /**
   * Stops screen hopping.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Stops screen hopping.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 20 static
   */
  function stop(callback: AsyncCallback<void>): void;

  /**
   * Stops screen hopping. 
   * This API uses a promise to return the result.
   * 
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Stops screen hopping. 
   * This API uses a promise to return the result.
   * 
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12 dynamic
   * @since 20 static
   */
  function stop(): Promise<void>;

  /**
   * Checks whether screen hopping is enabled.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param {string} deviceDescriptor Descriptor of the target device for screen hopping.
   * @param {AsyncCallback<{ state: boolean }>} callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Checks whether screen hopping is enabled.
   * This API uses an asynchronous callback to return the result.
   * 
   * @param {string} deviceDescriptor Descriptor of the target device for screen hopping.
   * @param {AsyncCallback<{ state: boolean }>} callback Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  /**
   * Obtains the status of the mouse traversal switch.
   *
   * @param { string } deviceDescriptor Descriptor of the target network for mouse traversal.
   * @param { AsyncCallback<TraversalSwitchStatus> } callback Asynchronous callback used to receive the status of the mouse traversal switch.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 20 dynamic&static
   */
  function getState(deviceDescriptor: string, callback: AsyncCallback<TraversalSwitchStatus>): void;

  /**
   * Checks whether screen hopping is enabled.
   * This API uses a promise to return the result.
   * 
   * @param deviceDescriptor Descriptor of the target device for screen hopping.
   * @returns { Promise<{ state: boolean }> } Promise used to return the result. 
   * The value true indicates that screen hopping is enabled, and the false indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Checks whether screen hopping is enabled.
   * This API uses a promise to return the result.
   * 
   * @param deviceDescriptor Descriptor of the target device for screen hopping.
   * @returns { Promise<{ state: boolean }> } Promise used to return the result. 
   * The value true indicates that screen hopping is enabled, and the false indicates the opposite.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  /**
   * Obtains the status of the mouse traversal switch.
   *
   * @param { string } deviceDescriptor Descriptor of the target network for mouse traversal.
   * @returns { Promise<TraversalSwitchStatus> } A promise used by returning state
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 20 dynamic&static
   */
  function getState(deviceDescriptor: string): Promise<TraversalSwitchStatus>;

  /**
   * Enables listening for screen hopping status change events.
   * 
   * @param { 'cooperation' } type Event type. The value is cooperation.
   * @param { AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Enables listening for screen hopping status change events.
   * 
   * @param { 'cooperation' } type Event type. The value is cooperation.
   * @param { AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }> } callback Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  /**
   * Enables listening for mouse traversal events.
   *
   * @param { 'cooperation' } type Registration type.
   * @param { AsyncCallback<CooperationCallbackData> } callback Asynchronous callback used to receive mouse traversal events.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 20 dynamic
   */
  function on(type: 'cooperation', callback: AsyncCallback<CooperationCallbackData>): void;

  /**
   * Disables listening for screen hopping status change events.
   * 
   * @param { 'cooperation' } type Event type. The value is cooperation.
   * @param { AsyncCallback<void> } callback Callback to be unregistered. 
   * If this parameter is not specified, all callbacks registered by the current application will be unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Disables listening for screen hopping status change events.
   * 
   * @param { 'cooperation' } type Event type. The value is cooperation.
   * @param { AsyncCallback<void> } callback Callback to be unregistered. 
   * If this parameter is not specified, all callbacks registered by the current application will be unregistered.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function off(type: 'cooperation', callback?: AsyncCallback<void>): void;

   /**
   * Enables listening for mouse traversal events.
   *
   * @param { Callback<CooperationCallbackData> } callback used to receive mouse traversal events.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 22 static
   */
  function onCooperationChange(callback: Callback<CooperationCallbackData>): void;

  /**
   * Disables listening for mouse traversal events.
   *
   * @param { Callback<void> } [callback] callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 22 static
   */
  function offCooperationChange(callback?: Callback<void>): void;

}

export default inputDeviceCooperate;