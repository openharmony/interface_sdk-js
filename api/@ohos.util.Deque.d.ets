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
 * @arkts >= 1.2
 */

/**
 * Double-ended queue (deque) is a sequence container implemented based on the queue data structure that
 * follows the principles of First In First Out (FIFO) and Last In First Out (LIFO).
 * It allows insertion and removal of elements at both the ends.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class Deque<T> {
  /**
   * A constructor used to create a Deque object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the Deque. This is a number one higher than the highest index in the deque.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Inserts an element into the deque header.
   *
   * @param { T } element - element to be appended to this deque
   * @throws { BusinessError } 10200062 - The current capacity has reached the maximum limit.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  insertFront(element: T): void;

  /**
   * Inserting an element at the end of a deque
   *
   * @param { T } element - element to be appended to this deque
   * @throws { BusinessError } 10200062 - The current capacity has reached the maximum limit.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  insertEnd(element: T): void;

  /**
   * Check if deque contains the specified element
   *
   * @param { T } element - element element to be contained
   * @returns { boolean } the boolean type, if deque contains the specified element, return true, else return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(element: T): boolean;

  /**
   * Obtains the header element of a deque.
   *
   * @returns { T | undefined } the first element of the deque if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getFirst(): T | undefined;

  /**
   * Obtains the end element of a deque.
   *
   * @returns { T | undefined } the last element of the deque if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLast(): T | undefined;

  /**
   * Obtains the header element of a deque and delete the element.
   *
   * @returns { T | undefined } the deleted element of the deque if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  popFirst(): T | undefined;

  /**
   * Obtains the end element of a deque and delete the element.
   *
   * @returns { T | undefined } the deleted element of the deque if it exists, otherwise returns undefined.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  popLast(): T | undefined;

  /**
   * Executes a provided function once for each value in the deque object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackfn: (value: T, index: number, deque: Deque<T>) => void): void;

  /**
   * Returns the item at that index.
   * 
   * @param { number } index - The zero-based index of the desired code unit.
   * @returns { T } The element in the deque matching the given index.
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= 2147483647.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   */
  $_get(index: number): T;

  /**
   * Set the value of item at that index.
   *
   * @param { number } index - The index of the element to set.
   * @param { T } value - The value to set at the specified index.
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= 2147483647.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   */
  $_set(index: number, val: T): void;

  /**
   * Returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<T>;
}

export default Deque;
