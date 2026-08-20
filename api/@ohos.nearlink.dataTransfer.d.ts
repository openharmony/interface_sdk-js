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
 * @file NearLink Data Transfer Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * This module provides the NearLink data transfer capability, including port channel management, connection management,
 * data sending and receiving, and connection status query and subscription.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace dataTransfer {
  /**
   * Enumerates the connection states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * Registers a port channel. A port channel can be used to connect to a remote device only after being registered. If
   * the port channel is no longer needed after use, call [dataTransfer.destroyPort]{@link dataTransfer.destroyPort} to
   * destroy it.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } uuid - NearLink service UUID, which is a string of 36 characters. The value consists of 32
   *     hexadecimal digits and four hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates
   *     a 128-bit ID. The value cannot be set to a standard NearLink UUID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100020 - The UUID is already registered.
   * @throws { BusinessError } 36100021 - Port exceeds the upper limit.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createPort(uuid: string): void;

  /**
   * Destroys the port channel.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } uuid - NearLink service UUID, which is a string of 36 characters. The value consists of 32
   *     hexadecimal digits and four hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates
   *     a 128-bit ID. The value cannot be set to a standard NearLink UUID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100022 - The UUID is not registered.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function destroyPort(uuid: string): void;

  /**
   * Connects to a remote device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionParams } params - Connection parameters of the port.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function connect(params: ConnectionParams): Promise<void>;

  /**
   * Disconnects from the remote device. This method is called to disconnect from the remote device after it is
   * successfully connected using [dataTransfer.connect]{@link dataTransfer.connect}. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionParams } params - Connection parameters of the port.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function disconnect(params: ConnectionParams): Promise<void>;

  /**
   * Subscribes to the connection state change event of the port channel. This API uses an asynchronous callback to
   * return the result.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<ConnectionResult> } callback - Callback used to return the negotiation result of port connection
   *     parameters with a remote device.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onConnectionStateChanged(callback: Callback<ConnectionResult>): void;

  /**
   * Unsubscribes from the connection state change event of the port channel. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { Callback<ConnectionResult> } [callback] - Callback used to return the result of port connection parameter
   *     negotiation with a remote device.
   *     <br>If this parameter is set, the current callback is unregistered. If this parameter is not specified, all
   *     callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offConnectionStateChanged(callback?: Callback<ConnectionResult>): void;

  /**
   * Sends data to a remote device using the device address and UUID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { DataParams } params - Parameters for sending data, including the remote device address, service UUID, and
   *     data packet to send.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100023 - Data transmission congested.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function writeData(params: DataParams): Promise<void>;

  /**
   * Subscribes to the port channel data receiving event. This API uses an asynchronous callback to return the result.
   *
   * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
   *
   * @param { Callback<DataParams> } callback - Callback used to return the parameters for data received by the port
   *     channel.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onReadData(callback: Callback<DataParams>): void;

  /**
   * Unsubscribes from the port channel data receiving event. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { Callback<DataParams> } [callback] - Callback used to return the parameters for data received by the port
   *     channel.
   *     <br>If this parameter is set, the current callback is unregistered. If this parameter is not specified, all
   *     callbacks corresponding to the event are unregistered.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offReadData(callback?: Callback<DataParams>): void;

  /**
   * Obtains the port channel connection state with a remote device.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionStateParams } params - Connection parameters of the port.
   * @returns { ConnectionState } NearLink port channel connection state with a remote device.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID in connection parameters.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getConnectionState(params: ConnectionStateParams): ConnectionState;

  /**
   * Defines the parameters for initiating a port connection.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionParams {
    /**
     * NearLink address of a remote device. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
    /**
     * Data transfer mode with a remote device. The default value is **BASIC**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    transferMode?: TransferMode;
  }

  /**
   * Defines the parameters for port data sending and receiving.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface DataParams {
    /**
     * NearLink address of a remote device. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
    /**
     * Data packet. When this parameter is used in [dataTransfer.writeData]{@link dataTransfer.writeData}, it indicates
     * the data to be sent. When the parameter is used in
     * [dataTransfer.onReadData]{@link dataTransfer.onReadData(callback: Callback<DataParams>)}, it indicates the
     * received data.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    data: ArrayBuffer;
  }

  /**
   * Represents the result of port connection parameter negotiation with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionResult {
    /**
     * NearLink address of a remote device. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
    /**
     * Negotiated packet size of data to be sent and received, in bytes. The value range is [0, 65535].
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    mtu: int;
    /**
     * Connection state with a remote device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: ConnectionState;
  }

  /**
   * Defines the parameters for obtaining the port channel connection state.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionStateParams {
    /**
     * NearLink address of a remote device. The address format is **11:22:33:AA:BB:FF**.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * NearLink service UUID, which is a string of 36 characters. The value consists of 32 hexadecimal digits and four
     * hyphens (-), for example, **FFFFFFFF-1234-5678-ABCD-000000001234**, which indicates a 128-bit ID. The value
     * cannot be set to a standard NearLink UUID.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
  }

  /**
   * Enumerates the data transfer modes with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum TransferMode {
    /**
     * Basic mode, without a data retransfer mechanism. This mode is applicable to services sensitive to latency and
     * throughput.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    BASIC = 0,
    /**
     * Reliable mode, with a data retransfer mechanism. This mode is applicable to services that require high data
     * integrity.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    RELIABLE = 1
  }
}
export default dataTransfer;