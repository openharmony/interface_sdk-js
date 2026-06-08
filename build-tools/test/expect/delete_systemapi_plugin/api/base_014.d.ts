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
        headers: Record<string, string>;
    }
    /**
     * @since 20
     */
    export enum HttpMethod {
        GET = "GET",
        POST = "POST",
        PATCH = "PATCH"
    }
    /**
     * @since 20
     */
    export interface HttpRequest {
        url: string;
        method: HttpMethod;
        body?: string | Object;
        mode?: "cors" | "no-cors" | "same-origin";
    }
    /**
     * @since 20
     */
    export class HttpClient {
        private config: NetworkConfig;
        constructor(config: NetworkConfig) {
            this.config = config;
        }
        public async request<T>(request: HttpRequest): Promise<HttpResponse> {
            return {} as HttpResponse;
        }
        public get<T>(url: string): Promise<HttpResponse> {
            return this.request<T>({ url, method: HttpMethod.GET });
        }
        public post<T>(url: string, body: Object): Promise<HttpResponse> {
            return this.request<T>({ url, method: HttpMethod.POST, body });
        }
    }
    /**
     * @since 20
     */
    export interface WebSocketConfig {
        url: string;
        protocols?: string[];
    }
    /**
     * @since 20
     */
    export class WebSocketConnection {
        private socket: WebSocket | null;
        constructor(config: WebSocketConfig) {
            this.socket = null;
        }
        public connect(): Promise<void> {
            return Promise.resolve();
        }
        public close(): void {
            if (this.socket) {
                this.socket.close();
            }
        }
    }
    /**
     * @since 20
     */
    export enum ConnectionStatus {
        DISCONNECTED = "disconnected",
        CONNECTING = "connecting"
    }
    /**
     * @since 20
     */
    export function createHttpClient(config: NetworkConfig): HttpClient {
        return new HttpClient(config);
    }
}
