/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Defines the basic callback.
 * @syscap SystemCapability.Base
 * @typedef Callback
 * @since 6
 */
export interface Callback<T> {
  /**
   * Defines the callback info.
   * @param { T } data
   * @since 6
   */
  (data: T): void;
}

/**
 * Defines the basic error callback.
 * @syscap SystemCapability.Base
 * @typedef ErrorCallback
 * @since 6
 */
export interface ErrorCallback<T extends Error = BusinessError> {
  /**
   * Defines the basic error callback.
   * @param { T } err
   * @since 6
   */
  (err: T): void;
}

/**
 * Defines the basic async callback.
 * @syscap SystemCapability.Base
 * @typedef AsyncCallback
 * @since 6
 */
export interface AsyncCallback<T, E = void> {
  /**
   * Defines the callback data.
   * @param { BusinessError<E> } err
   * @param { T } data
   * @since 6
   */
  (err: BusinessError<E>, data: T): void;
}

/**
 * Defines the error interface.
 * @syscap SystemCapability.Base
 * @typedef BusinessError
 * @since 6
 */
export interface BusinessError<T = void> extends Error {
  /**
   * Defines the basic error code.
   * @type { number } code
   * @since 6
   */
  code: number;
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @since 9
   */
  data?: T;
}
