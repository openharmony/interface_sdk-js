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
    /**
     * @since 20
     * @systemapi
     */
    encryption?: boolean;
    compression?: boolean;
  }

  /**
   * @since 20
   */
  export enum StorageType {
    LOCAL = "local",
    SESSION = "session",
    /**
     * @since 20
     * @systemapi
     */
    INDEXED_DB = "indexed_db",
    /**
     * @since 20
     * @systemapi
     */
    MEMORY = "memory"
  }

  /**
   * @since 20
   */
  export interface StorageEntry<T> {
    key: string;
    value: T | null;
    /**
     * @since 20
     * @systemapi
     */
    timestamp: number;
    expires?: number;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface StorageIndex {
    name: string;
    keyPath: string | string[];
    unique: boolean;
  }

  /**
   * @since 20
   */
  export class DataStorage {
    private storage: Map<string, StorageEntry<any>>;
    /**
     * @since 20
     * @systemapi
     */
    private indexes: StorageIndex[];

    constructor(options: StorageOptions) {
      this.storage = new Map();
      this.indexes = [];
    }

    public set<T>(key: string, value: T, expires?: number): void {
      this.storage.set(key, { key, value, timestamp: Date.now(), expires });
    }

    /**
     * @since 20
     * @systemapi
     */
    public setWithMetadata<T>(key: string, value: T, metadata: any): void {
      this.storage.set(key, { key, value, timestamp: Date.now() });
    }

    public get<T>(key: string): T | null {
      const entry = this.storage.get(key);
      if (!entry) return null;
      if (entry.expires && entry.expires < Date.now()) {
        this.storage.delete(key);
        return null;
      }
      return entry.value as T;
    }

    /**
     * @since 20
     * @systemapi
     */
    public getEntry<T>(key: string): StorageEntry<T> | null {
      return this.storage.get(key) as StorageEntry<T> | null;
    }

    public delete(key: string): boolean {
      return this.storage.delete(key);
    }

    /**
     * @since 20
     * @systemapi
     */
    public clearExpired(): number {
      let count = 0;
      this.storage.forEach((entry, key) => {
        if (entry.expires && entry.expires < Date.now()) {
          this.storage.delete(key);
          count++;
        }
      });
      return count;
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
    /**
     * @since 20
     * @systemapi
     */
    mustRevalidate?: boolean;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface CacheStatistics {
    hits: number;
    misses: number;
    hitRate: number;
  }

  /**
   * @since 20
   */
  export class CacheManager {
    private storage: DataStorage;
    private policy: CachePolicy;
    /**
     * @since 20
     * @systemapi
     */
    private statistics: CacheStatistics;

    constructor(policy: CachePolicy) {
      this.storage = new DataStorage({ name: "cache" });
      this.policy = policy;
      this.statistics = { hits: 0, misses: 0, hitRate: 0 };
    }

    public get<T>(key: string): T | null {
      const value = this.storage.get<T>(key);
      if (value !== null) {
        this.statistics.hits++;
      } else {
        this.statistics.misses++;
      }
      return value;
    }

    /**
     * @since 20
     * @systemapi
     */
    public getStatistics(): CacheStatistics {
      return { ...this.statistics };
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
    DIRTY = "dirty",
    /**
     * @since 20
     * @systemapi
     */
    SYNCING = "syncing",
    /**
     * @since 20
     * @systemapi
     */
    ERROR = "error"
  }

  /**
   * @since 20
   */
  export interface SyncConfig {
    endpoint: string;
    interval?: number;
    /**
     * @since 20
     * @systemapi
     */
    retryAttempts?: number;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface SyncResult {
    success: boolean;
    syncedCount: number;
    timestamp: Date;
  }

  /**
   * @since 20
   */
  export class DataSyncer {
    private storage: DataStorage;
    private config: SyncConfig;
    /**
     * @since 20
     * @systemapi
     */
    private state: DataState;

    constructor(storage: DataStorage, config: SyncConfig) {
      this.storage = storage;
      this.config = config;
      this.state = DataState.CLEAN;
    }

    public getState(): DataState {
      return this.state;
    }

    /**
     * @since 20
     * @systemapi
     */
    public setState(state: DataState): void {
      this.state = state;
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

  /**
   * @since 20
   * @systemapi
   */
  export function createCache(policy: CachePolicy): CacheManager {
    return new CacheManager(policy);
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface CommonEventData {
    /**
     * Name of the common event that is being received.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    event: string;

    /**
     * Bundle name. The default value is an empty string.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the **code** field in
     * [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData} when the publisher uses
     * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
     * to publish a common event. The default value is **0**.
     *
     * @default 0
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    code?: int;

    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the **data** field in
     * [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData} when the publisher uses
     * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
     * to publish a common event.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    data?: string;

    /**
     * Additional information about the common event received by the subscriber. The value of this field is the same as
     * that of the **parameters** field in [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}
     * when the publisher uses
     * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
     * to publish a common event.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    parameters?: { [key: string]: any };

    /**
     * Additional information about the common event received by the subscriber. The value of this field is the same as
     * that of the **parameters** field in [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}
     * when the publisher uses
     * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
     * to publish a common event.
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface AgentCard {
    /**
     * A unique identifier for the agent card.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    agentId: string;

    /**
     *  The name of the Agent.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * The description of the Agent's function.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    description: string;

    /**
     * The type of the AgentCard.
     * When `type` is `agentConstant.AgentCardType.LOW_CODE`, the corresponding application must be a system application.
     * Otherwise, the agent card cannot be registered, installed, or updated.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    type?: agentConstant.AgentCardType;

    /**
     * Service provider information for the Agent.
     *
     * @type { ?AgentProvider }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    provider?: AgentProvider;

    /**
     * Version of the Agent (format defined by provider, e.g., "1.0.0").
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    version: string;

    /**
     * Url for the Agent's documentation.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    documentationUrl?: string;

    /**
     * Capability set supported by the agent.
     *
     * @type { ?AgentCapabilities }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    capabilities?: AgentCapabilities;

    /**
     * The set of interaction modes that the agent supports across all skills.
     * This can be overridden per skill. Defined as media types.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    defaultInputModes: Array<string>;

    /**
     * The media types supported as outputs from this agent.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    defaultOutputModes: Array<string>;

    /**
     * Skills represent the abilities of an agent.
     *
     * @type { Array<AgentSkill> }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    skills: Array<AgentSkill>;

    /**
     * A url to an icon for the agent.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    iconUrl: string;

    /**
     * The category of this agent.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    category: string;

    /**
     * Extension configuration items for the agent.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    extension?: string;

    /**
     * Application-related information for the agent.
     *
     * @type { AgentAppInfo }
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    appInfo: AgentAppInfo;
  }

  /**
   * @since 20
   * @systemapi
   */
  export declare enum PopupPlacement {
    /**
     * The popup is on the left of the component and aligned with the left center of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    LEFT = 0,

    /**
     * The popup is on the right of the component and aligned with the right center of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    RIGHT = 1,

    /**
     * The popup is at the top of the component and aligned with the top center of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TOP = 2,

    /**
     * The popup is at the bottom of the component and aligned with the bottom center of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM = 3,

    /**
     * The popup is at the top of the component and aligned with the left edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_LEFT = 4,

    /**
     * The popup is at the top of the component and aligned with the right edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_RIGHT = 5,

    /**
     * The popup is at the bottom of the component and aligned with the left edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_LEFT = 6,

    /**
     * The popup is at the bottom of the component and aligned with the right edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_RIGHT = 7,

    /**
     * The popup is on the left of the component and aligned with the top edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    LEFT_TOP = 8,

    /**
     * The popup is on the left of the component and aligned with the bottom edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    LEFT_BOTTOM = 9,

    /**
     * The popup is on the right of the component and aligned with the top edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    RIGHT_TOP = 10,

    /**
     * The popup is on the right of the component and aligned with the bottom edge of the component.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    RIGHT_BOTTOM = 11,

    /**
     * The position is unspecified.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 12
  }
}