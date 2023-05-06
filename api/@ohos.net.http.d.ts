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

import { AsyncCallback, Callback } from "./@ohos.base";
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
   * @since 6
   */
  function createHttp(): HttpRequest;

  export interface HttpRequestOptions {
    /**
     * Request method.
     * @crossplatform
     * @since 6
     */
    method?: RequestMethod; // default is GET

    /**
     * Additional data of the request.
     * extraData can be a string or an Object (API 6) or an ArrayBuffer(API 8).
     * @crossplatform
     * @since 6
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
     * default is true
     * @crossplatform
     * @since 9
     */
    usingCache?: boolean;

    /**
     * [1, 1000], default is 1.
     * @crossplatform
     * @since 9
     */
    priority?: number; 

    /**
     * HTTP request header. default is 'content-type': 'application/json'
     * @crossplatform
     * @since 6
     */
    header?: Object;

    /**
     * Read timeout period. The default value is 60,000, in ms.
     * @crossplatform
     * @since 6
     */
    readTimeout?: number;

    /**
     * Connection timeout interval. The default value is 60,000, in ms.
     * @crossplatform
     * @since 6
     */
    connectTimeout?: number;

    /**
     * default is automatically specified by the system.
     * @crossplatform
     * @since 9
     */
    usingProtocol?: HttpProtocol;
    /**
     * If this parameter is set as type of boolean, the system will use default proxy or not use proxy.
     * If this parameter is set as type of HttpProxy, the system will use the specified HttpProxy.
     *
     * @since 10
     */
    usingProxy?: boolean | HttpProxy;

    /**
     * If this parameter is set, the system will use ca path specified by user, or else use preset ca by the system. 
     *
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
     * @since 6
     */
    request(url: string, callback: AsyncCallback<HttpResponse>): void;

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
     * @since 6
     */
    request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>): void;

    /**
     * Initiates an HTTP request to a given URL.
     *
     * @param url URL for initiating an HTTP request.
     * @param options Optional parameters {@link HttpRequestOptions}.
     * @returns The promise returned by the function.
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
     * @since 6
     */
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

  /**
   * Defines an HTTP request method.
   * @crossplatform
   * @since 6
   */
  export enum RequestMethod {
    /**
     * OPTIONS method.
     * @since 6
     */
    OPTIONS = "OPTIONS",

    /**
     * GET method.
     * @since 6
     */
    GET = "GET",

    /**
     * HEAD method.
     * @since 6
     */
    HEAD = "HEAD",

    /**
     * POST method.
     * @since 6
     */
    POST = "POST",

    /**
     * PUT method.
     * @since 6
     */
    PUT = "PUT",

    /**
     * DELETE method.
     * @since 6
     */
    DELETE = "DELETE",

    /**
     * TRACE method.
     * @since 6
     */
    TRACE = "TRACE",

    /**
     * CONNECT method.
     * @since 6
     */
    CONNECT = "CONNECT"
  }

  /**
   * Enumerates the response codes for an HTTP request.
   * @crossplatform
   * @since 6
   */
  export enum ResponseCode {
    /**
     * The request was successful. Typically used for GET and POST requests.
     * @since 6
     */
    OK = 200,

    /**
     * Successfully requested and created a new resource.
     * @since 6
     */

    CREATED,

    /**
     * The request has been accepted but has not been processed completely.
     * @since 6
     */
    ACCEPTED,

    /**
     * Unauthorized information. The request was successful.
     * @since 6
     */
    NOT_AUTHORITATIVE,

    /**
     * No content. The server successfully processed, but did not return content.
     * @since 6
     */
    NO_CONTENT,

    /**
     * Reset the content.
     * @since 6
     */
    RESET,

    /**
     * Partial content. The server successfully processed some GET requests.
     * @since 6
     */
    PARTIAL,

    /**
     * Multiple options.
     * @since 6
     */
    MULT_CHOICE = 300,

    /**
     * Permanently move. The requested resource has been permanently moved to a new URI, and the returned information will include the new URI. The browser will automatically redirect to the new URI.
     * @since 6
     */
    MOVED_PERM,

    /**
     * Temporary movement.
     * @since 6
     */
    MOVED_TEMP,

    /**
     * View other addresses.
     * @since 6
     */
    SEE_OTHER,

    /**
     * Not modified.
     * @since 6
     */
    NOT_MODIFIED,

    /**
     * Using proxies.
     * @since 6
     */
    USE_PROXY,

    /**
     * The server cannot understand the syntax error error requested by the client.
     * @since 6
     */
    BAD_REQUEST = 400,

    /**
     * Request for user authentication.
     * @since 6
     */
    UNAUTHORIZED,

    /**
     * Reserved for future use.
     * @since 6
     */
    PAYMENT_REQUIRED,

    /**
     * The server understands the request from the requesting client, but refuses to execute it.
     * @since 6
     */
    FORBIDDEN,

    /**
     * The server was unable to find resources (web pages) based on the client's request.
     * @since 6
     */
    NOT_FOUND,

    /**
     * The method in the client request is prohibited.
     * @since 6
     */
    BAD_METHOD,

    /**
     * The server is unable to complete the request based on the content characteristics requested by the client.
     * @since 6
     */
    NOT_ACCEPTABLE,

    /**
     * Request authentication of the proxy's identity.
     * @since 6
     */
    PROXY_AUTH,

    /**
     * The request took too long and timed out.
     * @since 6
     */
    CLIENT_TIMEOUT,
    /**
     * The server may have returned this code when completing the client's PUT request, as there was a conflict when the server was processing the request.
     * @since 6
     */
    CONFLICT,

    /**
     * The resource requested by the client no longer exists.
     * @since 6
     */
    GONE,

    /**
     * The server is unable to process request information sent by the client without Content Length.
     * @since 6
     */
    LENGTH_REQUIRED,

    /**
     * The prerequisite for requesting information from the client is incorrect.
     * @since 6
     */
    PRECON_FAILED,

    /**
     * The request was rejected because the requested entity was too large for the server to process.
     * @since 6
     */
    ENTITY_TOO_LARGE,

    /**
     * The requested URI is too long (usually a URL) and the server cannot process it.
     * @since 6
     */
    REQ_TOO_LONG,

    /**
     * The server is unable to process the requested format.
     * @since 6
     */
    UNSUPPORTED_TYPE,

    /**
     * Internal server error, unable to complete the request.
     * @since 6
     */
    INTERNAL_ERROR = 500,

    /**
     * The server does not support the requested functionality and cannot complete the request.
     * @since 6
     */
    NOT_IMPLEMENTED,

    /**
     * The server acting as a gateway or proxy received an invalid request from the remote server.
     * @since 6
     */
    BAD_GATEWAY,

    /**
     * Due to overload or system maintenance, the server is temporarily unable to process client requests.
     * @since 6
     */
    UNAVAILABLE,

    /**
     * The server acting as a gateway or proxy did not obtain requests from the remote server in a timely manner.
     * @since 6
     */
    GATEWAY_TIMEOUT,

    /**
     * The version of the HTTP protocol requested by the server.
     * @since 6
     */
    VERSION
  }

  /**
   * Supported protocols.
   *
   * @crossplatform
   * @since 9
   */
  export enum HttpProtocol {
    /**
     * Protocol http1.1
     * @since 9
     */
    HTTP1_1,

    /**
     * Protocol http2
     * @since 9
     */
    HTTP2,
  }

  /**
   * Indicates the type of the returned data.
   *
   * @crossplatform
   * @since 9
   */
  export enum HttpDataType {
    /**
     * The returned type is string.
     * @crossplatform
     * @since 6
     */
    STRING,
    /**
     * The returned type is Object.
     * @crossplatform
     * @since 6
     */
    OBJECT = 1,
    /**
     * The returned type is ArrayBuffer.
     * @crossplatform
     * @since 6
     */
    ARRAY_BUFFER = 2,
  }

  /**
   * Defines the response to an HTTP request.
   * @crossplatform
   * @since 6
   */
  export interface HttpResponse {
    /**
     * result can be a string (API 6) or an ArrayBuffer(API 8). Object is deprecated from API 8.
     * If {@link HttpRequestOptions#expectDataType} is set, the system preferentially returns this parameter.
     * @crossplatform
     * @since 6
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
     * @since 6
     */
    responseCode: ResponseCode | number;

    /**
     * All headers in the response from the server.
     * @crossplatform
     * @since 6
     */
    header: Object;

    /**
     * Cookies returned by the server.
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
   * Defines an object that stores the response to an HTTP request.
   * @crossplatform
   * @since 9
   */
  export interface HttpResponseCache {
    /**
     * Writes data in the cache to the file system so that all the cached data can be accessed in the next HTTP request.
     * @param callback Returns the callback of flush.
     * @systemapi Hide this for inner system use.
     * @crossplatform
     * @since 9
     */
    flush(callback: AsyncCallback<void>): void;

     /**
     * Writes data in the cache to the file system so that all the cached data can be accessed in the next HTTP request.
     * @returns The promise returned by the flush.
     * @systemapi Hide this for inner system use.
     * @crossplatform
     * @since 9
     */
    flush(): Promise<void>;

    /**
     * Disables a cache and deletes the data in it.
     * @param callback Returns the callback of delete.
     * @systemapi Hide this for inner system use.
     * @crossplatform
     * @since 9
     */
    delete(callback: AsyncCallback<void>): void;

     /**
     * Disables a cache and deletes the data in it.
     * @returns The promise returned by the delete.
     * @systemapi Hide this for inner system use.
     * @crossplatform
     * @since 9
     */
    delete(): Promise<void>;
  }
}

export default http;