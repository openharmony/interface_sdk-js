/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback, ErrorCallback } from "./@ohos.base";
import connection from "./@ohos.net.connection";
import cert from "./@ohos.security.cert";

/**
 * Provides TCP and UDP Socket APIs.
 * @namespace socket
 * @syscap SystemCapability.Communication.NetStack
 * @since 7
 */
declare namespace socket {
  export import NetAddress = connection.NetAddress;
  /**
   * Deposit certificate
   * @crossplatform
   * @since 9
   */
  export type X509CertRawData = cert.EncodingBlob;

  /**
   * Creates a UDPSocket object.
   * @crossplatform
   * @since 7
   */
  function constructUDPSocketInstance(): UDPSocket;

  /**
   * Creates a TCPSocket object.
   * @crossplatform
   * @since 7
   */
  function constructTCPSocketInstance(): TCPSocket;

  /**
   * Creates a TLSSocket object.
   * @crossplatform
   * @since 9
   */
  function constructTLSSocketInstance(): TLSSocket;

  /**
   * Defines the parameters for sending data over the UDPSocket connection.
   * @interface UDPSendOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface UDPSendOptions {
    /**
     * Data to send.
     * @type {string | ArrayBuffer}
     * @crossplatform
     * @since 7
     */
    data: string | ArrayBuffer;

    /**
     * Destination address.
     * @type {NetAddress}
     * @crossplatform
     * @since 7
     */
    address: NetAddress;
  }

  /**
   * @interface ExtraOptionsBase
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface ExtraOptionsBase {
    /**
     * Size of the receive buffer, in MBS.
     * @type {number}
     * @crossplatform
     * @since 7
     */
    receiveBufferSize?: number;

    /**
     * Size of the send buffer, in MBS.
     * @type {number}
     * @crossplatform
     * @since 7
     */
    sendBufferSize?: number;

    /**
     * Whether to reuse addresses. The default value is false.
     * @crossplatform
     * @type {boolean}
     * @since 7
     */
    reuseAddress?: boolean;

    /**
     * Timeout duration of the UDPSocket connection, in milliseconds.
     * @crossplatform
     * @type {number}
     * @since 7
     */
    socketTimeout?: number;
  }

  /**
   * Defines other properties of the UDPSocket connection.
   * @interface UDPExtraOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface UDPExtraOptions extends ExtraOptionsBase {
    /**
     * Whether to send broadcast messages. The default value is false.
     * @type {boolean}
     * @crossplatform
     * @since 7
     */
    broadcast?: boolean;
  }

  /**
   * Defines the status of the socket connection.
   * @interface SocketStateBase
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface SocketStateBase {
    /**
     * Whether the connection is in the bound state.
     * @type {boolean}
     * @crossplatform
     * @since 7
     */
    isBound: boolean;

    /**
     * Whether the connection is in the closed state.
     * @type {boolean}
     * @crossplatform
     * @since 7
     */
    isClose: boolean;

    /**
     * Whether the connection is in the connected state.
     * @type {boolean}
     * @crossplatform
     * @since 7
     */
    isConnected: boolean;
  }

  /**
   * Defines information about the socket connection.
   * @interface SocketRemoteInfo
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface SocketRemoteInfo {
    /**
     * Bound IP address.
     * @type {string}
     * @crossplatform
     * @since 7
     */
    address: string;

    /**
     * Network protocol type. The options are as follows: IPv4, IPv6.
     * @type {string}
     * @crossplatform
     * @since 7
     */
    family: 'IPv4' | 'IPv6';

    /**
     * Port number. The value ranges from 0 to 65535.
     * @type {number}
     * @crossplatform
     * @since 7
     */
    port: number;

    /**
     * Length of the server response message, in bytes.
     * @type {number}
     * @crossplatform
     * @since 7
     */
    size: number;
  }

  /**
   * Defines a UDPSocket connection.
   * @interface UDPSocket
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface UDPSocket {
    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     * @param { NetAddress } address Destination address. {@link NetAddress}
     * @param { AsyncCallback<void> } callback Returns the callback of bind.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     * @param { NetAddress } address Destination address. {@link NetAddress}
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    bind(address: NetAddress): Promise<void>;

    /**
     * Sends data over a UDPSocket connection.
     * @param { UDPSendOptions } options Optional parameters {@link UDPSendOptions}.
     * @param { AsyncCallback<void> } callback Returns the callback of send.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    send(options: UDPSendOptions, callback: AsyncCallback<void>): void;

    /**
     * Sends data over a UDPSocket connection.
     * @param { UDPSendOptions } options Optional parameters {@link UDPSendOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    send(options: UDPSendOptions): Promise<void>;

    /**
     * Closes a UDPSocket connection.
     * @param { AsyncCallback<void> } callback Returns the callback of close.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * Closes a UDPSocket connection.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    close(): Promise<void>;

    /**
     * Obtains the status of the UDPSocket connection.
     * @param { AsyncCallback<SocketStateBase> } callback Callback used to return the result. {@link SocketStateBase}.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * Obtains the status of the UDPSocket connection.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    getState(): Promise<SocketStateBase>;

    /**
     * Sets other attributes of the UDPSocket connection.
     * @param { UDPExtraOptions } options Optional parameters {@link UDPExtraOptions}.
     * @param { AsyncCallback<void> }callback Returns the callback of setExtraOptions.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * Sets other attributes of the UDPSocket connection.
     * @param { UDPExtraOptions } options Optional parameters {@link UDPExtraOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    setExtraOptions(options: UDPExtraOptions): Promise<void>;

    /**
     * Listens for message receiving events of the UDPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback callback function that returns the message
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    on(type: 'message', callback: Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }>): void;

    /**
     * Cancels listening for message receiving events of the UDPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback callback function that returns the message
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    off(type: 'message', callback?: Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }>): void;

    /**
     * Listens for data packet message events or close events of the UDPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<void> } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    on(type: 'listening' | 'close', callback: Callback<void>): void;

    /**
     * Cancels listening for data packet message events or close events of the UDPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<void> } callback Returns the callback of off.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    off(type: 'listening' | 'close', callback?: Callback<void>): void;

    /**
     * Listens for error events of the UDPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { ErrorCallback } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for error events of the UDPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { ErrorCallback } callback Returns the callback of off.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    off(type: 'error', callback?: ErrorCallback): void;
  }

  /**
   * Defines TCPSocket connection parameters.
   * @interface TCPConnectOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface TCPConnectOptions {
    /**
     * Bound IP address and port number.
     * @type { NetAddress }
     * @crossplatform
     * @since 7
     */
    address: NetAddress;

    /**
     * Timeout duration of the TCPSocket connection, in milliseconds.
     * @type { number }
     * @crossplatform
     * @since 7
     */
    timeout?: number;
  }

  /**
   * Defines the parameters for sending data over the TCPSocket connection.
   * @interface TCPSendOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface TCPSendOptions {
    /**
     * Data to send.
     * @type { string | ArrayBuffer }
     * @crossplatform
     * @since 7
     */
    data: string | ArrayBuffer;

    /**
     * Character encoding format.
     * @type { string }
     * @crossplatform
     * @since 7
     */
    encoding?: string;
  }

  /**
   * Defines other properties of the TCPSocket connection.
   * @interface TCPExtraOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface TCPExtraOptions extends ExtraOptionsBase {
    /**
     * Whether to keep the connection alive. The default value is false.
     * @type { boolean }
     * @crossplatform
     * @since 7
     */
    keepAlive?: boolean;

    /**
     * Whether to enable OOBInline. The default value is false.
     * @type { boolean }
     * @crossplatform
     * @since 7
     */
    OOBInline?: boolean;

    /**
     * Whether to enable no-delay on the TCPSocket connection. The default value is false.
     * @type { boolean }
     * @crossplatform
     * @since 7
     */
    TCPNoDelay?: boolean;

    /**
     * Socket linger.
     * @type { on: boolean, linger: number }
     * @crossplatform
     * @since 7
     */
    socketLinger?: { on: boolean, linger: number };
  }

  /**
   * Defines a TCPSocket connection.
   * @interface TCPSocket
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 7
   */
  export interface TCPSocket {
    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     *
     * @param { NetAddress } address Destination address. {@link NetAddress}
     * @param { AsyncCallback<void> } callback Returns the callback of bind.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     *
     * @param address Destination address. {@link NetAddress}
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    bind(address: NetAddress): Promise<void>;

    /**
     * Sets up a connection to the specified IP address and port number.
     * @param { TCPConnectOptions } options  Optional parameters {@link TCPConnectOptions}.
     * @param { AsyncCallback<void> } callback Returns the callback of connect.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void;

    /**
     * Sets up a connection to the specified IP address and port number.
     * @param { TCPConnectOptions } options Optional parameters {@link TCPConnectOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    connect(options: TCPConnectOptions): Promise<void>;

    /**
     * Sends data over a TCPSocket connection.
     * @param { TCPSendOptions } options Optional parameters {@link TCPSendOptions}.
     * @param { AsyncCallback<void> } callback Returns the callback of send.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    send(options: TCPSendOptions, callback: AsyncCallback<void>): void;

    /**
     * Sends data over a TCPSocket connection.
     * @param { TCPSendOptions } options Optional parameters {@link TCPSendOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    send(options: TCPSendOptions): Promise<void>;

    /**
     * Closes a TCPSocket connection.
     * @param { AsyncCallback<void> } callback Returns the callback of close.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * Closes a TCPSocket connection.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    close(): Promise<void>;

    /**
     * Obtains the peer address of a TCPSocket connection.
     * @param { AsyncCallback<NetAddress> } callback Callback used to return the result. {@link NetAddress}
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

    /**
     * Obtains the peer address of a TCPSocket connection.
     * @returns { Promise<NetAddress> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * Obtains the status of the TCPSocket connection.
     * @param { AsyncCallback<SocketStateBase> } callback Callback used to return the result. {@link SocketStateBase}
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * Obtains the status of the TCPSocket connection.
     * @returns { Promise<SocketStateBase> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    getState(): Promise<SocketStateBase>;

    /**
     * Sets other attributes of the TCPSocket connection.
     * @param { TCPExtraOptions } options Optional parameters {@link TCPExtraOptions}.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * Sets other attributes of the TCPSocket connection.
     * @param { TCPExtraOptions } options Optional parameters {@link TCPExtraOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * Listens for message receiving events of the TCPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    on(type: 'message', callback: Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }>): void;

    /**
     * Cancels listening for message receiving events of the TCPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback callback function that returns the message
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    off(type: 'message', callback?: Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }>): void;

    /**
     * Listens for connection or close events of the TCPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<void> } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    on(type: 'connect' | 'close', callback: Callback<void>): void;

    /**
     * Cancels listening for connection or close events of the TCPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<void> } callback callback function that returns the message
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    /**
     * Listens for error events of the TCPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { ErrorCallback } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for error events of the TCPSocket connection.
     * @param { string } type Indicates Event name.
     * @param { ErrorCallback } callback callback function that returns the message
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7
     */
    off(type: 'error', callback?: ErrorCallback): void;
  }

  /**
   * Defines a TLSSocket connection.
   * @interface TLSSocket
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 9
   */
  export interface TLSSocket {

    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     * @param { NetAddress } address Destination address. {@link NetAddress}
     * @param { AsyncCallback<void> } callback - the callback of bind.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     * @param { NetAddress } address Destination address. {@link NetAddress}
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    bind(address: NetAddress): Promise<void>;

    /**
     * Obtains the peer address of a TLSSocket connection.
     * @param { AsyncCallback<NetAddress> } callback the callback of getRemoteAddress.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

    /**
     * Obtains the peer address of a TLSSocket connection.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * Obtains the status of the TLSSocket connection.
     * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * Obtains the status of the TLSSocket connection.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getState(): Promise<SocketStateBase>;

    /**
     * Sets other attributes of the TLSSocket connection.
     * @param { TCPExtraOptions } options Optional parameters {@link TCPExtraOptions}.
     * @param { AsyncCallback<void> } callback - the callback of setExtraOptions.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * Sets other attributes of the TLSSocket connection.
     * @param { TCPExtraOptions } options Optional parameters {@link TCPExtraOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * Listens for message receiving events of the TLSSocket connection.
     * @throws { BusinessError } 401 - Parameter error.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    on(type: 'message', callback: Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }>): void;

    /**
     * Cancels listening for message receiving events of the TLSSocket connection.
     * @param { string } type Indicates Event name.
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback callback function that returns the message
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    off(type: 'message', callback?: Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }>): void;

    /**
     * Listens for connection or close events of the TLSSocket connection.
     * @throws { BusinessError } 401 - Parameter error.
     * @param { string } type Indicates Event name.
     * @param {Callback<void> } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    on(type: 'connect' | 'close', callback: Callback<void>): void;

    /**
     * Cancels listening for connection or close events of the TLSSocket connection.
     * @param { string } type Indicates Event name.
     * @param {Callback<void> } callback callback function that returns the message
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    /**
     * Listens for error events of the TLSSocket connection.
     * @throws { BusinessError } 401 - Parameter error.
     * @param { string } type Indicates Event name.
     * @param { ErrorCallback } callback Returns the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for error events of the TLSSocket connection.
     * @param { string } type Indicates Event name.
     * @param { ErrorCallback } callback callback function that returns the message
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Returns an object representing a local certificate.
     * @param { AsyncCallback<X509CertRawData> } callback - the callback of getCertificate.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303504 - Error looking up x509
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getCertificate(callback: AsyncCallback<X509CertRawData>): void;

    /**
     * Returns an object representing a local certificate.
     * @returns { Promise<X509CertRawData> } The promise returned by the function.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303504 - Error looking up x509
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getCertificate(): Promise<X509CertRawData>;

    /**
     * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
     * <p>an empty object will be returned. If the socket is destroyed, null is returned.</p>
     * It only contains the peer's certificate.
     * @param { AsyncCallback<X509CertRawData> } callback - the callback of getRemoteCertificate.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;

    /**
     * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
     * <p>an empty object will be returned. If the socket is destroyed, null is returned.</p>
     * It only contains the peer's certificate.
     * @returns { Promise<X509CertRawData> } The promise returned by the function.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getRemoteCertificate(): Promise<X509CertRawData>;

    /**
     * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
     * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
     * Server sockets or disconnected client sockets will return a value of null.
     * @param { AsyncCallback<string> } callback - the callback of getProtocol.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getProtocol(callback: AsyncCallback<string>): void;

    /**
     * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
     * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
     * Server sockets or disconnected client sockets will return a value of null.
     * @returns { Promise<string> } The promise returned by the function.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getProtocol(): Promise<string>;

    /**
     * Returns a list containing the negotiated cipher suite information.
     * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
     * @param { AsyncCallback<Array<string>> } callback - the callback of getCipherSuite.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - Error in tls reading.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getCipherSuite(callback: AsyncCallback<Array<string>>): void;

    /**
     * Returns a list containing the negotiated cipher suite information.
     * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
     * @returns { Promise<string> } The promise returned by the function.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - Error in tls reading.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getCipherSuite(): Promise<Array<string>>;

    /**
     * <p>The list of signature algorithms shared between the server and the client,
     * in descending order of priority.</p>
     * @param { AsyncCallback<Array<string>> } callback - the callback of getSignatureAlgorithms.
     * @see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;

    /**
     * <p>The list of signature algorithms shared between the server and the client,
     * in descending order of priority.</p>
     * @returns { Promise<string> } The promise returned by the function.
     * @see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    getSignatureAlgorithms(): Promise<Array<string>>;

    /**
     * Sets up a connection to the specified IP address and port number.
     * Only TCP is supported.
     * @param options Optional parameters {@link TLSConnectOptions}.
     * @param { AsyncCallback<void> } callback - the callback of connect.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303104 - Interrupted system call.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2303191 - Protocol wrong type for socket.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @throws { BusinessError } 2303210 - Connection timed out.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - Error in tls reading.
     * @throws { BusinessError } 2303503 - Error in tls writing
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2303506 - Error clearing tls connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    connect(options: TLSConnectOptions, callback: AsyncCallback<void>): void;

    /**
     * Sets up a connection to the specified IP address and port number.
     * Only TCP is supported.
     * @param options Optional parameters {@link TLSConnectOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303104 - Interrupted system call.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2303191 - Protocol wrong type for socket.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @throws { BusinessError } 2303210 - Connection timed out.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - Error in tls reading.
     * @throws { BusinessError } 2303503 - Error in tls writing
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2303506 - Error clearing tls connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    connect(options: TLSConnectOptions): Promise<void>;

    /**
     * Sends data over a TLSSocket connection.
     * @param { string } data Optional parameters {@link string}.
     * @param { AsyncCallback<void> } callback - the callback of send.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303503 - Error in tls writing.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2303506 - Error clearing tls connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    send(data: string, callback: AsyncCallback<void>): void;

    /**
     * Sends data over a TLSSocket connection.
     * @param { string } data Optional parameters {@link string}.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303503 - Error in tls writing.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2303506 - Error clearing tls connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    send(data: string): Promise<void>;

    /**
     * Closes a TLSSocket connection
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2303506 - Error clearing tls connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * Closes a TLSSocket connection
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
     * @throws { BusinessError } 2303506 - Error clearing tls connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    close(): Promise<void>;
  }

  /**
   * Defines TLS security options. The CA certificate is mandatory, and other parameters are optional.
   * @interface TLSSecureOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 9
   */
  export interface TLSSecureOptions {
    /**
     * Certificate used to verify the identity of the server
     * @type {string | Array<string>}
     * @crossplatform
     * @since 9
     */
    ca: string | Array<string>;

    /**
     * Certificate proving the identity of the client
     * @type {string}
     * @crossplatform
     * @since 9
     */
    cert?: string;

    /**
     * Private key of client certificate
     * @type {string}
     * @crossplatform
     * @since 9
     */
    key?: string;

    /**
     * Password of the private key
     * @type {string}
     * @crossplatform
     * @since 9
     */
    password?: string;

    /**
     * TLS protocol version
     * @type {Protocol | Array<Protocol>}
     * @crossplatform
     * @since 9
     */
    protocols?: Protocol | Array<Protocol>;

    /**
     * default is false, use local cipher.
     * @type {boolean}
     * @crossplatform
     * @since 9
     */
    useRemoteCipherPrefer?: boolean;

    /**
     * <P>Supported signature algorithms. This string can contain summary algorithms(SHA256,MD5,etc),Public key algorithm(RSA-PSS,ECDSA,etc),
     * Combination of the two(For example 'RSA+SHA384') or TLS v1.3 Scheme name(For example  rsa_pss_pss_sha512)</P>
     * @type {string}
     * @crossplatform
     * @since 9
     */
    signatureAlgorithms?: string;

    /**
     * Crypto suite specification
     * @type {string}
     * @crossplatform
     * @since 9
     */
    cipherSuite?: string;
  }

  /**
   * Defines TLS connection options.
   * @interface TLSConnectOptions
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 9
   */
  export interface TLSConnectOptions {
    /**
     * Gateway address.
     * @type {NetAddress}
     * @crossplatform
     * @since 9
     */
    address: NetAddress;

    /**
     * Protocol http2TLS security related operations.
     * @type {TLSSecureOptions}
     * @crossplatform
     * @since 9
     */
    secureOptions: TLSSecureOptions;

    /**
     * Application layer protocol negotiation extension, such as "spdy/1", "http/1.1", "h2"
     * @type {Array<string>}
     * @crossplatform
     * @since 9
     */
    ALPNProtocols?: Array<string>;
  }

  /**
   * Enumerates TLS protocol versions.
   * @namespace Protocol
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 9
   */
  export enum Protocol {
    /**
     * Use TLSv1.2 protocol for communication.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    TLSv12 = "TLSv1.2",

    /**
     * Use TLSv1.3 protocol for communication.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 9
     */
    TLSv13 = "TLSv1.3",
  }
}

export default socket;
