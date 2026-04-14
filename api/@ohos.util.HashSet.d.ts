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
 * HashSet is implemented based on [HashMap]{@link @ohos.util.HashMap}. In HashSet, only the **value** object is 
 * processed.
 * Unlike [TreeSet]{@link @ohos.util.TreeSet}, which stores and accesses data in sorted order, HashSet sorts data by 
 * hash value. This means that HashSet may use a different order when storing and accessing elements. Both of them allow
 * only unique elements. However, null values are allowed in HashSet, but not in TreeSet, because null values may affect
 * the order of elements in the container.
 * **Recommended use case**: Use HashSet when you need a set that has only unique elements or need to deduplicate a set.
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
 * HashSet is implemented based on HashMap. In HashSet, only the value object is processed.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 8 dynamic
 * @since 23 static
 */
declare class HashSet<T> {
  /**
   * A constructor used to create a **HashSet** instance.
   *
   * @throws { BusinessError } 10200012 - The HashSet's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  constructor();
  /**
   * Number of elements in a HashSet.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  length: number;
  /**
   * Gets the element number of the HashSet.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  get length(): int;
  /**
   * Checks whether this HashSet is empty (contains no element).
   *
   * @returns { boolean } Check result. The value **true** is returned if the HashSet is empty; otherwise, **false** is
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
   * Checks whether this HashSet has the specified element.
   *
   * @param { T } value - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the specified element is contained;
   *     otherwise, **false** is returned.
   * @throws { BusinessError } 10200011 - The has method cannot be bound.
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
  has(value: T): boolean;
  /**
   * Adds elements to this HashSet.
   *
   * @param { T } value - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the element is added; otherwise, **false**
   *     is returned.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
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
  add(value: T): boolean;
  /**
   * Removes an element from this HashSet.
   *
   * @param { T } value - Target element.
   * @returns { boolean } Operation result. The value **true** is returned if the element is removed; otherwise,
   *     **false** is returned.
   * @throws { BusinessError } 10200011 - The remove method cannot be bound.
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
  remove(value: T): boolean;
  /**
   * Clears this HashSet and sets its length to **0**.
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
   * Uses a callback to traverse each element.
   *
   * @param { function } callbackFn - Callback invoked to traverse the elements in the HashSet.
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
  forEach(callbackFn: (value?: T, key?: T, set?: HashSet<T>) => void, thisArg?: Object): void;

  /**
   * Iterates over all elements in the HashSet and executes a callback function for each element.
   *
   * @param { HashSetCbFn<T> } callbackFn - A callback function to execute for each element.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  forEach(callbackFn: HashSetCbFn<T>): void;

  /**
   * Returns an iterator that contains all the values in this HashSet.
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
   * Returns an iterator that contains all the elements in this HashSet.
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
   * returns an iterator.Each item of the iterator is a Javascript Object
   *
   * @returns { IterableIterator<T> } an iterator for the HashSet
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  $_iterator(): IterableIterator<T>;
}

/**
 * The type of HashSet callback function.
 *
 * @param { T } value - The current element being processed
 * @param { T } key - [Deprecated] HashSet does not use key-value pairs, this parameter exists only for API
 *     compatibility
 * @param { HashSet<T> } set - The HashSet instance being traversed
 * @returns { void } This callback does not return a value
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 23 static
 */
export type HashSetCbFn<T> = (value: T, key: T, set: HashSet<T>) => void;

export default HashSet;