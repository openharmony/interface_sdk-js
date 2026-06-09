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
 * @kit StorageKit
 */
/**
 * @since 20
 */
export namespace StorageModule {
    /**
     * @since 20
     */
    export interface StorageOptions {
        name: string;
        maxSize?: number;
        compression?: boolean;
    }
    /**
     * @since 20
     */
    export enum StorageType {
        LOCAL = "local",
        SESSION = "session"
    }
    /**
     * @since 20
     */
    export interface StorageEntry<T> {
        key: string;
        value: T | null;
        expires?: number;
    }
    /**
     * @since 20
     */
    export class DataStorage {
        private storage: Map<string, StorageEntry<any>>;
        constructor(options: StorageOptions) {
            this.storage = new Map();
            this.indexes = [];
        }
        public set<T>(key: string, value: T, expires?: number): void {
            this.storage.set(key, { key, value, timestamp: Date.now(), expires });
        }
        public get<T>(key: string): T | null {
            const entry = this.storage.get(key);
            if (!entry)
                return null;
            if (entry.expires && entry.expires < Date.now()) {
                this.storage.delete(key);
                return null;
            }
            return entry.value as T;
        }
        public delete(key: string): boolean {
            return this.storage.delete(key);
        }
        public has(key: string): boolean {
            return this.storage.has(key);
        }
        public size(): number {
            return this.storage.size;
        }
    }
    /**
     * @since 20
     */
    export interface CachePolicy {
        maxAge: number;
        staleWhileRevalidate?: number;
    }
    /**
     * @since 20
     */
    export class CacheManager {
        private storage: DataStorage;
        private policy: CachePolicy;
        constructor(policy: CachePolicy) {
            this.storage = new DataStorage({ name: "cache" });
            this.policy = policy;
            this.statistics = { hits: 0, misses: 0, hitRate: 0 };
        }
        public get<T>(key: string): T | null {
            const value = this.storage.get<T>(key);
            if (value !== null) {
                this.statistics.hits++;
            }
            else {
                this.statistics.misses++;
            }
            return value;
        }
        public set<T>(key: string, value: T): void {
            this.storage.set(key, value, this.policy.maxAge);
        }
        public clear(): void {
            this.storage.clearExpired();
        }
    }
    /**
     * @since 20
     */
    export enum DataState {
        CLEAN = "clean",
        DIRTY = "dirty"
    }
    /**
     * @since 20
     */
    export interface SyncConfig {
        endpoint: string;
        interval?: number;
    }
    /**
     * @since 20
     */
    export class DataSyncer {
        private storage: DataStorage;
        private config: SyncConfig;
        constructor(storage: DataStorage, config: SyncConfig) {
            this.storage = storage;
            this.config = config;
            this.state = DataState.CLEAN;
        }
        public getState(): DataState {
            return this.state;
        }
        public async sync(): Promise<SyncResult> {
            this.state = DataState.SYNCING;
            const keys = this.storage.keys();
            let syncedCount = 0;
            for (const key of keys) {
                syncedCount++;
            }
            this.state = DataState.CLEAN;
            return { success: true, syncedCount, timestamp: new Date() };
        }
    }
    /**
     * @since 20
     */
    export function createStorage(options: StorageOptions): DataStorage {
        return new DataStorage(options);
    }
}
