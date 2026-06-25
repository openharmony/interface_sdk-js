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
 * @file
 * @kit NetworkKit
 */
/**
 * @since 20
 */
export namespace NetworkModule {
  /**
   * @since 20
   */
  export interface NetworkConfig {
    baseUrl: string;
    timeout: number;
    /**
     * @since 20
     * @systemapi
     */
    retryCount: number;
    headers: Record<string, string>;
    /**
     * @since 20
     * @systemapi
     */
    proxyUrl?: string;
  }

  /**
   * @since 20
   */
  export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    /**
     * @since 20
     * @systemapi
     */
    PUT = "PUT",
    /**
     * @since 20
     * @systemapi
     */
    DELETE = "DELETE",
    PATCH = "PATCH"
  }

  /**
   * @since 20
   */
  export interface HttpRequest {
    url: string;
    method: HttpMethod;
    body?: string | Object;
    /**
     * @since 20
     * @systemapi
     */
    credentials?: boolean;
    mode?: "cors" | "no-cors" | "same-origin";
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface HttpResponse {
    status: number;
    statusText: string;
    headers: Map<string, string>;
    body: string;
  }

  /**
   * @since 20
   */
  export class HttpClient {
    private config: NetworkConfig;
    /**
     * @since 20
     * @systemapi
     */
    private interceptors: any[];

    constructor(config: NetworkConfig) {
      this.config = config;
    }

    public async request<T>(request: HttpRequest): Promise<HttpResponse> {
      return {} as HttpResponse;
    }

    /**
     * @since 20
     * @systemapi
     */
    public async executeInternal(request: HttpRequest): Promise<HttpResponse> {
      return {} as HttpResponse;
    }

    public get<T>(url: string): Promise<HttpResponse> {
      return this.request<T>({ url, method: HttpMethod.GET });
    }

    public post<T>(url: string, body: Object): Promise<HttpResponse> {
      return this.request<T>({ url, method: HttpMethod.POST, body });
    }

    /**
     * @since 20
     * @systemapi
     */
    public put<T>(url: string, body: Object): Promise<HttpResponse> {
      return this.request<T>({ url, method: HttpMethod.PUT, body });
    }
  }

  /**
   * @since 20
   */
  export interface WebSocketConfig {
    url: string;
    protocols?: string[];
    /**
     * @since 20
     * @systemapi
     */
    pingInterval?: number;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface WebSocketMessage {
    type: "text" | "binary";
    data: string | ArrayBuffer;
    timestamp: number;
  }

  /**
   * @since 20
   */
  export class WebSocketConnection {
    private socket: WebSocket | null;
    /**
     * @since 20
     * @systemapi
     */
    private messageQueue: WebSocketMessage[];

    constructor(config: WebSocketConfig) {
      this.socket = null;
    }

    public connect(): Promise<void> {
      return Promise.resolve();
    }

    /**
     * @since 20
     * @systemapi
     */
    public send(message: WebSocketMessage): void {
      if (this.socket) {
        this.socket.send(message.data as string);
      }
    }

    public close(): void {
      if (this.socket) {
        this.socket.close();
      }
    }

    /**
     * @since 20
     * @systemapi
     */
    public getMessageQueue(): WebSocketMessage[] {
      return this.messageQueue;
    }
  }

  /**
   * @since 20
   */
  export enum ConnectionStatus {
    DISCONNECTED = "disconnected",
    CONNECTING = "connecting",
    /**
     * @since 20
     * @systemapi
     */
    CONNECTED = "connected",
    /**
     * @since 20
     * @systemapi
     */
    ERROR = "error"
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface NetworkStatistics {
    totalRequests: number;
    successfulRequests: number;
    failedRequests: number;
    averageLatency: number;
  }

  /**
   * @since 20
   */
  export function createHttpClient(config: NetworkConfig): HttpClient {
    return new HttpClient(config);
  }

  /**
   * @since 20
   * @systemapi
   */
  export function getDefaultConfig(): NetworkConfig {
    return {
      baseUrl: "",
      timeout: 30000,
      retryCount: 3,
      headers: {}
    };
  }
}