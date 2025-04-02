/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

'use static';
/**
 * @file
 * @kit ArkTS
 * @arkts 1.2
 */

/**
 * Queue follows the principle of First In First Out (FIFO).
 * It supports insertion of elements at the end and removal from the front of the queue.
 * Queue is implemented based on the queue data structure.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class Queue<T> {
  /**
   * A constructor used to create a Queue object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the Queue. This is a number one higher than the highest index in the queue.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Inserting specified element at the end of a queue if it is possible to do
   * so immediately without violating capacity restrictions.
   *
   * @param { T } element - element to be appended to this queue
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200062 - The current capacity has reached the maximum limit.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(element: T): boolean;

  /**
   * Obtains the header element of a queue.
   *
   * @returns { T | undefined } the first element of the queue if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getFirst(): T | undefined;

  /**
   * Retrieves and removes the head of this queue
   *
   * @returns { T | undefined } the deleted element of the deque if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  pop(): T | undefined;

  /**
   * Executes a provided function once for each value in the queue object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackfn: (value: T, index: number, queue: Queue<T>) => void): void;

  /**
   * returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<T>;
}
export default Queue;
