/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback, ErrorCallback} from "./@ohos.base";
import connection from "./@ohos.net.connection";
import cert from "./@ohos.security.cert";

/**
 * Provides TCP and UDP Socket APIs.
 *
 * @since 7
 * @syscap SystemCapability.Communication.NetStack
 */
declare namespace socket {
  export import NetAddress = connection.NetAddress;
  /**
   * Deposit certificate
   *
   * @crossplatform
   * @since 9
   */
  export type X509CertRawData = cert.EncodingBlob;

  /**
   * Creates a UDPSocket object.
   * @crossplatform
   */
  function constructUDPSocketInstance(): UDPSocket;

  /**
   * Creates a TCPSocket object.
   * @crossplatform
   */
  function constructTCPSocketInstance(): TCPSocket;

  /**
   * Creates a TLSSocket object.
   *
   * @crossplatform
   * @since 9
   */
  function constructTLSSocketInstance(): TLSSocket;

  export interface UDPSendOptions {
    /**
     * Data to send.
     * @crossplatform
     */
    data: string | ArrayBuffer;

    /**
     * Destination address.
     * @crossplatform
     */
    address: NetAddress;
  }

  export interface ExtraOptionsBase {
    /**
     * Size of the receive buffer, in MBS.
     * @crossplatform
     */
    receiveBufferSize?: number;

    /**
     * Size of the send buffer, in MBS.
     * @crossplatform
     */
    sendBufferSize?: number;

    /**
     * Whether to reuse addresses. The default value is false.
     * @crossplatform
     */
    reuseAddress?: boolean;

    /**
     * Timeout duration of the UDPSocket connection, in milliseconds.
     * @crossplatform
     */
    socketTimeout?: number;
  }

  export interface UDPExtraOptions extends ExtraOptionsBase {
    /**
     * Whether to send broadcast messages. The default value is false.
     * @crossplatform
     */
    broadcast?: boolean;
  }

  export interface SocketStateBase {
    /**
     * Whether the connection is in the bound state.
     * @crossplatform
     */
    isBound: boolean;

    /**
     * Whether the connection is in the closed state.
     * @crossplatform
     */
    isClose: boolean;

    /**
     * Whether the connection is in the connected state.
     * @crossplatform
     */
    isConnected: boolean;
  }

  export interface SocketRemoteInfo {
    /**
     * Bound IP address.
     * @crossplatform
     */
    address: string;

    /**
     * Network protocol type. The options are as follows: IPv4, IPv6.
     * @crossplatform
     */
    family: 'IPv4' | 'IPv6';

    /**
     * Port number. The value ranges from 0 to 65535.
     * @crossplatform
     */
    port: number;

    /**
     * Length of the server response message, in bytes.
     * @crossplatform
     */
    size: number;
  }

  export interface UDPSocket {
    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     *
     * @param address Destination address. {@link NetAddress}
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;
    bind(address: NetAddress): Promise<void>;

    /**
     * Sends data over a UDPSocket connection.
     *
     * @param options Optional parameters {@link UDPSendOptions}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    send(options: UDPSendOptions, callback: AsyncCallback<void>): void;
    send(options: UDPSendOptions): Promise<void>;

    /**
     * Closes a UDPSocket connection.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    close(callback: AsyncCallback<void>): void;
    close(): Promise<void>;

    /**
     * Obtains the status of the UDPSocket connection.
     *
     * @param callback Callback used to return the result. {@link SocketStateBase}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;
    getState(): Promise<SocketStateBase>;

    /**
     * Sets other attributes of the UDPSocket connection.
     *
     * @param options Optional parameters {@link UDPExtraOptions}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void;
    setExtraOptions(options: UDPExtraOptions): Promise<void>;

    /**
     * Listens for message receiving events of the UDPSocket connection.
     * @crossplatform
     */
    on(type: 'message', callback: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    /**
     * Cancels listening for message receiving events of the UDPSocket connection.
     * @crossplatform
     */
    off(type: 'message', callback?: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    /**
     * Listens for data packet message events or close events of the UDPSocket connection.
     * @crossplatform
     */
    on(type: 'listening' | 'close', callback: Callback<void>): void;

    /**
     * Cancels listening for data packet message events or close events of the UDPSocket connection.
     * @crossplatform
     */
    off(type: 'listening' | 'close', callback?: Callback<void>): void;

    /**
     * Listens for error events of the UDPSocket connection.
     * @crossplatform
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for error events of the UDPSocket connection.
     * @crossplatform
     */
    off(type: 'error', callback?: ErrorCallback): void;
  }

  export interface TCPConnectOptions {
    /**
     * Bound IP address and port number.
     * @crossplatform
     */
    address: NetAddress;

    /**
     * Timeout duration of the TCPSocket connection, in milliseconds.
     * @crossplatform
     */
    timeout?: number;
  }

  export interface TCPSendOptions {
    /**
     * Data to send.
     * @crossplatform
     */
    data: string | ArrayBuffer;

    /**
     * Character encoding format.
     * @crossplatform
     */
    encoding?: string;
  }

  export interface TCPExtraOptions extends ExtraOptionsBase {
    /**
     * Whether to keep the connection alive. The default value is false.
     * @crossplatform
     */
    keepAlive?: boolean;

    /**
     * Whether to enable OOBInline. The default value is false.
     * @crossplatform
     */
    OOBInline?: boolean;

    /**
     * Whether to enable no-delay on the TCPSocket connection. The default value is false.
     * @crossplatform
     */
    TCPNoDelay?: boolean;

    /**
     * Socket linger.
     * @crossplatform
     */
    socketLinger?: {on: boolean, linger: number};
  }

  export interface TCPSocket {
    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     *
     * @param address Destination address. {@link NetAddress}
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;
    bind(address: NetAddress): Promise<void>;

    /**
     * Sets up a connection to the specified IP address and port number.
     *
     * @param options Optional parameters {@link TCPConnectOptions}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void;
    connect(options: TCPConnectOptions): Promise<void>;

    /**
     * Sends data over a TCPSocket connection.
     *
     * @param options Optional parameters {@link TCPSendOptions}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    send(options: TCPSendOptions, callback: AsyncCallback<void>): void;
    send(options: TCPSendOptions): Promise<void>;

    /**
     * Closes a TCPSocket connection.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    close(callback: AsyncCallback<void>): void;
    close(): Promise<void>;

    /**
     * Obtains the peer address of a TCPSocket connection.
     *
     * @param callback Callback used to return the result. {@link NetAddress}
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * Obtains the status of the TCPSocket connection.
     *
     * @param callback Callback used to return the result. {@link SocketStateBase}
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;
    getState(): Promise<SocketStateBase>;

    /**
     * Sets other attributes of the TCPSocket connection.
     *
     * @param options Optional parameters {@link TCPExtraOptions}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * Listens for message receiving events of the TCPSocket connection.
     * @crossplatform
     */
    on(type: 'message', callback: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    /**
     * Cancels listening for message receiving events of the TCPSocket connection.
     * @crossplatform
     */
    off(type: 'message', callback?: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    /**
     * Listens for connection or close events of the TCPSocket connection.
     * @crossplatform
     */
    on(type: 'connect' | 'close', callback: Callback<void>): void;

    /**
     * Cancels listening for connection or close events of the TCPSocket connection.
     * @crossplatform
     */
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    /**
     * Listens for error events of the TCPSocket connection.
     * @crossplatform
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for error events of the TCPSocket connection.
     * @crossplatform
     */
    off(type: 'error', callback?: ErrorCallback): void;
  }

  /**
   * @crossplatform
   * @since 9
   */
  export interface TLSSocket {

    /**
     * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
     *
     * @param address Destination address. {@link NetAddress}
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 2303198 - Address already in use.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;
    bind(address: NetAddress): Promise<void>;

    /**
     * Obtains the peer address of a TLSSocket connection.
     *
     * @param callback Callback used to return the result. {@link NetAddress}
     * @throws {BusinessError} 2303188 - Socket operation on non-socket.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * Obtains the status of the TLSSocket connection.
     *
     * @param callback Callback used to return the result. {@link SocketStateBase}
     * @throws {BusinessError} 2303188 - Socket operation on non-socket.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;
    getState(): Promise<SocketStateBase>;

    /**
     * Sets other attributes of the TLSSocket connection.
     *
     * @param options Optional parameters {@link TCPExtraOptions}.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2303188 - Socket operation on non-socket.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * Listens for message receiving events of the TLSSocket connection.
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @crossplatform
     */
    on(type: 'message', callback: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    /**
     * Cancels listening for message receiving events of the TLSSocket connection.
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @crossplatform
     */
    off(type: 'message', callback?: Callback<{message: ArrayBuffer, remoteInfo: SocketRemoteInfo}>): void;

    /**
     * Listens for connection or close events of the TLSSocket connection.
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @crossplatform
     */
    on(type: 'connect' | 'close', callback: Callback<void>): void;

    /**
     * Cancels listening for connection or close events of the TLSSocket connection.
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @crossplatform
     */
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    /**
     * Listens for error events of the TLSSocket connection.
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @crossplatform
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for error events of the TLSSocket connection.
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @crossplatform
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Returns an object representing a local certificate.
     *
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2303504 - Error looking up x509
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getCertificate(callback: AsyncCallback<X509CertRawData>): void;
    getCertificate(): Promise<X509CertRawData>;

    /**
     * Returns an object representing the peer certificate. If the peer does not provide a certificate,
     * an empty object will be returned. If the socket is destroyed, null is returned.
     * It only contains the peer's certificate.
     *
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;
    getRemoteCertificate(): Promise<X509CertRawData>;

    /**
     * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
     * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
     * Server sockets or disconnected client sockets will return a value of null.
     *
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2303505 - Error occurred in the tls system call.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getProtocol(callback: AsyncCallback<string>): void;
    getProtocol(): Promise<string>;

    /**
     * Returns a list containing the negotiated cipher suite information.
     * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
     *
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2303502 - Error in tls reading.
     * @throws {BusinessError} 2303505 - Error occurred in the tls system call.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getCipherSuite(callback: AsyncCallback<Array<string>>): void;
    getCipherSuite(): Promise<Array<string>>;

    /**
     * The list of signature algorithms shared between the server and the client, in descending order of priority.
     * @see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
     *
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;
    getSignatureAlgorithms(): Promise<Array<string>>;

    /**
     * Sets up a connection to the specified IP address and port number.
     * Only TCP is supported.
     *
     * @param options Optional parameters {@link TLSConnectOptions}.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2303104 - Interrupted system call.
     * @throws {BusinessError} 2303109 - Bad file number.
     * @throws {BusinessError} 2303111 - Resource temporarily unavailable try again.
     * @throws {BusinessError} 2303188 - Socket operation on non-socket.
     * @throws {BusinessError} 2303191 - Protocol wrong type for socket.
     * @throws {BusinessError} 2303198 - Address already in use.
     * @throws {BusinessError} 2303199 - Cannot assign requested address.
     * @throws {BusinessError} 2303210 - Connection timed out.
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2303502 - Error in tls reading.
     * @throws {BusinessError} 2303503 - Error in tls writing
     * @throws {BusinessError} 2303505 - Error occurred in the tls system call.
     * @throws {BusinessError} 2303506 - Error clearing tls connection.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    connect(options: TLSConnectOptions, callback: AsyncCallback<void>): void;
    connect(options: TLSConnectOptions): Promise<void>;

    /**
     * Sends data over a TLSSocket connection.
     *
     * @param data Optional parameters {@link string}.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2303503 - Error in tls writing.
     * @throws {BusinessError} 2303505 - Error occurred in the tls system call.
     * @throws {BusinessError} 2303506 - Error clearing tls connection.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
    send(data: string, callback: AsyncCallback<void>): void;
    send(data: string): Promise<void>;

    /**
     * Closes a TLSSocket connection
     *
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 2303501 - SSL is null.
     * @throws {BusinessError} 2303505 - Error occurred in the tls system call.
     * @throws {BusinessError} 2303506 - Error clearing tls connection.
     * @throws {BusinessError} 2300002 - System internal error.
     * @crossplatform
     */
     close(callback: AsyncCallback<void>): void;
     close(): Promise<void>;
  }

  /**
   * @crossplatform
   * @since 9
   */
  export interface TLSSecureOptions {
    /**
     * Certificate used to verify the identity of the server
     * @crossplatform
     */
    ca: string | Array<string>;

    /**
     * Certificate proving the identity of the client
     * @crossplatform
     */
    cert?: string;

    /**
     * Private key of client certificate
     * @crossplatform
     */
    key?: string;

    /**
     * Password of the private key
     * @crossplatform
     */
    password?: string;

    /**
     * TLS protocol version
     * @crossplatform
     */
    protocols?: Protocol | Array<Protocol>;

    /**
     * default is false, use local cipher.
     * @crossplatform
     */
    useRemoteCipherPrefer?: boolean;

    /**
     * Supported signature algorithms. This string can contain summary algorithms（SHA256、MD5、etc）、
     * Public key algorithm（RSA-PSS、ECDSA、etc）、Combination of the two（For example 'RSA+SHA384'）
     * or TLS v1.3 Scheme name（For example  rsa_pss_pss_sha512）
     * @crossplatform
     */
    signatureAlgorithms?: string;

    /**
     * Crypto suite specification
     * @crossplatform
     */
    cipherSuite?: string;
  }

  /**
   * @crossplatform
   * @since 9
   */
  export interface TLSConnectOptions {
    address: NetAddress;
    secureOptions: TLSSecureOptions;

    /**
     * Application layer protocol negotiation extension, such as "spdy/1", "http/1.1", "h2"
     * @crossplatform
     */
    ALPNProtocols?: Array<string>;
  }

  /**
   * @crossplatform
   * @since 9
   */
  export enum Protocol {
    TLSv12 = "TLSv1.2",
    TLSv13 = "TLSv1.3",
  }
}

export default socket;
