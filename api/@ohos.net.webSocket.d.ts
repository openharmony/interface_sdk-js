/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, ErrorCallback } from "./@ohos.base";

/**
 * Provides WebSocket APIs.
 * @namespace webSocket
 * @syscap SystemCapability.Communication.NetStack
 * @since 6
 */
declare namespace webSocket {
  /**
   * Creates a web socket connection.
   * @crossplatform
   * @since 6
   */
  function createWebSocket(): WebSocket;

  /**
   * Defines the optional parameters carried in the request for establishing a WebSocket connection.
   * @crossplatform
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  export interface WebSocketRequestOptions {
    /**
     * HTTP request header.
     * @type {Object}
     * @crossplatform
     * @since 6
     */
    header?: Object;
  }

  /**
   * Defines the optional parameters carried in the request for closing a WebSocket connection.
   * @interface WebSocketCloseOptions
   * @crossplatform
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  export interface WebSocketCloseOptions {
    /**
     * Error code.
     * @type {number}
     * @crossplatform
     * @since 6
     */
    code?: number;
    /**
     * Error cause.
     * @type {string}
     * @crossplatform
     * @since 6
     */
    reason?: string;
  }

  /**
   * Defines a WebSocket object. Before invoking WebSocket APIs, you need to call [webSocket.createWebSocket](#websocketcreatewebsocket) to create a WebSocket object.
   * @interface WebSocket
   * @crossplatform
   * @syscap SystemCapability.Communication.NetStack
   * @since 6
   */
  export interface WebSocket {
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { AsyncCallback<boolean> } callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    connect(url: string, callback: AsyncCallback<boolean>): void;

    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options Optional parameters {@link WebSocketRequestOptions}.
     * @param { AsyncCallback<boolean> } callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void;

    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     * @param { string } url URL for establishing a WebSocket connection.
     * @param { WebSocketRequestOptions } options Optional parameters {@link WebSocketRequestOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>;

    /**
     * Sends data through a WebSocket connection.
     * @param { string | ArrayBuffer } data Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { AsyncCallback<boolean> } callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void;

    /**
     * Sends data through a WebSocket connection.
     * @param { string | ArrayBuffer } data Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    send(data: string | ArrayBuffer): Promise<boolean>;

    /**
     * Closes a WebSocket connection.
     * @param { AsyncCallback<boolean> } callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    close(callback: AsyncCallback<boolean>): void;

    /**
     * Closes a WebSocket connection.
     * @param { WebSocketCloseOptions } options Optional parameters {@link WebSocketCloseOptions}.
     * @param { AsyncCallback<boolean> } callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void;

    /**
     * Closes a WebSocket connection.
     * @param { WebSocketCloseOptions } options Optional parameters {@link WebSocketCloseOptions}.
     * @returns { Promise<void> } The promise returned by the function.
     * @permission ohos.permission.INTERNET
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    close(options?: WebSocketCloseOptions): Promise<boolean>;

    /**
     * Enables listening for the open events of a WebSocket connection.
     * @param { string } type event indicating that a WebSocket connection has been opened. 
     * @param { AsyncCallback<Object> } callback Returns callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    on(type: 'open', callback: AsyncCallback<Object>): void;

    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @param { string } type event indicating that a WebSocket connection has been opened. 
     * @param { AsyncCallback<Object> } callback Returns callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    off(type: 'open', callback?: AsyncCallback<Object>): void;

    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { string } type event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback Returns callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @param { string } type event indicating that a message has been received from the server.
     * @param { AsyncCallback<string | ArrayBuffer> } callback Returns callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Enables listening for the close events of a WebSocket connection.
     * @param { string } type event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<{ code: number, reason: string }> } callback Callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    on(type: 'close', callback: AsyncCallback<{ code: number, reason: string }>): void;

    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @param { string } type event indicating that a WebSocket connection has been closed.
     * @param { AsyncCallback<{ code: number, reason: string }> } callback Callback used to return the result.
     * <br>close indicates the close error code and reason indicates the error code description.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    off(type: 'close', callback?: AsyncCallback<{ code: number, reason: string }>): void;

    /**
     * Enables listening for the error events of a WebSocket connection.
     * @param { string } type event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback return callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @param { string } type event indicating the WebSocket connection has encountered an error.
     * @param { ErrorCallback } callback return callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 6
     */
    off(type: 'error', callback?: ErrorCallback): void;
  }
}

export default webSocket;