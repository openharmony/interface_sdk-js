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
 * Developers need to implement this interface to provide data to LazyForEach component.
 * The implementation of this interface supports data prefetching.
 *
 * @interface IDataSourcePrefetching
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface IDataSourcePrefetching extends IDataSource {
  /**
   * Prefetch data for specified element of collection.
   * Method can be either synchronous or asynchronous.
   *
   * @param { number } index - Collection element index.
   * @returns { Promise<void> | void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  prefetch(index: number): Promise<void> | void;

  /**
   * Cancel prefetch data for specified element of collection.
   * Method can be either synchronous or asynchronous.
   *
   * @param { number } index - Collection element index.
   * @returns { Promise<void> | void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cancel?(index: number): Promise<void> | void;
}

/**
 * Developers need to implement this interface to provide prefetcher logic.
 *
 * @interface IPrefetcher
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface IPrefetcher {
  /**
   * Set data source. Call this method to bind prefetcher and data source.
   *
   * @param { IDataSourcePrefetching } ds - Data source that supports prefetching.
   * @returns { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setDataSource(ds: IDataSourcePrefetching): void;

  /**
   * Call this method when the visible area boundaries were changed.
   *
   * @param { number } minVisible - Index of the first visible data item.
   * @param { number } maxVisible - Index of the last visible data item.
   * @returns { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}

/**
 * Basic implementation of {@link IPrefetcher}.
 *
 * @implements IPrefetcher
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class BasicPrefetcher implements IPrefetcher {
  /**
   * Construct a basic prefetcher instance and optionally set data source.
   *
   * @param { ?IDataSourcePrefetching } ds - Data source that supports prefetching.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(ds?: IDataSourcePrefetching);

  /**
   * Set data source. Call this method to bind prefetcher and data source.
   *
   * @param { IDataSourcePrefetching } ds - Data source that supports prefetching.
   * @returns { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setDataSource(ds: IDataSourcePrefetching): void;

  /**
   * Call this method when the visible area changed.
   *
   * @param { number } minVisible - Index of the first visible data item.
   * @param { number } maxVisible - Index of the last visible data item.
   * @returns { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}
