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
 * @file NearLink Remote Device Connection Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * This module provides the capabilities of connecting to and managing NearLink remote devices, including connecting to
 * and disconnecting from remote devices, pairing with a trusted device and confirmation, adjusting the connection
 * interval, and subscribing to pairing requests.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace remoteDevice {
  /**
   * Enumerates the pairing statuses with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type PairingState = nearlinkConstant.PairingState;

  /**
   * Enumerates the connection states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * Enumerates the device types.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type DeviceClass = nearlinkConstant.DeviceClass;

  /**
   * Enumerates the logical link connection states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type AcbState = nearlinkConstant.AcbState;

  /**
   * Enumerates the connection intervals.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionInterval = nearlinkConstant.ConnectionInterval;

  /**
   * Creates a **RemoteDevice** instance.
   *
   * @param { string } address - Address of a remote device. The address format is **11:22:33:AA:BB:FF**.
   * @returns { RemoteDevice } **RemoteDevice** instance.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
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
   * @since 26.0.0 dynamic
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
   * @since 26.0.0 dynamic
   */
  function offPairingRequest(callback?: Callback<PairingRequestParam>): void;

  /**
   * Subscribes to pairing status change events. This API uses an asynchronous callback to return the result.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<PairingStateParam> } callback - Callback used to return the result of the pairing status change
   *     event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onPairingStateChange(callback: Callback<PairingStateParam>): void;

  /**
   * Unsubscribes from pairing status change events. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<PairingStateParam> } [callback] - Callback used to return the result of the pairing status change
   *     event.
   *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
   *     all callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offPairingStateChange(callback?: Callback<PairingStateParam>): void;

  /**
   * Subscribes to the connection status change event. This API uses an asynchronous callback to return the result.
   * Unlike [remoteDevice.onAcbStateChange]{@link remoteDevice.onAcbStateChange(callback: Callback<AcbStateParam>)}
   * which listens for the connection status change at the logical link level, this API listens for the connection
   * status change at the device level.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<ConnectionStateParam> } callback - Callback used to return the result of the connection status
   *     change event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onConnectionStateChange(callback: Callback<ConnectionStateParam>): void;

  /**
   * Unsubscribes from the connection status change event. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<ConnectionStateParam> } [callback] - Callback used to return the result of the connection status
   *     change event.
   *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
   *     all callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void;

  /**
   * Subscribes to the logical link connection status change event. This API uses an asynchronous callback to return the
   * result. This API is applicable when corresponding processing needs to be triggered when a logical link is
   * established or disconnected, for example, checking whether the link is ready before data transfer or clearing
   * resources after disconnection. Unlike
   * [remoteDevice.onConnectionStateChange]{@link remoteDevice.onConnectionStateChange(callback: Callback<ConnectionStateParam>)}
   * which listens for the connection status change at the device level, this API listens for the connection status
   * change at the logical link level.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<AcbStateParam> } callback - Callback used to return the result of the logical link connection
   *     status change event.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onAcbStateChange(callback: Callback<AcbStateParam>): void;

  /**
   * Unsubscribes from the logical link connection status change event. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { Callback<AcbStateParam> } [callback] - Callback used to return the result of the logical link connection
   *     status change event.
   *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
   *     all callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offAcbStateChange(callback?: Callback<AcbStateParam>): void;

  /**
   * Provides the method for operating on a remote device. Before using this method, you need to call
   * [remoteDevice.createRemoteDevice]{@link remoteDevice.createRemoteDevice} to create a
   * [RemoteDevice]{@link remoteDevice.RemoteDevice} instance. You need to create only one instance for a device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface RemoteDevice {
    /**
     * Initiates pairing with a remote device. This API uses a promise to return the result. After the pairing is
     * initiated, different types of dialog boxes will be displayed based on the input and output capability IDs of the
     * local and remote devices, for example, whether the devices have the display and keyboard input capabilities. The
     * user will need to confirm the pairing.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    startPairing(): Promise<void>;

    /**
     * Initiates pairing with a trusted remote device without a dialog box. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    startCrediblePairing(): Promise<void>;

    /**
     * Removes a paired device. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    removePairedDevice(): Promise<void>;

    /**
     * Cancels the ongoing pairing request. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    cancelDevicePairing(): Promise<void>;

    /**
     * Sets the pairing passcode. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } passcode - Pairing passcode entered by the user, which must be a six-digit number.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100045 - Passcode must be a 6-digit number.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setPairingPasscode(passcode: string): Promise<void>;

    /**
     * Sets the pairing confirmation. You can obtain the pairing request of the peer device using
     * [remoteDevice.onPairingRequest](docroot://reference/apis-connectivity-kit/js-apis-nearlink-remote-device-sys.md#remotedeviceonpairingrequest).
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { boolean } accept - Pairing confirmation. **true**: Accept the pairing. **false**: Reject the pairing.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setPairingConfirmation(accept: boolean): void;

    /**
     * Initiates a connection request to a remote device. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    connect(): Promise<void>;

    /**
     * Disconnects from the remote device. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disconnect(): Promise<void>;

    /**
     * Obtains the pairing status with a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { PairingState } Pairing status with a remote device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getPairingState(): PairingState;

    /**
     * Obtains the name of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { string } Remote device name. The value contains a maximum of 30 characters.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceName(): string;

    /**
     * Obtains the type of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceClass } Remote device type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceClass(): DeviceClass;

    /**
     * Obtains the connection status between the local and remote devices. Unlike
     * [getAcbState]{@link remoteDevice.RemoteDevice.getAcbState} which obtains the connection status at the logical
     * link (ACB) level, this API obtains the connection status at the device level.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { ConnectionState } Connection status between the local and remote devices.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getConnectionState(): ConnectionState;

    /**
     * Sets the alias of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } alias - Alias of the remote device. The value can contain a maximum of 64 characters and cannot
     *     be empty.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100046 - String exceeds maximum length.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setDeviceAlias(alias: string): void;

    /**
     * Obtains the alias of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { string } Alias of the remote device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceAlias(): string;

    /**
     * Obtains the logical link connection status with a remote device. This method is applicable when you need to check
     * whether a logical link is ready, for example, checking the logical link status before data transfer or message
     * communication. Unlike [getConnectionState]{@link remoteDevice.RemoteDevice.getConnectionState} which obtains the
     * connection status at the device level, this API obtains the connection status at the logical link (ACB) level.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { AcbState } Logical link connection state with a remote device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getAcbState(): AcbState;

    /**
     * Obtains the model of a remote device.
     *
     * @returns { DeviceModel } Model of the remote device.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceModel(): DeviceModel;

    /**
     * Obtains the information of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceInformation } Information of a remote device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceInformation(): DeviceInformation;

    /**
     * Obtains the received signal strength indicator (RSSI) of a remote device. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<int> } Promise used to return the RSSI value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getRssiValue(): Promise<int>;

    /**
     * Sets the interval for connecting to a remote device.
     *
     * @permission ohos.permission.MANAGE_NEARLINK
     * @param { ConnectionInterval } interval - Connection interval to be set.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setConnectionInterval(interval: ConnectionInterval): void;
  }

  /**
   * Describes the pairing state parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PairingStateParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * Indicates the previous pairing state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    preState: PairingState;
    /**
     * Indicates the current pairing state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: PairingState;
    /**
     * Indicates the pairing state reason.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    reason: PairingReason;
    /**
     * Indicates reason message. This field is intended for log information only
     * and should not be used for logic processing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    reasonMsg?: string;
  }

  /**
   * Enum for the pairing reason.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PairingReason {
    /**
     * Pairing succeed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_SUCCESS = 0,
    /**
     * Pairing failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_FAILURE = 1,
    /**
     * Pairing failed: ACB connection failed. The remote device may be powered off or out of range.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_ACB_CONNECTION_FAIL = 2,
    /**
     * Pairing failed: ACB connection limit exceeded.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_EXCEED_ACB_MAX = 3,
    /**
     * Pairing failed: Cancelled by remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_REMOTE_CANCELED = 4,
    /**
     * Pairing failed: Cancelled by local device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_LOCAL_CANCELED = 5,
    /**
     * Pairing failed: Authentication failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_AUTH_FAIL = 6
  }

  /**
   * Describes pairing request parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PairingRequestParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * Key for the device pairing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    passkey: string;
    /**
     * Indicates the pairing type.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    pairingType: PairingType;
  }

  /**
   * Enumerates the NearLink pairing types.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PairingType {
    /**
     * Pairing type that does not require a passkey. Users do not need to check the pairing code.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    NO_PASSKEY_CONFIRMATION = 0,
    /**
     * Pairing type with passcode authentication. Users need to enter the pairing code displayed on one device into the
     * other device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_TYPE_PASSCODE = 1,
    /**
     * Pairing type with authentication based on digit comparison. Users must ensure that the pairing codes on both
     * devices are the same.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_TYPE_NUMBER_COMPARE = 2
  }

  /**
   * Describes the connection state parameters.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionStateParam {
    /**
     * Indicates the device address.
     * The length must be 17, The value consists of hexadecimal digits and colons (:), for example, 11:22:33:AA:BB:FF.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * Indicates the previous connection state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    preState: ConnectionState;
    /**
     * Indicates the current connection state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: ConnectionState;
    /**
     * Connection reason.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    connectionReason: ConnectionReason;
    /**
     * Indicates reason message. This field is intended for log information only
     * and should not be used for logic processing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    reasonMsg?: string;
  }

  /**
   * Enum for the connection reason.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum ConnectionReason {
    /**
     * Connection succeeded.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_SUCCESS = 0,
    /**
     * Connection failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAILURE = 1,
    /**
     * Local device initiated disconnection.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_LOCAL_DISCONNECT = 2,
    /**
     * Remote device initiated disconnection.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_REMOTE_DISCONNECT = 3,
    /**
     * Connection failed: ACB connection failed. The remote device may be powered off or out of range.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_ACB_CONNECTION = 4,
    /**
     * Connection failed: Service discovery failed.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_SERVICE_DISCOVERY = 5,
    /**
     * Connection failed: No available services found on the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_NO_AVAILABLE_SERVICE = 6,
    /**
     * Connection failed: Connection limit exceeded.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_CONNECTION_NUM_LIMITED = 7
  }

  /**
   * Represents the result of the logical link connection status change event.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface AcbStateParam {
    /**
     * Device address, indicating that the logical link connection status with the device changes. The address format is
     * **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;

    /**
     * Current logical link connection status.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: AcbState;
  }

  /**
   * Describes the model of a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface DeviceModel {
    /**
     * Model ID of the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    modelId: string;

    /**
     * Sub-model ID of the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    subModelId: string;

    /**
     * Icon ID of the remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    iconId: string;
  }

  /**
   * Describes the remote device information.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface DeviceInformation {
    /**
     * The manufacturer data of the remote device.
     * The maximum length is 255.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerData: string;

    /**
     * The model data of the remote device.
     * The maximum length is 255.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    modelData: string;
  }
}

export default remoteDevice;