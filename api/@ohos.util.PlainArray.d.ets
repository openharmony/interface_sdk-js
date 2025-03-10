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
 * PlainArray stores key-value (KV) pairs. Each key must be unique, be of the number type, and have only one value.
 * PlainArray is based on generics and uses a lightweight structure.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class PlainArray<T> {
  /**
   * A constructor used to create a PlainArray object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor();

  /**
   * Gets the element number of the PlainArray.
   *
   * @type { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get length(): number;

  /**
   * Appends a key-value pair to PlainArray
   *
   * @param { number } key - added the key of key-value
   * @param { T } value - added the value of key-value
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  add(key: number, value: T): void;

  /**
   * Clears the current PlainArray object
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clear(): void;

  /**
   * Obtains a clone of the current PlainArray object
   *
   * @returns { PlainArray<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  clone(): PlainArray<T>;

  /**
   * Checks whether the current PlainArray object contains the specified key
   *
   * @param { number } key - need to determine whether to include the key
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  has(key: number): boolean;

  /**
   * Queries the value associated with the specified key
   *
   * @param { number } key - looking for goals
   * @returns { T | undefined } the value of key-value pairs
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  get(key: number): T | undefined;

  /**
   * Queries the index for a specified key
   *
   * @param { number } key - looking for goals
   * @returns { number } Subscript corresponding to target
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getIndexOfKey(key: number): number;

  /**
   * Queries the index for a specified value
   *
   * @param { T } value - looking for goals
   * @returns { number } Subscript corresponding to target
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getIndexOfValue(value: T): number;

  /**
   * Checks whether the current PlainArray object is empty
   *
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isEmpty(): boolean;

  /**
   * Queries the key at a specified index
   *
   * @param { number } index - target subscript for search
   * @returns { number | undefined } the key of key-value pairs, or undefined if key is not exist
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getKeyAt(index: number): number | undefined;

  /**
   * Remove the key-value pair based on a specified key if it exists and return the value
   *
   * @param { number } key - target to be deleted
   * @returns { T | undefined } target mapped value, or undefined if key is not exist
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  remove(key: number): T | undefined;

  /**
   * Remove the key-value pair at a specified index if it exists and return the value
   *
   * @param { number } index - target subscript for search
   * @returns { T | undefined } the T type, or undefined if container is empty
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeAt(index: number): T | undefined;

  /**
   * Remove a group of key-value pairs from a specified index
   *
   * @param { number } index - remove start index
   * @param { number } size - expected deletion quantity
   * @returns { number } Actual deleted quantity
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= ${length - 1}.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  removeRangeFrom(index: number, size: number): number;

  /**
   * Update value on specified index
   *
   * @param { number } index - target subscript for search
   * @param { T } value - updated the target mapped value
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= 2147483647.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  setValueAt(index: number, value: T): void;

  /**
   * Obtains the string representation of the PlainArray object
   *
   * @returns { String }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  toString(): String;

  /**
   * Queries the value at a specified index
   *
   * @param { number } index - target subscript for search
   * @returns { T } the value of key-value pairs
   * @throws { BusinessError } 10200001 - The value of "index" is out of range. It must be >= 0 && <= 2147483647.
   * Received value is: ${index}
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  getValueAt(index: number): T;

  /**
   * Executes a provided function once for each value in the PlainArray object.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  forEach(callbackFn: (value: T, key: number, PlainArray: PlainArray<T>) => void): void;

  /**
   * returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<[number, T]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  $_iterator(): IterableIterator<[number, T]>;
}

export default PlainArray;
