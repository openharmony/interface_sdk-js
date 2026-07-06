/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * @file WebSocket连接
 * @kit NetworkKit
 */

import type { AsyncCallback, ErrorCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';

/**
 * 给第三方应用提供webSocket客户端和服务端服务器，实现客户端与服务端的双向连接。
 * 
 * 客户端：使用WebSocket建立服务器与客户端的双向连接，需要先通过[createWebSocket]{@link webSocket.createWebSocket}方法创建
 * [WebSocket]{@link webSocket.WebSocket}对象，然后通过
 * [connect]{@link webSocket.WebSocket.connect(url: string, callback: AsyncCallback<boolean>)}方法连接到服务器。当连接成功后，客户端会收到
 * [open]{@link webSocket.WebSocket.on(type: 'open', callback: AsyncCallback<Object>)}事件的回调，之后客户端就可以通过
 * [send]{@link webSocket.WebSocket.send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>)}方法与服务器进行通信。当服务器发信
 * 息给客户端时，客户端会收到[message]{@link webSocket.WebSocket.on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>)}事
 * 件的回调。当客户端想要取消此连接时，通过调用[close]{@link webSocket.WebSocket.close(callback: AsyncCallback<boolean>)}方法主动断开连接后，客户端会收到
 * [close]{@link webSocket.WebSocket.on(type: 'close', callback: AsyncCallback<CloseResult>)}事件的回调。若在上述任一过程中发生错误，客户端会收到
 * [error]{@link webSocket.WebSocket.on(type: 'error', callback: ErrorCallback)}事件的回调。
 * 
 * 服务端：（从API version 23开始支持全设备使用，之前仅支持TV设备使用）使用WebSocket建立服务器与客户端的双向连接，需要先通过
 * [createWebSocketServer]{@link webSocket.createWebSocketServer}方法创建[WebSocketServer]{@link webSocket.WebSocketServer}对
 * 象，然后通过[start]{@link webSocket.WebSocketServer.start}方法启动服务器，监听客户端的申请建链的消息。当连接成功后，服务端会收到
 * [connect]{@link webSocket.WebSocketServer.on(type: 'connect', callback: Callback<WebSocketConnection>)}事件的回调，之后服务端可以通
 * 过[send]{@link webSocket.WebSocketServer.send}方法与客户端进行通信，或者通过
 * [listAllConnections]{@link webSocket.WebSocketServer.listAllConnections}方法列举出当前与服务端建链的所有客户端信息。当客户端给服务端发消息时，服务端会收到
 * [messageReceive]{@link webSocket.WebSocketServer.on(type: 'messageReceive', callback: Callback<WebSocketMessage>)}事件回
 * 调。当服务端想断开与某个客户端的连接时，可以通过调用[close]{@link webSocket.WebSocketServer.close}方法主动断开与某个客户端的连接，之后服务端会收到
 * [close]{@link webSocket.WebSocketServer.on(type: 'close', callback: ClientConnectionCloseCallback)}事件的回调。当服务端想停止
 * service时，可以调用[stop]{@link webSocket.WebSocketServer.stop}方法。若在上述任一过程中发生错误，服务端会收到
 * [error]{@link webSocket.WebSocketServer.on(type: 'error', callback: ErrorCallback)}事件的回调。
 *
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace webSocket {
  /**
   * 网络全局代理配置信息。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @crossplatform [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  type HttpProxy = connection.HttpProxy;

  /**
   * 创建一个WebSocket对象，里面包括建立连接、关闭连接、发送数据和订阅/取消订阅WebSocket连接的打开事件、接收到服务器消息事件、关闭事件和错误事件。
   *
   * @returns { WebSocket } 返回一个WebSocket对象，里面包括connect、send、close、on和off方法。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  function createWebSocket(): WebSocket;

  /**
   * 建立WebSocket连接时，可选参数的类型和说明。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface WebSocketRequestOptions {
    /**
     * 建立WebSocket连接可选参数，代表建立连接时携带的HTTP头信息。参数内容自定义，也可以不指定。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    header?: Object;

    /**
     * HTTP request header.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 23 static
     */
    header?: Record<string, string>;

    /**
     * 如果设置了此参数，系统将使用用户指定路径的CA证书，(开发者需保证该路径下CA证书的可访问性)，否则将使用系统预设CA证书，系统预设CA证书位置：/etc/ssl/certs/cacert.pem。证书路径为沙箱映射路径（开发
     * 者可通过UIAbilityContext提供的能力获取应用沙箱路径）。目前仅支持格式为pem的文本证书。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    caPath?: string;

    /**
     * 是否跳过服务器证书验证。true表示跳过服务器证书验证，false表示不跳过服务器证书验证。默认为false。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    skipServerCertVerification?: boolean;

    /**
     * 支持传输客户端证书。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    clientCert?: ClientCert;

    /**
     * 通信过程中的代理信息，默认使用系统网络代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    proxy?: ProxyConfiguration;

    /**
     * 自定义Sec-WebSocket-Protocol字段，默认为""。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     * @since 23 static
     */
    protocol?: string;

    /**
     * 自定义[心跳检测](docroot://network/websocket-connection.md#场景介绍)时间，默认为30s。每pingInterval周期会发起心跳检测，设置为0则表示关闭心跳检测。最大值：30000
     * s，最小值：0s。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    pingInterval?: int;

    /**
     * 自定义发起心跳检测后，超时断开时间，默认为30s。发起心跳检测后若pongTimeout时间未响应则断开连接。最大值：30000s，最小值：0s。pongTimeout须小于等于pingInterval。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    pongTimeout?: int;

    /**
     * 自定义支持的最低TLS协议版本。例如：设置该参数为TLS_V_1_1，则客户端可支持TLS协议版本有TLS1.1、TLS1.2、TLS1.3。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minSupportTlsProtocol?: TlsProtocol;

    /**
     * 支持源端口的选项。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    supportOriginPort?: boolean;
  }

  /**
   * 网络代理配置信息
   *
   * @unionmember { 'system' } 使用系统默认网络代理。
   * @unionmember { 'no-proxy' } 不使用网络代理。
   * @unionmember { HttpProxy } 使用指定的网络代理。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  export type ProxyConfiguration = 'system' | 'no-proxy' | HttpProxy;

  /**
   * 客户端证书类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ClientCert {
    /**
     * 证书路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    certPath: string;

    /**
     * 证书密钥的路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyPath: string;

    /**
     * 证书密钥的密码。缺省为空字符串。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyPassword?: string;
  }

  /**
   * 关闭WebSocket连接时，可选参数的类型和说明。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface WebSocketCloseOptions {
    /**
     * 错误码，关闭WebSocket连接时的可选参数，可根据实际情况来填。传入值必须为正整数，取值范围为[1000,1015]。如果未指定错误码或传入值不在上述范围内，code将会被设置为默认值1000。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    code?: int;
    /**
     * 原因值，关闭WebSocket连接时的可选参数，可根据实际情况来填。如果未指定原因值，则原因值将会被设置为默认值"CLOSE_NORMAL"。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    reason?: string;
  }

  /**
   * 关闭WebSocket连接时，订阅close事件得到的关闭结果。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export interface CloseResult {
    /**
     * 错误码，订阅close事件得到的关闭连接的错误码。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    code: int;
    /**
     * 原因值，订阅close事件得到的关闭连接的错误原因。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    reason: string;
  }

  /**
   * WebSocket连接成功后的详细信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 23 static
   */
  export interface OpenResult {
    /**
     * result status.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    status: int;

    /**
     * result message.
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 static
     */
    message: string;
  }

  /**
   * WebSocket连接成功后的详细信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface WebSocketOpenInfo {
    /**
     * 服务器返回的状态码。例如：101表示建链成功并升级为websocket协议。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    status: int;

    /**
     * 服务器返回的状态信息。与status字段对应，例如：status=101时，该字段返回"Switching Protocols"。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    message: string;

    /**
     * 服务器返回的协商后的协议。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    protocol?: string;
 	}

  /**
   * 服务器发送的响应头。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 12 dynamic
   */
  export type ResponseHeaders = {
    [k: string]: string | string[] | undefined;
  };

  /**
   * HTTP response headers.
   * @syscap SystemCapability.Communication.NetStack [since 23]
   * @crossplatform [since 24]
   * @since 23 static
   */
  export type ResponseHeaders = Record<string, string | string[] | undefined>;

  /**
   * 在调用WebSocket的方法前，需要先通过[webSocket.createWebSocket]{@link webSocket.createWebSocket}创建一个WebSocket。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface WebSocket {
    /**
     * 根据URL地址，建立一个WebSocket连接，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > callback中返回的boolean值仅表示连接请求创建是否成功。如需感知WebSocket是否连接成功，需要在调用该接口前调用
     * > [on('open')]{@link webSocket.WebSocket.on(type: 'open', callback: AsyncCallback<Object>)}订阅open事件。
     * > > **注意：**
     * >
     * > URL地址长度不能超过1024个字符，否则会连接失败。从API version 15开始，URL地址长度限制由1024修改为2048。从API version 26开始，URL地址长度限制由2048修改为8196。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 建立WebSocket连接的URL地址。
     * @param { AsyncCallback<boolean> } callback - 回调函数。true:连接请求创建成功；false:连接请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Websocket other unknown error. [since 10]
     * @throws { BusinessError } 2302001 - Websocket url error. [since 12]
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist. [since 12]
     * @throws { BusinessError } 2302003 - Websocket connection already exists. [since 12]
     * @throws { BusinessError } 2302998 - It is not allowed to access this domain. [since 12]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    connect(url: string, callback: AsyncCallback<boolean>): void;

    /**
     * 根据URL地址，建立一个WebSocket连接，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > callback中返回的boolean值仅表示连接请求创建是否成功。如需感知WebSocket是否连接成功，需要在调用该接口前调用
     * > [on('open')]{@link webSocket.WebSocket.on(type: 'open', callback: AsyncCallback<Object>)}订阅open事件。
     * > > **注意：**
     * >
     * > URL地址长度不能超过1024个字符，否则会连接失败。从API version 15开始，URL地址长度限制由1024修改为2048。从API version 26开始，URL地址长度限制由2048修改为8196。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 建立WebSocket连接的URL地址。
     * @param { WebSocketRequestOptions } options - 参考[WebSocketRequestOptions]{@link webSocket.WebSocketRequestOptions}
     *     。
     * @param { AsyncCallback<boolean> } callback - 回调函数。true:连接请求创建成功；false:连接请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Websocket other unknown error. [since 10]
     * @throws { BusinessError } 2302001 - Websocket url error. [since 12]
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist. [since 12]
     * @throws { BusinessError } 2302003 - Websocket connection already exists. [since 12]
     * @throws { BusinessError } 2302998 - It is not allowed to access this domain. [since 12]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void;

    /**
     * 根据URL地址和header，建立一个WebSocket连接。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > callback中返回的boolean值仅表示连接请求创建是否成功。如需感知WebSocket是否连接成功，需要在调用该接口前调用
     * > [on('open')]{@link webSocket.WebSocket.on(type: 'open', callback: AsyncCallback<Object>)}订阅open事件。
     * > > **注意：**
     * >
     * > URL地址长度不能超过1024个字符，否则会连接失败。从API version 15开始，URL地址长度限制由1024修改为2048。从API version 26开始，URL地址长度限制由2048修改为8196。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 建立WebSocket连接的URL地址。
     * @param { WebSocketRequestOptions } options - 参考[WebSocketRequestOptions]{@link webSocket.WebSocketRequestOptions}
     *     。
     * @returns { Promise<boolean> } 回调函数。true:连接请求创建成功；false:连接请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302999 - Websocket other unknown error. [since 10]
     * @throws { BusinessError } 2302001 - Websocket url error. [since 12]
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist. [since 12]
     * @throws { BusinessError } 2302003 - Websocket connection already exists. [since 12]
     * @throws { BusinessError } 2302998 - It is not allowed to access this domain. [since 12]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>;

    /**
     * 通过WebSocket连接发送数据，使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - 发送的数据。
     *     <br>API 6及更早版本仅支持string类型。API 8起同时支持string和ArrayBuffer类型。最大支持发送5242864字节数据(即5 * 1024 * 1024 - 16)，超过该大小会返回401
     *     错误码。
     * @param { AsyncCallback<boolean> } callback - 回调函数。true:发送请求创建成功；false:发送请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void;

    /**
     * 通过WebSocket连接发送数据。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - 发送的数据。
     *     <br>API 6及更早版本仅支持string类型。API 8起同时支持string和ArrayBuffer类型。最大支持发送5242864字节数据(即5 * 1024 * 1024 - 16)，超过该大小会返回401
     *     错误码。
     * @returns { Promise<boolean> } 以Promise形式返回发送数据的结果。true:发送请求创建成功；false:发送请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    send(data: string | ArrayBuffer): Promise<boolean>;

    /**
     * 关闭WebSocket连接，使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { AsyncCallback<boolean> } callback - 回调函数。true:关闭请求创建成功；false:关闭请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    close(callback: AsyncCallback<boolean>): void;

    /**
     * 根据参数options，关闭WebSocket连接，使用callback异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - 参考[WebSocketCloseOptions]{@link webSocket.WebSocketCloseOptions}。
     * @param { AsyncCallback<boolean> } callback - 回调函数。true:关闭请求创建成功；false:关闭请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void;

    /**
     * 根据可选参数code和reason，关闭WebSocket连接。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { WebSocketCloseOptions } options - 参考[WebSocketCloseOptions]{@link webSocket.WebSocketCloseOptions}。
     * @returns { Promise<boolean> } 以Promise形式返回关闭连接的结果。true:关闭请求创建成功；false:关闭请求创建失败。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    close(options?: WebSocketCloseOptions): Promise<boolean>;

    /**
     * 订阅WebSocket的打开事件，使用callback异步回调。该事件用于指示WebSocket是否连接成功。该接口需要在调用
     * [connect]{@link webSocket.WebSocket.connect(url: string, callback: AsyncCallback<boolean>)}发起连接请求前调用。
     *
     * @param { 'open' } type - 订阅的事件类型。'open'：WebSocket的打开事件。
     * @param { AsyncCallback<Object> } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    on(type: 'open', callback: AsyncCallback<Object>): void;

    /**
     * 订阅WebSocket连接的成功事件。
     *
     * @param { Callback<OpenResult> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onOpen(callback: Callback<OpenResult>): void;

    /**
     * 取消订阅WebSocket的打开事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'open' } type - 取消订阅的事件类型。'open'：WebSocket的打开事件。
     * @param { AsyncCallback<Object> } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    off(type: 'open', callback?: AsyncCallback<Object>): void;

    /**
     * 取消订阅WebSocket连接的成功事件。
     *
     * @param { Callback<OpenResult> } [callback] the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    offOpen(callback?: Callback<OpenResult>): void;

    /**
     * 订阅WebSocket的接收服务器消息事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > AsyncCallback中的数据可以是字符串（API version 6开始支持）或ArrayBuffer（API version 8开始支持）。
     *
     * @param { 'message' } type - 订阅的事件类型。'message'：WebSocket的接收服务器消息事件。
     * @param { AsyncCallback<string | ArrayBuffer> } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * 订阅WebSocket的打开信息事件，使用callback异步回调。该事件用于获取WebSocket连接成功后的详细信息。该接口需要在调用
     * [connect]{@link webSocket.WebSocket.connect(url: string, callback: AsyncCallback<boolean>)}发起连接请求前调用。
     *
     * @param { 'openInfo' } type - 订阅的事件类型。'openInfo'：WebSocket的打开信息事件。
     * @param { AsyncCallback<WebSocketOpenInfo> } callback - 回调函数。返回WebSocket连接的详细信息。
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    on(type: 'openInfo', callback: AsyncCallback<WebSocketOpenInfo>): void;

    /**
     * 订阅WebSocket连接的成功信息事件。
     *
     * @param { Callback<WebSocketOpenInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.1.0 static
     */
    onOpenInfo(callback: Callback<WebSocketOpenInfo>): void;

    /**
     * 取消订阅WebSocket的打开信息事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'openInfo' } type - 取消订阅的事件类型。'openInfo'：WebSocket的打开信息事件。
     * @param { AsyncCallback<WebSocketOpenInfo> } [callback] - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    off(type: 'openInfo', callback?: AsyncCallback<WebSocketOpenInfo>): void;

    /**
     * 取消订阅WebSocket连接的成功信息事件。
     *
     * @param { Callback<WebSocketOpenInfo> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.1.0 static
     */
    offOpenInfo(callback?: Callback<WebSocketOpenInfo>): void;

    /**
     * 订阅WebSocket连接的消息事件。
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     *
     * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    onMessage(callback: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * 取消订阅WebSocket的接收服务器消息事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > AsyncCallback中的数据可以是字符串(API 6)或ArrayBuffer(API 8)。
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'message' } type - 取消订阅的事件类型。'message'：WebSocket的接收到服务器消息事件。
     * @param { AsyncCallback<string | ArrayBuffer> } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * 取消订阅WebSocket连接的消息事件。
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     *
     * @param { AsyncCallback<string | ArrayBuffer> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    offMessage(callback?: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * 订阅WebSocket的关闭事件，使用callback异步回调。
     *
     * @param { 'close' } type - 订阅的事件类型。'close'：WebSocket的关闭事件。
     * @param { AsyncCallback<CloseResult> } callback - 回调函数。
     *     <br>close：close错误码，reason：错误码说明
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    on(type: 'close', callback: AsyncCallback<CloseResult>): void;

    /**
     * 订阅WebSocket连接的关闭事件。
     *
     * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
     *     <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    onWebSocketClose(callback: AsyncCallback<CloseResult>): void;

    /**
     * 取消订阅WebSocket的关闭事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'close' } type - 取消订阅的事件类型。'close'：WebSocket的关闭事件。
     * @param { AsyncCallback<CloseResult> } callback - 回调函数。
     *     <br>close：close错误码，reason：错误码说明
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    off(type: 'close', callback?: AsyncCallback<CloseResult>): void;

    /**
     * 取消订阅WebSocket连接的关闭事件。
     *
     * @param { AsyncCallback<CloseResult> } [callback] - the callback used to return the result.
     *     <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    offWebSocketClose(callback?: AsyncCallback<CloseResult>): void;

    /**
     * 订阅WebSocket的Error事件，使用callback异步回调。
     * 
     * 关于[error]{@link webSocket.WebSocket.on(type: 'error', callback: ErrorCallback)}事件回调的错误码说明：WebSocket的本质是HTTP协议升级，若
     * 服务器同意升级，服务器会返回101。状态码表示协议从HTTP切换为WebSocket协议（触发open回调），而如果服务器拒绝了升级或出现其他异常，则返回200，表示服务器只是将请求当作普通的HTTP请求来处理。
     *
     * @param { 'error' } type - 订阅的事件类型。'error'：WebSocket的Error事件。
     * @param { ErrorCallback } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 订阅WebSocket连接的错误事件。
     *
     * @param { ErrorCallback } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    onWebSocketError(callback: ErrorCallback): void;

    /**
     * 取消订阅WebSocket的Error事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'error' } type - 取消订阅的事件类型。'error'：WebSocket的Error事件。
     * @param { ErrorCallback } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 取消订阅WebSocket连接的错误事件。
     *
     * @param { ErrorCallback } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    offWebSocketError(callback?: ErrorCallback): void;

    /**
     * 订阅WebSocket的数据接收结束事件，使用callback异步回调。
     *
     * @param { 'dataEnd' } type - 订阅的事件类型。'dataEnd'：WebSocket的数据接收结束事件。
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'dataEnd', callback: Callback<void>): void;

    /**
     * 订阅WebSocket连接的数据接收结束事件。
     *
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    onDataEnd(callback: Callback<void>): void;

    /**
     * 取消订阅WebSocket的数据接收结束事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'dataEnd' } type - 取消订阅的事件类型。'dataEnd'：WebSocket的数据接收结束事件。
     * @param { Callback<void> } [ callback ] - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'dataEnd', callback?: Callback<void>): void;

    /**
     * 取消订阅WebSocket连接的数据接收结束事件。
     *
     * @param { Callback<void> } [ callback ] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 23 static
     */
    offDataEnd(callback?: Callback<void>): void;

    /**
     * 订阅HTTP Response Header事件，使用callback异步回调。
     *
     * @param { 'headerReceive'} type - 订阅的事件类型。'headerReceive'：WebSocket的headerReceive事件。
     * @param { Callback<ResponseHeaders> } callback - 回调函数，返回订阅事件。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    on(type: 'headerReceive', callback: Callback<ResponseHeaders>): void;

    /**
     * 注册HTTP响应头事件的观察者。
     *
     * @param { Callback<ResponseHeaders> } callback - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    onHeaderReceive(callback: Callback<ResponseHeaders>): void;

    /**
     * 取消订阅HTTP Response Header事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'headerReceive' } type - 取消订阅的事件类型。'headerReceive'：WebSocket的headerReceive事件。
     * @param { Callback<ResponseHeaders> } [callback] - 回调函数，返回订阅事件。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 12 dynamic
     */
    off(type: 'headerReceive', callback?: Callback<ResponseHeaders>): void;

    /**
     * 取消注册HTTP响应头事件的观察者。
     *
     * @param { Callback<ResponseHeaders> } [callback] - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    offHeaderReceive(callback?: Callback<ResponseHeaders>): void;
  }

  /**
   * 创建一个WebSocketServer对象，包括启动服务、发送数据、关闭连接、列出客户端信息、停止服务，订阅/取消订阅webSocket连接的连接事件、接收到客户端消息事件、关闭事件和错误事件。
   * 
   * > **说明：**
   * >
   * > 从API version 23开始支持全设备使用，之前仅支持TV设备使用。
   *
   * @returns { WebSocketServer } 返回一个WebSocketServer对象，里面包括start、listAllConnections、send、close、stop、on和off方法。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 23]
   * @since 19 dynamic
   * @since 23 static
   */
  function createWebSocketServer(): WebSocketServer;

  /**
   * 启动服务端的service时，需要输入的配置信息和说明。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 19 dynamic
   * @since 23 static
   */
  export interface WebSocketServerConfig {
    /**
     * 单个客户端的最大连接数。默认最大数量为10。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    maxConnectionsForOneClient: int;

    /**
     * 最大并发客户端数量，当达到最大数时，服务端拒绝新连接。默认最大数量为10。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    maxConcurrentClientsNumber: int;

    /**
     * 服务端监听的端口号。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    serverPort: int;

    /**
     * 服务端监听特定ip地址，默认是"0.0.0.0"。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    serverIP?: string;

    /**
     * 指定服务端证书的信息，包括服务端证书文件路径和服务端证书的私钥文件路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    serverCert?: ServerCert;

    /**
     * 自定义协议。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    protocol?: string;
  }

  /**
   * 指定服务端证书的信息，包括服务端证书文件路径和服务端证书的私钥文件路径。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 19 dynamic
   * @since 23 static
   */
  export interface ServerCert {
    /**
     * 服务端证书文件路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    certPath: string;

    /**
     * 服务端证书的私钥文件路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    keyPath: string;
  }

  /**
   * 客户端信息，包括客户端的ip地址和端口号port。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 19 dynamic
   * @since 23 static
   */
  export interface WebSocketConnection {
    /**
     * 客户端的ip地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    clientIP: string;

    /**
     * 客户端的端口号port。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    clientPort: int;
    }

  /**
   * 从指定客户端接收到的消息，包括客户端的信息和数据。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 19 dynamic
   * @since 23 static
   */
  export interface WebSocketMessage {
    /**
     * 客户端信息，包括客户端的ip地址和端口号port。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    clientConnection: WebSocketConnection;

    /**
     * 接收到的客户端发的消息数据。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    data: string | ArrayBuffer;
    }

  /**
   * 关闭WebSocketServer连接时，订阅close事件得到的指定客户端的关闭结果。
   *
   * @param { WebSocketConnection } clientConnection - the connection which is closed.
   * @param { CloseResult } closeReason - the error code and reason why the connection is closed.
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 19 dynamic
   * @since 23 static
   */
  export type ClientConnectionCloseCallback = (clientConnection: WebSocketConnection, closeReason :CloseResult) => void;

  /**
   * 在调用WebSocketServer方法前，需要先通过[webSocket.createWebSocketServer]{@link webSocket.createWebSocketServer}创建一个
   * WebSocketServer。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 24]
   * @since 19 dynamic
   * @since 23 static
   */
  export interface WebSocketServer {
    /**
     * 配置config参数，启动服务端service。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 在多次调用该接口时，应避免监听同一端口。
     *
     * @permission ohos.permission.INTERNET
     * @param { WebSocketServerConfig } config - 启动websocketServer服务器。
     * @returns { Promise<boolean> } promise对象。返回true表示服务器启动成功；返回false表示服务启动失败。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302002 - Websocket certificate file does not exist.
     * @throws { BusinessError } 2302004 - Can't listen on the given NIC.
     * @throws { BusinessError } 2302005 - Can't listen on the given Port.
     * @throws { BusinessError } 2302999 - Websocket other unknown error.
     * @throws { BusinessError } 2302007 - Websocket port already occupied. [since 24]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 24 static
     */
    start(config: WebSocketServerConfig): Promise<boolean>;

    /**
     * 停止服务端服务。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @returns { Promise<boolean> } promise对象。返回true表示停止服务端service请求创建成功；返回false表示停止服务端service请求创建失败。
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    stop(): Promise<boolean>;

    /**
     * 获取与服务端连接的所有客户端信息。
     * 
     * > **说明：**
     * >
     * > 该接口为异步调用，返回结果需通过await关键字等待异步操作完成，以确保正确获取到所有客户端连接信息。
     *
     * @permission ohos.permission.INTERNET
     * @returns { WebSocketConnection[] } an array consists connections from all clients.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    listAllConnections(): WebSocketConnection[];

    /**
     * 通过WebSocket连接发送数据。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > send接口必须在监听到connect事件后才可以调用。
     *
     * @permission ohos.permission.INTERNET
     * @param { string | ArrayBuffer } data - 服务端发送消息的数据，同时支持string（字符串）和ArrayBuffer（二进制）类型。最大支持发送5242864字节数据(即5 * 1024
     *     * 1024 - 16)，超过该大小会返回401错误码。
     * @param { WebSocketConnection } connection - 发送的客户端信息。
     * @returns { Promise<boolean> } promise对象。返回true表示发送请求创建成功；返回false表示发送请求创建失败。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302006 - websocket connection does not exist.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    send(data: string | ArrayBuffer, connection: WebSocketConnection): Promise<boolean>;

    /**
     * 关闭指定websocket连接。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERNET
     * @param { WebSocketConnection } connection - 客户端信息，包括客户端的ip地址和端口号port。
     * @param { webSocket.WebSocketCloseOptions } options - 关闭WebSocket连接时，可选参数的类型和说明。
     *     <br>- 错误码默认：200。原因值默认：Websocket connect failed。
     * @returns { Promise<boolean> } promise对象。返回true表示关闭请求创建成功；返回false表示关闭请求创建失败。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2302006 - websocket connection does not exist.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     * @since 23 static
     */
    close(connection: WebSocketConnection, options?: webSocket.WebSocketCloseOptions): Promise<boolean>;

    /**
     * 订阅WebSocketServer的连接事件（客户端与服务端建链成功），使用callback异步回调。
     *
     * @param { 'connect' } type - 事件回调类型，支持的事件为'connect'，当onconnect()调用完成，客户端与服务端建链成功。
     * @param { Callback<WebSocketConnection> } callback - 回调函数。连接的客户端信息。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    on(type: 'connect', callback: Callback<WebSocketConnection>): void;

    /**
     * 订阅客户端请求连接服务器的事件。
     *
     * @param { Callback<WebSocketConnection> } callback - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    onConnect(callback: Callback<WebSocketConnection>): void;

    /**
     * 取消订阅WebSocketServer的连接事件（客户端与服务端建链成功），使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'connect' } type - 事件回调类型，支持的事件为'connect'，当offconnect()调用完成，取消监听连接事件成功。
     * @param { Callback<WebSocketConnection> } callback - 回调函数。连接的客户端信息。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    off(type: 'connect', callback?: Callback<WebSocketConnection>): void;

    /**
     * 取消订阅客户端请求连接服务器的事件。
     *
     * @param { Callback<WebSocketConnection> } [callback] - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    offConnect(callback?: Callback<WebSocketConnection>): void;

    /**
     * 订阅WebSocketServer的接收客户端消息的事件，使用callback异步回调。
     *
     * @param { 'messageReceive' } type - 事件回调类型，支持的事件为'messageReceive'，当onmessageReceive()调用完成，接收到客户端消息成功。
     * @param { Callback<WebSocketMessage> } callback - 回调函数。
     *     <br>clientconnection:客户端信息，data:客户端发送的数据消息。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    on(type: 'messageReceive', callback: Callback<WebSocketMessage>): void;

    /**
     * 订阅服务器收到消息的事件。
     *
     * @param { Callback<WebSocketMessage> } callback - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    onMessageReceive(callback: Callback<WebSocketMessage>): void;

    /**
     * 取消订阅WebSocketServer的接收到客户端消息事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'messageReceive' } type - 事件回调类型，支持的事件为'messageReceive'，当offmessageReceive()调用完成，取消订阅接收客户端消息成功。
     * @param { Callback<WebSocketMessage> } callback - 从指定客户端接收到的消息，包括客户端的信息和数据。
     *     <br>- clientconnection：客户端信息。
     *     <br>- data：客户端发送的消息。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    off(type: 'messageReceive', callback?: Callback<WebSocketMessage>): void;

    /**
     * 取消订阅服务器收到消息的事件。
     *
     * @param { Callback<WebSocketMessage> } [callback] - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    offMessageReceive(callback?: Callback<WebSocketMessage>): void;

    /**
     * 订阅WebSocketServer的关闭事件，使用callback异步回调。
     *
     * @param { 'close' } type - 事件回调类型，支持的事件为'close'，当onclose()调用完成，连接关闭成功。
     * @param { ClientConnectionCloseCallback } callback - 回调函数。
     *     <br>close：close错误码；reason：错误码说明。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    on(type: 'close', callback: ClientConnectionCloseCallback): void;

    /**
     * 订阅指定客户端连接已关闭的事件。
     *
     * @param { ClientConnectionCloseCallback } callback - the callback function when a client connection is closed.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 26.1.0 static
     */
    onWebSocketServerClose(callback: ClientConnectionCloseCallback): void;

    /**
     * 取消订阅WebSocketServer的关闭事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'close' } type - 事件回调类型，支持的事件为'close'，当offclose()调用完成，取消订阅连接关闭事件成功。
     * @param { ClientConnectionCloseCallback } callback - 回调函数。
     *     <br>close：close错误码；reason：错误码说明。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    off(type: 'close', callback?: ClientConnectionCloseCallback): void;

    /**
     * 取消订阅指定客户端连接已关闭的事件。
     *
     * @param { ClientConnectionCloseCallback } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 26.1.0 static
     */
    offWebSocketServerClose(callback?: ClientConnectionCloseCallback): void;

    /**
     * 订阅WebSocketServer的Error事件，使用callback异步回调。
     *
     * @param { 'error' } type - 事件回调类型，支持的事件为'error'，当onerror()调用完成，error事件发生。
     * @param { ErrorCallback } callback - 回调函数。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 订阅WebSocket服务器的错误事件。
     *
     * @param { ErrorCallback } callback - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    onWebSocketServerError(callback: ErrorCallback): void;

    /**
     * 取消订阅WebSocketServer的Error事件，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 可以指定传入on中的callback取消一个订阅，也可以不指定callback清空所有订阅。
     *
     * @param { 'error' } type - 事件回调类型，支持的事件为'error'，当offerror()调用完成，取消订阅error事件成功。
     * @param { ErrorCallback } callback - 回调函数。默认值：200。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 24]
     * @since 19 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 取消订阅WebSocket服务器的错误事件。
     *
     * @param { ErrorCallback } [callback] - the callback used to return the result. [since 23]
     * @syscap SystemCapability.Communication.NetStack [since 23]
     * @crossplatform [since 24]
     * @since 23 static
     */
    offWebSocketServerError(callback?: ErrorCallback): void;
    }

  /**
   * TLS协议类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum TlsProtocol {
    /**
     * TLS版本号1.0。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_0 = 0,

    /**
     * TLS版本号1.1。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_1 = 1,

    /**
     * TLS版本号1.2。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_2 = 2,

    /**
     * TLS版本号1.3。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TLS_V_1_3 = 3
  }
}

export default webSocket;