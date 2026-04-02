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
 * Advanced type definitions for testing systemapi deletion.
 *
 * @since 20
 */
export namespace AdvancedTypes {
  /**
   * Represents a data transformation pipeline.
   *
   * @since 20
   * @systemapi
   */
  export interface TransformPipeline<TInput, TOutput> {
    inputType: string;
    outputType: string;
    stages: Array<TransformStage<TInput, TOutput>>;
    enableParallel: boolean;
  }

  /**
   * Single transformation stage.
   *
   * @since 20
   */
  export interface TransformStage<T, R> {
    name: string;
    transform: (input: T) => R;
    errorHandler?: ErrorHandler;
  }

  /**
   * Error handler for transformations.
   *
   * @since 20
   * @systemapi
   */
  export interface ErrorHandler {
    onError: (error: Error) => void;
    retryCount: number;
    fallback?: () => any;
  }

  /**
   * Cache configuration.
   *
   * @since 20
   */
  export interface CacheConfig {
    maxSize: number;
    ttl: number;
    evictionPolicy: EvictionPolicy;
    enablePersistence: boolean;
  }

  /**
   * Cache eviction policies.
   *
   * @enum { number }
   * @since 20
   */
  export enum EvictionPolicy {
    LRU = 0,
    LFU = 1,
    FIFO = 2,
    RANDOM = 3
  }

  /**
   * Generic cache manager.
   *
   * @since 20
   */
  export class CacheManager<K, V> {
    private cache: Map<K, V> = new Map();
    private config: CacheConfig;

    /**
     * Creates a new cache manager.
     *
     * @param config - Cache configuration
     * @since 20
     */
    constructor(config: CacheConfig) {
      this.config = config;
    }

    /**
     * Gets a value from cache.
     *
     * @param key - Cache key
     * @returns Cached value or undefined
     * @since 20
     * @systemapi
     */
    public get(key: K): V | undefined {
      return this.cache.get(key);
    }

    /**
     * Sets a value in cache.
     *
     * @param key - Cache key
     * @param value - Value to cache
     * @since 20
     */
    public set(key: K, value: V): void {
      if (this.cache.size >= this.config.maxSize) {
        this.evict();
      }
      this.cache.set(key, value);
    }

    /**
     * Evicts oldest entry.
     *
     * @since 20
     */
    private evict(): void {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }

    /**
     * Clears all cached entries.
     *
     * @since 20
     */
    public clear(): void {
      this.cache.clear();
    }
  }

  /**
   * Database connection configuration.
   *
   * @since 20
   */
  export interface DatabaseConfig {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    poolSize: number;
    ssl?: SSLConfig;
  }

  /**
   * SSL configuration.
   *
   * @since 20
   * @systemapi
   */
  export interface SSLConfig {
    enabled: boolean;
    keyPath?: string;
    certPath?: string;
    caPath?: string;
    verifyServer: boolean;
  }

  /**
   * Query builder for database operations.
   *
   * @since 20
   */
  export class QueryBuilder {
    private queryParts: string[] = [];

    /**
     * Adds SELECT clause.
     *
     * @param columns - Column names
     * @returns Query builder instance
     * @since 20
     */
    public select(columns: string[]): this {
      this.queryParts.push(`SELECT ${columns.join(', ')}`);
      return this;
    }

    /**
     * Adds FROM clause.
     *
     * @param table - Table name
     * @returns Query builder instance
     * @since 20
     */
    public from(table: string): this {
      this.queryParts.push(`FROM ${table}`);
      return this;
    }

    /**
     * Adds WHERE clause.
     *
     * @param condition - Where condition
     * @returns Query builder instance
     * @since 20
     */
    public where(condition: string): this {
      this.queryParts.push(`WHERE ${condition}`);
      return this;
    }

    /**
     * Builds the final query string.
     *
     * @returns Complete query string
     * @since 20
     * @systemapi
     */
    public build(): string {
      return this.queryParts.join(' ');
    }
  }

  /**
   * Authentication credentials.
   *
   * @since 20
   */
  export interface AuthCredentials {
    username: string;
    password: string;
    token?: string;
    refreshToken?: string;
  }

  /**
   * Authentication result.
   *
   * @since 20
   * @systemapi
   */
  export interface AuthResult {
    success: boolean;
    userId?: string;
    sessionToken?: string;
    expiresIn: number;
    permissions: Array<string>;
  }
}
