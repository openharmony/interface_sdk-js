/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Basic NearLink Management Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * This module provides basic NearLink management capabilities, including enabling or disabling NearLink, obtaining the
 * MAC address of the local device, and setting the connection mode.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace manager {

  /**
   * Checks whether the current device supports NearLink.
   *
   * @returns { boolean } Whether the current device supports NearLink. The value **true** indicates that the device
   *     supports NearLink, and **false** indicates the opposite.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function isNearLinkSupported(): boolean;

  /**
   * Enables NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 203 - EDM denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function enable(): void;

  /**
   * Disables NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function disable(): void;

  /**
   * Queries the NearLink status.
   *
   * @returns { NearlinkState } NearLink status.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getState(): NearlinkState;

  /**
   * Queries the MAC address of the local device.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.GET_NEARLINK_LOCAL_MAC
   * @returns { string } Local MAC address, for example, **'11:22:33:AA:BB:FF'**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getLocalAddress(): string;

  /**
   * Queries the NearLink name on the local device.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string } NearLink name on the local device. The value contains a maximum of 30 characters.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getLocalName(): string;

  /**
   * Obtains the devices paired with the current device.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string[] } List of paired device addresses.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getPairedDevices(): string[];

  /**
   * Sets the connection mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @param { ConnectionMode } mode - Connection mode to be set.
   * @param { int } duration - Duration of the mode to set, in seconds.  The value **0** indicates no time limit.
   *     <br>The value should be an integer.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>;

  /**
   * Restores a device to its factory settings. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_NEARLINK
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function factoryReset(): Promise<void>;

  /**
   * Subscribes to the NearLink status change event. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<NearlinkState> } callback - Callback used to return the NearLink status.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onStateChange(callback: Callback<NearlinkState>): void;

  /**
   * Unsubscribes from the NearLink status change event. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<NearlinkState> } [callback] - Callback used to return the NearLink status.
   *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
   *     all callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offStateChange(callback?: Callback<NearlinkState>): void;

  /**
   * Enumerated the NearLink statuses.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum NearlinkState {
    /**
     * NearLink is being turned on.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_TURNING_ON = 0,
    /**
     * NearLink is turned on.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_ON = 1,
    /**
     * NearLink is being turned off.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_TURNING_OFF = 2,
    /**
     * NearLink is turned off.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_OFF = 3
  }

  /**
   * Enumerates the connection modes.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum ConnectionMode {
    /**
     * The device cannot be connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SLE_MODE_UNCONNECTABLE = 0,
    /**
     * The device can be connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SLE_MODE_CONNECTABLE = 1
  }
}
export default manager;