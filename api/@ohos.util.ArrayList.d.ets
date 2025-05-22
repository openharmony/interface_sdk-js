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
 * ArrayList is a linear data structure that is implemented based on arrays.
 * ArrayList can dynamically adjust the capacity based on project requirements.
 * It increases the capacity by 50% each time.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class ArrayList<T> {
  /**
   * A constructor used to create a ArrayList object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the ArrayList. This is a number one higher than the highest index in the arrayList.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Appends the specified element to the end of this arrayList.
   *
   * @param { T } element - element to be appended to this arrayList
   * @returns { boolean } the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200062 - The current capacity has reached the maximum limit.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(element: T): boolean;

  /**
   * Inserts the specified element at the specified position in this
   * arrayList. Shifts the element currently at that position (if any) and
   * any subsequent elements to the right (adds one to their index).
   *
   * @param { T } element - element to be inserted
   * @param { number } index - index at which the specified element is to be inserted
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${index}
   * @throws { BusinessError } 401 - The type of "index" must be small integer. Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  insert(element: T, index: number): void;

  /**
   * Check if arrayList contains the specified element
   *
   * @param { T } element - element to be contained
   * @returns { boolean } the boolean type, if arrayList contains the specified element, return true, else return false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(element: T): boolean;

  /**
   * Returns the index of the first occurrence of the specified element
   * in this arrayList, or -1 if this arrayList does not contain the element.
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
   * Find the corresponding element according to the index,
   * delete the element, and move the index of all elements to the right of the element forward by one.
   *
   * @param { number } index - the index in the arrayList
   * @returns { T } the deleted element
   * @throws { BusinessError } 401 - The type of "index" must be small integer. Received value is: ${index}
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   * Received value is: ${index}
   * @throws { BusinessError } 10200001 - Container is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeByIndex(index: number): T;

  /**
   * Removes the first occurrence of the specified element from this arrayList,
   * if it is present. If the arrayList does not contain the element, it is
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
   * Returns in the index of the last occurrence of the specified element in this arrayList,
   * or -1 if the arrayList does not contain the element.
   *
   * @param { T } element - element to find
   * @returns { number } the number type, the index if the specified element is included, otherwise, -1
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getLastIndexOf(element: T): number;

  /**
   * Removes from this arrayList all of the elements whose index is between fromIndex, inclusive, and toIndex, exclusive.
   *
   * @param { number } fromIndex - the starting position of the index, containing the value at that index position
   * @param { number } toIndex - the end of the index, excluding the value at that index
   * @throws { BusinessError } 10200001 - Container is empty
   * @throws { BusinessError } 10200001 - The value of "fromIndex" is out of range.
   * It must be >= 0 && <= ${min(length - 1, toIndex - 1)}. Received value is: ${fromIndex}
   * @throws { BusinessError } 10200001 - The value of "fromIndex" is out of range.
   * It must be >= 0 && <= ${min(length - 1, toIndex - 1)}. Received value is: ${fromIndex - 4294967296}
   * @throws { BusinessError } 10200001 - The value of "toIndex" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${toIndex}
   * @throws { BusinessError } 10200001 - The value of "toIndex" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${toIndex - 4294967296}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeByRange(fromIndex: number, toIndex: number): void;

  /**
   * Replaces each element of this arrayList with the result of applying the operator to that element.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  replaceAllElements(callbackFn: (value: T, index: number, arrlist: ArrayList<T>) => T): void;

  /**
   * Executes a provided function once for each value in the arrayList object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackFn: (value: T, index: number, arrlist: ArrayList<T>) => void): void;

  /**
   * Sorts this arrayList according to the order induced by the specified comparator, without comparator this parameter,
   * it will default to ASCII sorting
   *
   * @param { function } [comparator] - comparator
   * comparator (Optional) A function that accepts up to two arguments. Specifies the sort order.
   * Must be a function, return number type, if it returns firstValue minus secondValue, it returns an arrayList
   * sorted in ascending order; if it returns secondValue minus firstValue, it returns an arrayList
   * sorted in descending order; if this parameter is empty, it will default to ASCII sorting
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  sort(comparator?: (firstValue: T, secondValue: T) => number): void;

  /**
   * Returns a view of the portion of this arrayList between the specified fromIndex, inclusive, and toIndex, exclusive
   *
   * @param { number } fromIndex - the starting position of the index, containing the value at that index position
   * @param { number } toIndex - the end of the index, excluding the value at that index
   * @returns { ArrayList<T> }
   * @throws { BusinessError } 10200001 - Container is empty
   * @throws { BusinessError } 10200001 - The value of "fromIndex" is out of range.
   * It must be >= 0 && <= ${min(length - 1, toIndex - 1)}. Received value is: ${fromIndex}
   * @throws { BusinessError } 10200001 - The value of "toIndex" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${toIndex}
   * @throws { BusinessError } 10200001 - The value of "fromIndex" is out of range.
   * It must be >= 0 && <= ${min(length - 1, toIndex - 1)}. Received value is: ${fromIndex - 4294967296}
   * @throws { BusinessError } 10200001 - The value of "toIndex" is out of range. It must be >= 0 && <= ${length}.
   * Received value is: ${toIndex - 4294967296}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  subArrayList(fromIndex: number, toIndex: number): ArrayList<T>;

  /**
   * Removes all of the elements from this arrayList. The arrayList will
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
   * @returns { ArrayList<T> } this arrayList instance
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clone(): ArrayList<T>;

  /**
   * Returns the capacity of this arrayList
   *
   * @returns { number } the number type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getCapacity(): number;

  /**
   * Convert arrayList to array
   *
   * @returns { Array<T> } the Array type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  convertToArray(): Array<T>;

  /**
   * Determine whether arrayList is empty and whether there is an element
   *
   * @returns { boolean } the boolean type, returns true if arrayList is empty, otherwise false
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Returns the item at that index.
   * 
   * @param { number } index - The zero-based index of the desired code unit.
   * @returns { T } The element in the arrayList matching the given index.
   * @throws { BusinessError } 401 - The type of "index" must be small integer.
   * @throws { BusinessError } 10200001 - Container is empty
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
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
   * @throws { BusinessError } 10200001 - Container is empty
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20
   */
  $_set(index: number, value: T): void;

  /**
   * If the newCapacity provided by the user is greater than or equal to length,
   * change the capacity of the arrayList to newCapacity, otherwise the capacity will not be changed
   *
   * @param { number } newCapacity - newCapacity
   * @throws { BusinessError } 10200062 - The current capacity has reached the maximum limit.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  increaseCapacityTo(newCapacity: number): void;

  /**
   * Limit the capacity to the current length
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  trimToCurrentLength(): void;

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
export default ArrayList;
