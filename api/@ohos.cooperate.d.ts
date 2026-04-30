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
 * The **cooperate** module implements screen hopping for two or more networked devices to share the keyboard and mouse
 *     for collaborative operations.
 *
 * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
 * @systemapi Hide this for inner system use.
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace cooperate {
  /**
   * Represents a screen hopping message notification.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead CooperateState
   */
  enum CooperateMsg {
    /**
     * The preparation for screen hopping is finished.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_PREPARE
     */
    COOPERATE_PREPARE = 0,

    /**
     * The preparation for screen hopping is cancelled.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_UNPREPARE
     */
    COOPERATE_UNPREPARE = 1,

    /**
     * Screen hopping starts.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_ACTIVATE
     */
    COOPERATE_ACTIVATE = 2,

    /**
     * Starting screen hopping succeeds.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_ACTIVATE_SUCCESS
     */
    COOPERATE_ACTIVATE_SUCCESS = 3,

    /**
     * Starting screen hopping fails.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_ACTIVATE_FAILURE
     */
    COOPERATE_ACTIVATE_FAIL = 4,

    /**
     * Stopping screen hopping succeeds.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_DEACTIVATE_SUCCESS
     */
    COOPERATE_DEACTIVATE_SUCCESS = 5,

    /**
     * Stopping screen hopping fails.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead CooperateState.COOPERATE_DEACTIVATE_FAILURE
     */
    COOPERATE_DEACTIVATE_FAIL = 6,

    /**
     * The screen hopping session is disconnected.
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
   * Enumerates the screen hopping states.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  enum CooperateState {
    /**
     * The preparation for screen hopping is finished.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_PREPARE = 0,

    /**
     * The preparation for screen hopping is cancelled.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_UNPREPARE = 1,

    /**
     * Screen hopping starts.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_ACTIVATE = 2,

    /**
     * Starting screen hopping succeeds.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_ACTIVATE_SUCCESS = 3,

    /**
     * Screen hopping fails to start.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_ACTIVATE_FAILURE = 4,

    /**
     * Stopping screen hopping succeeds.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_DEACTIVATE_SUCCESS = 5,

    /**
     * Screen hopping fails to stop.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_DEACTIVATE_FAILURE = 6,

    /**
     * The screen hopping session is disconnected.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    COOPERATE_SESSION_DISCONNECTED = 7
  }

  /**
   * Defines a screen hopping status change event.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  interface CooperateMessage {
    /**
     * Descriptor of the target device for screen hopping.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    networkId: string;

    /**
     * Screen hopping status.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    state: CooperateState;
  }

  /**
   * Defines the mouse pointer position for screen hopping.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface MouseLocation {
    /**
     * Position of the mouse pointer on the X coordinate of the screen.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayX: int;

    /**
     * Position of the mouse pointer on the Y coordinate of the screen.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayY: int;

    /**
     * Screen width, in pixels.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayWidth: int;

    /**
     * Screen height, in pixels.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    displayHeight: int;
  }

  /**
   * Prepares for screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Prepares for screen hopping. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * Prepares for screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Prepares for screen hopping. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels the preparation for screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Cancels the preparation for screen hopping. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels the preparation for screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Cancels the preparation for screen hopping. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function unprepareCooperate(): Promise<void>;

  /**
   * Starts screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @param { string } targetNetworkId - Descriptor of the target device for screen hopping.
   * @param { number } inputDeviceId - Identifier of the input device for screen hopping.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Starts screen hopping. This API uses a promise to return the result.
   *
   * @param { string } targetNetworkId - Descriptor of the target device for screen hopping.
   * @param { number }inputDeviceId - Identifier of the input device for screen hopping.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Starts screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } targetNetworkId - Descriptor of the target device for screen hopping.
   * @param { int } inputDeviceId - Identifier of the input device for screen hopping.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Starts screen hopping. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } targetNetworkId - Descriptor of the target device for screen hopping.
   * @param { int }inputDeviceId - Identifier of the input device for screen hopping.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Stops screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } isUnchained - Whether to disable the cross-device link.<br> The value **true** means to disable
   *     the cross-device link, and the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Stops screen hopping. This API uses a promise to return the result.
   *
   * @param { boolean } isUnchained - Whether to disable the cross-device link.<br> The value **true** means to disable
   *     the cross-device link, and the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead deactivateCooperate(isUnchained: boolean)
   */
  function deactivate(isUnchained: boolean): Promise<void>;

  /**
   * Stops screen hopping. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { boolean } isUnchained - Whether to disable the cross-device link. The value **true** means to disable the
   *     cross-device link, and the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
   * Stops screen hopping. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { boolean } isUnchained - Whether to disable the cross-device link. The value **true** means to disable the
   *     cross-device link, and the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function deactivateCooperate(isUnchained: boolean): Promise<void>;

  /**
   * Obtains the screen hopping status of the target device. This API uses an asynchronous callback to return the
   *     result.
   *
   * @param { string } networkId - Descriptor of the target device for screen hopping.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     screen hopping is enabled, and the value **false** indicates the opposite.
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
   * Obtains the screen hopping status of the target device. This API uses a promise to return the result.
   *
   * @param { string } networkId - Descriptor of the target device for screen hopping.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that screen hopping
   *     is enabled, and the value **false** indicates the opposite.
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
   * Obtains the screen hopping status of the target device. This API uses an asynchronous callback to return the
   *     result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } networkId - Descriptor of the target device for screen hopping.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     screen hopping is enabled, and the value **false** indicates the opposite.
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
   * Obtains the screen hopping status of the target device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } networkId - Descriptor of the target device for screen hopping.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that screen hopping
   *     is enabled, and the value **false** indicates the opposite.
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
   * Enables listening for screen hopping status change events.
   *
   * @param { 'cooperate' } type - Event type. The value is **cooperate**.
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
   * Disables listening for screen hopping status change events.
   *
   * @param { 'cooperate' } type - Event type. The value is **cooperate**.
   * @param { Callback<void> } callback - Callback to be unregistered. If this parameter is not specified, all callbacks
   *     registered by the current application will be unregistered.
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
   * Enables listening for screen hopping status change events.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMessage' } type - Event type. The value is **cooperateMessage**.
   * @param { Callback<CooperateMessage> } callback - Callback used to return the result.
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
   * Disables listening for screen hopping status change events.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMessage' } type - Event type. The value is **cooperateMessage**.
   * @param { Callback<CooperateMessage> } [callback] - Callback to be unregistered. If this parameter is not specified,
   *     all callbacks registered by the current application will be unregistered.
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
   * Registers a listener for the mouse cursor position of a device.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMouse' } type - Event type, which is **'cooperateMouse'**.
   * @param { string } networkId - Descriptor of the target device.
   * @param { Callback<MouseLocation> } callback - Callback used to return the mouse cursor position of the device.
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
   * Unregisters the listener for the mouse cursor position of a device.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { 'cooperateMouse' } type - Event type, which is **'cooperateMouse'**.
   * @param { string } networkId - Descriptor of the target device.
   * @param { Callback<MouseLocation> } [callback] - Callback to be unregistered. If this parameter is not specified,
   *     all callbacks registered by the current application will be unregistered.
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
   * Starts screen hopping based on the specified options. This API uses a promise to return the result.
   *
   * @permission ohos.permission.COOPERATE_MANAGER
   * @param { string } targetNetworkId - Descriptor of the target device for screen hopping.
   * @param { int } inputDeviceId - ID of the input device that initiates screen hopping.
   * @param { CooperateOptions } cooperateOptions - Screen hopping options, such as the exit position. If this parameter
   *     is not set, this API works in the same way as
   *     [activateCooperate]{@link activateCooperate(targetNetworkId: string, inputDeviceId: int)}.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Screen hopping options, such as the exit position.
   *
   * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface CooperateOptions {

    /**
     * X coordinate of the mouse cursor.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayX: int;

    /**
     * Screen ID of the peer device.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Cooperate
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    displayId: long;

    /**
     * Y coordinate of the mouse cursor.
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