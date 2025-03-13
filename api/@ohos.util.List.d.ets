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
 * List is implemented based on the singly linked list. Each node has a reference pointing to the next element.
 * When querying an element, the system traverses the list from the beginning.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class List<T> {
  /**
   * A constructor used to create a List object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the List. This is a number one higher than the highest index in the list.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Appends the specified element to the end of this list.
   *
   * @param { T } element - element to be appended to this list
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(element: T): boolean;

  /**
   * Inserts the specified element at the specified position in this list.
   *
   * @param { T } element - element to be inserted
   * @param { number } index - index at which the specified element is to be inserted
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  insert(element: T, index: number): void;

  /**
   * Returns the element at the specified position in this list,
   * or returns undefined if this list is empty
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
   * Check if list contains the specified element
   *
   * @param { T } element - element element element to be contained
   * @returns { boolean } the boolean type, if list contains the specified element, return true, else return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(element: T): boolean;

  /**
   * Returns the index of the first occurrence of the specified element
   * in this list, or -1 if this list does not contain the element.
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
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeByIndex(index: number): T | undefined;

  /**
   * Removes the first occurrence of the specified element from this list,
   * if it is present. If the list does not contain the element, it is
   * unchanged. More formally, removes the element with the lowest index
   *
   * @param { T } element -  element to remove
   * @returns { boolean } the boolean type, if there is no such element, return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(element: T): boolean;

  /**
   * Returns in the index of the last occurrence of the specified element in this list,
   * or -1 if the list does not contain the element.
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
   * Returns the first element (the item at index 0) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T | undefined } the T type, returns undefined if list is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getFirst(): T | undefined;

  /**
   * Returns the Last element (the item at index length-1) of this list.
   * or returns undefined if list is empty
   *
   * @returns { T | undefined } the T type, returns undefined if list is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLast(): T | undefined;

  /**
   * Replaces the element at the specified position in this List with the specified element
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
   * Compares the specified object with this list for equality. If the object are the same as this list
   * return true, otherwise return false.
   *
   * @param { Object } obj - Compare objects
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  equal(obj: Object): boolean;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackfn: (value: T, index: number, list: List<T>) => void): void;

  /**
   * Sorts this list according to the order induced by the specified comparator
   *
   * @param { function } comparator - comparator
   * comparator (required) A function that accepts up to two arguments.
   * Specifies the sort order. Must be a function,return number type, if it returns firstValue
   * minus secondValue, it returns an list sorted in ascending order; if it returns secondValue
   * minus firstValue, it returns an list sorted in descending order;
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  sort(comparator: (firstValue: T, secondValue: T) => number): void;

  /**
   * Removes all of the elements from this list. The list will
   * be empty after this call returns. Length becomes 0
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clear(): void;

  /**
   * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive
   *
   * @param { number } fromIndex - the starting position of the index, containing the value at that index position
   * @param { number } toIndex - the end of the index, excluding the value at that index
   * @returns { List<T> }
   * @throws { BusinessError } 10200001 - The value of "fromIndex" is out of range.
   * It must be >= 0 && <= ${min(length - 1, toIndex - 1)}. Received value is: ${fromIndex}
   * @throws { BusinessError } 10200001 - The value of "toIndex" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${toIndex}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getSubList(fromIndex: number, toIndex: number): List<T>;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  replaceAllElements(callbackfn: (value: T, index: number, list: List<T>) => T): void;

  /**
   * convert list to array
   *
   * @returns { Array<T> } the Array type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  convertToArray(): Array<T>;

  /**
   * Determine whether list is empty and whether there is an element
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Returns the item at that index.
   * 
   * @param { number } index - the zero-based index of the desired code unit.
   * @returns { T | undefined } the element in the list matching the given index,
   * or undefined if the index is out of range.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   */
  $_get(index: number): T | undefined;

  /**
   * Set the value of item at that index.
   *
   * @param { number } index - the index of the element to set.
   * @param { T } value - the value to set at the specified index.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   */
  $_set(index: number, val: T): void;

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

export default List;
