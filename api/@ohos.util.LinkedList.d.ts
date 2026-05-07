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
 * LinkedList is implemented based on the doubly linked list. Each node of the doubly linked list has references 
 * pointing to the previous element and the next element. When querying an element, the system traverses the list from 
 * the beginning or end. LinkedList offers efficient insertion and removal operations but supports low query efficiency.
 * LinkedList allows null elements.
 * Unlike [List]{@link @ohos.util.List}, which is a singly linked list, LinkedList is a doubly linked list that supports
 * insertion and removal at both ends.
 * LinkedList is more efficient in data insertion than [ArrayList]{@link @ohos.util.ArrayList}, but less efficient in 
 * data access.
 * 
 * > **NOTE**
 * >
 * > Accessing elements in a LinkedList using the \[index\] syntax may lead to undefined results. You are advised to use
 * > **get()** instead.
 * > **Recommended use case**: Use LinkedList for frequent insertion and removal operations when a doubly linked list is
 * > required.
 * > This topic uses the following to identify the use of generics:
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
 * LinkedList is implemented based on the doubly linked list. Each node of the doubly linked list has
 * references pointing to the previous element and the next element. When querying an element,
 * the system traverses the list from the beginning or end.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LinkedList<T> {
  /**
   * A constructor used to create a **LinkedList** instance.
   *
   * @throws { BusinessError } 10200012 - The LinkedList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a LinkedList.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * Gets the element number of the LinkedList.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Adds an element at the end of this LinkedList.
   *
   * @param { T } element - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the element is added; otherwise, **false**
   *     is returned.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(element: T): boolean;
  /**
   * Inserts an element at the specified position in this LinkedList.
   *
   * @param { int } index - Index of the position where the element is to be inserted. The value must be less than or
   *     equal to int32_max, that is, 2147483647.
   * @param { T } element - Target element.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(index: int, element: T): void;
  /**
   * Obtains an element at the specified position in this LinkedList.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { T } Element obtained. If the element does not exist, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200001 - The value of index is out of range. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  get(index: int): T;

  /**
   * Adds an element at the top of this LinkedList.
   *
   * @param { T } element - Target element.
   * @throws { BusinessError } 10200011 - The addFirst method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  addFirst(element: T): void;
  /**
   * Removes the first element from this LinkedList.
   *
   * @returns { T } Element removed.
   * @throws { BusinessError } 10200011 - The removeFirst method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeFirst(): T;

  /**
   * Retrieves and removes the head (first element) of this linkedList.
   *
   * @returns { T | undefined } the head of this list
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeFirst(): T | undefined;

  /**
   * Removes the last element from this LinkedList.
   *
   * @returns { T } Element removed.
   * @throws { BusinessError } 10200011 - The removeLast method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeLast(): T;

  /**
   * Removes and returns the last element from this linkedList.
   *
   * @returns { T | undefined } the head of this list
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeLast(): T | undefined;

  /**
   * Checks whether this LinkedList has the specified element.
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
   * Obtains the index of the first occurrence of the specified element in this LinkedList.
   *
   * @param { T } element - Target element.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(element: T): int;
  /**
   * Searches for an element based on its index and then removes it.
   *
   * @param { number } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { T } Element removed. If the element does not exist, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeByIndex(index: number): T;

  /**
   * Removes and returns the element at the specified index in this linkedlist.
   *
   * @param { int } index - the index in the linkedList
   * @returns { T | undefined } the T type, if the index is
   *     out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   *     Received value is: ${index}
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeByIndex(index: int): T | undefined;

  /**
   * Removes the first occurrence of the specified element from this LinkedList.
   *
   * @param { T } element - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the element is removed; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  remove(element: T): boolean;
  /**
   * Removes the first occurrence of the specified element from this LinkedList.
   *
   * @param { T } element - Target element.
   * @returns { boolean } Returns **true** if the element is removed; returns **false** if the element fails to be
   *     removed or does not exist.
   * @throws { BusinessError } 10200011 - The removeFirstFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeFirstFound(element: T): boolean;
  /**
   * Removes the last occurrence of the specified element from this LinkedList.
   *
   * @param { T } element - Target element.
   * @returns { boolean } Returns **true** if the element is removed; returns **false** if the element fails to be
   *     removed or does not exist.
   * @throws { BusinessError } 10200011 - The removeLastFound method cannot be bound.
   * @throws { BusinessError } 10200010 - Container is empty.
   * @throws { BusinessError } 10200017 - The element does not exist in this container.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeLastFound(element: T): boolean;
  /**
   * Obtains the index of the last occurrence of the specified element in this LinkedList.
   *
   * @param { T } element - Target element.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLastIndexOf(element: T): int;
  /**
   * Obtains the first element in this LinkedList.
   *
   * @returns { T } Element obtained. If the element is empty, **undefined** is returned.
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
   * Obtains the last element in this LinkedList.
   *
   * @returns { T } Element obtained. If the element is empty, **undefined** is returned.
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
   * Replaces an element at the specified position in this LinkedList with a given element.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @param { T } element - Element to be used for replacement.
   * @returns { T } New element. If the element is empty, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @throws { BusinessError } 10200010 - Container is empty. [since 23] [staticonly]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(index: int, element: T): T;

  /**
   * Uses a callback to traverse the elements in this LinkedList and obtain their indexes.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the LinkedList.
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
  forEach(callbackFn: (value: T, index?: number, LinkedList?: LinkedList<T>) => void, thisArg?: Object): void;

  /**
   * Replaces each element of this linkedList with the result of applying the operator to that element.
   *
   * @param { LinkedListForEachCb<T> } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LinkedListForEachCb<T>): void;

  /**
   * Clears this LinkedList and sets its length to **0**.
   *
   * @throws { BusinessError } 10200011 - The clear method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clear(): void;
  /**
   * Clones an instance identical to this **LinkedList** and returns it. The modification to the copy does not affect
   * the original instance.
   *
   * @returns { LinkedList<T> } New **LinkedList** instance obtained.
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): LinkedList<T>;
  /**
   * Converts this LinkedList into an array and returns the array.
   *
   * @returns { Array<T> } Array obtained.
   * @throws { BusinessError } 10200011 - The convertToArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  convertToArray(): Array<T>;
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
 * The type of LinkedList callback function.
 *
 * @param { T } value - The value of current element
 * @param { int } index - The index of current element
 *     The value should be an integer.
 * @param { LinkedList<T> } linkedList - The LinkedList instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type LinkedListForEachCb<T> = (value: T, index: int, linkedList: LinkedList<T>) => void;

export default LinkedList;