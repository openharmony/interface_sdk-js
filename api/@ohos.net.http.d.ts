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

import {AsyncCallback, Callback} from "./basic";
import connection from "./@ohos.net.connection";

/**
 * Provides http related APIs.
 *
 * @since 6
 * @syscap SystemCapability.Communication.NetStack
 */
declare namespace http {
  /**
   * @since 10
   */
  type HttpProxy = connection.HttpProxy;

  /**
   * Creates an HTTP request task.
   * @crossplatform
   */
  function createHttp(): HttpRequest;

  export interface HttpRequestOptions {
    /**
     * Request method.
     * @crossplatform
     */
    method?: RequestMethod; // default is GET

    /**
     * Additional data of the request.
     * extraData can be a string or an Object (API 6) or an ArrayBuffer(API 8).
     * @crossplatform
     */
    extraData?: string | Object | ArrayBuffer;

    /**
     * Data type to be returned. If this parameter is set, the system preferentially returns the specified type.
     *
     * @crossplatform
     * @since 9
     */
    expectDataType?: HttpDataType;

    /**
     * @crossplatform
     * @since 9
     */
    usingCache?: boolean; // default is true

    /**
     * @crossplatform
     * @since 9
     */
    priority?: number; // [1, 1000], default is 1.

    /**
     * HTTP request header.
     * @crossplatform
     */
    header?: Object; // default is 'content-type': 'application/json'

    /**
     * Read timeout period. The default value is 60,000, in ms.
     * @crossplatform
     */
    readTimeout?: number; // default is 60s

    /**
     * Connection timeout interval. The default value is 60,000, in ms.
     * @crossplatform
     */
    connectTimeout?: number; // default is 60s.

    /**
     * @crossplatform
     * @since 9
     */
    usingProtocol?: HttpProtocol; // default is automatically specified by the system.

    /**
     * If this parameter is set as type of boolean, the system will use default proxy or not use proxy.
     * If this parameter is set as type of HttpProxy, the system will use the specified HttpProxy.
     *
     * @crossplatform
     * @since 10
     */
    usingProxy?: boolean | HttpProxy; // default is false.

    /**
     * If this parameter is set, the system will use ca path specified by user, or else use preset ca by the system. 
     *
     * @crossplatform
     * @since 10
     */
    caPath?: string;
  }

  export interface HttpRequest {
    /**
     * Initiates an HTTP request to a given URL.
     *
     * @param url URL for initiating an HTTP request.
     * @param options Optional parameters {@link HttpRequestOptions}.
     * @param callback Returns {@link HttpResponse}.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 2300001 - Unsupported protocol.
     * @throws {BusinessError} 2300003 - URL using bad/illegal format or missing URL.
     * @throws {BusinessError} 2300005 - Couldn't resolve proxy name.
     * @throws {BusinessError} 2300006 - Couldn't resolve host name.
     * @throws {BusinessError} 2300007 - Couldn't connect to server.
     * @throws {BusinessError} 2300008 - Weird server reply.
     * @throws {BusinessError} 2300009 - Access denied to remote resource.
     * @throws {BusinessError} 2300016 - Error in the HTTP2 framing layer.
     * @throws {BusinessError} 2300018 - Transferred a partial file.
     * @throws {BusinessError} 2300023 - Failed writing received data to disk/application.
     * @throws {BusinessError} 2300025 - Upload failed.
     * @throws {BusinessError} 2300026 - Failed to open/read local data from file/application.
     * @throws {BusinessError} 2300027 - Out of memory.
     * @throws {BusinessError} 2300028 - Timeout was reached.
     * @throws {BusinessError} 2300047 - Number of redirects hit maximum amount.
     * @throws {BusinessError} 2300052 - Server returned nothing (no headers, no data).
     * @throws {BusinessError} 2300055 - Failed sending data to the peer.
     * @throws {BusinessError} 2300056 - Failure when receiving data from the peer.
     * @throws {BusinessError} 2300058 - Problem with the local SSL certificate.
     * @throws {BusinessError} 2300059 - Couldn't use specified SSL cipher.
     * @throws {BusinessError} 2300060 - SSL peer certificate or SSH remote key was not OK.
     * @throws {BusinessError} 2300061 - Unrecognized or bad HTTP Content or Transfer-Encoding.
     * @throws {BusinessError} 2300063 - Maximum file size exceeded.
     * @throws {BusinessError} 2300070 - Disk full or allocation exceeded.
     * @throws {BusinessError} 2300073 - Remote file already exists.
     * @throws {BusinessError} 2300077 - Problem with the SSL CA cert (path? access rights?).
     * @throws {BusinessError} 2300078 - Remote file not found.
     * @throws {BusinessError} 2300094 - An authentication function returned an error.
     * @throws {BusinessError} 2300999 - Unknown Other Error.
     * @crossplatform
     */
    request(url: string, callback: AsyncCallback<HttpResponse>): void;
    request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>): void;
    request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;

    /**
     * Initiates an HTTP request to a given URL, applicable to scenarios where http response supports streaming.
     *
     * @param url URL for initiating an HTTP request.
     * @param callback Returns the callback of request2 {@link ResponseCode}, should use on_headersReceive and on_dataReceive
     *        to get http response.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 2300001 - Unsupported protocol.
     * @throws {BusinessError} 2300003 - URL using bad/illegal format or missing URL.
     * @throws {BusinessError} 2300005 - Couldn't resolve proxy name.
     * @throws {BusinessError} 2300006 - Couldn't resolve host name.
     * @throws {BusinessError} 2300007 - Couldn't connect to server.
     * @throws {BusinessError} 2300008 - Weird server reply.
     * @throws {BusinessError} 2300009 - Access denied to remote resource.
     * @throws {BusinessError} 2300016 - Error in the HTTP2 framing layer.
     * @throws {BusinessError} 2300018 - Transferred a partial file.
     * @throws {BusinessError} 2300023 - Failed writing received data to disk/application.
     * @throws {BusinessError} 2300025 - Upload failed.
     * @throws {BusinessError} 2300026 - Failed to open/read local data from file/application.
     * @throws {BusinessError} 2300027 - Out of memory.
     * @throws {BusinessError} 2300028 - Timeout was reached.
     * @throws {BusinessError} 2300047 - Number of redirects hit maximum amount.
     * @throws {BusinessError} 2300052 - Server returned nothing (no headers, no data).
     * @throws {BusinessError} 2300055 - Failed sending data to the peer.
     * @throws {BusinessError} 2300056 - Failure when receiving data from the peer.
     * @throws {BusinessError} 2300058 - Problem with the local SSL certificate.
     * @throws {BusinessError} 2300059 - Couldn't use specified SSL cipher.
     * @throws {BusinessError} 2300060 - SSL peer certificate or SSH remote key was not OK.
     * @throws {BusinessError} 2300061 - Unrecognized or bad HTTP Content or Transfer-Encoding.
     * @throws {BusinessError} 2300063 - Maximum file size exceeded.
     * @throws {BusinessError} 2300070 - Disk full or allocation exceeded.
     * @throws {BusinessError} 2300073 - Remote file already exists.
     * @throws {BusinessError} 2300077 - Problem with the SSL CA cert (path? access rights?).
     * @throws {BusinessError} 2300078 - Remote file not found.
     * @throws {BusinessError} 2300094 - An authentication function returned an error.
     * @throws {BusinessError} 2300999 - Unknown Other Error.
     * @since 10
     */
    request2(url: string, callback: AsyncCallback<number>): void;

    /**
     * Initiates an HTTP request to a given URL, applicable to scenarios where http response supports streaming.
     *
     * @param url URL for initiating an HTTP request.
     * @param options Optional parameters {@link HttpRequestOptions}.
     * @param callback Returns the callback of request2 {@link ResponseCode}, should use on_headersReceive and on_dataReceive
     *        to get http response.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 2300001 - Unsupported protocol.
     * @throws {BusinessError} 2300003 - URL using bad/illegal format or missing URL.
     * @throws {BusinessError} 2300005 - Couldn't resolve proxy name.
     * @throws {BusinessError} 2300006 - Couldn't resolve host name.
     * @throws {BusinessError} 2300007 - Couldn't connect to server.
     * @throws {BusinessError} 2300008 - Weird server reply.
     * @throws {BusinessError} 2300009 - Access denied to remote resource.
     * @throws {BusinessError} 2300016 - Error in the HTTP2 framing layer.
     * @throws {BusinessError} 2300018 - Transferred a partial file.
     * @throws {BusinessError} 2300023 - Failed writing received data to disk/application.
     * @throws {BusinessError} 2300025 - Upload failed.
     * @throws {BusinessError} 2300026 - Failed to open/read local data from file/application.
     * @throws {BusinessError} 2300027 - Out of memory.
     * @throws {BusinessError} 2300028 - Timeout was reached.
     * @throws {BusinessError} 2300047 - Number of redirects hit maximum amount.
     * @throws {BusinessError} 2300052 - Server returned nothing (no headers, no data).
     * @throws {BusinessError} 2300055 - Failed sending data to the peer.
     * @throws {BusinessError} 2300056 - Failure when receiving data from the peer.
     * @throws {BusinessError} 2300058 - Problem with the local SSL certificate.
     * @throws {BusinessError} 2300059 - Couldn't use specified SSL cipher.
     * @throws {BusinessError} 2300060 - SSL peer certificate or SSH remote key was not OK.
     * @throws {BusinessError} 2300061 - Unrecognized or bad HTTP Content or Transfer-Encoding.
     * @throws {BusinessError} 2300063 - Maximum file size exceeded.
     * @throws {BusinessError} 2300070 - Disk full or allocation exceeded.
     * @throws {BusinessError} 2300073 - Remote file already exists.
     * @throws {BusinessError} 2300077 - Problem with the SSL CA cert (path? access rights?).
     * @throws {BusinessError} 2300078 - Remote file not found.
     * @throws {BusinessError} 2300094 - An authentication function returned an error.
     * @throws {BusinessError} 2300999 - Unknown Other Error.
     * @since 10
     */
    request2(url: string, options: HttpRequestOptions, callback: AsyncCallback<number>): void;

    /**
     * Initiates an HTTP request to a given URL, applicable to scenarios where http response supports streaming.
     *
     * @param url URL for initiating an HTTP request.
     * @param options Optional parameters {@link HttpRequestOptions}.
     * @returns The promise returned by the function {@link ResponseCode}, should use on_headersReceive and on_dataReceive
     *        to get http response.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 2300001 - Unsupported protocol.
     * @throws {BusinessError} 2300003 - URL using bad/illegal format or missing URL.
     * @throws {BusinessError} 2300005 - Couldn't resolve proxy name.
     * @throws {BusinessError} 2300006 - Couldn't resolve host name.
     * @throws {BusinessError} 2300007 - Couldn't connect to server.
     * @throws {BusinessError} 2300008 - Weird server reply.
     * @throws {BusinessError} 2300009 - Access denied to remote resource.
     * @throws {BusinessError} 2300016 - Error in the HTTP2 framing layer.
     * @throws {BusinessError} 2300018 - Transferred a partial file.
     * @throws {BusinessError} 2300023 - Failed writing received data to disk/application.
     * @throws {BusinessError} 2300025 - Upload failed.
     * @throws {BusinessError} 2300026 - Failed to open/read local data from file/application.
     * @throws {BusinessError} 2300027 - Out of memory.
     * @throws {BusinessError} 2300028 - Timeout was reached.
     * @throws {BusinessError} 2300047 - Number of redirects hit maximum amount.
     * @throws {BusinessError} 2300052 - Server returned nothing (no headers, no data).
     * @throws {BusinessError} 2300055 - Failed sending data to the peer.
     * @throws {BusinessError} 2300056 - Failure when receiving data from the peer.
     * @throws {BusinessError} 2300058 - Problem with the local SSL certificate.
     * @throws {BusinessError} 2300059 - Couldn't use specified SSL cipher.
     * @throws {BusinessError} 2300060 - SSL peer certificate or SSH remote key was not OK.
     * @throws {BusinessError} 2300061 - Unrecognized or bad HTTP Content or Transfer-Encoding.
     * @throws {BusinessError} 2300063 - Maximum file size exceeded.
     * @throws {BusinessError} 2300070 - Disk full or allocation exceeded.
     * @throws {BusinessError} 2300073 - Remote file already exists.
     * @throws {BusinessError} 2300077 - Problem with the SSL CA cert (path? access rights?).
     * @throws {BusinessError} 2300078 - Remote file not found.
     * @throws {BusinessError} 2300094 - An authentication function returned an error.
     * @throws {BusinessError} 2300999 - Unknown Other Error.
     * @since 10
     */
    request2(url: string, options?: HttpRequestOptions): Promise<number>;

    /**
     * Destroys an HTTP request.
     * @crossplatform
     */
    destroy(): void;

    /**
     * Registers an observer for HTTP Response Header events.
     *
     * @deprecated since 8
     * @useinstead on_headersReceive
     */
    on(type: "headerReceive", callback: AsyncCallback<Object>): void;

    /**
     * Unregisters the observer for HTTP Response Header events.
     *
     * @deprecated since 8
     * @useinstead off_headersReceive
     */
    off(type: "headerReceive", callback?: AsyncCallback<Object>): void;

    /**
     * Registers an observer for HTTP Response Header events.
     *
     * @crossplatform
     * @since 8
     */
    on(type: "headersReceive", callback: Callback<Object>): void;

    /**
     * Unregisters the observer for HTTP Response Header events.
     *
     * @crossplatform
     * @since 8
     */
    off(type: "headersReceive", callback?: Callback<Object>): void;

    /**
     * Registers a one-time observer for HTTP Response Header events.
     *
     * @crossplatform
     * @since 8
     */
    once(type: "headersReceive", callback: Callback<Object>): void;

    /**
     * Registers an observer for receiving HTTP Response data events continuously.
     *
     * @since 10
     */
    on(type: "dataReceive", callback: Callback<ArrayBuffer>): void;

    /**
     * Unregisters an observer for receiving HTTP Response data events continuously.
     *
     * @since 10
     */
     off(type: "dataReceive", callback?: Callback<ArrayBuffer>): void;

    /**
     * Registers an observer for receiving HTTP Response data ends events.
     *
     * @since 10
     */
     on(type: "dataEnd", callback: Callback<void>): void;

    /**
     * Unregisters an observer for receiving HTTP Response data ends events.
     *
     * @since 10
     */
     off(type: "dataEnd", callback?: Callback<void>): void;

    /**
     * Registers an observer for progress of receiving HTTP Response data events.
     *
     * @since 10
     */
     on(type: "dataProgress", callback: Callback<{ receiveSize: number, totalSize: number }>): void;

    /**
     * Unregisters an observer for progress of receiving HTTP Response data events.
     *
     * @since 10
     */
     off(type: "dataProgress", callback?: Callback<{ receiveSize: number, totalSize: number }>): void;
  }

  export enum RequestMethod {
    OPTIONS = "OPTIONS",
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    TRACE = "TRACE",
    CONNECT = "CONNECT"
  }

  export enum ResponseCode {
    OK = 200,
    CREATED,
    ACCEPTED,
    NOT_AUTHORITATIVE,
    NO_CONTENT,
    RESET,
    PARTIAL,
    MULT_CHOICE = 300,
    MOVED_PERM,
    MOVED_TEMP,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    BAD_REQUEST = 400,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    BAD_METHOD,
    NOT_ACCEPTABLE,
    PROXY_AUTH,
    CLIENT_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECON_FAILED,
    ENTITY_TOO_LARGE,
    REQ_TOO_LONG,
    UNSUPPORTED_TYPE,
    INTERNAL_ERROR = 500,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    UNAVAILABLE,
    GATEWAY_TIMEOUT,
    VERSION
  }

  /**
   * Supported protocols.
   *
   * @crossplatform
   * @since 9
   */
  export enum HttpProtocol {
    HTTP1_1,
    HTTP2,
  }

  /**
   * Indicates the type of the returned data.
   *
   * @since 9
   */
  export enum HttpDataType {
    /**
     * The returned type is string.
     * @crossplatform
     */
    STRING,
    /**
     * The returned type is Object.
     * @crossplatform
     */
    OBJECT = 1,
    /**
     * The returned type is ArrayBuffer.
     * @crossplatform
     */
    ARRAY_BUFFER = 2,
  }

  export interface HttpResponse {
    /**
     * result can be a string (API 6) or an ArrayBuffer(API 8). Object is deprecated from API 8.
     * If {@link HttpRequestOptions#expectDataType} is set, the system preferentially returns this parameter.
     * @crossplatform
     */
    result: string | Object | ArrayBuffer;

    /**
     * If the resultType is string, you can get result directly.
     * If the resultType is Object, you can get result such as this: result['key'].
     * If the resultType is ArrayBuffer, you can use ArrayBuffer to create the binary objects.
     *
     * @crossplatform
     * @since 9
     */
    resultType: HttpDataType;

    /**
     * Server status code.
     * @crossplatform
     */
    responseCode: ResponseCode | number;

    /**
     * All headers in the response from the server.
     * @crossplatform
     */
    header: Object;

    /**
     * @crossplatform
     * @since 8
     */
    cookies: string;
  }

  /**
   * Creates a default {@code HttpResponseCache} object to store the responses of HTTP access requests.
   *
   * @param cacheSize the size of cache(max value is 10MB), default is 10*1024*1024(10MB).
   * @crossplatform
   * @since 9
   */
  function createHttpResponseCache(cacheSize?: number): HttpResponseCache;

  /**
   * @since 9
   */
  export interface HttpResponseCache {
    /**
     * Writes data in the cache to the file system so that all the cached data can be accessed in the next HTTP request.
     * @crossplatform
     */
    flush(callback: AsyncCallback<void>): void;
    flush(): Promise<void>;

    /**
     * Disables a cache and deletes the data in it.
     * @crossplatform
     */
    delete(callback: AsyncCallback<void>): void;
    delete(): Promise<void>;
  }
}

export default http;