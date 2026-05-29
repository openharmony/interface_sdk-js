/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type { Callback } from './@ohos.base';

/**
 * Provides methods to accessing bluetooth OPP(OBEX OBJECT PUSH Profile)-related capabilities.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @since 16 dynamic
 * @since 26.0.0 static
 */
declare namespace opp {
  /**
   * create the instance of OPP server profile.
   *
   * @returns { OppServerProfile } Returns the instance of opp profile.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  function createOppServerProfile(): OppServerProfile;

  /**
   * Manager OPP server profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  interface OppServerProfile {
    /**
     * Subscribe the event reported when the file transfer status changes.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 16 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'transferStateChange' } type - Type of transport state change event to listen for.
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 16 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    on(type: 'transferStateChange', callback: Callback<OppTransferInformation>): void;

    /**
     * Subscribe the event reported when the file transfer status changes.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onTransferStateChange(callback: Callback<OppTransferInformation>): void;

    /**
     * Unsubscribe the event reported when the file transfer status changes.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { 'transferStateChange' } type - Type of transport state change event to listen for.
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    off(type: 'transferStateChange', callback?: Callback<OppTransferInformation>): void;

    /**
     * Unsubscribe the event reported when the file transfer status changes.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { Callback<OppTransferInformation> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offTransferStateChange(callback?: Callback<OppTransferInformation>): void;

    /**
     * Subscribe to the event of receiving a file transfer request.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 16 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'receiveIncomingFile' } type - Type of the event for receiving a file request to listen for.
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 16 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    on(type: 'receiveIncomingFile', callback: Callback<OppTransferInformation>): void;

    /**
     * Subscribe to the event of receiving a file transfer request.
     * If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real.
     * Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC)
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onReceiveIncomingFile(callback: Callback<OppTransferInformation>): void;

    /**
     * Unsubscribe to the event of receiving a file transfer request.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { 'receiveIncomingFile' } type - Type of the event for receiving a file request to listen for.
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    off(type: 'receiveIncomingFile', callback?: Callback<OppTransferInformation>): void;

    /**
     * Unsubscribe to the event of receiving a file transfer request.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { Callback<OppTransferInformation> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offReceiveIncomingFile(callback?: Callback<OppTransferInformation>): void;

    /**
     * Send files to the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { Array<FileHolder> } fileHolds - Indicates the information about files to be sent.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to send file.
     * @throws { BusinessError } 2903001 - The file type is not supported.
     * @throws { BusinessError } 2903002 - Current Transfer Information is busy.
     * @throws { BusinessError } 2903003 - The file is not accessible.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    sendFile(deviceId: string, fileHolds: Array<FileHolder>): Promise<void>;

    /**
     * Set the user confirmation information for incoming files.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { boolean } accept - Indicates whether to accept the incoming file, {@code true} indicates accept or
     *     {@code false} otherwise.
     * @param { int } fileFd : the receive file fd to receive need contains open when accepting.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to confirm the received file information.
     * @throws { BusinessError } 2903002 - Current Transfer Information is busy.
     * @throws { BusinessError } 2903003 - The file is not accessible.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    setIncomingFileConfirmation(accept: boolean, fileFd: int): Promise<void>;

    /**
     * cancel the current file transfer action.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to cancel the current transfer.
     * @throws { BusinessError } 2903002 - Current Transfer Information is busy.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    cancelTransfer(): Promise<void>;

    /**
     * Obtains the information about the file that is being transferred.
     * On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
     * the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 16 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @returns { Promise<OppTransferInformation> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to obtain the current transmission information.
     * @throws { BusinessError } 2903004 - Current Transfer Information is empty.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    getCurrentTransferInformation(): Promise<OppTransferInformation>;

    /**
     * Set the URI of the last received file.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } uri - the uri of last received file.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Failed to set the URI of the last file.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    setLastReceivedFileUri(uri: string): Promise<void>;
  }
  /**
   * Enum for file transfer direction.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  enum DirectionType {
    /**
     * The file transfer direction to send.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    OUTBOUND = 0,

    /**
     * The file transfer direction to receive.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    INBOUND = 1
  }

  /**
   * Enum for the file transfer status.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  enum TransferStatus {
    /**
     * The file is waiting next operate.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    PENDING = 0,

    /**
     * The file is transfering.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    RUNNING = 1,

    /**
     * The file is transfer finished.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    FINISH = 2
  }

  /**
   * Enum for the file transfer result.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  enum TransferResult {
    /**
     * Success
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    SUCCESS = 0,

    /**
     * The transfer file type is not supported.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_UNSUPPORTED_TYPE = 1,

    /**
     * The peer device cannot process the request.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_BAD_REQUEST = 2,

    /**
     * The peer device refuses to receive the file.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_NOT_ACCEPTABLE = 3,

    /**
     * The peer device cancels the ongoing file transfer process.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_CANCELED = 4,

    /**
     * Failed to connect to the peer device.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_CONNECTION_FAILED = 5,

    /**
     * Indicates that the file transfer fails.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_TRANSFER_FAILED = 6,

    /**
     * Unknown error
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    ERROR_UNKNOWN = 7
  }

  /**
   * Describes the transferred file information.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  interface OppTransferInformation {
    /**
     * Path of the file to be transferred.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    filePath: string;

    /**
     * Device name of the peer transmission object
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    remoteDeviceName: string;

    /**
     * Device Address of the peer transmission object
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    remoteDeviceId: string;

    /**
     * File Transfer Direction
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    direction: DirectionType;

    /**
     * File transfer status
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    status: TransferStatus;

    /**
     * File transfer result
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    result: TransferResult;

    /**
     * Number of bytes of the file that have been transferred currently
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    currentBytes: long;

    /**
     * Total number of file bytes to transfer
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    totalBytes: long;

    /**
     * Number of files currently transferred
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    currentCount: int;

    /**
     * Total number of transferred files
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    totalCount: int;
  }

  /**
   * Describes the file info for transfer
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.0.0 static
   */
  interface FileHolder {
    /**
     * The file path
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    filePath: string;

    /**
     * The file size
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    fileSize: long;

    /**
     * The file fd
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.0.0 static
     */
    fileFd: int;
  }
}
export default opp;