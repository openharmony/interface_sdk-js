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

/**
 * @file
 * @kit BasicServicesKit
 */

/**
 * Defines a common callback. You can set **data** to customize the data type of the information returned by the
 * callback.
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export type Callback<T> = (data: T) => void;

/**
 * Defines a common callback that carries an error parameter. The information returned by the callback is of
 * the [BusinessError]{@link BusinessError} type.
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export type ErrorCallback<T extends Error = BusinessError> = (err: T) => void;

/**
 * Defines a common callback that carries an error parameter and asynchronous return value.
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export type AsyncCallback<T, E = void> = (err: BusinessError<E> | null, data: T | undefined) => void;

/**
 * Defines the error parameter.
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export declare class BusinessError<T = void> extends Error {
  /**
   * A constructor used to create a BusinessError object
   *
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor();
  /**
   * A constructor used to create a BusinessError object
   *
   * @param { int } code - Error code information returned when the interface call fails.
   * @param { Error } error - Incorrect parameters.
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, error: Error);
  /**
   * A constructor used to create a BusinessError object
   *
   * @param { int } code - The value range is all integers.
   * @param { T } data - Common callback information during interface invocation.
   * @param { Error } error - Incorrect parameters.
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, data: T, error: Error);
  /**
   * A constructor used to create a BusinessError object
   *
   * @param { int } code - Error code information returned when the interface call fails.
   * @param { string } message - The error message description returned when the interface call fails.
   * @param { T } [data] - Common callback information during interface invocation.
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, message: string, data?: T);

  /**
   * Defines the additional information for business
   *
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  public data?: T;
 }

/**
 * In ArkTS static typing, for literals where the hierarchy and the number
 * of attributes per level are uncertain, you can use RecordData for initialization.
 *
 * @unionmember { undefined } Undefined type.
 * @unionmember { null } Null type.
 * @unionmember { Object } Object type.
 * @unionmember { Record<string, RecordData> } Record type with string keys and RecordData values.
 * @unionmember { Array<RecordData> } Array type containing RecordData elements.
 * @syscap SystemCapability.Base
 * @since 23 staticonly
 */
export type RecordData = undefined | null | Object | Record<string, RecordData> | Array<RecordData>;