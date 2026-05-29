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
 * @file
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * Provides methods to manage NearLink devices.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace manager {

  /**
   * Check whether the current device supports NearLink.
   *
   * @returns { boolean } Return whether the NearLink is supported.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isNearLinkSupported(): boolean;

  /**
   * Turns on NearLink.
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
   * @since 26.0.0 dynamic&static
   */
  function enable(): void;

  /**
   * Turns off NearLink.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function disable(): void;

  /**
   * Gets the NearLink state.
   *
   * @returns { NearlinkState } Returns the NearLink state.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getState(): NearlinkState;

  /**
   * Gets the MAC address of the local device.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.GET_NEARLINK_LOCAL_MAC
   * @returns { string } The local MAC address. For example, "11:22:33:AA:BB:FF".
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getLocalAddress(): string;

  /**
   * Gets the local device's name.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string } Returns the device's name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getLocalName(): string;

  /**
   * Gets the list of devices that have been paired with the current device.
   * If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned.
   * Otherwise, a random device address is returned.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string[] } Returns a list of paired devices' address in MAC format (e.g., "11:22:33:AA:BB:FF").
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPairedDevices(): string[];

  /**
   * Sets the NearLink connection mode for a device.
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @param { ConnectionMode } mode - Indicates the NearLink connection mode to be set.
   * @param { int } duration - Indicates the duration in seconds for the setting mode. A value of 0 means unlimited.
   *     <br>Unit: Seconds, The value must be an integer greater than or equal to 0.
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>;

  /**
   * Restores NearLink settings.
   *
   * @permission ohos.permission.MANAGE_NEARLINK
   * @returns { Promise<void> } Returns the promise object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - System API is not allowed to be called by non-system applications.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function factoryReset(): Promise<void>;

  /**
   * Subscribes to state change events.
   *
   * @param { Callback<NearlinkState> } callback - Callback used to listen for the state change event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onStateChange(callback: Callback<NearlinkState>): void;

  /**
   * Unsubscribes from state change events.
   *
   * @param { Callback<NearlinkState> } [callback] - Callback used to listen for the state change event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offStateChange(callback?: Callback<NearlinkState>): void;

  /**
   * The enum of NearLink state.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum NearlinkState {
    /**
     * Indicates that NearLink is turning on.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_TURNING_ON = 0,
    /**
     * Indicates that NearLink is on and ready for use.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_ON = 1,
    /**
     * Indicates that NearLink is turning off.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_TURNING_OFF = 2,
    /**
     * Indicates that NearLink has turned off.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_OFF = 3
  }

  /**
   * The enum of connection mode.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum ConnectionMode {
    /**
     * Indicates that the device is not connectable.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SLE_MODE_UNCONNECTABLE = 0,
    /**
     * Indicates that the device is connectable.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SLE_MODE_CONNECTABLE = 1
  }
}
export default manager;
