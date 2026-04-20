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
 * List is implemented based on the singly linked list. Each node has a reference pointing to the next element. Elements
 * must be traversed from the beginning, making querying inefficient. However, insertion and deletion operations are 
 * highly efficient. List allows null elements.
 * Unlike [LinkedList]{@link @ohos.util.LinkedList}, which is a doubly linked list, List is a singly linked list that 
 * does not support insertion or removal at both ends.
 * 
 * > **NOTE**
 * >
 * > Accessing elements in a List using the \[index\] syntax may lead to undefined results. You are advised to use 
 * > **get()** instead.
 * > **Recommended use case**: Use List for frequent insertion and removal operations when a singly linked list is 
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

/*** if arkts static */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * List is implemented based on the singly linked list. Each node has a reference pointing to the next element.
 * When querying an element, the system traverses the list from the beginning.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class List<T> {
  /**
   * A constructor used to create a **List** instance.
   *
   * @throws { BusinessError } 10200012 - The List's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a List.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * Gets the element number of the List.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Adds an element at the end of this List.
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
   * Inserts an element at the specified position in this List.
   *
   * @param { T } element - Target element.
   * @param { int } index - Index of the position where the element is to be inserted. The value must be less than or
   *     equal to int32_max, that is, 2147483647.
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  insert(element: T, index: int): void;
  /**
   * Obtains the element at the specified position in this List.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { T } Element obtained.
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
   * Checks whether this List has the specified element.
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
   * Obtains the index of the first occurrence of the specified element in this List.
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
   * @returns { T } Element removed.
   * @throws { BusinessError } 10200011 - The removeByIndex method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeByIndex(index: number): T;

  /**
   * Find the corresponding element according to the index.
   *
   * @param { int } index - the index in the linkedList
   *     The value should be an integer.
   * @returns { T | undefined } the T type, if the index is
   *     out of bounds (greater than or equal to length or less than 0), throw an exception
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   *     Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeByIndex(index: int): T | undefined;

  /**
   * Removes the first occurrence of the specified element from this List.
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
   * Obtains the index of the last occurrence of the specified element in this List.
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
   * Obtains the first element in this List.
   *
   * @returns { T } The first element obtained.
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
   * Obtains the last element in this List.
   *
   * @returns { T } The last element obtained.
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
   * Replaces an element at the specified position in this List with a given element.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @param { T } element - Element to be used for replacement.
   * @returns { T } New element.
   * @throws { BusinessError } 10200011 - The set method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  set(index: int, element: T): T;

  /**
   * Compares whether a specified object is equal to this List.
   *
   * @param { Object } obj - Object used for comparison.
   * @returns { boolean } Check result. The value **true** is returned if the two are equal; otherwise, **false** is
   *     returned.
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  equal(obj: Object): boolean;

  /**
   * Compares the specified object with this list for equality.if the object are the same as this list
   * return true, otherwise return false.
   *
   * @param { RecordData } obj - The object to compare with this list
   * @returns { boolean } the boolean type
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  equal(obj: RecordData): boolean;

  /**
   * Uses a callback to traverse each element in the **List** instance.
   *
   * @param { function } callbackFn - Callback used to return the result.
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
  forEach(callbackFn: (value: T, index?: number, List?: List<T>) => void, thisArg?: Object): void;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { ListForEachCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackfn: ListForEachCb<T>): void;

  /**
   * Sorts elements in this List.
   *
   * @param { function } comparator - Callback used to return the result.<br> There has been a compatibility change
   *     since API version 23. In API version 22 and earlier versions, the type is `(firstValue: T, secondValue: T) =>
   *     number`. [since 8 - 22]
   * @param { ListComparatorFn<T> } comparator - Callback used to return the result.<br> There has been a compatibility
   *     change since API version 23. In API version 22 and earlier versions, the type is `(firstValue: T, secondValue:
   *     T) => number`. [since 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200011 - The sort method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  sort(comparator: ListComparatorFn<T>): void;
  /**
   * Clears this List and sets its length to **0**.
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
   * Obtains elements within a range in this List, including the element at the start position but not that at the end
   * position, and returns these elements as a new **List** instance.
   *
   * @param { int } fromIndex - Index of the start position.
   * @param { int } toIndex - Index of the end position.
   * @returns { List<T> } New **List** instance obtained.
   * @throws { BusinessError } 10200011 - The getSubList method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of fromIndex or toIndex is out of range.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getSubList(fromIndex: int, toIndex: int): List<T>;
  /**
   * Replaces all elements in this List with new elements, and returns the new ones.
   *
   * @param { function } callbackFn - Callback invoked for the replacement.
   * @param { Object } [thisArg] - Value of **this** to use when **callbackFn** is invoked. The default value is this
   *     instance.
   * @throws { BusinessError } 10200011 - The replaceAllElements method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  replaceAllElements(callbackFn: (value: T, index?: number, list?: List<T>) => T, thisArg?: Object): void;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   *
   * @param { ListReplaceCb } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  replaceAllElements(callbackfn: ListReplaceCb<T>): void;

  /**
   * Converts this List into an array and returns the array.
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
   * Checks whether this List is empty (contains no element).
   *
   * @returns { boolean } Check result. The value **true** is returned if the List is empty; otherwise, **false** is
   *     returned.
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;

  /**
   * Returns the item at that index.
   *
   * @param { int } index - The zero-based index of the desired code unit.
   *     Throws error if index < 0 or index >= list.length.
   *     The value should be an integer.
   * @returns { T } The element in the list matching the given index.
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
export type ListComparatorFn<T> = (firstValue: T, secondValue: T) => double;
/**
 * The type of List callback function.
 *
 * @param { T } value - The value of current element
 * @param { int } index - The index of current element
 *     The value should be an integer.
 * @param { List<T> } list - The List instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type ListForEachCb<T> = (value: T, index: int, list: List<T>) => void;

/**
 * The type of List callback function.
 *
 * @param { T } value - The old value of current element
 * @param { int } index - The index of current element
 *     The value should be an integer.
 * @param { List<T> } list - The List instance being traversed
 * @returns { T } - The new value of current element
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type ListReplaceCb<T> = (value: T, index: int, list: List<T>) => T;

export default List;