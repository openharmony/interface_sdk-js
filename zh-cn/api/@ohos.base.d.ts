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
 * 通用回调函数。开发者在使用时，可自定义data的类型，回调将返回对应类型的信息。
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
   * 接口调用时的公共回调信息。
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
 * 通用回调函数，携带错误参数。回调返回的信息为[BusinessError]{@link BusinessError}类型的信息。
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
   *
   * @param { T } err 接口调用失败的公共错误信息。
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (err: T): void;
}

/**
 * 通用回调函数，携带错误参数和异步返回值。
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
   * 通用回调函数，携带错误参数和异步返回值。错误参数为[BusinessError]{@link BusinessError}类型的信息。异步返回值的类型由开发者自定义，回调将返回对应类型的信息。
   *
   * @param { BusinessError<E> } err 接口调用失败的公共错误信息。
   * @param { T } data 接口调用时的公共回调信息。
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (err: BusinessError<E>, data: T): void;
}

/**
 * 错误参数。
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
   * 接口调用失败返回的错误码信息。
   *
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  code: number;
  /**
   * 接口调用时的公共回调信息。如果不填，则回调不返回相关信息。
   *
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  data?: T;
}