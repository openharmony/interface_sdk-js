/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Used in conjunction with **LazyForEach**, the **Prefetcher** module provides content prefetching capabilities for 
 * container components such as **List**, **Grid**, **WaterFlow**, and **Swiper** during scrolling, to enhance the user 
 * browsing experience.
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module cannot be used in the Previewer.
 * 
 * ###### Supplementary Notes
 * 
 * You can also use the OpenHarmony third-party library 
 * [@netteam/prefetcher](https://ohpm.openharmony.cn/#/en/detail/@netteam%2Fprefetcher) to implement the prefetching 
 * functionality. This library provides additional APIs for more convenient and efficient data prefetching.
 *
 * @file Prefetching
 * @kit ArkUI
 */

/**
 * Extends the [IDataSource]{@link IDataSource} API to add data prefetching capability to your data source.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface IDataSourcePrefetching extends IDataSource {

  /**
   * Prefetches a specified data item from the dataset. This API can be either synchronous or asynchronous.
   *
   * @param { number } index - Index of the data item to prefetch.
   * @returns { Promise<void> | void } Promise when this API is executed asynchronously; no return value when this API
   *     is executed synchronously. The promise only indicates that the operation is completed and contains no actual
   *     return content.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  prefetch(index: number): Promise<void> | void;

  /**
   * Cancels the prefetching of a specified data item from the dataset. This API can be either synchronous or
   * asynchronous.
   *
   * @param { number } index - Index of the data item to cancel prefetching for.
   * @returns { Promise<void> | void } Promise when this API is executed asynchronously; no return value when this API
   *     is executed synchronously. The promise only indicates that the operation is completed and contains no actual
   *     return content.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancel?(index: number): Promise<void> | void;
}

/**
 * Provides prefetching capabilities.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface IPrefetcher {

  /**
   * Sets the prefetching-capable data source to bind to the **Prefetcher**.
   *
   * @param { IDataSourcePrefetching } dataSource - Prefetching-capable data source.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDataSource(dataSource: IDataSourcePrefetching): void;

  /**
   * Called when the boundaries of the visible area change. This API works with the **List**, **Grid**, **WaterFlow**,
   * and **Swiper** components.
   *
   * @param { number } minVisible - Upper bound of the visible area.
   * @param { number } maxVisible - Lower bound of the visible area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}

/**
 * **BasicPrefetcher** is a fundamental implementation of **IPrefetcher**. It offers an intelligent data prefetching
 * algorithm that decides the data items to prefetch based on real-time changes in the visible area on the screen and
 * variations in the prefetch duration. It can also determine the prefetch requests to be canceled based on the user's
 * scrolling actions.
 *
 * **BasicPrefetcher** objects do not support JSON serialization.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class BasicPrefetcher implements IPrefetcher {

  /**
   * A constructor used to create a prefetching-capable data source to bind to the **Prefetcher**.
   *
   * @param { IDataSourcePrefetching } dataSource - Prefetching-capable data source.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(dataSource?: IDataSourcePrefetching);

  /**
   * Sets the prefetching-capable data source to bind to the **Prefetcher**.
   *
   * @param { IDataSourcePrefetching } dataSource - Prefetching-capable data source.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDataSource(dataSource: IDataSourcePrefetching): void;

  /**
   * Called when the boundaries of the visible area change. This API works with the **List**, **Grid**, **WaterFlow**,
   * and **Swiper** components.
   *
   * @param { number } minVisible - Upper bound of the visible area.
   * @param { number } maxVisible - Lower bound of the visible area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}