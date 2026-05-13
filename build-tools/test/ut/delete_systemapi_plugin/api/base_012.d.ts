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
 * Event handling types for testing systemapi deletion.
 *
 * @since 20
 */
export namespace EventHandling {
  /**
   * Event listener configuration.
   *
   * @since 20
   * @systemapi
   */
  export interface EventListenerConfig {
    eventType: string;
    callback: (event: BaseEvent) => void;
    priority: number;
    once: boolean;
  }

  /**
   * Base event interface.
   *
   * @since 20
   */
  export interface BaseEvent {
    type: string;
    timestamp: number;
    source?: string;
    data?: any;
  }

  /**
   * Custom event with payload.
   *
   * @since 20
   */
  export interface CustomEvent<T> extends BaseEvent {
    payload: T;
    cancelable: boolean;
  }

  /**
   * Event dispatcher configuration.
   *
   * @since 20
   * @systemapi
   */
  export interface DispatcherConfig {
    maxListeners: number;
    asyncDispatch: boolean;
    errorHandler?: (error: Error) => void;
  }

  /**
   * Event priority levels.
   *
   * @enum { number }
   * @since 20
   */
  export enum EventPriority {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    CRITICAL = 3
  }

  /**
   * Event dispatch status.
   *
   * @enum { number }
   * @since 20
   * @systemapi
   */
  export enum DispatchStatus {
    PENDING = 0,
    DISPATCHED = 1,
    CANCELLED = 2,
    FAILED = 3
  }

  /**
   * Generic event dispatcher.
   *
   * @since 20
   */
  export class EventDispatcher {
    private listeners: Map<string, Array<EventListenerConfig>> = new Map();
    private config: DispatcherConfig;

    /**
     * Creates a new event dispatcher.
     *
     * @param config - Dispatcher configuration
     * @since 20
     */
    constructor(config: DispatcherConfig) {
      this.config = config;
    }

    /**
     * Registers an event listener.
     *
     * @param eventType - Event type to listen for
     * @param callback - Callback function
     * @param options - Listener options
     * @returns Listener ID
     * @since 20
     */
    public on(eventType: string, callback: (event: BaseEvent) => void, options?: EventOptions): string {
      const listenerId = this.generateId();
      return listenerId;
    }

    /**
     * Dispatches an event.
     *
     * @param event - Event to dispatch
     * @returns Dispatch status
     * @since 20
     * @systemapi
     */
    public dispatch(event: BaseEvent): DispatchStatus {
      return DispatchStatus.DISPATCHED;
    }

    /**
     * Removes an event listener.
     *
     * @param listenerId - Listener ID to remove
     * @since 20
     */
    public off(listenerId: string): void {
      return;
    }

    /**
     * Gets all registered listeners.
     *
     * @returns Array of listener configs
     * @since 20
     * @systemapi
     */
    public getListeners(): Array<EventListenerConfig> {
      return [];
    }
  }

  /**
   * Event listener options.
   *
   * @since 20
   */
  export interface EventOptions {
    priority?: EventPriority;
    once?: boolean;
    passive?: boolean;
  }

  /**
   * Event queue for async processing.
   *
   * @since 20
   */
  export class EventQueue {
    private queue: BaseEvent[] = [];
    private processing: boolean = false;

    /**
     * Enqueues an event.
     *
     * @param event - Event to enqueue
     * @since 20
     */
    public enqueue(event: BaseEvent): void {
      this.queue.push(event);
    }

    /**
     * Processes the next event.
     *
     * @returns Processed event or null
     * @since 20
     * @systemapi
     */
    public processNext(): BaseEvent | null {
      return this.queue.shift() || null;
    }

    /**
     * Gets queue size.
     *
     * @returns Number of events in queue
     * @since 20
     */
    public size(): number {
      return this.queue.length;
    }

    /**
     * Clears the queue.
     *
     * @since 20
     * @systemapi
     */
    public clear(): void {
      this.queue = [];
    }
  }

  /**
   * Creates a new event dispatcher.
   *
   * @param config - Dispatcher configuration
   * @returns New dispatcher instance
   * @since 20
   * @systemapi
   */
  export function createDispatcher(config: DispatcherConfig): EventDispatcher {
    return new EventDispatcher(config);
  }

  /**
   * Validates an event.
   *
   * @param event - Event to validate
   * @returns Whether event is valid
   * @since 20
   */
  export function validateEvent(event: BaseEvent): boolean {
    return event.type.length > 0;
  }
}