/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @typedef { Callback } [since 6 - 11]
 * @typedef { Callback<T> } [since 12]
 * @syscap SystemCapability.Base
 * @crossplatform [since 10]
 * @form [since 12]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface Callback<T> {
  /**
   * Common callback information.
   *
   * @param { T } data
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (data: T): void;
}

/**
 * Defines a common callback that carries an error parameter. The information returned by the callback is of
 * the [BusinessError]{@link BusinessError} type.
 *
 * @typedef ErrorCallback [since 6 - 10]
 * @typedef ErrorCallback<T extends Error = BusinessError> [since 11]
 * @syscap SystemCapability.Base
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface ErrorCallback<T extends Error = BusinessError> {
  /**
   * Common error information about the API invoking failure.
   *
   * @param { T } err
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (err: T): void;
}

/**
 * Defines a common callback that carries an error parameter and asynchronous return value.
 *
 * @typedef AsyncCallback [since 6 - 11]
 * @typedef AsyncCallback<T, E = void> [since 12]
 * @syscap SystemCapability.Base
 * @crossplatform [since 10]
 * @form [since 12]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface AsyncCallback<T, E = void> {
  /**
   * Defines a common callback that carries an error parameter and asynchronous return value.The error parameter is of
   * the [BusinessError]{@link BusinessError} type. The type of the asynchronous return value is defined by the
   * developer.
   *
   * @param { BusinessError<E> } err Common error information about the API invoking failure.
   * @param { T } data Common callback information.
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (err: BusinessError<E>, data: T): void;
}

/**
 * Defines the error parameter.
 *
 * @typedef BusinessError [since 6 - 11]
 * @typedef BusinessError<T = void> [since 12]
 * @syscap SystemCapability.Base
 * @crossplatform [since 10]
 * @form [since 12]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface BusinessError<T = void> extends Error {
  /**
   * Common error information about the API invoking failure.
   *
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  code: number;
  /**
   * Common callback information. If this parameter is left empty, no related information is returned.
   *
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  data?: T;
}