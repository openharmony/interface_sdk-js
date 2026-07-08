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

import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * Provides interaction methods such as pairing and connection with remote devices.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace remoteDevice {
  /**
   * Indicates the pairing state.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type PairingState = nearlinkConstant.PairingState;

  /**
   * Indicates the connection state.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * Indicates the device class.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type DeviceClass = nearlinkConstant.DeviceClass;

  /**
   * Indicates the ACB(Asynchronous Connection-Oriented Bidirectional) connection status.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type AcbState = nearlinkConstant.AcbState;

  /**
   * Indicates the connection interval.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionInterval = nearlinkConstant.ConnectionInterval;

  /**
   * Creates a remote device instance.
   *
   * @param { string } address - Indicates the device address.
   *     <br>The length must be 17, The value consists of hexadecimal digits and colons (:),
   *     for example, 11:22:33:AA:BB:FF.
   * @returns { RemoteDevice } Returns a near link remote device instance.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createRemoteDevice(address: string): RemoteDevice;

  /**
   * Subscribes to pairing request events from remote NearLink devices.
   *
   * This event is accessible only to system applications that granted the ohos.permission.NEARLINK_ACCESS permission.
   * If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,
   * the callback returns the real device address; otherwise, a random device address is returned.
   *
   * @param { Callback<PairingRequestParam> } callback - Callback used to listen for the pairing request event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onPairingRequest(callback: Callback<PairingRequestParam>): void;

  /**
   * Unsubscribes from pairing request events from remote NearLink devices.
   *
   * @param { Callback<PairingRequestParam> } [callback] - Callback used to listen for the pairing request event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offPairingRequest(callback?: Callback<PairingRequestParam>): void;

  /**
   * Subscribes to NearLink pairing state change events.
   *
   * This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.
   * If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,
   * the callback returns the real device address; otherwise, a random device address is returned.
   *
   * @param { Callback<PairingStateParam> } callback - Callback function used to listen for the pairing state event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onPairingStateChange(callback: Callback<PairingStateParam>): void;

  /**
   * Unsubscribes from NearLink pairing state change events.
   *
   * @param { Callback<PairingStateParam> } [callback] - Callback function used to listen for the pairing state event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offPairingStateChange(callback?: Callback<PairingStateParam>): void;

  /**
   * Subscribes to NearLink connection state change events.
   *
   * This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.
   * If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,
   * the callback returns the real device address; otherwise, a random device address is returned.
   *
   * @param { Callback<ConnectionStateParam> } callback - Callback used to listen for the connection state changed event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onConnectionStateChange(callback: Callback<ConnectionStateParam>): void;

  /**
   * Unsubscribes from NearLink connection state change events.
   *
   * @param { Callback<ConnectionStateParam> } [callback] - Callback used to listen for the connection state changed event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void;

  /**
   * Subscribes to the NearLink ACB connection status change event.
   *
   * This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.
   * If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,
   * the callback returns the real device address; otherwise, a random device address is returned.
   *
   * @param { Callback<AcbStateParam> } callback - Callback of the event to be listened to.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onAcbStateChange(callback: Callback<AcbStateParam>): void;

  /**
   * Unsubscribes from the NearLink ACB connection status change event.
   *
   * @param { Callback<AcbStateParam> } [callback] - Callback of the event to be listened to.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offAcbStateChange(callback?: Callback<AcbStateParam>): void;

  /**
   * Remote device operation methods.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface RemoteDevice {
    /**
     * Initiate pairing to remote NearLink device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startPairing(): Promise<void>;

    /**
     * Starts pairing with a credible remote NearLink device.
     * This interface does not trigger a dialog box and does not require user authorization.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startCrediblePairing(): Promise<void>;

    /**
     * Remove a paired remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removePairedDevice(): Promise<void>;

    /**
     * Cancel an in-progress pairing request.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cancelDevicePairing(): Promise<void>;

    /**
     * Set the passcode during pairing if the pairing type is passcode
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } passcode - The passcode entered by the user. It must be a 6-digit number
     *     <br>The length must be 6, Six digits within 10.
     * @returns { Promise<void> } The promise object is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100045 - Passcode must be a 6-digit number.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPairingPasscode(passcode: string): Promise<void>;

    /**
     * Set the confirmation to a pairing request.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { boolean } accept - Set this parameter to true if the pairing request is accepted.
     *     Otherwise, set it to false.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPairingConfirmation(accept: boolean): void;

    /**
     * Connect all allowed profiles.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Returns the result of connecting to profiles as a Promise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connect(): Promise<void>;

    /**
     * Disconnect all connected profiles.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Returns the result of connecting to profiles as a Promise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    disconnect(): Promise<void>;

    /**
     * Gets the pairing state.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { PairingState } Returns the pairing state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPairingState(): PairingState;

    /**
     * Gets the name of the NearLink device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { string } Returns the device name.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceName(): string;

    /**
     * Gets the type of the NearLink device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceClass } Indicates the type of the NearLink device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceClass(): DeviceClass;

    /**
     * Gets the profile connection state.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { ConnectionState } Returns the connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getConnectionState(): ConnectionState;

    /**
     * Sets the alias of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } alias - The alias of a remote device
     *     <br>The maximum length is 64 and cannot be empty.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100046 - String exceeds maximum length.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setDeviceAlias(alias: string): void;

    /**
     * Gets the alias of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { string } Returns the alias of a remote device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceAlias(): string;

    /**
     * Gets the ACB connection state.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { AcbState } Returns the ACB connection state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getAcbState(): AcbState;

    /**
     * Obtains the model information of a remote device.
     *
     * @returns { DeviceModel } Returns the remote device's model information.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceModel(): DeviceModel;

    /**
     * Obtains the remote device information.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceInformation } Returns the remote device information.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceInformation(): DeviceInformation;

    /**
     * Gets the RSSI value of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<int> } Returns promise object of RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getRssiValue(): Promise<int>;

    /**
     * Sets the connection interval with a remote device.
     *
     * @permission ohos.permission.MANAGE_NEARLINK
     * @param { ConnectionInterval } interval - The connection interval to set.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setConnectionInterval(interval: ConnectionInterval): void;
  }

  /**
   * Describes the pairing state parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PairingStateParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * Indicates the previous pairing state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preState: PairingState;
    /**
     * Indicates the current pairing state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: PairingState;
    /**
     * Indicates the pairing state reason.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: PairingReason;
    /**
     * Indicates reason message. This field is intended for log information only
     * and should not be used for logic processing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reasonMsg?: string;
  }

  /**
   * Enum for the pairing reason.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PairingReason {
    /**
     * Pairing succeed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_SUCCESS = 0,
    /**
     * Pairing failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_FAILURE = 1,
    /**
     * Pairing failed: ACB connection failed. The remote device may be powered off or out of range.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_ACB_CONNECTION_FAIL = 2,
    /**
     * Pairing failed: ACB connection limit exceeded.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_EXCEED_ACB_MAX = 3,
    /**
     * Pairing failed: Cancelled by remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_REMOTE_CANCELED = 4,
    /**
     * Pairing failed: Cancelled by local device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_LOCAL_CANCELED = 5,
    /**
     * Pairing failed: Authentication failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_AUTH_FAIL = 6
  }

  /**
   * Describes pairing request parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PairingRequestParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * Key for the device pairing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    passkey: string;
    /**
     * Indicates the pairing type.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pairingType: PairingType;
  }

  /**
   * Enum for the pairing type.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PairingType {
    /**
     * Without passkey, the user needs to accept or reject the pairing request.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NO_PASSKEY_CONFIRMATION = 0,
    /**
     * The user needs to enter the passcode displayed on the peer device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_TYPE_PASSCODE = 1,
    /**
     * The user needs to compare the number displayed on both devices.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_TYPE_NUMBER_COMPARE = 2
  }

  /**
   * Describes the connection state parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionStateParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * Indicates the previous connection state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preState: ConnectionState;
    /**
     * Indicates the current connection state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: ConnectionState;
    /**
     * Connection reason.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connectionReason: ConnectionReason;
    /**
     * Indicates reason message. This field is intended for log information only
     * and should not be used for logic processing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reasonMsg?: string;
  }

  /**
   * Enum for the connection reason.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum ConnectionReason {
    /**
     * Connection succeeded.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_SUCCESS = 0,
    /**
     * Connection failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAILURE = 1,
    /**
     * Local device initiated disconnection.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_LOCAL_DISCONNECT = 2,
    /**
     * Remote device initiated disconnection.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_REMOTE_DISCONNECT = 3,
    /**
     * Connection failed: ACB connection failed. The remote device may be powered off or out of range.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_ACB_CONNECTION = 4,
    /**
     * Connection failed: Service discovery failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_SERVICE_DISCOVERY = 5,
    /**
     * Connection failed: No available services found on the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_NO_AVAILABLE_SERVICE = 6,
    /**
     * Connection failed: Connection limit exceeded.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_CONNECTION_NUM_LIMITED = 7
  }

  /**
   * ACB connection status parameter.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AcbStateParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;

    /**
     * ACB connection status.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: AcbState;
  }

  /**
   * Describes the remote device's model information.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DeviceModel {
    /**
     * The model ID of the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelId: string;

    /**
     * The sub-model ID of the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    subModelId: string;

    /**
     * The icon ID of the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    iconId: string;
  }

  /**
   * Describes the remote device information.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DeviceInformation {
    /**
     * The manufacturer data of the remote device.
     * The maximum length is 255.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerData: string;

    /**
     * The model data of the remote device.
     * The maximum length is 255.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelData: string;
  }
}

export default remoteDevice;