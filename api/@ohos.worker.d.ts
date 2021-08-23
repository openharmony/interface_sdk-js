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

export interface WorkerOptions {
  type?: "classic" | "module";
  name?: string;
  shared?: boolean;
}

export interface Event {
  readonly type: string;
  readonly timeStamp: number;
}

interface ErrorEvent extends Event {
  readonly message: string;
  readonly filename: string;
  readonly lineno: number;
  readonly colno: number;
  readonly error: Object;
}

declare interface MessageEvent<T = Object> extends Event {
  // the data of the message.
  readonly data: T;
}

export interface PostMessageOptions {
  transfer?: Object[];
}

export interface EventListener {
    (evt: Event): void | Promise<void>;
}

type MessageType = "message" | "messageerror";

declare interface EventTarget {
  addEventListener(
    type: string,
    listener: EventListener
  ): void;

  dispatchEvent(event: Event): boolean;

  removeEventListener(
    type: string,
    callback?: EventListener
  ): void;

  removeAllListener(): void;
}

/* woker sider interface */
declare interface WorkerGlobalScope extends EventTarget {
  // worker name.
  readonly name: string;

  onerror?: (ev: ErrorEvent) => void;
  onoffline?: (ev: Event) => void;
  ononline?: (ev: Event) => void;

  readonly self: WorkerGlobalScope & typeof globalThis;
}

declare interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
  onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;
  onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;

  close(): void;
  /**
   * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal.
   * transfer can be passed as a list of objects that are to be transferred rather than cloned.
   */
  postMessage(messageObject: Object, transfer: Transferable[]): void;
  postMessage(messageObject: Object, options?: PostMessageOptions): void;
}

/**
 * @devices phone, tablet
 */
declare namespace worker {
  class Worker extends EventTarget {
      constructor(scriptURL: string, options?: WorkerOptions);
      onexit?: (code: number) => void;
      // error callback.
      onerror?: (err: ErrorEvent) => void;
      // type = "message".
      onmessage?: (event: MessageEvent) => void;
      onmessageerror?: (event: MessageEvent) => void;
      // use structured clone algorithm to transfor object.
      postMessage(message: Object, transfer: ArrayBuffer[]): void;
      // support transfor list type:
      // all primitive types, Boolean, String, Date, RegExp, Map, Set, Array, Object(can represet literal).
      postMessage(message: Object, options?: PostMessageOptions): void;

      on(type: string, listener: EventListener): void;
      once(type: string, listener: EventListener): void;
      off(type: string, listener?: EventListener): void;

      terminate(): void;
  }
  const parentPort: DedicatedWorkerGlobalScope;
}

export default worker;