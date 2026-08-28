/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @file Emitter
 * @kit BasicServicesKit
 */

/*** if arkts dynamic */
import { Callback } from './@ohos.base';
/*** endif */
/*** if arkts static */
import { Callback, RecordData } from './@ohos.base';
/*** endif */

/**
 * This module provides APIs for sending and processing events between threads in a process or within a thread. You
 * can use the APIs of this module to subscribe to events (continuous subscription or one-shot subscription), cancel
 * event subscription, send events to the event queue, and query the number of subscribed events. In this way, event
 * communication between different threads in the same process and within the same thread can be implemented. It is
 * applicable to scenarios such as cross-thread communication, module decoupling, and the event-driven mode, helping
 * developers implement a lightweight publish-subscribe pattern, reduce coupling between components, and improve code
 * maintainability and scalability.
 *
 * Two event processing entries are provided. You can select one based on the isolation requirements:
 *
 * - **Namespace APIs** (**on**, **once**, **off**, **emit**, and **getListenerCount** in the **emitter** namespace):
 * provide global event subscription and publishing capabilities within a process. This entry works based on the
 * global event queue. Any thread in the same process can subscribe to and publish events. These APIs are suitable
 * for cross-thread event communication.
 *
 * - **Instance APIs** (**Emitter** class): provide the event subscription and publishing capabilities within the
 * same **Emitter** instance. Different **Emitter** instances are isolated from each other. You can create multiple
 * independent event communication channels when events need to be isolated or grouped by instance.
 *
 * **APIs used in combination**
 *
 * The event communication of this module follows the calling sequence of subscription, publishing, processing, and
 * unsubscription. For both namespace and instance APIs, you need to subscribe to an event first, and then another
 * thread or the same thread publishes the event. The callback is executed after the event is received. When the
 * event is no longer needed, unsubscribe from the event to release resources. In addition, event subscription has
 * a lifecycle. Pay attention to resource management:
 *
 * - **Continuous subscription** (**on**): The subscription remains valid until **off** is called to cancel
 * subscription. If the subscription is not canceled, it will be retained.
 *
 * - **One-shot subscription** (**once**): The subscription is automatically canceled after the event is received for
 * the first time and the callback is executed. You do not need to manually call **off**.
 *
 * - **Time for unsubscription**: After the subscription is canceled by calling **off**, the events that have been
 * published through **emit** but have not been executed are also canceled and no callback is triggered. Note that
 * when canceling a specified callback, you need to pass the corresponding callback function. If no callback is
 * specified, all subscriptions to the event are canceled.
 *
 * @syscap SystemCapability.Notification.Emitter
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace emitter {
  /**
   * Subscribes to an event in persistent manner and executes a callback after the event is received.
   *
   * @param { InnerEvent } event - Event to subscribe to in persistent manner. The
   *     [EventPriority]{@link emitter.EventPriority} parameter is not required and does not take effect.
   * @param { Callback<EventData> } callback - Callback to be invoked when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function on(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * Subscribes to an event in persistent manner and executes a callback after the event is received.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Callback<EventData> } callback - Callback to be invoked when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function on(eventId: string, callback: Callback<EventData>): void;

  /**
   * Subscribes to an event in persistent manner and executes a callback after the event is received.
   *
   * @param { string } eventId - Event to subscribe to in persistent manner. The value cannot be an empty string and
   *     exceed 10240 bytes.
   * @param { Callback<EventData> } callback - Callback to be executed when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onEventData(eventId: string, callback: Callback<EventData>): void;

  /**
   * Subscribes to an event in persistent manner and executes a callback after the event is received.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Callback<GenericEventData<T>> } callback - Callback to be invoked when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function on<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * Subscribes to an event in persistent manner and executes a callback after the event is received.
   *
   * @param { string } eventId - Event to subscribe to in persistent manner. The value cannot be an empty string and
   *     exceed 10240 bytes.
   * @param { Callback<GenericEventData<T>> } callback - Callback to be executed when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
   *
   * @param { InnerEvent } event - Event to subscribe to in one-shot manner. The
   *     [EventPriority]{@link emitter.EventPriority} parameter is not required and does not take effect.
   * @param { Callback<EventData> } callback - Callback to be invoked when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function once(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Callback<EventData> } callback - Callback to be invoked when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function once(eventId: string, callback: Callback<EventData>): void;

  /**
   * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
   *
   * @param { string } eventId - Event to subscribe to in one-shot manner. The value cannot be an empty string and
   *     exceed 10240 bytes.
   * @param { Callback<EventData> } callback - Callback to be executed when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onceEventData(eventId: string, callback: Callback<EventData>): void;

  /**
   * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Callback<GenericEventData<T>> } callback - Callback to be invoked when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function once<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
   *
   * @param { string } eventId - Event to subscribe to in one-shot manner. The value cannot be an empty string and
   *     exceed 10240 bytes.
   * @param { Callback<GenericEventData<T>> } callback - Callback to be executed when the event is received.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * Unsubscribes from all events with the specified event ID.
   *
   * After this API is used to unsubscribe from an event, the event that has been published through the 
   * [emit]{@link emitter.emit(eventId: string)} API but has not been executed will be unsubscribed.
   *
   * @param { long } eventId - Event ID.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function off(eventId: long): void;

  /**
   * Unsubscribes from all events with the specified event ID.
   *
   * After this API is used to unsubscribe from an event, the event that has been published through the 
   * [emit]{@link emitter.emit(eventId: string)} API but has not been executed will be unsubscribed.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function off(eventId: string): void;

  /**
   * Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes 
   * effect only when **Callback\<EventData>** has been registered through the 
   * [on]{@link ./@ohos.events.emitter:on(event: InnerEvent, callback: Callback<EventData>)} or 
   * [once]{@link ./@ohos.events.emitter:once(event: InnerEvent, callback: Callback<EventData>)} API. Otherwise, no processing is 
   * performed.
   *
   * After this API is used to unsubscribe from an event, the event that has been published through the 
   * [emit]{@link emitter.emit(eventId: string)} API but has not been executed will be unsubscribed.
   *
   * @param { long } eventId - Event ID.
   * @param { Callback<EventData> } callback - Callback to unregister, which must be the same as the callback used
   *     during registration.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function off(eventId: long, callback: Callback<EventData>): void;

  /**
   * Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes 
   * effect only when **Callback\<EventData>** has been registered through the 
   * [on]{@link ./@ohos.events.emitter:on(eventId: string, callback: Callback<EventData>)} or 
   * [once]{@link ./@ohos.events.emitter:once(eventId: string, callback: Callback<EventData>)} API. Otherwise, no processing is 
   * performed.
   *
   * After this API is used to unsubscribe from an event, the event that has been published through the 
   * [emit]{@link emitter.emit(eventId: string)} API but has not been executed will be unsubscribed.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Callback<EventData> } callback - Callback to unregister, which must be the same as the callback used
   *     during registration.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function off(eventId: string, callback: Callback<EventData>): void;

  /**
   * Unsubscribes from an event with the specified event ID and processed by the specified callback.
   * This API takes effect only when Callback<EventData> has been registered through the on or once API.
   * Otherwise, no processing is performed.
   *
   * @param { string } eventId - Event ID. The value cannot be an empty string and exceed 10240 bytes.
   * @param { Callback<EventData> } callback - Callback to unregister.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function offEventData(eventId: string, callback: Callback<EventData>): void;

  /**
   * Unsubscribes from an event with the specified event ID and processed by the specified callback. This API takes 
   * effect only when **Callback\<EventData>** has been registered through the 
   * [on]{@link emitter.Emitter.on} or 
   * [once]{@link emitter.Emitter.once} API. Otherwise, no 
   * processing is performed.
   *
   * After this API is used to unsubscribe from an event, the event that has been published through the 
   * [emit]{@link emitter.emit(eventId: string)} API but has not been executed will be unsubscribed.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Callback<GenericEventData<T>> } callback - Callback to unregister, which must be the same as the
   *     callback used during registration.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * Unsubscribes from an event with the specified event ID and processed by the specified callback.
   * This API takes effect only when Callback<EventData> has been registered through the on or once API.
   * Otherwise, no processing is performed.
   *
   * @param { string } eventId - Event ID. The value cannot be an empty string and exceed 10240 bytes.
   * @param { Callback<GenericEventData<T>> } callback - Callback to unregister.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function offGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * Emits a specified event.
   *
   * This API can be used to emit data objects across threads. The data objects must meet the specifications specified 
   * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
   * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
   * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
   *
   * After an event is published using this API, the event may not be executed immediately. When the execution starts 
   * depends on the number of events in the event queue and the execution efficiency of each event.
   *
   * @param { InnerEvent } event - Event to emit, where [EventPriority]{@link emitter.EventPriority} specifies the emit
   *     priority of the event.
   * @param { EventData } [data] - Data carried by the event. This parameter is left empty by default.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function emit(event: InnerEvent, data?: EventData): void;

  /**
   * Emits a specified event.
   *
   * This API can be used to emit data objects across threads. The data objects must meet the specifications specified 
   * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
   * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
   * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
   *
   * After an event is published using this API, the event may not be executed immediately. When the execution starts 
   * depends on the number of events in the event queue and the execution efficiency of each event.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { EventData } [data] - Data carried by the event. This parameter is left empty by default.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function emit(eventId: string, data?: EventData): void;

  /**
   * Emits the specified event.
   *
   * @param { string } eventId - ID of the event to emit. The value cannot be an empty string and exceed 10240 bytes.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string): void;

  /**
   * Emits the specified event.
   *
   * @param { string } eventId - ID of the event to emit. The value cannot be an empty string and exceed 10240 bytes.
   * @param { EventData } data - Data passed in the event.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string, data: EventData): void;

  /**
   * Emits a specified event.
   *
   * This API can be used to emit data objects across threads. The data objects must meet the specifications specified 
   * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
   * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
   * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
   *
   * After an event is published using this API, the event may not be executed immediately. When the execution starts 
   * depends on the number of events in the event queue and the execution efficiency of each event.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { GenericEventData<T> } [data] - Data carried by the event. This parameter is left empty by default.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function emit<T>(eventId: string, data?: GenericEventData<T>): void;

  /**
   * Emits the specified event.
   *
   * @param { string } eventId - ID of the event to emit. The value cannot be an empty string and exceed 10240 bytes.
   * @param { GenericEventData<T> } data - Data passed in the event.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit<T>(eventId: string, data: GenericEventData<T>): void;

  /**
   * Emits an event of a specified priority.
   *
   * This API can be used to emit data objects across threads. The data objects must meet the specifications specified 
   * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
   * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
   * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
   *
   * After an event is published using this API, the event may not be executed immediately. When the execution starts 
   * depends on the number of events in the event queue and the execution efficiency of each event.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Options } options - Event emit priority.
   * @param { EventData } [data] - Data carried by the event. This parameter is left empty by default.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function emit(eventId: string, options: Options, data?: EventData): void;

  /**
   * Emits an event of a specified priority.
   *
   * @param { string } eventId - ID of the event to emit. The value cannot be an empty string and exceed 10240 bytes.
   * @param { Options } options - Event emit priority.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string, options: Options): void;

  /**
   * Emits an event of a specified priority.
   *
   * @param { string } eventId - ID of the event to emit. The value cannot be an empty string and exceed 10240 bytes.
   * @param { Options } options - Event emit priority.
   * @param { EventData } data - Data passed in the event.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string, options: Options, data: EventData): void;

  /**
   * Emits an event of a specified priority.
   *
   * This API can be used to emit data objects across threads. The data objects must meet the specifications specified 
   * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
   * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
   * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
   *
   * After an event is published using this API, the event may not be executed immediately. When the execution starts 
   * depends on the number of events in the event queue and the execution efficiency of each event.
   *
   * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
   *     truncated.
   * @param { Options } options - Event emit priority.
   * @param { GenericEventData<T> } [data] - Data carried by the event. This parameter is left empty by default.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function emit<T>(eventId: string, options: Options, data?: GenericEventData<T>): void;

  /**
   * Emits an event of a specified priority.
   *
   * @param { string } eventId - ID of the event to emit. The value cannot be an empty string and exceed 10240 bytes.
   * @param { Options } options - Event emit priority.
   * @param { GenericEventData<T> } data - Data passed in the event.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit<T>(eventId: string, options: Options, data: GenericEventData<T>): void;

  /**
   * Obtains the number of subscriptions to a specified event.
   *
   * @param { long | string } eventId - Event ID. The value is a string, which cannot be empty or exceed 10,240
   *     bytes. Excess content will be truncated.
   * @returns { long } Number of subscriptions to a specified event.
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getListenerCount(eventId: long | string): long;

  /**
   * Describes data carried by the emitted event.
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export interface EventData {
    /**
     * Data carried by the emitted event. The value can be in any of the following types: Array, ArrayBuffer, Boolean, 
     * DataView, Date, Error, Map, Number, Object, Primitive (except symbol), RegExp, Set, String, and TypedArray. The 
     * maximum data size is 16 MB. If the data size exceeds the limit, the event fails to be emitted.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    data?: { [key: string]: any };

    /**
     * Data carried by the event.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform
     * @since 23 static
     */
    data?: Record<string, RecordData> | ESValue;
  }

  /**
   * Describes an event to subscribe to or emit. The **EventPriority** settings do not take effect under event 
   * subscription.
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export interface InnerEvent {
    /**
     * Event ID.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    eventId: long;

    /**
     * Event priority. The default value is **EventPriority.LOW**.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    priority?: EventPriority;
  }

  /**
   * Enumerates the event priorities.
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export enum EventPriority {
    /**
     * The event will be emitted before high-priority events.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    IMMEDIATE = 0,

    /**
     * The event will be emitted before low-priority events.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    HIGH,

    /**
     * The event will be emitted before idle-priority events. By default, an event is in LOW priority.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    LOW,

    /**
     * The event will be emitted after all the other events.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    IDLE,
  }

  /**
   * Describes the event emit priority.
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Options {
    /**
     * Event priority. The default value is **EventPriority.LOW**.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    priority?: EventPriority;
  }

  /**
   * Describes the generic data carried by the emitted event.
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface GenericEventData<T> {
    /**
     * Data carried by the emitted event. **T** represents a generic type, which can be customized based on service
     * requirements.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    data?: T;

    /**
     * Data passed in the event. T: generic type.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform
     * @since 23 static
     */
    data?: T | ESValue;
  }

  /**
   * This module provides the capabilities of sending and processing inter- or intra-thread events in a process of the 
   * same **Emitter** instance. You can use the following APIs to subscribe to an event in persistent or one-shot 
   * manner, cancel the subscription, or emit an event to the event queue. This module is applicable when 
   * inter-thread communication and event management are required based on independent instances. Different 
   * **Emitter** instances are isolated from each other.
   *
   * @syscap SystemCapability.Notification.Emitter
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @class Emitter
   */
  export class Emitter {
    /**
     * Defines a constructor.
     *
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Subscribes to an event specified by the Emitter instance in persistent manner and executes a callback after the 
     * event is received.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Callback<EventData> } callback - Callback to be invoked when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    on(eventId: string, callback: Callback<EventData>): void;

    /**
     * Subscribes to an event specified by the Emitter instance in persistent manner and executes a callback after the 
     * event is received.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Callback<GenericEventData<T>> } callback - Callback to be invoked when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    on<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * Subscribes to an event specified by the Emitter instance in one-shot manner and unsubscribes from it after the 
     * event callback is executed. This API uses an asynchronous callback to return the result.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Callback<EventData> } callback - Callback to be invoked when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    once(eventId: string, callback: Callback<EventData>): void;

    /**
     * Subscribes to an event specified by the Emitter instance in one-shot manner and unsubscribes from it after the 
     * event callback is executed. This API uses an asynchronous callback to return the result.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Callback<GenericEventData<T>> } callback - Callback to be invoked when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    once<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * Subscribes to an event in persistent manner and executes a callback after the event is received.
     *
     * @param { string } eventId - Event to subscribe to in persistent manner.
     *     The value cannot be an empty string and exceed 10240 bytes.
     * @param { Callback<EventData> } callback - Callback to be executed when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onEventData(eventId: string, callback: Callback<EventData>): void;

    /**
     * Subscribes to an event in persistent manner and executes a callback after the event is received.
     *
     * @param { string } eventId - Event to subscribe to in persistent manner.
     *     The value cannot be an empty string and exceed 10240 bytes.
     * @param { Callback<GenericEventData<T>> } callback - Callback to be executed when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
     *
     * @param { string } eventId - Event to subscribe to in one-shot manner.
     *     The value cannot be an empty string and exceed 10240 bytes.
     * @param { Callback<EventData> } callback - Callback to be executed when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onceEventData(eventId: string, callback: Callback<EventData>): void;

    /**
     * Subscribes to an event in one-shot manner and unsubscribes from it after the event callback is executed.
     *
     * @param { string } eventId - Event to subscribe to in one-shot manner.
     *     The value cannot be an empty string and exceed 10240 bytes.
     * @param { Callback<GenericEventData<T>> } callback - Callback to be executed when the event is received.
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * Unsubscribes from all events with the specified event ID of the Emitter instance.
     *
     * After this API is used to unsubscribe from an event, the event that has been published through the 
     * [emit]{@link emitter.Emitter#emit(eventId: string, data?: EventData)} API but has not been executed will be 
     * unsubscribed.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    off(eventId: string): void;

    /**
     * Unsubscribes from an event of the Emitter instance. This API takes effect only when the 
     * [on]{@link emitter.Emitter#on(eventId: string, callback: Callback<EventData>)} or 
     * [once]{@link emitter.Emitter#once(eventId: string, callback: Callback<EventData>)} API is used to subscribe to 
     * the event with specified event ID and a callback is used to process the event.
     *
     * After this API is used to unsubscribe from an event, the event that has been published through the 
     * [emit]{@link emitter.Emitter#emit(eventId: string, data?: EventData)} API but has not been executed will be 
     * unsubscribed.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Callback<EventData> } callback - Callback to unregister.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    off(eventId: string, callback: Callback<EventData>): void;

    /**
     * Unsubscribes from an event with the specified event ID and processed by the specified callback.
     *
     * @param { string } eventId - Event ID. The value cannot be an empty string and exceed 10240 bytes.
     * @param { Callback<EventData> } callback - Callback to unregister.
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    offEventData(eventId: string, callback: Callback<EventData>): void;

    /**
     * Unsubscribes from an event of the Emitter instance. This API takes effect only when the 
     * [on]{@link emitter.Emitter.on} or 
     * [once]{@link emitter.Emitter.once} API is used to 
     * subscribe to the event with specified event ID and a callback is used to process the event.
     *
     * After this API is used to unsubscribe from an event, the event that has been published through the 
     * [emit]{@link emitter.Emitter#emit<T>(eventId: string, data?: GenericEventData<T>)} API but has not been executed 
     * will be unsubscribed.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Callback<GenericEventData<T>> } callback - Callback to unregister.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * Unsubscribes from an event with the specified event ID and processed by the specified callback.
     *
     * @param { string } eventId - Event ID. The value cannot be an empty string and exceed 10240 bytes.
     * @param { Callback<GenericEventData<T>> } callback - Callback to unregister.
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    offGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * Emits a specified event to the Emitter class instance.
     *
     * This API can be used to emit data objects across threads. The data objects must meet the specifications specified
     * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
     * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
     * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
     *
     * After an event is published using this API, the event may not be executed immediately. When the execution starts 
     * depends on the number of events in the event queue and the execution efficiency of each event.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { EventData } [data] - Data carried by the event. This parameter is left empty by default.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit(eventId: string, data?: EventData): void;

    /**
     * Emits a specified event to the Emitter class instance.
     *
     * This API can be used to emit data objects across threads. The data objects must meet the specifications specified
     * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
     * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
     * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
     *
     * After an event is published using this API, the event may not be executed immediately. When the execution starts 
     * depends on the number of events in the event queue and the execution efficiency of each event.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { GenericEventData<T> } [data] - Data carried by the event. This parameter is left empty by default.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit<T>(eventId: string, data?: GenericEventData<T>): void;

    /**
     * Emits an event of a specified priority to the Emitter instance.
     *
     * This API can be used to emit data objects across threads. The data objects must meet the specifications specified
     * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
     * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
     * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
     *
     * After an event is published using this API, the event may not be executed immediately. When the execution starts 
     * depends on the number of events in the event queue and the execution efficiency of each event.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Options } options - Event emit priority.
     * @param { EventData } [data] - Data carried by the event. This parameter is left empty by default.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit(eventId: string, options: Options, data?: EventData): void;

    /**
     * Emits an event of a specified priority to the Emitter instance.
     *
     * This API can be used to emit data objects across threads. The data objects must meet the specifications specified
     * in [Overview of Inter-Thread Communication Objects](docroot://arkts-utils/serializable-overview.md). Currently, 
     * complex data decorated by decorators such as [@State](docroot://ui/state-management/arkts-state.md) and 
     * [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) is not supported.
     *
     * After an event is published using this API, the event may not be executed immediately. When the execution starts 
     * depends on the number of events in the event queue and the execution efficiency of each event.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @param { Options } options - Event emit priority.
     * @param { GenericEventData<T> } [data] - Data carried by the event. This parameter is left empty by default.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit<T>(eventId: string, options: Options, data?: GenericEventData<T>): void;

    /**
     * Obtains the number of subscriptions to a specified event of the Emitter instance.
     *
     * @param { string } eventId - Event ID, which cannot be empty or exceed 10,240 bytes. Excess content will be
     *     truncated.
     * @returns { long } Number of subscriptions to a specified event.
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getListenerCount(eventId: string): long;
  }
}

export default emitter;