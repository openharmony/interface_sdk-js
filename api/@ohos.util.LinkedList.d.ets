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
 * LinkedList is implemented based on the doubly linked list. Each node of the doubly linked list has
 * references pointing to the previous element and the next element. When querying an element,
 * the system traverses the list from the beginning or end.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class LinkedList<T> {
  /**
   * A constructor used to create a LinkedList object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the LinkedList. This is a number one higher than the highest index in the linkedList.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Appends the specified element to the end of this linkedList.
   *
   * @param { T } element - element to be appended to this linkedList
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(element: T): boolean;

  /**
   * Inserts the specified element at the specified position in this linkedList.
   *
   * @param { number } index - index at which the specified element is to be inserted
   * @param { T } element - element to be inserted
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  insert(index: number, element: T): void;

  /**
   * Returns the element at the specified position in this linkedList,
   * or returns undefined if this linkedList is empty
   *
   * @param { number } index - specified position
   * @returns { T | undefined} the element at the specified index, or undefined if the index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get(index: number): T | undefined;

  /**
   * Inserts the specified element at the beginning of this LinkedList.
   *
   * @param { T } element - the element to add
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  addFirst(element: T): void;

  /**
   * Retrieves and removes the head (first element) of this linkedList.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeFirst(): T;

  /**
   * Removes and returns the last element from this linkedList.
   *
   * @returns { T } the head of this list
   * @throws { BusinessError } 10200010 - Container is empty.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeLast(): T;

  /**
   * Check if linkedList contains the specified element
   *
   * @param { T } element - element to be contained
   * @returns { boolean } the boolean type, if linkedList contains the specified element, return true, else return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(element: T): boolean;

  /**
   * Returns the index of the first occurrence of the specified element
   * in this linkedList, or -1 if this linkedList does not contain the element.
   *
   * @param { T } element - element to be contained
   * @returns { number } the number type, returns the lowest index such that or -1 if there is no such index.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getIndexOf(element: T): number;

  /**
   * Find the corresponding element according to the index.
   *
   * @param { number } index - the index in the linkedList
   * @returns { T } the T type, if the index is
   * out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeByIndex(index: number): T | undefined;

  /**
   * Removes the first occurrence of the specified element from this linkedList,
   * if it is present. If the linkedList does not contain the element, it is
   * unchanged. More formally, removes the element with the lowest index
   *
   * @param { T } element - element to remove
   * @returns { boolean } the boolean type, if there is no such element, return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(element: T): boolean;

  /**
   * Removes the first occurrence of the specified element from this linkedList,
   * if it is present. If the linkedList does not contain the element, it is
   * unchanged. More formally, removes the element with the lowest index
   *
   * @param { T } element -  element to remove
   * @returns { boolean } the boolean type, if there is no such element, return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeFirstFound(element: T): boolean;

  /**
   * Removes the last occurrence of the specified element from this linkedList,
   * if it is present. If the linkedList does not contain the element, it is
   * unchanged. More formally, removes the element with the lowest index
   *
   * @param { T } element - element to remove
   * @returns { boolean } the boolean type, if there is no such element, return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeLastFound(element: T): boolean;

  /**
   * Returns in the index of the last occurrence of the specified element in this linkedList,
   * or -1 if the linkedList does not contain the element.
   *
   * @param { T } element - element to find
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLastIndexOf(element: T): number;

  /**
   * Returns the first element (the item at index 0) of this linkedList.
   * or returns undefined if linkedList is empty
   *
   * @returns { T | undefined } the T type, returns undefined if linkedList is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getFirst(): T | undefined;

  /**
   * Returns the Last element (the item at index length - 1) of this linkedList.
   * or returns undefined if linkedList is empty
   *
   * @returns { T | undefined } the T type, returns undefined if linkedList is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLast(): T | undefined;

  /**
   * Replaces the element at the specified position in this Vector with the specified element
   *
   * @param { number } index - index to find
   * @param { T } element - replaced element
   * @returns { T | undefined } the T type, returns undefined if linkedList is empty
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  set(index: number, element: T): T | undefined;

  /**
   * Replaces each element of this linkedList with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * value (required) current element
   * index (Optional) The index value of the current element.
   * linkedList (Optional) The linkedList object to which the current element belongs.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackfn: (value: T, index: number, linkedList: LinkedList<T>) => void): void;

  /**
   * Removes all of the elements from this linkedList. The linkedList will
   * be empty after this call returns. Length becomes 0
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clear(): void;

  /**
   * Returns a shallow copy of this instance. (The elements themselves are not copied.)
   *
   * @returns { LinkedList<T> } this linkedList instance
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clone(): LinkedList<T>;

  /**
   * convert linkedList to array
   *
   * @returns { Array<T> } the Array type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  convertToArray(): Array<T>;

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

export default LinkedList;
