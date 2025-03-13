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
 * @arkts >=1.2
 */

/**
 * Stack is implemented based on the array data structure.
 * It follows the principle Last Out First In (LOFI) and supports data insertion and removal at one end.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class Stack<T> {
  /**
   * A constructor used to create a Stack object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the Stack. This is a number one higher than the highest index in the Stack.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Tests if this stack is empty
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Looks at the object at the top of this stack without removing it from the stack
   * Return undefined if this stack is empty
   *
   * @returns { T | undefined } the top value, or undefined if container is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  peek(): T | undefined;

  /**
   * Removes the object at the top of this stack and returns that object as the value of this function
   * an exception if the stack is empty
   *
   * @returns { T | undefined } Stack top value, or undefined if container is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  pop(): T | undefined;

  /**
   * Pushes an item onto the top of this stack
   *
   * @param { T } item - item to be appended to this Stack
   * @returns { T } the T type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  push(item: T): T;

  /**
   * Returns the 1-based position where an object is on this stack
   *
   * @param { T } element - target to be deleted
   * @returns { number } the T type, if there is no such element, return -1
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  locate(element: T): number;

  /**
   * Executes a provided function once for each value in the Stack object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackfn: (value: T, index: number, stack: Stack<T>) => void): void;

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
export default Stack;
