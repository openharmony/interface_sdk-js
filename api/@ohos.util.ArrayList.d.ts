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
 * ArrayList is a linear data structure that is implemented based on arrays. ArrayList can dynamically adjust the 
 * capacity based on project requirements. It increases the capacity by 50% each time.
 * When compared with [LinkedList]{@link @ohos.util.LinkedList}, ArrayList is more efficient in random access but less 
 * efficient in the addition or removal operation, because its addition or removal operation affects the position of 
 * other elements in the container.
 * **Recommended use case**: Use ArrayList when elements in a container need to be frequently read.
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
 * ArrayList is a linear data structure that is implemented based on arrays.
 * ArrayList can dynamically adjust the capacity based on project requirements.
 * It increases the capacity by 50% each time.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class ArrayList<T> {
  /**
   * A constructor used to create an **ArrayList** instance.
   *
   * @throws { BusinessError } 10200012 - The ArrayList's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in an ArrayList.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * Gets the number of elements in an array list.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * Adds an element at the end of this ArrayList.
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
   * Inserts an element at a specified index within the length range. If index is out of range, the insertion fails.
   *
   * @param { T } element - Target element.
   * @param { int } index - Index of the position where the element is to be inserted. The value must be less than or
   *     equal to int32_max, that is, 2147483647.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(element: T, index: int): void;
  /**
   * Checks whether this ArrayList has the specified element.
   *
   * @param { T } element - Target element.
   * @returns { boolean } Check result. The value **true** is returned if the specified element is contained; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(element: T): boolean;
  /**
   * Obtains the index of the first occurrence of the specified element in this ArrayList.
   *
   * @param { T } element - Target element.
   * @returns { int } Returns the position index if obtained; returns **-1** if the specified element is not found.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(element: T): int;
  /**
   * Removes an element with the specified position from this ArrayList.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { T } Element removed.
   * @throws { BusinessError } 10200001 - The value of "index" is out of range.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeByIndex(index: int): T;
  /**
   * Removes the first occurrence of the specified element from this ArrayList.
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
   * Obtains the index of the last occurrence of the specified element in this ArrayList.
   *
   * @param { T } element - Target element.
   * @returns { int } Returns the position index if obtained; returns **-1** if the specified element is not found.
   * @throws { BusinessError } 10200011 - The getLastIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getLastIndexOf(element: T): int;
  /**
   * Removes elements within the range [fromIndex, toIndex).
   *
   * @param { int } fromIndex - Index of the start position.
   * @param { int } toIndex - Index of the end position.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The removeByRange method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeByRange(fromIndex: int, toIndex: int): void;
  /**
   * Replaces all elements in this ArrayList with new elements, and returns the new ones.
   *
   * @param { function } callbackFn - Callback invoked for the replacement.
   * @param { Object } [thisArg] - Value of **this** to use when **callbackFn** is invoked. The default value is this
   *     instance.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  replaceAllElements(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => T, thisArg?: Object): void;

  /**
   * Replaces all elements in this container with new elements, and returns the new ones.
   *
   * @param { ArrayListReplaceCb<T> } callbackFn - Callback invoked for the replacement.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  replaceAllElements(callbackFn: ArrayListReplaceCb<T>): void;

  /**
   * Uses a callback to traverse each element in the **ArrayList** instance.
   *
   * @param { function } callbackFn - Callback invoked for the replacement.
   * @param { Object } [thisArg] - Value of **this** to use when **callbackFn** is invoked. The default value is this
   *     instance.
   * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object): void;

  /**
   * Iterates over elements in a generic ArrayList and executes a callback function for each element.
   *
   * @param { ArrayListForEachCb<T> } callbackFn - A callback function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: ArrayListForEachCb<T>): void;

  /**
   * Sorts elements in an ArrayList according to the order defined by the specified comparator.
   *
   * @param { function } [comparator] - Callback invoked for sorting. The default value is the callback function for
   *     sorting elements in ascending order.<br> There has been a compatibility change since API version 23. In API
   *     version 22 and earlier versions, the type is `(firstValue: T, secondValue: T) => number`. [since 8 - 22]
   * @param { ArrayListComparatorFn<T> } [comparator] - Callback invoked for sorting. The default value is the callback
   *     function for sorting elements in ascending order.<br> There has been a compatibility change since API version 2
   *     3. In API version 22 and earlier versions, the type is `(firstValue: T, secondValue: T) => number`. [since 23]
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  sort(comparator?: ArrayListComparatorFn<T>): void;
  /**
   * Obtains elements from this **ArrayList** within the range
   * [fromIndex, toIndex) and returns them as a new ArrayList instance.
   *
   * @param { int } fromIndex - Index of the start position.
   * @param { int } toIndex - Index of the end position.
   * @returns { ArrayList<T> } New **ArrayList** instance obtained.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 10200011 - The subArrayList method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  subArrayList(fromIndex: int, toIndex: int): ArrayList<T>;
  /**
   * Clears this ArrayList and sets its length to **0**.
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
   * Clones this ArrayList and returns a copy. The modification to the copy does not affect the original instance.
   *
   * @returns { ArrayList<T> } New **ArrayList** instance obtained.
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): ArrayList<T>;
  /**
   * Obtains the capacity of this ArrayList.
   *
   * @returns { int } Capacity obtained.
   * @throws { BusinessError } 10200011 - The getCapacity method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getCapacity(): int;
  /**
   * Converts this ArrayList into an array.
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
   * Checks whether this ArrayList is empty (contains no element).
   *
   * @returns { boolean } Check result. The value **true** is returned if the ArrayList is empty; otherwise, **false**
   *     is returned.
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
  /**
   * Returns the element at the given index.
   *
   * @param { int } index - Index. The value must be less than or equal to int32_max, that is, 2147483647.
   * @returns { T } The element in the arraylist matching the given index.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  [index: int]: T;

  /**
   * Increases the capacity of this ArrayList.
   *
   * @param { int } newCapacity - New capacity.
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(newCapacity: int): void;
  /**
   * Releases the reserved space in this ArrayList by adjusting the capacity to the actual number of elements in it.
   *
   * @throws { BusinessError } 10200011 - The trimToCurrentLength method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  trimToCurrentLength(): void;
  /**
   * Obtains an iterator, each item of which is a JavaScript object.
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
   * Obtains an iterator, each item of which is a JavaScript object.
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
 * This type specifies the comparator of sort in comparation.
 *
 * @param { T } firstValue - firstValue (required) previous element.
 * @param { T } secondValue - secondValue (required) next element.
 * @returns { double } the number type
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic&static
 */
/**
 * This type specifies the comparator of sort in comparation.
 *
 * @param { T } firstValue - firstValue (required) previous element.
 * @param { T } secondValue - secondValue (required) next element.
 * @returns { int } the number type
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 * @since 24 static
 */
export type ArrayListComparatorFn<T> = (firstValue: T, secondValue: T) => int;

/**
 * The type of ArrayList callback function.
 *
 * @param { T } value - The current element being processed
 * @param { int } index - The index of the current element
 * @param { ArrayList<T> } arrlist - The ArrayList instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type ArrayListForEachCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => void;

/**
 * The type of ArrayList callback function.
 *
 * @param { T } value - The current element being processed
 * @param { int } index - The index of the current element
 * @param { ArrayList<T> } arrlist - The ArrayList instance being traversed
 * @returns { T } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type ArrayListReplaceCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => T;

export default ArrayList;