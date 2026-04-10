/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * Double-Ended Queue (Deque) is a data structure implemented based on a circular queue. It supports insertion and 
 * deletion of elements at both ends. It follows the principles of First In First Out (FIFO) and Last In First Out (LIFO
 * ). Deque can dynamically adjust the capacity based on project requirements. It doubles the capacity each time.
 * Queue allows element removal at the front and insertion at the rear. Compared with [Queue]{@link @ohos.util.Queue}, 
 * which only allows element deletion at the front and insertion at the back, Deque permits insertion and deletion at 
 * both ends.
 * Both [ArrayList]{@link @ohos.util.ArrayList} and Deque support insertion and deletion at the ends, but Deque does not
 * support insertion in the middle. Deque is more efficient than an ArrayList for inserting and deleting elements at the
 * front, whereas an ArrayList excels in element access efficiency.
 * **Recommended use case**: Use **Deque** when you need to frequently insert or remove elements at both the ends of a 
 * container.
 * This topic uses the following to identify the use of generics:
 * 
 * - T: Type
 * 
 * > **NOTE**
 * >
 * > - Container classes, implemented in static languages, have restrictions on storage locations and properties, and do
 * > not support custom properties or methods.
 *
 * @file
 * @kit ArkTS
 */

/**
 * Double-ended queue (deque) is a sequence container implemented based on the queue data structure that
 * follows the principles of First In First Out (FIFO) and Last In First Out (LIFO).
 * It allows insertion and removal of elements at both the ends.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class Deque<T> {
  /**
   * A constructor used to create a **Deque** instance.
   *
   * @throws { BusinessError } 10200012 - The Deque's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a Deque.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * Gets the element number of the Deque.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * Inserts an element at the front of this Deque.
   *
   * @param { T } element - Target element.
   * @throws { BusinessError } 10200011 - The insertFront method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insertFront(element: T): void;
  /**
   * Inserts an element at the end of this Deque.
   *
   * @param { T } element - Target element.
   * @throws { BusinessError } 10200011 - The insertEnd method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insertEnd(element: T): void;
  /**
   * Checks whether this Deque has the specified element.
   *
   * @param { T } element - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the specified element is contained;
   *     otherwise, **false** is returned.
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * Obtains the first element of this Deque.
   *
   * @returns { T } First element of the T type obtained.
   * @throws { BusinessError } 10200011 - The getFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getFirst(): T;

  /**
   * Obtains the last element of this Deque.
   *
   * @returns { T } Last element of the T type obtained.
   * @throws { BusinessError } 10200011 - The getLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLast(): T;

  /**
   * Removes the first element of this Deque.
   *
   * @returns { T } First element removed.
   * @throws { BusinessError } 10200011 - The popFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  popFirst(): T;

  /**
   * Removes the last element of this Deque.
   *
   * @returns { T } Last element removed.
   * @throws { BusinessError } 10200011 - The popLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  popLast(): T;

  /**
   * Uses a callback to traverse each element in the **Deque** instance.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the Deque.
   * @param { Object } [thisArg] - Value of **this** to use when **callbackFn** is invoked. The default value is this
   *     instance.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, deque?: Deque<T>) => void, thisArg?: Object): void;

  /**
   * Iterates over elements in a generic Deque (double-ended queue) and executes a callback function for each element.
   *
   * @param { DequeForEachCb<T> } callbackFn - A callback function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: DequeForEachCb<T>): void;
  /**
   * Returns the item at that index.
   *
   * @param { int } index - The zero-based index of the desired code unit.
   *     Throws error if index < 0 or index >= deque.length.
   *     The value should be an integer.
   * @returns { T } The element in the deque matching the given index.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  [index: int]: T;
  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;
}

/**
 * The type of Deque forEach callback function.
 *
 * @param { T } value - The current element being processed
 * @param { int } index - The index of the current element
 * @param { Deque<T> } deque - The Deque instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type DequeForEachCb<T> = (value: T, index: int, deque: Deque<T>) => void;

export default Deque;