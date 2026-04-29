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
 * LightWeightSet stores a set of values, each of which must be unique.
 * LightWeightSet is based on generics and uses a lightweight structure. Its default initial capacity is 8, and it has 
 * the capacity doubled in each expansion.
 * The values in such a set are searched using hash values, which are stored in an array.
 * Compared with [HashSet]{@link @ohos.util.HashSet}, which can also store values, LightWeightSet occupies less memory.
 * **Recommended use case**: Use LightWeightSet when you need a set that has only unique elements or need to deduplicate
 * a set.
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
 * LightWeightSet stores a set of values, each of which must be unique.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class LightWeightSet<T> {
  /**
   * A constructor used to create a **LightWeightSet** instance.
   *
   * @throws { BusinessError } 10200012 - The LightWeightSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a LightWeightSet.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;

  /**
   * Gets the element number of the LightWeightSet.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;

  /**
   * Adds an element to this LightWeightSet.
   *
   * @param { T } obj - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the element is added; otherwise, **false**
   *     is returned.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  add(obj: T): boolean;
  /**
   * Adds all elements in a LightWeightSet to this LightWeightSet.
   *
   * @param { LightWeightSet<T> } set - LightWeightSet whose elements are to be added to the current LightWeightSet.
   * @returns { boolean } Operation result. The value **true** is returned if the element is added; otherwise, **false**
   *     is returned.
   * @throws { BusinessError } 10200011 - The addAll method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  addAll(set: LightWeightSet<T>): boolean;
  /**
   * Checks whether this LightWeightSet contains all elements of the specified LightWeightSet.
   *
   * @param { LightWeightSet<T> } set - **LightWeightSet** instance to be used for comparison.
   * @returns { boolean } Check result. The value **true** is returned if all the elements in the specified
   *     LightWeightSet are contained; otherwise, **false** is returned.
   * @throws { BusinessError } 10200011 - The hasAll method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  hasAll(set: LightWeightSet<T>): boolean;
  /**
   * Checks whether this LightWeightSet has the specified key.
   *
   * @param { T } key - Target key.
   * @returns { boolean } Check result. The value **true** is returned if the specified key is contained; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  has(key: T): boolean;
  /**
   * Checks whether the elements of this LightWeightSet are the same as those of **obj**.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 12. There is no substitute API.
   *
   * @param { Object } obj - **LightWeightSet** instance to be used for comparison.
   * @returns { boolean } Returns **true** if **obj** is a LightWeightSet or an array containing only strings or numbers
   *     and the elements in them are the same; returns **false** in other cases.
   * @throws { BusinessError } 10200011 - The equal method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @since 8 dynamiconly
   * @deprecated since 12
   */
  equal(obj: Object): boolean;
  /**
   * Increases the capacity of this LightWeightSet. If the passed-in capacity is greater than or equal to the number of
   * elements in this LightWeightSet, the capacity is changed to the new capacity. If the passed-in capacity is less
   * than the number of elements in this LightWeightSet, the capacity is not changed.
   *
   * @param { int } minimumCapacity - Minimum number of elements to accommodate in this LightWeightSet.
   * @throws { BusinessError } 10200011 - The increaseCapacityTo method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of minimumCapacity is out of range.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  increaseCapacityTo(minimumCapacity: int): void;
  /**
   * Obtains the position index of the element with the specified key in this LightWeightSet.
   *
   * @param { T } key - Key of the target element.
   * @returns { int } Position index of the element. If the element does not exist, a negative value is returned. The
   *     negative value consists of a minus sign and the position where the element (if available) should be. The
   *     position starts from 1.
   * @throws { BusinessError } 10200011 - The getIndexOf method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  getIndexOf(key: T): int;
  /**
   * Removes an element of the specified key from this LightWeightSet.
   *
   * @param { T } key - Key of the target element.
   * @returns { T } Value of the element removed.
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  remove(key: T): T;

  /**
   * Deletes an object of a specified Object type from an LightWeightSet container
   *
   * @param { T } key - The key of the element to remove
   * @returns { T | undefined } the removed value if it was present, undefined otherwise
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  remove(key: T): T | undefined;

  /**
   * Removes the element at the specified position from this LightWeightSet.
   *
   * @param { int } index - Position index of the element. The value must be less than or equal to int32_max, that is, 2
   *     147483647.
   * @returns { boolean } Operation result. The value **true** is returned if the element is removed; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The removeAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  removeAt(index: int): boolean;
  /**
   * Clears this LightWeightSet and sets its length to **0**.
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
   * Uses a callback to traverse the elements in this LightWeightSet and obtain their position indexes.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the LightWeightSet.
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
  forEach(callbackFn: (value?: T, key?: T, set?: LightWeightSet<T>) => void, thisArg?: Object): void;

  /**
   * Executes the given callback function once for each real key in the map.
   * It does not perform functions on deleted keys.
   *
   * @param { LightWeightSetForEachCb<T> } callbackFn - A callback function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: LightWeightSetForEachCb<T>): void;

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
   * returns an ES6 iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> } an iterator for the LightWeightSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;

  /**
   * Obtains a string that contains all elements in this LightWeightSet.
   *
   * @returns { String } String obtained.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toString(): String;
  /**
   * Obtains an array that contains all objects in this LightWeightSet.
   *
   * @returns { Array<T> } Array obtained.
   * @throws { BusinessError } 10200011 - The toArray method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  toArray(): Array<T>;
  /**
   * Obtains the value of the element at the specified position in this LightWeightSet.
   *
   * @param { number } index - Position index of the element. The value must be less than or equal to int32_max, that is
   *     , 2147483647.
   * @returns { T } Value obtained.
   * @throws { BusinessError } 10200011 - The getValueAt method cannot be bound.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getValueAt(index: number): T;

  /**
   * Obtains the object at the location  identified by index in an LightWeightSet container
   *
   * @param { int } index - The index position to retrieve the value from
   * @returns { T | undefined } the value at the specified index, or undefined if the index out of range
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  getValueAt(index: int): T | undefined;

  /**
   * Returns an iterator that contains all the values in this LightWeightSet.
   *
   * @returns { IterableIterator<T> } Iterator obtained.
   * @throws { BusinessError } 10200011 - The values method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  values(): IterableIterator<T>;
  /**
   * Returns an iterator that contains all the elements in this LightWeightSet.
   *
   * @returns { IterableIterator<[T, T]> } Iterator obtained.
   * @throws { BusinessError } 10200011 - The entries method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * Checks whether this LightWeightSet is empty (contains no element).
   *
   * @returns { boolean } Check result. The value **true** is returned if the LightWeightSet is empty; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The isEmpty method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  isEmpty(): boolean;
}

/**
 * The type of LightWeightSet callback function.
 *
 * @param { T } value - The value of current element
 * @param { T } key - The key of current element(same as value)
 * @param { LightWeightSet<T> } set - The LightWeightSet instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type LightWeightSetForEachCb<T> = (value: T, key: T, set: LightWeightSet<T>) => void;

export default LightWeightSet;