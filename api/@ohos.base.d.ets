/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Defines the basic callback.
 *
 * @typedef { Callback<T> }
 * @syscap SystemCapability.Base
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type Callback<T> = (data: T) => void;

/**
 * Defines the basic error callback.
 *
 * @typedef { ErrorCallback<T extends Error = BusinessError> }
 * @syscap SystemCapability.Base
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ErrorCallback<T extends Error = BusinessError> = (err: T)=> void;

/**
 * Defines the basic async callback.
 *
 * @typedef { AsyncCallback<T, E = void> }
 * @syscap SystemCapability.Base
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type AsyncCallback<T, E = void> = (err: BusinessError<E> | null, data: T | undefined)=> void;

/**
 * Defines the error interface.
 * @syscap SystemCapability.Base
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare class BusinessError<T = void> extends Error {
  /**
  * A constructor used to create a BusinessError object
  * @syscap SystemCapability.Base
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20
  */
  constructor();
  /**
  * A constructor used to create a BusinessError object
  * @params { number } code
  * @params { Error } error
  * @syscap SystemCapability.Base
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20
  */
  constructor(code: number, error: Error);
  /**
  * A constructor used to create a BusinessError object
  * @params { number } code
  * @params { T } data
  * @params { Error } error
  * @syscap SystemCapability.Base
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20
  */
  constructor(code: number, data: T, error: Error);
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @since 6
   */
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
   /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  code: number;
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @since 9
   */
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
   /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  data?: T;
}
