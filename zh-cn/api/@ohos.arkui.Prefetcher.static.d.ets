
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

import { IDataSource } from '@ohos.arkui.component';

import { IDataSource } from './arkui/component/lazyForEach';

/**
* 用于实现具有预加载能力的LazyForEach数据源。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDataSourcePrefetching<T> extends IDataSource<T> {

  /**
   * 预加载数据源中的指定项。
   * 该方法可以为同步，也可以为异步。
   *
   * @param { int } index - 指定项的序号。
   * @returns { Promise<void> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  prefetch(index: int): Promise<void> | undefined;

  /**
   * 取消指定数据项的预加载。
   * 该方法可以为同步，也可以为异步。
   *
   * @param { int } index - 指定项的序号。
   * @returns { Promise<void> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cancel(index: int): Promise<void> | undefined;
}

/**
* 该接口用于提供预加载操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface IPrefetcher<T> {

  /**
   * 设置prefetcher对象的数据源。
   *
   * @param { IDataSourcePrefetching<T> } dataSource - 支持预加载的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setDataSource(dataSource: IDataSourcePrefetching<T>): void;

  /**
   * 通知prefetcher屏幕显示范围发生变化。
   *
   * @param { int } minVisible - 显示范围内第一个元素的序号。
   * @param { int } maxVisible - 显示范围内最后一个元素的序号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  visibleAreaChanged(minVisible: int, maxVisible: int): void;
}

/**
* 一种IPrefetcher的基础实现。
* 此prefetcher提供了一种智能预加载算法，可以根据显示区域的实时变化以及预加载耗时的变化来确定预加载范围并加载数据项，并且可以根据用户的滚动操作来取消相应数据项的预加载请求。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BasicPrefetcher<T> implements IPrefetcher<T> {

  /**
   * 构建一个基础的prefetcher，并在构建时可以按需设置数据源。
   *
   * @param { IDataSourcePrefetching<T> } [dataSource] - 支持预加载的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(dataSource?: IDataSourcePrefetching<T>);

  /**
   * 设置prefetcher对象的数据源。
   *
   * @param { IDataSourcePrefetching<T> } dataSource - 支持预加载的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setDataSource(dataSource: IDataSourcePrefetching<T>): void;

  /**
   * 通知prefetcher屏幕显示范围发生变化。
   *
   * @param { int } minVisible - 显示范围内第一个元素的序号。
   * @param { int } maxVisible - 显示范围内最后一个元素的序号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  visibleAreaChanged(minVisible: int, maxVisible: int): void;
}