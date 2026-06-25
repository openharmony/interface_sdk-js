/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * Worker构造函数的选项，用于为Worker添加其他信息。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
export interface WorkerOptions {
  /**
   * Worker执行脚本的模式类型，暂不支持module类型，默认值为classic。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  type?: 'classic' | 'module';

  /**
   * Worker的名称。默认值为undefined。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  name?: string;

  /**
   * 表示Worker共享功能，此接口暂不支持。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   */
  shared?: boolean;

  /**
   * 表示Worker线程优先级。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  priority?: ThreadWorkerPriority;
}

/**
 * Worker线程的优先级枚举，各优先级对应关系请参考QoS等级定义。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 22]
 * @atomicservice
 * @since 18 dynamiconly
 */
export enum ThreadWorkerPriority {
  /**
   * 适用于打开文档等用户触发并且可以看到进展的任务，任务在几秒钟之内完成。对应QOS_USER_INITIATED。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  HIGH = 0,

  /**
   * 任务完成需要几秒钟。是ThreadWorkerPriority的默认值。对应QOS_DEFAULT。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  MEDIUM = 1,

  /**
   * 适用于下载等不需要立即看到响应效果的任务，任务完成需要几秒到几分钟。对应QOS_UTILITY。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  LOW = 2,

  /**
   * 适用于数据同步等用户不可见的后台任务，任务完成需要几分钟甚至几小时。对应QOS_BACKGROUND。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamiconly
   */
  IDLE = 3,

  /**
   * 适用于页面加载等越快越好的关键任务，任务几乎是瞬间完成的。对应QOS_DEADLINE_REQUEST。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 20 dynamiconly
   */
  DEADLINE = 4,

  /**
   * 适用于UI线程、动画渲染等用户交互任务，任务是即时的。对应QOS_USER_INTERACTIVE。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 20 dynamiconly
   */
  VIP = 5
}

/**
 * 表示发送消息时的优先级枚举，各优先级对应关系请参考EventHandler等级定义。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
export enum Priority {
  /**
   * 立即执行优先级，对应EventHandler IMMEDIATE优先级。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  IMMEDIATE = 1,

  /**
   * 高优先级，对应EventHandler HIGH优先级。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  HIGH = 2,

  /**
   * 低优先级，对应EventHandler LOW优先级。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  LOW = 3,

  /**
   * 后台优先级，对应EventHandler IDLE优先级。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  IDLE = 4
}

/**
 * 事件类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
export interface Event {
  /**
   * 指定事件的类型。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   */
  readonly type: string;

  /**
   * 事件创建时的时间戳（精度为毫秒），目前不支持。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   */
  readonly timeStamp: number;
}

/**
 * 错误事件类用于表示Worker执行过程中出现异常的详细信息，ErrorEvent类继承Event。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
export interface ErrorEvent extends Event {
  /**
   * 异常发生的错误信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly message: string;

  /**
   * 出现异常所在的文件。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly filename: string;

  /**
   * 异常所在的行数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly lineno: number;

  /**
   * 异常所在的列数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly colno: number;

  /**
   * 异常类型。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly error: Object;
}

/**
 * 消息类，持有Worker线程间传递的数据，MessageEvent类继承Event。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 7 dynamiconly
 */
export interface MessageEvent<T> extends Event {
  /**
   * 异常发生时传递的数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   */
  readonly data: T;
}

/**
 * 消息类，持有Worker线程间传递的数据。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
export interface MessageEvents extends Event {
  /**
   * 异常发生时传递的数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  readonly data: any;
}

/**
 * 明确数据传递过程中需要转移所有权的对象，这些对象必须是ArrayBuffer，在发送方的上下文中将变为不可用，仅在接收方可用。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
export interface PostMessageOptions {
  /**
   * ArrayBuffer数组，用于传递所有权。该数组中不可传入null。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  transfer?: Object[];
}

/**
 * 事件监听类用于处理事件。
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventListener
 */
export interface EventListener {
  /**
   * 指定要调用的回调函数。
   *
   * @param { Event } evt - evt evt 回调的事件类。
   * @returns { void | Promise<void> }
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventListener.(event: Event)
   */
  (evt: Event): void | Promise<void>;
}

/**
 * 事件监听类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamiconly
 */
export interface WorkerEventListener {
  /**
   * 指定要调用的回调函数。
   *
   * @param { Event } event - 回调的事件类。
   * @returns { void | Promise<void> }
   * @throws { BusinessError } 10200004 - Worker instance is not running.
   * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   */
  (event: Event): void | Promise<void>;
}

/**
 * 表示消息类型。预留数据类型，暂未实现。
 *
 * @unionmember { 'message' }
 * @unionmember { 'messageerror' }
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 7 dynamiconly
 */
type MessageType = 'message' | 'messageerror';

/**
 * 用于管理Worker的监听事件。
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventTarget
 */
export interface EventTarget {
  /**
   * 向Worker添加一个事件监听。
   *
   * @param { string } type - 监听的事件类型。
   * @param { EventListener } listener - listener 当指定类型的事件发生时调用的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.addEventListener
   */
  addEventListener(type: string, listener: EventListener): void;

  /**
   * 分发定义在Worker的事件。
   *
   * @param { Event } event - 需要分发的事件。
   * @returns { boolean }
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.dispatchEvent
   */
  dispatchEvent(event: Event): boolean;

  /**
   * 移除Worker的事件监听。
   *
   * @param { string } type - 需要移除的事件类型。
   * @param { EventListener } callback - 要移除的事件监听的回调函数。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.removeEventListener
   */
  removeEventListener(type: string, callback?: EventListener): void;

  /**
   * 移除Worker所有的事件监听。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.WorkerEventTarget.removeAllListener
   */
  removeAllListener(): void;
}

/**
 * 用于管理Worker的监听事件。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
export interface WorkerEventTarget {
  /**
   * 向Worker线程的实例对象添加事件监听。该接口与on9+接口功能一致。
   *
   * @param { string } type - 监听的事件类型。
   * @param { WorkerEventListener } listener - listener 当指定类型的事件发生时调用的回调函数。
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   */
  addEventListener(type: string, listener: WorkerEventListener): void;
  /**
   * 分发定义在Worker线程的事件。
   *
   * @param { Event } event - 需要分发的事件。
   * @returns { boolean }
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   */
  dispatchEvent(event: Event): boolean;
  /**
   * 移除Worker线程实例对象中类型为type的事件监听。该接口与off9+接口功能一致。
   *
   * @param { string } type - 需要移除的事件类型。
   * @param { WorkerEventListener } [callback] - 移除监听事件后执行的回调函数。
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   */
  removeEventListener(type: string, callback?: WorkerEventListener): void;
  /**
   * 移除Worker线程的实例对象所有的事件监听。
   *
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   */
  removeAllListener(): void;
}

/**
 * Worker线程自身的运行环境，与宿主线程环境隔离。
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.worker.GlobalScope
 */
declare interface WorkerGlobalScope extends EventTarget {
  /**
   * Worker的名字，new Worker时指定。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.GlobalScope.name
   */
  readonly name: string;

  /**
   * onerror属性用于指定Worker在执行过程中发生异常被调用的回调函数，
   * 该回调函数在Worker线程中执行。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.GlobalScope.onerror
   */
  onerror?: (ev: ErrorEvent) => void;

  /**
   * 为self指定的type属性。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.GlobalScope.self
   */
  readonly self: WorkerGlobalScope & typeof globalThis;
}

/**
 * Worker线程自身的运行环境，GlobalScope类继承WorkerEventTarget。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
declare interface GlobalScope extends WorkerEventTarget {
  /**
   * Worker的名字，new Worker时指定。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  readonly name: string;

  /**
   * Worker在执行过程中发生异常被调用的回调函数，该回调函数在Worker线程中执行。
   * 其中ev类型为ErrorEvent，表示收到的异常数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  onerror?: (ev: ErrorEvent) => void;
  /**
   * GlobalScope本身。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  readonly self: GlobalScope & typeof globalThis;
}

/**
 * Worker线程自身的运行环境，与宿主线程环境隔离。
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.worker.ThreadWorkerGlobalScope
 */
export interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
  /**
   * onmessage属性用于指定当Worker线程收到来自其宿主线程通过
   * postMessage接口发送的消息时被调用的事件处理程序，
   * 该事件处理程序在Worker线程中执行。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessage
   */
  onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  /**
   * onmessage属性用于指定当Worker线程收到一条无法被反序列化的消息时
   * 被调用的事件处理程序，该事件处理程序在Worker线程中执行。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessageerror
   */
  onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  /**
   * 销毁Worker线程，终止Worker接收消息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.close
   */
  close(): void;

  /**
   * Worker线程向宿主线程发送消息。
   *
   * @param { Object } messageObject - messageObject 发送至宿主线程的数据。
   * @param { Transferable[] } transfer - transfer 数组不可包含null。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
   */
  postMessage(messageObject: Object, transfer: Transferable[]): void;

  /**
   * Worker线程向宿主线程发送消息。
   *
   * @param { Object } messageObject - messageObject 发送至宿主线程的数据。
   * @param { PostMessageOptions } [options] - 可为postMessage设置的选项。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
   */
  postMessage(messageObject: Object, options?: PostMessageOptions): void;

  /**
   * Worker线程向宿主线程发送消息。
   *
   * @param { Object } messageObject - messageObject 发送至宿主线程的数据。
   * @param { ArrayBuffer[] } transfer - transfer 数组不可包含null。
   * @syscap SystemCapability.Utils.Lang
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
   */
  postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;
}

/**
 * Worker线程用于与宿主线程通信的类。其中postMessage接口用于向宿主线程发送消息，close接口用于销毁Worker线程。
 * ThreadWorkerGlobalScope类继承GlobalScope9+。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
export interface ThreadWorkerGlobalScope extends GlobalScope {
  /**
   * 当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时调用的事件处理程序，
   * 该事件处理程序在Worker线程中执行。其中this指调用者对象本身ThreadWorkerGlobalScope，
   * ev类型为MessageEvents，表示收到的消息数据。
   *
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  onmessage?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;

  /**
   * 当Worker线程收到一条无法被反序列化的消息时调用的事件处理程序，
   * 该事件处理程序在Worker线程中执行。其中this指调用者对象本身ThreadWorkerGlobalScope，
   * ev类型为MessageEvents，表示收到的消息数据。
   *
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  onmessageerror?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;

  /**
   * 销毁Worker线程，终止Worker接收消息。
   *
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  close(): void;

  /**
   * Worker线程通过转移对象所有权的方式向宿主线程发送消息。
   *
   * @param { Object } messageObject - 发送至宿主线程的数据，该数据对象必须是可序列化对象。
   *     支持的参数类型请参考序列化支持类型。
   * @param { ArrayBuffer[] } transfer - 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权
   *     会被转移到宿主线程，转移后该对象仅在宿主线程中可用。该数组不可传入null。
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;

  /**
   * Worker线程通过转移对象所有权或拷贝数据的方式向宿主线程发送消息。
   *
   * @param { Object } messageObject - 发送至宿主线程的数据，该数据对象必须是可序列化对象。
   *     支持的参数类型请参考序列化支持类型。
   * @param { PostMessageOptions } [options] - 当填入该参数时，其作用与传入ArrayBuffer[]相同，
   *     该数组中对象的所有权会被转移到宿主线程，在Worker线程中将变为不可用，仅在宿主线程中可用。
   *     若不填入该参数，默认设置为undefined，通过拷贝数据的方式传输信息到宿主线程。
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  postMessage(messageObject: Object, options?: PostMessageOptions): void;

  /**
   * Worker线程向宿主线程发送消息，消息中的Sendable对象通过引用传递，
   * 非Sendable对象通过拷贝数据的方式传递。
   *
   * @param { Object } message - 发送至宿主线程的数据，该数据对象必须是可序列化或可共享。
   *     支持的序列化类型请参考序列化支持类型。
   *     支持的共享类型请参考Sendable支持的数据类型。
   * @param { ArrayBuffer[] } [transfer] - 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权
   *     会被转移到宿主线程，转移后该对象仅在宿主线程中可用。该数组不可传入null。默认值为空数组。
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  postMessageWithSharedSendable(message: Object, transfer?: ArrayBuffer[]): void;

  /**
   * Worker线程调用宿主线程上注册的对象的指定方法，此调用对Worker线程同步，对宿主线程异步，
   * 返回值通过数据拷贝传递。
   *
   * @param { string } instanceName - 注册对象时使用的键，用于在宿主线程中查找对象。
   * @param { string } methodName - 在已注册对象上调用的方法名。该方法不能使用async修饰，
   *     也不能基于底层异步机制返回结果，否则会抛出异常。
   * @param { number } timeout - 表示从Worker线程发起调用开始到在主线程中执行目标方法的最大等待时间，
   *     单位为ms，取整数，取值范围为[1-5000]。也可取特殊值0，此时表示本次调用等待时间为5000ms。
   *     该值应为整数。
   *     <br>单位：ms。
   * @param { Object[] } args - 注册对象上所调用方法的参数数组。
   * @returns { Object } 返回值为调用方法在宿主线程的返回值，无返回值时返回void。
   * @throws { BusinessError } 10200004 - Worker instance is not running.
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @throws { BusinessError } 10200019 - The globalCallObject is not registered.
   * @throws { BusinessError } 10200020 - The method to be called is not callable or is an async method or a generator.
   * @throws { BusinessError } 10200021 - The global call exceeds the timeout.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamiconly
   */
  callGlobalCallObjectMethod(instanceName: string, methodName: string, timeout: number, ...args: Object[]): Object;

  /**
   * Worker线程通过转移对象所有权的方式向宿主线程发送插队消息，并插入到对应优先级队列的队头。
   * 除Worker线程向主线程发送的场景外，该接口与postMessage功能一致。
   *
   * @param { Object } message - 发送至宿主线程的数据，该数据对象必须是可序列化或可共享。
   *     支持的序列化类型请参考序列化支持类型。
   *     支持的共享类型请参考Sendable支持的数据类型。
   * @param { Priority } priority - Worker EventHandler的优先级。
   * @param { ArrayBuffer[] } [transfer] - 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权
   *     会被转移到主线程，转移后该对象仅在主线程中可用。该数组不可传入null。
   * @throws { BusinessError } 10200004 - The Worker instance is not running.
   * @throws { BusinessError } 10200006 - An exception occurred during serialization.
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  postMessageAtFront?(message: Object, priority: Priority, transfer?: ArrayBuffer[]): void;
}

/**
 * 表示异常回调类型。
 *
 * @param { ErrorEvent } err - 错误事件类，
 *     表示Worker执行过程中出现的异常信息。
 * @returns { void }
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 22]
 * @atomicservice
 * @since 18 dynamiconly
 */
type ErrorCallback = (err: ErrorEvent) => void;

/**
 * JS跨线程通信工具。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
declare namespace worker {
  /**
   * 使用以下方法前，需先构造ThreadWorker实例。ThreadWorker类继承WorkerEventTarget。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  class ThreadWorker implements WorkerEventTarget {
    /**
     * ThreadWorker构造函数，用于创建一个ThreadWorker实例。
     *
     * @param { string } scriptURL - Worker线程文件的路径。详细规则请参考
     *     文件路径注意事项。
     * @param { WorkerOptions } [options] - 可为Worker实例设置的选项。
     * @throws { BusinessError } 10200003 - Worker initialization failed.
     * @throws { BusinessError } 10200007 - The worker file path is invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    constructor(scriptURL: string, options?: WorkerOptions);
    /**
     * 当Worker线程销毁时被调用的事件处理程序，该处理程序在宿主线程中执行。回调函数的code参数类型为number，
     * 异常退出时code为1，正常退出时code为0。默认值为undefined。
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    onexit?: (code: number) => void;
    /**
     * 用于处理onmessage回调函数中同步代码产生的异常，处理程序在宿主线程中执行。
     * 回调函数的err类型为ErrorEvent，表示收到的异常数据。
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    onerror?: (err: ErrorEvent) => void;

    /**
     * 表示Worker线程生命周期内发生异常被调用的事件处理程序，处理程序在宿主线程中执行。
     *
     * onerror接口仅能捕获onmessage回调中同步方法产生的异常，
     * 无法捕获多线程回调和模块化相关异常。
     * 一旦捕获异常，Worker线程会进入销毁流程，无法继续使用。
     *
     * onAllErrors接口可以捕获Worker线程的onmessage回调、timer回调以及文件执行等流程中产生的全局异常。
     * 捕获异常后，Worker线程仍然存活，可以继续使用。
     * 推荐使用onAllErrors替代onerror。
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamiconly
     */
    onAllErrors?: ErrorCallback;

    /**
     * 表示宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息时
     * 被调用的事件处理程序，处理程序在宿主线程中执行。其中回调函数中event类型为MessageEvents，
     * 表示收到的Worker线程发送的消息数据。
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    onmessage?: (event: MessageEvents) => void;
    /**
     * 当Worker线程收到一条无法被序列化的消息时被调用的事件处理程序，
     * 该事件处理程序在宿主线程中执行。
     * 其中回调函数中event类型为MessageEvents，表示收到的消息数据。
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    onmessageerror?: (event: MessageEvents) => void;
    /**
     * 宿主线程通过转移对象所有权的方式向Worker线程发送消息。
     *
     * @param { Object } message - 发送至Worker线程的数据，该数据对象必须是可序列化对象。
     *     支持的参数类型请参考序列化支持类型。
     * @param { ArrayBuffer[] } transfer - 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权
     *     会被转移到Worker线程，转移后该对象仅在Worker线程中可用。该数组不可传入null。
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    postMessage(message: Object, transfer: ArrayBuffer[]): void;
    /**
     * 宿主线程可以通过转移对象所有权或拷贝数据的方式向Worker线程发送消息。
     *
     * @param { Object } message - 发送至Worker线程的数据，该数据对象必须是可序列化对象。
     *     支持的参数类型请参考序列化支持类型。
     * @param { PostMessageOptions } [options] - 当填入该参数时，其作用与传入ArrayBuffer[]相同，
     *     该数组中对象的所有权会被转移到Worker线程，在宿主线程中将变为不可用，仅在Worker线程中可用。
     *     若不填入该参数，默认设置为undefined，通过拷贝数据的方式传输信息到Worker线程。
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    postMessage(message: Object, options?: PostMessageOptions): void;

    /**
     * 宿主线程向Worker线程发送消息，消息中的Sendable对象通过引用传递，
     * 非Sendable对象通过拷贝数据的方式传递。
     *
     * @param { Object } message - 发送至Worker线程的数据，该数据对象必须是可序列化或可共享。
     *     支持的序列化类型请参考序列化支持类型。
     *     支持的共享类型请参考Sendable支持的数据类型。
     * @param { ArrayBuffer[] } [transfer] - 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权
     *     会被转移到Worker线程，转移后该对象仅在Worker线程中可用。该数组不可传入null。默认值为空数组。
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    postMessageWithSharedSendable(message: Object, transfer?: ArrayBuffer[]): void;

    /**
     * 向宿主线程的Worker实例对象添加一个事件监听，该接口与addEventListener9+接口功能一致。
     *
     * @param { string } type - 监听的事件类型。
     * @param { WorkerEventListener } listener - 当指定类型的事件发生时调用的回调函数。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    on(type: string, listener: WorkerEventListener): void;
    /**
     * 向宿主线程的Worker实例对象添加一个事件监听，该事件监听只执行一次，执行完后会自动删除。
     *
     * @param { string } type - 监听的事件类型。
     * @param { WorkerEventListener } listener - listener 当指定类型的事件发生时调用的回调函数。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    once(type: string, listener: WorkerEventListener): void;
    /**
     * 移除宿主线程的Worker实例对象中类型为type的事件监听，该接口与removeEventListener9+接口功能一致。
     *
     * @param { string } type - 需要移除的事件类型。
     * @param { WorkerEventListener } [listener] - listener 要移除的事件监听的回调函数。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    off(type: string, listener?: WorkerEventListener): void;
    /**
     * 销毁Worker线程，终止Worker接收消息。
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    terminate(): void;
    /**
     * 向宿主线程的Worker实例对象添加一个事件监听，该接口与on9+接口功能一致。
     *
     * @param { string } type - 监听的事件类型。
     * @param { WorkerEventListener } listener 当指定类型的事件发生时调用的回调函数。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    addEventListener(type: string, listener: WorkerEventListener): void;
    /**
     * 分发定义在Worker线程的事件。
     *
     * @param { Event } event - 需要分发的事件。
     * @returns { boolean }
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    dispatchEvent(event: Event): boolean;
    /**
     * 移除宿主线程的Worker实例对象中类型为type的事件监听，该接口与off9+接口功能一致。
     *
     * @param { string } type - 需要移除的事件类型。
     * @param { WorkerEventListener } [callback] - 移除监听事件后执行的回调函数。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    removeEventListener(type: string, callback?: WorkerEventListener): void;
    /**
     * 移除宿主线程中Worker实例对象的所有事件监听。
     *
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     */
    removeAllListener(): void;

    /**
     * 在宿主线程的ThreadWorker实例上注册一个对象，该对象的方法可在Worker线程中通过
     * callGlobalCallObjectMethod调用。
     *
     * @param { string } instanceName - 注册对象时使用的键，调用时通过该键值找到被注册的对象。
     * @param { Object } globalCallObject - 被注册的对象，ThreadWorker实例会持有该对象的强引用。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    registerGlobalCallObject(instanceName: string, globalCallObject: Object): void;

    /**
     * 取消在宿主线程ThreadWorker实例上注册的对象，该方法会释放ThreadWorker实例与目标对象之间的强引用。
     * 如果无匹配对象，该方法不会报错。
     *
     * @param { string } [instanceName] - 注册对象时使用的键。此参数不填时，
     *     会释放ThreadWorker实例中所有已注册的对象。
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    unregisterGlobalCallObject(instanceName?: string): void;
  }

  /**
   * RestrictedWorker类包含所有Worker功能。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi [since 12]
   * @since 11 dynamiconly
   */
  class RestrictedWorker extends ThreadWorker {
    /**
     * 创建一个worker实例。
     *
     * @param { string } scriptURL - scriptURL Worker线程执行的脚本URL。
     * @param { WorkerOptions } [options] - 可为worker设置的选项。
     * @throws { BusinessError } 10200003 - Worker initialization failure.
     * @throws { BusinessError } 10200007 - The worker file patch is invalid path.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi [since 12]
     * @since 11 dynamiconly
     */
    constructor(scriptURL: string, options?: WorkerOptions);
  }

  /**
   * Worker类包含所有Worker功能。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.ThreadWorker
   */
  class Worker implements EventTarget {
    /**
     * 创建一个worker实例。
     *
     * @param { string } scriptURL - scriptURL worker执行的脚本URL。
     * @param { WorkerOptions } options - 可为worker设置的选项。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.constructor
     */
    constructor(scriptURL: string, options?: WorkerOptions);

    /**
     * 当Worker销毁时被调用的事件处理程序，处理程序在宿主线程中执行。回调函数中code类型为number，
     * 异常退出为1，正常退出为0。默认值为undefined。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onexit
     */
    onexit?: (code: number) => void;

    /**
     * onerror属性用于指定Worker在执行过程中发生异常时被调用的事件处理程序，
     * 该事件处理程序在宿主线程中执行。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onerror
     */
    onerror?: (err: ErrorEvent) => void;

    /**
     * onmessage属性用于指定当宿主线程接收到来自其创建的Worker
     * 通过parentPort.postMessage发送的消息时被调用的事件处理程序，
     * 该事件处理程序在宿主线程中执行。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onmessage
     */
    onmessage?: (event: MessageEvent) => void;

    /**
     * onmessage属性用于指定当Worker收到一条无法被序列化的消息时
     * 被调用的事件处理程序，该事件处理程序在宿主线程中执行。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.onmessageerror
     */
    onmessageerror?: (event: MessageEvent) => void;

    /**
     * 向Worker线程发送消息。
     * 数据通过结构化克隆算法传递。
     *
     * @param { Object } message - 发送至Worker的数据。
     * @param { ArrayBuffer[] } transfer - transfer 可转移的ArrayBuffer实例对象。
     *     transferList数组不可包含null。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.postMessage
     */
    postMessage(message: Object, transfer: ArrayBuffer[]): void;

    /**
     * 向Worker线程发送消息。
     * 数据通过结构化克隆算法传递。
     *
     * @param { Object } message - 发送至Worker的数据。
     * @param { PostMessageOptions } [options] - 可为postMessage设置的选项。
     *     transferList数组不可包含null。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.postMessage
     */
    postMessage(message: Object, options?: PostMessageOptions): void;

    /**
     * 向Worker添加一个事件监听。
     *
     * @param { string } type - type 向Worker添加一个事件监听。
     * @param { EventListener } listener - listener 当指定类型的事件发生时调用的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.on
     */
    on(type: string, listener: EventListener): void;

    /**
     * 向Worker添加一个事件监听，
     * 该事件监听只执行一次，执行完后会自动删除。
     *
     * @param { string } type - 监听的事件类型。
     * @param { EventListener } listener - listener 当指定类型的事件发生时调用的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.once
     */
    once(type: string, listener: EventListener): void;

    /**
     * 移除Worker的事件监听。
     *
     * @param { string } type - 需要移除的事件类型。
     * @param { EventListener } listener - listener 要移除的事件监听的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.off
     */
    off(type: string, listener?: EventListener): void;

    /**
     * 销毁Worker线程，终止Worker接收消息。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker.terminate
     */
    terminate(): void;
  }

  /**
   * Worker线程用于与宿主线程通信的对象。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.worker.workerPort
   */
  const parentPort: DedicatedWorkerGlobalScope;

  /**
   * Worker线程用于与宿主线程通信的对象。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  const workerPort: ThreadWorkerGlobalScope;
}

export default worker;