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
 * @kit AbilityKit
 */
/**
 * Complex types test module for delete_systemapi_plugin.
 *
 * @since 20
 */
export namespace ComplexTypes {
    /**
     * Configuration options for data processing.
     *
     * @since 20
     */
    export interface ProcessConfig {
        maxBufferSize: number;
        timeout: number;
        retryCount: number;
        enableCache: boolean;
        compression: CompressionType;
    }
    /**
     * Compression algorithm type.
     *
     * @enum { number }
     * @since 20
     */
    export enum CompressionType {
        NONE = 0,
        GZIP = 1,
        DEFLATE = 2,
        LZ4 = 3
    }
    /**
     * Data container with generic type support.
     *
     * @since 20
     */
    export class DataContainer<T> {
        private items: T[] = [];
        private metadata: Map<string, any> = new Map();
        /**
         * Gets all items from the container.
         *
         * @since 20
         */
        public getAll(): T[] {
            return [...this.items];
        }
        /**
         * Clears all items from the container.
         *
         * @since 20
         */
        public clear(): void {
            this.items = [];
        }
        /**
         * Gets the size of the container.
         *
         * @since 20
         */
        public size(): number {
            return this.items.length;
        }
    }
    /**
     * Request parameters for network operations.
     *
     * @since 20
     */
    export interface NetworkRequest {
        url: string;
        method: HttpMethod;
        headers: Record<string, string>;
        body?: string;
        timeout?: number;
    }
    /**
     * HTTP methods.
     *
     * @enum { number }
     * @since 20
     */
    export enum HttpMethod {
        GET = 0,
        POST = 1,
        PUT = 2,
        DELETE = 3,
        PATCH = 4
    }
    /**
     * Stream data handler.
     *
     * @since 20
     */
    export class StreamHandler {
        private buffer: ArrayBuffer;
        private position: number = 0;
        /**
         * Creates a new stream handler.
         *
         * @param size - Buffer size
         * @since 20
         */
        constructor(size: number) {
            this.buffer = new ArrayBuffer(size);
        }
        /**
         * Reads data from stream.
         *
         * @param length - Number of bytes to read
         * @returns Data chunk
         * @since 20
         */
        public read(length: number): ArrayBuffer {
            const slice = this.buffer.slice(this.position, this.position + length);
            this.position += length;
            return slice;
        }
    }
    /**
     * Policy definition for access control.
     *
     * @since 20
     */
    export interface AccessPolicy {
        permission: string;
        resource: string;
        actions: Array<ActionType>;
        conditions?: PolicyCondition;
    }
    /**
     * Action types for policy.
     *
     * @enum { number }
     * @since 20
     */
    export enum ActionType {
        READ = 1,
        WRITE = 2,
        EXECUTE = 4,
        DELETE = 8
    }
    /**
     * Condition for policy evaluation.
     *
     * @since 20
     */
    export interface PolicyCondition {
        timeRange?: TimeRange;
        ipRange?: string[];
        deviceTypes?: Array<DeviceType>;
    }
    /**
     * Time range definition.
     *
     * @since 20
     */
    export interface TimeRange {
        start: number;
        end: number;
        timezone: string;
    }
    /**
     * Device type enumeration.
     *
     * @enum { number }
     * @since 20
     */
    export enum DeviceType {
        PHONE = 0,
        TABLET = 1,
        PC = 2,
        TV = 3,
        WATCH = 4
    }
    /**
     * Validates an access policy.
     *
     * @param policy - Policy to validate
     * @returns Whether policy is valid
     * @since 20
     */
    export function validatePolicy(policy: AccessPolicy): boolean {
        return policy.permission.length > 0 && policy.resource.length > 0;
    }
}
