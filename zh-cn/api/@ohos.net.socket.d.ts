/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @file Socket连接
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback, ErrorCallback } from './@ohos.base';
import connection from "./@ohos.net.connection";
import type cert from './@ohos.security.cert';

/**
 * 本模块提供利用Socket进行数据传输的能力，支持TCPSocket、UDPSocket、WebSocket和TLSSocket。
 *
 * > **说明：**
 * >
 * > 本模块API使用时建议放在worker线程或者taskpool中做网络操作，否则可能会导致UI线程卡顿。
 *
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform [since 10]
 * @since 7 dynamic
 */
declare namespace socket {
  /**
   * 定义网络地址。
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @crossplatform [since 24]
   * @since 8 dynamic
   */
  export import NetAddress = connection.NetAddress;

  /**
   * 存储证书的数据。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  export type X509CertRawData = cert.EncodingBlob;

  /**
   * 创建一个UDPSocket对象。
   *
   * @returns { UDPSocket } 返回一个UDPSocket对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  function constructUDPSocketInstance(): UDPSocket;

  /**
   * 创建一个MulticastSocket对象。
   *
   * @returns { MulticastSocket } 返回一个MulticastSocket对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  function constructMulticastSocketInstance(): MulticastSocket;

  /**
   * 创建一个TCPSocket对象。
   *
   * @returns { TCPSocket } 返回一个TCPSocket对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  function constructTCPSocketInstance(): TCPSocket;

  /**
   * 创建并返回一个TLSSocket对象。
   *
   * @returns { TLSSocket } 返回一个TLSSocket对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  function constructTLSSocketInstance(): TLSSocket;

  /**
   * 将TCPSocket升级为TLSSocket，创建并返回一个TLSSocket对象。
   *
   * > **说明：**
   * >
   * > 需要确保TCPSocket已连接，并且当前已经没有传输数据，再调用constructTLSSocketInstance升级TLSSocket。当升级成功后，无需对TCPSocket对象调用close方法。
   *
   * @param { TCPSocket } tcpSocket - 需要进行升级的TCPSocket对象。
   * @returns { TLSSocket } 返回一个TLSSocket对象。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2300002 - System internal error.
   * @throws { BusinessError } 2303601 - Invalid socket FD.
   * @throws { BusinessError } 2303602 - Socket is not connected.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 12 dynamic
   */
  function constructTLSSocketInstance(tcpSocket: TCPSocket): TLSSocket;

  /**
   * 创建一个TCPSocketServer对象。
   *
   * @returns { TCPSocketServer } 返回一个TCPSocketServer对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 10 dynamic
   */
  function constructTCPSocketServerInstance(): TCPSocketServer;

  /**
   * 创建并返回一个TLSSocketServer对象。
   *
   * @returns { TLSSocketServer } 返回一个TLSSocketServer对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 10 dynamic
   */
  function constructTLSSocketServerInstance(): TLSSocketServer;

  /**
   * 创建一个LocalSocket对象。
   *
   * @returns { LocalSocket } 返回一个LocalSocket对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  function constructLocalSocketInstance(): LocalSocket;

  /**
   * 创建一个LocalSocketServer对象。
   *
   * @returns { LocalSocketServer } 返回一个LocalSocketServer对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  function constructLocalSocketServerInstance(): LocalSocketServer;

  /**
   * UDPSocket发送参数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface UDPSendOptions {
    /**
     * 发送的数据。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    data: string | ArrayBuffer;

    /**
     * 目标地址信息。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    address: NetAddress;

    /**
     * 使用的代理信息，默认不使用代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    proxy?: ProxyOptions;
  }

  /**
   * Socket代理类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 18 dynamic
   */
  export enum ProxyTypes {
    /**
     * 不使用代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    NONE = 0,

    /**
     * 使用Socks5代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    SOCKS5 = 1
  }

  /**
   * Socket代理信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 18 dynamic
   */
  export interface ProxyOptions {
    /**
     * 代理类型。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    type: ProxyTypes;

    /**
     * 代理地址信息。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    address: NetAddress;

    /**
     * 指定用户名，如果使用用户密码验证方式。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    username?: string;

    /**
     * 指定密码，如果使用用户密码验证方式。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    password?: string;
  }

  /**
   * Socket套接字的基础属性。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface ExtraOptionsBase {
    /**
     * 接收缓冲区大小（单位：Byte），取值范围0~262144，不设置或设置的值超过取值范围则会默认为8192。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    receiveBufferSize?: int;

    /**
     * 发送缓冲区大小（单位：Byte），取值范围0~262144，不设置或设置的值超过取值范围则会默认为8192。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    sendBufferSize?: int;

    /**
     * 是否重用地址。true：重用地址；false：不重用地址。默认值为false。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    reuseAddress?: boolean;

    /**
     * 套接字超时时间，单位毫秒（ms）。默认值为0，表示不设置超时时间。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    socketTimeout?: int;
  }

  /**
   * UDPSocket连接的其他属性。继承自[ExtraOptionsBase]{@link socket.ExtraOptionsBase}。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface UDPExtraOptions extends ExtraOptionsBase {
    /**
     * 是否可以发送广播。true表示可发送广播，false表示不可发送广播。默认为false。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    broadcast?: boolean;
  }

  /**
   * Socket的状态信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface SocketStateBase {
    /**
     * 是否绑定。true：绑定；false：不绑定。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    isBound: boolean;

    /**
     * 是否关闭。true：关闭；false：打开。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    isClose: boolean;

    /**
     * 是否连接。true：连接；false：断开。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    isConnected: boolean;
  }

  /**
   * Socket的连接信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface SocketRemoteInfo {
    /**
     * 对端的IP地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    address: string;

    /**
     * 网络协议类型，可选类型：
     *
     * - IPv4
     * - IPv6
     *
     * 默认为IPv4。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    family: 'IPv4' | 'IPv6';

    /**
     * 端口号，范围0~65535。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    port: int;

    /**
     * 服务器响应信息的字节长度。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    size: int;
  }

  /**
   * LocalSocket客户端与服务端通信时接收的数据。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalSocketMessageInfo {
    /**
     * 收到的消息数据。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    message: ArrayBuffer;

    /**
     * 使用的本地套接字路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    address: string;

    /**
     * 数据长度。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    size: int;
  }

  /**
   * LocalSocket本地套接字文件路径信息，在传入套接字路径进行绑定时，会在此路径下创建套接字文件。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalAddress {
    /**
     * 本地套接字路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    address: string;
  }

  /**
   * LocalSocket客户端在连接服务端时传入的参数信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalConnectOptions {
    /**
     * 本地套接字路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    address: LocalAddress;

    /**
     * 连接服务端的超时时间，单位为毫秒。默认值为0。需要应用手动设置一下，建议设置为5000。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    timeout?: int;
  }

  /**
   * LocalSocket发送请求的参数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalSendOptions {
    /**
     * 需要发送的数据。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    data: string | ArrayBuffer;

    /**
     * 字符编码。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    encoding?: string;
  }

  /**
   * UDPSocket连接。在调用UDPSocket的方法前，需要先通过[socket.constructUDPSocketInstance]{@link socket.constructUDPSocketInstance}创建
   * UDPSocket对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface UDPSocket {
    /**
     * 绑定IP地址和端口，端口可以由用户指定或由系统随机分配。使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 本端地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * 绑定IP地址和端口，端口可以由用户指定或由系统随机分配。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 本端地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    bind(address: NetAddress): Promise<void>;

    /**
     * 获取UDP连接的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 通过UDPSocket连接发送数据。使用callback异步回调。
     *
     * 发送数据前，需要先调用[UDPSocket.bind()]{@link socket.UDPSocket.bind(address: NetAddress, callback: AsyncCallback<void>)}绑定
     * IP地址和端口。该接口为耗时操作，请在Worker线程或taskpool线程调用该接口。
     *
     * @permission ohos.permission.INTERNET
     * @param { UDPSendOptions } options - UDPSocket发送参数，参考[UDPSendOptions]{@link socket.UDPSendOptions}。
     * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2301206 - Socks5 failed to connect to the proxy server. [since 18]
     * @throws { BusinessError } 2301207 - Socks5 username or password is invalid. [since 18]
     * @throws { BusinessError } 2301208 - Socks5 failed to connect to the remote server. [since 18]
     * @throws { BusinessError } 2301209 - Socks5 failed to negotiate the authentication method. [since 18]
     * @throws { BusinessError } 2301210 - Socks5 failed to send the message. [since 18]
     * @throws { BusinessError } 2301211 - Socks5 failed to receive the message. [since 18]
     * @throws { BusinessError } 2301212 - Socks5 serialization error. [since 18]
     * @throws { BusinessError } 2301213 - Socks5 deserialization error. [since 18]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    send(options: UDPSendOptions, callback: AsyncCallback<void>): void;

    /**
     * 通过UDPSocket连接发送数据。使用Promise异步回调。
     *
     * 发送数据前，需要先调用[UDPSocket.bind()]{@link socket.UDPSocket.bind(address: NetAddress, callback: AsyncCallback<void>)}绑定
     * IP地址和端口。该接口为耗时操作，请在Worker线程或taskpool线程调用该接口。
     *
     * @permission ohos.permission.INTERNET
     * @param { UDPSendOptions } options - UDPSocket发送参数，参考[UDPSendOptions]{@link socket.UDPSendOptions}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2301206 - Socks5 failed to connect to the proxy server. [since 18]
     * @throws { BusinessError } 2301207 - Socks5 username or password is invalid. [since 18]
     * @throws { BusinessError } 2301208 - Socks5 failed to connect to the remote server. [since 18]
     * @throws { BusinessError } 2301209 - Socks5 failed to negotiate the authentication method. [since 18]
     * @throws { BusinessError } 2301210 - Socks5 failed to send the message. [since 18]
     * @throws { BusinessError } 2301211 - Socks5 failed to receive the message. [since 18]
     * @throws { BusinessError } 2301212 - Socks5 serialization error. [since 18]
     * @throws { BusinessError } 2301213 - Socks5 deserialization error. [since 18]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    send(options: UDPSendOptions): Promise<void>;

    /**
     * 关闭UDPSocket连接。使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - 回调函数。关闭UDPSocket连接后触发回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * 关闭UDPSocket连接。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    close(): Promise<void>;

    /**
     * 获取UDPSocket状态。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<SocketStateBase> } callback - 回调函数。成功返回UDPSocket状态信息，失败返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * 获取UDPSocket状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取UDPSocket状态的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 设置UDPSocket连接的其他属性。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { UDPExtraOptions } options - UDPSocket连接的其他属性，参考[UDPExtraOptions]{@link socket.UDPExtraOptions}。
     * @param { AsyncCallback<void> }callback - Callback used to return the result. If the operation is successful, no
     *     value is returned. If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * 设置UDPSocket连接的其他属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { UDPExtraOptions } options - UDPSocket连接的其他属性，参考[UDPExtraOptions]{@link socket.UDPExtraOptions}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    setExtraOptions(options: UDPExtraOptions): Promise<void>;

    /**
     * 订阅UDPSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. [since 7 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。返回订阅某类事件后UDPSocket连接成功的状态信息。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'message', callback: Callback<SocketMessageInfo>): void;

    /**
     * 取消订阅UDPSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 取消订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. You can pass the callback of the **on** function if you want to cancel listening for a certain
     *     type of events. If you do not pass the callback, you will cancel listening for all events. [since 7 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'message', callback?: Callback<SocketMessageInfo>): void;

    /**
     * 订阅UDPSocket连接的数据包消息事件或关闭事件。使用callback异步回调。
     *
     * @param { 'listening' | 'close' } type - 订阅的事件类型。<br />- 'listening'：数据包消息事件。<br />- 'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。UDPSocket连接的某类数据包消息事件或关闭事件发生变化后触发回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'listening' | 'close', callback: Callback<void>): void;

    /**
     * 取消订阅UDPSocket连接的数据包消息事件或关闭事件。使用callback异步回调。
     *
     * @param { 'listening' | 'close' } type - 取消订阅事件类型。<br />- 'listening'：数据包消息事件。<br />- 'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'listening' | 'close', callback?: Callback<void>): void;

    /**
     * 订阅UDPSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。UDPSocket连接发生error事件后触发回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅UDPSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取UDPSocket的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - [bind]{@link socket.UDPSocket.bind(address: NetAddress, callback: AsyncCallback<void>)}方法调用成功后，才可调用此方法。
     * >
     * > - bind异常、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.UDPSocket.close(callback: AsyncCallback<void>)}方法关闭Socket连接，避免直接操作
     * > 文件描述符进行关闭。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }

  /**
   * MulticastSocket连接。在调用MulticastSocket的方法前，需要先通过
   * [socket.constructMulticastSocketInstance]{@link socket.constructMulticastSocketInstance}创建MulticastSocket对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface MulticastSocket extends UDPSocket {
    /**
     * 加入多播组。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 多播使用的IP地址属于特定的范围（例如224.0.0.0到239.255.255.255）。
     * >
     * > 加入多播组后，既可以是发送端，也可以是接收端，相互之间以广播的形式传递数据，不区分客户端或服务端。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } multicastAddress - 目标地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301022 - Invalid argument.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @throws { BusinessError } 2301098 - Address in use.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * 加入多播组。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 多播使用的IP地址属于特定的范围（例如224.0.0.0到239.255.255.255）。
     * >
     * > 加入多播组后，既可以是发送端，也可以是接收端，相互之间以广播的形式传递数据，不区分客户端或服务端。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } multicastAddress - 目标地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @returns { Promise<void> } 以Promise形式返回MulticastSocket加入多播组的行为结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @throws { BusinessError } 2301098 - Address in use.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    addMembership(multicastAddress: NetAddress): Promise<void>;

    /**
     * 退出多播组。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 多播使用的IP地址属于特定的范围（例如224.0.0.0到239.255.255.255）。
     * >
     * > 从已加入的多播组中退出，必须在加入多播组
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后退出才有效。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } multicastAddress - 目标地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @throws { BusinessError } 2301098 - Address in use.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    dropMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * 退出多播组。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 多播使用的IP地址属于特定的范围（例如224.0.0.0到239.255.255.255）。
     * >
     * > 从已加入的多播组中退出，必须在加入多播组
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后退出才有效。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } multicastAddress - 目标地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @returns { Promise<void> } 以Promise形式返回MulticastSocket加入多播组的执行结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @throws { BusinessError } 2301098 - Address in use.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    dropMembership(multicastAddress: NetAddress): Promise<void>;

    /**
     * 设置多播通信时数据包在网络传输过程中路由器最大跳数。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 用于限制数据包在网络中传输时能够经过的最大路由器跳数的字段，TTL (Time to live)。
     * >
     * > 范围为 0～255，默认值为 1 。
     * >
     * > 如果一个多播数据包的 TTL 值为 1，那么它只能被直接连接到发送者的主机接收。如果 TTL 被设置为一个较大的值，那么数据包就能够被传送到更远的网络范围内。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @param { int } ttl - ttl设置数值，类型为数字number。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301022 - Invalid argument.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    setMulticastTTL(ttl: int, callback: AsyncCallback<void>): void;

    /**
     * 设置多播通信时数据包在网络传输过程中路由器最大跳数。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 用于限制数据包在网络中传输时能够经过的最大路由器跳数的字段，TTL (Time to live)。
     * >
     * > 范围为 0～255，默认值为 1 。
     * >
     * > 如果一个多播数据包的 TTL 值为 1，那么它只能被直接连接到发送者的主机接收。如果 TTL 被设置为一个较大的值，那么数据包就能够被传送到更远的网络范围内。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @param { int } ttl - ttl设置数值，类型为数字Number。
     * @returns { Promise<void> } 以Promise形式返回MulticastSocket设置TTL数值的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301022 - Invalid argument.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    setMulticastTTL(ttl: int): Promise<void>;

    /**
     * 获取数据包在网络传输过程中路由器最大跳数(TTL)的值。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 用于限制数据包在网络中传输时能够经过的最大路由器跳数的字段，TTL (Time to live)。
     * >
     * > 范围为 0～255，默认值为 1 。
     * >
     * > 如果一个多播数据包的 TTL 值为 1，那么它只能被直接连接到发送者的主机接收。如果 TTL 被设置为一个较大的值，那么数据包就能够被传送到更远的网络范围内。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @param { AsyncCallback<int> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getMulticastTTL(callback: AsyncCallback<int>): void;

    /**
     * 获取数据包在网络传输过程中路由器最大跳数(TTL)的值。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 用于限制数据包在网络中传输时能够经过的最大路由器跳数的字段，TTL (Time to live)。
     * >
     * > 范围为 0～255，默认值为 1 。
     * >
     * > 如果一个多播数据包的 TTL 值为 1，那么它只能被直接连接到发送者的主机接收。如果 TTL 被设置为一个较大的值，那么数据包就能够被传送到更远的网络范围内。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @returns { Promise<int> } 以Promise形式返回当前TTL数值。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getMulticastTTL(): Promise<int>;

    /**
     * 设置多播通信中的环回模式标志位。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 用于设置环回模式，开启或关闭两种状态，默认为开启状态。
     * >
     * > 如果一个多播通信中环回模式设置值为 true，那么它允许主机在本地循环接收自己发送的多播数据包。如果为 false，则主机不会接收到自己发送的多播数据包。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @param { boolean } flag - 是否开启环回模式。true表示环回模式开启，false表示环回模式关闭。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    setLoopbackMode(flag: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置多播通信中的环回模式标志位。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 用于设置环回模式，开启或关闭两种状态，默认为开启状态。
     * >
     * > 如果一个多播通信中环回模式设置值为 true，那么它允许主机在本地循环接收自己发送的多播数据包。如果为 false，则主机不会接收到自己发送的多播数据包。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @param { boolean } flag - 是否开启环回模式。true表示环回模式开启，false表示环回模式关闭。
     * @returns { Promise<void> } 以Promise形式返回MulticastSocket设置环回模式的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    setLoopbackMode(flag: boolean): Promise<void>;

    /**
     * 获取多播通信中的环回模式状态。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 用于获取当前环回模式开启或关闭的状态。
     * >
     * > 如果获取的属性值为 true，表示环回模式是开启的状态，允许主机在本地循环接收自己发送的多播数据包。如果为 false，则表示环回模式是关闭的状态，主机不会接收到自己发送的多播数据包。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回值为环回模式状态，true表示环回模式开启，false表示环回模式关闭。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getLoopbackMode(callback: AsyncCallback<boolean>): void;

    /**
     * 获取多播通信中的环回模式状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 用于获取当前环回模式开启或关闭的状态。
     * >
     * > 如果获取的属性值为 true，表示环回模式是开启的状态，允许主机在本地循环接收自己发送的多播数据包。如果为 false，则表示环回模式是关闭的状态，主机不会接收到自己发送的多播数据包。
     * >
     * > 在调用
     * > [addMembership]{@link socket.MulticastSocket.addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>)}
     * > 之后，调用此接口才有效。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示环回模式开启，返回false表示环回模式关闭。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301088 - Not a socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getLoopbackMode(): Promise<boolean>;

    /**
     * 获取MulticastSocket的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - [bind]{@link socket.UDPSocket.bind(address: NetAddress, callback: AsyncCallback<void>)}方法调用成功后，才可调用此方法。
     * >
     * > - bind异常、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.UDPSocket.close(callback: AsyncCallback<void>)}方法关闭Socket连接，避免直接操作
     * > 文件描述符进行关闭。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;

    /**
     * 设置多播Socket是否支持地址复用。使用同步方式调用。
     *
     * > **说明：**
     * >
     * > 用于控制多播Socket绑定端口时是否开启地址复用能力。
     * >
     * > 如需绑定已被占用的端口，确保占用方开启了地址复用能力，同时本业务也需在调用
     * > [bind]{@link socket.UDPSocket.bind(address: NetAddress, callback: AsyncCallback<void>)}前调用本接口以开启地址复用能力。
     *
     * @param { boolean } reuse - 是否开启地址复用。true表示开启，false表示关闭。
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setReuseAddress(reuse: boolean): void;
  }

  /**
   * LocalSocket连接。在调用LocalSocket的方法前，需要先通过
   * [socket.constructLocalSocketInstance]{@link socket.constructLocalSocketInstance}创建LocalSocket对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalSocket {
    /**
     * 绑定本地套接字文件的路径。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法可以使客户端确保有个明确的本地套接字路径，显式的绑定一个本地套接字文件。
     * >
     * > bind方法在本地套接字通信中非必须。
     *
     * @param { LocalAddress } address - 本端地址信息，参考[LocalAddress]{@link socket.LocalAddress}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301013 - Insufficient permissions.
     * @throws { BusinessError } 2301022 - Invalid argument.
     * @throws { BusinessError } 2301098 - Address already in use.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    bind(address: LocalAddress): Promise<void>;

    /**
     * 连接到指定的套接字文件。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 在没有执行localsocket.bind的情况下，也可以直接调用该接口完成与LocalSocket服务端的连接。
     *
     * @param { LocalConnectOptions } options - LocalSocket连接的参数，参考
     *     [LocalConnectOptions]{@link socket.LocalConnectOptions}。
     * @returns { Promise<void> } 以Promise形式返回LocalSocket连接服务端的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301013 - Insufficient permissions.
     * @throws { BusinessError } 2301022 - Invalid argument.
     * @throws { BusinessError } 2301111 - Connection refused.
     * @throws { BusinessError } 2301099 - Cannot assign requested address.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    connect(options: LocalConnectOptions): Promise<void>;

    /**
     * 通过LocalSocket连接发送数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > connect方法调用成功后，才可调用此方法。
     *
     * @param { LocalSendOptions } options - LocalSocket发送请求的参数，参考[LocalSendOptions]{@link socket.LocalSendOptions}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301011 - Operation would block.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    send(options: LocalSendOptions): Promise<void>;

    /**
     * 关闭LocalSocket连接。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    close(): Promise<void>;

    /**
     * 获取LocalSocket状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取LocalSocket状态的结果。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 获取LocalSocket的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - bind或connect方法调用成功后，才可调用此方法。
     * >
     * > - 获取由系统内核分配的唯一文件描述符，用于标识当前使用的套接字。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.LocalSocket.close}方法关闭Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @returns { Promise<int> } 以Promise形式返回socket的文件描述符。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getSocketFd(): Promise<int>;

    /**
     * 设置LocalSocket的套接字属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @param { ExtraOptionsBase } options - LocalSocket连接的其他属性，参考[ExtraOptionsBase]{@link socket.ExtraOptionsBase}。
     * @returns { Promise<void> } 以Promise形式返回设置LocalSocket套接字属性的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    setExtraOptions(options: ExtraOptionsBase): Promise<void>;

    /**
     * 获取LocalSocket的套接字属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<ExtraOptionsBase> } 以Promise形式返回设置LocalSocket套接字的属性。
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getExtraOptions(): Promise<ExtraOptionsBase>;

    /**
     * 获取LocalSocket的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<string> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<string>;

    /**
     * 订阅LocalSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<LocalSocketMessageInfo> } callback - 以callback的形式异步返回接收的消息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'message', callback: Callback<LocalSocketMessageInfo>): void;

    /**
     * 取消订阅LocalSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 取消订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<LocalSocketMessageInfo> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'message', callback?: Callback<LocalSocketMessageInfo>): void;

    /**
     * 订阅LocalSocket的连接事件。使用callback异步回调。
     *
     * @param { 'connect' } type - 订阅的事件类型。
     * @param { Callback<void> } callback - 以callback的形式异步返回与服务端连接的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'connect', callback: Callback<void>): void;

    /**
     * 取消订阅LocalSocket的连接事件。使用callback异步回调。
     *
     * @param { 'connect' } type - 取消订阅的事件类型。'connect'：LocalSocket的connect事件。
     * @param { Callback<void> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'connect', callback?: Callback<void>): void;

    /**
     * 订阅LocalSocket的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 订阅LocalSocket的关闭事件。
     * @param { Callback<void> } callback - 以callback的形式异步返回关闭localsocket的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'close', callback: Callback<void>): void;

    /**
     * 取消订阅LocalSocket的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 取消订阅的事件类型。'close'：LocalSocket的关闭事件。
     * @param { Callback<void> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'close', callback?: Callback<void>): void;

    /**
     * 订阅LocalSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅LocalSocket的error事件。
     * @param { ErrorCallback } callback - 以callback的形式异步返回出现错误的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅LocalSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：LocalSocket的error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

  }

  /**
   * LocalSocketConnection连接，即LocalSocket客户端与服务端的会话连接。在调用LocalSocketConnection的方法前，需要先获取LocalSocketConnection对象。
   *
   * > **说明：**
   * >
   * > 客户端与服务端成功建立连接后，才能通过返回的LocalSocketConnection对象调用相应的接口。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalSocketConnection {
    /**
     * 客户端与服务端建立的会话连接的id。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    clientId: int;

    /**
     * 通过LocalSocketConnection连接对象发送数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 服务端与客户端建立连接后，服务端通过connect事件回调得到LocalSocketConnection连接对象后，才可使用连接对象调用此方法。
     *
     * @param { LocalSendOptions } options - LocalSocketConnection发送请求的参数。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301011 - Operation would block.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    send(options: LocalSendOptions): Promise<void>;

    /**
     * 关闭LocalSocket连接。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    close(): Promise<void>;

    /**
     * 获取LocalSocketConnection连接中的本地Socket地址。使用Promise异步回调。
     *
     * @returns { Promise<string> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<string>;

    /**
     * 订阅LocalSocketConnection连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<LocalSocketMessageInfo> } callback - 以callback的形式异步返回接收到的来自客户端的消息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'message', callback: Callback<LocalSocketMessageInfo>): void;

    /**
     * 取消订阅LocalSocketConnection连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 取消订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<LocalSocketMessageInfo> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'message', callback?: Callback<LocalSocketMessageInfo>): void;

    /**
     * 订阅LocalSocketConnection的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 订阅的事件类型。'close'：关闭事件。
     * @param { Callback<void> } callback - 以callback的形式异步返回会话关闭的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'close', callback: Callback<void>): void;

    /**
     * 取消订阅LocalSocketConnection的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 取消订阅的事件类型。'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'close', callback?: Callback<void>): void;

    /**
     * 订阅LocalSocketConnection连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 以callback的形式异步返回出现错误的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅LocalSocketConnection连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取LocalSocketConnection连接的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 成功建立连接后，才可调用此方法。
     * >
     * > - 连接断开、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.LocalSocket.close}方法关闭Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }

  /**
   * LocalSocketServer类。在调用LocalSocketServer的方法前，需要先通过
   * [socket.constructLocalSocketServerInstance]{@link socket.constructLocalSocketServerInstance}创建LocalSocketServer对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  export interface LocalSocketServer {
    /**
     * 绑定本地套接字文件，监听并接受与此套接字建立的LocalSocket连接。该接口使用多线程并发处理客户端的数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 服务端使用该方法完成bind，listen，accept操作，传入套接字文件路径，调用此接口后会自动生成本地套接字文件。
     *
     * @param { LocalAddress } address - 目标地址信息。
     * @returns { Promise<void> } 以Promise形式返回执行结果， 成功返回空，失败返回错误码错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2301013 - Insufficient permissions.
     * @throws { BusinessError } 2301022 - Invalid argument.
     * @throws { BusinessError } 2301098 - Address already in use.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    listen(address: LocalAddress): Promise<void>;

    /**
     * 获取LocalSocketServer状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取LocalSocketServer状态的结果。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 设置LocalSocketServer连接的套接字属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { ExtraOptionsBase } options - LocalSocketServer连接的其他属性。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    setExtraOptions(options: ExtraOptionsBase): Promise<void>;

    /**
     * 获取LocalSocketServer中连接的套接字的属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<ExtraOptionsBase> } 以Promise形式返回套接字的属性。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    getExtraOptions(): Promise<ExtraOptionsBase>;

    /**
     * 获取LocalSocketServer中本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<string> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<string>;

    /**
     * LocalSocketServer停止监听并释放通过[listen]{@link socket.LocalSocketServer.listen}方法绑定的监听端口。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 该方法不会关闭已有连接。如需关闭，请调用[LocalSocketConnection]{@link socket.LocalSocketConnection}的
     * > [close]{@link socket.LocalSocket.close}方法。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 20 dynamic
     */
    close(): Promise<void>;

    /**
     * 订阅LocalSocketServer的连接事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { 'connect' } type - 订阅的事件类型。'connect'：连接事件。
     * @param { Callback<LocalSocketConnection> } callback - 以callback的形式异步返回接收到客户端连接的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'connect', callback: Callback<LocalSocketConnection>): void;

    /**
     * 取消订阅LocalSocketServer的连接事件。使用callback异步回调。
     *
     * @param { 'connect' } type - 取消订阅的事件类型。'connect'：LocalSocketServer的连接事件。
     * @param { Callback<LocalSocketConnection> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'connect', callback?: Callback<LocalSocketConnection>): void;

    /**
     * 订阅LocalSocketServer连接的error事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 以callback的形式异步返回出现错误的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅LocalSocketServer连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取LocalSocketServer监听端口绑定的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - [listen]{@link socket.LocalSocketServer.listen}方法调用成功后，才可调用此方法。
     * >
     * > - 监听异常、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.TCPSocketServer.close}方法关闭Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }

  /**
   * TCPSocket连接的参数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface TCPConnectOptions {
    /**
     * 绑定的地址以及端口。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    address: NetAddress;

    /**
     * 超时时间，单位毫秒（ms）。默认值为5000。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    timeout?: int;

    /**
     * 使用的代理信息，默认不使用代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    proxy?: ProxyOptions;
  }

  /**
   * TCPSocket发送请求的参数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface TCPSendOptions {
    /**
     * 发送的数据。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    data: string | ArrayBuffer;

    /**
     * 字符编码(UTF-8，UTF-16BE，UTF-16LE，UTF-16，US-ASCII，ISO-8859-1)，默认为UTF-8。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    encoding?: string;
  }

  /**
   * TCPSocket连接的其他属性。继承自[ExtraOptionsBase]{@link socket.ExtraOptionsBase}。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface TCPExtraOptions extends ExtraOptionsBase {
    /**
     * 是否保持连接。默认为false。true：保持连接；false：断开连接。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    keepAlive?: boolean;

    /**
     * 是否为OOB内联。默认为false。true：是OOB内联；false：不是OOB内联。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    OOBInline?: boolean;

    /**
     * TCPSocket连接是否无时延。默认为false。true：无时延；false：有时延。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    TCPNoDelay?: boolean;

    /**
     * socket是否继续逗留。
     *
     * - on：是否逗留（true：逗留；false：不逗留）。
     * - linger：逗留时长，单位毫秒（ms），取值范围为0~65535。
     *
     * 当入参on设置为true时，才需要设置。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 7 dynamic
     */
    socketLinger?: {on: boolean, linger: int};

    /**
     * 是否在TCPSocket连接中启用TCP快速打开（TCP Fast OPen， TFO），该功能允许客户端在首次握手时携带数据，从而减少连接建立的延迟，提升高频率短连接场景下的性能表现。默认为false。true：支持快速打开
     * 属性；false：不支持快速打开属性。
     *
     * 当前参数只支持客户端配置。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     */
    tcpFastOpen?: boolean;
  }

  /**
   * TCPSocket连接。在调用TCPSocket的方法前，需要先通过[socket.constructTCPSocketInstance]{@link socket.constructTCPSocketInstance}创建
   * TCPSocket对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 7 dynamic
   */
  export interface TCPSocket {
    /**
     * 绑定IP地址和端口，端口可以指定为0由系统随机分配或由用户指定为其它非0端口。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind方法如果因为端口冲突而执行失败，则会由系统随机分配端口号。
     * >
     * > TCP客户端可先调用该接口(tcp.bind)显式绑定IP地址和端口号，再调用tcp.connect完成与服务端的连接；也可直接调用tcp.connect由系统自动绑定IP地址和端口号，完成与服务端的连接。
     * >
     * > bind的IP为'localhost'或'127.0.0.1'时，只允许本地回环接口的连接，即服务端和客户端运行在同一台机器上。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 本端地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * 绑定IP地址和端口，端口可以指定为0由系统随机分配或由用户指定为其它非0端口。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法如果因为端口冲突而执行失败，则会由系统随机分配端口号。
     * >
     * > TCP客户端可先调用该接口(tcp.bind)显式绑定IP地址和端口号，再调用tcp.connect完成与服务端的连接；也可直接调用tcp.connect由系统自动绑定IP地址和端口号，完成与服务端的连接。
     * >
     * > bind的IP为'localhost'或'127.0.0.1'时，只允许本地回环接口的连接，即服务端和客户端运行在同一台机器上。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 本端地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @returns { Promise<void> } 以Promise形式返回TCPSocket绑定本机的IP地址和端口的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    bind(address: NetAddress): Promise<void>;

    /**
     * 连接到指定的IP地址和端口。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 在没有执行tcp.bind的情况下，也可以直接调用该接口完成与TCP服务端的连接
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPConnectOptions } options - TCPSocket连接的参数，参考[TCPConnectOptions]{@link socket.TCPConnectOptions}。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2301206 - Socks5 failed to connect to the proxy server. [since 18]
     * @throws { BusinessError } 2301207 - Socks5 username or password is invalid. [since 18]
     * @throws { BusinessError } 2301208 - Socks5 failed to connect to the remote server. [since 18]
     * @throws { BusinessError } 2301209 - Socks5 failed to negotiate the authentication method. [since 18]
     * @throws { BusinessError } 2301210 - Socks5 failed to send the message. [since 18]
     * @throws { BusinessError } 2301211 - Socks5 failed to receive the message. [since 18]
     * @throws { BusinessError } 2301212 - Socks5 serialization error. [since 18]
     * @throws { BusinessError } 2301213 - Socks5 deserialization error. [since 18]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void;

    /**
     * 连接到指定的IP地址和端口。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 在没有执行tcp.bind的情况下，也可以直接调用该接口完成与TCP服务端的连接。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPConnectOptions } options - TCPSocket连接的参数，参考[TCPConnectOptions]{@link socket.TCPConnectOptions}。
     * @returns { Promise<void> } 以Promise形式返回TCPSocket连接到指定的IP地址和端口的结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2301206 - Socks5 failed to connect to the proxy server. [since 18]
     * @throws { BusinessError } 2301207 - Socks5 username or password is invalid. [since 18]
     * @throws { BusinessError } 2301208 - Socks5 failed to connect to the remote server. [since 18]
     * @throws { BusinessError } 2301209 - Socks5 failed to negotiate the authentication method. [since 18]
     * @throws { BusinessError } 2301210 - Socks5 failed to send the message. [since 18]
     * @throws { BusinessError } 2301211 - Socks5 failed to receive the message. [since 18]
     * @throws { BusinessError } 2301212 - Socks5 serialization error. [since 18]
     * @throws { BusinessError } 2301213 - Socks5 deserialization error. [since 18]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    connect(options: TCPConnectOptions): Promise<void>;

    /**
     * 通过TCPSocket连接发送数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > connect方法调用成功后，才可调用此方法。该接口为耗时操作，请在Worker线程或taskpool线程调用该接口。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPSendOptions } options - TCPSocket发送请求的参数，参考[TCPSendOptions]{@link socket.TCPSendOptions}。
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    send(options: TCPSendOptions, callback: AsyncCallback<void>): void;

    /**
     * 通过TCPSocket连接发送数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > connect方法调用成功后，才可调用此方法。该接口为耗时操作，请在Worker线程或taskpool线程调用该接口。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPSendOptions } options - TCPSocket发送请求的参数，参考[TCPSendOptions]{@link socket.TCPSendOptions}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    send(options: TCPSendOptions): Promise<void>;

    /**
     * 关闭TCPSocket连接。使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - 回调函数。失败返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * 关闭TCPSocket连接。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    close(): Promise<void>;

    /**
     * 获取对端Socket地址。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > connect方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<NetAddress> } callback - 回调函数。成功时返回对端Socket地址，失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

    /**
     * 获取对端Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > connect方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<NetAddress> } 以Promise形式返回获取对端socket地址的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * 获取TCPSocket状态。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<SocketStateBase> } callback - 回调函数。成功时获取TCPSocket状态，失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * 获取TCPSocket状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取TCPSocket状态的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 获取TCPSocket的文件描述符。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > - bind或connect方法调用成功后，才可调用此方法。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.UDPSocket.close(callback: AsyncCallback<void>)}方法关闭Socket连接，避免直接操作
     * > 文件描述符进行关闭。
     *
     * @param { AsyncCallback<int> } callback - 回调函数，当成功时，返回socket的文件描述符，失败时，返回undefined。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getSocketFd(callback: AsyncCallback<int>): void;

    /**
     * 获取TCPSocket的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - bind或connect方法调用成功后，才可调用此方法。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.UDPSocket.close(callback: AsyncCallback<void>)}方法关闭Socket连接，避免直接操作
     * > 文件描述符进行关闭。
     *
     * @returns { Promise<int> } 以Promise形式返回socket的文件描述符。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getSocketFd(): Promise<int>;

    /**
     * 设置TCPSocket连接的其他属性。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPExtraOptions } options - TCPSocket连接的其他属性，参考[TCPExtraOptions]{@link socket.TCPExtraOptions}。
     * @param { AsyncCallback<void> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * 设置TCPSocket连接的其他属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind或connect方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPExtraOptions } options - TCPSocket连接的其他属性，参考[TCPExtraOptions]{@link socket.TCPExtraOptions}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * 获取TCPSocket的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 订阅TCPSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. [since 7 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。返回TCPSocket连接信息。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'message', callback: Callback<SocketMessageInfo>): void;

    /**
     * 取消订阅TCPSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 取消订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. You can pass the callback of the **on** function if you want to cancel listening for a certain
     *     type of events. If you do not pass the callback, you will cancel listening for all events. [since 7 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'message', callback?: Callback<SocketMessageInfo>): void;

    /**
     * 订阅TCPSocket的连接事件或关闭事件。使用callback异步回调。
     *
     * @param { 'connect' | 'close' } type - 订阅的事件类型。<br />- 'connect'：连接事件。<br />- 'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。TCPSocket的连接事件或关闭事件触发时调用回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'connect' | 'close', callback: Callback<void>): void;

    /**
     * 取消订阅TCPSocket的连接事件或关闭事件。使用callback异步回调。
     *
     * @param { 'connect' | 'close' } type - 取消订阅的事件类型。<br />- 'connect'：连接事件。<br />- 'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    /**
     * 订阅TCPSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。TCPSocket连接订阅的某类error事件触发时调用回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅TCPSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 7 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

  }

  /**
   * TLSSocket连接。在调用TLSSocket的方法前，需要先通过[socket.constructTLSSocketInstance]{@link socket.constructTLSSocketInstance}创建
   * TLSSocket对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  export interface TLSSocket {
    /**
     * 绑定IP地址和端口。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 如果TLSSocket对象是通过TCPSocket对象升级创建的，可以不用执行bind方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 本端地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @param { AsyncCallback<void> } callback - 回调函数。成功返回TLSSocket绑定本机的IP地址和端口的结果。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    bind(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * 绑定IP地址和端口。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 如果TLSSocket对象是通过TCPSocket对象升级创建的，可以不用执行bind方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 本端地址信息，参考
     *     [NetAddress](docroot://reference/apis-network-kit/js-apis-socket.md#netaddress)。
     * @returns { Promise<void> } 以Promise形式返回TLSSocket绑定本机的IP地址和端口的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    bind(address: NetAddress): Promise<void>;

    /**
     * 在TLSSocket通信连接成功之后，获取对端Socket地址。使用callback异步回调。
     *
     * @param { AsyncCallback<NetAddress> } callback - 回调函数。成功返回对端的socket地址，失败返回错误码、错误信息。
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

    /**
     * 在TLSSocket通信连接成功之后，获取对端Socket地址。使用Promise异步回调。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取对端socket地址的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * 在TLSSocket的bind成功之后，获取TLSSocket状态。使用callback异步回调。
     *
     * @param { AsyncCallback<SocketStateBase> } callback - 回调函数。成功返回TLSSocket状态，失败返回错误码、错误信息。
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * 在TLSSocket的bind成功之后，获取TLSSocket状态。使用Promise异步回调。
     *
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取TLSSocket状态的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 在TLSSocket的bind成功之后，设置TCPSocket连接的其他属性。使用callback异步回调。
     *
     * @param { TCPExtraOptions } options - TCPSocket连接的其他属性，参考[TCPExtraOptions]{@link socket.TCPExtraOptions}。
     * @param { AsyncCallback<void> } callback - 回调函数。成功返回设置TCPSocket连接的其他属性的结果，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * 在TLSSocket的bind成功之后，设置TCPSocket连接的其他属性。使用Promise异步回调。
     *
     * @param { TCPExtraOptions } options - TCPSocket连接的其他属性，参考[TCPExtraOptions]{@link socket.TCPExtraOptions}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * 获取TLSSocket的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 在TLSSocketServer通信连接成功之后，才可调用此方法。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 订阅TLSSocket连接的接收消息事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. [since 9 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。TLSSocket连接订阅某类接受消息事件触发的调用函数，返回TLSSocket连接信息。 [since 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    on(type: 'message', callback: Callback<SocketMessageInfo>): void;

    /**
     * 取消订阅TLSSocket连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. [since 9 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。TLSSocket连接取消订阅某类接受消息事件触发的调用函数，返回TLSSocket连接信息。 [since 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    off(type: 'message', callback?: Callback<SocketMessageInfo>): void;

    /**
     * 订阅TLSSocket的连接事件或关闭事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @param { 'connect' | 'close' } type - 订阅的事件类型。<br />- 'connect'：连接事件。<br />- 'close'：关闭事件。
     * @param {Callback<void> } callback - 回调函数。TLSSocket连接订阅某类事件触发的调用函数。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    on(type: 'connect' | 'close', callback: Callback<void>): void;

    /**
     * 取消订阅TLSSocket的连接事件或关闭事件。使用callback异步回调。
     *
     * @param { 'connect' | 'close' } type - 订阅的事件类型。<br />- 'connect'：连接事件。<br />- 'close'：关闭事件。
     * @param {Callback<void> } callback - 回调函数。TLSSocket连接订阅某类事件触发的调用函数。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    off(type: 'connect' | 'close', callback?: Callback<void>): void;

    /**
     * 订阅TLSSocket连接的error事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > bind方法调用成功后，才可调用此方法。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。TLSSocket连接订阅某类error事件触发的调用函数。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅TLSSocket连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。TLSSocket连接取消订阅某类error事件触发的调用函数。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 在TLSSocket通信连接成功之后，获取本地的数字证书，该接口只适用于双向认证时，使用callback异步回调。
     *
     * @param { AsyncCallback<X509CertRawData> } callback - 回调函数，成功返回本地的证书，失败返回错误码、错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303504 - An error occurred when verifying the X.509 certificate.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getCertificate(callback: AsyncCallback<X509CertRawData>): void;

    /**
     * 在TLSSocket通信连接之后，获取本地的数字证书，该接口只适用于双向认证时，使用Promise异步回调。
     *
     * @returns { Promise<X509CertRawData> } 以Promise形式返回本地的数字证书的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303504 - An error occurred when verifying the X.509 certificate.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getCertificate(): Promise<X509CertRawData>;

    /**
     * 在TLSSocket通信连接成功之后，获取服务端的数字证书，使用callback异步回调。
     *
     * @param { AsyncCallback<X509CertRawData> } callback - 回调函数，返回服务端的证书。失败返回错误码、错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;

    /**
     * 在TLSSocket通信连接成功之后，获取服务端的数字证书，使用Promise异步回调。
     *
     * @returns { Promise<X509CertRawData> } 以Promise形式返回服务端的数字证书的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getRemoteCertificate(): Promise<X509CertRawData>;

    /**
     * 在TLSSocket通信连接成功之后，获取通信的协议版本，使用callback异步回调。
     *
     * @param { AsyncCallback<string> } callback - 回调函数，返回通信的协议。失败返回错误码、错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getProtocol(callback: AsyncCallback<string>): void;

    /**
     * 在TLSSocket通信连接成功之后，获取通信的协议版本，使用Promise异步回调。
     *
     * @returns { Promise<string> } 以Promise形式返回通信的协议。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getProtocol(): Promise<string>;

    /**
     * 在TLSSocket通信连接成功之后，获取通信双方协商后的加密套件，使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回通信双方支持的加密套件。失败返回错误码、错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getCipherSuite(callback: AsyncCallback<Array<string>>): void;

    /**
     * 在TLSSocket通信连接成功之后，获取通信双方协商后的加密套件，使用Promise异步回调。
     *
     * @returns { Promise<Array<string>> } 以Promise形式返回通信双方支持的加密套件。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getCipherSuite(): Promise<Array<string>>;

    /**
     * 在TLSSocket通信连接成功之后，获取通信双方协商后签名算法，该接口只适配双向认证模式下，使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回双方支持的签名算法。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;

    /**
     * 在TLSSocket通信连接成功之后，获取通信双方协商后的签名算法，该接口只适配双向认证模式下，使用Promise异步回调。
     *
     * @returns { Promise<Array<string>> } 以Promise形式返回获取到的双方支持的签名算法。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    getSignatureAlgorithms(): Promise<Array<string>>;

    /**
     * 获取TLSSocket的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - bind方法调用成功后，才可调用此方法。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.TLSSocket.close(callback: AsyncCallback<void>)}方法关闭Socket连接，避免直接操作
     * > 文件描述符进行关闭。
     *
     * @returns { Promise<int> } 以Promise形式返回socket的文件描述符。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 16 dynamic
     */
    getSocketFd(): Promise<int>;

    /**
     * 在TLSSocket上bind成功之后，进行通信连接，并创建和初始化TLS会话，实现建立连接过程，启动与服务器的TLS/SSL握手，实现数据传输功能，使用callback异步回调。需要注意options入参下
     * secureOptions内的ca在API11及之前的版本为必填项，需填入服务端的ca证书(用于认证校验服务端的数字证书)，证书内容以"-----BEGIN CERTIFICATE-----"开头，以"-----END
     * CERTIFICATE-----"结尾，自API12开始，为非必填项。
     *
     * @param { TLSConnectOptions } options - TLSSocket连接所需要的参数。
     * @param { AsyncCallback<void> } callback - 回调函数，成功无返回，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303104 - Interrupted system call.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable. Try again.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2303191 - Incorrect socket protocol type.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @throws { BusinessError } 2303210 - Connection timed out.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301206 - Socks5 failed to connect to the proxy server. [since 18]
     * @throws { BusinessError } 2301207 - Socks5 username or password is invalid. [since 18]
     * @throws { BusinessError } 2301208 - Socks5 failed to connect to the remote server. [since 18]
     * @throws { BusinessError } 2301209 - Socks5 failed to negotiate the authentication method. [since 18]
     * @throws { BusinessError } 2301210 - Socks5 failed to send the message. [since 18]
     * @throws { BusinessError } 2301211 - Socks5 failed to receive the message. [since 18]
     * @throws { BusinessError } 2301212 - Socks5 serialization error. [since 18]
     * @throws { BusinessError } 2301213 - Socks5 deserialization error. [since 18]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    connect(options: TLSConnectOptions, callback: AsyncCallback<void>): void;

    /**
     * 在TLSSocket上bind成功之后，进行通信连接，并创建和初始化TLS会话，实现建立连接过程，启动与服务器的TLS/SSL握手，实现数据传输功能，该连接包括两种认证方式，单向认证与双向认证，使用Promise异步回调。需要
     * 注意options入参下secureOptions内的ca在API11及之前的版本为必填项，需填入服务端的ca证书(用于认证校验服务端的数字证书)，证书内容以"-----BEGIN CERTIFICATE-----"开头，以"
     * -----END CERTIFICATE-----"结尾，自API12开始，为非必填项。
     *
     * @param { TLSConnectOptions } options - 连接所需要的参数。
     * @returns { Promise<void> } 以Promise形式返回，成功无返回，失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303104 - Interrupted system call.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable. Try again.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2303191 - Incorrect socket protocol type.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @throws { BusinessError } 2303210 - Connection timed out.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301206 - Socks5 failed to connect to the proxy server. [since 18]
     * @throws { BusinessError } 2301207 - Socks5 username or password is invalid. [since 18]
     * @throws { BusinessError } 2301208 - Socks5 failed to connect to the remote server. [since 18]
     * @throws { BusinessError } 2301209 - Socks5 failed to negotiate the authentication method. [since 18]
     * @throws { BusinessError } 2301210 - Socks5 failed to send the message. [since 18]
     * @throws { BusinessError } 2301211 - Socks5 failed to receive the message. [since 18]
     * @throws { BusinessError } 2301212 - Socks5 serialization error. [since 18]
     * @throws { BusinessError } 2301213 - Socks5 deserialization error. [since 18]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    connect(options: TLSConnectOptions): Promise<void>;

    /**
     * 在TLSSocket通信连接成功之后，向服务端发送消息，使用callback异步回调。
     *
     * @param { string } data - Data content of the message to send. [since 9 - 11]
     * @param { string | ArrayBuffer } data - 发送的数据内容。 [since 9 - 11]
     * @param { AsyncCallback<void> } callback - 回调函数,返回TLSSocket发送数据的结果。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    send(data: string | ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * 在TLSSocket通信连接成功之后，向服务端发送消息，使用Promise异步回调。
     *
     * @param { string } data - Data content of the message to send. [since 9 - 11]
     * @param { string | ArrayBuffer } data - 发送的数据内容。 [since 9 - 11]
     * @returns { Promise<void> } 以Promise形式返回,返回TLSSocket发送数据的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    send(data: string | ArrayBuffer): Promise<void>;

    /**
     * 在TLSSocket通信连接成功之后，断开连接，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数,成功返回TLSSocket关闭连接的结果。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * 在TLSSocket通信连接成功之后，断开连接，使用Promise异步回调。
     *
     * @returns { Promise<void> } 以Promise形式返回,返回TLSSocket关闭连接的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    close(): Promise<void>;
  }

  /**
   * TLS安全相关操作。当本地证书cert和私钥key不为空时，开启双向验证模式。cert和key其中一项为空时，开启单向验证模式。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  export interface TLSSecureOptions {
    /**
     * 服务端的ca证书，用于认证校验服务端的数字证书。默认为系统预置CA证书<sup>12+</sup>。最多支持设置1000本证书。
     *
     * @type {string | Array<string>} [since 9 - 11]
     * @type {?(string | Array<string>)} [since 12]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    ca?: string | Array<string>;

    /**
     * 本地客户端的数字证书。从API Version 24开始支持传入数组，最多支持设置1000本证书。
     *
     * @type {?string} [since 9 - 23]
     * @type {?(string | Array<string>)} [since 24]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    cert?: string | Array<string>;

    /**
     * 本地数字证书的私钥。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    key?: string;

    /**
     * 读取私钥的密码。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    password?: string;

    /**
     * TLS的协议版本，默认为"TLSv1.2"。
     *
     * @type {?Protocol | Array<Protocol>} [since 9 - 9]
     * @type {?(Protocol | Array<Protocol>)} [since 10]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    protocols?: Protocol | Array<Protocol>;

    /**
     * 优先使用对等方的密码套件。true：优先使用对等方的密码套件；false：不优先使用对等方的密码套件。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    useRemoteCipherPrefer?: boolean;

    /**
     * 通信过程中的签名算法，默认为"" 。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    signatureAlgorithms?: string;

    /**
     * 通信过程中的加密套件，默认为"" 。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    cipherSuite?: string;

    /**
     * 用于设置双向认证，默认为false。true：设置双向认证；false：不设置双向认证。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    isBidirectionalAuthentication?: boolean;
  }

  /**
   * TLS连接的操作。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  export interface TLSConnectOptions {
    /**
     * 网关地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    address: NetAddress;

    /**
     * TLS安全相关操作。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    secureOptions: TLSSecureOptions;

    /**
     * ALPN协议，支持["spdy/1", "http/1.1"]，默认为[]。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    ALPNProtocols?: Array<string>;

    /**
     * 是否跳过对服务端进行证书认证，默认为false。true：跳过对服务端进行证书认证；false：不跳过对服务端进行证书认证。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    skipRemoteValidation?: boolean;

    /**
     * 使用的代理信息，默认不使用代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 18 dynamic
     */
    proxy?: ProxyOptions;

    /**
     * 连接超时时间，单位：ms，默认为0。传入值需为0-4294967295范围内的整数。TLSSocket连接在超时后会失败。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 22 dynamic
     */
    timeout?: int;
  }

  /**
   * TLS通信的协议版本。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  export enum Protocol {
    /**
     * 使用TLSv1.2协议通信。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    TLSv12 = "TLSv1.2",

    /**
     * 使用TLSv1.3协议通信。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    TLSv13 = "TLSv1.3"
  }

  /**
   * TCPSocketConnection连接，即TCPSocket客户端与服务端的连接。在调用TCPSocketConnection的方法前，需要先获取TCPSocketConnection对象。
   *
   * > **说明：**
   * >
   * > 客户端与服务端成功建立连接后，才能通过返回的TCPSocketConnection对象调用相应的接口。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 10 dynamic
   */
  export interface TCPSocketConnection {
    /**
     * 客户端与TCPSocketServer建立连接的id。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    clientId: int;

    /**
     * 通过TCPSocketConnection连接发送数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 与客户端建立连接后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPSendOptions } options - TCPSocketConnection发送请求的参数。
     * @param { AsyncCallback<void> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    send(options: TCPSendOptions, callback: AsyncCallback<void>): void;

    /**
     * 通过TCPSocketConnection连接发送数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 与客户端建立连接后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPSendOptions } options - TCPSocketConnection发送请求的参数。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    send(options: TCPSendOptions): Promise<void>;

    /**
     * 关闭一个与TCPSocket建立的连接。使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<void> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * 关闭一个与TCPSocket建立的连接。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    close(): Promise<void>;

    /**
     * 获取对端Socket地址。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 与客户端建立连接后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<NetAddress> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

    /**
     * 获取对端Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 与客户端建立连接后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<NetAddress> } 以Promise形式返回获取对端socket地址的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * 获取TCPSocketConnection连接的本地Socket地址。使用Promise异步回调。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 订阅TCPSocketConnection连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. If the operation fails, an error message is returned. [since 10 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。失败时返回错误码、错误信息。 [since 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    on(type: 'message', callback: Callback<SocketMessageInfo>): void;

    /**
     * 取消订阅TCPSocketConnection连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 取消订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. You can pass the callback of the **on** function if you want to cancel listening for a certain
     *     type of events. If you do not pass the callback, you will cancel listening for all events. [since 10 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。 [since 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    off(type: 'message', callback?: Callback<SocketMessageInfo>): void;

    /**
     * 订阅TCPSocketConnection的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 订阅的事件类型。'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    on(type: 'close', callback: Callback<void>): void;

    /**
     * 取消订阅TCPSocketConnection的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 取消订阅的事件类型。'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    off(type: 'close', callback?: Callback<void>): void;

    /**
     * 订阅TCPSocketConnection连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅TCPSocketConnection连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取TCPSocketConnection连接的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 与客户端建立连接后，才可调用此方法。
     * >
     * > - 连接断开、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.TCPSocketConnection.close(callback: AsyncCallback<void>)}方法关闭
     * > Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }

  /**
   * TCPSocketServer连接。在调用TCPSocketServer的方法前，需要先通过
   * [socket.constructTCPSocketServerInstance]{@link socket.constructTCPSocketServerInstance}创建TCPSocketServer对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 10 dynamic
   */
  export interface TCPSocketServer {
    /**
     * 绑定IP地址和端口，端口可以指定或由系统随机分配。监听并接受与此套接字建立的TCPSocket连接。该接口使用多线程并发处理客户端的数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 服务端使用该方法完成bind，listen，accept操作，bind方法失败会由系统随机分配端口号。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 目标地址信息。
     * @param { AsyncCallback<void> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable. Try again.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    listen(address: NetAddress, callback: AsyncCallback<void>): void;

    /**
     * 绑定IP地址和端口，端口可以指定或由系统随机分配。监听并接受与此套接字建立的TCPSocket连接。该接口使用多线程并发处理客户端的数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 服务端使用该方法完成bind，listen，accept操作，bind方法失败会由系统随机分配端口号。
     *
     * @permission ohos.permission.INTERNET
     * @param { NetAddress } address - 目标地址信息。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable. Try again.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    listen(address: NetAddress): Promise<void>;

    /**
     * TCPSocketServer停止监听并释放通过
     * [listen]{@link socket.TCPSocketServer.listen(address: NetAddress, callback: AsyncCallback<void>)}方法绑定的端口。若多次调用
     * [listen]{@link socket.TCPSocketServer.listen(address: NetAddress, callback: AsyncCallback<void>)}方法，再调用此方法时会释放
     * TCPSocketServer的所有监听端口。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 该方法不会关闭已有连接。如需关闭，请调用[TCPSocketConnection]{@link socket.TCPSocketConnection}的
     * > [close]{@link socket.TCPSocketConnection.close(callback: AsyncCallback<void>)}方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 20 dynamic
     */
    close(): Promise<void>;

    /**
     * 获取TCPSocketServer状态。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<SocketStateBase> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * 获取TCPSocketServer状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取TCPSocket状态的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 设置TCPSocketServer连接的其他属性。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPExtraOptions } options - TCPSocketServer连接的其他属性。
     * @param { AsyncCallback<void> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * 设置TCPSocketServer连接的其他属性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { TCPExtraOptions } options - TCPSocketServer连接的其他属性。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * 获取TCPSocketServer的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 订阅TCPSocketServer的连接事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { 'connect' } type - 订阅的事件类型。'connect'：连接事件。
     * @param { Callback<TCPSocketConnection> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    on(type: 'connect', callback: Callback<TCPSocketConnection>): void;

    /**
     * 取消订阅TCPSocketServer的连接事件。使用callback异步回调。
     *
     * @param { 'connect' } type - 取消订阅的事件类型。'connect'：连接事件。
     * @param { Callback<TCPSocketConnection> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    off(type: 'connect', callback?: Callback<TCPSocketConnection>): void;

    /**
     * 订阅TCPSocketServer连接的error事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅TCPSocketServer连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取TCPSocketServer监听端口绑定的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - [listen]{@link socket.TCPSocketServer.listen(address: NetAddress, callback: AsyncCallback<void>)}方法调用成功后，才可调用
     * > 此方法。多次调用listen时，会获取最新监听端口绑定的文件描述符。
     * >
     * > - 监听异常、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.TCPSocketServer.close}方法关闭Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }

  /**
   * TLSSocketConnection连接，即TLSSocket客户端与服务端的连接。在调用TLSSocketConnection的方法前，需要先获取TLSSocketConnection对象。
   *
   * > **说明：**
   * >
   * > 客户端与服务端成功建立连接后，才能通过返回的TLSSocketConnection对象调用相应的接口。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 10 dynamic
   */
  export interface TLSSocketConnection {
    /**
     * 客户端与TLSSocketServer建立连接的id。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    clientId: int;

    /**
     * 在TLSSocketServer通信连接成功之后，向客户端发送消息，使用callback异步回调。
     *
     * @param { string } data - Parameters for sending data over a TLS socket server connection. [since 10 - 11]
     * @param { string | ArrayBuffer } data - TLSSocketServer发送数据所需要的参数。 [since 10 - 11]
     * @param { AsyncCallback<void> } callback - 回调函数，成功返回空，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    send(data: string | ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * 在TLSSocketServer通信连接成功之后，向服务端发送消息，使用Promise异步回调。
     *
     * @param { string } data - Parameters for sending data over a TLS socket server connection. [since 10 - 11]
     * @param { string | ArrayBuffer } data - TLSSocketServer发送数据所需要的参数。 [since 10 - 11]
     * @returns { Promise<void> } 以Promise形式返回，成功返回空，失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    send(data: string | ArrayBuffer): Promise<void>;

    /**
     * 在与TLSSocketServer通信连接成功之后，断开连接，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，成功返回空，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    close(callback: AsyncCallback<void>): void;

    /**
     * 在与TLSSocketServer通信连接成功之后，断开连接，使用Promise异步回调。
     *
     * @returns { Promise<void> } 以Promise形式返回，成功返回空。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    close(): Promise<void>;

    /**
     * 在TLSSocketServer通信连接成功之后，获取对端Socket地址。使用callback异步回调。
     *
     * @param { AsyncCallback<NetAddress> } callback - 回调函数。成功返回对端的socket地址，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getRemoteAddress(callback: AsyncCallback<NetAddress>): void;

    /**
     * 在TLSSocketServer通信连接成功之后，获取对端Socket地址。使用Promise异步回调。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取对端socket地址的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getRemoteAddress(): Promise<NetAddress>;

    /**
     * 在TLSSocketServer通信连接成功之后，获取对端的数字证书，该接口只适用于客户端向服务端发送证书时，使用callback异步回调。
     *
     * @param { AsyncCallback<X509CertRawData> } callback - 回调函数，返回对端的证书。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;

    /**
     * 在TLSSocketServer通信连接成功之后，获取对端的数字证书，该接口只适用于客户端向服务端发送证书时，使用Promise异步回调。
     *
     * @returns { Promise<X509CertRawData> } 以Promise形式返回对端的数字证书的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getRemoteCertificate(): Promise<X509CertRawData>;

    /**
     * 在TLSSocketServer通信连接成功之后，获取通信双方协商后的加密套件，使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回通信双方支持的加密套件。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getCipherSuite(callback: AsyncCallback<Array<string>>): void;

    /**
     * 在TLSSocketServer通信连接成功之后，获取通信双方协商后的加密套件，使用Promise异步回调。
     *
     * @returns { Promise<Array<string>> } 以Promise形式返回通信双方支持的加密套件。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getCipherSuite(): Promise<Array<string>>;

    /**
     * 在TLSSocketServer通信连接成功之后，获取通信双方协商后签名算法，使用callback异步回调。
     *
     * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回双方支持的签名算法。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;

    /**
     * 在TLSSocketServer通信连接成功之后，获取通信双方协商后的签名算法，使用Promise异步回调。
     *
     * @returns { Promise<Array<string>> } 以Promise形式返回获取到的双方支持的签名算法。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getSignatureAlgorithms(): Promise<Array<string>>;

    /**
     * 获取TLSSocketConnection连接的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 在TLSSocketServer通信连接成功之后，才可调用此方法。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 订阅TLSSocketConnection连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. If the operation is successful, the TLS socket connection information is returned. If the
     *     operation fails, an error message is returned. [since 10 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。成功时返回TLSSocketConnection连接信息，失败时返回错误码、错误信息。 [since 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    on(type: 'message', callback: Callback<SocketMessageInfo>): void;

    /**
     * 取消订阅TLSSocketConnection连接的接收消息事件。使用callback异步回调。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：接收消息事件。
     * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - Callback used to return
     *     the result. If the operation is successful, the TLS socket connection information is returned. If the
     *     operation fails, an error message is returned. [since 10 - 10]
     * @param { Callback<SocketMessageInfo> } callback - 回调函数。成功时返回TLSSocketConnection连接信息，失败时返回错误码、错误信息。 [since 11]
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    off(type: 'message', callback?: Callback<SocketMessageInfo>): void;

    /**
     * 订阅TLSSocketConnection的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 订阅的事件类型。'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。成功时返回空，失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    on(type: 'close', callback: Callback<void>): void;

    /**
     * 取消订阅TLSSocketConnection的关闭事件。使用callback异步回调。
     *
     * @param { 'close' } type - 订阅的事件类型。'close'：关闭事件。
     * @param { Callback<void> } callback - 回调函数。成功时返回空，失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    off(type: 'close', callback?: Callback<void>): void;

    /**
     * 订阅TLSSocketConnection连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。成功时返回空，失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅TLSSocketConnection连接的error事件。使用callback异步回调。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。成功时返回空，失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取TLSSocketConnection连接的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 在TLSSocketServer通信连接成功之后，才可调用此方法。
     * >
     * > - 连接断开、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.TCPSocketConnection.close(callback: AsyncCallback<void>)}方法关闭
     * > Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }

  /**
   * socket连接信息
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @since 11 dynamic
   */
  export interface SocketMessageInfo {
    /**
     * 接收的事件消息。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 11 dynamic
     */
    message: ArrayBuffer;
    /**
     * socket连接信息。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 11 dynamic
     */
    remoteInfo: SocketRemoteInfo;
  }

  /**
   * TLSSocketServer连接。在调用TLSSocketServer的方法前，需要先通过
   * [socket.constructTLSSocketServerInstance]{@link socket.constructTLSSocketServerInstance}创建TLSSocketServer对象。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 10 dynamic
   */
  export interface TLSSocketServer {
    /**
     * 绑定IP地址和端口，在TLSSocketServer上bind成功之后，监听客户端的连接，创建和初始化TLS会话，实现建立连接过程，加载证书秘钥并验证，使用callback异步回调。
     *
     * > **注意：**
     * >
     * > IP地址设置为0.0.0.0时，可以监听本机所有地址。
     *
     * @permission ohos.permission.INTERNET
     * @param { TLSConnectOptions } options - TLSSocketServer连接所需要的参数。
     * @param { AsyncCallback<void> } callback - 回调函数，成功返回空，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable. Try again.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    listen(options: TLSConnectOptions, callback: AsyncCallback<void>): void;

    /**
     * 绑定IP地址和端口，在TLSSocketServer上bind成功之后，监听客户端的连接，并创建和初始化TLS会话，实现建立连接过程，加载证书秘钥并验证，使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { TLSConnectOptions } options - 连接所需要的参数。
     * @returns { Promise<void> } 以Promise形式返回，成功返回空，失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2303109 - Bad file number.
     * @throws { BusinessError } 2303111 - Resource temporarily unavailable. Try again.
     * @throws { BusinessError } 2303198 - Address already in use.
     * @throws { BusinessError } 2303199 - Cannot assign requested address.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303502 - An error occurred when reading data on the TLS socket.
     * @throws { BusinessError } 2303503 - An error occurred when writing data on the TLS socket.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2303506 - Failed to close the TLS connection.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    listen(options: TLSConnectOptions): Promise<void>;

    /**
     * TLSSocketServer停止监听并释放通过[listen]{@link socket.TCPSocketServer.listen}方法绑定的端口。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 该方法不会关闭已有连接。如需关闭，请调用[TLSSocketConnection]{@link socket.TLSSocketConnection}的
     * > [close]{@link socket.TCPSocketConnection.close(callback: AsyncCallback<void>)}方法。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 20 dynamic
     */
    close(): Promise<void>;

    /**
     * 在TLSSocketServer的listen成功之后，获取TLSSocketServer状态。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { AsyncCallback<SocketStateBase> } callback - 回调函数。成功返回TLSSocketServer状态，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getState(callback: AsyncCallback<SocketStateBase>): void;

    /**
     * 在TLSSocketServer的listen成功之后，获取TLSSocketServer状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<SocketStateBase> } 以Promise形式返回获取TLSSocketServer状态的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getState(): Promise<SocketStateBase>;

    /**
     * 在TLSSocketServer的listen成功之后，设置TLSSocketServer连接的其他属性。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { TCPExtraOptions } options - TLSSocketServer连接的其他属性。
     * @param { AsyncCallback<void> } callback - 回调函数。成功返回空，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;

    /**
     * 在TLSSocketServer的listen成功之后，设置TLSSocketServer连接的其他属性，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { TCPExtraOptions } options - TLSSocketServer连接的其他属性。
     * @returns { Promise<void> } 以Promise形式返回，成功返回空，失败返回错误码，错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    setExtraOptions(options: TCPExtraOptions): Promise<void>;

    /**
     * 在TLSSocketServer通信连接成功之后，获取本地的数字证书，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { AsyncCallback<X509CertRawData> } callback - 回调函数，成功返回本地的证书，失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303504 - An error occurred when verifying the X.509 certificate.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getCertificate(callback: AsyncCallback<X509CertRawData>): void;

    /**
     * 在TLSSocketServer通信连接之后，获取本地的数字证书，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<X509CertRawData> } 以Promise形式返回本地的数字证书的结果。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303504 - An error occurred when verifying the X.509 certificate.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getCertificate(): Promise<X509CertRawData>;

    /**
     * 在TLSSocketServer通信连接成功之后，获取通信的协议版本，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { AsyncCallback<string> } callback - 回调函数，返回通信的协议。失败返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getProtocol(callback: AsyncCallback<string>): void;

    /**
     * 在TLSSocketServer通信连接成功之后，获取通信的协议版本，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @returns { Promise<string> } 以Promise形式返回通信的协议。失败返回错误码，错误信息。
     * @throws { BusinessError } 2303501 - SSL is null.
     * @throws { BusinessError } 2303505 - An error occurred in the TLS system call.
     * @throws { BusinessError } 2300002 - System internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    getProtocol(): Promise<string>;

    /**
     * 获取TLSSocketServer的本地Socket地址。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 在TLSSocketServer通信连接成功之后，才可调用此方法。
     *
     * @returns { Promise<NetAddress> } 以Promise形式返回获取本地socket地址的结果。
     * @throws { BusinessError } 2300002 - System internal error.
     * @throws { BusinessError } 2301009 - Bad file descriptor.
     * @throws { BusinessError } 2303188 - Socket operation on non-socket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    getLocalAddress(): Promise<NetAddress>;

    /**
     * 订阅TLSSocketServer的连接事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { 'connect' } type - 订阅的事件类型。'connect'：连接事件。
     * @param { Callback<TLSSocketConnection> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    on(type: 'connect', callback: Callback<TLSSocketConnection>): void;

    /**
     * 取消订阅TLSSocketServer的连接事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'connect' } type - 订阅的事件类型。'connect'：连接事件。
     * @param { Callback<TLSSocketConnection> } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    off(type: 'connect', callback?: Callback<TLSSocketConnection>): void;

    /**
     * 订阅TLSSocketServer连接的error事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅TLSSocketServer连接的error事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > listen方法调用成功后，才可调用此方法。
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：error事件。
     * @param { ErrorCallback } callback - 回调函数。失败时返回错误码、错误信息。
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 10 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 获取TLSSocketServer监听端口绑定的文件描述符。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - [listen]{@link socket.TCPSocketServer.listen}方法调用成功后，才可调用此方法。多次调用listen时，会获取最新监听端口绑定的文件描述符。
     * >
     * > - 监听异常、Socket已关闭（如调用close后）等异常情况下调用本接口会返回-1。
     * >
     * > - 文件描述符的生命周期由系统管理，应用可以通过[close]{@link socket.TCPSocketServer.close}方法关闭Socket连接，避免直接操作文件描述符进行关闭。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<int> } Promise对象，返回Socket的文件描述符。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 23 dynamic
     */
    getSocketFd(): Promise<int>;
  }
}

export default socket;