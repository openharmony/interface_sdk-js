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
 * 本模块定义了OpenHarmony ArkTS接口的公共回调类型，包括接口调用时出现的公共回调和公共错误信息。这些回调类型为开发者提供了统一的异步处理机制，适用于需要处理异步操作结果、错误信息回传等场景，
 * 可以帮助开发者简化异步编程模型，提高代码的可读性和可维护性。
 *
 * > **说明**
 * >
 * > - 本模块首批接口从API version 6 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 
 * > - 从API version 12开始，本模块接口支持在ArkTS卡片中使用。
 *
 * @file
 * @kit BasicServicesKit
 */

/**
 * 通用回调函数，用于在异步操作完成时回传处理结果。类型由开发者自定义。
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
   *
   * @param { T } data - 接口调用时的公共回调信息。类型由开发者自定义，回调将返回对应类型的数据。
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (data: T): void;
}

/**
 * 通用回调函数，携带错误参数，用于在接口调用失败时回传错误信息。回调返回的信息为[BusinessError]{@link BusinessError}类型的错误参数。
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
   * @param { T } err - 接口调用失败的公共错误信息，类型默认为BusinessError，包含错误码（code）和可选附加数据（data）。
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  (err: T): void;
}

/**
 * 通用回调函数，携带错误参数和异步返回值，用于在异步操作完成时同时回传错误信息或成功数据。错误参数为[BusinessError]{@link BusinessError}类型的信息。
 * 异步返回值的类型由开发者自定义，回调将返回对应类型。
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
   *
   * @param { BusinessError<E> } err - 接口调用失败的公共错误信息。接口调用成功时，此参数返回null
   * @param { T } data - 接口调用成功时的异步返回数据，类型由开发者自定义。接口调用失败时，此参数不可用。
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
   * 接口调用失败时返回的附加错误信息。如果不填，则错误对象不包含附加数据。
   *
   * @syscap SystemCapability.Base
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  data?: T;
}