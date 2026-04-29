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
 * PlainArray stores key-value (KV) pairs. Each key must be unique, be of the number type, and have only one value.
 * PlainArray is based on generics and uses a lightweight structure. Keys in the array are searched using binary search 
 * and are mapped to values in other arrays.
 * Both PlainArray and [LightWeightMap]{@link @ohos.util.LightWeightMap} are used to store KV pairs in the lightweight 
 * structure. However, the keys of PlainArray can only be of the number type.
 * **Recommended use case**: Use PlainArray when you need to store KV pairs whose keys are of the **number** type.
 * This topic uses the following to identify the use of generics:
 * 
 * - T: Type
 * 
 * > **NOTE**
 * >
 * > Container classes, implemented in static languages, have restrictions on storage locations and properties, and do 
 * > not support custom properties or methods.
 *
 * @file
 * @kit ArkTS
 */

/**
 * PlainArray stores key-value (KV) pairs. Each key must be unique, be of the number type, and have only one value.
 * PlainArray is based on generics and uses a lightweight structure.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class PlainArray<T> {
  /**
   * A constructor used to create a **PlainArray** instance.
   *
   * @throws { BusinessError } 10200012 - The PlainArray's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a PlainArray.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * Gets the element number of the PlainArray.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Adds an element to this PlainArray.
   *
   * @param { int } key - Key of the target element. The value must be less than or equal to int32_max, that is, 2147483
   *     647.
   * @param { T } value - Value of the target element.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(key: int, value: T): void;
  /**
   * Clears this PlainArray and sets its length to **0**.
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
   * Clones this PlainArray and returns a copy. The modification to the copy does not affect the original instance.
   *
   * @returns { PlainArray<T> } New **PlainArray** instance obtained.
   * @throws { BusinessError } 10200011 - The clone method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  clone(): PlainArray<T>;
  /**
   * Checks whether PlainArray has the specified key.
   *
   * @param { int } key - Target key. The value must be less than or equal to int32_max, that is, 2147483647.
   * @returns { boolean } Check result. The value **true** is returned if the specified key is contained; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(key: int): boolean;
  /**
   * Obtains the value of the specified key in this PlainArray.
   *
   * @param { number } key - Target key. The value must be less than or equal to int32_max, that is, 2147483647.
   * @returns { T } Value of the key.
   * @throws { BusinessError } 10200011 - The get method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  get(key: number): T;

  /**
   * Queries the value associated with the specified key
   *
   * @param { int } key - looking for goals
   *     The value should be an integer.
   * @returns { T | undefined } the value of key-value pairs
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get(key: int): T | undefined;

  /**
   * Obtains the index of the element with the specified key in this PlainArray.
   *
   * @param { int } key - Target key. The value must be less than or equal to int32_max, that is, 2147483647.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getIndexOfKey method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfKey(key: int): int;
  /**
   * Obtains the index of the first occurrence of an element with the specified value in this PlainArray.
   *
   * @param { T } value - Value of the target element.
   * @returns { int } Index of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getIndexOfValue method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOfValue(value: T): int;
  /**
   * Checks whether this PlainArray is empty.
   *
   * @returns { boolean } Check result. The value **true** is returned if the PlainArray is empty; otherwise, **false**
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
   * Obtains the key of the element at the specified position in this PlainArray.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { int } Key of the element. If no match is found, **-1** is returned.
   * @throws { BusinessError } 10200011 - The getKeyAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getKeyAt(index: int): int;
  /**
   * Removes a key-value pair with the specified key.
   *
   * @param { number } key - Target key. The value must be less than or equal to int32_max, that is, 2147483647.
   * @returns { T } Value in the key-value pair removed.
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: number): T;

  /**
   * Remove the key-value pair based on a specified key if it exists and return the value
   *
   * @param { int } key - target to be deleted
   *     The value should be an integer.
   * @returns { T | undefined } target mapped value, or undefined if key is not exist
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: int): T | undefined;

  /**
   * Removes an element at the specified position from this PlainArray.
   *
   * @param { number } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { T } Element removed.
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  removeAt(index: number): T;

  /**
   * Remove the key-value pair at a specified index if it exists and return the value
   *
   * @param { int } index - target subscript for search
   *     The value should be an integer.
   * @returns { T | undefined } the T type, or undefined if container is empty
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  removeAt(index: int): T | undefined;

  /**
   * Removes elements within the specified range.
   *
   * @param { int } index - Start position of the elements to remove. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @param { int } size - Number of elements to remove. The value must be less than or equal to int32_max, that is, 214
   *     7483647.
   * @returns { int } Number of elements removed.
   * @throws { BusinessError } 10200011 - The removeRangeFrom method cannot be bound.
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
  removeRangeFrom(index: int, size: int): int;
  /**
   * Sets a value for an element at the specified position in this PlainArray.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @param { T } value - Value of the target element.
   * @throws { BusinessError } 10200011 - The setValueAt method cannot be bound.
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
  setValueAt(index: int, value: T): void;
  /**
   * Obtains a string that contains all elements in this PlainArray.
   *
   * @returns { String } String obtained.
   * @throws { BusinessError } 10200011 - The toString method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * Obtains the value of an element at the specified position in this PlainArray.
   *
   * @param { int } index - Position index of the target element. The value must be less than or equal to int32_max,
   *     that is, 2147483647.
   * @returns { T } Value of the element. If no match is found, **undefined** is returned.
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
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
  getValueAt(index: int): T;
  /**
   * Uses a callback to traverse each element in the **PlainArray** instance.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the PlainArray.
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
  forEach(callbackFn: (value: T, index?: number, PlainArray?: PlainArray<T>) => void, thisArg?: Object): void;

  /**
   * Executes a provided function once for each value in the PlainArray object.
   *
   * @param { PlainArrayForEachCb<T> } callbackFn - callbackFn
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: PlainArrayForEachCb<T>): void;

  /**
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<[number, T]> }
   * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  [Symbol.iterator](): IterableIterator<[number, T]>;

  /**
   * returns an iterator. Each item of the iterator is a ArkTS Object
   *
   * @returns { IterableIterator<[int, T]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<[int, T]>;

}

/**
 * The type of PlainArray callback function.
 *
 * @param { T } value - The value of current element
 * @param { int } key - The key of current element
 *     The value should be an integer.
 * @param { PlainArray<T> } PlainArray - The PlainArray instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 23 static
 */
export type PlainArrayForEachCb<T> = (value: T, key: int, PlainArray: PlainArray<T>) => void;

export default PlainArray;