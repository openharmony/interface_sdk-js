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
 * 通用回调函数。开发者在使用时，可自定义data的类型，回调将返回对应类型的信息。
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export type Callback<T> = (data: T) => void;

/**
 * 通用回调函数，携带错误参数。回调返回的信息为[BusinessError]{@link BusinessError}类型的信息。
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export type ErrorCallback<T extends Error = BusinessError> = (err: T) => void;

/**
 * 通用回调函数，携带错误参数和异步返回值。错误参数为[BusinessError]{@link BusinessError}类型的信息。异步返回值的类型由开发者自定义，回调将返回对应类型的信息。
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export type AsyncCallback<T, E = void> = (err: BusinessError<E> | null, data: T | undefined) => void;

/**
 * 错误参数。
 *
 * @syscap SystemCapability.Base
 * @since 23 static
 */
export declare class BusinessError<T = void> extends Error {
  /**
   * BusinessError的构造函数。
   *
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor();
  /**
    * BusinessError的构造函数。
    *
   * @param { int } code - 接口调用失败返回的错误码信息
    *     <br>取值范围为全体整数。
   * @param { Error } error - 错误参数。
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, error: Error);
  /**
    * BusinessError的构造函数。
    *
   * @param { int } code - 接口调用失败返回的错误码信息
    *     <br>取值范围为全体整数。
   * @param { T } data - 接口调用时的公共回调信息。
   * @param { Error } error - 错误参数。
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, data: T, error: Error);
  /**
    * BusinessError的构造函数。
    *
   * @param { int } code - 接口调用失败返回的错误码信息
    *     <br>取值范围为全体整数。
   * @param { string } message - 接口调用失败返回的错误信息描述。
   * @param { T } [data] - 接口调用时的公共回调信息。
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, message: string, data?: T);

  /**
   * 定义与业务相关的附加信息。
   *
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  public data?: T;
 }

/**
 * RecordData 是一个联合类型，用于层级和每层数量都不确定的对象结构。
 *
 * @
 * @unionmember { undefined } Undefined type.
 * @unionmember { null } Null type.
 * @unionmember { Object } Object type.
 * @unionmember { Record<string, RecordData> } Record type with string keys and RecordData values.
 * @unionmember { Array<RecordData> } Array type containing RecordData elements.
 * @syscap SystemCapability.Base
 * @since 23 staticonly
 */
export type RecordData = undefined | null | Object | Record<string, RecordData> | Array<RecordData>;