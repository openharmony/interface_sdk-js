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
 * Stack is implemented based on the array data structure. It follows the principle Last Out First In (LOFI) and 
 * supports data insertion and removal at one end.
 * Unlike [Queue]{@link @ohos.util.Queue}, which is implemented based on the queue data structure and supports insertion
 * at one end and removal at the other end, Stack supports insertion and removal at the same end.
 * **Recommended use case**: Use Stack in LOFI scenarios.
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
 * Stack is implemented based on the array data structure.
 * It follows the principle Last In First Out (LIFO) and supports data insertion and removal at one end.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class Stack<T> {
  /**
   * A constructor used to create a **Stack** instance.
   *
   * @throws { BusinessError } 10200012 - The Stack's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a Stack.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * Gets the element number of the Stack.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Checks whether this Stack is empty (contains no elements).
   *
   * @returns { boolean } Returns **true** if the Stack is empty; returns **false** otherwise.
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * Obtains the top element of this Stack. If the Stack is empty, **undefined** is returned.
   *
   * @returns { T } Element removed. If the Stack is empty, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The peek method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  peek(): T;

  /**
   * Removes the top element from this Stack.
   *
   * @returns { T } Element removed. If the Stack is empty, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The pop method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  pop(): T;

  /**
   * Adds an element at the top of this Stack.
   *
   * @param { T } item - Target element.
   * @returns { T } Element added.
   * @throws { BusinessError } 10200011 - The push method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  push(item: T): T;
  /**
   * Obtains the index of the first occurrence of the specified element in this Stack.
   *
   * @param { T } element - Target element.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The locate method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  locate(element: T): int;
  /**
   * Uses a callback to traverse each element in the **Stack** instance.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the Stack.
   * @param { Object } [thisArg] - Value of **this** to use when **callbackFn** is invoked. The default value is this
   *     instance.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, stack?: Stack<T>) => void, thisArg?: Object): void;

  /**
   * Executes a provided function once for each value in the Stack object.
   *
   * @param { StackForEachCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackfn: StackForEachCb<T>): void;

  /**
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
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
   * returns an iterator. Each item of the iterator is a ArkTS Object
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
 * The type of Stack callback function.
 *
 * @param { T } value - The value of current element
 * @param { int } index - The key of current element
 *     The value should be an integer.
 * @param { Stack<T> } stack - The Stack instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type StackForEachCb<T> = (value: T, index: int, stack: Stack<T>) => void;

export default Stack;