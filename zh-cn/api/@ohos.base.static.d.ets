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
 * The **Base** module defines the public callback types of ArkTS APIs, including the common and error callbacks.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this module are supported since API version 6. Newly added APIs will be marked with a
 * >   superscript to indicate their earliest API version.
 * > 
 * > - Since API version 12, the APIs of this module are supported in ArkTS widgets.
 *
 * @file
 * @kit BasicServicesKit
 */

/**
* 通用回调函数。开发者在使用时，可自定义data的类型，回调将返回对应类型的信息。
*
 * @syscap SystemCapability.Base
 * @param { T } data 接口调用时的公共回调信息。
 * @since 23 static
 */
export type Callback<T> = (data: T) => void;

/**
* 通用回调函数，携带错误参数。回调返回的信息为[BusinessError]{@link BusinessError}类型的信息。
*
 * @syscap SystemCapability.Base
 * @param { T } err 接口调用失败的公共错误信息。
 * @since 23 static
 */
export type ErrorCallback<T extends Error = BusinessError> = (err: T) => void;

/**
* 通用回调函数，携带错误参数和异步返回值。错误参数为[BusinessError]{@link BusinessError}类型的信息。异步返回值的类型由开发者自定义，回调将返回对应类型的信息。
*
 * @syscap SystemCapability.Base
 * @param { BusinessError } err Common error information about the API invoking failure.
 * @param { T } data 接口调用时的公共回调信息。
 * @since 23 static
 */
export type AsyncCallback<T, E = void> = (err: BusinessError<E> | null, data: T | undefined) => void;

/**
* 错误参数。
*
 * @syscap SystemCapability.Base
 * @param { T } data 接口调用时的公共回调信息。如未填写，则回调不返回相关信息。
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
   * @param { int } code - 接口调用失败返回的错误码信息。
   * @param { Error } error - 错误参数。
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, error: Error);

  /**
   * BusinessError的构造函数。
   *
   * @param { int } code - 接口调用失败返回的错误码信息。
   * @param { T } data - 接口调用时的公共回调信息。
   * @param { Error } error - 错误参数。
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, data: T, error: Error);

  /**
   * BusinessError的构造函数。
   *
   * @param { int } code - 接口调用失败返回的错误码信息。
   * @param { string } message - 接口调用失败返回描述信息。
   * @param { T } data - 接口调用时的公共回调信息。
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  constructor(code: int, message: string, data?: T);

  /**
   * 接口调用时的公共回调信息。如果不填，则回调不返回相关信息。
   *
   * @syscap SystemCapability.Base
   * @since 23 static
   */
  public data?: T;
}

/**
* RecordData 是一个联合类型，用于层级和每层数量都不确定的对象结构。
*
 * @unionmember { undefined } Undefined  Undefined 未定义类型。
 * @unionmember { null } Null  Null 空类型。
 * @unionmember { Object } Object  Object 对象类型。
 * @unionmember { Record<string, RecordData> } Record  Record 带有字符串键和RecordData值的记录类型。
 * @unionmember { Array<RecordData> } Array  Array 包含RecordData元素的数组类型。
 * @syscap SystemCapability.Base
 * @since 23 staticonly
 */
export type RecordData = undefined | null | Object | Record<string, RecordData> | Array<RecordData>;