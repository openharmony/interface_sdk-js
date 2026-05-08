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
 * 本模块提供了在同一进程不同线程间或同一线程内发送和处理事件的能力，支持持续订阅事件、单次订阅事件、取消订阅事件及发送事件到事件队列。
 *
 * @syscap SystemCapability.Notification.Emitter
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace emitter {
  /**
   * 持续订阅指定的事件，并在接收到该事件时，执行对应的回调处理函数。
   *
   * @param { InnerEvent } event - 持续订阅的事件，其中[EventPriority]{@link emitter.EventPriority}，在订阅事件时无需指定，也不生效。
   * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function on(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * 持续订阅指定的事件，并在接收到该事件时，执行对应的回调处理函数。
   *
   * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function on(eventId: string, callback: Callback<EventData>): void;

  /**
   * 持续订阅指定的事件，并在接收到该事件时，使用callback异步回调。
   *
   * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onEventData(eventId: string, callback: Callback<EventData>): void;

  /**
   * 持续订阅指定的事件，并在接收到该事件时，执行对应的回调处理函数。
   *
   * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<GenericEventData<T>> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function on<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * 持续订阅指定的事件，并在接收到该事件时，使用callback异步回调。
   *
   * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<GenericEventData<T>> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * 单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。
   *
   * @param { InnerEvent } event - 单次订阅的事件，其中[EventPriority]{@link emitter.EventPriority}，在订阅事件时无需指定，也不生效。
   * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function once(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * 单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。
   *
   * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function once(eventId: string, callback: Callback<EventData>): void;

  /**
   * 单次订阅指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。
   *
   * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onceEventData(eventId: string, callback: Callback<EventData>): void;

  /**
   * 单次订阅指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。
   *
   * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<GenericEventData<T>> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function once<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * 单次订阅当前Emitter类实例指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。使用callback异步回调。
   *
   * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<GenericEventData<T>> } callback - 接收到该事件时需要执行的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * 取消事件ID为eventId的所有订阅。
   * 
   * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
   *
   * @param { long } eventId - 事件ID。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function off(eventId: long): void;

  /**
   * 取消事件ID为eventId的所有订阅。
   * 
   * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
   *
   * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function off(eventId: string): void;

  /**
   * 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用[on]{@link emitter.on(event: InnerEvent, callback: Callback<EventData>)}或
   * [once]{@link emitter.once(event: InnerEvent, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。
   * 
   * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
   *
   * @param { long } eventId - 事件ID。
   * @param { Callback<EventData> } callback - 事件的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function off(eventId: long, callback: Callback<EventData>): void;

  /**
   * 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用[on]{@link emitter.on(eventId: string, callback: Callback<EventData>)}或
   * [once]{@link emitter.once(eventId: string, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。
   * 
   * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
   *
   * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<EventData> } callback - 事件的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function off(eventId: string, callback: Callback<EventData>): void;

  /**
   * 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用
   * [onEventData]{@link emitter.onEventData(eventId: string, callback: Callback<EventData>)}或
   * [onceEventData]{@link emitter.onceEventData(eventId: string, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。
   * 
   * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
   *
   * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<EventData> } callback - 事件的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function offEventData(eventId: string, callback: Callback<EventData>): void;

  /**
   * 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用
   * [on]{@link emitter.on<T>(eventId: string, callback: Callback<GenericEventData<T>>)}或
   * [once]{@link emitter.once<T>(eventId: string, callback: Callback<GenericEventData<T>>)}接口订阅callback时，该接口才生效。
   * 
   * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
   *
   * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<GenericEventData<T>> } callback - 事件的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * 取消订阅当前Emitter类实例的事件。仅当已使用
   * [onGenericEventData]{@link emitter.onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>)}或
   * [onceGenericEventData]{@link emitter.onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>)}接口订阅了事件ID为eventId且回调处理函数为callback的事件时，该接口才生效。
   * 
   * 使用该接口取消事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未执行的事件将被取消。
   *
   * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Callback<GenericEventData<T>> } callback - 事件的回调处理函数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function offGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

  /**
   * 发送指定事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
   * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
   * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
   * 
   * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
   *
   * @param { InnerEvent } event - 发送的事件，其中[EventPriority]{@link emitter.EventPriority}用于指定事件被发送的优先级。
   * @param { EventData } [data] - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function emit(event: InnerEvent, data?: EventData): void;

  /**
   * 发送指定事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
   * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
   * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
   * 
   * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { EventData } [data] - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function emit(eventId: string, data?: EventData): void;

  /**
   * 发送指定事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md)
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string): void;

  /**
   * 发送指定事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md)
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { EventData } data - 事件携带的数据。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string, data: EventData): void;

  /**
   * 发送指定事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
   * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
   * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
   * 
   * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { GenericEventData<T> } [data] - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function emit<T>(eventId: string, data?: GenericEventData<T>): void;

  /**
   * 发送指定事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md)
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { GenericEventData<T> } data - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit<T>(eventId: string, data: GenericEventData<T>): void;

  /**
   * 发送指定优先级事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
   * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
   * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
   * 
   * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Options } options - 事件优先级。
   * @param { EventData } [data] - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   */
  function emit(eventId: string, options: Options, data?: EventData): void;

  /**
   * 发送指定优先级事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md)
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Options } options - 事件优先级。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string, options: Options): void;

  /**
   * 发送指定优先级事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md)
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Options } options - 事件优先级。
   * @param { EventData } data - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit(eventId: string, options: Options, data: EventData): void;

  /**
   * 发送指定优先级事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
   * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
   * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
   * 
   * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Options } options - 事件优先级。
   * @param { GenericEventData<T> } [data] - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function emit<T>(eventId: string, options: Options, data?: GenericEventData<T>): void;

  /**
   * 发送指定优先级事件。
   * 
   * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[ArkTS-Sta并发迁移规则](../../quick-start/arkts-dyn-to-sta-concurrency-rules.md)
   *
   * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @param { Options } options - 事件优先级。
   * @param { GenericEventData<T> } data - 事件携带的数据，默认为空。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @since 23 static
   */
  function emit<T>(eventId: string, options: Options, data: GenericEventData<T>): void;

  /**
   * 获取指定事件的订阅数。
   *
   * @param { long | string } eventId - 事件ID，string类型的eventId取值为长度不超过10240字节的自定义字符串，且不可为空字符。
   * @returns { long } 指定事件的订阅数。
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function getListenerCount(eventId: long | string): long;

  /**
   * 发送事件时传递的数据。
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export interface EventData {
    /**
     * 发送事件时传递的数据，支持数据类型包括Array、ArrayBuffer、Boolean、DataView、Date、Error、Map、Number、Object、Primitive（除了symbol）、RegExp、Set
     * 、String、TypedArray，数据大小最大为16M。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    data?: { [key: string]: any };

    /**
     * 发送事件时传递的数据，支持数据类型包括Array、ArrayBuffer、Boolean、DataView、Date、Error、Map、Number、Object、Primitive（除了symbol）、RegExp、Set
     * 、String、TypedArray，数据大小最大为16M。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform
     * @since 23 static
     */
    data?: Record<string, RecordData> | ESValue;
  }

  /**
   * 订阅或发送的事件，订阅事件时`EventPriority`不生效。
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export interface InnerEvent {
    /**
     * 事件ID，由开发者定义，用于辨别事件。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    eventId: long;

    /**
     * 事件的优先级，默认值为EventPriority.LOW。
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
   * 表示事件的优先级。
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export enum EventPriority {
    /**
     * 表示事件先于HIGH优先级投递。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    IMMEDIATE = 0,

    /**
     * 表示事件先于LOW优先级投递。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    HIGH,

    /**
     * 表示事件优于IDLE优先级投递，事件的默认优先级是LOW。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    LOW,

    /**
     * 表示在没有其他事件的情况下，才投递该事件。
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
   * 发送事件的优先级。
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Options {
    /**
     * 事件的优先级，默认值为EventPriority.LOW。
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
   * 发送事件时传递的泛型数据。
   *
   * @syscap SystemCapability.Notification.Emitter
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface GenericEventData<T> {
    /**
     * 发送事件时传递的数据。T：泛型类型。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    data?: T;

    /**
     * 发送事件时传递的数据。T：泛型类型。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @crossplatform
     * @since 23 static
     */
    data?: T | ESValue;
  }

  /**
   * 该功能支持在同一进程的同一Emitter类实例中，跨不同线程或同一线程内发送和处理事件。它能够实现持续订阅事件、单次订阅事件、取消订阅事件以及将事件发送到事件队列。
   *
   * @syscap SystemCapability.Notification.Emitter
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   * @class Emitter
   */
  export class Emitter {
    /**
     * 构造函数。
     *
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 持续订阅当前Emitter类实例指定的事件，并在接收到该事件时，使用callback异步回调。
     *
     * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<EventData> } callback - 回调函数，在接收到该事件时被调用。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    on(eventId: string, callback: Callback<EventData>): void;

    /**
     * 持续订阅当前Emitter类实例指定的事件，并在接收到该事件时，使用callback异步回调。
     *
     * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<GenericEventData<T>> } callback - 回调函数，在接收到该事件时被调用。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    on<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * 单次订阅当前Emitter类实例指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。使用callback异步回调。
     *
     * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<EventData> } callback - 回调函数，在接收到该事件时被调用。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    once(eventId: string, callback: Callback<EventData>): void;

    /**
     * 单次订阅当前Emitter类实例指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。使用callback异步回调。
     *
     * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<GenericEventData<T>> } callback - 回调函数，在接收到该事件时被调用。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    once<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * 持续订阅当前Emitter类实例指定的事件，并在接收到该事件时，使用callback异步回调。
     *
     * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onEventData(eventId: string, callback: Callback<EventData>): void;

    /**
     * 持续订阅当前Emitter类实例指定的事件，并在接收到该事件时，使用callback异步回调。
     *
     * @param { string } eventId - 持续订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<GenericEventData<T>> } callback - 接收到该事件时需要执行的回调处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * 单次订阅当前Emitter类实例指定的事件，在接收到该事件且执行完对应的回调函数后，自动取消订阅。使用callback异步回调。
     *
     * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<EventData> } callback - 接收到该事件时需要执行的回调处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onceEventData(eventId: string, callback: Callback<EventData>): void;

    /**
     * 单次订阅当前Emitter类实例指定的事件，在接收到该事件且执行完相应的回调函数后，自动取消订阅。使用callback异步回调。
     *
     * @param { string } eventId - 单次订阅的事件。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<GenericEventData<T>> } callback - 接收到该事件时需要执行的回调处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * 取消当前Emitter类实例事件ID为eventId的所有订阅。
     *
     * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.Emitter#emit(eventId: string, data?: EventData)}接口发布但尚未被执行的事件将被取消。
     *
     * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    off(eventId: string): void;

    /**
     * 取消订阅当前Emitter类实例的事件。仅当已使用[on]{@link emitter.Emitter#on(eventId: string, callback: Callback<EventData>)}或
     * [once]{@link emitter.Emitter#once(eventId: string, callback: Callback<EventData>)}接口订阅了事件ID为eventId且回调处理函数为
     * callback的事件时，该接口才生效。
     *
     * 使用该接口取消事件订阅后，已通过[emit]{@link emitter.Emitter#emit(eventId: string, data?: EventData)}接口发布但尚未执行的事件将被取消。
     *
     * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<EventData> } callback - 回调函数，指定要取消订阅的事件处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    off(eventId: string, callback: Callback<EventData>): void;

    /**
     * 取消事件ID为eventId且回调处理函数为callback的订阅。仅当已使用
     * [onEventData]{@link emitter.onEventData(eventId: string, callback: Callback<EventData>)}或
     * [onceEventData]{@link emitter.onceEventData(eventId: string, callback: Callback<EventData>)}接口订阅callback时，该接口才生效。
     *
     * 使用该接口取消某个事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未被执行的事件将被取消。
     *
     * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<EventData> } callback - 事件的回调处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    offEventData(eventId: string, callback: Callback<EventData>): void;

    /**
     * 取消订阅当前Emitter类实例的事件。仅当已使用
     * [on]{@link emitter.Emitter#on<T>(eventId: string, callback: Callback<GenericEventData<T>>)}或
     * [once]{@link emitter.Emitter#once<T>(eventId: string, callback: Callback<GenericEventData<T>>)}接口订阅了事件ID为eventId且
     * 回调处理函数为callback的事件时，该接口才生效。
     *
     * 使用该接口取消事件订阅后，已通过[emit]{@link emitter.Emitter#emit<T>(eventId: string, data?: GenericEventData<T>)}接口发布但尚未执行的事件将被取
     * 消。
     *
     * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<GenericEventData<T>> } callback - 回调函数，指定要取消订阅的事件处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     */
    off<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * 取消订阅当前Emitter类实例的事件。仅当已使用
     * [onGenericEventData]{@link emitter.onGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>)}或
     * [onceGenericEventData]{@link emitter.onceGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>)}接口订阅了事件ID为eventId且回调处理函数为callback的事件时，该接口才生效。
     *
     * 使用该接口取消事件订阅后，已通过[emit]{@link emitter.emit(eventId: string)}接口发布但尚未执行的事件将被取消。
     *
     * @param { string } eventId - 事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Callback<GenericEventData<T>> } callback - 事件的回调处理函数。
     * @syscap SystemCapability.Notification.Emitter
     * @since 23 static
     */
    offGenericEventData<T>(eventId: string, callback: Callback<GenericEventData<T>>): void;

    /**
     * 发送指定事件到当前Emitter类实例。
     *
     * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
     * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
     * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
     *
     * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
     *
     * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { EventData } [data] - 事件携带的数据，默认为空。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit(eventId: string, data?: EventData): void;

    /**
     * 发送指定事件到当前Emitter类实例。
     *
     * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
     * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
     * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
     *
     * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
     *
     * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { GenericEventData<T> } [data] - 事件携带的数据，默认为空。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit<T>(eventId: string, data?: GenericEventData<T>): void;

    /**
     * 发送指定事件到当前Emitter类实例。
     *
     * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
     * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
     * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
     *
     * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
     *
     * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Options } options - 事件优先级。
     * @param { EventData } [data] - 事件携带的数据，默认为空。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit(eventId: string, options: Options, data?: EventData): void;

    /**
     * 发送指定优先级事件到当前Emitter类实例。
     *
     * 该接口支持跨线程传输数据对象，需要遵循数据跨线程传输的规格约束，详见[线程间通信对象](docroot://arkts-utils/serializable-overview.md)。目前不支持使用
     * [@State装饰器](docroot://ui/state-management/arkts-state.md)、
     * [@Observed装饰器](docroot://ui/state-management/arkts-observed-and-objectlink.md)等装饰器修饰的复杂类型数据。
     *
     * 该接口发布某个事件后，不保证该事件立刻执行，执行时间取决于事件队列里面的事件数量以及各事件的执行效率。
     *
     * @param { string } eventId - 发送的事件ID。取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @param { Options } options - 事件优先级。
     * @param { GenericEventData<T> } [data] - 事件携带的数据，默认为空。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    emit<T>(eventId: string, options: Options, data?: GenericEventData<T>): void;

    /**
     * 获取当前Emitter类实例指定事件的订阅数。
     *
     * @param { string } eventId - 事件ID，取值为长度不超过10240字节的自定义字符串，且不可为空字符。
     * @returns { long } 指定事件的订阅数。
     * @syscap SystemCapability.Notification.Emitter
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    getListenerCount(eventId: string): long;
  }
}

export default emitter;